import React, { useState } from 'react';
import { LOGIN_LENGTH, PASSWORD_LENGTH } from './validation';

import './login.scss';

const Login = () => {
  interface Validation {
    login: string;
    password: string;
  }

  const [validation, setValidation] = useState<Validation>({
    login: '',
    password: '',
  });
  const [error, setError] = useState<string[]>([]);

  const handleLogin = (e: string): void => {
    setValidation({ ...validation, login: e });
  };

  const handlePassword = (e: string): void => {
    setValidation({ ...validation, password: e });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setError([]);
    let check: boolean = true;
    if (validation.login.length <= LOGIN_LENGTH) {
      const loginError: string = 'Wrong login';
      setError((prev) => [...prev, loginError]);
      check = false;
    }
    if (validation.password.length <= PASSWORD_LENGTH) {
      const passwordError = 'Wrong passsword';
      setError((prev) => [...prev, passwordError]);
      check = false;
    }
    if (check === true) {
      console.log('zalogowano');
    }
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e as any)}>
      {error.map((el: string, index: number) => (
        <p key={index} className="form_error">
          {el}
        </p>
      ))}
      <label className="form_label">
        Login:
        <input type="text" className="form_label-input" onChange={(e) => handleLogin(e.target.value as any)} />
      </label>
      <label className="form_label">
        Password:
        <input type="password" className="form_label-input" onChange={(e) => handlePassword(e.target.value as any)} />
      </label>
      <button type="submit" className="form_button">
        Login
      </button>
    </form>
  );
};

export default Login;
