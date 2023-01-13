import { Component } from "react";
class PersonCard extends Component {
    render(){
    const {firstName, lastName, age, hairColor} = this.props;
    return (
        <div className="personCard">
            <h1>{firstName},{lastName}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
        </div>
    );
    }
}
export default PersonCard;