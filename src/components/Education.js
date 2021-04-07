import React from 'react';

// returns a formated object that is received from the json file.
function Education(props){
    const education = props.education.map((item, i) => (
        <div key={i}>
            <p><strong >Institution:</strong> { props.education[i].institution}</p>
            <p><strong>Area:</strong> { props.education[i].area}</p>
            <p><strong>Qualification:</strong> { props.education[i].studyType}</p>
            <p><strong>Start date:</strong> { props.education[i].startDate} - <strong>End Date: </strong>{ props.education[i].endDate}</p>
            <p><strong>Mark:</strong> { props.education[i].gpa}</p>
            <p><strong>Course:</strong> { props.education[i].courses}</p>
        </div>
    ));

    return (
        <div>{education}</div>
    );
}

export default Education;