# Fullstack App Template

This is a fullstack template built with Next.js, TypeScript, Prisma, and Vitest. It provides a modern starting point for web applications, including environment validation, database integration, testing, and best practices for code quality.

## Key Features

- **Next.js (App Router)**: Modern React framework for server-side rendering, routing, and static site generation.
- **TypeScript**: Type-safe development for both frontend and backend code.
- **Prisma**: ORM for PostgreSQL, with a sample `User` model in `prisma/schema.prisma`.
- **Environment Validation**: Uses Zod in `env/env.ts` to validate required environment variables at runtime.
- **Vitest**: Fast unit testing setup with a sample test in `app/hello.test.ts` and config in `vitest.config.ts`.
- **Husky & Lint-Staged**: Pre-commit hooks for code quality enforcement.
- **Commitlint**: Ensures commit messages follow conventions.
- **Docker Compose**: For containerized development and deployment.
- **Custom Fonts**: Uses Geist font via Next.js font optimization.
- **SVG Assets**: Ready-to-use SVGs in `public/`.

## Project Structure

```
app/                # Next.js app directory (pages, layout, styles, tests)
env/                # Environment validation with Zod
lib/                # Prisma client and controllers
prisma/             # Prisma schema
public/             # Static assets (SVGs, favicon)
.husky/             # Git hooks
README.md           # Project documentation
vitest.config.ts    # Vitest configuration
next.config.ts      # Next.js configuration
docker-compose.yml  # Docker setup
```

## Environment Setup

- `.env.development` and `.env.production` for environment variables.
- `env/env.ts` validates variables like `DATABASE_URL`, `NODE_ENV`, and `PORT` at runtime.

## Database

- Prisma is configured for PostgreSQL.
- Example `User` model provided in `prisma/schema.prisma`.

## Testing

- Vitest is set up for unit tests.
- Example test: `app/hello.test.ts`.

## Code Quality

- Husky, lint-staged, and commitlint are included for pre-commit checks and commit message linting.
