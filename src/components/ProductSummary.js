import React from "react";
import { Link } from "react-router-dom";

function ProductSummary(props) {
  return (
    <div className="productSummary">
      <Link to={"/products/detail/" + props.product.id}>
        {props.product.name} -{" "}
        {props.product.quantity == 0
          ? "Out of Stock"
          : `Price: $${props.product.price}`}
        <span className="productArrow">&gt;</span>
      </Link>
    </div>
  );
}

export default ProductSummary;
