import React from 'react';

// returns the summary out of the json file.
function About(props){
    return(
        <div>
            <p>{props.summary}</p>
            <p>{props.build}</p>
        </div>
    );
};

export default About;