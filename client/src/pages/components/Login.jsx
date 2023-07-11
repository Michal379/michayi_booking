import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login({ setUser }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUser(user);
            navigate('/hotels'); // Redirect to the hotels page
            Swal.fire('Login Successful', '', 'success'); // Show success message
          });
        } else {
          Swal.fire('Invalid username or password', '', 'error'); // Show error message
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        Swal.fire('An error occurred', '', 'error'); // Show error message
      });
  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;