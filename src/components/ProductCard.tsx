import "./ProductCard.scss";

type ProductCardProps = {
  image: string;
  description: string;
  price: number;
};

const ProductCard = ({
  image,
  description,
  price,
}: ProductCardProps) => {
  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const formattedOldPrice = (price + 2000).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const installment = price / 2;

  const formattedInstallment = installment.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <article className="productCard">
      <div className="productCard__image">
        <img src={image} alt={description} />
      </div>

      <p className="productCard__description">
        {description}
      </p>

      <p className="productCard__oldPrice">
        {formattedOldPrice}
      </p>

      <strong className="productCard__price">
        {formattedPrice}
      </strong>

      <span className="productCard__installments">
        ou 2x de {formattedInstallment} sem juros
      </span>

      <span className="productCard__shipping">
        Frete grátis
      </span>

      <button className="productCard__button">
        COMPRAR
      </button>
    </article>
  );
};

export default ProductCard;