import React, { useState, useEffect } from 'react';
import './Main.scss';
import Product from './Proudct';
import Filter from './Filter';

const Main = () => {
  const [data, setData] = useState([]);
  const [filterBln, setFliterBln] = useState(false);
  useEffect(() => {
    fetch('http://localhost:3000/data/Maindata.json')
      .then(response => {
        return response.json();
      })
      .then(result => {
        setData(result);
      });
  }, []);
  const filterChange = bln => {
    setFliterBln(bln);
  };
  return (
    <div>
      <div className="gnb">상단 GNB 영역</div>

      <div className="main">
        <h2 className="title">향수</h2>
        <nav className="lnb">
          <ul className="lnbInner">
            <li>
              <a href="#">향수</a>
            </li>
            <li>
              <a href="#">향수 모두 보기</a>
            </li>
            <li>
              <a href="#">미라세티</a>
            </li>
            <li>
              <a href="#">카르스트</a>
            </li>
            <li>
              <a href="#">에레미아</a>
            </li>
            <li>
              <a href="#">로즈</a>
            </li>
            <li>
              <a href="#">휠</a>
            </li>
            <li>
              <a href="#">마라케시</a>
            </li>
          </ul>
          <Filter filterChange={filterChange} />
          <div className={filterBln ? 'filterMenu on' : 'filterMenu'}>
            메뉴메뉴
          </div>
        </nav>

        {data.map((item, idx) => {
          return <Product item={item} key={idx} />;
        })}
      </div>

      <div className="giftBunddleWrap">
        <div className="giftBunddle">
          <div className="leftGiftBunddle">
            <div className="giftTitle">기프트 번들</div>
            <div className="text">
              받는 분과 기념일에 어울리는 의미있는 선물이 될 수 있도록 세심하게
              구성된 함께 사용하면 좋은 제품들
            </div>
            <button type="button" className="giftBunddleBtn">
              기프트 번들 보기
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
    </div>
  );
};

export default Main;
