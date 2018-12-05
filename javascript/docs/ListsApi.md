# WishListApi.ListsApi

All URIs are relative to *https://virtserver.swaggerhub.com/sweetwater/wish-list/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listsGet**](ListsApi.md#listsGet) | **GET** /lists | All lists for a user
[**listsListIdDelete**](ListsApi.md#listsListIdDelete) | **DELETE** /lists/{listId} | Delete a list
[**listsListIdGet**](ListsApi.md#listsListIdGet) | **GET** /lists/{listId} | Details for the specified list
[**listsListIdPatch**](ListsApi.md#listsListIdPatch) | **PATCH** /lists/{listId} | Update a list
[**listsListIdRestorePost**](ListsApi.md#listsListIdRestorePost) | **POST** /lists/{listId}/restore | Restore a deleted list
[**listsPost**](ListsApi.md#listsPost) | **POST** /lists | Create a list


<a name="listsGet"></a>
# **listsGet**
> InlineResponse200 listsGet(userId)

All lists for a user

### Example
```javascript
var WishListApi = require('wish_list_api');
var defaultClient = WishListApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth
var OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WishListApi.ListsApi();

var userId = 56; // Number | Filter lists to a user_id

apiInstance.listsGet(userId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Filter lists to a user_id | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listsListIdDelete"></a>
# **listsListIdDelete**
> listsListIdDelete(listId)

Delete a list

### Example
```javascript
var WishListApi = require('wish_list_api');
var defaultClient = WishListApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth
var OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WishListApi.ListsApi();

var listId = "listId_example"; // String | 

apiInstance.listsListIdDelete(listId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listsListIdGet"></a>
# **listsListIdGet**
> InlineResponse2001 listsListIdGet(listId)

Details for the specified list

### Example
```javascript
var WishListApi = require('wish_list_api');
var defaultClient = WishListApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth
var OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WishListApi.ListsApi();

var listId = "listId_example"; // String | 

apiInstance.listsListIdGet(listId).then(function(data) {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listsListIdPatch"></a>
# **listsListIdPatch**
> InlineResponse2001 listsListIdPatch(listId, opts)

Update a list

### Example
```javascript
var WishListApi = require('wish_list_api');
var defaultClient = WishListApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth
var OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WishListApi.ListsApi();

var listId = "listId_example"; // String | 

var opts = { 
  'list': new WishListApi.WishListParameter() // WishListParameter | 
};
apiInstance.listsListIdPatch(listId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **String**|  | 
 **list** | [**WishListParameter**](WishListParameter.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listsListIdRestorePost"></a>
# **listsListIdRestorePost**
> InlineResponse2001 listsListIdRestorePost(listId)

Restore a deleted list

### Example
```javascript
var WishListApi = require('wish_list_api');
var defaultClient = WishListApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth
var OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WishListApi.ListsApi();

var listId = "listId_example"; // String | 

apiInstance.listsListIdRestorePost(listId).then(function(data) {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="listsPost"></a>
# **listsPost**
> InlineResponse2001 listsPost(opts)

Create a list

Create a new wish list

### Example
```javascript
var WishListApi = require('wish_list_api');
var defaultClient = WishListApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth
var OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WishListApi.ListsApi();

var opts = { 
  'list': new WishListApi.WishListParameter() // WishListParameter | 
};
apiInstance.listsPost(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list** | [**WishListParameter**](WishListParameter.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

