'use client';

import { useState, useEffect } from 'react';
import { Popover } from 'antd';
import fetcher from '../services/fetchMiddleware';

const SiderMenu = ({ collapse, parentMenu, menu, handleMenuChange }) => {
  const [menuList, setMenuList] = useState([]);
  // const menuList = await queryMenuList();
  // try {
  //   if (menuList.length === 0) {
  //     menuList = await fetcher('/api/queryMenuList');
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  const queryMenuList = async () => {
    const res = await fetcher('/api/queryMenuList');
    setMenuList(res);
  };
  useEffect(() => {
    queryMenuList();
  }, []);

  /**
   * 生成浮窗子菜单列表
   * @param {*} menus 
   * @param {*} parentMenu 
   * @returns 
   */
  const content = (menus = [], parentMenu) => {
    return (
      <div>
        { menus.map(item => {
          return (
            <div key={item.name} className="menu-child-item py-2 text-gray-700" onClick={() => handleMenuChange(parentMenu, item.name)}>
              {item.text}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex-1 px-[15px] py-[8px]">
      { menuList.map((item, index) => {
        const isParentSelected = parentMenu === item?.name;
        const len = item.children?.length || 0;
        const html = (
          <div 
            className={`cursor-pointer flex items-center px-[13px] py-[10px] pr-0 whitespace-nowrap rounded-[20px] border-0 bg-transparent menu-item ${isParentSelected ? 'menu-item-active' : ''}`}
            onClick={() => handleMenuChange(item?.name, len ? item?.children[0]?.name : item?.name)}
          >
            <i className={`lsn_top_nav_icon_ijnym ${item.icon}`} />
            { !collapse && <span className="lsn_top_nav_font_4h1KU">{item.text}</span> }
          </div>
        );

        return (
          <div key={index} className="flex flex-col justify-center mb-[6px] min-h-[38px]">
            { 
              len && !isParentSelected ?
              <Popover
                content={() => content(item.children, item.name)}
                placement="rightTop"
              >
              {html}
              </Popover>
              : html
            }
            <div className={`lsn_son_nav_wrap_TJFu2 ${ collapse ? 'lsn_son_show_9gw-I' : ''}`}>
              {
                !collapse && isParentSelected && item.children?.map((child, index) => {
                  const isChildSelected = menu === child.name;

                  return (
                    <div
                      key={index}
                      className={`menu-child-item ${isChildSelected ? 'menu-child-item-active' : ''}`}
                      onClick={() => handleMenuChange(item.name, child.name)}
                    >
                      <span>{child.text}</span>
                    </div>
                  );
                })
              }
            </div>
          </div>
        );
      })}
    </div>
  );
};

export async function getServerSideProps(context) {
  debugger
  const menuList = await fetcher('/api/queryMenuList');

  return {
    props: {
      menuList,
    },
  }
}

export default SiderMenu;