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

// use with promises
ftpDeploy.deploy(config)
  .then(res => console.log('finished:', res))
  .catch(err => console.log(err))

// use with callback
ftpDeploy.deploy(config, function(err, res) {
  if (err) console.log(err)
  else console.log('finished:', res);
});

