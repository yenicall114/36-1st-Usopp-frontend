import React, { useState } from 'react';
import PerfumeCategorie from './PerfumeCategorie';
import './Nav.scss';

const Nav = () => {
  const [className, setClassName] = useState('');

  const click = e => {
    e.preventDefault();
    e.target.className === 'navList' || e.target.className === 'clickList'
      ? setClassName('navListClick')
      : setClassName('navListClick');
  };

  return (
    <div className="nav">
      <div className="topNav">
        <nav className="mainNav">
          <ul className="navUl">
            <li className="navList">
              <a className="clickList" href="/">
                스킨 케어
              </a>
            </li>
            <li className="navList">
              <a href="/">바디 & 핸드</a>
            </li>
            <li className="navList">
              <a href="/">헤어</a>
            </li>
            <li onClick={click} className={`navList ${className}`}>
              <a className="clickList" href="/">
                향수
              </a>
            </li>
            <li className="navList">
              <a href="/">홈</a>
            </li>
            <li className="navList">
              <a href="/">키트 & 여행 제품</a>
            </li>
            <li className="navList">
              <a href="/">기프트 가이드</a>
            </li>
            <li className="navList">
              <a href="/">읽기</a>
            </li>
            <li className="navList">
              <a href="/">스토어</a>
            </li>
            <li className="navList">
              <a href="/">
                <img src="/image/search.webp" alt="" />
              </a>
            </li>
            <li className="navList">
              {className === 'navListClick' ? (
                <button
                  onClick={() => {
                    setClassName('navList');
                  }}
                >
                  닫기 X
                </button>
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
      <div>{className === 'navListClick' ? <PerfumeCategorie /> : null}</div>
    </div>
  );
};

export default Nav;
