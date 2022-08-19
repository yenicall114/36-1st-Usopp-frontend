import React from 'react';
import './NavTopCategorie.scss';
const NavTopCategorie = ({ name, setNewNav, setMenuState, id, listNow }) => {
  return (
    <li className={`navList ${listNow === name ? 'newNavList' : ''}`}>
      <a
        className="clickList"
        onClick={e => {
          e.preventDefault();
          setNewNav();
          setMenuState(id);
        }}
        href="/"
      >
        {name}
      </a>
    </li>
  );
};
export default NavTopCategorie;
