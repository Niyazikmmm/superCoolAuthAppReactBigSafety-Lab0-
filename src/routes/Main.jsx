// src/pages/MainPage.jsx
import React, { useMemo, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Main.scss";
import HelloCard from "../components/HelloCard";
import Auth from "../components/Auth";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { Navbar, Container, Badge } from "react-bootstrap";

const MainPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { cartCount, clearCart } = useCart();

  const texts = useMemo(
    () => ["VS Code'a", "Тех, кто читает документацию", "Массивы"],
    []
  );

  const [textHello, setTextHello] = useState(texts[0]);

  const handleNext = useCallback(() => {
    setTextHello((prev) => {
      const i = texts.indexOf(prev);
      const next = texts[(i + 1) % texts.length];
      return next;
    });
  }, [texts]);

  const products = [
    {
      id: 1,
      image: "/sn1.png",
      price: "112 000",
      title: "Nike Pegasus",
      description: "Удобные кроссовки для бега и повседневной носки.",
    },
    {
      id: 2,
      image: "/sn2.jpg",
      price: "125 000",
      title: "Adidas Ultraboost",
      description: "Максимальный комфорт и энерговозврат при каждом шаге.",
    },
    {
      id: 3,
      image: "/sn3.jpg",
      price: "98 500",
      title: "Puma RS-X",
      description: "Стильные кроссовки в ретро-стиле с современной подошвой.",
    },
    {
      id: 4,
      image: "/sn4.webp",
      price: "89 900",
      title: "New Balance 574",
      description: "Классика уличной моды и повседневного комфорта.",
    },
  ];

  return (
    <>
      {/* Шапка с корзиной */}
      <Navbar bg="light" variant="light" expand="lg" className="mb-4 shadow-sm">
        <Container>
          <Navbar.Brand href="/">Кроссовки</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <button
              className="btn position-relative p-0"
              onClick={clearCart}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.8rem",
                cursor: "pointer",
              }}
              aria-label="Очистить корзину"
            >
              🛒
              {cartCount > 0 && (
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {cartCount}
                </Badge>
              )}
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main">
        <div className="main__container">
          <HelloCard text={textHello} onNext={handleNext} />
          <Auth />

          {/* Секция с товарами */}
          <div className="products-section mt-5">
            <h2 className="text-center mb-4">Каталог кроссовок</h2>
            <Container>
              <div className="row g-4 justify-content-center">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                  >
                    <div className="p-2">
                      <ProductCard product={product} />
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </div>

      <footer className="text-center py-4 mt-5 text-muted" style={{ fontSize: "0.9rem" }}>
        Сделал Рангулов Нияз 1233
      </footer>
    </>
  );
};

export default MainPage;