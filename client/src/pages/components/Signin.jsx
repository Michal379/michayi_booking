// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

// const Signin = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone_number, setPhonenumber] = useState('');
//   const [nationality, setNationality] = useState('');
//   const [age, setAge] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirmation, setPasswordConfirmation] = useState('');
//   const [user, setUser] = useState(null); // Add user state

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch('/signin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username,
//         email,
//         phone_number,
//         password,
//         nationality,
//         age,
//         password_confirmation: passwordConfirmation,
//       }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setUser(user));
//       }
//     });
//   }

//   return (
//     <div>
//       <Navbar />
//       <form onSubmit={handleSubmit}>
//         <h1>Signi  In</h1>
//         <label htmlFor="username">Username</label>
//         <input
//           type="text"
//           id="username"
//           autoComplete="off"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <label htmlFor="email">Email</label>
//         <input
//           type="text"
//           id="email"
//           autoComplete="off"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label htmlFor="phone-number">Phone_number</label>
//         <input
//           type="text"
//           id="phone_number"
//           autoComplete="off"
//           value={phone_number}
//           onChange={(e) => setPhonenumber(e.target.value)}
//         />
//         <label htmlFor="nationality">Nationality</label>
//         <input
//           type="text"
//           id="nationality"
//           autoComplete="off"
//           value={nationality}
//           onChange={(e) => setNationality(e.target.value)}
//         />
//         <label htmlFor="nationality">Age</label>
//         <input
//           type="text"
//           id="age"
//           autoComplete="off"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           autoComplete="current-password"
//         />
//         <label htmlFor="password">Password Confirmation</label>
//         <input
//           type="password"
//           id="password_confirmation"
//           value={passwordConfirmation}
//           onChange={(e) => setPasswordConfirmation(e.target.value)}
//           autoComplete="current-password"
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//      < Footer />
//     </div>
//   );
// };

// export default Signin;
