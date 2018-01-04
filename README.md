Aliyun API Gateway SDK for react-native
==================================

API 网关（API Gateway），提供高性能、高可用的 API 托管服务，帮助用户对外开放其部署在 ECS、容器服务等阿里云产品上的应用，提供完整的 API 发布、管理、维护生命周期管理。用户只需简单操作，即可快速、低成本、低风险的开放数据或服务。

## Installation

You can install it as dependency with npm.

```sh
$ # save into package.json dependencies with -S
$ npm install react-native-aliyun-api-gateway -S
```

## Usage

The SDK contains Simple client(authrozied by appcode) and Normal client(authrozied by appid & appsecret).

### Simple client

```js
'use strict';
const co = require('co');
const SimpleClient = require('react-native-aliyun-api-gateway').SimpleClient;
const client = new SimpleClient('YOUR_APP_CODE');

co(function* () {
  var url = 'http://apiqingdaohttps.foundai.com/test1234';

  var result = yield client.post(url, {
    data: {
      'testtest': 'query1Value'
    },
    headers: {
      accept: 'application/json'
    }
  });

  console.log(JSON.stringify(result));
});

```

### Client (recommend)

```js
'use strict';
const co = require('co');
const Client = require('react-native-aliyun-api-gateway').Client;
const client = new Client('YOUR_APP_KEY','YOUR_APP_SECRET');

co(function* () {
  var url = 'http://apiqingdaohttps.foundai.com/test1234';

  var result = yield client.post(url, {
    data: {
      'testtest': 'query1Value'
    },
    headers: {
      accept: 'application/json'
    }
  });

  console.log(JSON.stringify(result));
});
```

## Question?

Please submit an issue.

## License

The MIT License
