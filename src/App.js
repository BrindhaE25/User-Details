import React,{useState} from 'react';
import AddUser  from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


const DUMMY_LIST = [];
function App() {
  const [userData,setData] =  useState(DUMMY_LIST);

  const onAddUserData = (data) => {
    setData(prevData => {
      return [data,...prevData];
    });

  }
  return (
    <div>
      <AddUser addUser={onAddUserData}/>
      <UsersList userdata={userData}/>

    </div>
  );
}

export default App;
