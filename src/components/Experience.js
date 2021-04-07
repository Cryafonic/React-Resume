import React from 'react';

// Receives the array of objects from json file and formates it.
function Experience(props){
    const experience = props.experience.map((item, i) => (
        <div key={i}>
            <p><strong>Company:</strong> {props.experience[i].company}</p>
            <p><strong>Position:</strong> {props.experience[i].position}</p>
            <p><strong>Location:</strong> {props.experience[i].location}</p>
            <p><strong>Start date:</strong> {props.experience[i].startDate} - <strong>End Date: </strong>{props.experience[i].endDate}</p>
            <p><strong>Duty: </strong> {props.experience[i].duty}</p>
            <hr/>
        </div>
    ));
    return(
        <div>{experience}</div>
    );
}

export default Experience;