import React, { forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import gsap from "gsap";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = React.useState(false);
  let modal = document.getElementById("modal-root");

  const { title, image, subtext, paragraph, mission } = props.data;

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
    FadeIn();
  };

  const close = () => {
    setTimeout(() => {
      setDisplay(false);
    }, 1000);

    FadeOut();
  };

  const FadeIn = () => {
    gsap.fromTo(modal, 1, { opacity: 0 }, { opacity: 1 });
  };

  const FadeOut = () => {
    gsap.fromTo(modal, 1, { opacity: 1 }, { opacity: 0 });
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className={"modal-wrapper"} ref={modal}>
        <div onClick={close} className={"modal-backdrop"} />
        <div className={"modal-box"}>
          <div className="img-container">
            <img src={window.location.origin + "/images/" + image} alt="" />
          </div>
          <div className="text-container">
            <div className="title">
              {title} | <span className="sub-text">{subtext}</span>
            </div>

            <div className="mission">{mission}</div>
            <div className="description">{paragraph}</div>
          </div>
          {/* <h1>{props.data.title}</h1> */}
          <div className="close" onClick={close}></div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }

  return null;
});

export default Modal;
