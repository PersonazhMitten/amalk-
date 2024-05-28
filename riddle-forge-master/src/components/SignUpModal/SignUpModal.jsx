import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';
import '../AuthModal/AuthModal.css';

const SignUpModal = ({ closeModal, onSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            onSignUp(userCredential.user);
            alert('Registration Successful!');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError('This email is already in use. Please use a different email or sign in.');
            } else {
                setError(error.message);
            }
        }
    };

    const handleGoogleSignUp = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            onSignUp(result.user);
            alert('Registration Successful!');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="auth-modal">
            <div className="auth-modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>Sign Up</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSignUp}>
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
                    <button type="submit">Sign Up</button>
                </form>
                <button className="google-signup" type="submit" onClick={handleGoogleSignUp}>Sign Up with Google</button>
            </div>
        </div>
    );
};

export default SignUpModal;
