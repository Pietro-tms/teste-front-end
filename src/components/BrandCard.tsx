import "./BrandCard.scss"

const BrandCard = ({logo}:{logo:string}) => {
  return (
    <button className="brandCard" type="button">
      <img
        className="brandCard__logo"
        src={logo}
        alt="Econverse"
      />
    </button>
  );
};

export default BrandCard;