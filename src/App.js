import React, { useState } from 'react';
import ProductList from './components/ProductionList/ProductionList';
//import ProductList from './components/ProductList';
import ProductDetails from './components/ProductionDetails/ProductionDetails';
//import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
//import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout/Checkout';
//import Checkout from './components/Checkout';

import productData from './assets/productData.json';

import './styles/styles.css';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const updateQuantity = (product, quantity) => {
    setCart(
      cart.map((item) => (item.id === product.id ? { ...item, quantity: +quantity } : item))
    );
  };

  const confirmOrder = () => {
    // Implement order confirmation logic here
    console.log('Order Confirmed:', cart);
  };

  return (
    <div>
      <ProductList products={productData} onProductClick={setSelectedProduct} />
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onAddToCart={addToCart} />
      )}
      <ShoppingCart
        cart={cart}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />
      <Checkout cart={cart} onConfirmOrder={confirmOrder} />
    </div>
  );
};

export default App;
