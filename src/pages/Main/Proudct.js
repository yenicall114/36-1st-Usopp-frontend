import React from 'react';

import './Product.scss';
import SubProduct from './SubProudct';

const Product = ({ item }) => {
  const { cname, category_description, product, setProduct } = item;

  return (
    <div className="content">
      <div className="info">
        <div className="title">{cname}</div>
        <div className="text">{category_description}</div>
        <p className="link">{cname} (2)</p>
      </div>
      {product && (
        <ul className="item_list">
          {product.map((item, idx) => {
            return <SubProduct item={item} key={idx} />;
          })}
        </ul>
      )}
      {setProduct && (
        <ul className="item_list">
          {setProduct.map((item, idx) => {
            return <SubProduct item={item} key={idx} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Product;
