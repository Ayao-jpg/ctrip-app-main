'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Carousel } from 'antd';
import fetcher from '../services/fetchMiddleware';

const ImageBanner = () => {
  const [centerBannerList, setCenterBannerList] = useState([]);

  const queryImageBannerList = async () => {
    try {
      const centerBannerList = await fetcher('/api/queryImageBannerList');
      setCenterBannerList(centerBannerList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    queryImageBannerList();
  }, []);

  return (
    <div className="w-full h-[100px] center-banner">
      <Carousel autoplay>
        {centerBannerList.map((item, index) => {
          return (
            <div key={index} className="relative w-full h-[100px] cursor-pointer">
              <Image className="rounded-lg" src={item.src} alt={item.title} width="740" height="100" />
            </div>
          )
          })
        }
      </Carousel>
    </div>
  )
};

export default ImageBanner;