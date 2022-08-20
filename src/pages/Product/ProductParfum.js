import React, { useState } from 'react';
import './ProductParfum.scss';
import { AiOutlinePlusCircle } from 'react-icons/ai';
const ProductParfum = () => {
  // const [Newaside, setNewAside] = useState(false);

  return (
    <div className="productParfum">
      {/* <aside>
        <h4>성분</h4>
        <div>
          <p>
            변성알코올, 정제수, 향료, 리모넨, 리날룰, 시트로넬올, 제라니올,
            유제놀, 아이소유제놀, 파네솔, 벤질알코올, 신남알, 시트랄,
            하이드록시시트로넬알, 벤질벤조에이트
          </p>
          <p>
            성분 목록은 변경될 수 있습니다. 구매하신 제품에 대한 정확한 성분
            목록은, 사용 전 제품 라벨을 참조하시기 바랍니다.
          </p>
          <p>
            이솝은 PETA로부터 비건 인증을 받은 브랜드로 자체 안전성과 효능,
            지속가능성을 확인한 성분을 사용합니다.
          </p>
        </div>
      </aside> */}
      <div className="productMain">
        <div className="productContent">
          <div className="titlle">향수 . 로즈</div>
          <div className="parfumInformation">
            <header className="topHeader">
              <h1 className="topText">로즈 오 드 퍼퓸</h1>
            </header>
            <div className="information">
              <p className="informationText">
                장미 향이지만 활기찬 시소 향, 우드, 스파이스, 흙내음, 가벼운
                스모크가 더해진 미묘하고 풍성한 노트로 부드러우면서 강렬한 향수
              </p>
            </div>
            <div className="parfumtextbox">
              <ul className="parfumtext">
                <li>향</li>
                <li>플로럴, 그린, 우디</li>
              </ul>
              <ul className="parfumtext">
                <li>타입</li>
                <li>모든 성별, 개척자, 모더니스트, 유목민</li>
              </ul>
              <ul className="parfumtext">
                <li>
                  주요 성분
                  <button className="plus">
                    <AiOutlinePlusCircle size="22" />
                  </button>
                </li>
                <li>로즈, 시소, 과이악우드</li>
              </ul>
              <ul className="parfumtextBottom">
                <li>사이즈</li>
                <li>50 mL</li>
              </ul>
            </div>
            <button className="cart">
              <span>카트에 추가하기</span>
            </button>
          </div>
        </div>
        <div className="productImg">
          <img src="./image/test.webp" alt="mainimg" />
        </div>
        <a href="/" className="usopp">
          <h1 className="titlleName">Usopp</h1>
        </a>
      </div>
    </div>
  );
};
export default ProductParfum;
