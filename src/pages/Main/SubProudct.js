import React from 'react';
import './Main.scss';

const SubProduct = props => {
  const { item } = props;

  return (
    <li>
      <a href="#">
        <div className="imgBox">
          <img className="img" src={item.SubImgSrc} alt="이미지" />
        </div>
        <div className="title">{item.subTitle2}</div>
        <div className="price">{item.price2}원</div>
      </a>
    </li>
  );
};

export default SubProduct;
