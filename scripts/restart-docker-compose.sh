#!/bin/bash

docker-compose down

docker volume rm task_task-mongodb-data

docker-compose rm

docker image rm task_server

docker-compose up

# Or run containers in the background
#docker-compose up -d
