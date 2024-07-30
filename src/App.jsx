import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/contact";
import {
  BASProduct,
  BatteryProduct,
  Tyreproducts,
  lubricantsProduct,
  twoWTyreProduct,
} from "./components/data";
import Header from "./components/header";
import Home from "./components/Home";
import Shop from "./components/product";
import Login from "./pages/loginpage";
import Cart from "./components/cart"
import Register from "./pages/registerpage";

const allProducts = [
  ...Tyreproducts,
  ...BatteryProduct,
  ...twoWTyreProduct,
  ...lubricantsProduct,
  ...BASProduct,
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const[cartItems, setCartItems]=useState([])
  useEffect(() => {
    const afterFilter = allProducts
      .filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a, b) => {
        const aIncludes = a.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const bIncludes = b.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        return aIncludes === bIncludes ? 0 : aIncludes ? -1 : 1;
      });
      
    setFilteredProducts(afterFilter);
  }, [searchQuery]);
  const addToCart=(product)=>{
    setCartItems([...cartItems,product])
  }

  return ( <>
    {/* <Login/> */}
    <Router>
      <Header setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/shop" element={<Shop products={filteredProducts}  addToCart={addToCart}/>} />   
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart cartItems={cartItems}/>} />
      </Routes>
    </Router>

    {/* <About/> */}
  </>
);
}

export default App;