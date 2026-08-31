import { useEffect, useState } from "react";

import type { Product } from "../types/TypeProduct";

import "./ProductModal.scss";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <main className="productModal" onClick={onClose}>
      <div
        className="productModal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="productModal__close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ×
        </button>

        <div className="productModal__image">
          <img src={product.photo} alt={product.descriptionShort} />
        </div>

        <div className="productModal__info">
          <h2>{product.descriptionShort}</h2>

          <strong className="productModal__price">
            R${" "}
            {Number(product.price).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>

          <p className="productModal__description">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text.
          </p>

          <a href="#" className="productModal__details">
            Veja mais detalhes do produto &gt;
          </a>

          <div className="productModal__actions">
            <div className="productModal__quantity">
              <button
                className="product__modal__quantity__sub"
                type="button"
                onClick={() => {
                  count === 0 ? setCount(count) : setCount(count - 1);
                }}
              >
                −
              </button>
              <span>{count}</span>
              <button
                className="product__modal__quantity__sum"
                type="button"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>

            <button className="productModal__buy" type="button">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductModal;
