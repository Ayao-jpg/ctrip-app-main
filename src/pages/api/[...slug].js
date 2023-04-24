import mock from 'next-mock';
import mockjs from 'mockjs';

/**
 * 生成菜单列表
 */
const getMenuList = [
  {
    name: 'hotel',
    icon: 'pc_home-jiudian',
    text: '酒店',
    children: [
      { name: 'hotel-1', text: '国内酒店' },
      { name: 'hotel-2', text: '国外酒店' },
    ]
  },
  {
    name: 'air-ticket',
    icon: 'pc_home-jipiao',
    text: '机票',
    children: [
      { name: 'air-ticket-1', text: '国内/国际/中国港澳台' },
      { name: 'air-ticket-2', text: '特价机票' },
      { name: 'air-ticket-3', text: '航班动态' },
      { name: 'air-ticket-4', text: '值机选座' },
      { name: 'air-ticket-5', text: '退票改签' },
      { name: 'air-ticket-6', text: '机场攻略' },
      { name: 'air-ticket-7', text: '定制包机' },
    ]
  },
  {
    name: 'train',
    icon: 'pc_home-huochepiao',
    text: '火车票',
    children: [
      { name: 'train-1', text: '国内火车票' },
      { name: 'train-2', text: '国际/中国港澳台' },
    ]
  },
  {
    name: 'Introduction',
    icon: 'pc_home-gongluejingdian',
    text: '攻略·景点',
  },
  {
    name: 'car',
    icon: 'pc_home-qichechuanpiao',
    text: '汽车·船票',

    children: [
      { name: 'car-1', text: '汽车票' },
      { name: 'car-2', text: '船票' },
    ]
  },
  {
    name: 'ticket',
    icon: 'pc_home-menpiaohuodong',
    text: '门票·活动',
  },
  {
    name: 'use-car',
    icon: 'pc_home-yongche',
    text: '用车',
    children: [
      { name: 'use-car-1', text: '国内租车' },
      { name: 'use-car-2', text: '境外租车' },
      { name: 'use-car-3', text: '接送机站' },
      { name: 'use-car-4', text: '按天包车' },
    ]
  },
  {
    name: 'taobao',
    icon: 'pc_home-chujing',
    text: '全球购',
    children: [
      { name: 'taobao-1', text: '名店购' },
      { name: 'taobao-2', text: '银联特惠' },
      { name: 'taobao-3', text: '外币兑换' },
    ]
  },
  {
    name: 'lipinka',
    icon: 'pc_home-lipinka',
    text: '礼品卡',
    children: [
      { name: 'lipinka-1', text: '礼品卡首页' },
      { name: 'lipinka-2', text: '企业采购' },
      { name: 'lipinka-3', text: '心意送礼' },
      { name: 'lipinka-4', text: '礼品卡福袋' },
    ]
  },
  {
    name: 'shanlv',
    icon: 'pc_home-shanlv',
    text: '企业商旅',
  },
  {
    name: 'xiechengjinrong',
    icon: 'pc_home-xiechengjinrong',
    text: '携程金融',
  },
];

/**
 * 生成中间 banner 图片列表
 */
const getCenterBannerList = [
  { title: 'banner1', src: 'https://dimg04.c-ctrip.com/images/0zg0a12000b014h6h2342.png' },
  { title: 'banner2', src: 'https://dimg04.c-ctrip.com/images/0zg0m12000avldhfgD89A.jpg' },
  { title: 'banner3', src: 'https://dimg04.c-ctrip.com/images/0zg1r12000azie5y9DE2E.jpg' },
  { title: 'banner4', src: 'https://dimg04.c-ctrip.com/images/0zg3j12000augu1mgB200.png' },
  { title: 'banner5', src: 'https://dimg04.c-ctrip.com/images/0zg0m12000ay6mjy524B3.jpg' },
  { title: 'banner6', src: 'https://dimg04.c-ctrip.com/images/0zg2z12000av4wtst9E77.jpg' },
  { title: 'banner7', src: 'https://dimg04.c-ctrip.com/images/0zg5312000artha0v5BF6.png' },
  { title: 'banner8', src: 'https://dimg04.c-ctrip.com/images/0zg4612000ap2m6ht3DD7.png' },
  { title: 'banner9', src: 'https://dimg04.c-ctrip.com/images/0zg0a12000b014h6h2342.png' },
  { title: 'banner10', src: 'https://dimg04.c-ctrip.com/images/0zg0m12000avldhfgD89A.jpg' },
];

/**
 * 生成右侧 banner 图片列表
 */
