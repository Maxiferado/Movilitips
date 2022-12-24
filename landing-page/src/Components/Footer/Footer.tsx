import React from "react";
import moviltips from "../../assets/default-avatar.png";


const Footer = (props: any) => {
  return (       
      <div className="flex justify-center items-center w-screen h-auto bg-slate-300">
        <div className="flex w-3/4  justify-center items-center">
          <img className=" relative h-20 w-20" src={moviltips} alt="" />
          <p className="h-auto text-lg">Danse group 2022. Todos los derechos reservados</p>
        </div>
      </div>   
  );
};
export default Footer;
