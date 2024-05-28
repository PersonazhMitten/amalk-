import React, { useContext, useState } from 'react';
import './header.css';
import { AppContext } from '../../App';
import userImg from '../../images/avatar.jpg';
import SignUpModal from '../../components/SignUpModal/SignUpModal';
import SignInModal from '../../components/SignInModal/SignInModal';

function Header({ toggelActive }) {
  const { library, bag } = useContext(AppContext);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleUserSignUp = (user) => {
    setCurrentUser(user);
    setSignUpOpen(false);
  };

  const handleUserSignIn = (user) => {
    setCurrentUser(user);
    setSignInOpen(false);
  };

  return (
    <header>
      <a className="menu" onClick={toggelActive}>
        <i className="bi bi-sliders"></i> 
      </a>
      <div className="userItems">
        <a href="!#" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </a>
        <a href='!#' className="icon">
          <i className="bi bi-bag-fill"></i>
          <span className="bag"> {bag.length} </span>
        </a>
        {currentUser ? (
          <div className="avatar">
            <a href='!#'>
              <img src={userImg} alt="User avatar" />
            </a>
            <div className="user">
              <span>{currentUser.email}</span>
              <a href='!#'>View Profile</a>
            </div>
          </div>
        ) : (
          <a href='!#' className="auth" onClick={() => setSignInOpen(true)}>
            <i className="bi bi-box-arrow-in-right"></i>
            <span className="bag"></span>
          </a>
        )}
      </div>
      {isSignUpOpen && <SignUpModal closeModal={() => setSignUpOpen(false)} onSignUp={handleUserSignUp} />}
      {isSignInOpen && <SignInModal closeModal={() => setSignInOpen(false)} onSignIn={handleUserSignIn} />}
    </header>
  );
}

export default Header;
