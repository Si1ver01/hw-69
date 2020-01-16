import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div className="ErrorPage">
      <h1>Что то пошло не так , попробуйте еще раз</h1>
      <h2>Сообщение : {error}</h2>
    </div>
  );
};

export default ErrorPage;
