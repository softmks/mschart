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

  window.MS = {};
  /**
   *
   * @module MSCharts
   **/

  var MSCharts = function MSCharts(el, opts) {
    _classCallCheck(this, MSCharts);

    console.log();
  };

  return MSCharts;

}));
