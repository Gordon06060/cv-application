export default function DisplayResume({firstName,lastName,number,email,education,experience}){
    return(
        <div>
            <div>
                <h1>{firstName + ''+ lastName}</h1>
                <p>{email}</p>
                <p>{number}</p>
            </div>
            <div>
                <p>{education}</p>
            </div>

            <div>
                <p>{experience}</p>
            </div>
        </div>
    )
}