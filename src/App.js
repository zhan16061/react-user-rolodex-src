import React, { Component } from 'react';
import './App.css';
import { CardList } from './Component/CardList/CardList'
import { SearchBox } from './Component/SearchBox/SearchBox'

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }))
      .catch(error => console.error('Error:', error));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { users, searchField } = this.state
    const filterUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>User Roldex</h1>
        <SearchBox placeholder='search user' handleChange={this.handleChange}/>
        <CardList users={filterUsers} />
      </div>
    );
  }
}

export default App;
