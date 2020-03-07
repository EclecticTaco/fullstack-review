const express = require('express');
const parser = require('body-parser')
const gitHub = require('../helpers/github.js')
const DB = require('../database/index.js')
let app = express();

app.use(express.urlencoded())
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var handle = req.body.term
  console.log('input from client in app.post: ', handle)
  /* calls helpers/github.js */
  gitHub.getReposByUsername(handle, (err, result) => {
    if (err) {
      console.log('error in github API query: ', err);
    } else {
      // console.log('result from app.post: ',result)
      /* calls save func in database/index.js */
      DB.save(result, (err, resultFromCB) => {
        if (err) {
          console.log('error when posting to DB:', err);
        } else {
          console.log('POSTED to DB: Server side no err');
        }
      })
    }
  })
  res.sendStatus(201);
  res.end('Server recieved POST');
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

/* Use these github handles as example data
eric-do


*/