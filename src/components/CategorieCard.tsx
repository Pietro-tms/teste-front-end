import "./CategorieCard.scss";

type CategorieCardProps = {
  title: string;
  img: string;
  isSelected?: boolean;
  onClick?: () => void;
};

const CategorieCard = ({
  title,
  img,
  isSelected,
  onClick,
}: CategorieCardProps) => {
  return (
    <div
      className={`categorie__card ${isSelected ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="categorie__card__icon__container">
        <img src={img} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

export default CategorieCard;
