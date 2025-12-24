export const riverpodScreenTemplate = (
  featureName: string,
  featureNameCapitalized: string
) => {
  return `
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:myapp/features/${featureName}/presentation/providers/${featureName}_providers.dart';

class ${featureNameCapitalized}Screen extends ConsumerWidget {
  const ${featureNameCapitalized}Screen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final ${featureName}ListAsync = ref.watch(${featureName}ListProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text('${featureNameCapitalized}'),
      ),
      body: ${featureName}ListAsync.when(
        data: (items) {
          if (items.isEmpty) {
            return const Center(
              child: Text('No items found'),
            );
          }
          return ListView.builder(
            itemCount: items.length,
            itemBuilder: (context, index) {
              final item = items[index];
              return ListTile(
                title: Text(item.toString()),
                onTap: () {
                  // Handle item tap
                },
              );
            },
          );
        },
        loading: () => const Center(
          child: CircularProgressIndicator(),
        ),
        error: (error, stack) => Center(
          child: Text('Error: \$error'),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          // Handle add item
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
  `;
};
