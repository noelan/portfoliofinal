import React, { useRef, useEffect } from "react";
import MobileSvg from "../svg-components/mobile-svg";
import SpeedSvg from "../svg-components/speed-svg";
import IdeaSvg from "../svg-components/idea-svg";
import AnimateSvg from "../svg-components/animate-svg";
import MaleSvg from "../svg-components/male-svg";
import SkillBar from "./Skillbar";
import gsap from "gsap";
import { isVisible, removeTransition } from "../utils/helpers";

const About = () => {
  let colRight = useRef(null);
  let colLeft = useRef(null);
  let aboutMe = useRef(null);
  let logo1 = useRef(null);
  let logo2 = useRef(null);
  let logo3 = useRef(null);
  let logo4 = useRef(null);
  let upperPart = useRef(null);
  let title = useRef(null);
  let underline = useRef(null);
  let titleContainer = useRef(null);

  /* Animation de l'arbre de compétence et du about me */
  const Slide = () => {
    gsap.to(colRight.current, 1, { x: "0%" });
    gsap.to(colLeft.current, 1, { x: "0%" });
    removeTransition(aboutMe.current);
  };

  /* Animation de l'arbre de compétence et du about me */
  const SlideTitle = () => {
    gsap.to(title.current, 1.5, { x: "0%" });
    gsap.to(underline.current, 1.5, { x: "0%" });
    removeTransition(title.current);
    removeTransition(underline.current);
  };

  /* Animation des svg undraw rotate*/
  const Flip = () => {
    let logos = [logo1.current, logo2.current, logo3.current, logo4.current];
    let delayTime = 0;
    logos.forEach((logo) => {
      gsap.to(logo, 1.5, { transform: "rotateY(180deg)", delay: delayTime });
      delayTime += 0.2;
      removeTransition(logo);
    });
  };

  /* Animation fade in sur la partie "upper" de la section */
  const Fade = () => {
    gsap.to(upperPart.current, 1.5, { opacity: 1 });
    removeTransition(upperPart.current);
  };

  /* Scroll listener pour lancer l'animation une fois que l'élement est visible */
  const handleScroll = () => {
    if (isVisible(aboutMe.current)) {
      Slide();
    }
    if (isVisible(logo1.current)) {
      Flip();
    }
    if (isVisible(upperPart.current)) {
      Fade();
    }
    if (isVisible(titleContainer.current)) {
      SlideTitle();
    }
  };

  /* Ajout du scroll listener et lance les animations si ils sont déja visible */
  useEffect(() => {
    if (isVisible(aboutMe.current)) {
      Slide();
    }
    if (isVisible(logo1.current)) {
      Flip();
    }
    if (isVisible(upperPart.current)) {
      Fade();
    }
    if (isVisible(titleContainer.current)) {
      SlideTitle();
    }
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className="scroll-snap">
        <div className="about " id="about">
          <div className="title-container" ref={titleContainer}>
            <div className="title-top" ref={title}>
              À propos
            </div>
            <div className="underline" ref={underline}>
              salut salut salut salut
            </div>
          </div>

          {/* Svg */}

          <div className="flex" ref={upperPart}>
            <div className="col">
              <div className="logo" ref={logo1}>
                <MobileSvg />
              </div>
              <div className="title">Responsive</div>
              <p className="sub-text">
                Mes créations sur tous type de support, petit ou grand.
              </p>
            </div>
            <div className="col">
              <div className="logo" ref={logo2}>
                <SpeedSvg />
              </div>
              <div className="title">Rapide</div>
              <p className="sub-text">
                Temps de chargement cours et rapidité d'éxécution.
              </p>
            </div>
            <div className="col">
              <div className="logo" ref={logo3}>
                <IdeaSvg />
              </div>
              <div className="title">Intuitif</div>
              <p className="sub-text">
                Interface simple d'utilisation et intuitif.
              </p>
            </div>
            <div className="col">
              <div className="logo" ref={logo4}>
                <AnimateSvg />
              </div>
              <div className="title">Vivant</div>
              <p className="sub-text">
                J'aime rendre les sites attractifs à travers de simple effet.
              </p>
            </div>
          </div>

          {/* Who is this guy */}

          <div className="aboutMe" ref={aboutMe}>
            <div className="col-left" ref={colLeft}>
              <div className="svg-container">
                <MaleSvg />
              </div>
              <div className="title">À propos</div>

              <div className="sub-text">
                Bonjour je suis Noël an je suis développeur web junior. J'ai
                effectué une formation de développeur web à la Wild Code School
                et j'ai pu effectuer quelques stages, je suis à l'écoute
                d'opportunité.
              </div>
            </div>
            <div className="col-right" ref={colRight}>
              <SkillBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
