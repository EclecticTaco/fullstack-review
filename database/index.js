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
  // console.log('result inside save passed form app.post: ', result)
  result.forEach((obj) => {
    var temp =  new Repo({
      userName: obj.owner.login,
      profilePic: obj.owner.avatar_url,
      repoName: obj.name,
      repoURL: obj.html_url,
      forks: obj.forks,
      stars: obj.watchers_count
    })
    temp.save((err, cb) => {
      if (err) {
        console.log('error in .save: ', err);
        callback(err, result);
      } else {
        console.log('Saved to DB');
        callback(null, result);
      }
    })

  })
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;