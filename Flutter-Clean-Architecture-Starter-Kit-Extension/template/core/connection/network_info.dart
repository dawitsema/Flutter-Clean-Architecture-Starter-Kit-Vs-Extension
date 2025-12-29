//! data_connection_checker_tv
// Importing the package used to check internet connectivity status
import 'package:data_connection_checker_tv/data_connection_checker.dart';

// Abstract class that defines a contract for network information
abstract class NetworkInfo {
  // Getter that returns a Future indicating whether the device is connected to the internet
  Future<bool>? get isConnected;
}

// Concrete implementation of the NetworkInfo interface
class NetworkInfoImpl implements NetworkInfo {
  // Instance of DataConnectionChecker used to perform the connectivity check
  final DataConnectionChecker connectionChecker;

  // Constructor that injects the DataConnectionChecker dependency
  NetworkInfoImpl(this.connectionChecker);

  // Overrides the isConnected getter to return the current connection status
  @override
  Future<bool> get isConnected => connectionChecker.hasConnection;
}
