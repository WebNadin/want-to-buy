import React from 'react';
import logo from '../../images/logo.png';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import NavLinks from '../../components/NavLinks';
import './header.scss';


const links = [
  {
    "href": "/",
    "title": "travel bags"
  },
  {
    "href": "/",
    "title": "accessories"
  },
  {
    "href": "/",
    "title": "books"
  },
  {
    "href": "/",
    "title": "maps"
  }
];


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
        <NavLinks links={links}/>
      </nav>
    </header>
  );
};

export default Header;