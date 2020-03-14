import React from 'react'

class Hog extends React.Component{
    state = {
        front: true
    }

    handleClick = () => {
        this.setState(prevState => {
            return {front: !prevState.front}
        })
    }

    render(){
        return(
            this.state.front ?
            <div onClick={this.handleClick}>Name: {this.props.hog.name}</div>
            :
            <div onClick={this.handleClick}>
                <div>Name: {this.props.hog.name}</div>
                <div>Specialty: {this.props.hog.specialty}</div>
                <div>Greased Status: {this.props.hog.greased ? "greased" : "ungreased"}</div>
                <div>Weight: {this.props.hog.weight}</div>
                <div>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</div>
            </div>
        )
    }

}

export default Hog