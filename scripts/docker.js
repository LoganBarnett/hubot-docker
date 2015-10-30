
module.exports = function(robot) {
  robot.hear(/list/, function(res) {
    res.send('getting list of docker instances');
  });

  robot.error(function(error, res) {
    robot.logger.error('error', error);
    if(res) {
      res.send('Error: ' + error);
    }
  });
};
