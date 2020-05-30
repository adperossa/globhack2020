import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import NavBtns from './NavBtns';
import AuthNavBtns from './AuthNavBtns';
import Login from './Login';
import Register from './Register';
import logo from '../img/logo.png';

export default (props) => {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogout = () => {
    props.setAuthState(false);
    setCurrentUser(null);
  }


  const handleShowLoginModal = () => {
    setShowLoginModal(true)
  }

  const handleHideLoginModal = () => {
    setShowLoginModal(false)
  }

  const handleShowRegisterModal = () => {
    setShowRegisterModal(true)
  }

  const handleHideRegisterModal = () => {
    setShowRegisterModal(false)
  }

  return (
    <>
      <Navbar variant="dark" className="colour-nav">

        <Navbar.Brand>
          <img src={logo} alt="logo" style={{ width: '7rem' }} />
        </Navbar.Brand>

        <Nav className="ml-auto">

          {
            props.isLogged ? (
              <AuthNavBtns currentUser={currentUser} logout={handleLogout}/>
            ) : (
              <NavBtns handleShowLoginModal={handleShowLoginModal}
                      handleShowRegisterModal={handleShowRegisterModal}
              />
            )
          }

        </Nav>



      </Navbar>

      <Login showLogin={showLoginModal}
        onHideLogin={handleHideLoginModal}
        setAuthState={props.setAuthState}
        setCurrentUser={setCurrentUser}
      />

      <Register showRegister={showRegisterModal}
        onHideRegister={handleHideRegisterModal}
      />
    </>
  )

}