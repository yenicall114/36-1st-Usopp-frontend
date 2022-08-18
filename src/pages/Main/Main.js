import React, { useState, useEffect } from 'react';
import './Main.scss';

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('')
      .then(response => {
        return response.json();
      })
      .then(result => {
        setData(result);
      }, []);
  });
  const filter = e => {
    alert('hi');
  };
  return (
    <div>
      <div className="gnb">상단 GNB 영역</div>

      <div className="main">
        <h2 className="title">향수</h2>
        <nav className="lnb">
          <ul className="lnb_inner">
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
          <button type="button" onClick={filter} className="btn">
            필터
          </button>
        </nav>

        <div className="content type01">
          <div className="info">
            <div className="title">로즈</div>
            <div className="text">
              로즈는 그린, 우디, 가벼운 스모크 노트를 기반으로 로즈의 전반적인
              생명주기를 표현합니다. 확실히 플로럴 계열이지만 미묘하고 풍성한
              향이 특징입니다. 모더니스트 디자이너 샬로트 페리앙의 삶과 일,
              그리고 열정에서 영감을 받았습니다.
            </div>
            <a href="#" className="link">
              로즈 (2)
            </a>
          </div>
          <ul className="item_list">
            <li>
              <a href="#">
                <img
                  className="img"
                  src="/image/MainImg/mainImg5.png"
                  alt="상품이미지"
                />
                <div className="title">로즈앙상블</div>
                <div className="price">246,000원</div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="img"
                  src="/image/MainImg/mainImg2.png"
                  alt="상품이미지"
                />
                <div className="title">로즈 오 드 퍼퓸</div>
                <div className="price">195,000원</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="content type02">
          <div className="info">
            <div className="title">휠</div>
            <div className="text">
              풍부한 스파이스, 스모키 우드, 짙은 그린이 조화를 이룬 향이 일본의
              숲을 방불케 합니다.
            </div>
            <a href="#" className="link">
              휠 (2)
            </a>
          </div>
          <ul className="item_list">
            <li>
              <a href="#">
                <img
                  className="img"
                  src="/image/MainImg/mainImg3.png"
                  alt="상품이미지"
                />
                <div className="title">휠 앙상블</div>
                <div className="price">219,000원</div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="img"
                  src="/image/MainImg/mainImg4.png"
                  alt="상품이미지"
                />
                <div className="title">휠 오드 퍼퓸</div>
                <div className="price">145,000원</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="content type03">
          <div className="info">
            <div className="title">마라케시</div>
            <div className="text">
              매혹적인 도시 모로코의 마라케시에서 영감을 받은 이 향은 마라케시
              전통요리에 사용되는 향신료의 아름다운 아로마와 그들의 시장, 주변
              사막에서 보이는 강렬한 색감 그리고 모로코 전통의 특징이라 할 수
              있는 따뜻한 환대의 문화에서 영감을 얻어 탄생하였습니다.
            </div>
            <a href="#" className="link">
              마라케시 (2)
            </a>
          </div>
          <ul className="item_list">
            <li>
              <a href="#">
                <img
                  className="img"
                  src="/image/MainImg/mainImg5.png"
                  alt="상품이미지"
                />
                <div className="title">마라케시 오 드 퍼퓸</div>
                <div className="price">155,000원</div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="img"
                  src="/image/MainImg/mainImg6.png"
                  alt="상품이미지"
                />
                <div className="title">마라케시 인텐스 앙상블</div>
                <div className="price">169,000원</div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="img"
                  src="/image/MainImg/mainImg5.png"
                  alt="상품이미지"
                />
                <div className="title">마라케시 인텐스 퍼퓸</div>
                <div className="price">110,000원</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="content type04">
          <div className="info">
            <div className="title">테싯</div>
            <div className="text">
              상쾌하고 활력 넘치는 탑 노트와 스파이시한 언더톤이 어우러지는
              현대적 느낌을 풍기는 남녀 공용 향수입니다.
            </div>
            <a href="#" className="link">
              테싯 (2)
            </a>
          </div>
          <ul className="item_list">
            <li>
              <a href="#">
                <img
                  className="img"
                  src="/image/MainImg/mainImg2.png"
                  alt="상품이미지"
                />
                <div className="title">테싯 오 드 퍼퓸</div>
                <div className="price">140,000원</div>
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="img"
                  src="/image/MainImg/mainImg3.png"
                  alt="상품이미지"
                />
                <div className="title">테싯 앙상블</div>
                <div className="price">199,000원</div>
              </a>
            </li>
          </ul>
        </div>

        <div className="content type05">
          <div className="info">
            <div className="title">에레미아</div>
            <div className="text">
              에레미아는 잊혀진 황무지를 연상시킵니다. 상큼하고 활기찬 노트가
              펼쳐지고 뒤이어 머스키하고 이끼의 그린 언더톤이 내려앉습니다.
            </div>
            <a href="#" className="link">
              에레미아 (1)
            </a>
          </div>
          <ul className="item_list">
            <li>
              <a href="#">
                <img
                  className="img"
                  src="/image/MainImg/mainImg4.png"
                  alt="상품이미지"
                />
                <div className="title">에레미아 오 드 퍼퓸</div>
                <div className="price">210,000원</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="content type06">
          <div className="info">
            <div className="title">카르스트</div>
            <div className="text">
              카르스트는 저 멀리 보이는 바위투성이 해안가에 도달했음을 알리는
              신호입니다. 상쾌한 허브 노트가 해안가의 마린 향과 은은한 스모키의
              언더톤으로 이어집니다.
            </div>
            <a href="#" className="link">
              카르스트 (1)
            </a>
          </div>
          <ul className="item_list">
            <li>
              <a href="#">
                <img
                  className="img"
                  src="/image/MainImg/mainImg5.png"
                  alt="상품이미지"
                />
                <div className="title">카르스트 오 드 퍼퓸</div>
                <div className="price">210,000원</div>
              </a>
            </li>
          </ul>
        </div>
        <div className="content type07">
          <div className="info">
            <div className="title">미라세티</div>
            <div className="text">
              미라세티는 험난한 바다를 항해하는 낡은 배를 떠오르게 합니다.
              스파이시한 탑 노트가 따뜻한 발사믹, 우드 향, 위스키로 가득한 지하
              저장고에서 나는 희미한 머스크 향과 어우러집니다.
            </div>
            <a href="#" className="link">
              미라세티 (1)
            </a>
          </div>
          <ul className="item_list">
            <li>
              <a href="#">
                <img
                  className="img"
                  src="/image/MainImg/mainImg6.png"
                  alt="상품이미지"
                />
                <div className="title">미라세티 오 드 퍼퓸</div>
                <div className="price">210,000원</div>
              </a>
            </li>
          </ul>
        </div>
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
          <div class="imgWrap">
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
