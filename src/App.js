import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('api').then(data => { setUsers(data.data)} )
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          users.map(user => <p>{user.name}</p>)
        }
      </header>
    </div>
  );
}

export default App;
