# Changelog

All notable changes to this project will be documented in this file.

## [1.1.0] - 2025-12-24

### Added

- Support for **Riverpod** state management pattern
  - Riverpod provider templates with FutureProvider and StateNotifier
  - ConsumerWidget screen templates
  - Automatic provider setup with repository injection
- Support for **Provider** state management pattern
  - ChangeNotifier provider templates with CRUD operations
  - Consumer widget screen implementation
  - Full lifecycle management (isLoading, error states)
- **State Management Pattern Selection**

  - Interactive quick pick menu when creating features
  - Support for BLoC, Riverpod, and Provider
  - Pattern-specific boilerplate generation

- **Enhanced Documentation**
  - Comprehensive README with all three patterns
  - Pattern-specific folder structures
  - Usage examples for each pattern
  - Dependencies guide

### Changed

- Modified `extension.ts` to support pattern selection
- Updated command palette with clearer descriptions
- Improved error handling and user feedback

### Maintained

- Original BLoC pattern (unchanged)
- MIT License compliance
- Original author credits
- All existing functionality

## [1.0.0] - Original Release

### Features

- BLoC pattern scaffolding
- Clean Architecture folder structure
- Boilerplate code generation
- Remove feature functionality
