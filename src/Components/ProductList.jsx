import React from "react";
import "../App.css";

const ProductList = ({ products }) => {
  return (
    <div className="container-sm">
      <div className="row">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className="product-card card col-lg-3 col-md-6 col-sm-6 mb-2"
            >
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-category text-muted">
                  {product.category || "No Category"}
                </p>
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid mb-3"
                />
                <p className="product-price">${product.price}</p>
                <button className="">View Details</button>
              </div>
            </div>
          ))
        ) : (
          <h4>No products available in this category.</h4>
        )}
      </div>
    </div>
  );
};

export default ProductList;
