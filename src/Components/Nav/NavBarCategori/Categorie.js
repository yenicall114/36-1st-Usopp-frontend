import React from 'react';
import './Categorie.scss';

const Categorie = ({ data, color }) => {
  return (
    <div className={`categorieMain ${color}`}>
      <div className="leftCategorie">
        <div className="titlle">
          <a href="/" className="titlleName">
            Usopp
          </a>
        </div>
        <div className="categorieLeft">
          <ul>
            {data.left.map(cate => (
              <li key={cate.id} className="leftList">
                <a className="leftName" href="/">
                  {cate.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="centerCategorie">
        <div className=" categorieAroma">
          <ul>
            {data.center.map(two => (
              <li key={two.id} className="leftList">
                <a className="leftName" href="/">
                  {two.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rightCategorie">
        {data.right.map(img => (
          <img key={img.id} className="parfumImg" alt="향수" src={img.img} />
        ))}
      </div>
    </div>
  );
};
export default Categorie;
