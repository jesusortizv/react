import React from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router';
import * as Paths from '../../constants/paths';

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <Link to={Paths.HOME} title="Home" className="">
          <img className="Nopa" alt="Logo" src={require('../../../static/images/Logo_Nopa.svg')} />
        </Link>
      </div>
      <div className="signin">
        <Button to={Paths.LOGIN_BANK}>Log In</Button>
      </div>
    </div>
  )
};

export default Header;
