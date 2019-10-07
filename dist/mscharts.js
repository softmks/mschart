/*!
 * MSCharts v1.0.0
 * (c) 2018-2019 softmks
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.MSCharts = factory());
}(this, function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  window.MS = {};
  /**
   *
   * @module MSCharts
   **/

  var MSCharts =
  /*#__PURE__*/
  function () {
    function MSCharts(el, opts) {
      _classCallCheck(this, MSCharts);

      console.log();
    }

    _createClass(MSCharts, [{
      key: "render",
      value: function render() {}
    }]);

    return MSCharts;
  }();

  return MSCharts;

}));