const getRightBannerList = [
  {
    title: '黄山酒店口碑榜',
    temperature: '18℃～28℃',
    src: 'https://dimg04.c-ctrip.com/images/0zg2s120009h0zzve95D8.jpg',
    hotelList: [
      { title: '黄山悦榕庄', price: '￥2449.0起', src: 'https://dimg04.c-ctrip.com/images/0204s120008exvwzo8898_D_200_200.jpg' },
      { title: '黄山雨润涵月楼酒店', price: '￥2199.0起', src: 'https://dimg04.c-ctrip.com/images/hotel/376000/375486/a74c066a6178427d8001b1f556176bcd_D_200_200.jpg' },
      { title: '黄山昱城皇冠假日酒店', price: '￥728.0起', src: 'https://dimg04.c-ctrip.com/images/0206i120008mf3fqd9D63_D_200_200.jpg' },
    ]
  },
  {
    title: '北海酒店口碑榜',
    temperature: '20℃~32℃',
    src: 'https://dimg04.c-ctrip.com/images/0zg0d120009h0z263FC91.jpg',
    hotelList: [
      { title: '北海香格里拉大酒店', price: '￥1457.0起', src: 'https://dimg04.c-ctrip.com/images/0222u1200084amtc397B3_D_200_200.jpg' },
      { title: '北海金昌开元名都大酒店', price: '￥1866.0起', src: 'https://dimg04.c-ctrip.com/images/200415000000y1q4r6330_D_200_200.jpg' },
      { title: '北海高铁站希尔顿欢朋酒店', price: '￥1099.0起', src: 'https://dimg04.c-ctrip.com/images/0202d120009gukbvt798A_D_200_200.jpg' },
    ]
  },
  {
    title: '无锡酒店口碑榜',
    temperature: '19℃~32℃',
    src: 'https://dimg04.c-ctrip.com/images/0zg1e120009h11vjl223D.jpg',
    hotelList: [
      { title: '无锡雪浪宋品酒店', price: '￥2831.0起', src: 'https://dimg04.c-ctrip.com/images/200g1700000111kas1D14_D_200_200.jpg' },
      { title: '无锡拈花湾君来波罗蜜多酒店', price: '￥1040.0起', src: 'https://dimg04.c-ctrip.com/images/0200s1200090l0xo646EE_D_200_200.jpg' },
      { title: '无锡弘阳洛克菲花园酒店', price: '￥3088.0起', src: 'https://dimg04.c-ctrip.com/images/0200x1200082v7cpu4834_D_200_200.jpg' },
    ]
  },
  {
    title: '张家界酒店口碑榜',
    temperature: '16℃~27℃',
    src: 'https://dimg04.c-ctrip.com/images/0zg5j120009h12ft10E05.jpg',
    hotelList: [
      { title: '张家界梓山漫居', price: '￥1781.0起', src: 'https://dimg04.c-ctrip.com/images/200210000000p5fwa52C8_D_200_200.jpg' },
    ]
  },
];

/**
 * 生成城市列表
 */
const cities = [
  { name: '上海', code: 'shanghai' },
  { name: '北京', code: 'beijing' },
  { name: '广州', code: 'guangzhou' },
  { name: '杭州', code: 'hangzhou' },
  { name: '深圳', code: 'shenzhen' },
  { name: '南京', code: 'nanjing' },
  { name: '天津', code: 'tianjin' },
  { name: '重庆', code: 'chongqing' },
  { name: '厦门', code: 'xiamen' },
  { name: '武汉', code: 'wuhan' },
  { name: '西安', code: 'xian' },
  { name: '成都', code: 'chengdu' },
  { name: '苏州', code: 'suzhou' },
  { name: '青岛', code: 'qingdao' },
  { name: '郑州', code: 'zhengzhou' },
  { name: '长沙', code: 'changsha' },
  { name: '沈阳', code: 'shenyang' },
  { name: '大连', code: 'dalian' },
  { name: '宁波', code: 'ningbo' },
  { name: '东莞', code: 'dongguan' },
  { name: '无锡', code: 'wuxi' },
  { name: '佛山', code: 'foshan' },
  { name: '常州', code: 'changzhou' },
  { name: '石家庄', code: 'shijiazhuang' },
  { name: '福州', code: 'fuzhou' },
  { name: '哈尔滨', code: 'haerbin' },
  { name: '济南', code: 'jinan' },
  { name: '合肥', code: 'hefei' },
  { name: '南昌', code: 'nanchang' },
];

