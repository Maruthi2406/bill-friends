import Button from "./Button";

export default function BillShare({friends})
{
    return (
        <div>
            <h3>Share Bill Details </h3>
            <form onSubmit>
            <div>
              <label>Select from Friend </label>
             <select>
            <option value="">Select Friend</option>
            {friends.map((friend)=> (<option key={friend.id} value={friend.id}>{friend.name}</option>
            ))}
            </select>
            </div>

            <div>
                <label>Bill Amount </label>
                <input type ="number"/>
            </div>
            <div>
                <Button> Add Bill</Button>
                
            </div>


            </form>
        </div>
    )
}