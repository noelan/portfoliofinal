import React, { useRef, useEffect } from "react";
import { Parallax } from "react-parallax";
import gsap, { Power3 } from "gsap";

const Header = () => {
  let section = useRef(null);

  const Fade = (element) => {
    gsap.fromTo(
      element.current,
      1.5,
      { opacity: 0 },
      {
        opacity: 1,
        ease: Power3.easeIn,
      }
    );
  };

  useEffect(() => {
    Fade(section);
  }, []);

  return (
    <>
      <div className="scroll-snap">
        <div className="header" id="header">
          <div className="section" ref={section}>
            <Parallax
              bgImage="https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              strength={500}
              className="parallax"
            >
              <div style={{ height: "100vh" }}>
                <div className="text-wrapper">
                  <div className="text">
                    Bonjour, je suis <span>Noel AN.</span>
                    <br />
                    Je suis développeur web junior.
                  </div>

                  <a href="#about">
                    <div className="box">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </a>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
