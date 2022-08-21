import React from 'react';
import './ProductList.scss';

const ProductList = () => {
  return (
    <div className="productListWrap">
      <div className="productList">
        <p className="info">
          로즈는 그린, 우디, 가벼운 스모크 노트를 기반으로 로즈의 전반적인
          생명주기를 표현합니다. 확실히 플로럴 계열이지만 미묘하고 풍성한 향이
          특징입니다. 모더니스트 디자이너 샬로트 페리앙의 삶과 일, 그리고
          열정에서 영감을 받았습니다.
        </p>
        <div class="itemList">
          <div className="productItem">
            <img src="/image/MainImg/Aesop-01.webp" alt="이미지" />
            <div className="title">로즈앙상블</div>
            <div className="price">₩ 246,000</div>
            <div className="detail01">
              <span>번들 소개</span> 활기찬 플로럴과 상쾌한 시트러스 아로마가
              어우러진 제품 3종
            </div>
            <div className="detail02">
              <span>구성품</span> 로즈 오 드 퍼퓸, 에이 로즈 바이 애니 아더 네임
              바디 클렌저, 레저렉션 아로마틱 핸드 밤
            </div>
          </div>
          <div className="productItem">
            <img src="/image/MainImg/Aesop-02.webp" alt="이미지" />
            <div className="title">로즈 오 드 퍼퓸</div>
            <div className="price">₩ 195,000</div>
            <div className="detail01">
              <span>주요 성분</span>로즈, 시소, 과이악우드
            </div>
            <div className="detail02">
              <span>타입</span>
              모든 성별, 개척자, 모더니스트, 유목민
            </div>
          </div>
        </div>
      </div>
      <div className="giftBunddleWrap">
        <div className="giftBunddle">
          <div className="leftGiftBunddle">
            <div className="giftTitle">홈케어 기프트</div>
            <div className="text">
              평온함이나 즐거움, 호기심을 불러일으켜 거실에서 사무실과 같은 개인
              공간을 보다 아름답게 가꿔주는 섬세하게 제작된 아로마
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
    </div>
  );
};

export default ProductList;
