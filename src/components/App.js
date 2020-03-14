import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from "./Filter.js"
import Sort from "./Sort";

class App extends Component {

  state = {
    hogs: hogs,
    filter: "all",
    selectedHogs: hogs,
    sort: "default"
  }

  handleFilter = (evt) => {
    this.setState({filter: evt.target.value})

    let newHogs = []

    switch(evt.target.value){
      case "all":
        newHogs = this.state.hogs
      break;
      case "greased":
        newHogs = this.state.hogs.filter(hog => hog.greased === true)
      break;
      case "ungreased":
        newHogs = this.state.hogs.filter(hog => hog.greased === false)
      break;
    }

    this.setState({selectedHogs: newHogs})
  }

  handleSort = (evt) => {
    this.setState({sort: evt.target.value})

    let newHogs = []

    switch(evt.target.value){
      case "default":
        
      break;
      case "name":
        newHogs = this.state.selectedHogs.sort((a, b) => a.name.localeCompare(b.name))
      break;
      case "weight":
        newHogs = this.state.selectedHogs.sort((a, b) => a.weight - b.weight)
      break;
    }
    this.setState({selectedHogs: newHogs})
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <Filter changeFilter={this.handleFilter}/>
        <Sort changeSort={this.handleSort}/>
        <HogContainer hogs={this.state.selectedHogs}/>
      </div>
    );
  }
}

export default App;
