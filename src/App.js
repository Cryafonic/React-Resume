import EmployeeDetails from './components/EmployeeDetails';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skill from './components/Skill';
import './App.css';
const json = require('./resume.json');

// reverence the components and sents them a property value to be formated.
function App() {  
  return (
    <div className='backgoundColor'>
      <div className="pageContent leftSideContent leftSideContentColor sticky">
            <EmployeeDetails name={json.basics.name} profile={json.basics.picture} label={json.basics.label} email={json.basics.email} location={json.basics.location} />
            <About summary={json.basics.summary} build={json.basics.build} />
      </div>
      <div className="pageContent rightSideContent">
            <h6>Skills</h6>
            <Skill keywords={json.skills[0].keywords} name={json.skills[0].name} level={json.skills[0].level}/>
            <h6>Education</h6>
            <Education education={json.education} />
            <h6>Experience</h6>
            <Experience experience={json.experience} />
      </div>
    </div>
  );
};

export default App;