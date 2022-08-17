import React from 'react';
import './PerfumeCategorie.scss';

const PerfumeCategorie = () => {
  return (
    <div className="categorieMain">
      <div className="leftCategorie">
        <div className="titlle">
          <h1>Usopp</h1>
        </div>
        <div className="categorieLeft">
          <h2>향수</h2>
          <ul>
            <li>
              <a href="/">향수 모두 보기</a>
            </li>
            <li>
              <a href="/">미라세티</a>
            </li>
            <li>
              <a href="/">카르스트</a>
            </li>
            <li>
              <a href="/">에레미아</a>
            </li>
            <li>
              <a href="/">로즈</a>
            </li>
            <li>
              <a href="/">휠</a>
            </li>
            <li>
              <a href="/">마라케시</a>
            </li>
            <li>
              <a href="/">테싯</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="centerCategorie">
        <div className=" categorieAroma">
          <h2>향수 아로마</h2>
          <ul>
            <li>
              <a href="/">플로럴</a>
            </li>
            <li>
              <a href="/">프레쉬</a>
            </li>
            <li>
              <a href="/">우디</a>
            </li>
            <li>
              <a href="/">오퓰런트</a>
            </li>
            <div className="range">
              <li>
                <h2>레인지</h2>
              </li>
              <li>
                <a href="/">아더토피아</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="rightCategorie">
        <img alt="향수" src="/image/aesop.jpeg" />
      </div>
    </div>
  );
};
export default PerfumeCategorie;
