import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

const SubProduct = ({ item }) => {
  const { url, cid, type, price } = item;

  return (
    <li>
      <Link to={`/main/detail/${cid}`}>
        <div className="imgBox">
          <img className="img" src={url} alt="로즈향수이미지" />
        </div>
        <div className="title">{type}</div>
        <div className="price">{price}</div>
      </Link>
    </li>
  );
};

export default SubProduct;
