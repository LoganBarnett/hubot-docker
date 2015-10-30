
module.exports = (robot) => {
  robot.hear(/list/, (res) => {
    res.send('getting list of docker instances');
  });
};
