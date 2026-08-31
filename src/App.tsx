import Header from "./components/Header";
import Banner from "./components/Banner";
import NavCategories from "./components/NavCategories";
import ProductShelf from "./components/ProductShelf";
import PartnersSection from "./components/PartnersSection";

import "./App.scss";
import BrandsSection from "./components/BrandsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="main-app">
      <Header />
      <Banner />
      <NavCategories />
      <ProductShelf
        categories={[
          "CELULAR",
          "ACESSÓRIOS",
          "TABLETS",
          "NOTEBOOKS",
          "TVS",
          "VER TODOS",
        ]}
      />
      < PartnersSection />
      <ProductShelf />
      <PartnersSection />
      <BrandsSection/>
      <ProductShelf />
      <Footer/>
    </main>
  );
}

export default App;
