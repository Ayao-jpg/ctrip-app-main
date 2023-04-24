import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';
import fetcher from '../services/fetchMiddleware';

const AdBanner = () => {
  const [rightBannerList, setRightBannerList] = useState([]);

  /**
   * 获取右侧广告列表
   */
  const queryRightBannerList = async () => {
    try {
      const rightBannerList = await fetcher('/api/queryRightBannerList');
      setRightBannerList(rightBannerList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    queryRightBannerList();
  }, []);

  return (
    <div className="w-[428px] h-[680px] right-banner">
      <Carousel autoplay autoplaySpeed={5000}>
        {rightBannerList.map((item, index) => {
          return (
            <div key={index} className="relative w-[428px] h-[680px] cursor-pointer">
              <div className="relative w-full h-full">
                <Image className="rounded-lg" src={item.src} alt={item.src} width="428" height="680" />
              </div>
              <div className="absolute left-5 top-4 text-white font-bold">
                <span className="block text-lg">{item.title}</span>
                <span className="block text-sm">{item.temperature}</span>
              </div>

              <div className="absolute right-2 top-4  text-white font-bold">
                {item.hotelList.map(val => {
                  return (
                    <div key={val.src} className="flex w-[180x] h-[44px] p-[4px] mb-[12px] mini-hotel-list rounded-lg">
                      <div className="relative w-[44px] h-[44px]">
                        <Image className="rounded-lg" src={val.src} alt={val.src} width="44" height="44" />
                      </div>
                      <div className="ml-[8px]">
                        <span className="block text-sm w-[112px] truncate">{val.title}</span>
                        <span className="block text-xs">{val.price}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })
        }
      </Carousel>
    </div>
  )
};

export default AdBanner;