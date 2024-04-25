import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import "./LoginPage.css";

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/home');
            })
            .catch((error) => {
                alert('Přihlášení se nezdařilo, zkontrolujte email a heslo.');
            });
    };

    return (
        <div className="login-container">
            <h1>Přihlášení</h1>
            <input
                className="login-input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                className="login-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Heslo"
            />
            <button className="login-button" onClick={handleLogin}>Přihlášení</button>
            <Link id="toRegister" to="/register" className="login-link">Nemáte účet? Registrace</Link>

        </div>
    );
}

export default LoginPage;
