# 🚀 Flutter Clean Architecture VS Code Extension (Extended) 🚀

> Enhanced version with support for Riverpod, Provider, and BLoC state management patterns

<p align="center">
  <a href="https://flutter.dev/"><img src="https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=flutter&logoColor=white"></a>
  <a href="https://dart.dev/"><img src="https://img.shields.io/badge/Dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white"></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white"></a>
  <a href="https://marketplace.visualstudio.com/"><img src="https://img.shields.io/badge/VS%20Code-%23007ACC.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&logo=open-source-initiative&logoColor=white"></a>
  <img src="https://img.shields.io/badge/Version-1.1.0-%234285F4.svg?style=for-the-badge&logo=git&logoColor=white">
</p>

Quickly scaffold and maintain **Flutter Clean Architecture** features with your preferred state management pattern right from Visual Studio Code! This extension automates the creation of boilerplate code for new features, supporting BLoC, Riverpod, and Provider patterns.

> **Note**: This project is based on [Flutter-Clean-Architecture-Starter-Kit-Vs-Extension](https://github.com/maajidAwol/Flutter-Clean-Architecture-Starter-Kit-Vs-Extension)
>
> **Enhancements**: Added support for Riverpod and Provider state management patterns
>
> Original credits: [Majid Awol](https://github.com/maajidAwol) ✨

---

## 📖 Table of Contents

1. [Features](#features)
2. [What's New](#whats-new)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Supported State Management Patterns](#supported-state-management-patterns)
7. [Folder Structure](#folder-structure)
8. [Contributing](#contributing)
9. [License](#license)
10. [Credits & References](#credits--references)

---

## ✨ Features

- **Multiple State Management Patterns**: Support for BLoC, Riverpod, and Provider
- **Clean Architecture Scaffolding**: Automatically generates `core`, `data`, `domain`, and `presentation` folders following Clean Architecture approach
- **Boilerplate Code Creation**: Instantly creates essential boilerplate files with a single command
- **Detect & Create Core Folder**: If your project doesn't have a `core` folder, the extension creates it for you
- **Customizable Feature Names**: Simply provide a feature name, and the extension handles the rest
- **Remove Existing Feature**: Quickly remove an existing feature folder when no longer needed
- **Pattern Selection**: Choose your preferred state management pattern when creating features

---

## 🎉 What's New

### Version 1.1.0

- ✅ **Riverpod Support**: Complete templates for Riverpod state management

  - Provider definitions
  - FutureProvider for async operations
  - StateNotifier for state mutations
  - ConsumerWidget for UI integration

- ✅ **Provider Support**: Full Provider pattern implementation

  - ChangeNotifier base class
  - CRUD operation methods
  - Consumer widget for UI binding
  - Automatic state updates

- ✅ **Pattern Selection**: Interactive quick pick menu to choose state management pattern

- ✅ **Better Documentation**: Comprehensive README with pattern-specific examples

---

## 🔧 Prerequisites

- **Flutter SDK** (v3.0 or higher recommended)
- **Dart** (bundled with Flutter)
- **VS Code** (latest version recommended)

---

## ⚙️ Installation

1. **Open VS Code**
2. **Open Extensions tab**: `Ctrl + Shift + X` (Windows/Linux) or `Cmd + Shift + X` (Mac)
3. **Search**: "Flutter Clean Architecture Extended"
4. **Install** the extension
5. **Reload VS Code** if prompted

---

## 🚀 Usage

### Creating a New Feature

1. Open **Command Palette**: `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac)
2. Search for **"Create new feature"**
3. Enter the **feature name** (e.g., `profile`, `home`, `settings`)
4. **Select state management pattern**:
   - **BLoC** - Original pattern with event-driven architecture
   - **Riverpod** - Modern, testable state management
   - **Provider** - Simple, lightweight approach
5. 🎉 **Done!** Your feature folder is created with all necessary boilerplate

### Removing an Existing Feature

1. Open **Command Palette**: `Ctrl + Shift + P` or `Cmd + Shift + P`
2. Search for **"Remove feature"**
3. Enter the **feature name** you want to remove
4. **Confirm** when prompted
5. Feature folder is permanently deleted

---

## Supported State Management Patterns

### BLoC Pattern

Industry-standard pattern with event-driven architecture.

**Structure:**

```
features/profile/
├── data/
│   ├── datasources/
│   ├── models/
│   └── repositories/
├── domain/
│   ├── entities/
│   ├── repositories/
│   └── usecases/
└── presentation/
    ├── bloc/
    ├── pages/
    └── widgets/
```

**Dependencies:**

```yaml
flutter_bloc: ^8.1.0
bloc: ^8.1.0
```

### Riverpod Pattern

Modern, testable state management with compile-time safety.

**Structure:**

```
features/profile/
├── data/
│   ├── datasources/
│   ├── models/
│   └── repositories/
├── domain/
│   ├── entities/
│   ├── repositories/
│   └── usecases/
└── presentation/
    ├── providers/
    ├── screens/
    └── widgets/
```

**Generated Files:**

- `providers/{featureName}_providers.dart` - Riverpod provider definitions
- `screens/{FeatureName}Screen.dart` - ConsumerWidget implementation

**Dependencies:**

```yaml
flutter_riverpod: ^2.4.0
riverpod_annotation: ^2.1.0
```

**Example Usage:**

```dart
import 'package:flutter_riverpod/flutter_riverpod.dart';

class ProfileScreen extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profileAsync = ref.watch(profileListProvider);

    return profileAsync.when(
      data: (profile) => Text(profile.name),
      loading: () => CircularProgressIndicator(),
      error: (error, stack) => Text('Error: $error'),
    );
  }
}
```

### Provider Pattern

Simple, lightweight state management with minimal boilerplate.

**Structure:**

```
features/profile/
├── data/
│   ├── datasources/
│   ├── models/
│   └── repositories/
├── domain/
│   ├── entities/
│   ├── repositories/
│   └── usecases/
└── presentation/
    ├── providers/
    ├── screens/
    └── widgets/
```

**Generated Files:**

- `providers/{featureName}_provider.dart` - ChangeNotifier implementation
- `screens/{FeatureName}Screen.dart` - Consumer widget implementation

**Dependencies:**

```yaml
provider: ^6.0.0
```

**Example Usage:**

```dart
import 'package:provider/provider.dart';

class ProfileScreen extends StatefulWidget {
  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  @override
  void initState() {
    super.initState();
    context.read<ProfileProvider>().fetchProfiles();
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<ProfileProvider>(
      builder: (context, provider, child) {
        if (provider.isLoading) {
          return CircularProgressIndicator();
        }
        return ListView(
          children: provider.items.map((item) => Text(item.name)).toList(),
        );
      },
    );
  }
}
```

---

## 🗂️ Folder Structure

### Example: Creating a "product" Feature with Riverpod

```bash
# Command: Create new feature
# Feature name: product
# Pattern: Riverpod
```

**Generated structure:**

```
lib/
├── core/
│   ├── connections/
│   ├── databases/
│   ├── errors/
│   └── params/
├── features/
│   └── product/
│       ├── data/
│       │   ├── datasources/
│       │   ├── models/
│       │   └── repositories/
│       ├── domain/
│       │   ├── entities/
│       │   ├── repositories/
│       │   └── usecases/
│       └── presentation/
│           ├── providers/
│           │   └── product_providers.dart
│           ├── screens/
│           │   └── ProductScreen.dart
│           └── widgets/
└── main.dart
```

---

## 🤝 Contributing

1. **Fork** the repo at https://github.com/dawitsema/Flutter-Clean-Architecture-Starter-Kit-Vs-Extension
2. **Create** a new branch for your feature or fix
3. **Commit** your changes with descriptive messages
4. **Push** to your branch
5. **Submit** a Pull Request

We appreciate contributions that improve this extension!

---

## ⚖️ License

This project is licensed under the **MIT License**.

**Original Work**: [Majid Awol](https://github.com/maajidAwol) - Flutter-Clean-Architecture-Starter-Kit-Vs-Extension

**Enhancements**: Riverpod and Provider support added

See [LICENSE](LICENSE) file for full details.

---

## 💡 Credits & References

- **Original Author**: [Majid Awol](https://github.com/maajidAwol)
- **Original Inspiration**: [Flutter-Clean-Architecture-Starter-Kit-Template](https://github.com/resourceful-nebil/Flutter-Clean-Architecture-Starter-Kit-Template)
- **Flutter**: [flutter.dev](https://flutter.dev/)
- **Dart**: [dart.dev](https://dart.dev/)
- **Riverpod**: [riverpod.dev](https://riverpod.dev)
- **Provider**: [pub.dev/packages/provider](https://pub.dev/packages/provider)
- **VS Code**: [code.visualstudio.com](https://code.visualstudio.com/)

If you find this extension useful, please consider starring the original repos!

**Happy coding!** 🥳
