import React from "react";
import ep from '../../../assets/img/png/ep.png'
import {AiOutlineMenuUnfold, AiOutlinePoweroff} from 'react-icons/ai'
import "./MenuTop.scss";

function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left__logo" src={ep}  alt="rolando" />
        <span>EJERCITO</span>
        <span
        onClick={()=> console.log("on click")}
        > 
        <AiOutlineMenuUnfold/>
        </span>
      </div>
      <div className="menu-top__right">
        <button
        onClick={()=> console.log("Cerrar Sesion")}
        > 
        <AiOutlinePoweroff/>
        </button>
      </div>
    </div>
  );
}

export default MenuTop;
