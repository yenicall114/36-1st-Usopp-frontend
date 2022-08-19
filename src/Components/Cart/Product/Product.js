import { useState } from 'react';
import './Product.scss';

const Product = ({ key, name, size, count, price }) => {
  const [productCount, setProductCount] = useState(count);

  const sumPrice = price * productCount;

  const [showBtn, setShowBtn] = useState(false);
  const [showCount, setShowCount] = useState(true);

  const showDelete = () => setShowBtn(true);

  const hideDelte = () => setShowBtn(false);

  const showCountList = e => {
    setShowCount(!showCount);
  };

  const changeCount = e => {
    setProductCount(Number(e.target.innerText));
    setShowCount(true);
  };

  return (
    <div className="productLocation" key={key}>
      <p className="titleArea">{name}</p>
      <p className="sizeArea productArea">{size}</p>
      <div
        className="countArea btnLocation"
        onMouseOver={showDelete}
        onMouseLeave={hideDelte}
      >
        {showCount ? (
          <>
            <button className="quantity" type="number" onClick={showCountList}>
              <p className="btnCount">{productCount}</p>
              <i className="fi fi-rr-angle-small-down" />
            </button>
            {showBtn && <p className="deleteBtn">삭제</p>}
          </>
        ) : (
          <ul className="countList" onClick={changeCount}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        )}
      </div>
      <p className="price">₩{sumPrice.toLocaleString('ko-KR')}</p>
    </div>
  );
};

export default Product;
