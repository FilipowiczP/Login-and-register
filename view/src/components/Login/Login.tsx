import React from 'react';
import './login.scss';

const Login = () =>{
    return(
        <form className="form">
            <label className="form_label">
                Login:
                <input type="text" className="form_label-input"/>
            </label>
            <label className="form_label">
                Password:
                <input type="password" className="form_label-input"/>
            </label>
            <button type="submit" className="form_button">Login</button>
        </form>
    );
};

export default Login;