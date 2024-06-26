// App.js
import React from 'react';
import './App.css';
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from "./RegisterPage";
import MovieDetails from "./MovieDetails";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                    <Route path="/movie/:id" element={<PrivateRoute><MovieDetails /></PrivateRoute>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;