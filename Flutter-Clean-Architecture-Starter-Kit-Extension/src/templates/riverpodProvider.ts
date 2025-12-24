export const riverpodProviderTemplate = (
  featureName: string,
  featureNameCapitalized: string
) => {
  return `
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:myapp/features/${featureName}/data/repositories/${featureName}_repository.dart';
import 'package:myapp/features/${featureName}/domain/entities/${featureNameCapitalized}Entity.dart';

final ${featureName}RepositoryProvider = Provider((ref) {
  return ${featureNameCapitalized}Repository();
});

final ${featureName}ListProvider = FutureProvider<List<${featureNameCapitalized}Entity>>((ref) async {
  final repository = ref.watch(${featureName}RepositoryProvider);
  return repository.get${featureNameCapitalized}s();
});

final ${featureName}DetailProvider = FutureProvider.autoDispose.family<${featureNameCapitalized}Entity, String>(
  (ref, id) async {
    final repository = ref.watch(${featureName}RepositoryProvider);
    return repository.get${featureNameCapitalized}ById(id);
  },
);
  `;
};
