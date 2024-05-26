import React from 'react';
import SignupCard from '../components/SignupCard';

function Signup() {
    const myStyle = {
        backgroundImage:
            "url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        minHeight: "100vh",
        paddingTop: "10vh",
        paddingBottom: "10vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
    return (
        <div style={myStyle}>
            <SignupCard />
        </div>
    );
}

export default Signup;