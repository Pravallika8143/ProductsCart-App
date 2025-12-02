import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">

        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://i.pinimg.com/280x280_RS/68/a8/8a/68a88a262ecdfe478dc2294f01251873.jpg"
            alt="ShoppEase Logo"
            style={{ width: "55px", height: "55px", borderRadius: "12px" }}
          />
          <span className="ms-2 fw-bold">ShoppEase</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-3">

            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/products">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white fw-bold position-relative" to="/cart">
                <i className="bi bi-cart3 me-1"></i>
                Cart
                {cartCount > 0 && (
                  <span
                    className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
