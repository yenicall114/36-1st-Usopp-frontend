import { useEffect, useState } from 'react';
import Parfum from './Parfum';
import './ProductParfum.scss';
const ProductParfum = () => {
  const [data, setData] = useState([]);
  const [newAside, setNewAside] = useState(false);
  useEffect(() => {
    fetch('http://localhost:3000/data/parfum.json')
      .then(response => response.json())
      .then(result => setData(result));
  }, []);

  const cartPost = e => {
    console.log(e.target.id);
    //todolist:API통신용
    // fetch('api', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //     Authorization: JSON.parse(localStorge.getUtem('data')).accessToken,
    //   },
    //   body: JSON.stringify({
    //     pordurtId: e.target.id,
    //   }),
    // });
  };

  return (
    <div className="productParfum">
      <div
        className={newAside ? 'outAside out' : 'outAside'}
        onClick={() => setNewAside(prev => !prev)}
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
            <Parfum
              cartPost={cartPost}
              setNewAside={setNewAside}
              parfum={data[0]}
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
export default ProductParfum;
