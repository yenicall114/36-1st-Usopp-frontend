import { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Cart.scss';

const Cart = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch('data/data.json')
      .then(response => response.json())
      .then(setProductList);
  }, []);

  return (
    <div className="cart">
      {productList.length === 0 ? (
        <div className="empty">
          <div />
          <p>카트가 비어있습니다.</p>
        </div>
      ) : (
        <>
          <div className="naviLocation">
            <div className="titleArea">카트</div>
            <div className="sizeArea">사이즈</div>
            <div className="countArea">수량</div>
            <i className="fi fi-br-cross" />
          </div>
          {productList.map((product, idx) => (
            <Product
              key={idx}
              name={product.name}
              size={product.size}
              count={product.count}
              price={product.price}
            />
          ))}
          <div className="cartUnder">
            <div className="underArea">
              <div className="notice">
                <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
              </div>
              <div className="price">
                <p>소계 (세금 포함)</p>
                <span>65,000</span>
              </div>
              <div className="payment">
                <button>결제하기</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
