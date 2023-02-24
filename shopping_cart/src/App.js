import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { useState } from "react";

const App = () => {
  const [product, setProduct] = useState([
    {
      url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
      name: "TRP white shoes",
      category: "shoes",
      seller: "AMZ seller Ghz",
      price: 1999,
    },
    {
      url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
      name: "TRP white shoes",
      category: "shoes",
      seller: "AMZ seller Ghz",
      price: 1999,
    },
    {
      url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
      name: "TRP white shoes",
      category: "shoes",
      seller: "AMZ seller Ghz",
      price: 1999,
    },
    {
      url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
      name: "TRP white shoes",
      category: "shoes",
      seller: "AMZ seller Ghz",
      price: 1999,
    },
    {
      url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
      name: "TRP white shoes",
      category: "shoes",
      seller: "AMZ seller Ghz",
      price: 1999,
    },
    {
      url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
      name: "TRP white shoes",
      category: "shoes",
      seller: "AMZ seller Ghz",
      price: 1999,
    },
    {
      url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
      name: "TRP white shoes",
      category: "shoes",
      seller: "AMZ seller Ghz",
      price: 1999,
    },
    {
      url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
      name: "TRP white shoes",
      category: "shoes",
      seller: "AMZ seller Ghz",
      price: 1999,
    },
    {
      url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
      name: "TRP white shoes",
      category: "shoes",
      seller: "AMZ seller Ghz",
      price: 1999,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  // console.log(cart);
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  return (
    <div>
      <Header count={cart.length} 
      setShowCart={(value) => setShowCart(value)} />
      
      {
      showCart ? 
        <CartList cart={cart} />
       : 
        <ProductList product={product} addToCart={addToCart} />
      
      }
      
    </div>
  );
};

export default App;
