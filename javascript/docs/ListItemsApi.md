# WishListApi.ListItemsApi

All URIs are relative to *https://virtserver.swaggerhub.com/sweetwater/wish-list/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listsListIdItemsGet**](ListItemsApi.md#listsListIdItemsGet) | **GET** /lists/{listId}/items | Items for the specified list
[**listsListIdItemsListItemIdDelete**](ListItemsApi.md#listsListIdItemsListItemIdDelete) | **DELETE** /lists/{listId}/items/{listItemId} | Delete a list item
[**listsListIdItemsListItemIdGet**](ListItemsApi.md#listsListIdItemsListItemIdGet) | **GET** /lists/{listId}/items/{listItemId} | Details for specified list item
[**listsListIdItemsListItemIdPatch**](ListItemsApi.md#listsListIdItemsListItemIdPatch) | **PATCH** /lists/{listId}/items/{listItemId} | Update a list item
[**listsListIdItemsPost**](ListItemsApi.md#listsListIdItemsPost) | **POST** /lists/{listId}/items | Add an item to the list
[**listsListIdItemsSortPost**](ListItemsApi.md#listsListIdItemsSortPost) | **POST** /lists/{listId}/items/sort | Set the sort_index of all the items in a list
[**listsListIdItemsTransferPost**](ListItemsApi.md#listsListIdItemsTransferPost) | **POST** /lists/{listId}/items/transfer | Transfer items to a different list.


<a name="listsListIdItemsGet"></a>
# **listsListIdItemsGet**
> InlineResponse2002 listsListIdItemsGet(listId)

Items for the specified list

### Example
```javascript
var WishListApi = require('wish_list_api');

var apiInstance = new WishListApi.ListItemsApi();

var listId = "listId_example"; // String | 

apiInstance.listsListIdItemsGet(listId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**|  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listsListIdItemsListItemIdDelete"></a>
# **listsListIdItemsListItemIdDelete**
> listsListIdItemsListItemIdDelete(listId, listItemId)

Delete a list item

### Example
```javascript
var WishListApi = require('wish_list_api');

var apiInstance = new WishListApi.ListItemsApi();

var listId = "listId_example"; // String | 

var listItemId = 8.14; // Number | 

apiInstance.listsListIdItemsListItemIdDelete(listId, listItemId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**|  | 
 **listItemId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listsListIdItemsListItemIdGet"></a>
# **listsListIdItemsListItemIdGet**
> InlineResponse2004 listsListIdItemsListItemIdGet(listId, listItemId)

Details for specified list item

### Example
```javascript
var WishListApi = require('wish_list_api');

var apiInstance = new WishListApi.ListItemsApi();

var listId = "listId_example"; // String | 

var listItemId = 8.14; // Number | 

apiInstance.listsListIdItemsListItemIdGet(listId, listItemId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**|  | 
 **listItemId** | **Number**|  | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listsListIdItemsListItemIdPatch"></a>
# **listsListIdItemsListItemIdPatch**
> InlineResponse2003 listsListIdItemsListItemIdPatch(listId, listItemId, opts)

Update a list item

### Example
```javascript
var WishListApi = require('wish_list_api');

var apiInstance = new WishListApi.ListItemsApi();

var listId = "listId_example"; // String | 

var listItemId = 8.14; // Number | 

var opts = { 
  'list': new WishListApi.WishListItemParameter() // WishListItemParameter | 
};
apiInstance.listsListIdItemsListItemIdPatch(listId, listItemId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**|  | 
 **listItemId** | **Number**|  | 
 **list** | [**WishListItemParameter**](WishListItemParameter.md)|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listsListIdItemsPost"></a>
# **listsListIdItemsPost**
> InlineResponse2003 listsListIdItemsPost(listId, opts)

Add an item to the list

### Example
```javascript
var WishListApi = require('wish_list_api');

var apiInstance = new WishListApi.ListItemsApi();

var listId = "listId_example"; // String | 

var opts = { 
  'item': new WishListApi.WishListItemParameter() // WishListItemParameter | 
};
apiInstance.listsListIdItemsPost(listId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**|  | 
 **item** | [**WishListItemParameter**](WishListItemParameter.md)|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listsListIdItemsSortPost"></a>
# **listsListIdItemsSortPost**
> listsListIdItemsSortPost(listId, opts)

Set the sort_index of all the items in a list

This endpoint accepts an array of wish list item IDs. The items will be re-sorted in the given order of their corresponding IDs.

### Example
```javascript
var WishListApi = require('wish_list_api');

var apiInstance = new WishListApi.ListItemsApi();

var listId = "listId_example"; // String | 

var opts = { 
  'items': new WishListApi.Items() // Items | 
};
apiInstance.listsListIdItemsSortPost(listId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**|  | 
 **items** | [**Items**](Items.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listsListIdItemsTransferPost"></a>
# **listsListIdItemsTransferPost**
> listsListIdItemsTransferPost(listId, opts)

Transfer items to a different list.

### Example
```javascript
var WishListApi = require('wish_list_api');

var apiInstance = new WishListApi.ListItemsApi();

var listId = "listId_example"; // String | 

var opts = { 
  'transfer': new WishListApi.ItemTransferRequest() // ItemTransferRequest | 
};
apiInstance.listsListIdItemsTransferPost(listId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**|  | 
 **transfer** | [**ItemTransferRequest**](ItemTransferRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

