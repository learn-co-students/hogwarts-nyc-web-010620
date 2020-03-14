import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  state={
    filteredHogs: hogs
  }

  filterHogs = () => {
    let greased = this.state.filteredHogs.filter(hog => hog.greased == true)
    this.setState({filteredHogs: greased})
  }

  allHogs = () => {
    this.setState({filteredHogs: hogs})
  }

  sortByName = () => {
    let sortedHogs = [...this.state.filteredHogs]
    sortedHogs.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({filteredHogs: sortedHogs})
  }

  sortByWeight = () => {
    let sortedHogs = [...this.state.filteredHogs]
    sortedHogs.sort((a, b) => b.weight - a.weight)
    console.log(sortedHogs)
    this.setState({filteredHogs: sortedHogs})
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <button onClick={this.filterHogs}> Filter for Greased Hogs </button>
        <button onClick={this.allHogs}> All Hogs </button>
        <button onClick={this.sortByName}> Sort by Name </button>
        <button onClick={this.sortByWeight}> Sort by Weight </button>
         <HogContainer hogs={this.state.filteredHogs}/>
      </div>
    );
  }
}

export default App;
