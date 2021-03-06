const path = require('path');

module.exports = (app) => {
  // app.get('/index', (req, res) => {
  //   res.sendFile(path.join(__dirname, '../public/index.html'));
  // });

  app.get('/notes', (reqs, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found default to home
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
