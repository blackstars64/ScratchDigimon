## ScratchDigimon

Welcome to a game where you have to find your favorite Digimon thanks to a scratching system! A simple and entertaining project to pass the time. This game lets you play while earning DigiPoint to expand your collection.

## Features

- **ScratchDigimon Game** Play by scratching the card and guessing which Digimon it is. The more you scratch, the fewer Digipoints you'll earn.

- **Your collection** A collection page where you can see and buy your favorite digimons.

- **Authentication** Sign up quickly and log in to start playing.

- **Admin** As administrator, you have access to the panel to modify digimons.

- ### Technologies used:

  - **Node.js and Express.js:** The server is built with Node.js and Express.js to manage requests and responses.
  - **SQL:** The database uses SQL to store information on users, digimons and more.
  - **Jsonwebtoken:** Jsonwebtoken is used to manage authentication and game security.
  - **React.js:** The front-end of the game is developed with React.js to deliver an interactive user experience.
  - **Axios:** Axios is used to make HTTP requests between client and server.
  - **Sass:** Styles are managed with Sass, offering a more modular and organized CSS structure.

## Install

- `git clone git@github.com:blackstars64/ScratchDigimon.gitendence` : Clone the repo
- `npm install` : installed dependence script

## Setup

- In the `backend folder`, `copy` and `paste` the `.env.sample` and rename it `.env`.
- The same action for the `.env.sample`, but in the `frontend folder`.
- `Modify` the two `.env` file with the necessary information in backend.

## Starting

- `db:migrate` : Run the database migration script
- `db:seed` : Run the database seed script
- `dev` : Starts both servers (frontend + backend) in one terminal

### The server will be accessible at _http://localhost:3310_ and the client at _http://localhost:3000_.

## some pictures

![Capture d'écran du jeu](https://i.postimg.cc/DyZW4C1B/Capture-d-cran-2024-02-02-123531.png)
![Capture d'écran du jeu](https://i.postimg.cc/VNYP5hCN/Capture-d-cran-2024-02-02-123700.png)
![Capture d'écran du jeu](https://i.postimg.cc/D0qKS3B8/Capture-d-cran-2024-02-02-123254.png)
