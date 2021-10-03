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
(optional)
3. You need to configure/install Redis on your device, look up for Redis installation for your OS
4. Sometimes you need to configure dlib, look up for dlib installation for your OS
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
