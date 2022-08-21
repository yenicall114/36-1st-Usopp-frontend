import React from 'react';
import './Main.scss';

const SubProduct = props => {
  const { item } = props;

  return (
    <li>
      <a href="http://localhost:3000/main">
        <div className="imgBox">
          <img className="img" src={item.SubImgSrc} alt="이미지" />
        </div>
        <div className="title">{item.subTitle2}</div>
        <div className="price">₩{item.price2}</div>
      </a>
    </li>
  );
};

export default SubProduct;
