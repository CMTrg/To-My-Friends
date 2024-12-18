import React, { useState } from "react";
import Text from "./Text";
import Vybtn from "./Vybtn";
import Images from "./images";
import Spline from "./Spline";

function ParentComponent() {
  const [isHidden, setIsHidden] = useState(false);

  const handleHideScreen = () => {
    if(isHidden == true){
        setIsHidden(false)
    } else{
        setIsHidden(true);
    }; // Set `isHidden` to true
  };

  return (
    <div>
      <Text isHidden={isHidden} />
      <Vybtn onHide={handleHideScreen} />
      {isHidden &&  <Images animationClass="move-left"/>}
      {isHidden && <Images animationClass="move-right"/>}
      {isHidden && <Images animationClass="move-left"/>}
    </div>
  );
}

export default ParentComponent;
