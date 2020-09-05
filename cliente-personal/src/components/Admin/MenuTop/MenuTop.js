import React from "react";
import { Link } from "react-router-dom";
import ep from "../../../assets/img/png/ep.png";
import {
  AiOutlineMenuUnfold,
  AiOutlinePoweroff,
  AiOutlineMenuFold,
} from "react-icons/ai";
import "./MenuTop.scss";

function MenuTop({ setMenuCollapsed, menuCollapsed }) {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Link to="/admin">
          <img className="menu-top__left__logo" src={ep} alt="rolando" />
          <span>EJERCITO</span>
        </Link>
        <span onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed === false ? (
            <AiOutlineMenuUnfold />
          ) : (
            <AiOutlineMenuFold />
          )}
        </span>
      </div>
      <div className="menu-top__right">
        <button onClick={() => console.log("Cerrar Sesion")}>
          <AiOutlinePoweroff />
        </button>
      </div>
    </div>
  );
}

export default MenuTop;
