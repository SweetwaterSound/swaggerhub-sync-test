/**
 * Wish List API
 * A REST API to control wish lists
 *
 * OpenAPI spec version: 1.0.0
 * Contact: caleb_bertsch@sweetwater.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/WishListItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WishListItem'));
  } else {
    // Browser globals (root is window)
    if (!root.WishListApi) {
      root.WishListApi = {};
    }
    root.WishListApi.InlineResponse2003 = factory(root.WishListApi.ApiClient, root.WishListApi.WishListItem);
  }
}(this, function(ApiClient, WishListItem) {
  'use strict';




  /**
   * The InlineResponse2003 model module.
   * @module model/InlineResponse2003
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>InlineResponse2003</code>.
   * @alias module:model/InlineResponse2003
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2003} obj Optional instance to populate.
   * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = WishListItem.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/WishListItem} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


