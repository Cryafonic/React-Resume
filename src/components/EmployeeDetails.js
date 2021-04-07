import React from 'react';
import '../components/EmployeeDetails.css';

// Iterates through the object that is passed through the props and returns a formated object.
function EmployeeDetails(props) {
    const location = Object.keys(props.location).map((item, i) => (
        <p key={i} >{ props.location[item]}</p>
    ));
    
    return (
        <div>
            <img className="roundImage" src={props.profile} alt="profilePicture"/>
            <h1><strong>{props.name}</strong></h1>
            <h6>{props.label}</h6>
            <strong>{location}</strong>
            <a href={`mailto:${props.email}`}>Email {props.name}</a>
        </div>
    );
};

export default EmployeeDetails;