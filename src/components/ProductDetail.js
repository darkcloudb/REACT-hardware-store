import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    let object =
      props.productList.find(
        (product) => product.id == props.match.params.productId
      ) || {};
    setProduct(object);
  }, []);

  // When this component loads, get the Product ID from the url parameter.
  // Then find the matching product from the productList prop, and assign it to product

  return (
    <div>
      <h3>{product.name}</h3>
      <div>
        Price: ${product.price}
        {/* {product.quantity == 0 ? "Out of Stock" : `Price: $${product.price}`} */}
      </div>
      <p>{product.description}</p>
      <Link to="/products">Go Back</Link>
    </div>
  );
}

export default ProductDetail;
