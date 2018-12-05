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
    define(['ApiClient', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/ItemTransferRequest', 'model/Items', 'model/WishListItemParameter'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2002'), require('../model/InlineResponse2003'), require('../model/ItemTransferRequest'), require('../model/Items'), require('../model/WishListItemParameter'));
  } else {
    // Browser globals (root is window)
    if (!root.WishListApi) {
      root.WishListApi = {};
    }
    root.WishListApi.ListItemsApi = factory(root.WishListApi.ApiClient, root.WishListApi.InlineResponse2002, root.WishListApi.InlineResponse2003, root.WishListApi.ItemTransferRequest, root.WishListApi.Items, root.WishListApi.WishListItemParameter);
  }
}(this, function(ApiClient, InlineResponse2002, InlineResponse2003, ItemTransferRequest, Items, WishListItemParameter) {
  'use strict';

  /**
   * ListItems service.
   * @module api/ListItemsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ListItemsApi. 
   * @alias module:api/ListItemsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Items for the specified list
     * @param {String} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    this.listsListIdItemsGetWithHttpInfo = function(listId) {
      var postBody = null;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdItemsGet");
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
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/lists/{listId}/items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Items for the specified list
     * @param {String} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    this.listsListIdItemsGet = function(listId) {
      return this.listsListIdItemsGetWithHttpInfo(listId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a list item
     * @param {String} listId 
     * @param {Number} listItemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.listsListIdItemsListItemIdDeleteWithHttpInfo = function(listId, listItemId) {
      var postBody = null;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdItemsListItemIdDelete");
      }

      // verify the required parameter 'listItemId' is set
      if (listItemId === undefined || listItemId === null) {
        throw new Error("Missing the required parameter 'listItemId' when calling listsListIdItemsListItemIdDelete");
      }


      var pathParams = {
        'listId': listId,
        'listItemId': listItemId
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
        '/lists/{listId}/items/{listItemId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a list item
     * @param {String} listId 
     * @param {Number} listItemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.listsListIdItemsListItemIdDelete = function(listId, listItemId) {
      return this.listsListIdItemsListItemIdDeleteWithHttpInfo(listId, listItemId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Details for specified list item
     * @param {String} listId 
     * @param {Number} listItemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    this.listsListIdItemsListItemIdGetWithHttpInfo = function(listId, listItemId) {
      var postBody = null;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdItemsListItemIdGet");
      }

      // verify the required parameter 'listItemId' is set
      if (listItemId === undefined || listItemId === null) {
        throw new Error("Missing the required parameter 'listItemId' when calling listsListIdItemsListItemIdGet");
      }


      var pathParams = {
        'listId': listId,
        'listItemId': listItemId
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
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/lists/{listId}/items/{listItemId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Details for specified list item
     * @param {String} listId 
     * @param {Number} listItemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    this.listsListIdItemsListItemIdGet = function(listId, listItemId) {
      return this.listsListIdItemsListItemIdGetWithHttpInfo(listId, listItemId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a list item
     * @param {String} listId 
     * @param {Number} listItemId 
     * @param {Object} opts Optional parameters
     * @param {module:model/WishListItemParameter} opts.list 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    this.listsListIdItemsListItemIdPatchWithHttpInfo = function(listId, listItemId, opts) {
      opts = opts || {};
      var postBody = opts['list'];

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdItemsListItemIdPatch");
      }

      // verify the required parameter 'listItemId' is set
      if (listItemId === undefined || listItemId === null) {
        throw new Error("Missing the required parameter 'listItemId' when calling listsListIdItemsListItemIdPatch");
      }


      var pathParams = {
        'listId': listId,
        'listItemId': listItemId
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
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/lists/{listId}/items/{listItemId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a list item
     * @param {String} listId 
     * @param {Number} listItemId 
     * @param {Object} opts Optional parameters
     * @param {module:model/WishListItemParameter} opts.list 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    this.listsListIdItemsListItemIdPatch = function(listId, listItemId, opts) {
      return this.listsListIdItemsListItemIdPatchWithHttpInfo(listId, listItemId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Restore a deleted list
     * @param {String} listId 
     * @param {Number} listItemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    this.listsListIdItemsListItemIdRestorePostWithHttpInfo = function(listId, listItemId) {
      var postBody = null;

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdItemsListItemIdRestorePost");
      }

      // verify the required parameter 'listItemId' is set
      if (listItemId === undefined || listItemId === null) {
        throw new Error("Missing the required parameter 'listItemId' when calling listsListIdItemsListItemIdRestorePost");
      }


      var pathParams = {
        'listId': listId,
        'listItemId': listItemId
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
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/lists/{listId}/items/{listItemId}/restore', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Restore a deleted list
     * @param {String} listId 
     * @param {Number} listItemId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    this.listsListIdItemsListItemIdRestorePost = function(listId, listItemId) {
      return this.listsListIdItemsListItemIdRestorePostWithHttpInfo(listId, listItemId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Add an item to the list
     * @param {String} listId 
     * @param {Object} opts Optional parameters
     * @param {module:model/WishListItemParameter} opts.item 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    this.listsListIdItemsPostWithHttpInfo = function(listId, opts) {
      opts = opts || {};
      var postBody = opts['item'];

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdItemsPost");
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
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/lists/{listId}/items', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add an item to the list
     * @param {String} listId 
     * @param {Object} opts Optional parameters
     * @param {module:model/WishListItemParameter} opts.item 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    this.listsListIdItemsPost = function(listId, opts) {
      return this.listsListIdItemsPostWithHttpInfo(listId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set the sort_index of all the items in a list
     * This endpoint accepts an array of wish list item IDs. The items will be re-sorted in the given order of their corresponding IDs.
     * @param {String} listId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Items} opts.items 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.listsListIdItemsSortPostWithHttpInfo = function(listId, opts) {
      opts = opts || {};
      var postBody = opts['items'];

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdItemsSortPost");
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
        '/lists/{listId}/items/sort', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Set the sort_index of all the items in a list
     * This endpoint accepts an array of wish list item IDs. The items will be re-sorted in the given order of their corresponding IDs.
     * @param {String} listId 
     * @param {Object} opts Optional parameters
     * @param {module:model/Items} opts.items 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.listsListIdItemsSortPost = function(listId, opts) {
      return this.listsListIdItemsSortPostWithHttpInfo(listId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Transfer items to a different list.
     * @param {String} listId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTransferRequest} opts.transfer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.listsListIdItemsTransferPostWithHttpInfo = function(listId, opts) {
      opts = opts || {};
      var postBody = opts['transfer'];

      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling listsListIdItemsTransferPost");
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
        '/lists/{listId}/items/transfer', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Transfer items to a different list.
     * @param {String} listId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ItemTransferRequest} opts.transfer 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.listsListIdItemsTransferPost = function(listId, opts) {
      return this.listsListIdItemsTransferPostWithHttpInfo(listId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
