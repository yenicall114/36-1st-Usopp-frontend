// import React, { useState } from 'react';
import NavBarCategorie from './NavBarCategorie';
import NavBarCategorieTwo from './NavBarCategorieTwo';
import './PerfumeCategorie.scss';

const PerfumeCategorie = ({ data }) => {
  return (
    <div className="categorieMain">
      <div className="leftCategorie">
        <div className="titlle">
          <h1>Usopp</h1>
        </div>
        <div className="categorieLeft">
          <ul>
            {data.left.map(cate => (
              <NavBarCategorie key={cate.id} name={cate.name} />
            ))}
          </ul>
        </div>
      </div>
      <div className="centerCategorie">
        <div className=" categorieAroma">
          <ul>
            {data.right.map(two => (
              <NavBarCategorieTwo key={two.id} name={two.name} />
            ))}

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
