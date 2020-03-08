import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    fetch("/repos")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({repos: data})
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      method: "POST",
      url: "/repos",
      data: {term},
      success: () => {
        $.ajax({
          method: "GET",
          url: "/repos",
          success: (result) => {
            var results = JSON.parse(result);
            this.setState({repos: results});
          }
        })
      }
    }

  );

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search}/>
      {this.state.repos.map((obj) => {
        return <RepoList repo={obj}/>
      })}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));