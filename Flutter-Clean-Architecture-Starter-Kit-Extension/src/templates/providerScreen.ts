export const providerScreenTemplate = (
  featureName: string,
  featureNameCapitalized: string
) => {
  return `
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:myapp/features/${featureName}/presentation/providers/${featureName}_provider.dart';

class ${featureNameCapitalized}Screen extends StatefulWidget {
  const ${featureNameCapitalized}Screen({Key? key}) : super(key: key);

  @override
  State<${featureNameCapitalized}Screen> createState() => _${featureNameCapitalized}ScreenState();
}

class _${featureNameCapitalized}ScreenState extends State<${featureNameCapitalized}Screen> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      context.read<${featureNameCapitalized}Provider>().fetch${featureNameCapitalized}s();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('${featureNameCapitalized}'),
      ),
      body: Consumer<${featureNameCapitalized}Provider>(
        builder: (context, provider, child) {
          if (provider.isLoading) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }

          if (provider.error != null) {
            return Center(
              child: Text('Error: \${provider.error}'),
            );
          }

          if (provider.items.isEmpty) {
            return const Center(
              child: Text('No items found'),
            );
          }

          return ListView.builder(
            itemCount: provider.items.length,
            itemBuilder: (context, index) {
              final item = provider.items[index];
              return ListTile(
                title: Text(item.toString()),
                onTap: () {
                  // Handle item tap
                },
              );
            },
          );
        },
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
