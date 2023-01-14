import { Component } from "react";
import React from "react";
class PersonCard extends Component {
    constructor(props){
        super(props)

        this.state = {counter : this.props.age}
    }
    render(){
    const {firstName, lastName, hairColor} = this.props;
    return (
        <>
        <div className="personCard">
            <h1>{firstName},{lastName}</h1>
            <p>Age: {this.state.counter}</p>
            <p>Hair color: {hairColor}</p> 
            <button onClick={()=> this.setState({counter: this.state.counter+1}) }>Birthday Button for {firstName} {lastName}</button>
        </div>
    </> 
    );
    }
}
export default PersonCard;