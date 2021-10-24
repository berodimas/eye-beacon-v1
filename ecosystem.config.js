module.exports = {
  apps: [{
    name: 'webservice',
    autorestart: false,
    watch: true,
    cmd: 'webservice\\web_service.py',
    args: '-u 0.0.0.0 -p 5001 -r localhost'
  }, {
    name: 'people-counter',
    autorestart: false,
    watch: true,
    cmd: '.\\ai\\people_counter.py',
    args: '-i rtsp://192.168.0.107:8554/cam --prototxt ./ai/mobilenet_ssd/MobileNetSSD_deploy.prototxt --model ./ai/mobilenet_ssd/MobileNetSSD_deploy.caffemodel -u http://192.168.0.107:5001//eyebeacon/dashboard/counter -r localhost'
  }, {
    name: 'dekstop-dashboard',
    autorestart: false,
    watch: true,
    cmd: 'gui\\dashboard.py',
    args: '-r localhost',
    interpreter: 'C:\\Users\\Dimas\\Dev\\_aligness\\env\\Scripts\\python.exe'
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
