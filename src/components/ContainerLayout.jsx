'use client';

import { useState } from 'react';
import SiderMenu from './SiderMenu';
import HeaderTop from './HeaderTop';
import HotelCard from './HotelCard';
import ImageBanner from './ImageBanner';
import HotelList from './HotelList';
import AdBanner from './AdBanner';

const ContainerLayout = () => {
  const [collapse, setCollapse] = useState(false);
  const [menu, setMenu] = useState('hotel-1');
  const [parentMenu, setParentMenu] = useState('hotel');

  /**
   * @description: 侧边栏收缩
   */
  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  /**
   * 点击切换菜单，以 menuName 为准
   * @param {*} parentMenuName 
   * @param {*} menuName 
   */
  const handleMenuChange = (parentMenuName, menuName) => {
    setMenu(menuName);
    setParentMenu(parentMenuName);
  };

  return (
    <div className="flex">
      <div className={`h-screen left-sider flex flex-col ${collapse ? 'w-[76px]' : 'w-[164px]'}`}>
        <div className="lsn_top_button_wrap_t3-TA">
          <div className="lsn_button_icon_dvatN" onClick={handleCollapse}>
            <div className="pc_home-tabbtnIcon lsn_ico_9C9TD" />
          </div>
        </div>

        <SiderMenu
          collapse={collapse}
          parentMenu={parentMenu}
          menu={menu}
          handleMenuChange={handleMenuChange}
        />
      </div>

      <div className="flex-1">
        <HeaderTop />

        <div className="flex max-w-[1180px] min-w-[1080px] h-[72px] mx-auto">
          <div className="w-[740px] mr-3">
            <HotelCard />
            <ImageBanner />
            <HotelList />
          </div>

          <AdBanner />
        </div>
      </div>
    </div>
  );
};

export default ContainerLayout;