const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


let repoSchema = new mongoose.Schema({
  repo: {
    userName: String, // user name
    profilePic: String,  // URL to their profile pic
    repoName: String, // string of their repo name
    repoURL: String, // ULR string link to their repo
    forks: Number, // number of times their repo has been forked
    stars: Number, // number of times their repo has been stared
  }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (result, callback) => {
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
        callback(err, result);
      } else {
        callback(null, result);
      }
    })
  })

}
let pull = (callback) => {
  Repo.find().
  limit(25).
  then((result) => {
    callback(result)
  })
}

module.exports.save = save;
module.exports.pull = pull;