import { useState } from 'react'
import './App.css'
import DisplayResume from './components/Display';
import EducationInfo from './components/Education';
import ExperienceInfo from './components/Experience';
import ContactInfo from './components/Contact';
function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]= useState('');
  const [email, setEmail]=useState('');
  const [number, setNumber]=useState('');
  const [education, setEducation]=useState('')
  const [experience, setExperience]=useState('')

  const [showEducation, setShowEducation]=useState(false)
  const [showExperience, setShowExperience]=useState(false)
  const [showSubmit1,setSubmit1]=useState(true)
  const [showSubmit2, setSubmit2]=useState(true)



  const [showResume, setShowResume]=useState(false)

  function onSubmit(event){
    event.preventDefault();
    setShowEducation(true);
    setSubmit1(false);
  };

  function onSubmitEducation(event){
    event.preventDefault();
    setSubmit2(false);
    setShowExperience(true);
  }

  function onSubmitResume(event){
    event.preventDefault();
    setShowResume(true);
  }

  return(
    <div>
        <ContactInfo
        firstName={firstName}
        lastName={lastName}
        email={email}
        number={number}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setNumber={setNumber}
        onSubmit={onSubmit}
        showSubmit1={showSubmit1}
        />

        <div>
          {showEducation &&
          <EducationInfo
            education={education}
            setEducation={setEducation}
            onSubmitEducation={onSubmitEducation}
            showSubmit2={showSubmit2}
          />}
        </div>

        <div>
          {showExperience &&
            <ExperienceInfo
              experience={experience}
              setExperience={setExperience}
              onSubmitResume={onSubmitResume}
            />
          }
        </div>


      
      <div>
      {showResume && 
      <DisplayResume
      firstName={firstName}
      lastName={lastName}
      email={email}
      number={number}
      education={education}
      experience={experience}
    />}
      </div>


    </div>
  )
}

export default App
