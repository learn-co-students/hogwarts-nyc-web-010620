import React, { Component } from "react";

export default class HogDetail extends React.Component {
    render(){
            return (
            <div>
                <p>{this.props.displayDetails.specialty}</p>
                <p>{this.props.displayDetails.greased ? "Greased" : "Not so Greasy"}</p>
                <p>{this.props.displayDetails.weight}</p>
                <p>{this.props.displayDetails['highest medal achieved']}</p>
            </div>
        )}
}