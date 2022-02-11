export default function CreatefeedbackForm() {
    const submit = async (Event)=>{
        Event.preventDefault();
        const forms = new FormData(Event.target)
        const formData = Object.fromEntries(forms.entries());
        console.log(formData);

        const res = await fetch('/api/feedform', {
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

        <div>
            <form onSubmit={submit}>
                <h5>Full Name</h5>
                <input type='name' name="formname"/>
                <h5>Email</h5>
                <input type='email' name="formemail"/>
                <h5 placeholder="feedback message">FeedBack</h5>
                <input type='text' name="formmessage"/>
                <button>Create</button>
            </form>
        </div>
    )
}