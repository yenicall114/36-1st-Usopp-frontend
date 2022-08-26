import React from 'react';
import { Link } from 'react-router-dom';
import './Categorie.scss';

const Categorie = ({ data, color, setNewNav, setListNow }) => {
  return (
    <div className={`categorie ${color}`}>
      <div className="leftCategorie">
        <div className="titlle">
          <Link to="/" className="titlleName">
            Usopp
          </Link>
        </div>
        <div className="categorieLeft">
          <ul>
            {data.left.map(cate => (
              <li key={cate.id} className="leftList">
                {cate.url && (
                  <Link
                    className="leftName"
                    to={cate.url}
                    onClick={() => {
                      setNewNav(false);
                      setListNow(false);
                    }}
                  >
                    {cate.name}
                  </Link>
                )}
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
