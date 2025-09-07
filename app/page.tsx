import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to the Fullstack App Template!</h1>
        <p>
          You are using a modern template for fullstack web app development,
          featuring:
        </p>
        <ul>
          <li>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js (App Router)
            </a>{" "}
            for React-based SSR and SSG
          </li>
          <li>
            <a
              href="https://www.typescriptlang.org/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript
            </a>{" "}
            for type-safe code
          </li>
          <li>
            <a
              href="https://www.prisma.io/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prisma ORM
            </a>{" "}
            for PostgreSQL
          </li>
          <li>
            <a
              href="https://zod.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zod
            </a>{" "}
            for environment variable validation
          </li>
          <li>
            <a
              href="https://vitest.dev/guide/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vitest
            </a>{" "}
            for fast unit testing
          </li>
          <li>
            <a
              href="https://typicode.github.io/husky/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Husky
            </a>
            ,{" "}
            <a
              href="https://github.com/okonet/lint-staged"
              target="_blank"
              rel="noopener noreferrer"
            >
              lint-staged
            </a>
            , and{" "}
            <a
              href="https://commitlint.js.org/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              commitlint
            </a>{" "}
            for code quality
          </li>
          <li>
            <a
              href="https://docs.docker.com/compose/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docker Compose
            </a>{" "}
            for containerized development
          </li>
        </ul>
        <p>
          For a full overview, project structure, and setup instructions, check
          out the public{" "}
          <a
            href="https://github.com/TimDehler/fullstack-app-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            repository
          </a>
          .
        </p>
      </main>
    </div>
  );
}
