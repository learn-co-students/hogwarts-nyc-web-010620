import React, { Fragment } from "react";

// {name: "Augustus Gloop", specialty: "Vacuum tubes", greased: true, weight: 4.1, highest medal achieved: "wood"}

class HogCard extends React.Component {
    state = {
        frontShown: true
    }

    handleClick = () => {
        this.setState({
            frontShown: !this.state.frontShown
        })
    }

  render() {
      const {name, specialty, greased, weight} = this.props.hog
    return (
        this.state.frontShown ?
        <div className="ui eight wide column" onClick={() => this.handleClick()}>
            <h1>{name}</h1>
        </div>
        :
        <div className="ui eight wide column" onClick={() => this.handleClick()}>
            <ul>
                <li>Specialty: {specialty}</li>
                <li>Greased: {`${greased}`}</li>
                <li>Weight: {weight}</li>
            </ul>
        </div>
    );
  }
}

export default HogCard;
