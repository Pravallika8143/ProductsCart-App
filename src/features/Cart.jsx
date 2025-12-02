import React from "react";
import { useSelector } from "react-redux";

function CartPage() {
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4 text-center">🛒 Your Cart</h2>

      {items.length === 0 ? (
        <div className="alert alert-info text-center p-4 fs-5">
          No items in your cart yet!
        </div>
      ) : (
        <div className="row g-4">
          {items.map((i) => (
            <div className="col-md-4" key={i.id}>
              <div className="card shadow-sm h-100 p-3">

                <img
                  src={i.image}
                  alt={i.title}
                  className="card-img-top mx-auto"
                  style={{ height: "180px", objectFit: "contain" }}
                />

                <div className="card-body text-center">
                  <h5 className="fw-semibold">{i.title.slice(0, 40)}...</h5>

                  <h6 className="text-success fw-bold mt-2">
                    ₹ {i.price}
                  </h6>

                  {i.rating && (
                    <div className="d-flex justify-content-center align-items-center mt-2">
                      <span className="text-dark fw-bold">⭐ {i.rating.rate}</span>
                      <span className="text-muted ms-2">({i.rating.count})</span>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-4 p-4 bg-light border rounded shadow text-center">
          <h4 className="fw-bold mb-3">Total Amount: ₹ {total.toFixed(2)}</h4>
          <button className="btn btn-success px-5 py-2 fw-bold">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;

