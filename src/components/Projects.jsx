import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { removeTransition, isVisible } from "../utils/helpers";
import Gallery from "./Gallery";

const Projects = () => {
  let title = useRef(null);
  let underline = useRef(null);
  let titleContainer = useRef(null);

  const SlideTitle = () => {
    gsap.to(title.current, 1.5, { x: "0%" });
    gsap.to(underline.current, 1.5, { x: "0%" });
    removeTransition(title.current);
    removeTransition(underline.current);
  };

  const handleScroll = () => {
    if (isVisible(titleContainer.current)) {
      SlideTitle();
    }
  };

  useEffect(() => {
    if (isVisible(titleContainer.current)) {
      SlideTitle();
    }

    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="scroll-snap">
      <div className="section">
        <div className="projects">
          <div className="title-container" ref={titleContainer}>
            <div className="title-top" ref={title}>
              Projects
            </div>
            <div className="underline" ref={underline}>
              salut salut salut salut
            </div>
          </div>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Projects;
