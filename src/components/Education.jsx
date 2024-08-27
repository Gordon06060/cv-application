export default function EducationInfo({education,setEducation, onSubmitEducation, showSubmit2}){
    return(
        <>
            <form onSubmit={onSubmitEducation}>
                <label>Education</label>
                <input
                value={education}
                onChange={(e)=>setEducation(e.target.value)}
                />
                
                {showSubmit2 && <button type="submit">Submit</button>}
            </form>
        </>
    )
}

