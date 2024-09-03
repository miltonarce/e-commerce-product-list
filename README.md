# E-commerce-product-list

## Project Overview
This project is a monorepo built with npm workspaces. The frontend is located in the `client` folder and is developed using Vite, React, TypeScript, and Tailwind. The backend is located in the `server` folder and is built with Fastify. The project can be executed from the root directory by first running **`npm install`** and then **`npm run dev`**.

Please note that the `.env` file has been included in the repository for easier setup, but in a real-world scenario, it should not be committed.

Both the frontend and backend are configured with ESLint. Additionally, Husky is set up in the root directory with a pre-commit hook that checks for linting errors before committing and a pre-push hook that builds the project before pushing the code to the repository.

## Extra Info
A debounce function was implemented for the search component. In this case, it doesn't apply since the filtering is done locally and there isn't a `/search` method making multiple requests to the backend. However, in a real-world scenario, it would be even more useful to limit the number of requests.
