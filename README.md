# Banxso Media Test Task

This is a test task for Banxso Media. The task is to create a simple web application that gets information about rockets from the SpaceX API and displays it on a page. The application was made according to [design](https://www.figma.com/design/JTokTA6Xfcy9Kb62xRBRKv/Test-Junior?node-id=0-1&t=SnDF9hB8vd2wwcbR-0).

Demo link: [DEMO](https://kinqbert.github.io/banxso-media-test-task/)

Additionally, mock data has been created to display for slides and team members:

- [Slides mock info file](./public/api/slides.json)
- [Team members mock info file](./public/api/team-members.json)

Sliders were implemented using [Swiper](https://swiperjs.com/react) library.

# Technologies used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/) - CSS preprocessor
- [Swiper](https://swiperjs.com/react) - slider library
- [Axios](https://axios-http.com/) - HTTP client
- [React Router](https://reactrouter.com/) - routing library
- [Vite](https://vitejs.dev/) - build tool

# How to run

1. Clone the repository

```
https://github.com/kinqbert/banxso-media-test-task.git
```

2. Install dependencies

```
npm install
```

3. Run the application

```
npm run dev
```

4. Open the application in the browser

```
http://localhost:5173
```

# Automatic deployment

The project uses GitHub workflows to automatically deploy the application to GitHub Pages. The deployment is triggered when a new commit is pushed to the `master` branch. The deployment workflow can be found in the [.github/workflows](./.github/workflows) directory.