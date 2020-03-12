import React, { Component } from "react"
import PigTile from './PigTile.js'

export default class PigContainer extends React.Component {

    state = {
        filter: false, 
        sortName: false,
        sortWeight: false
    }

    
    filterToggle = () => {
        console.log(this.state)
        this.state.filter ? this.setState({filter: false}) : this.setState({filter: true})
    }
    sortNameToggle = () => {
        this.state.sortName ? this.setState({sortName: false}) : this.setState({sortName: true})
    }
    sortWeightToggle = () => {
        this.state.sort ? this.setState({sort: false}) : this.setState({sort: true})
    }

    render(){
        return (
            <div>
                <button onClick={this.filterToggle}> Filter By Grease </button>
                <button onClick={this.sortNameToggle}> Sort By Name </button>
                <button onClick={this.sortWeightToggle}> Sort By Weight </button>
                <div className="ui grid container">
                {this.state.filter ? this.props.porkData.filter(hog => hog.greased === true).map(hog => {return <PigTile hogData={hog} key={hog.id} />}) :
                    this.props.porkData.map(hog => {return <PigTile hogData={hog} key={hog.id} />}
                    )}
                </div>
             </div>
            
        )
    }
}