const hotelMap = {
  'shanghai': {
    list: [
      { id: 1, title: '上海浦东机场川沙CitiGO欢阁酒店', comment: 133, price: '352', star: 4, score: 4.9, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/1mc6h12000awrvbbrE40B_R_300_225_R5_Q70_D.jpg' },
      { id: 2, title: '上海崇明岛曼溪锄禾·瀛家民宿', comment: 52, price: '1093', star: 4, score: 4.9, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/0206u120009i7e6j6F0EB_R_300_225_R5_Q70_D.jpg' },
      { id: 3, title: '栖梦民宿(上海新月店)', comment: 234, price: '724', star: 4, score: 4.8, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/02026120009ar1sty2BA1_R_300_225_R5_Q70_D.jpg' },
      { id: 4, title: '绿地铂骊Q酒店(上海浦东机场店)', comment: 376, price: '445', star: 4, score: 4.7, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/200s1a0000019z58yC9CD_R_300_225_R5_Q70_D.jpg' },
      { id: 5, title: '崇明巢吧民宿', comment: 140, price: '1450', star: 4, score: 4.8, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/1mc2312000ath7opcF417_R_300_225_R5_Q70_D.jpg' },
    ],
  },
  'beijing': {
    list: [
      { id: 1, title: '北京国展三元桥逸扉酒店', comment: 406, price: '1059', star: 4, score: 4.8, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/0203c120009ebkfuo83E5_R_300_225_R5_Q70_D.jpg' },
      { id: 2, title: 'THE HUMBLE 厚居酒店(北京亚运村鸟巢店)', comment: 833, price: '772', star: 4, score: 4.8, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/1mc0n12000aqshasq2CF3_R_300_225_R5_Q70_D.jpg' },
      { id: 3, title: '怡程酒店(北京亦庄开发东区科创一街店)', comment: 512, price: '418', star: 4, score: 4.7, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/0205112000a5gaqiv29CD_R_300_225_R5_Q70_D.jpg' },
      { id: 4, title: '携家曼庭酒店(北京通州万达广场店)', comment: 917, price: '629', star: 4, score: 4.8, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/02037120009fpi8lbD25E_R_300_225_R5_Q70_D.jpg' },
      { id: 5, title: '千子桐·初见酒店', comment: 91, price: '1152', star: 4, score: 4.9, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/1mc6x12000aqin39pC476_R_300_225_R5_Q70_D.jpg' },
      { id: 6, title: '北京陌野一宅民宿', comment: 1, price: '4988', star: 4, score: 4.8, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/0AD4712000awgiwnlEE7C_R_300_225_R5_Q70_D.jpg' },
    ],
  },
  'guangzhou': {
    list: [
      { id: 1, title: '广州白云机场丽呈睿轩酒店', comment: 46, price: '455', star: 4, score: 4.9, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/0206i12000atr6g77B30A_R_300_225_R5_Q70_D.jpg' },
      { id: 2, title: '家乐美国际公寓(广州金融城科韵路地铁站店)', comment: 308, price: '1098', star: 3, score: 4.8, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/0200b12000a0yjg6y601C_R_300_225_R5_Q70_D.jpg' },
      { id: 3, title: '保润云希酒店(广州白云机场店)', comment: 23, price: '368', star: 4, score: 4.9, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/1mc3512000b1dwfky1578_R_300_225_R5_Q70_D.jpg' },
      { id: 4, title: '长隆酒店(广州长隆野生动物世界店)', comment: 5026, price: '1298', star: 5, score: 4.5, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/1mc0t12000aoma3yd57CC_R_300_225_R5_Q70_D.jpg' },
      { id: 5, title: '丽呈来住(广州白云国际机场店)', comment: 1674, price: '322', star: 4, score: 4.8, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/0202y120008u4j2pgE9C3_R_300_225_R5_Q70_D.jpg' },
      { id: 6, title: '广州从化悦界高端民宿', comment: 73, price: '669', star: 3, score: 4.7, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/0201h12000a3wfs4m0D9B_R_300_225_R5_Q70_D.jpg' },
    ],
  },
  'hangzhou': {
    list: [
      { id: 1, title: '蔚徕酒店(杭州萧山机场店)', comment: 840, price: '488', star: 4, score: 4.8, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/0200k1200097nb2wd6D81_R_300_225_R5_Q70_D.jpg' },
      { id: 2, title: '杭州奥城凯豪大酒店', comment: 2374, price: '814', star: 5, score: 4.8, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/200a1g000001h6ly6203C_R_300_225_R5_Q70_D.jpg' },
      { id: 3, title: '杭州泽宝的家•1921九溪酒店', comment: 322, price: '1431', star: 4, score: 4.6, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/0206o120008c7axa39127_R_300_225_R5_Q70_D.jpg' },
      { id: 4, title: '杭州萧山国际机场森·庭酒店', comment: 714, price: '724', star: 4, score: 4.7, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/200n14000000vr62d3CC2_R_300_225_R5_Q70_D.jpg' },
      { id: 5, title: '那云星空宿酒店(杭州西溪店)', comment: 140, price: '907', star: 4, score: 4.7, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/1mc5u12000ae36p6vDB7D_R_300_225_R5_Q70_D.jpg' },
      { id: 6, title: '那云星空宿酒店(杭州全福桥路店)', comment: 2139, price: '537', star: 4, score: 4.7, starDes: '超棒', src: 'https://dimg04.c-ctrip.com/images/1mc2l12000axit4j5AA38_R_300_225_R5_Q70_D.jpg' },
    ],
  },
  default: mockjs.mock({
    'list|5': [{
      'id|+1': 1,
      'title': '@ctitle(10, 20)',
      'src|1': [
        'https://dimg04.c-ctrip.com/images/1mc0i12000atcmnkk91F5_R_300_225_R5_Q70_D.jpg',
        'https://dimg04.c-ctrip.com/images/1mc6h12000awrvbbrE40B_R_300_225_R5_Q70_D.jpg',
        'https://dimg04.c-ctrip.com/images/1mc2312000ath7opcF417_R_300_225_R5_Q70_D.jpg',
        'https://dimg04.c-ctrip.com/images/1mc2312000ath7opcF417_R_300_225_R5_Q70_D.jpg',
        'https://dimg04.c-ctrip.com/images/200p14000000w1rtk9FAB_R_300_225_R5_Q70_D.jpg',
        'https://dimg04.c-ctrip.com/images/1mc0n12000aqshasq2CF3_R_300_225_R5_Q70_D.jpg',
        'https://dimg04.c-ctrip.com/images/1mc6x12000aqin39pC476_R_300_225_R5_Q70_D.jpg',
        'https://dimg04.c-ctrip.com/images/0202c120008skf6bv40D8_R_300_225_R5_Q70_D.jpg',
        'https://dimg04.c-ctrip.com/images/02037120009fpi8lbD25E_R_300_225_R5_Q70_D.jpg',
        'https://dimg04.c-ctrip.com/images/0zg5j120009h12ft10E05.jpg',
      ],
      'star|1-5': 1,
      'score|1-5': 1,
      'starDes': '超棒',
      'comment|1-100': 1,
      'price|100-10000': 1,
    }],
  })
};

// 国外热门城市
const foreignCities = [
  { name: '首尔', code: 'shouer' },
  { name: '东京', code: 'dongjing' },
  { name: '曼谷', code: 'mangu' },
  { name: '巴黎', code: 'bali' },
  { name: '罗马', code: 'luoma' },
  { name: '洛杉矶', code: 'luoshanji' },
  { name: '纽约', code: 'niuyue' },
  { name: '伦敦', code: 'lundun' },
  { name: '悉尼', code: 'xini' },
  { name: '多伦多', code: 'duolunduo' },
  { name: '温哥华', code: 'wengehua' },
  { name: '奥克兰', code: 'aokelan' },
  { name: '芝加哥', code: 'zhijiage' },
  { name: '墨尔本', code: 'moerben' },
  { name: '吉普岛', code: 'jipudao' },
  { name: '清迈', code: 'qinmai' },
  { name: '吉隆坡', code: 'jilongpo' },
  { name: '大阪', code: 'daban' },
  { name: '济州市', code: 'jizhoushi' },
  { name: '甲米', code: 'jiami' },
  { name: '芽庄', code: 'yazhuang' },
  { name: '那霸', code: 'naba' },
  { name: '京都', code: 'jingdu' },
  { name: '拉斯维加斯', code: 'weijiasi' },
  { name: '巴厘岛', code: 'balidao' },
];

export default mock(
  {
    'GET /api/queryMenuList': getMenuList,
    'GET /api/queryImageBannerList': getCenterBannerList,
    'GET /api/queryRightBannerList': getRightBannerList,
    'GET /api/queryCities': cities,
    'POST /api/queryCityHotelList': (req, res) => {
      const cityCode = req.body;
      const data = hotelMap[cityCode] || hotelMap['default'];
      res.send(data);
    },
    'GET /api/queryHotCities': { dCities: cities, foreignCities },
  },
  (req, res) => {
    res.status(404).send({
      status: 404,
      error: 'Page Not Found',
      message: 'No message available',
      path: req.url,
    });
  }
);
