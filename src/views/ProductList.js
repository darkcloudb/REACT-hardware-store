import React from "react";
import ProductSummary from "../components/ProductSummary";
import { Route, Switch, Link } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { useState } from "react";

function ProductList(props) {
  const { productList } = props;
  const [filter, setFilter] = useState("");
  return (
    <div>
      <Switch>
        <Route
          path="/products/detail/:productId"
          render={(props) => (
            <ProductDetail {...props} productList={productList} />
          )}
        ></Route>
        <div className="productList">
          <h2>Our Products</h2>
          <button onClick={() => setFilter("")} type="button">
            Clear
          </button>
          <button onClick={() => setFilter("tool")} type="button">
            Tools
          </button>
          <button onClick={() => setFilter("garden")} type="button">
            Garden
          </button>
          <button onClick={() => setFilter("hardware")} type="button">
            Hardware
          </button>
          <Route path="/products">
            <ul>
              {props.productList
                .filter((product) => {
                  if (filter) {
                    return product.department === filter;
                  }
                  return true;
                })
                .map((product) => {
                  return (
                    <Link
                      key={product.id}
                      to={`/products/detail/${product.id}`}
                    >
                      <ProductSummary key={product.id} product={product} />
                    </Link>
                  );
                })}
            </ul>
          </Route>
        </div>
      </Switch>
    </div>
  );
}

export default ProductList;
