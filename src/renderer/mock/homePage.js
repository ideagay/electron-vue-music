const Mock = require('mockjs');
const imgs = ['http://p1.music.126.net/UFccSDzsg-Lc4nf5I60HJw==/109951166268345690.jpg?imageView&quality=89',
  'http://p1.music.126.net/2EhMvHLglu0beb3QaTtA8Q==/109951166268917890.jpg?imageView&quality=89',
  'http://p1.music.126.net/44nFHC3ESjIeHRcf9NUC8A==/109951166268877128.jpg?imageView&quality=89',
  'http://p1.music.126.net/RCTUQ6G4ucXP0zi9KyR2Sw==/109951166268898866.jpg?imageView&quality=89'];

Mock.mock('/home/data', {
  banner: [{
    img: 'http://p1.music.126.net/UFccSDzsg-Lc4nf5I60HJw==/109951166268345690.jpg?imageView&quality=89',
    url: '@url'
  }, {
    img: 'http://p1.music.126.net/2EhMvHLglu0beb3QaTtA8Q==/109951166268917890.jpg?imageView&quality=89',
    url: '@url'
  }, {
    img: 'http://p1.music.126.net/44nFHC3ESjIeHRcf9NUC8A==/109951166268877128.jpg?imageView&quality=89',
    url: '@url'
  }, {
    img: 'http://p1.music.126.net/RCTUQ6G4ucXP0zi9KyR2Sw==/109951166268898866.jpg?imageView&quality=89',
    url: '@url'
  }],
  'recommend|10': [{
    id: '@guid',
    name: '@ctitle(6,30)',
    'img|1': ['http://p1.music.126.net/mklF6T__u1RRvXGpFISMkQ==/109951164330111891.jpg?param=140y140',
      'http://p1.music.126.net/n842mabp9CvkVahH1Y1F1w==/109951166250772112.jpg?param=140y140',
      'http://p1.music.126.net/0VRN6GBaPibXxfKz2UbzdA==/109951165959686617.jpg?param=140y140']
  }],
  'dujia|4': [{
    id: '@guid',
    'img|1': imgs,
    name: '@ctitle(6,30)'
  }],
  'mv|4': [{
    id: '@guid',
    'img|1': imgs,
    name: '@ctitle(6,30)',
    author: '@ctitle(6, 10)'
  }]
});

