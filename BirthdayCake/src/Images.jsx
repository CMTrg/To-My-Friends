import React from "react";

function Images({ animationClass }) {
  return (
    <div className={`images-container ${animationClass}`}>
      <p>
        <img src="../src/assets/BIRTHDAY/Vy/vy1.JPG" alt="" />
        <img src="../src/assets/BIRTHDAY/Vy/vy2.JPG" alt="" />
        <img src="../src/assets/BIRTHDAY/Vy/vy3.jpg" alt="" />
        <img src="../src/assets/BIRTHDAY/Vy/vy4.jpg" alt="" />
        <img src="../src/assets/BIRTHDAY/Vy/vy5.jpg" alt="" />
       
      </p>
    </div>
  );
}

export default Images;
