import React from 'react';
import "./Auth.scss";
import {LoginForm , RegisterForm} from '../../modules';
import { Route} from "react-router-dom";
import CheckEmailInfo from "./components/CheckEmailInfo";



const Auth = () => {
    return (
        <section className="auth">
        <div className="auth_content">
            <Route exact path="/signin" component={LoginForm} />
            <Route exact path="/signup" component={RegisterForm} />
            <Route exact path="/signup/verify" component={CheckEmailInfo} />
        </div>
        </section>
    );
};

export default Auth;