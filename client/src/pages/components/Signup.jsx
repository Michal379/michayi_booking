import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhonenumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [user, setUser] = useState(null); 

  const navigate = useNavigate();  

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone_number,
        password,
        nationality,
        age,
        // password_confirmation: passwordConfirmation,
      }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user);
          navigate('/login'); // Navigate to the login page
        });
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Signi  up</h1>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="phone-number">Phone number</label>
        <input
          type="text"
          id="phone_number"
          autoComplete="off"
          value={phone_number}
          onChange={(e) => setPhonenumber(e.target.value)}
        />
        <label htmlFor="nationality">Nationality</label>
        <input
          type="text"
          id="nationality"
          autoComplete="off"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          autoComplete="off"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        {/* <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        /> */}
        <button type="submit">Sign up</button>
      </form>
      <img src='https://i.pinimg.com/564x/79/00/3d/79003dbf0caeeb166923196e1f85a9ed.jpg'></img>

    </div>
  );
};

export default Signup;
