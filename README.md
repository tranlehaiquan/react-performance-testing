# About this project

This project is a demonstration of performance testing in React, or can just can call it my experiment React project (pet project).

## Notes, for my fish brain:

- Use react-scan for easier detecting performance issues
- Use React compiler for automatically generating memoized components
- Split component into smaller component so React Compiler can memory it, or we can memory it, avoid render the whole component
- With render a huge list component, or a list slow component we can Lazy load list, pagination, using some lib react-window

## Tech Stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://react.dev/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- [TanStack Router](https://tanstack.com/router) - Modern and scalable routing for React
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Project Features

- **Performance Comparison**: Demonstrates React.memo usage with a side-by-side comparison
  - Left side: Component without memo optimization
  - Right side: Component with memo optimization
- **Modern Routing**: Implements TanStack Router for type-safe routing
- **TypeScript**: Full TypeScript support for better development experience
- **Responsive Layout**: Uses Tailwind CSS grid system for responsive design

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/tranlehaiquan/react-performance-testing
```

2. Install dependencies

```bash
pnpm i
```

3. Run the development server

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
vite-react-ts/
├── src/
│   ├── components/
│   │   └── ListAlert.tsx     # Demo component for memo comparison
│   ├── App.tsx              # Main application component
│   ├── router.tsx           # Router configuration
│   └── routeTree.gen.ts     # Generated route tree
├── index.html
└── package.json
```

## License

MIT
