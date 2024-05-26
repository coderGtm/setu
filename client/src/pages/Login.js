import React from 'react';
import LoginCard from '../components/LoginCard';

function Login() {
    const myStyle = {
        backgroundImage:
            "url('https://images.unsplash.com/photo-1508108712903-49b7ef9b1df8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        minHeight: "100vh",
        paddingTop: "10vh",
        paddingBottom: "10vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div style={myStyle}>
            <LoginCard />
        </div>
    );
}

export default Login;