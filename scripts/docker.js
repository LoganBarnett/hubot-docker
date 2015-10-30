
module.exports = (robot) => {
  robot.hear(/list/, (res) => {
    res.send('getting list of docker instances');
  });

  robot.error((error, res) => {
    robot.logger.error('error', error);
    if(res) {
      res.send('Error: ' + error);
    }
  });
};
