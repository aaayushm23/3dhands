import React, { useState } from 'react';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .catch(error => console.error('Error signing up:', error));
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .catch(error => console.error('Error logging in:', error));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
      </button>
    </div>
  );
};

export default Login;
