import React from "react";

const Footer = () => {
  return (
    <>
      <div className="scroll-snap">
        <div className="footer ">
          <p className="title">Merci !</p>
          <div className="sub-text">Vous voulez me dire un mot ?</div>
          <div className="contact">
            <p>
              <span className="fa fa-envelope" /> noel.an.lyon@gmail.com
            </p>
            <p>
              <span className="fa fa-phone" />
              06 83 07 54 48
            </p>
            <p>linkedin</p>
          </div>
          <p className="created">Réalisé par Noel an.</p>
          <a href="#header">
            <div className="box"></div>
            <div className="top-btn">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
