import React, { useState } from 'react';
import Categorie from '../Categorie';
import { NAVBARDATA_TEXT } from '../NavBarData';
import NavTopCategorie from '../NavTopCategorie';
import './Nav.scss';

const Nav = () => {
  const [newNav, setNewNav] = useState(false);
  const apearPerfumeCategory = () => setNewNav(true);
  const [menuState, setMenuState] = useState(0);
  const [listNow, setListNow] = useState();

  return (
    <div className="nav">
      <div className="topNav">
        <nav className="mainNav">
          <ul
            className="navUl"
            onClick={e => {
              setListNow(e.target.innerText);
            }}
          >
            {NAVBARDATA_TEXT.map(top => (
              <NavTopCategorie
                key={top.id}
                id={top.id}
                setMenuState={setMenuState}
                setNewNav={() => apearPerfumeCategory()}
                name={top.mainMenu}
                listNow={listNow}
              />
            ))}
            <li className="navList">
              <a className="clickList" href="/">
                스토어
              </a>
            </li>
            <li className="navList">
              <a className="clickList" href="/">
                <img src="/image/search.webp" alt="" />
              </a>
            </li>
            <li className="navList">
              {newNav === true ? (
                <button onClick={() => setNewNav(false)}>닫기 X</button>
              ) : null}
            </li>
          </ul>
        </nav>
        <nav className="subNav">
          <ul>
            <button>로그인</button>
            <button>카트</button>
          </ul>
        </nav>
      </div>

      <div className={newNav ? 'perfume on' : 'perfume'}>
        <Categorie
          color={NAVBARDATA_TEXT[menuState].backgroundColor}
          data={NAVBARDATA_TEXT[menuState].subMenu}
        />
      </div>
    </div>
  );
};

export default Nav;
