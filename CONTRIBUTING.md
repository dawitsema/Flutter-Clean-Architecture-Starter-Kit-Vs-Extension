# Contributing to Flutter Clean Architecture VS Code Extension (Extended)

Thank you for considering contributing to this open source project! 🎉

This extension extends the original Flutter Clean Architecture Starter Kit VS Code Extension by adding **Riverpod** and **Provider** support on top of the existing **BLoC** pattern.

## Ways to Contribute

- Fix bugs or improve existing behavior
- Add new state management templates or commands
- Improve documentation or examples
- Report issues and propose enhancements

## Getting Started

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:

```
git clone https://github.com/dawitsema/Flutter-Clean-Architecture-Starter-Kit-Vs-Extension.git

cd Flutter-Clean-Architecture-Starter-Kit-Vs-Extension
```

3. **Create a branch** for your work:

```
git checkout -b feature/my-new-feature
```

4. Install dependencies (Node/TypeScript side):

```
npm install
```


5. Open the project in **VS Code** and use the “Run Extension” launch configuration to debug the extension.

## Development Guidelines

- Keep **Clean Architecture structure** consistent for all patterns (core, data, domain, presentation). 
- For new state management options:
- Mirror the existing folder layout used by BLoC / Riverpod / Provider.
- Keep command names descriptive and consistent.
- Write clear commit messages (e.g. `feat: add riverpod template for product feature`).

## Pull Request Process

1. Ensure your changes build and the extension runs correctly.
2. Update relevant docs (`README.md`, examples, release notes) if behavior changes.
3. Push your branch and open a **Pull Request** against the `master` branch.
4. In the PR description, explain:
- What you changed
- Why it is useful
- How to test it

By submitting a contribution, you agree that your work will be licensed under the same **MIT License** as the rest of the project.
