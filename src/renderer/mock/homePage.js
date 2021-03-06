const Mock = require('mockjs');
const { squareImg, rectangleImg } = require('./imgs');

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
    'img|1': squareImg
  }],
  'dujia|4': [{
    id: '@guid',
    'img|1': rectangleImg,
    name: '@ctitle(6,30)'
  }],
  'mv|4': [{
    id: '@guid',
    'img|1': rectangleImg,
    name: '@ctitle(6,30)',
    author: '@ctitle(6, 10)'
  }],
  'fm|6': [{
    id: '@guid',
    'img|1': squareImg,
    name: '@ctitle(6,30)',
    desc: '@ctitle(6, 10)'
  }],
  'newMusic|10': [{
    id: '@guid',
    'img|1': squareImg,
    name: '@ctitle(4,6)',
    author: '@cname(2, 4)'
  }]
});

