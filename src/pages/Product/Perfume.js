import React from 'react';
import './Perfume.scss';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Perfume = ({ Perfume, setNewAside, cartPost }) => {
  const {
    title,
    text,
    scent,
    scentText,
    type,
    typeText,
    ingredient,
    ingredientText,
    size,
    sizeType,
    productId,
  } = Perfume;

  return (
    <div className="PerfumeInformation">
      <header className="topHeader">
        <h1 className="topText">{title}</h1>
      </header>
      <div className="information">
        <p className="informationText">{text}</p>
      </div>
      <div className="Perfumetextbox">
        <ul className="Perfumetext">
          <li className="PerfumeLi">{scent}</li>
          <li className="PerfumeLi">{scentText}</li>
        </ul>
        <ul className="Perfumetext">
          <li className="PerfumeLi">{type}</li>
          <li className="PerfumeLi">{typeText}</li>
        </ul>
        <ul className="Perfumetext">
          <li className="PerfumeLi">
            {ingredient}
            <button className="plus">
              <AiOutlinePlusCircle
                className="icon"
                onClick={e => {
                  setNewAside(aside => !aside);
                }}
                size="22"
              />
            </button>
          </li>
          <li className="PerfumeLi">{ingredientText}</li>
        </ul>
        <ul className="PerfumetextBottom">
          <li className="PerfumeLi">{size}</li>
          <li className="PerfumeLi">{sizeType}</li>
        </ul>
      </div>
      <button id={productId} onClick={cartPost} className="cart">
        <span className="buttonText">카트에 추가하기-₩{productId}</span>
      </button>
    </div>
  );
};
export default Perfume;
