import React from 'react';
import './Perfume.scss';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Perfume = ({ Perfume, setNewAside, cartPost }) => {
  const { name, price, type, description, aromas, ingredient, size, id } =
    Perfume;

  return (
    <div className="PerfumeInformation">
      <header className="topHeader">
        <h1 className="topText">{name}</h1>
      </header>
      <div className="information">
        <p className="informationText">{description}</p>
      </div>
      <div className="Perfumetextbox">
        <ul className="Perfumetext">
          <li className="PerfumeLi">향</li>
          <li className="PerfumeLi">{aromas[0]}</li>
        </ul>
        <ul className="Perfumetext">
          <li className="PerfumeLi">타입</li>
          <li className="PerfumeLi">{type}</li>
        </ul>
        <ul className="Perfumetext">
          <li className="PerfumeLi">
            주요성분
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
          <li className="PerfumeLi">{ingredient}</li>
        </ul>
        <ul className="PerfumetextBottom">
          <li className="PerfumeLi">사이즈</li>
          <li className="PerfumeLi">{size} ml</li>
        </ul>
      </div>
      <button id={id} onClick={cartPost} className="productCart">
        <span className="buttonText">카트에 추가하기-₩{price}</span>
      </button>
    </div>
  );
};
export default Perfume;
