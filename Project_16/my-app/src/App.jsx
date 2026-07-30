// Project 16 - Password Validation Component



import { useState } from 'react';
import './App.css';

function PasswordInput() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validatePassword = (value) => {
    let errorMessage = '';
    if (value.length < 8) {
      errorMessage = 'Password must be at least 8 characters long.';
    } else if (!/[A-Z]/.test(value)) {//.test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
      errorMessage = 'Password atlist least one uppercase letter.';
    } else if (!/[a-z]/.test(value)) {
      errorMessage = 'Password atlist least one lowercase letter.';
    } else if (!/\d/.test(value)) {
      errorMessage = 'Password atlist least one number.';
    } else if (!/[!@#$%^&*()]/.test(value)) {
      errorMessage = 'Password atlist least one special character.';
    }
    setError(errorMessage);
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  return (
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handleChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default PasswordInput;

