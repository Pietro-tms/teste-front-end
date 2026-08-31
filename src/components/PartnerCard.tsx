import "./PartnerCard.scss"

type partnerCardProps = {
  title: string;
  description: string;
};

const PartnerCard = ({ title, description }: partnerCardProps) => {
  return (
    <div className="partnerCard">
      <div className="partnerCard__content">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <button>CONFIRA</button>
      </div>
    </div>
  );
};

export default PartnerCard;
