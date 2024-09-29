import { useState } from "react";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import "./App.css";
import Footer from "./Components/Footer";
import Buttons from "./Components/Buttons";

const App = () => {
  const products = [
    {
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      category: "men's clothing",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      name: "Mens Casual Premium Slim Fit T-Shirts ",
      category: "men's clothing",
      price: 22.3,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      name: "Mens Cotton Jacket",
      category: "men's clothing",
      price: 55.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      name: "Mens Casual Slim Fit",
      category: "men's clothing",
      price: 15.99,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      category: "jewelery",
      price: 695,
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      name: "Solid Gold Petite Micropave ",
      category: "jewelery",
      price: 168,
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      name: "White Gold Plated Princess",
      category: "jewelery",
      price: 9.99,
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      category: "jewelery",
      price: 10.99,
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      category: "electronics",
      price: 64,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
      name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      category: "electronics",
      price: 109,
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
    {
      name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
      category: "electronics",
      price: 109,
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    },
    {
      name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
      category: "electronics",
      price: 114,
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    },
    {
      name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
      category: "electronics",
      price: 599,
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    },
    {
      name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
      category: "electronics",
      price: 999.99,
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    },
    {
      name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      category: "women's clothing",
      price: 56.99,
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
    {
      name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      category: "women's clothing",
      price: 29.95,
      image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    },
    {
      name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      category: "women's clothing",
      price: 39.99,
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    },
    {
      name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      category: "women's clothing",
      price: 9.85,
      image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    },
    {
      name: "Opna Women's Short Sleeve Moisture",
      category: "women's clothing",
      price: 7.95,
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    },
    {
      name: "DANVOUY Womens T Shirt Casual Cotton Short",
      category: "women's clothing",
      price: 12.99,
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div>
      <Header />
      <div className="container">
        <Buttons
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <section className="container mt-5">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div id="product-grid" className="row">
              <ProductList products={filteredProducts} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
