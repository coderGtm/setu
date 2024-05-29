import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Signup from './pages/Signup';
import Login from './pages/Login';
import ShortUrlRedirect from './pages/ShortUrl';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path='/signup' element={ <Signup /> } />
            <Route path='/login' element={ <Login /> } />
            <Route exact path='/:shortId' element={ <ShortUrlRedirect /> } />
            <Route path='*' element={ <PageNotFound /> } />
        </Routes>
    </Router>
  )
}

export default App;