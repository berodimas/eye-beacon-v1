# EYE-BEACON: VERSION 1

Complete repository for Eye-Beacon: Version 1

Git Pull, Submodules, Update:
```
git init 
git pull https://github.com/berodimas/eye-beacon-v1.git
git submodule init 
git submodule update --remote
```

Setup Python Environment:
```
1. Create venv
2. Run pip install -r requirements.txt (all requirements.txt are same)
(MANDATORY)
3. You need to configure/install Redis (using Docker) on your device, look up for Redis installation for your OS
4. Sometimes you need to configure dlib, look up for dlib installation for your OS
```
Run 'Eye-Beacon: Version 1 Web Service':
```
cd gui
python web_service.py
```

Run 'Eye-Beacon: Version 1 People Counter':
```
cd ai
(change the arguments on run(url) function from people_counter.py with your own rtsp url)
python people_counter.py
```

Run 'Eye-Beacon: Version 1 Desktop Dashboard':
```
cd gui
python dashboard.py
```

Run Eye-Beacon: Version 1 using Docker:
```
docker build -t eye-beacon/web-service:1.0.0 ./webservice
docker build -t eye-beacon/people-counter:1.0.0 ./ai
docker build -t eye-beacon/desktop-dashboard:1.0.0 ./gui
docker-compose up -d
```

> Notes: There's some variable you need to configure on your [docker-compose.yml](https://github.com/berodimas/eye-beacon-v1/blob/master/docker-compose.yaml). Change the DISPLAY environtment variable on dekstop-dashboard container and -i command variable on people-counter container
