export default function ContactInfo({firstName,lastName,email,number,setFirstName,setLastName,setEmail,setNumber, onSubmit,showSubmit1}){
    return(
        <>
        <form onSubmit={onSubmit}>
            <label>First name: </label>
            <input 
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
            /><br/>

            <label>Last Name: </label>
            <input 
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}/><br/>

            <label>Email: </label>
            <input type="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            /><br/>

            <label>Phone Number: </label>
            <input type="number" 
            value={number}
            onChange={(e)=>setNumber(e.target.value)}
            /><br></br>


            {showSubmit1 &&
            <button type='submit'>Submit</button>
            }
        </form>
        </>
    );
}


