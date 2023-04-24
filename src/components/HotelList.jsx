'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Space, Badge } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import CitySelectComponent from './CitySelectComponent';
import 'swiper/swiper-bundle.min.css';
import fetcher from '../services/fetchMiddleware';

const HotelList = () => {
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState('shanghai');
  const [hotel, setHotel] = useState([]);

  /**
   * 获取城市列表
   */
  const getCityList = async () => {
    const cityList = await fetcher('/api/queryCities');
    setCity(cityList[0].code)
    setCityList(cityList);
  };

  useEffect(() => {
    getCityList();
  }, []);

  /**
   * 获取酒店列表
   */
  const getHotelList = async () => {
    const { list } = await fetcher('/api/queryCityHotelList', { method: 'POST', body: city });
    setHotel(list);
  };

  useEffect(() => {
    getHotelList();
  }, [city]);

  const onCityChange = (item) => {
    setCity(item.code);
  };

  return (
    <div className="relative w-full ml-3 mt-[28px] mb-8">
      <div className="flex justify-between items-center h-[34px] mb-[20px]">
        <div className="text-black text-xl font-bold">
          酒店<span className="recommend-text">推荐</span>
        </div>
        <CitySelectComponent cityList={cityList} city={city} onCityChange={onCityChange} />
      </div>

      <Swiper
        navigation={true}
        slidesPerView={3}
        modules={[Navigation]}
        slidesPerGroup={3}
      >
        {
          hotel.map((item, index) => {
            const starBadge = Array(item.star).fill(1);
            return (
              <SwiperSlide key={index}>
                <div className="relative h-[285px] w-[230px] mr-3 rounded-lg cursor-pointer shadow-custom">
                  <span className="absolute right-1 top-1 z-10 text-xs text-gray-400">广告</span>
                  <div className="relative h-[160px] w-full overflow-hidden hotel-list-img">
                    <Image className="rounded-t-lg" src={item.src} alt="hotel1" fill />
                  </div>
                  <div className="p-3 h-[125px]">
                    <h3 className="my-0 text-black text-base font-bold truncate">{item.title}</h3>
                    <Space>
                      {starBadge.map((k, i) => (
                        <Badge key={i} color="yellow" />
                      ))}
                    </Space>
                    <div className="flex">
                      <div className="w-[48px] h-[24px] bg-blue-500 rounded pl-1">
                        <span className="font-bold text-white">{item.score}</span>
                        <span className="text-gray-50 text-sm">/5</span>
                      </div>
                      <div className="text-blue-500 text-sm ml-1 leading-7">{item.starDes}</div>
                    </div>
                    <div className="flex justify-between mt-2">
                      <div className="text-sm">{item.comment}条点评</div>
                      <div className="font-bold text-blue-500">￥{item.price}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
};

export default HotelList;