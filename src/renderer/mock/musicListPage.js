const Mock = require('mockjs');
const { squareImg, rectangleImg } = require('./imgs');

Mock.mock('/musicList/data', {
  banner: {
    'img|1': squareImg,
    tag: '@ctitle(4)',
    title: '@ctitle(6,15)',
    desc: '@ctitle(6,10)'
  },
  'list|20': [{
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

