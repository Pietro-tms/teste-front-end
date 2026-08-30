import CategorieCard from "./CategorieCard";
import tecnologie from "../assets/icons/tecnologie.svg"

const NavCategories = () => {
  return <nav className="navBar">
    <div className="navBar_container">
        <CategorieCard title="tecnologia" img={tecnologie}/>
    </div>
  </nav>;
};

export default NavCategories;
