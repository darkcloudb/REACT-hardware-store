import React from "react";
import HardwareStoreImage from "../img/HardwareStore.jpg"

function Homepage(props) {
  return (
    <div className="homepage">
      <img src={HardwareStoreImage} alt="Hardware Store" />
    </div>
  );
}

export default Homepage;
