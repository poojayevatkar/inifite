import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
 };
 
 
 

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    // Simulating fetching the initial partial list
    const fetchData = () => {
      setIsLoading(true);
      setTimeout(() => {
        const partialList = [
          { name: 'John Doe', photo: 'https://randomuser.me/api/portraits/men/1.jpg' },
          { name: 'Jane Smith', photo: 'https://randomuser.me/api/portraits/women/2.jpg' },
          { name: 'Bob Johnson', photo: 'https://randomuser.me/api/portraits/men/3.jpg' },
          { name: 'Alice Williams', photo: 'https://randomuser.me/api/portraits/women/4.jpg' },
          { name: 'David Brown', photo: 'https://randomuser.me/api/portraits/men/5.jpg' },
          { name: 'Emily Davis', photo: 'https://randomuser.me/api/portraits/women/6.jpg' },
          { name: 'Michael Wilson', photo: 'https://randomuser.me/api/portraits/men/7.jpg' },
          { name: 'Olivia Taylor', photo: 'https://randomuser.me/api/portraits/women/8.jpg' },
          { name: 'Sophia Martinez', photo: 'https://randomuser.me/api/portraits/women/9.jpg' },
          { name: 'Jacob Anderson', photo: 'https://randomuser.me/api/portraits/men/10.jpg' },
        ];
        setContacts(partialList);
        setIsLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    // Simulating loading more contacts
    setIsLoading(true);
    setTimeout(() => {
      const moreContacts = [
        { name: 'Ethan Thomas', photo: 'https://randomuser.me/api/portraits/men/11.jpg' },
        { name: 'Mia Harris', photo: 'https://randomuser.me/api/portraits/women/12.jpg' },
        { name: 'Liam Clark', photo: 'https://randomuser.me/api/portraits/men/13.jpg' },
        { name: 'Abigail Lewis', photo: 'https://randomuser.me/api/portraits/women/14.jpg' },
        { name: 'Benjamin Young', photo: 'https://randomuser.me/api/portraits/men/15.jpg' },
        { name: 'Harper Rodriguez', photo: 'https://randomuser.me/api/portraits/women/16.jpg' },
        { name: 'Lucas Lee', photo: 'https://randomuser.me/api/portraits/men/17.jpg' },
        { name: 'Elizabeth Walker', photo: 'https://randomuser.me/api/portraits/women/18.jpg' },
        { name: 'Alexander Hall', photo: 'https://randomuser.me/api/portraits/men/19.jpg' },
        { name: 'Sofia Green', photo: 'https://randomuser.me/api/portraits/women/20.jpg' },
      ];
      setContacts(prevContacts => [...prevContacts, ...moreContacts]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <HomePage contacts={contacts} isLoading={isLoading} onLoadMore={handleLoadMore} onLogout={handleLogout} />
      )}
    </div>
  );
};



const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  
 
  const handleSubmit = e => {
    e.preventDefault();
    if (username === 'foo' && password === 'bar') {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
   // onLogin();
  };
  

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const HomePage = ({ contacts, isLoading, onLoadMore, onLogout }) => {
  return (
    <div className="container">
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <img src={contact.photo} alt={contact.name} />
            {contact.name}
          </li>
        ))}
      </ul>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={onLoadMore}>Load More</button>
      )}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default App;
