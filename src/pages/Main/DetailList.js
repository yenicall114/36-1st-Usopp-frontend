import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import SubProduct from './SubProudct';
import './Main.scss';

const DetailList = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(`http://10.58.0.58:3000/main/${id}`)
      .then(response => response.json())
      .then(setDetail);
  }, [id]);

  useEffect(() => {
    fetch('http://10.58.0.58:3000/main')
      .then(response => response.json())
      .then(result => {
        setDatas(result);
      });
  }, []);
  return (
    <>
      {' '}
      <nav className="lnb">
        <ul className="lnbInner">
          {datas.map((item, idx) => {
            if (item.cid === 1) {
              return (
                <li key={idx}>
                  <Link to="../">{item.cname}</Link>
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
      </nav>
      {detail.map((data, idx) => (
        <div className="content" key={idx}>
          <div className="info">
            <div>
              <div className="title">{data.cname}</div>
              <div className="text">{data.category_description}</div>
            </div>
            <p className="link">{data.cname} (2)</p>
            {data.product && (
              <ul className="item_list">
                {data.product.map((item, idx) => {
                  return <SubProduct item={item} key={idx} />;
                })}
              </ul>
            )}
            {data.setProduct && (
              <ul className="item_list">
                {data.setProduct.map((item, idx) => {
                  return <SubProduct item={item} key={idx} />;
                })}
              </ul>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default DetailList;
