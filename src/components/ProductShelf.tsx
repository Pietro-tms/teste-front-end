import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

import { getProducts } from "../services/getProducts";

import type { Product } from "../types/TypeProduct";

import "./ProductShelf.scss";

const PRODUCTS_PER_PAGE = 4;
const MOBILE_BREAKPOINT = 650;

const ProductShelf = ({ categories }: { categories: string[] }) => {
  const [selectedCategory, setSelectedCategory] = useState("CELULAR");
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBILE_BREAKPOINT,
  );

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextProducts = () => {
    setCurrentIndex((current) => {
      if (isMobile) {
        if (current >= products.length - 1) {
          return 0;
        }

        return current + 1;
      }

      const nextIndex = current + 1;

      if (nextIndex + PRODUCTS_PER_PAGE > products.length) {
        return 0;
      }

      return nextIndex;
    });
  };

  const previousProducts = () => {
    setCurrentIndex((current) => {
      if (isMobile) {
        if (current === 0) {
          return Math.max(products.length - 1, 0);
        }

        return current - 1;
      }

      if (current === 0) {
        return Math.max(products.length - PRODUCTS_PER_PAGE, 0);
      }

      return current - 1;
    });
  };

  const visibleProducts = isMobile
    ? products
    : products;

  return (
    <>
      <section className="productShelf">
        <div className="productShelf__title">
          <span />
          <h2>Produtos relacionados</h2>
          <span />
        </div>

        {categories ? (
          <div className="productShelf__categories">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  selectedCategory === category
                    ? "productShelf__category productShelf__category--active"
                    : "productShelf__category"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        ) : (
          <p className="productShelf__seeAll">Ver todos</p>
        )}

        <div className="productShelf__carousel">
          <button
            className="productShelf__arrow productShelf__arrow--left"
            aria-label="Produtos anteriores"
            onClick={previousProducts}
          >
            ‹
          </button>

          <div
            className="productShelf__products"
            onTouchStart={(event) => {
              if (!isMobile) return;

              const touch = event.touches[0];

              event.currentTarget.dataset.touchStartX = String(
                touch.clientX,
              );
            }}
            onTouchEnd={(event) => {
              if (!isMobile) return;

              const startX = Number(
                event.currentTarget.dataset.touchStartX,
              );

              const endX = event.changedTouches[0].clientX;

              const distance = startX - endX;

              if (Math.abs(distance) < 50) return;

              if (distance > 0) {
                nextProducts();
              } else {
                previousProducts();
              }
            }}
          >
            <div
              className={`productShelf__track ${
                isMobile
                  ? "productShelf__track--mobile"
                  : "productShelf__track--desktop"
              }`}
              style={{
                transform: isMobile
                  ? `translateX(-${currentIndex * 100}%)`
                  : `translateX(-${
                      currentIndex *
                      (100 / PRODUCTS_PER_PAGE)
                    }%)`,
              }}
            >
              {visibleProducts.map((product, index) => (
                <div
                  key={`${product.photo}-${index}`}
                  className="productShelf__product"
                  onClick={() => setSelectedProduct(product)}
                >
                  <ProductCard
                    image={product.photo}
                    description={product.descriptionShort}
                    price={product.price}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            className="productShelf__arrow productShelf__arrow--right"
            aria-label="Próximos produtos"
            onClick={nextProducts}
          >
            ›
          </button>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default ProductShelf;