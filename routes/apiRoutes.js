const noteData = require('../db/test-db.json');

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(noteData));


  app.post('/api/notes', (req, res) => {
      const existingID = [];
      noteData.forEach(element => {
          existingID.push(element.id);
      });
      let id;
    //   console.log("existing IDs ", existingID);
      for(let i = 1; id === undefined; i++){
        if(!existingID.includes(i)){
            id=i;
            // console.log("i value: ", i);
        }
      }
      noteData.push({id, ...req.body});
    //   console.log(noteData[noteData.length-1]);
      res.json(noteData[noteData.length-1]);
  });
};
