import { useState } from 'react';
import { API } from '../../../pages/Main/RESTFULLAPI';
import './Product.scss';

const Product = ({
  idx,
  product,
  deletedList,
  setProductData,
  productData,
}) => {
  const { product_id, id, name, size, quantity, price } = product;

  const sumPrice = price * quantity;

  const [showBtn, setShowBtn] = useState(false);
  const [showCount, setShowCount] = useState(true);

  const showDelete = () => setShowBtn(true);

  const hideDelte = () => setShowBtn(false);

  const showCountList = e => {
    setShowCount(showCount => !showCount);
  };

  const changeCount = e => {
    const newList = productData;
    newList[idx].quantity = Number(e.target.innerText);
    setProductData([...newList]);
    setShowCount(true);
    fetch(`http://${API}:3000/carts`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        quantity: Number(e.target.innerText),
        productId: product_id,
      }),
    });
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
              <p className="btnCount">{product_id}</p>
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
