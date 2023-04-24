'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { Input, Popover, Divider } from 'antd';

const { Search } = Input;

const HeaderTop = () => {
  const [showArrow, setShowArrow] = useState(true);

  const onSearch = (value) => console.log(value);

  const OrderContent = () => {
    return (
      <div>
        111
      </div>
    )
  };

  return (
    <div className="max-w-[1180px] min-w-[1080px] h-[72px] mx-auto pt-[20px] flex">
      <div className="relative h-[32px] w-[192px]">
        <Image src={'/assets/logo.png'} alt="logo" fill />
      </div>

      <div className="w-[320px] h-[34px] ml-8">
        <Search placeholder="搜索任何旅游相关" onSearch={onSearch} enterButton />
      </div>
      
      <div className="flex ml-40">
        <div className="w-[74px] h-[24px] login-btn-bg">
          <i className="pc_home-account tl_nfes_home_header_login_avatar_SG4WR align-middle" />
          <span className="ml-[5px] text-sm">请登录</span>
        </div>

        <div className="mx-6 cursor-pointer text-sm text-black h-[24px] mt-1.5 register">
          注册
        </div>

        <div className="register h-[24px] mt-1">
          <i className="pc_home-dingdan tl_icon_order_QjjKh align-bottom" />
          <Popover placement="bottom" content={OrderContent} onOpenChange={() => setShowArrow(!showArrow)}>
            <span className="text-sm ml-1 mt-1">我的订单</span>
            { showArrow ? <i className="pc_home-dropdown tl_icon_dropdown_lExig align-middle" /> : <i className="pc_home-dropup tl_icon_dropdown_lExig align-middle" /> }
          </Popover>
        </div>

        <Divider type="vertical" className="h-[20px] mx-6 top-[3px]" />

        <div className="register h-[24px] mt-1">
          <i className="pc_home-customerService tl_header_icon_CqpDm mr-2" />
          <i className="pc_home-phone tl_header_icon_CqpDm ml-2" />
        </div>

        <Divider type="vertical" className="h-[20px] mx-6 top-[3px]" />

        <div className="register h-[24px] mt-1">
          <i className="pc_home-wuzhangai tl_icon_btn_Ml4AL mr-2" />
          <i className="pc_home-jinglao tl_icon_btn_Ml4AL ml-2" />
        </div>
      </div>   
    </div>
  )
};

export default HeaderTop;