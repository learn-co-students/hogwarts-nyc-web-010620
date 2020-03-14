import React, { Fragment } from "react";
import HogCard from "./HogCard.js"

// {name: "Augustus Gloop", specialty: "Vacuum tubes", greased: true, weight: 4.1, highest medal achieved: "wood"}

class HogContainer extends React.Component {
  render() {
    console.log(this.props.hogs)
    return (
      <div className="ui eight wide column">
        {this.props.hogs.map( hog => <HogCard key={hog.id} hog={hog}/>)}
      </div>
    );
  }
}

export default HogContainer;
