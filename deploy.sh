#!/bin/bash

# update hub
# https://hub.docker.com/r/bvalosek/bvalosek.com/
docker build -t bvalosek/bvalosek.com:latest .
docker push bvalosek/bvalosek.com:latest

# boot it
docker-compose up -d
