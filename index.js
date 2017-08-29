'use strict';
var AV = require('leancloud-storage');
var env = process.argv[2];
var LC_APP_ID = ""
var LC_APP_KEY = ""
var port = 4000

const LC_DEV_APP_ID = 'K5Rltwmfnxd5pYjMsOFFL0kT-gzGzoHsz'
const LC_DEV_APP_KEY = 'UseC5jvqLT7TIiQWI8nRPmEl'

const LC_PRE_APP_ID = 'TUVjJ5HHNmopfJeREa4IcB1T-gzGzoHsz'
const LC_PRE_APP_KEY = 'XYSEQ5K4FYtMp7P8HXT8Vz63'

const LC_PRO_APP_ID = 'pHIMCdWo3VQX09TKFuU9AGdd-gzGzoHsz'
const LC_PRO_APP_KEY = 'qhIzQiFonde2yeaBdlcXHUDz'

if(env === 'dev') {
  LC_APP_ID = LC_DEV_APP_ID
  LC_APP_KEY = LC_DEV_APP_KEY
  port = 4001
} else if(env === 'pre') {
  LC_APP_ID = LC_PRE_APP_ID
  LC_APP_KEY = LC_PRE_APP_KEY
  port = 4000
} else if(env === 'pro') {
  LC_APP_ID = LC_PRO_APP_ID
  LC_APP_KEY = LC_PRO_APP_KEY
  port = 4002
} else {
  LC_APP_ID = LC_PRE_APP_ID
  LC_APP_KEY = LC_PRE_APP_KEY
  port = 4000
}

AV.init({
  appId: LC_APP_ID,
  appKey: LC_APP_KEY,
});

var app = require('./app');

app.listen(port, function () {
  console.log('YiiJiaBao Ping++ WebHook server is running', env, 'port:', port);

  // 注册全局未捕获异常处理器
  process.on('uncaughtException', function(err) {
    console.error("Caught exception:", err.stack);
  });
  process.on('unhandledRejection', function(reason, p) {
    console.error("Unhandled Rejection at: Promise ", p, " reason: ", reason.stack);
  });
});
