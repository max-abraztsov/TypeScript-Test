import { useState, useEffect } from 'react'
import './App.css'
import Card, {CardVariant} from './components/Card'
import UserList from './components/UserList'
import { IUser } from './types/types';
import axios from "axios";

function App() {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers(){
    try{
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch {
      alert(e);
    }
  }

  return (
    <div>
      <Card onClick={(num) => console.log("click", num)} variant={CardVariant.outlined} height={"200px"} width={"200px"}>
        <button>Click</button>
      </Card>
      <UserList users={users}/>
    </div>
  )
}

export default App
