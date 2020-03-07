const request = require('request');
const config = require('../config.js');

let getReposByUsername = (userName, callback) => {

  let options = {
    url: 'https://api.github.com/users/' + userName + '/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, (err, response, body) => {
    if (err) {
      console.log('error: ', err)
      callback(err, null)
    } else {
      var repos = JSON.parse(body)
      callback(null, repos )
    }
  })


}


/* https://api.github.com/users/ */
/* curl -u username:token https://api.github.com/user */ // ??
module.exports.getReposByUsername = getReposByUsername;