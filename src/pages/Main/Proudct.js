import React from 'react';
import './Main.scss';
import SubProduct from './SubProudct';

const Product = props => {
  const { item } = props;

  return (
    <div className="content">
      <div className="info">
        <div className="title">{item.title}</div>
        <div className="text">{item.text}</div>
        <a href="http://localhost:3000/main" className="link">
          {item.title} (2)
        </a>
      </div>
      {item.subData ? (
        <ul className="item_list">
          {item.subData.map((item, idx) => {
            return <SubProduct item={item} key={idx} />;
          })}
        </ul>
      ) : (
        ''
      )}
    </div>
  );
};

export default Product;
