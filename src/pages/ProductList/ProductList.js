import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ProductList.scss';
import { API } from '../Main/RESTFULLAPI';
const ProductList = () => {
  const { cid } = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(`http://${API}:3000/main/${cid}`)
      .then(response => response.json())
      .then(data => setList(data[0]));
  }, [cid]);

  return (
    <div className="productListWrap">
      {list && (
        <>
          <div className="productList">
            <p className="info">{list.category_description}</p>
            <div className="itemList">
              <div className="productItem">
                {list.product &&
                  list.product.map(list => (
                    <>
                      <img src={list.url} alt="이미지" />
                      <div className="title">{list.name}</div>
                      <div className="price">₩ {list.price}</div>
                      <div className="detail01">
                        <span>주요 성분</span> {list.ingredient}
                      </div>
                      <div className="detail02">
                        <span>대상</span> {list.type}
                      </div>
                    </>
                  ))}
              </div>
              {list.setProduct !== null &&
                list?.setProduct?.map(productList => (
                  <div key={productList.id} className="productItem">
                    <img src={productList.url} alt="이미지" />
                    <div className="title">{productList.name}</div>
                    <div className="price">₩ {productList.price}</div>
                    <div className="detail01">
                      <span>주요 성분</span>
                      {productList.ingredient}
                    </div>
                    <div className="detail02">
                      <span>타입</span>
                      {productList.type}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="giftBunddleWrap">
            <div className="giftBunddle">
              <div className="leftGiftBunddle">
                <div className="giftTitle">홈케어 기프트</div>
                <div className="text">
                  평온함이나 즐거움, 호기심을 불러일으켜 거실에서 사무실과 같은
                  개인 공간을 보다 아름답게 가꿔주는 섬세하게 제작된 아로마
                </div>
                <button type="button" className="giftBunddleBtn">
                  홈케어 기프트 보기
                </button>
              </div>
              <div className="imgWrap">
                <img
                  className="img"
                  src="/image/MainImg/mainImg7.png"
                  alt="상품이미지"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
