import React from 'react'

class Sort extends React.Component{

    render(){
        return(
            <select onChange={this.props.changeSort}>
                <option value="default">default</option>
                <option value="weight">weight</option>
                <option value="name">name</option>
            </select>
        )
    }
}

export default Sort