var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
  user: "deploy",                   // NOTE that this was username in 1.x
  password: "cs4450!",           // optional, prompted if none given
  host: "18.223.204.244",
  port: 21,
  localRoot: __dirname + '/dist/shmoozed',
  remoteRoot: '/html/',
  // include: ['*', '**/*'],      // this would upload everything except dot files
  include: ['*', '.htaccess'],
  //exclude: ['dist/**/*.map'],     // e.g. exclude sourcemaps - ** exclude: [] if nothing to exclude **
  deleteRemote: false,              // delete ALL existing files at destination before uploading, if true
  forcePasv: true                 // Passive mode is forced (EPSV command is not sent)
}
//console.log(config.localRoot);

// use with promises
ftpDeploy.deploy(config)
  .then(res => console.log('finished:', res))
  .catch(err => console.log(err))

// use with callback
ftpDeploy.deploy(config, function(err, res) {
  if (err) console.log(err)
  else console.log('finished:', res);
});

