import { useState } from "react";
import ContactInfo from './Contact.jsx'


export default function General({firstName,lastName,email,number,setFirstName,setLastName,setEmail,setNumber}){
    const [info, showInfo]=useState(false);

    function handleClick(){
        showInfo(!info);
    }
    return (
        <>
        <button onClick={handleClick}>Contact Information</button>
        {info && <ContactInfo
        firstName={firstName}
        lastName={lastName}
        email={email}
        number={number}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setNumber={setNumber}
        />}
        </>
    );
}


