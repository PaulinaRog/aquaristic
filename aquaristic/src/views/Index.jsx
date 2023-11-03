import React, { useState } from "react";

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
      <img src="../src/assets/coral.png" className="coral" />
      <div className="index-layer"></div>
      <img src="../src/assets/coral2.png" className="coral2" />
      <div className="index-layer-2"></div>
      <img src="../src/assets/coral3.png" className="coral3" />
      <img src="../src/assets/coral4.png" className="coral4" />
      <img src="../src/assets/coral5.png" className="coral5" />
      <img src="../src/assets/coral6.png" className="coral6" />
      <img src="../src/assets/coral7.png" className="coral7" />
      <img src="../src/assets/weeds.png" className="weeds" />
      <div className="index-layer-3"></div>
      <div className="index-layer-4"></div>
      <div className="index-layer-5"></div>
      <img
        src="../src/assets/fishy.png"
        className="fishy"
        onMouseOver={handleHover}
        style={fish}
      />
      <img
        src="../src/assets/turtle.png"
        className="turtle"
        onMouseOver={handleHoverTurtle}
        style={turtle}
      />
      <img
        src="../src/assets/big-fat-fish.png"
        className="fatfish"
        onMouseOver={handleHoverFish}
        style={fish2}
      />
    </div>
  );
}
