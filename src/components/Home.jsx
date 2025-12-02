import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
  }
  return (
    <div className="home-hero-container">
      <div className="row align-items-center justify-content-center hero-row">

        <div className="col-md-6 hero-text">
          <h1 className="hero-title">Welcome to <span><b>Fashion Frenzy</b></span></h1>
          <p className="hero-subtitle">
            Your one-stop online shopping destination with trendy products,  
            fast delivery, and amazing deals every day.
          </p>

          <button className="btn btn-primary px-4 py-2 hero-btn" onClick={goToProducts}>
            Start Shopping<i class="bi bi-arrow-right-circle ms-2"></i>
          </button>
        </div>

        <div className="col-md-5 text-center">
          <img
            src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
            alt="Shopping Banner"
            className="hero-img"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;
