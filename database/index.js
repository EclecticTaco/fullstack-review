const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

/* var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
}); */


let repoSchema = new mongoose.Schema({
  repo: {
    userName: String, // user name
    profilePic: String,  // URL to their profile pic
    repoName: String, // string of their repo name
    repoURL: String, // ULR string link to their repo
    forks: Number, // number of times their repo has been forked
    stars: Number // number of times their repo has been stared
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (result, callback) => {
  console.log('result inside save passed form app.post: ', result)
  callback(result)
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;