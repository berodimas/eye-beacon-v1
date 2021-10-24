# EYE-BEACON: VERSION 1

Complete repository for Eye-Beacon: Version 1

## Table of Contents
* [Pulling Repository](#pulling-repository)
* [Arguments Explanation](#arguments-explanation)
* [Prerequisite](#prerequisite)
* [Running Application](#running-application)
    * [Python Interpreter](#python-interpreter)
    * [Docker Container](#docker-container)
    * [PM2 Process Manager](#pm2-process-manager)
---
## Pulling Repository
**git pull, submodules, update:**
```
git init 
git pull https://github.com/berodimas/eye-beacon-v1.git
git submodule init 
git submodule update --remote
```
---
## Arguments Explanation
**Environment variable/arguments explanation:**
```
-u, --url = url for http host
-p, --port = port for http host
-r, --redis = input for redis host
-p, --prototxt = path to Caffe 'deploy' prototxt file
-m, --model = path to Caffe pre-trained model
-i, --input = input for IP camera
```
---
## Prerequisite 
**Prerequisite before running the application:**
```
1. You need to configure/install Redis (using Docker) on your device, look up for Redis installation for your OS
2. Sometimes you need to configure dlib, look up for dlib installation for your OS
```

**Run Redis Container:**
```
docker pull redis:alpine
docker run --name redis -p 6379:6379 -v ./docker/redis/data:/data -d redis:alpine redis-server
```
---
## Running Application
**There are 3 ways to run this application:**
* [Python Interpreter](#python-interpreter)
* [Docker Container](#docker-container)
* [PM2 Process Manager](#pm2-process-manager)
---
## Python Interpreter
**Setup python environment:**
```
1. Create venv
2. Run pip install -r requirements.txt (all requirements.txt are same)
```
**Run 'Eye-Beacon: Version 1 Web Service':**
```
cd webservice
python web_service.py -u 0.0.0.0 -p 5001 -r [REDIS_HOST_URL]
```
**Run 'Eye-Beacon: Version 1 People Counter':**
```
cd ai
(change the arguments on run(url) function from people_counter.py with your own rtsp url)
python people_counter.py -i [INPUT_RTSP_URL] --prototxt [PROTOTXT_PATH] --model [MODEL_PATH] -u [HTTP_URL] -r [REDIS_HOST_URL]
```
**Run 'Eye-Beacon: Version 1 Desktop Dashboard':**
```
cd gui
python dashboard.py -r [REDIS_HOST_URL]
```
---
## Docker Container
**Run Eye-Beacon: Version 1 using Docker:**
```
docker build -t eye-beacon/web-service:1.0.0 ./webservice
docker build -t eye-beacon/people-counter:1.0.0 ./ai
docker build -t eye-beacon/desktop-dashboard:1.0.0 ./gui
docker-compose up -d
```
> Notes: There's some variable you need to configure on your [docker-compose.yml](https://github.com/berodimas/eye-beacon-v1/blob/master/docker-compose.yaml). Change the DISPLAY environtment variable and all arguments from "command"-line based on your environment
---
## PM2 Process Manager
> Visit [PM2 Official Website](https://pm2.keymetrics.io/) for installation details
**Run Eye-Beacon: Version 1 using PM2 Process Manager:**
```
pm2 start ecosystem.config.js
```
> Notes: There's some variable you need to configure on your [ecosystem.config.js](https://github.com/berodimas/eye-beacon-v1/blob/master/ecosystem.config.js). Change all arguments from "args"-line based on your environment
---