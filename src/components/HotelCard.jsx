import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Popover, Input, DatePicker, Select, InputNumber } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
// import locale from 'antd/es/date-picker/locale/zh_CN';
import fetcher from '../services/fetchMiddleware';

const { RangePicker } = DatePicker;

const HotelCard = () => {
  const [open, setOpen] = useState(false);
  const [openPerson, setOpenPerson] = useState(false);
  const [hotCity, setHotCity] = useState({ dCities: [], foreignCities: [] });
  const [cityName, setCityName] = useState('上海');
  const [day, setDay] = useState(1);
  const [hotelLevel, setHotelLevel] = useState('');
  const [keyWord, setKeyWord] = useState('');
  const [room, setRoom] = useState(1);
  const [person, setPerson] = useState(1);
  const [child, setChild] = useState(0);

  const hotelLevelOptions = [
    { value: '2', label: '二星（钻）' },
    { value: '3', label: '三星（钻）' },
    { value: '4', label: '四星（钻）' },
    { value: '5', label: '五星（钻）' },
  ];

  /**
   * 获取城市列表
   */
  const getCityList = async () => {
    const cityList = await fetcher('/api/queryHotCities');
    setHotCity(cityList);
  };

  useEffect(() => {
    getCityList();
  }, []);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const handleOpenPersonChange = (newOpen) => {
    setOpenPerson(newOpen);
  };

  /**
   * 选择目的地
   * @param {*} item 
   */
  const handleCityChange = (item) => {
    handleOpenChange(false);
    setCityName(item.name);
  };

  // 目的地弹窗内容
  const content = () => {
    return (
      <div className="w-[380px] rounded-t">
        <header className="font-bold bg-gray-200 rounded-t h-[26px] pt-1 pl-2">国内热门城市</header>
        <div className="flex flex-wrap my-[4px] ml-[4px]">
          {(hotCity.dCities || []).map((item, index) => {
            return (
              <div 
                key={index}
                className="city-select-item w-[62px] h-[34px] leading-[34px] mr-[12px] rounded cursor-pointer text-center text-sm text-gray-800"
                onClick={() => handleCityChange(item)}
              >
                {item.name}
              </div>
            )
          })}
        </div>
        <header className="font-bold bg-gray-200 rounded-t h-[26px] pt-1 pl-2">海外热门城市</header>
        <div className="flex flex-wrap my-[4px] ml-[4px]">
          {(hotCity.foreignCities || []).map((item, index) => {
            return (
              <div 
                key={index}
                className="city-select-item w-[62px] h-[34px] leading-[34px] mr-[12px] rounded cursor-pointer text-center text-sm text-gray-800"
                onClick={() => handleCityChange(item)}
              >
                {item.name}
              </div>
            )
          })}
        </div>
      </div> 
    )
  };

  // 房间、人数弹窗
  const contentPerson = () => {
    return (
      <div className="w-[240px] rounded-t">
        <div className="flex justify-between items-center">
          <span className="text-sm">房间</span>
          <InputNumber min={0} value={room} onChange={(value) => setRoom(value)} />
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm">成人<span className="text-xs ml-1">18岁以上</span></span>
          <InputNumber min={0} value={person} onChange={(value) => setPerson(value)} />
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm">儿童<span className="text-xs ml-1">0-17岁</span></span>
          <InputNumber min={0} value={child} onChange={(value) => setChild(value)} />
        </div>
      </div> 
    )
  };

  const onDateChange = (date) => {
    const day = dayjs(date[1]).diff(dayjs(date[0]), 'day');
    setDay(day);
  };

  return (
    <div className="relative min-w-[498px] h-[264px] mb-3 hotel__bg rounded-lg">
      <div className="absolute w-[380px] h-[100px] hotel__bg-img" />
      <div className="relative h-[76px] flex justify-between items-center px-[16px] z-10">
        <div className="text-white text-2xl font-bold">
          预定酒店
        </div>
        <div className="relative h-[28px] w-[157px] mr-3">
          <Image src={'/assets/easy-stay.png'} alt="easy-stay" fill />
        </div>
      </div>

      <div className="relative px-[16px] text-current text-2xl z-10">
        <div className="flex w-full h-[74px] mb-[12px] bg-white rounded">
          <div className="w-[312px] p-4">
            <div className="text-sm mb-1">目的地/酒店名称</div>
            
            <Popover
              content={content}
              arrow={false}
              placement="bottomLeft"
              trigger="click"
              open={open}
              onOpenChange={handleOpenChange}
            >
              <Input
                className="input-city text-base font-bold"
                bordered={false}
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                placeholder="城市、机场、区域、地标或酒店名称"
              />
            </Popover>
          </div>
          <Divider className="h-12 mt-4" type="vertical" />
          <div className="relative w-[394px] p-4">
            <div className="flex justify-between text-sm mb-1">
              <span>入住</span>
              <span>退房</span>
            </div>
            <Divider className="absolute top-0 custom-divider">
              <span className="text-xs font-normal">{day}晚</span>
            </Divider>

            <RangePicker
              className="range-picker-custom w-full text-base font-bold"
              allowClear={false}
              bordered={false}
              // locale={locale}
              placement="bottomLeft"
              defaultValue={[dayjs(), dayjs().add(1, 'day')]}
              format="M月D日(ddd)"
              onChange={onDateChange}
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex w-[528px] h-[74px] bg-white rounded mr-[12px]">
            <div className="w-[138px] p-4">
              <div className="text-sm mb-1">房间及住客</div>
              <Popover
                content={contentPerson}
                arrow={false}
                placement="bottomLeft"
                trigger="click"
                open={openPerson}
                onOpenChange={handleOpenPersonChange}
              >
                <div className="text-base font-bold">{room}间，{person + child}位</div>
              </Popover>
            </div>
            <Divider className="h-12 mt-4" type="vertical" />
            <div className="w-[174px] p-4 px-2">
              <div className="text-sm mb-1">酒店级别</div>
              <Select
                className="hotel-level input-city text-base font-bold"
                value={hotelLevel || '不限'}
                bordered={false}
                options={hotelLevelOptions}
                onChange={(val) => setHotelLevel(val)}
              />
            </div>
            <Divider className="h-12 mt-4" type="vertical" />
            <div className="w-[214px] p-4">
              <div className="text-sm mb-1">关键词（选填）</div>
              <Input
                className="input-city text-base font-bold"
                bordered={false}
                value={keyWord}
                onChange={(e) => setKeyWord(e.target.value)}
                placeholder="机场/火车站/酒店名称"
              />
            </div>
          </div>
          <Button className="search-btn font-bold text-xl text-white" type="primary" icon={<SearchOutlined />}>
            搜索
          </Button>
        </div>
      </div>
    </div>
  )
};

export default HotelCard;