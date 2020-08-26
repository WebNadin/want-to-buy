import React from 'react';
import { connect } from 'react-redux';


const NavLinks = ({fetchedNavLinks}) => {
  if (!fetchedNavLinks.length) {
    return <p>Ссылок пока нет</p>
  }
  return fetchedNavLinks.map(link => <a className="nav__link" href={fetchedNavLinks.href}>{fetchedNavLinks.title}</a>
  )
};

const mapStateToProps = state => {
  console.log(state);
  return {
    fetchedNavLinks: state.navLinks
  };
};

export default connect(mapStateToProps, null)(NavLinks);