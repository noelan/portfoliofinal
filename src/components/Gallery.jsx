import React, { useState } from "react";
import Modal from "./Modal";
import modalContents from "../utils/modal-contents";

const Gallery = () => {
  // Data du contenu de la modal.
  const modalRef = React.useRef();
  const [data, setData] = useState("");

  /* THIS IS INCREDIBLE ILL NEVER BE ABLE TO UNDERSTAND AGAIN
   ** Check la value de la box ( value mis dans l'ordre d'apparition)
   ** Set les data en fonction de la value (si 3 prendre 3eme objet du tableau modalContents)
   */
  const openModal = (event) => {
    let value = event.currentTarget.getAttribute("value");
    let index = value - 1;
    setData(Object.values(modalContents)[index]);
    modalRef.current.openModal(data);
  };

  return (
    <>
      <div className="gallery">
        {/* Card  */}
        <div className="box">
          <div className="card"></div>
          <div className="text">
            <p>Wiplay</p>
            <p className="sub-text">Javascript/Front-End/Drupal</p>
          </div>
          <div className="toggle-modal" onClick={openModal} value="1">
            En savoir plus
          </div>
        </div>

        {/* Card  */}
        <div className="box">
          <div className="card"></div>
          <div className="text">
            <p>Tutoriels book</p>
            <p className="sub-text">React/Api Platform/Symfony</p>
          </div>
          <div className="toggle-modal" onClick={openModal} value="2">
            En savoir plus
          </div>
        </div>

        {/* Card  */}
        <div className="box">
          <div className="card"></div>
          <div className="text">
            <p>Serenity Shop</p>
            <p className="sub-text">React/Api Platform/Symfony</p>
          </div>
          <div className="toggle-modal" onClick={openModal} value="3">
            En savoir plus
          </div>
        </div>

        {/* Card  */}
        <div className="box">
          <div className="card"></div>
          <div className="text">
            <p>Sumi</p>
            <p className="sub-text">React</p>
          </div>
          <div className="toggle-modal" onClick={openModal} value="4">
            En savoir plus
          </div>
        </div>

        {/* Card  */}
        <div className="box">
          <div className="card"></div>
          <div className="text">
            <p>Senzu</p>
            <p className="sub-text">Android Studio/Java</p>
          </div>
          <div className="toggle-modal" onClick={openModal} value="5">
            En savoir plus
          </div>
        </div>

        {/* Card  */}
        <div className="box">
          <div className="card"></div>
          <div className="text">
            <p>Event team</p>
            <p className="sub-text">PHP/Srum/Git/Javscript</p>
          </div>
          <div className="toggle-modal" onClick={openModal} value="6">
            En savoir plus
          </div>
        </div>

        {/* Card  */}
        <div className="box">
          <div className="card"></div>
          <div className="text">
            <p>Site E-commerce</p>
            <p className="sub-text">React/Api Platform/Symfony</p>
          </div>
          <div className="toggle-modal" onClick={openModal} value="7">
            En savoir plus
          </div>
        </div>
      </div>
      <Modal ref={modalRef} data={data}></Modal>
    </>
  );
};

export default Gallery;
