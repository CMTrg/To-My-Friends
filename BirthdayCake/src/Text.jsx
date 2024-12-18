import React from "react";
import Typed from "typed.js";

function Text({ isHidden }) {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "IT'S YOUR <i>BIRTHDAY</i> TODAY, BLOW YOUR <i>CANDLE</i>.",
        "HOLD <i>RIGHT CLICK</i> TO MOVE <i>THE CAKE</i>.",
        "PRESS THE <i>CANDLE</i> TO BLOW!!!",
        "<i>MTRG</i> WISHES YOU THE BEST!!!!!!!",
      ],
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 800,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  // Use conditional CSS styling
  return (
    <div className="App" style={{ display: isHidden ? "none" : "block" }}>
      <span ref={el} />
    </div>
  );
}

export default Text;
