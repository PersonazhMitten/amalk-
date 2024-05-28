// src/components/Header.jsx
import React, { useContext, useState } from 'react';
import '../../pages/header/header.css';
import { AppContext } from '../../App';
import userImg from '../../images/avatar.jpg';
import AuthModal from '../../components/AuthModal/AuthModal';
import SignUpModal from '../../components/SignUpModal/SignUpModal';
import './AuthModal.css'

function Header({ toggelActive }) {
    const { library, bag } = useContext(AppContext);
    const [isAuthModalOpen, setAuthModalOpen] = useState(false);
    const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

    const openAuthModal = () => setAuthModalOpen(true);
    const closeAuthModal = () => setAuthModalOpen(false);

    const openSignUpModal = () => setSignUpModalOpen(true);
    const closeSignUpModal = () => setSignUpModalOpen(false);

    return (
        <header>
           <a href="javascript:;" className="menu" onClick={toggelActive}>
                <i className="bi bi-sliders"></i>
            </a>
            <div className="userItems">
                <a href="javascript:;" className="icon">
                    <i className="bi bi-heart-fill"></i>
                    <span className="like">{library.length}</span>
                </a>
                <a href="javascript:;" className="icon">
                    <i className="bi bi-bag-fill"></i>
                    <span className="bag">{bag.length}</span>
                </a>
                <a href="javascript:;" className="auth" onClick={openAuthModal}>
                    <i className="bi bi-box-arrow-in-right"></i>
                </a>
                <a href="javascript:;" className="auth" onClick={openSignUpModal}>
                    <i className="bi bi-person-plus"></i>
                </a>
                <div className="avatar">
                    <a href="javascript:;">
                        <img src={userImg} alt="User avatar" />
                    </a>
                    <div className="user">
                        <span>Amal</span>
                        <a href="javascript:;">View Profile</a>
                    </div>
                </div>
            </div>
            {isAuthModalOpen && <AuthModal closeModal={closeAuthModal} />}
            {isSignUpModalOpen && <SignUpModal closeModal={closeSignUpModal} />}
        </header>
    );
}

export default Header;
