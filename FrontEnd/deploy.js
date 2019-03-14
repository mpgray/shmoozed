var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
  user: "deploy",
  password: "cs4450!",
  host: "18.223.204.244",
  port: 21,
  localRoot: __dirname + '/dist/shmoozed',
  remoteRoot: '/html/',
  include: ['*', '.htaccess'],
  deleteRemote: false,
  forcePasv: true
}

// Log Progress
ftpDeploy.on("log", data => console.log("[log]", data)); // Connection Logging
ftpDeploy.on('uploading', function(data) { // Upload Progress
    console.log('[uploading] Deploying file to server. Filename: %s', data.filename);
});

// use with promises
ftpDeploy.deploy(config)
  .then(res => {
    console.log('finished:', res);
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

// use with callback
ftpDeploy.deploy(config, function(err, res) {
  if (err){
    console.log(err);
    process.exit(1)
  }
  else{
    console.log('finished:', res);
    process.exit(0);
  }
});

