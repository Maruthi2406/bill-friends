import { useState } from "react"
import Button from "./Button";

export default function FriendsList ({addList}){

    const [name, setName] = useState("")
    
    function onAddFriend (e)
    {
        e.preventDefault();  // stop page reload (auto)
        const friend ={name, id: Date.now(), billDetails:[]};
        addList(friend);
        setName("");

     }
    
    return (

    <div>

    <h3>Friends List </h3>
        <form onSubmit={onAddFriend}>
            <div className=" field">
                <label>Friend Name</label>
                <input type="text" placeholder= "Enter the name" value={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>

            <div>
            <Button> Add Friend</Button>
            </div>
                
        </form>
            
            
    </div>
    );
}