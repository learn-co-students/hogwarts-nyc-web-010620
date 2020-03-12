import React, { Fragment } from "react";
import HogDetail from './HogDetail.js'


class PigTile extends React.Component {

  state = {
    showDetails: false
  }

  detailToggle = () => {
    this.state.showDetails ? this.setState({showDetails: false}) : this.setState({showDetails: true})
  }

  
  render() {
    return  (<div className="pigTile" onClick={this.detailToggle}>
      <div className="pigTile h3">{this.props.hogData.name}</div>
      <div > {this.state.showDetails ? <HogDetail displayDetails={this.props.hogData}/> : null} </div>
      </div>)
  }
}

export default PigTile;
