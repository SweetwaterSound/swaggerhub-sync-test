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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/WishListParameter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse200'), require('../model/InlineResponse2001'), require('../model/WishListParameter'));
  } else {
    // Browser globals (root is window)
    if (!root.WishListApi) {
      root.WishListApi = {};
    }
    root.WishListApi.ListsApi = factory(root.WishListApi.ApiClient, root.WishListApi.InlineResponse200, root.WishListApi.InlineResponse2001, root.WishListApi.WishListParameter);
  }
}(this, function(ApiClient, InlineResponse200, InlineResponse2001, WishListParameter) {
  'use strict';

  /**
   * Lists service.
   * @module api/ListsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ListsApi. 
   * @alias module:api/ListsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * All lists for a user
     * @param {Number} userId Filter lists to a user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    this.listsGetWithHttpInfo = function(userId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listsGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'user_id': userId,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/lists', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * All lists for a user
     * @param {Number} userId Filter lists to a user_id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    this.listsGet = function(userId) {
      return this.listsGetWithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a list
     * @param {String} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.listsListIdDeleteWithHttpInfo = function(listId) {
      var postBody = null;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdDelete");
      }


      var pathParams = {
        'listId': listId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/lists/{listId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a list
     * @param {String} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.listsListIdDelete = function(listId) {
      return this.listsListIdDeleteWithHttpInfo(listId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Details for the specified list
     * @param {String} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    this.listsListIdGetWithHttpInfo = function(listId) {
      var postBody = null;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdGet");
      }


      var pathParams = {
        'listId': listId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/lists/{listId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Details for the specified list
     * @param {String} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    this.listsListIdGet = function(listId) {
      return this.listsListIdGetWithHttpInfo(listId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a list
     * @param {String} listId 
     * @param {Object} opts Optional parameters
     * @param {module:model/WishListParameter} opts.list 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    this.listsListIdPatchWithHttpInfo = function(listId, opts) {
      opts = opts || {};
      var postBody = opts['list'];

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdPatch");
      }


      var pathParams = {
        'listId': listId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/lists/{listId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a list
     * @param {String} listId 
     * @param {Object} opts Optional parameters
     * @param {module:model/WishListParameter} opts.list 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    this.listsListIdPatch = function(listId, opts) {
      return this.listsListIdPatchWithHttpInfo(listId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a list
     * Create a new wish list
     * @param {Object} opts Optional parameters
     * @param {module:model/WishListParameter} opts.list 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    this.listsPostWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['list'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['OAuth'];
      var contentTypes = [];
      var accepts = [];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/lists', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a list
     * Create a new wish list
     * @param {Object} opts Optional parameters
     * @param {module:model/WishListParameter} opts.list 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    this.listsPost = function(opts) {
      return this.listsPostWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
