import React, { useState } from "react";
import fishy from "../../src/assets/fishy.png";
import turt from "../../src/assets/turtle.png";
import fatfish from "../../src/assets/big-fat-fish.png";
import coral from "../../src/assets/coral.png";
import coral2 from "../../src/assets/coral2.png";
import coral3 from "../../src/assets/coral3.png";
import coral4 from "../../src/assets/coral4.png";
import coral5 from "../../src/assets/coral5.png";
import coral6 from "../../src/assets/coral6.png";
import coral7 from "../../src/assets/coral7.png";
import weeds from "../../src/assets/weeds.png";

export default function Index() {
  const [fish, setFish] = useState(null);
  const [turtle, setTurtle] = useState(null);
  const [fish2, setFish2] = useState(null);

  const screenWidth = window.innerWidth - 200;
  const screenHeight = window.innerHeight - 200;

  const handleHover = () => {
    setFish({
      left: Math.floor(Math.random() * (screenWidth - 0) + 0),
      top: Math.floor(Math.random() * (screenHeight - 0) + 0),
    });
  };

  const handleHoverTurtle = () => {
    setTurtle({
      left: Math.floor(Math.random() * (screenWidth - 0) + 0),
      top: Math.floor(Math.random() * (screenHeight - 0) + 0),
    });
  };

  const handleHoverFish = () => {
    setFish2({
      left: Math.floor(Math.random() * (screenWidth - 0) + 0),
      top: Math.floor(Math.random() * (screenHeight - 0) + 0),
    });
  };

  return (
    <div className="index">
      <img src={coral} className="coral" />
      <div className="index-layer"></div>
      <img src={coral2} className="coral2" />
      <div className="index-layer-2"></div>
      <img src={coral3} className="coral3" />
      <img src={coral4} className="coral4" />
      <img src={coral5} className="coral5" />
      <img src={coral6} className="coral6" />
      <img src={coral7} className="coral7" />
      <img src={weeds} className="weeds" />
      <div className="index-layer-3"></div>
      <div className="index-layer-4"></div>
      <div className="index-layer-5"></div>
      <img
        src={fishy}
        className="fishy"
        onMouseOver={handleHover}
        style={fish}
      />
      <img
        src={turt}
        className="turtle"
        onMouseOver={handleHoverTurtle}
        style={turtle}
      />
      <img
        src={fatfish}
        className="fatfish"
        onMouseOver={handleHoverFish}
        style={fish2}
      />
    </div>
  );
}
