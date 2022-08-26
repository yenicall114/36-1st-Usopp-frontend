import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Perfume from './Perfume';
import { API } from '../Main/RESTFULLAPI';
import './ProductPerfume.scss';

const ProductPerfume = () => {
  const { num } = useParams();
  const [data, setData] = useState([]);
  const [newAside, setNewAside] = useState(false);

  useEffect(() => {
    fetch(`http://${API}:3000/main/detail/${num}`)
      .then(response => response.json())
      .then(result => setData(result));
  }, [num]);

  const cartPost = e => {
    // API통신용;
    fetch(`http://${API}:3000/carts`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: localStorage.getItem('Token'),
      },
      body: JSON.stringify({
        productId: e.target.id,
      }),
    });
    alert('장바구니에 추가되었습니다!');

    const btn = document.getElementById('cart');
    console.log(btn);

    btn.innerHTML = '카트1';
  };

  return (
    <div className="productPerfume">
      <div
        className={newAside ? 'outAside out' : 'outAside'}
        onClick={() => setNewAside(aside => !aside)}
      />
      <aside className={newAside ? 'aside new' : 'aside'}>
        <div className="in">
          <h2 className="outTitle">성분</h2>
          {data.map(text => {
            const arry = text.detailed_ingredient.split('@');
            return arry.map((p, idx) => (
              <p key={idx} className="outText">
                {p}
              </p>
            ));
          })}
        </div>
      </aside>
      <div className="productMain">
        <div className="productContent">
          <div className="title">향수 . 로즈</div>
          {data[0] && (
            <Perfume
              cartPost={cartPost}
              setNewAside={setNewAside}
              Perfume={data[0]}
            />
          )}
        </div>
        <div className="productImg">
          {data[0] && (
            <img src={data[0].url} className="mainImg" alt="mainimg" />
          )}
        </div>
        <Link to="/" className="usopp">
          <h1 className="titleName">Usopp</h1>
        </Link>
      </div>
    </div>
  );
};
export default ProductPerfume;
