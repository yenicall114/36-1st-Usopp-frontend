import React from 'react';
import './Option.scss';

const Option = () => {
  return (
    <div className="allMenuWrap">
      <div className="first">
        <div className="chkwrap1">
          <input name="모든 향" type="checkbox" value="모든 향"></input>
          <input name="우디" type="checkbox" value="우디"></input>
          <input name="플로럴" type="checkbox" value="플로럴"></input>
          <input name="그린" type="checkbox" value="그린"></input>
          <input name="스파이시" type="checkbox" value="스파이시"></input>
          <input name="시트러스" type="checkbox" value="시트러스"></input>
          <input name="마린 향" type="checkbox" value="마린 향"></input>
          <input name="상쾌한" type="checkbox" value="상쾌한"></input>
          <input name="스모키" type="checkbox" value="스모키"></input>
          <input name="유향" type="checkbox" value="유향"></input>
          <input name="허브" type="checkbox" value="허브"></input>
        </div>
        <div className="MenuWrap">
          <ul>
            <li>모든 향</li>
            <li>우디</li>
            <li>플로럴</li>
            <li>그린</li>
            <li>스파이시</li>
            <li>시트러스</li>
            <li>마린 향</li>
            <li>상쾌한</li>
            <li>스모키</li>
            <li>유향</li>
            <li>허브</li>
          </ul>
        </div>
      </div>
      <div className="second">
        <div className="chkwrap2">
          <input name="모든 가격" type="checkbox" value="모든 가격"></input>
          <input name="가격1" type="checkbox" value="우격1"></input>
          <input name="가격2" type="checkbox" value="가격2"></input>
        </div>
        <div className="Price">
          <ul>
            <li>모든 가격</li>
            <li>₩ 85000 - ₩ 170000</li>
            <li>₩ 170000 +</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Option;
