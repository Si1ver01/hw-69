import React from "react";

const MenuItem = ({name , price , img , desc , btnHandler}) => {
  return (
    <div className="col-sm-12 border border-secondary rounded bg-light mb-3">
      <div className="row">
        <div className="col-sm-4 pl-0">
          <img
            alt="dish-name"
            className="card-img"
            src={img}
          />
        </div>
        <div className="col-sm-5 d-flex flex-column justify-content-between">
          <h3>Название : {name}</h3>
          <span>Цена : {price}kgs</span>
          <button type="button" className="btn btn-info align-self-start mb-2" onClick={() => btnHandler(name)}>
            Добавить в корзину
          </button>
        </div>
        <div className="col-sm-3 d-flex align-items-center">
          <p className="text-secondary text-center">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
