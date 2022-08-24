import React from 'react';
import './Parfum.scss';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Parfum = ({ parfum, setNewAside, cartPost }) => {
  return (
    <div className="parfumInformation">
      <header className="topHeader">
        <h1 className="topText">{parfum.title}</h1>
      </header>
      <div className="information">
        <p className="informationText">{parfum.text}</p>
      </div>
      <div className="parfumtextbox">
        <ul className="parfumtext">
          <li className="parfumLi">{parfum.scent}</li>
          <li className="parfumLi">{parfum.scentText}</li>
        </ul>
        <ul className="parfumtext">
          <li className="parfumLi">{parfum.type}</li>
          <li className="parfumLi">{parfum.typeText}</li>
        </ul>
        <ul className="parfumtext">
          <li className="parfumLi">
            {parfum.ingredient}
            <button className="plus">
              <AiOutlinePlusCircle
                className="icon"
                onClick={e => {
                  setNewAside(prev => !prev);
                }}
                size="22"
              />
            </button>
          </li>
          <li className="parfumLi">{parfum.ingredientText}</li>
        </ul>
        <ul className="parfumtextBottom">
          <li className="parfumLi">{parfum.size}</li>
          <li className="parfumLi">{parfum.sizeType}</li>
        </ul>
      </div>
      <button id={parfum.productId} onClick={cartPost} className="cart">
        <span className="buttonText">카트에 추가하기-₩{parfum.productId}</span>
      </button>
    </div>
  );
};
export default Parfum;
