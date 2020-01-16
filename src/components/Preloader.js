import React from "react";
import Loader from "react-loader-spinner";

const Preloader = () => {
  return (
    <div className="preloader">
      <Loader
        type="Puff"
        color="#ff4444"
        height={120}
        width={120}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Preloader;
