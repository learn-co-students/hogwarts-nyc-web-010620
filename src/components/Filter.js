import React from 'react'

class Filter extends React.Component{

    render(){
        return(
            <select onChange={this.props.filterSort}>
                <option value="all">all</option>
                <option value="greased">greased</option>
                <option value="ungreased">ungreased</option>
            </select>
        )
    }

}

export default Filter