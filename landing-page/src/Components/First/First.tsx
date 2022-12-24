import React from "react";
import movilLogo from "../../assets/default-avatar.png";

const First = () => {
  return (
    <div className="bg-white">
      <nav className="relative bg-white h-12 w-screen drop-shadow-md flex row justify-between items-center">
        <ul className="bg-white flex row relative w-1/2 justify-start items-center">
          <li className="text-black text-xl font-bold ml-5">MovilTips</li>
          <img src={movilLogo} alt="MovilTipsLogo" className=" relative h-12" />
        </ul>
        <ul className="flex  row w-1/2 justify-end gap-10 mr-5">
          <li>
            <div className="w-100 rounded-md text-center leading-8">Quiénes somos?</div>
          </li>
          <li>
            <div className=" bg-lime-400 text-white p-1 w-100 rounded-md text-center">Contacto</div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default First;
