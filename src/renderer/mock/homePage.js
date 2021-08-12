const Mock = require('mockjs');

Mock.mock('/home/recommend', {
  'list|10': [{
    'id|+1': 1,
    name: '@ctitle(6,30)',
    'img|1': 'http://p1.music.126.net/mklF6T__u1RRvXGpFISMkQ==/109951164330111891.jpg?param=140y140'
  }]
});
