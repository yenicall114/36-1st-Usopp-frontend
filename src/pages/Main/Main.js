import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import Product from './Proudct';
import Filter from './Filter';
import Option from './Option';

const Main = () => {
  const [data, setData] = useState([]);

  const [filterBln, setFliterBln] = useState(false);

  useEffect(() => {
    fetch('http://10.58.0.58:3000/main')
      .then(response => response.json())
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
            {data.map((item, idx) => {
              if (item.cid === 1) {
                return (
                  <li key={idx}>
                    <Link to="/">{item.cname}</Link>
                  </li>
                );
              } else {
                return (
                  <li key={idx}>
                    <Link to={`../../main/${item.cid}`}>{item.cname}</Link>
                  </li>
                );
              }
            })}
          </ul>
          <Filter filterChange={filterChange} />
          <div className={filterBln ? 'filterMenu on' : 'filterMenu'}>
            <Option />
          </div>
        </nav>
        {data.map((item, idx) => {
          if (item.category_description) {
            return <Product item={item} key={idx} />;
          }
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
