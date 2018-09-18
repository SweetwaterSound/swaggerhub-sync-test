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
 * Swagger Codegen version: 2.3.1
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
    instance = new WishListApi.WishListProduct();
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

  describe('WishListProduct', function() {
    it('should create an instance of WishListProduct', function() {
      // uncomment below and update the code to test WishListProduct
      //var instane = new WishListApi.WishListProduct();
      //expect(instance).to.be.a(WishListApi.WishListProduct);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new WishListApi.WishListProduct();
      //expect(instance).to.be();
    });

    it('should have the property sortIndex (base name: "sort_index")', function() {
      // uncomment below and update the code to test the property sortIndex
      //var instane = new WishListApi.WishListProduct();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "note")', function() {
      // uncomment below and update the code to test the property note
      //var instane = new WishListApi.WishListProduct();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new WishListApi.WishListProduct();
      //expect(instance).to.be();
    });

    it('should have the property itemid (base name: "itemid")', function() {
      // uncomment below and update the code to test the property itemid
      //var instane = new WishListApi.WishListProduct();
      //expect(instance).to.be();
    });

  });

}));
