import { useState } from 'react'
import './App.css'
import General from './components/General';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]= useState('');
  const [email, setEmail]=useState('');
  const [number, setNumber]=useState('');

  return(
    <div>
      <h1>Contact Information</h1>
        <General
        firstName={firstName}
        lastName={lastName}
        email={email}
        number={number}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setNumber={setNumber}
        />


    </div>

  )
}

export default App
