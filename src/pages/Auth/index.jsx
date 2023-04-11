import React from 'react';
import "./Auth.scss";
import {LoginForm , RegisterForm} from '../../modules';
import { Route, Routes } from "react-router-dom";



const Auth = () => {
    return (
        <section className="auth">
        <div className="auth_content">
            <Routes>
                <Route exact path= "/" element = {<LoginForm />} />
                <Route path="/register" element  = {<RegisterForm />} />
            </Routes>
        </div>
        </section>
    );
};

export default Auth;