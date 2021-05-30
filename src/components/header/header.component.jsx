import React from 'react';
import { Link } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss'

const Header = ({ currentUser }) => (

  <div className='header'>
    <div className='logo-container'>
      <Link to="/">
        <Logo className='logo' />
      </Link>
    </div>
    <div className='options'>
      <Link className='option' to="/shop">
        SHOP
      </Link>
      <Link className='option' to="/shop">
        CONTACT
      </Link>
      {
        currentUser ?
          <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to="/signin">
          SIGN IN
        </Link>
      }
      {
        currentUser ?
        <div className='option'>Hi {currentUser.displayName}!</div>
        :
        null
      }

    </div>
  </div>

)

export default Header;
