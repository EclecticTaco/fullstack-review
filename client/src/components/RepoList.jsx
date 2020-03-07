import React from 'react';

const RepoList = (props) => (
  <div>
    <h4>{props.repo.userName}</h4>
    <img src={props.repo.profilePic} width="50" height="50"/>
    <div>{props.repo.repoName}</div>
    <div>{props.repo.repoURL}</div>
    <div>{props.repo.forks}</div>
    <div>{props.repo.stars}</div>
  </div>
)

export default RepoList;