import { useEffect, useState } from 'react';
import Perfume from './Perfume';
import './ProductPerfume.scss';

const ProductPerfume = () => {
  const [data, setData] = useState([]);
  const [newAside, setNewAside] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/data/Perfume.json')
      .then(response => response.json())
      .then(result => setData(result));
  }, []);

  const cartPost = e => {
    // API통신용;
    fetch('http://10.58.0.218:8000/carts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        // Authorization: JSON.parse(localStorge.getUtem('data')).accessToken,
      },
      body: JSON.stringify({
        userId: 1,
        productId: e.target.id,
      }),
    });
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
          {data[0] && <p className="outText">{data[0].aside}</p>}
          {data[0] && <p className="outText">{data[0].asideCenter}</p>}
          {data[0] && <p className="outText">{data[0].asideButtom}</p>}
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
            <img src={data[0].img} className="mainImg" alt="mainimg" />
          )}
        </div>
        <a href="/" className="usopp">
          <h1 className="titleName">Usopp</h1>
        </a>
      </div>
    </div>
  );
};
export default ProductPerfume;
