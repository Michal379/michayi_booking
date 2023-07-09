import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onSignup }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    resetFormFields();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = {};
    if (!name) {
      validationErrors.name = 'Name is required';
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

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
      }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            onSignup(user); // Call the onSignup function with the user data
            navigate('/login');
            resetFormFields();
          });
        } else {
          r.json().then((errorData) => {
            setErrors(errorData.errors);
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  function resetFormFields() {
    setName('');
    setEmail('');
    setPhoneNumber('');
    setNationality('');
    setAge('');
    setPassword('');
  }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign up</h1>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <label htmlFor="phone-number">Phone number</label>
        <input
          type="text"
          id="phone_number"
          autoComplete="off"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {errors.phone_number && <div className="error">{errors.phone_number}</div>}

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

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
