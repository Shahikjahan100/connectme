import React from 'react';
import './App.css';
import Information from './pages/information';
import SignInBg from './components/signin/signinbg';
import Signin from './pages/signin';
import Signup from './pages/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Information />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
