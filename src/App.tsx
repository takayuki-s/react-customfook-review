import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserCard } from './components/UserCard';

const user = {
  id: 1,
  name: "てけ",
  email: "teke@teke.com",
  address: "ADDRESS",
}

function App() {
  return (
    <div className="App">
      <UserCard user={user}/>
    </div>
  );
}

export default App;
