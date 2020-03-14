import React, { Fragment } from "react";
import Hog from "./Hog.js"

class HogContainer extends React.Component {

  render() {
    return (
      <div>
        {this.props.hogs.map((hog, index) => <Hog key={index} hog={hog}/>)}
      </div>
    );
  }
}

//{this.props.map((hog, index) => <Hog key={index} hog={hog}/>)}
export default HogContainer;
