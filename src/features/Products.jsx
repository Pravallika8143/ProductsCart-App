import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductsPage() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch({ type: "FETCH_START" });

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "FETCH_SUCCESS", payload: data })
      )
      .catch((err) =>
        dispatch({ type: "FETCH_ERROR", payload: err.message })
      );
  }, []);

  const addToCart = (item) => {
    dispatch({ type: "ADD_CART", payload: item });
    alert("Item added to cart!");
  };

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="container my-5">

      <h2 className="fw-bold text-center mb-5" style={{ letterSpacing: ".5px" }}>
        🛍️ Explore Popular Products
      </h2>

      <div className="row g-4">
        {products.map((p) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={p.id}>
            
            <div
              className="card h-100 border-0 shadow-sm product-card"
              style={{ borderRadius: "15px", transition: "0.3s ease" }}
            >
              
              <div className="d-flex justify-content-center p-3">
                <img
                  src={p.image}
                  alt={p.title}
                  className="img-fluid"
                  style={{
                    height: "220px",
                    objectFit: "contain",
                    transition: "0.3s ease"
                  }}
                />
              </div>

              <div className="card-body text-center">
                <h5 className="fw-bold" style={{ minHeight: "40px" }}>
                  {p.title.slice(0, 40)}...
                </h5>

                <h5 className="text-success fw-bold mt-2">
                  ₹{p.price.toFixed(2)}
                </h5>

                <div className="d-flex justify-content-center align-items-center mb-3">
                  <span className="text-dark fw-bold">⭐ {p.rating.rate}</span>
                  <span className="text-muted ms-2">({p.rating.count})</span>
                </div>
                <button
                  className="btn btn-dark w-100 fw-semibold"
                  style={{ borderRadius: "10px" }}
                  onClick={() => addToCart(p)}
                >
                  Add to Cart
                </button>
              </div>

            </div>

          </div>
        ))}
      </div>

      <style>
        {`
          .product-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15) !important;
          }
          .product-card img:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}

export default ProductsPage;

