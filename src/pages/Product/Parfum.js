import React from 'react';
import './Parfum.scss';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Parfum = ({ parfum, setNewAside }) => {
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
          <li>{parfum.scent}</li>
          <li>{parfum.scentText}</li>
        </ul>
        <ul className="parfumtext">
          <li>{parfum.type}</li>
          <li>{parfum.typeText}</li>
        </ul>
        <ul className="parfumtext">
          <li>
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
          <li>{parfum.ingredientText}</li>
        </ul>
        <ul className="parfumtextBottom">
          <li>{parfum.size}</li>
          <li>{parfum.sizeType}</li>
        </ul>
      </div>
      <button className="cart">
        <span className="buttonText">카트에 추가하기-₩{parfum.price}</span>
      </button>
    </div>
  );
};
export default Parfum;
