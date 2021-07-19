import {useEffect, useState} from "react" 


export default function Spinner(){
    const [users,setUsers] = useState(false)

    useEffect(
        ()=>{fetch('https://jsonplaceholder.typicode.com/users?_delay=5000&t='+Math.random())
            .then(response => response.json())
            .then(data => setUsers(data))},
            []
    )

   return (
       <div>
           Users
           {users ?
                 <ul>
                    {users.map(user => <li className="usernames">{user.name}</li>)}
                </ul>
            :
                 <i class="fas fa-spinner"></i>
        }
       </div>
   )

}