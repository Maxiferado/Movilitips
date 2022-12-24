import React from "react";
import Icon from "@mdi/react";
import {
  mdiNumeric1Circle,
  mdiNumeric2Circle,
  mdiNumeric3Circle,
  mdiAndroid,
} from "@mdi/js";

const Step = () => {
  return (
    <div className="text-center w-screen mt-0">
      <h3 className="font-bold text-3xl">Sigue los siguientes pasos</h3>
      <div className="flex justify-center items-center m-20 gap-10">
        <div className="flex row items-center border-2 rounded-lg bg-neutral-300">
          <Icon
            path={mdiNumeric1Circle}
            title="User Profile"
            size={5}
            horizontal
            vertical
            rotate={180}
            color="red"
          />

          <p className="h-auto text-lg">
            <b>Primero descarganos en la Play store</b>
            <a className="flex justify-center" href="www.youtube.com">
              <Icon
                path={mdiAndroid}
                title="User Profile"
                size={2}
                horizontal
                vertical
                rotate={180}
                color="red"
              />
            </a>
          </p>
        </div>
        <div className="flex row items-center border-2 rounded-lg bg-neutral-300">
          <Icon
            path={mdiNumeric2Circle}
            title="User Profile"
            size={5}
            horizontal
            vertical
            rotate={180}
            color="#EDBC07"
          />

          <p className="h-auto text-lg">
            <b> Registra tu vehiculo en nuestra app </b>
          </p>
        </div>
        <div className="flex row items-center border-2 rounded-lg bg-neutral-300">
          <Icon
            path={mdiNumeric3Circle}
            title="User Profile"
            size={5}
            horizontal
            vertical
            rotate={180}
            color="green"
          />

          <p className="h-auto text-lg">
            <b> No vuelvas a preocuparte por el pico y placa</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Step;
