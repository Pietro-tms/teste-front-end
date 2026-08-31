import tecnologie from "../assets/icons/tecnologie.png";
import supermercado from "../assets/icons/supermercados 1.svg";
import whiskey from "../assets/icons/whiskey.svg";
import ferramentas from "../assets/icons/ferramentas 1.svg";
import saude from "../assets/icons/cuidados-de-saude 1.svg";
import esportes from "../assets/icons/corrida 1.svg";
import moda from "../assets/icons/moda 1.svg";

import "./NavBarCategories.scss"

import { useState } from "react";
import CategorieCard from "./CategorieCard";

const NavCategories = () => {
 
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  const categoriesData = [
    { id: 1, title: "Tecnologia", img: tecnologie },
    { id: 2, title: "Supermercado", img: supermercado },
    { id: 3, title: "Bebidas", img: whiskey },
    { id: 4, title: "Ferramentas", img: ferramentas },
    { id: 5, title: "Saúde", img: saude },
    { id: 6, title: "Esportes e Fitness", img: esportes },
    { id: 7, title: "Moda", img: moda },
  ];

  return (
    <nav className="navBar">
      <div className="navBar_container">
        {categoriesData.map((category) => (
          <CategorieCard
            key={category.id}
            title={category.title}
            img={category.img}
            isSelected={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          />
        ))}
      </div>
    </nav>
  );
};

export default NavCategories;


