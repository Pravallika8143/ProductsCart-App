// import React from "react";
// import { useSelector } from "react-redux";

// function CartPage() {
//   const items = useSelector((state) => state.cart.items);

//   const total = items.reduce((sum, i) => sum + i.price, 0);

//   return (
//     <div className="container">
//       <h2>Your Cart</h2>

//       {items.length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         items.map((i) => (
//         <div>
//            <img src={i.image} alt="" style={{width:"200px"}}/>
//           <p key={i.id}>{i.title} — Rs.{i.price}</p>
//        </div>
//         ))
//       )}

//       <h5>Total: Rs.{total}</h5>
//     </div>
//   );
// }

// export default CartPage;

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
              <div className="card shadow-sm h-100">
                <img 
                  src={i.image}
                  alt={i.title}
                  className="card-img-top mx-auto"
                  style={{ objectFit: "cover",width:"40%" }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-semibold">{i.title}</h5>
                  <p className="card-text">Rs. {i.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <div className="mt-4 p-4 bg-light border rounded shadow-sm text-center">
          <h4 className="fw-bold">Total Amount: Rs. {total}</h4>
          <button className="btn btn-success mt-3 px-4 py-2">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
