
import './App.css';
import {useEffect,useState} from 'react';
import UserList from './components/UserList';
import Info from './components/Info';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'


function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getusers=()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(res=>setUsers(res))
    };
    getusers()
   }, [])
  return (
    <div className="App">
      <Router>
        <Routes>
         <Route path="/" element={ <UserList list={users}/>}/>
         <Route path="/info/:id"element={<Info/>}/>
        </Routes>
      </Router>
    
    </div>
  ); 
}

export default App;
