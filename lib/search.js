import { useState } from "react"

export default function search(){
    
    const [hit, setHit] = useState([])
    
    const submit = async (Event) => {
        const q = Event.target.value
        if (q.lenght > 2){
            const data = new URLSearchParams({q})
            const res = await fetch('/api/search?'+params)
            const result = res.json()
            console.log(result)
            setHit(result['email'])
        }
    }
    return (
 
        
        <div>
            <input onChange={submit}/>
            <ul>
                 {hit.map((hit)=>(
                     <li key={hit.entityId}>
                         {hit.email} {hit.fullname}
                     </li>
                 ))}
            </ul>
        </div>
    )
}