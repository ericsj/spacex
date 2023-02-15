# About
This repository is composed of two components:
 - An Express backend that fetches [spacex api](https://github.com/r-spacex/SpaceX-API) when started and saves it in a Postgres database (with Prisma ORM)
 - A React + Material UI frontend that fetches the api and displays:
    - Last launch
    - Next launch
    - Last launches
    - Nest launches

## Run locally

1. [Install Docker Compose if you don't have it installed](https://docs.docker.com/compose/install/)

2. Setup a host alias so Optimize works

       echo "127.0.0.1       localhost.com" | sudo tee -a /etc/hosts

3. Start containers

        docker compose up

4. In your browser, go to [localhost.com:3000]() to check variation page, changed by Google Optimize

5. In your browser, go to [localhost:3000]() to check control page (the original page)