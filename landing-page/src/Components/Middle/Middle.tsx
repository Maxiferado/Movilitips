import React from "react";
import moviltips from "../../assets/default-avatar.png";


const Middle = (props: any) => {
  return (
    <div className="text-center mt-5">
      <h3 className="font-bold text-3xl">Quienes somos?</h3>
      <div className="flex justify-center items-center">
        <div className="flex w-3/4  justify-center items-center">
          <img className=" relative h-1/2 w-1/2" src={moviltips} alt="" />
          <p className="h-auto text-lg">Con <b>Movilitips</b> nunca mas estaras <b>preocupado por el pico y placa,</b> Te informaremos un dia antes y en la mañana siguiente dia y tendras total tranquilidad</p>
        </div>
      </div>
    </div>
  );
};
export default Middle;
