import "./Banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__container_text">
          <h1>Venha conhecer nossas promoções</h1>
          <h2>
            <strong>50% off</strong> nos primeiros produtos
          </h2>
        </div>
        <button>Ver produto</button>
      </div>
    </section>
  );
};

export default Banner;
