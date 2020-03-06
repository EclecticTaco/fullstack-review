const request = require('request');
const config = require('../config.js');

let getReposByUsername = (userName) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/' + userName,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, (err, response, body) => {
    if (err) {
      console.log('error: ', err)
    } else {
      var info = JSON.parse(body)
      console.log(info)
    }
  })


}


/* https://api.github.com/users/ */
/* curl -u username:token https://api.github.com/user */ // ??
module.exports.getReposByUsername = getReposByUsername;