# Run locally

1. [Install Docker Compose if you don't have it installed](https://docs.docker.com/compose/install/)

2. Setup a host alias so Optimize works

       echo "127.0.0.1       localhost.com" | sudo tee -a /etc/hosts

3. Start containers

        docker compose up

4. In your browser, go to [localhost.com:3000]() to check variation page, changed by Google Optimize

5. In your browser, go to [localhost:3000]() to check control page (the original page)