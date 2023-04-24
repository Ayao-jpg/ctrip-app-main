'use client';
import { useState, useEffect } from 'react';
import { Popover } from 'antd';

const CitySelectComponent = ({ cityList, city, onCityChange }) => {
  const [cityOptions, setCityOptions] = useState([]);
  const [cityMoreOptions, setCityMoreOptions] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCityOptions(cityList.slice(0, 4));
    setCityMoreOptions(cityList.slice(4, -1));
  }, [cityList]);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  /**
   * 选择更多时，将 cityMoreOptions 中当前选项移除，添加到 cityOptions 中最后一个选项
   * 将 cityOptions 最后一个选项 移除，添加到 cityMoreOptions 中
   * 并通知父组件替换当前选择项
   * 关闭选择框
   * @param {*} item 
   */
  const handleMoreCityChange = (item) => {
    const lastOptions = cityOptions.slice(-1);
    const newCityOptions = cityOptions.slice(0, 3);
    const newCityMoreOptions = cityMoreOptions.filter((city) => city.code !== item.code);
    setCityOptions([...newCityOptions, item]);
    setCityMoreOptions([...lastOptions, ...newCityMoreOptions]);
    onCityChange(item);
    setOpen(false);
  };

  const content = () => {
    return (
      <div className="flex flex-wrap w-[380px] h-[264px] pl-2 py-2">
        {cityMoreOptions.map((item, index) => {
          return (
            <div 
              key={index}
              className="city-select-item w-[62px] h-[34px] leading-[34px] mr-[12px] rounded cursor-pointer text-center text-sm font-bold text-gray-800"
              onClick={() => handleMoreCityChange(item)}
            >
              {item.name}
            </div>
          )
        })}
      </div> 
    )
  };

  return (
    <div className="city-select-component flex">
      {
        cityOptions.map((item, index) => {
          return (
            <div 
              key={index}
              className={`city-select-item w-[62px] h-[34px] leading-[34px] mr-[12px] rounded cursor-pointer text-center text-sm font-bold text-gray-800 ${city === item.code ? 'active' : ''}`}
              onClick={() => onCityChange(item)}
            >
              {item.name}
            </div>
          )
        })
      }
      <Popover
        content={content}
        placement="bottomRight"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <div className="city-select-item w-[62px] h-[34px] leading-[34px] mr-[12px] rounded cursor-pointer text-center text-sm font-bold text-gray-800">
          更多
          { open ? <i className="pc_home-dropup tl_icon_dropdown_lExig align-middle" /> : <i className="pc_home-dropdown tl_icon_dropdown_lExig align-middle" /> }
        </div>
      </Popover>
    </div>
  )
}

export default CitySelectComponent;