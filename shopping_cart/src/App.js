import React from 'react';
import "./App.css";
import Header from "./components/Header"
import ProductList from './components/ProductList';
import {useState} from "react";

const App = () => {

  const[product, setProduct] = useState([
    {
    url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
    name:"TRP white shoes",
    category:"shoes",
    seller:"AMZ seller Ghz",
    price:1999
  },
  {
    url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
    name:"TRP white shoes",
    category:"shoes",
    seller:"AMZ seller Ghz",
    price:1999
  },
  {
    url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
    name:"TRP white shoes",
    category:"shoes",
    seller:"AMZ seller Ghz",
    price:1999
  },
  {
    url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
    name:"TRP white shoes",
    category:"shoes",
    seller:"AMZ seller Ghz",
    price:1999
  },
  {
    url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
    name:"TRP white shoes",
    category:"shoes",
    seller:"AMZ seller Ghz",
    price:1999
  },
  {
    url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
    name:"TRP white shoes",
    category:"shoes",
    seller:"AMZ seller Ghz",
    price:1999
  },
  {
    url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
    name:"TRP white shoes",
    category:"shoes",
    seller:"AMZ seller Ghz",
    price:1999
  },
  {
    url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
    name:"TRP white shoes",
    category:"shoes",
    seller:"AMZ seller Ghz",
    price:1999
  },
  {
    url: "https://www.jiomart.com/images/product/600x750/rvsv5cco5s/robbie-jones-white-sneakers-for-men-product-images-rvsv5cco5s-0-202209031736.jpg",
    name:"TRP white shoes",
    category:"shoes",
    seller:"AMZ seller Ghz",
    price:1999
  },
  ])

  const [cart, setCart] = useState([])

  const addToCart = (data) =>{
console.log(data)
  }
  return (
    <div>
    <Header/>
    <ProductList product={product} addToCart={addToCart}/>
      </div>
  )
}

export default App
