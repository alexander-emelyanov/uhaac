'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var Client = (function () {
    function Client(url) {
        _classCallCheck(this, Client);

        console.log('Constructor with url: ' + url);
        this.url = url;
    }

    _createClass(Client, [{
        key: 'url',
        get: function get() {
            console.log('get url');
            return this._url;
        },
        set: function set(url) {
            console.log('set url');
            this._url = url;
        }
    }]);

    return Client;
})();

exports['default'] = Client;
module.exports = exports['default'];