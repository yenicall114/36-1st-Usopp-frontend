import React from 'react';
import './Option.scss';

const Option = () => {
  return (
    <div className="MenuWrap">
      <h5>아로마</h5>
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
      <div className="Price">
        <h5>가격범위</h5>
        <ul>
          <li>모든 가격</li>
          <li>₩ 85000 - ₩ 170000</li>
          <li>₩ 170000 +</li>
        </ul>
      </div>
    </div>
  );
};

export default Option;
