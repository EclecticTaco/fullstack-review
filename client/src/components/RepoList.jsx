import React from 'react';

const RepoList = (props) => (
  <div className="repoBox">
    <div className="repo">
    <img className="repo" src={props.repo.profilePic} width="100" height="100"/>
    </div>
    <h2 className="repo" >{props.repo.userName}</h2>
    <div className="repo">
    <a href={props.repo.repoURL} target="_blank">{props.repo.repoName}</a>
    </div>
    <div className="repo" ># of forks: {props.repo.forks}</div>
    <div className="repo" ># of stars: {props.repo.stars}</div>
  </div>
)

export default RepoList;