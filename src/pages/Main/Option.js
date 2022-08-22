import React from 'react';
import './Option.scss';

const list01 = [
  {
    id: 'check01_01',
    name: '모든 향',
  },
  {
    id: 'check01_02',
    name: '우디',
  },
  {
    id: 'check01_03',
    name: '플로럴',
  },
  {
    id: 'check01_04',
    name: '그린',
  },
  {
    id: 'check01_05',
    name: '스파이시',
  },
  {
    id: 'check01_06',
    name: '시트러스',
  },
  {
    id: 'check01_07',
    name: '마린 향',
  },
  {
    id: 'check01_08',
    name: '상쾌한',
  },
  {
    id: 'check01_09',
    name: '스모키',
  },
  {
    id: 'check01_10',
    name: '유향',
  },
  {
    id: 'check01_11',
    name: '허브',
  },
];

const Option = () => {
  return (
    <div className="allMenuWrap">
      <div className="menuWrap">
        <h5 className="itemLaber">아로마</h5>
        <ul className="chkwrap">
          {list01.map((item, idx) => {
            return (
              <li key={idx}>
                <input
                  name={item.name}
                  type="checkbox"
                  value={item.name}
                  id={item.id}
                />
                <label for={item.id} />
                {item.name}
              </li>
            );
          })}
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
