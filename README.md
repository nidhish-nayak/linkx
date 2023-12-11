# LinkX - Social Media App

> **Warning**
> This app is a work in progress. I am building this in public. You can follow the process on Github.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/Nidhish-D-Nayak/linkx/tree/main)

## About the Project

LinkX is a full-stack MERN app featuring social media functionalities such as posts, likes, uploads, etc. This project is built using JWT Auth, ReactJS, NodeJS, ExpressJS, Redux Toolkit, RTK Query, MongoDB, Material UI.

<p align="left">
  
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/nidhish-nayak/linkx" />
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/nidhish-nayak/linkx" />
  <img alt="Repo Size" src="https://img.shields.io/github/repo-size/nidhish-nayak/linkx" />
  <img alt="GitHub Issues" src="https://img.shields.io/github/issues/nidhish-nayak/linkx" />
  <img alt="GitHub Closed Issues" src="https://img.shields.io/github/issues-closed/nidhish-nayak/linkx" />
  <img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/nidhish-nayak/linkx" />
  <img alt="GitHub Closed Pull Requests" src="https://img.shields.io/github/issues-pr-closed/nidhish-nayak/linkx" />
  <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/nidhish-nayak/linkx" />
  <img alt="GitHub Commit Activity (Year)" src="https://img.shields.io/github/commit-activity/y/nidhish-nayak/linkx" />
  <img alt="Github License" src="https://img.shields.io/github/license/nidhish-nayak/linkx" />

</p>

## How to navigate the Project ?

The project consists of two folders `client` and `api`. Both are responsible for handling frontend and backend features respectively. Below are the details on how the client and server folders are structured to better understand the architecture of the application.

### Frontend folder structure:

Here's an overview of the project's frontend folder structure:

```
📂client/
    ├── public/             # Public assets and HTML template
    ├── src/
    │   ├── assets/         # Assets / files used in the application
    │   ├── components/     # Reusable React components
    │   ├── pages/          # Top-level application pages
    |   ├── types/          # Custom and global types defined
    │   ├── utils/          # Utility functions and constants
    │   ├── App.css         # Styles for App.tsx
    │   ├── App.tsx         # Main client-side application file
    │   ├── index.css       # Global css file
    │   └── main.tsx        # All Routes & protected routes are handled here
    └── index.html          # Root html file
    └── package.json        # Dependencies for the client-side
    └── tsconfig.json       # All typescript configurations
    └── ...
```

### Backend folder structure:

Here's an overview of the project's backend folder structure:

```
📂api/
    ├── public/             # Public assets and HTML template
    ├── src/
    │   ├── assets/         # Assets / files used in the application
    │   ├── components/     # Reusable backend components
    └── index.html          # Root html file
    └── package.json        # Dependencies for the client-side
    └── tsconfig.json       # All typescript configurations
    └── ... This is yet to be updated
```

## Features ✨

-   **User Authentication**: Users can create accounts, log in, and securely access their personalized profiles. We have used JWT for user authentication feature.
-   **Responsive Design**: Enjoy a consistent and visually appealing experience across various devices.
-   **Search**: Search functionality to search your and other's posts.
-   Other features will be added here when implemented...

## Installation 💻

Follow the steps below to run the project locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/Nidhish-D-Nayak/linkx.git
    ```

2. Navigate to the project directory:

    ```bash
    cd linkx
    ```

### Frontend:

To run the client locally, follow these steps:

1. Navigate to the client directory:

    ```bash
    cd client
    ```

2. Install the dependencies using pnpm / npm (make sure you have pnpm installed):

    ```bash
    pnpm install
    ```

3. Start the development server for frontend:

    ```bash
    pnpm start
    ```

4. Open your browser and visit `http://localhost:5173/` to access the frontend of LinkX application.

### Backend:

To run the server locally, follow these steps:

1. Navigate to the api directory:

    ```bash
    cd api
    ```

2. Install the dependencies using pnpm / npm (make sure you have pnpm installed):

    ```bash
    pnpm install
    ```

3. Start the development server for backend:

    ```bash
    pnpm start
    ```

4. Open your browser and visit `http://localhost:3000/` to access the backend of LinkX application.

> **Note**
> Make sure both client and api are running locally for the fullstack features to work.

Server side commands will be updated as we implement the apis in future...

## Technologies Used 🔧

### Frontend technologies:

-   **Vite**: Latest version of Vite is used for react frontend.
-   **Typescript**: TypeScript checks a program for errors before execution, ensures better developer experience.
-   **React**: JavaScript library for building user interfaces.
-   **Redux**: State management tool for predictable state updates.
-   **Redux Toolkit**: A more opinionated state management tool for better developer experience.
-   **Axios**: Promise-based HTTP client for making API requests.
-   **SCSS**: Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.
-   **React Router**: react-router-dom V6 is used for the application routing.
-   ...Upcoming updates

### Backend technologies:

-   Yet to be implemented...

## Contributing 🤝

We welcome open-source contributions to **Linkx - social media project** ! If you would like to contribute, please follow the below steps:

1. Fork the repository.
2. Create a new branch for your feature/fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push the changes to your forked repository: `git push origin feature-name`.
5. Open a pull request to the main repository's `main` branch.

### Contributors

<a href="https://github.com/nidhish-nayak/linkx/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nidhish-nayak/linkx" />
</a>

## License 📝

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Contact 💬

If you have any questions, suggestions, or feedback, please don't hesitate to reach out. You can contact the project maintainer at [nidhibelthangady@gmail.com](mailto:nidhibelthangady@gmail.com).

<br/>

<p align="center">
  <b>Made with 😎 by Nidhish Nayak.</b>
</p>
