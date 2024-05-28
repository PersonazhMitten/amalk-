import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';
import '../AuthModal/AuthModal.css';

const SignInModal = ({ closeModal, onSignIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            onSignIn(userCredential.user);
            alert('Login Successful!');
        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            onSignIn(result.user);
            alert('Login Successful!');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="auth-modal">
            <div className="auth-modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Sign In</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSignIn}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button type="submit">Sign In</button>
                </form>
                <button className="google-signup" onClick={handleGoogleSignIn}>Sign In with Google</button>
            </div>
        </div>
    );
};

export default SignInModal;
