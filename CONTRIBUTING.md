# Contributing to Climate Dashboard

Thank you for your interest in contributing to the Climate Dashboard! This project aims to make climate data more accessible to everyone.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples**
* **Describe the behavior you observed and what you expected**
* **Include screenshots if relevant**
* **Note your environment** (OS, browser, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

* **Clear and descriptive title**
* **Detailed description of the proposed feature**
* **Explain why this would be useful** to users
* **Provide examples** of how it would work

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test your changes thoroughly
5. Commit with clear messages (`git commit -m 'Add some AmazingFeature'`)
6. Push to your branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

#### Pull Request Guidelines

* Follow the existing code style
* Update documentation if needed
* Add tests if applicable
* Keep changes focused (one feature per PR)
* Write clear commit messages

## Development Setup

### Prerequisites

* Node.js 18+
* npm or yarn

### Local Development

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/climate-dashboard.git

# Install dependencies
npm install

# Create .env.local file
cp .env.local.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your changes.

## Code Style

* Use TypeScript for type safety
* Follow existing naming conventions
* Use Prettier for formatting
* Keep components small and focused
* Write meaningful comments for complex logic

## Adding New Features

### New Climate Metrics

To add a new climate metric:

1. Add model in backend (`climate-api`)
2. Create API endpoint
3. Add TypeScript interface in `lib/api.ts`
4. Create visualization component
5. Update documentation

### New Visualizations

1. Use Chart.js for consistency
2. Ensure mobile responsiveness
3. Add loading states
4. Handle errors gracefully
5. Add accessibility features

## Testing

```bash
# Run linter
npm run lint

# Type check
npx tsc --noEmit

# Format code
npx prettier --write .
```

## Documentation

* Update README.md if adding features
* Add JSDoc comments for functions
* Update API documentation for endpoint changes
* Include examples in documentation

## Data Sources

When adding new data sources:

* Ensure data is from reputable sources (NASA, NOAA, etc.)
* Document the data source clearly
* Add proper attribution
* Verify data accuracy
* Handle API rate limits

## Accessibility

* Use semantic HTML
* Add ARIA labels where needed
* Ensure keyboard navigation
* Test with screen readers
* Maintain color contrast ratios

## Questions?

* Open an issue with the "question" label
* Check existing documentation first
* Be respectful and patient

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to climate awareness through data!** 🌍
