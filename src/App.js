import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component{

  constructor(){
    super()
    this.state = {
      'monsters': [],
      'search_field': '',
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users').then(
      response => response.json().then(
        users => this.setState({ 'monsters': users})
      )
    )
  }

  render() {
    let monsters_filter = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(this.state.search_field.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Inc.</h1>
        <SearchBox 
          placeholder="search monster" 
          handleChange={e => this.setState({search_field: e.target.value})}
        />
        <CardList 
          monsters={monsters_filter} 
        />
      </div>
    );
  }

  changeName(search){
    console.log(search)
    const monsters_filter = this.state.monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))
    this.setState({
      'search_field': search,
      'monsters_filter': monsters_filter,
    }, () => console.log(this.state))
  }
}

export default App;
