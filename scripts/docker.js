// Description:
// Bot for managing docker instances
// Commands:
// list - list running docker instances
var exec = require('child_process').exec;

module.exports = function(robot) {
  robot.hear(/list/, function(res) {
    res.send('getting list of docker instances');
    exec('./ps.sh', function(error, stdout, stderr) {
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

  robot.enter(function(res, user) {
    res.send('saw ' + user);
  });

  // robot.messageRoom('I am ready for commands.');
  robot.on('connected', function() {
    robot.logger.info('we should be ready now');
    robot.send('general', 'I am ready for commands.');
    robot.messageRoom('general', 'I am ready for commands.');
  });

  robot.logger.info('we should be ready now (non-event)');
  // robot.send('general', 'I am ready for commands.');
  robot.messageRoom('general', 'I am ready for commands.');
};
