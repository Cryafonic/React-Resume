import React from 'react';
import json from '../resume.json';

// Iterats through the array and formates them.
function Skill(props){
    const skills = json.skills[0].keywords.map((item, i)=>{
        return <p key={i}>{props.keywords[i]}</p>;
    });
    return (
        <div>
            <p><strong>Profession:</strong> {props.name}</p>
            <p><strong>Level:</strong> {props.level}</p>
            <>{skills}</>
        </div>
    );
}

export default Skill;