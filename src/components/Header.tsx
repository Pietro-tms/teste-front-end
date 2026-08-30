import "./Header.scss";

import logo from "../assets/icons/Logo.svg";
import shieldCheck from "../assets/icons/ShieldCheck.svg";
import group from "../assets/icons/Group.svg";
import creditCard from "../assets/icons/CreditCard.svg";
import magnifyingGlass from "../assets/icons/MagnifyingGlass.svg";
import heart from "../assets/icons/Heart.svg";
import userCircle from "../assets/icons/UserCircle.svg";
import shoppingCart from "../assets/icons/ShoppingCart.svg";
import crownSimple from "../assets/icons/CrownSimple.svg";


function Header() {
  return (
    <header className="header">
      <section className="header__benefits">
        <div className="header__container header__benefits-container">
          <div className="benefit">
            <img src={shieldCheck} alt="" />
            <span>
              Compra <strong>100% segura</strong>
            </span>
          </div>

          <div className="benefit">
            <img src={group} alt="" />
            <span>
              <strong>Frete grátis</strong> acima de R$ 200
            </span>
          </div>

          <div className="benefit">
            <img src={creditCard} alt="" />
            <span>
              <strong>Parcele</strong> suas compras
            </span>
          </div>
        </div>
      </section>

      <div className="header__main">
        <div className="header__container header__main-container">
          <a
            href="/"
            className="header__logo"
            aria-label="Econverse - Página inicial"
          >
            <img src={logo} alt="Econverse" />
          </a>

          <form className="header__search">
            <input
              type="search"
              placeholder="O que você está buscando?"
              aria-label="Buscar produtos"
            />

            <button type="submit" aria-label="Pesquisar">
              <img src={magnifyingGlass} alt="" />
            </button>
          </form>

          <nav className="header__actions" aria-label="Ações da conta">
            <button type="button" aria-label="Pedidos">
              <img src={group} alt="" />
            </button>

            <button type="button" aria-label="Favoritos">
              <img src={heart} alt="" />
            </button>

            <button type="button" aria-label="Minha conta">
              <img src={userCircle} alt="" />
            </button>

            <button type="button" aria-label="Carrinho">
              <img src={shoppingCart} alt="" />
            </button>
          </nav>
        </div>
      </div>

      <nav className="header__categories" aria-label="Categorias de produtos">
        <div className="header__container header__categories-container">
          <a href="#">Todas categorias</a>
          <a href="#">Supermercado</a>
          <a href="#">Livros</a>
          <a href="#">Moda</a>
          <a href="#">Lançamentos</a>

          <a href="#" className="header__category--active">
            Ofertas do dia
          </a>

          <a href="#" className="header__subscription">
            <img src={crownSimple} alt="" />
            <span>Assinatura</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;