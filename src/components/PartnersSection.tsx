import PartnerCard from "./PartnerCard";

import "./PartnersSection.scss";

const PartnersSection = () => {
  return (
    <section className="partners">
      <div className="partners__container">
        <PartnerCard
          title="Parceiros"
          description="Lorem ipsum dolor sit amet, consectetur"
        />

        <PartnerCard
          title="Parceiros"
          description="Lorem ipsum dolor sit amet, consectetur"
        />
      </div>
    </section>
  );
};

export default PartnersSection;