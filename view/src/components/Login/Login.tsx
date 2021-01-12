import React, { useState } from 'react';
import './login.scss';

const Login = () => {
  interface State {
    login: string;
    password: string;
  }

  const [validation, setValidation] = useState<State>({
    login: '',
    password: '',
  });

  const handleLogin = (e: string): void => {
    setValidation({ ...validation, login: e });
  };

  const handlePassword = (e: string): void => {
    setValidation({ ...validation, password: e });
  };

  const handleSubmit = () => {};

  return (
    <form className="form" onSubmit={handleSubmit}>
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
