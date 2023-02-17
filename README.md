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

2. Start app

        docker compose up

3. In your browser, go to [localhost:3000]()