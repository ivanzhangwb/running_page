interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://zhangwb.run',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Zhangwenbo Running Page',
  navLinks: [
    {
      name: 'Blog',
      url: 'http://www.zhangwb.cn',
    },
    {
      name: 'About',
      url: 'http://www.zhangwb.cn/about/',
    },
  ],
};

export default data;
