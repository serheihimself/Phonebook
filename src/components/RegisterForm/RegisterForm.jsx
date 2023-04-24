import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Form, Label, Input, Button } from './RegisterForm.styles';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setUserName(value);
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

    if (name === '' || password === '' || email === '') {
      <p>Please fill in all fields!</p>;
      return;
    }
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    setUserName('');
    setEmail('');
    setPassword('');
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter your name"
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="email@mail.com"
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          pattern="(?=.*\d).{7,}"
          placeholder="7 characters or more, please"
        />
      </Label>
      <Button type="submit">Registration</Button>
    </Form>
  );
};

export default RegisterForm;
