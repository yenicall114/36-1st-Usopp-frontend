import { useState } from 'react';
import './Product.scss';

const Product = ({
  idx,
  product,
  deletedList,
  setProductData,
  productData,
}) => {
  const { id, name, size, count, price } = product;

  const sumPrice = price * count;

  const [showBtn, setShowBtn] = useState(false);
  const [showCount, setShowCount] = useState(true);

  const showDelete = () => setShowBtn(true);

  const hideDelte = () => setShowBtn(false);

  const showCountList = e => {
    setShowCount(showCount => !showCount);
  };

  const changeCount = e => {
    const newList = productData;
    newList[idx].count = Number(e.target.innerText);
    setProductData([...newList]);
    setShowCount(true);
  };

  return (
    <div className="productLocation">
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
              <p className="btnCount">{count}</p>
              <i className="fi fi-rr-angle-small-down" />
            </button>
            {showBtn && (
              <p className="deleteBtn" id={id} onClick={deletedList}>
                삭제
              </p>
            )}
          </>
        ) : (
          <ul
            className="countList"
            onClick={changeCount}
            onMouseLeave={showCountList}
          >
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        )}
      </div>
      <p className="price">₩ {sumPrice.toLocaleString('ko-KR')}</p>
    </div>
  );
};

export default Product;
