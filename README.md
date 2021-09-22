# EYE-BEACON: VERSION 1

Complete repository for Eye-Beacon: Version 1

Git Pull, Submodules, Update
```
git init 
git pull https://github.com/berodimas/eye-beacon-v1.git
git submodule init 
git submodule update
```

Setup python environtment
```
1. Create venv
2. Run pip install -r requirements.txt (all requirements.txt are same)
(optional)
3. Sometimes you need to configure dlib, look up for dlib installation for your OS
```

Run 'Eye-Beacon: Version 1 People Counter':
```
cd ai
(change the arguments on run(url) function with your own rtsp url)
python dashboard.py
```

Run 'Eye-Beacon: Version 1 Desktop Dashboard':
```
cd gui
python dashboard.py
```