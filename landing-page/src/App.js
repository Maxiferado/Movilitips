import React from "react";
import First from "./Components/First/First.tsx"
import Swiperxd from "./Components/Swiper/Swiper.tsx";
import Middle from "./Components/Middle/Middle.tsx"
import Step from "./Components/Main/Step.tsx";
import Footer from "./Components/Footer/Footer.tsx";



function App() {
  return (
    <div className="App">
      <First/>    
      <Swiperxd className="absolute"/>
      <Middle/>
      <Step/>
      <Footer/>
     
    </div>
  );
}

export default App;
