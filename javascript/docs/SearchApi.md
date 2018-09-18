# WishListApi.SearchApi

All URIs are relative to *https://virtserver.swaggerhub.com/sweetwater/wish-list/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchProductGet**](SearchApi.md#searchProductGet) | **GET** /search/product | 


<a name="searchProductGet"></a>
# **searchProductGet**
> InlineResponse200 searchProductGet(itemid)



Search for lists that contain a product

### Example
```javascript
var WishListApi = require('wish_list_api');
var defaultClient = WishListApi.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth
var OAuth = defaultClient.authentications['OAuth'];
OAuth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new WishListApi.SearchApi();

var itemid = "itemid_example"; // String | 

apiInstance.searchProductGet(itemid).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **itemid** | **String**|  | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[OAuth](../README.md#OAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

