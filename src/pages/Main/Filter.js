import React from 'react';
import './Filter.scss';

let filterBln = false;

const Filter = props => {
  const { filterChange } = props;

  const myfun = () => {
    if (filterBln === true) {
      filterBln = false;
    } else {
      filterBln = true;
    }

    filterChange(filterBln);
  };
  return (
    <button type="button" onClick={myfun} className="btn">
      필터
    </button>
  );
};

export default Filter;

// return(
//     <div className="header">
//             <ul className="header-wrapper">
//                 <li><MenuIcon onClick={()=>toggleMenu()}></MenuIcon></li>  // 클릭되었을 때 준비한 함수 호출! on off 개념
//                 <li><img width="45px" src="https://www.burgerking.co.kr/dist/img/logo_titleBar.e89f6852.png"></img></li>
//                 <li>
//                     <Button
//                         variant="contained"
//                         color="secondary"
//                         size="small"
//                         style={buttonStyles}
//                     >
//                         딜리버리주문 >
//                     </Button>
//                 </li>
//             </ul>
//             <ul className={isOpen ? "show-menu" : "hide-menu"}> // 삼항연산자 true 일 때 클래스명 show-menu, false일때 hide-menu
//                     <li >1</li>
//                     <li >2</li>
//                     <li >3</li>
//                     <li >4</li>
//             </ul>
//     </div>
// )

// }
