export default function ExperienceInfo({experience,setExperience, onSubmitResume}){
    return(    
    <>
        <form onSubmit={onSubmitResume}>
            <label>Experience</label>

            <input 
            value={experience}
            onChange={(e)=>setExperience(e.target.value)}
            
            />
            
            <button type="submit">Create Resume</button>
        </form>
    
    
    </>)
}