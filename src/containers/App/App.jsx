import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import Result from '../../components/Result/Result';
import getRecipeData from '../../services/controller';

class App extends Component {
  state = {
    inputValue: '',
    result: [],
  }

  onInputChange = async (input) => {
    this.setState(() => ({ inputValue: input }));
    const recipeData = await getRecipeData(input, 2);
    this.setState(() => ({ result: recipeData }));
  }

  render() {
    const { inputValue, result } = this.state;
    return (
      <div className="App">
        <NavBar />
        <SearchBar onChangeFn={this.onInputChange} inputValue={inputValue} />
        <Result list={result} />
      </div>
    );
  }
}

export default App;
