import logo from "../assets/icons/Logo.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import linkedin from "../assets/icons/linkedin.svg";

import Input from "./Input";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__newsletter">
        <div className="footer__newsletter__content">
          <div className="footer__newsletter__text">
            <h2>Inscreva-se na nossa newsletter</h2>

            <p>
              Assine a nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse.
            </p>
          </div>

          <div className="footer__newsletter__form">
            <div className="footer__newsletter__inputs">
              <Input placeholder="Digite seu nome" type="text" />
              <Input placeholder="Digite seu email" type="text" />

              <button type="button">INSCREVER</button>
            </div>

            <label className="footer__terms">
              <input type="checkbox" />
              <span>Aceito os termos e condições</span>
            </label>
          </div>
        </div>
      </section>

      <section className="footer__main">
        <div className="footer__content">
          <div className="footer__brand">
            <img src={logo} alt="Econverse" className="footer__logo" />

            <p>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit.
            </p>

            <div className="footer__social">
              <a href="#" aria-label="Instagram">
                <img src={instagram} alt="instagram" />
              </a>

              <a href="#" aria-label="Facebook">
                <img src={facebook} alt="facebook" />
              </a>

              <a href="#" aria-label="LinkedIn">
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>

          <div className="footer__divider" />

          <nav className="footer__links">
            <div className="footer__column">
              <h3>Institucional</h3>

              <a href="#">Sobre Nós</a>
              <a href="#">Movimento</a>
              <a href="#">Trabalhe conosco</a>
            </div>

            <div className="footer__column">
              <h3>Ajuda</h3>

              <a href="#">Suporte</a>
              <a href="#">Fale Conosco</a>
              <a href="#">Perguntas Frequentes</a>
            </div>

            <div className="footer__column">
              <h3>Termos</h3>

              <a href="#">Termos e Condições</a>
              <a href="#">Política de Privacidade</a>
              <a href="#">Troca e Devolução</a>
            </div>
          </nav>
        </div>
      </section>

      <div className="footer__copyright">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
