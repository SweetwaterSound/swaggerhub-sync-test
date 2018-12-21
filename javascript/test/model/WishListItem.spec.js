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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WishListApi);
  }
}(this, function(expect, WishListApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WishListApi.WishListItem();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('WishListItem', function() {
    it('should create an instance of WishListItem', function() {
      // uncomment below and update the code to test WishListItem
      //var instance = new WishListApi.WishListItem();
      //expect(instance).to.be.a(WishListApi.WishListItem);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new WishListApi.WishListItem();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new WishListApi.WishListItem();
      //expect(instance).to.be();
    });

    it('should have the property sortIndex (base name: "sort_index")', function() {
      // uncomment below and update the code to test the property sortIndex
      //var instance = new WishListApi.WishListItem();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instance = new WishListApi.WishListItem();
      //expect(instance).to.be();
    });

  });

}));
