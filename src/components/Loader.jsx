import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  let loader = useRef(null);

  const FadeOut = () => {
    gsap.fromTo(
      loader.current,
      1.5,
      { opacity: 1 },
      { opacity: 0, delay: 1.5 }
    );
  };
  useEffect(() => {
    FadeOut();
  }, []);
  return (
    <>
      <div className="loader" ref={loader}>
        <div className="center">
          <div className="sk-fold">
            <div className="sk-fold-cube"></div>
            <div className="sk-fold-cube"></div>
            <div className="sk-fold-cube"></div>
            <div className="sk-fold-cube"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
