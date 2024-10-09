import React from "react";
import logo from "./logo.svg";  // Assuming you use the logo in some other place
import "./App.css";
import PrimarySearchAppBar from "./components/Navbar";
import { Carousel } from "./components/Carousel";
import { ProductCard } from "./components/ProductCard";
import { Category1 } from "./components/Category1";
import { Category2 } from "./components/Category2";
import { Images } from "./components/Images";
import { Brands } from "./components/Brands";
import { Footer } from "./components/Footer";
import CategorySection from "./components/CategorySection";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <Carousel />
      <ProductCard />
      <Category1 />
      <Category2 />
      <Images />
      <Brands />
      <CategorySection />
      <Footer />
    </div>
  );
}

export default App;
