import React, { Component } from 'react';
import img1 from '../images/pizza.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import './Product.css';

const products = [
  { item: <div className="div1"><img src={img1} alt="Pizza" /></div>, name: 'Pizza', price: 500 },
  { item: <div className="div3"><img src={img2} alt="Manchurian" /></div>, name: 'Manchurian', price: 200 },
  { item: <div className="div4"><img src={img3} alt="Paneer Chilli" /></div>, name: 'Paneer Chilli', price: 400 },
  { item: <div className="div5"><img src={img4} alt="Noodles" /></div>, name: 'Noodles', price: 300 },
  { item: <div className="div6"><img src={img5} alt="Vada Pav" /></div>, name: 'Vada Pav', price: 100 },
  { item: <div className="div7"><img src={img6} alt="Grill Paneer Chilli" /></div>, name: 'Grill Paneer chilli', price: 600 }
];

export default class Product extends Component {
  state = {
    cart: [],
    total: 0
  };

  addItem = (product) => {
    this.setState(prev => ({
      cart: [...prev.cart, product.name],
      total: prev.total + product.price
    }));
  };

  removeItem = (product) => {
    this.setState(prev => {
      const updatedCart = [...prev.cart];
      const index = updatedCart.indexOf(product.name);
      if (index !== -1) {
        updatedCart.splice(index, 1);
        return { cart: updatedCart, total: prev.total - product.price };
      }
      return prev;
    });
  };

  formatTotal = () => {
    return this.state.total.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  render() {
    const { cart } = this.state;
    return (
      <div className="wrapper">
        <header className="main_div">
          <p>Shopping cart: {cart.length} items</p>
        </header>

        {/* Grand Total section */}
        <div className="summary">
          <p className="grand-total">Grand Total: ₹{this.formatTotal()}</p>
        </div>

        <div className="products">
          {products.map(product => (
            <div key={product.name} className="product-card">
              <div className="product">
                <span role="img" aria-label={product.name}>{product.item}</span>
                <strong>{product.name}</strong>
              </div>
              <div className="actions">
                <button onClick={() => this.addItem(product)}>Add</button>
                <button onClick={() => this.removeItem(product)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
