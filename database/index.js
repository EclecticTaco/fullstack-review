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
  var uName;
  var pPic;
  var repName;
  var repURL;
  var fork;
  var starTemp;
  result.forEach((obj) => {
    uName = obj.owner.login;
    pPic = obj.owner.avatar_url;
    repName = obj.name;
    repURL = obj.html_url;
    fork = obj.forks;
    stars = obj.watchers_count;
    var temp =  new Repo({
      userName: uName,
      profilePic: pPic,
      repoName: repName,
      repoURL: repURL,
      forks: fork,
      stars: starTemp
    })
    temp.save((err) => {
      if (err) {
        console.log('error in .save: ', err)
      } else {
        console.log('Saved to DB')
      }
    })
  })
  callback(result)
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;