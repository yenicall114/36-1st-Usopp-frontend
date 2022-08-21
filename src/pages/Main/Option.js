import React from 'react';
import './Option.scss';

const Option = () => {
  return (
    <div className="allMenuWrap">
      <div className="menuWrap">
        <h5 className="itemLaber">아로마</h5>
        <ul className="chkwrap">
          <li>
            <input
              name="모든 향"
              type="checkbox"
              value="모든 향"
              id="check01_01"
            />
            <label for="check01_01" />
            모든 향
          </li>
          <li>
            <input name="우디" type="checkbox" value="우디" id="check01_02" />
            <label for="check01_02" />
            우디
          </li>
          <li>
            <input
              name="플로럴"
              type="checkbox"
              value="플로럴"
              id="check01_03"
            />
            <label for="check01_03" />
            플로럴
          </li>
          <li>
            <input name="그린" type="checkbox" value="그린" id="check01_04" />
            <label for="check01_04" />
            그린
          </li>
          <li>
            <input
              name="스파이시"
              type="checkbox"
              value="스파이시"
              id="check01_05"
            />
            <label for="check01_05" />
            스파이시
          </li>
          <li>
            <input
              name="시트러스"
              type="checkbox"
              value="시트러스"
              id="check01_06"
            />
            <label for="check01_06" />
            시트러스
          </li>
          <li>
            <input
              name="마린 향"
              type="checkbox"
              value="마린 향"
              id="check01_07"
            />
            <label for="check01_07" />
            마린 향
          </li>
          <li>
            <input
              name="상쾌한"
              type="checkbox"
              value="상쾌한"
              id="check01_08"
            />
            <label for="check01_08" />
            상쾌한
          </li>
          <li>
            <input
              name="스모키"
              type="checkbox"
              value="스모키"
              id="check01_09"
            />
            <label for="check01_09" />
            스모키
          </li>
          <li>
            <input name="유향" type="checkbox" value="유향" id="check01_10" />
            <label for="check01_10" />
            유향
          </li>
          <li>
            <input name="허브" type="checkbox" value="허브" id="check01_11" />
            <label for="check01_11" />
            허브
          </li>
        </ul>
      </div>
      <div className="menuWrap">
        <h5 className="itemLaber">가격 범위</h5>
        <div className="chkwrap">
          <li>
            <input
              name="가격 범위"
              type="checkbox"
              value="모든 가격"
              id="check02_01"
            />
            <label for="check02_01" />
            모든 가격
          </li>
          <li>
            <input name="가격1" type="checkbox" value="우격1" id="check02_02" />
            <label for="check02_02" />₩ 85000 - ₩ 170000
          </li>
          <li>
            {' '}
            <input name="가격2" type="checkbox" value="가격2" id="check02_03" />
            <label for="check02_03" />₩ 170000 +
          </li>
        </div>
      </div>
    </div>
  );
};

export default Option;
