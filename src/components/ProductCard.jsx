// src/components/ProductCard.jsx
import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [isBought, setIsBought] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleBuy = () => {
    if (!isBought) {
      setIsBought(true);
      addToCart();
    }
  };

  if (isLoading) {
    return (
      <div className="product-card loading">
        <div className="card-image-placeholder"></div>
        <div className="card-info">
          <div className="price-placeholder"></div>
          <div className="title-placeholder"></div>
          <div className="description-placeholder"></div>
        </div>
        <div className="button-placeholder"></div>
      </div>
    );
  }

  return (
    <div className="product-card">
      <div className="card-image">
        <img src={product.image} alt={product.title} />
        <div className="price-badge">{product.price} ₽</div>
      </div>
      <div className="card-info">
        <div className="price">{product.price} ₽</div>
        <h3 className="title">{product.title}</h3>
        <p className="description">{product.description}</p>
      </div>
      <button
        className="add-to-cart-button"
        onClick={handleBuy}
        disabled={isBought}
      >
        {isBought ? "Куплено ✅" : "Купить 🛒"}
      </button>
    </div>
  );
};

export default ProductCard;