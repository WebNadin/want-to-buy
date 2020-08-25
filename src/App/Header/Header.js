import React from 'react';
import logo from '../../images/logo.png';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <img className="header__logo logo" src={logo} alt="Veltry text"/>
        <div className="header__user-tools user-tools">
          <div className="search">
            <form>
              <input className="search__input" type="text" placeholder="я ищу..."></input>
              <button type="submit">
                <SearchIcon style={{ color: '#000000' }}/>
              </button>
            </form>
          </div>
          <div className="search__cart cart">
            <AddShoppingCartIcon style={{ color: '#000000' }}/>
          </div>
        </div>
      </div>
      <nav className="header__nav nav">
        <a className="nav__link" href="/">travel bags</a>
        <a className="nav__link" href="/">accessories</a>
        <a className="nav__link" href="/">books</a>
        <a className="nav__link" href="/">maps</a>
      </nav>
    </header>
  );
};

export default Header;