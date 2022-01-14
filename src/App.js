import { useState, useEffect } from 'react';
import './App.css';
import {db} from './firebase-config'
import {collection, getDocs, addDoc} from 'firebase/firestore'

function App() {
  //Creating user in DB.
    const [newName, setNewName] = useState("")
    const [newAge, setNewAge] = useState(0)

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users")

    const createUser = async () =>{
      await addDoc(usersCollectionRef, {
        name: newName, 
        age: newAge})
    };

    //Getting user from DB.
    useEffect(() => {

      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      }

      getUsers()
    }, [])

    //Getting user in front-end and button to call createUser function.
    //Input in html.
    return(
       <div className="App">
         <input placeholder="name..." onChange = {(event) => {
           setNewName(event.target.value);
        }}/>

         <input type = "number" placeholder="age..." onChange = {(event) => {
           setNewAge(event.target.value);
        }}/>
         <button onClick={createUser}>Create user</button>
      {users.map((user) => {
      return (
      <div>
            {""}
            <h1>Name: {user.name}</h1> 
            <h1>age: {user.age}</h1> 
          </div>
        );
      })}
    </div>
  );
}

export default App;
