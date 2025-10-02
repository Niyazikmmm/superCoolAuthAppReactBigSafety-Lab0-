import React from "react";

const HelloCard = ({ text, onNext }) => {
  return (
    <div className="hello-card">
      <h4>Чего вы больше боитесь в программировании?</h4>
      <h6 className="hello-card__title">{text}</h6>
      <button className="btn-outline" onClick={onNext}>
        Сменить текст
      </button>
    </div>
  );
};

export default HelloCard;
