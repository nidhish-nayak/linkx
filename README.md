# LinkX

LinkX is a full-stack MERN app featuring social media functionalities such as post, like, upload, etc. This project was made using JWT Auth, ReactJS, NodeJS, ExpressJS, Redux Toolkit, RTK Query, MongoDB, Material UI.

## How to navigate the project ?

The project consists of two folders "client" and "api". Both are responsible for handling front-end (folder: client) and back-end (folder: api) features respectively. We will be explaining how the client and server folder structures are structured to better understand the architecture of the application.

### Client-side folder structure:

Here's an overview of the project's front-end folder structure:

```
:open_file_folder: client/
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
    └── index.html          # Root html file which is used by the DOM
    └── package.json        # Dependencies for the client side
    └── tsconfig.json       # All typescript configurations
    └── ...
```

### Server-side folder structure:

Here's an overview of the project's back-end folder structure:

```
:open_file_folder: api/
    ├── public/             # Public assets and HTML template
    ├── src/
    │   ├── assets/         # Assets / files used in the application
    │   ├── components/     # Reusable React components
    └── index.html          # Root html file which is used by the DOM
    └── package.json        # Dependencies for the client side
    └── tsconfig.json       # All typescript configurations
    └── ... This is yet to be updated
```
