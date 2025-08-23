import { useState } from "react";
import Button from "./Button";

export default function BillShare ({friends, onBillPaid}){


const [friend, setFriend] =useState('');
const [bill, setBill] =useState('');


function submitBill(e) {
    e.preventDefault();
    const singleFriend = friends.find((fr) => +friend === +fr.id);
    console.log(friend);
    console.log(singleFriend); 
   
}

    return (
        <div>
            <h3>Share Bill Details </h3>
            <form onSubmit ={submitBill}>
            <div>
              <label>Select from Friend </label>
             <select value={friend} onChange={(e)=>setFriend(e.target.value)}>
            <option value="">Select Friend</option>
            {friends.map((friend)=> (<option key={friend.id} value={friend.id}>{friend.name}</option>
            ))}
            </select>
            </div>

            <div>
                <label>Bill Amount </label>
                <input type ="number" value={bill} onChange={(e) => setBill(e.target.value)} />
            </div>
            <div>
                <Button> Add Bill</Button>
                
            </div>


            </form>
        </div>
    )
}