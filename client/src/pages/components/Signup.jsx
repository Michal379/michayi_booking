import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    resetFormFields();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  function handleSubmit(e) {
    e.preventDefault();

    // Form validation
    const validationErrors = {};
    if (!name) {
      validationErrors.name = 'Name is required';
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    }
    // Add validation for other fields

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
            setUser(user);
            navigate('/login'); // Navigate to the login page
            resetFormFields(); // Reset the form fields after successful signup
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
        {/* Add validation error rendering for nationality field */}

        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          autoComplete="off"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {/* Add validation error rendering for age field */}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        {/* Add validation error rendering for password field */}

        <button type="submit">Sign up</button>
      </form>
      <div className="signup-image-container">
        <img
          className="signup-image"
          src="https://i.pinimg.com/564x/79/00/3d/79003dbf0caeeb166923196e1f85a9ed.jpg"
          alt="Signup"
        />
      </div>
    </div>
  );
};

export default Signup;
