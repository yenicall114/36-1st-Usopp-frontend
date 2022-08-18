import React from 'react';
import './NavTopCategorie.scss';
const NavTopCategorie = ({ name, setNewNav, setMenuState, id }) => {
  return (
    <li className="navList">
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
