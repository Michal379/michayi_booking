import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Logout = ({ setMessage }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE',
      credentials: 'include',
    })
      .then((response) => {
        if (response.ok) {
          navigate('/login'); // Redirect to the login page after successful logout
          Swal.fire('Logout Successful', '', 'success'); // Show success message
          setMessage('Logout successful'); // Set the logout message
        } else {
          console.log('Logout failed');
          Swal.fire('Logout Failed', '', 'error'); // Show error message
          setMessage('Logout failed'); // Set the logout failure message
        }
      })
      .catch((error) => {
        console.log('Error:', error);
        Swal.fire('An Error Occurred', '', 'error'); // Show error message
        setMessage('An error occurred'); // Set the error message
      });
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
