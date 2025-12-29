// Importing Dio package for handling HTTP requests
import 'package:dio/dio.dart';

// Importing the abstract API consumer interface
import '../api/api_consumer.dart';

// Importing API endpoints configuration
import '../api/end_points.dart';

// Importing custom exception handling logic
import '../../errors/expentions.dart';

// Concrete implementation of ApiConsumer using Dio
class DioConsumer extends ApiConsumer {
  // Dio instance used to perform HTTP requests
  final Dio dio;

  // Constructor that receives Dio instance and sets the base URL
  DioConsumer({required this.dio}) {
    dio.options.baseUrl = EndPoints.baserUrl;
  }

//! POST request implementation
  @override
  Future post(
    String path, {
    dynamic data,
    Map<String, dynamic>? queryParameters,
    bool isFormData = false,
  }) async {
    try {
      // Sends POST request with either JSON body or FormData
      dio.post(
        path,
        data: isFormData ? FormData.fromMap(data) : data,
        queryParameters: queryParameters,
      );
    } on DioException catch (e) {
      // Handles Dio-specific exceptions
      handleDioException(e);
    }
  }

//! GET request implementation
  @override
  Future get(
    String path, {
    Object? data,
    Map<String, dynamic>? queryParameters,
  }) async {
    try {
      // Sends GET request with optional body and query parameters
      var res =
          await dio.get(path, data: data, queryParameters: queryParameters);
      // Returns the response data
      return res.data;
    } on DioException catch (e) {
      // Handles Dio-specific exceptions
      handleDioException(e);
    }
  }

//! DELETE request implementation
  @override
  Future delete(
    String path, {
    Object? data,
    Map<String, dynamic>? queryParameters,
  }) async {
    try {
      // Sends DELETE request with optional body and query parameters
      var res = await dio.delete(
        path,
        data: data,
        queryParameters: queryParameters,
      );
      // Returns the response data
      return res.data;
    } on DioException catch (e) {
      // Handles Dio-specific exceptions
      handleDioException(e);
    }
  }

//! PATCH request implementation
  @override
  Future patch(
    String path, {
    dynamic data,
    Map<String, dynamic>? queryParameters,
    bool isFormData = false,
  }) async {
    try {
      // Sends PATCH request with either JSON body or FormData
      var res = await dio.patch(
        path,
        data: isFormData ? FormData.fromMap(data) : data,
        queryParameters: queryParameters,
      );
      // Returns the response data
      return res.data;
    } on DioException catch (e) {
      // Handles Dio-specific exceptions
      handleDioException(e);
    }
  }
}
