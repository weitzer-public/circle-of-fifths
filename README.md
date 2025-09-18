# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\nOpen [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\nYou will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\nSee the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\nIt correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\nYour app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Running with Docker locally

To build and run the application using Docker, follow these steps:

1.  **Build the Docker image:**
    ```bash
    docker build -t music-theory-app .
    ```

2.  **Run the Docker container:**
    ```bash
    docker run -p 8080:8080 music-theory-app
    ```

    The application will be available at [http://localhost:8080](http://localhost:8080).

## Deploying to Google Cloud Run

To deploy the application to Google Cloud Run, you can use the following `gcloud` command:

```bash
gcloud run deploy music-theory-app --source .
```

This command will build the Docker image using Google Cloud Build, push it to Google Container Registry, and deploy it to Cloud Run.

You will be prompted to select a region and allow unauthenticated invocations.

Alternatively, you can build the image yourself and deploy it:

1.  **Build and tag the image:**
    ```bash
    docker build -t gcr.io/YOUR_PROJECT_ID/music-theory-app .
    ```

2.  **Push the image to Google Container Registry:**
    ```bash
    docker push gcr.io/YOUR_PROJECT_ID/music-theory-app
    ```

3.  **Deploy the image to Cloud Run:**
    ```bash
    gcloud run deploy music-theory-app --image gcr.io/YOUR_PROJECT_ID/music-theory-app --platform managed
    ```

    Replace `YOUR_PROJECT_ID` with your Google Cloud project ID.
