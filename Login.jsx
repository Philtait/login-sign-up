import React, { useState } from 'react';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlesubmit = (event) => {
        event.preventDefault();
        console.log(email);
    };

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handlesubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                />
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                />
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>

        </div>
    );
};
