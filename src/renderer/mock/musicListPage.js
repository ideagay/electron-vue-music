const Mock = require('mockjs');
const { squareImg } = require('./imgs');

Mock.mock('/musicList/data', 'POST', {
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
  }]
});

