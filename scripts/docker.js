var exec = require('child_process').exec;

module.exports = function(robot) {
  robot.hear(/list/, function(res) {
    res.send('getting list of docker instances');
    exec('ssh 52.7.174.243 \'docker ps\'', function(error, stdout, stderr) {
      if(error) {
        res.send('Error: ' + error);
      }
      if(stderr) {
        res.send(stderr);
      }
      res.send(stdout);
    });
  });

  robot.error(function(error, res) {
    robot.logger.error('error', error);
    if(res) {
      res.send('Error: ' + error);
    }
  });
};
