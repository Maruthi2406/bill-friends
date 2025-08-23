import './App.css';
import AddFriends from './AddFriends';
import BillShare from './BillShare';
import FriendsList from './FriendsList';
import { useState } from 'react';


function App() {
  
const[friends, setFriends]=useState([]);

function addList(friend) {
  setFriends((friends)=>[...friends,friend]);
}

function onBillPaid(billDetails) {
  console.log(billDetails);

}

  return (
    <div className='container'>
      <AddFriends friends={friends}/>
      <FriendsList addList={addList}/>
      <BillShare friends={friends} onBillPaid={onBillPaid}/>
    </div>
  );
}
export default App;
