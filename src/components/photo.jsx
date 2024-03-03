import React from "react";

import Img from "./img";

function photo() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 30,
          width: "100%",
          height: "95%",
          background: "linear-gradient(180deg, #AFAFAF 0%, #F2F2F2 100%)",
          zIndex: 2,
        }}
      ></div>
      <Img
        className="h-[600px] w-[490px] object-cover ml-7"
        src="images/salman-1.png"
        alt="myself"
        style={{ position: "relative", zIndex: 3 }}
      />
    </div>
  );
}

export default photo;
