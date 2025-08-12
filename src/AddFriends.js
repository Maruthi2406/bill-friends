export default function AddFriends({friends}){
    return (
        <div>
            <h3>Friends Details </h3>
            <ol>
            {friends.map((friend)=>(<li key={friend.id}>{friend.name}</li>))}
            </ol>
        </div>
    )
}

