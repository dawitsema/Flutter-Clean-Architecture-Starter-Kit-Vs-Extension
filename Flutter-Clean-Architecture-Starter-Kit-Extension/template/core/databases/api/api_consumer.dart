// Abstract class that defines a contract for making API requests
abstract class ApiConsumer {
  // Sends an HTTP GET request to the given path
  // Optional data and query parameters can be provided
  Future<dynamic> get(
    String path, {
    Object? data,
    Map<String, dynamic>? queryParameters,
  });

  // Sends an HTTP POST request to the given path
  // data represents the request body
  // queryParameters are appended to the URL
  // isFormData indicates whether the body should be sent as form data
  Future<dynamic> post(
    String path, {
    dynamic data,
    Map<String, dynamic>? queryParameters,
    bool isFormData = false,
  });

  // Sends an HTTP PATCH request to update existing resources
  // data represents the request body
  // queryParameters are appended to the URL
  // isFormData indicates whether the body should be sent as form data
  Future<dynamic> patch(
    String path, {
    dynamic data,
    Map<String, dynamic>? queryParameters,
    bool isFormData = false,
  });

  // Sends an HTTP DELETE request to remove a resource
  // Optional data and query parameters can be provided
  Future<dynamic> delete(
    String path, {
    Object? data,
    Map<String, dynamic>? queryParameters,
  });
}
