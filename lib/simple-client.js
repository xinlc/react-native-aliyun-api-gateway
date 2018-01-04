'use strict';

const format = require('url').format;
const ua = require('./ua');
const Base = require('./base');

/**
 * API Gateway Simple client that use appcode
 */
class SimpleClient extends Base {
  constructor(appcode) {
    super();
    this.appcode = appcode;
  }

  async request(method, url, opts) {
    var options = {
      method: method,
      headers: {
        'authorization': 'APPCODE ' + this.appcode,
        'user-agent': ua
      },
      body: opts.data,
    };

    var response = await fetch(format(url), options);

    var headers = response.headers;
    var code = response.statusCode;
    if (code !== 200) {
      var err = new Error(`${method} '${format(url)}' failed width code(${code}).` +
        ` request id: ${headers['x-ca-request-id'][0]},` +
        ` error message: ${headers['x-ca-error-message'][0]}`);
      throw err;
    }

    var result = await response.text();
    var contentType = headers['content-type'][0] || '';
    if (contentType.includes('application/json')) {
      try {
        result = JSON.parse(result);
      } catch (ex) {
        ex.message = `${method} ${format(url)} failed. ` + ex.message;
        ex.data = result;
        throw ex;
      }
    }
    return result;
  }
}

module.exports = SimpleClient;
