import React from 'react';

const RepoList = (props) => (
  <div className="repoBox">
    <img src={props.repo.profilePic} width="100" height="100"/>
    <h2>{props.repo.userName}</h2>
    <a href={props.repo.repoURL}>{props.repo.repoName}</a>
    <div># of forks: {props.repo.forks}</div>
    <div># of stars: {props.repo.stars}</div>
  </div>
)

export default RepoList;