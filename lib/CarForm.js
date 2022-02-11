

export default function Form() {
    const submit = async (Event)=>{
        Event.preventDefault();

        const form = new FormData(Event.target);
        const formData = Object.fromEntries(form.entries());

        console.log(formData)

        const res = await fetch('/api/cars',{
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
        const result = await res.json();
        console.log(result)
    }

    return(
        <div className='form'>
            <form onSubmit={submit}>
                <h5 className='formh5'>Full Name</h5>
                <input className='formh5' type='name' name='fullname'/>
                <h5 className='formh5'>Email</h5>
                <input className='formh5' type='email' name='email'/>
                <h5 className='formh5'>Resume</h5>
                <input className='formh5' type='link' name="resume"/>
                <button className='formh5'>submit</button>
            </form>
        </div>
    )
}