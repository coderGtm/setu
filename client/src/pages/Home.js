import React from 'react';
import UrlForm from '../components/UrlForm';

function Home() {
    const isLoggedIn = localStorage.getItem("authToken") ? true : false;
    
    
    return (
        <div>
            <h1>Setu Home Page</h1>
            <p>Served by Reactjs</p>
            {isLoggedIn && <UrlForm />}
            {!isLoggedIn && <button onClick={() => window.location.href = "/login"}>Login</button>}
        </div>
    )
}

export default Home;