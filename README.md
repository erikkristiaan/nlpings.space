# [nlpings.space 🐦](https://nlpings.space)

A simple web application which tracks reddit groupbot pings using react, express, mongodb and python.

![nlpings.space mockup](https://user-images.githubusercontent.com/8892722/175808915-822d28cb-9ff3-46ee-9bec-ef6bcb044ad4.png)

---

### A. Installation & Building the application
1. Install Docker Desktop on your machine. ([Follow the installation instructions here](https://docs.docker.com/get-docker/))

2. Clone the development environment with:
    ```
    git clone https://github.com/erikkristiaan/nlpings.space.git
    ```

3. Create a file for environment variables with:
     ```
     cd nlpings.space && cp .env.example .env
     ```

4. Set up the environment variables in the `.env` file.
    - Open the newly created `.env` file in a text editor.
    - You will need to provide `mongodb` with a name to use for the database, along with a username and password for authentication.
    - For the reddit python scraper, provide an account with a username and password. Because authentication credentials are currently stored in plain text in the `.env` file, it's recommended to use a burner account for this purpose.
    - Finally, you will need to generate an OAuth token (A a reddit API client ID & Reddit API client secret) to use reddit's API
        - From the reddit account you intend to use, navigate to App Preferences: https://old.reddit.com/prefs/apps
        - Click `create another app` at the bottom.
        - [Fill in the required details.](https://i.imgur.com/4QbEmu7.png) Make sure to select `script` and click `create app`.
        - [Add the newly generated reddit API client ID and secret to the `.env` file.](https://i.imgur.com/6yoK823.png)

3. Build and run the containers with docker.
    ```
    docker-compose up
    ```

4. Navigate to `localhost:3000` to see the app running live. It will take a bit of time for the scraper to start populating the database (this is mainly due to reddit rate-limiting use of their API).

### B. Running & Developing the front-end application locally

The front-end react application can be run locally outside of the docker build container to make development easier with webpack's live-reload capabilities. This part assumes that you already have Node installed.

1. Follow steps `1 - 4` from part A, ensuring the docker container system is built and running so the front-end application can access data from the API and database.

2. Run the following commands:
    ```
    cd ./app
    npm install
    npm start
    ```

3. A live-reload server will start on port 3000. If this port is already occupied by the container running the express server, `create-react-app` will default to the next available port.