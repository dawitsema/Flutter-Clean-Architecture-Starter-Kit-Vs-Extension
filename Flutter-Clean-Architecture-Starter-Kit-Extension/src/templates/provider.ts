export const providerTemplate = (
  featureName: string,
  featureNameCapitalized: string
) => {
  return `
import 'package:flutter/material.dart';
import 'package:myapp/features/${featureName}/data/repositories/${featureName}_repository.dart';
import 'package:myapp/features/${featureName}/domain/entities/${featureNameCapitalized}Entity.dart';

class ${featureNameCapitalized}Provider extends ChangeNotifier {
  final ${featureNameCapitalized}Repository _repository;

  List<${featureNameCapitalized}Entity> _items = [];
  bool _isLoading = false;
  String? _error;

  ${featureNameCapitalized}Provider(this._repository);

  List<${featureNameCapitalized}Entity> get items => _items;
  bool get isLoading => _isLoading;
  String? get error => _error;

  Future<void> fetch${featureNameCapitalized}s() async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      _items = await _repository.get${featureNameCapitalized}s();
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> create${featureNameCapitalized}(${featureNameCapitalized}Entity item) async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      await _repository.create${featureNameCapitalized}(item);
      await fetch${featureNameCapitalized}s();
    } catch (e) {
      _error = e.toString();
      notifyListeners();
    }
  }

  Future<void> update${featureNameCapitalized}(${featureNameCapitalized}Entity item) async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      await _repository.update${featureNameCapitalized}(item);
      await fetch${featureNameCapitalized}s();
    } catch (e) {
      _error = e.toString();
      notifyListeners();
    }
  }

  Future<void> delete${featureNameCapitalized}(String id) async {
    _isLoading = true;
    _error = null;
    notifyListeners();

    try {
      await _repository.delete${featureNameCapitalized}(id);
      await fetch${featureNameCapitalized}s();
    } catch (e) {
      _error = e.toString();
      notifyListeners();
    }
  }
}
  `;
};
