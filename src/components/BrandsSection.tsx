import BrandCard from "./BrandCard";

import logo from "../assets/icons/Logo.svg";

import "./BrandsSection.scss";

const BrandsSection = () => {
const logos = [logo, logo, logo, logo, logo]

  return (
    <section className="brands">
      <h2 className="brands__title">Navegue por marcas</h2>

      <div className="brands__list">
       {logos.map((logo) => < BrandCard logo={logo}/>)}
      </div>
    </section>
  );
};

export default BrandsSection;