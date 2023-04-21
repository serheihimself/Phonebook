import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (password === '' || email === '') {
      <p>Please fill in all the fields!</p>;
      return;
    }
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    setEmail('');
    setPassword('');
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <label>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          autoComplete="current-password"
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </label>
      <button type="submit">LogIn</button>
    </form>
  );
};
