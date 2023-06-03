import React from 'react';
import './App.css';
import Food from './components/Food';
import HamBurgerImage from './assets/hamBurger.png';
import CheeseBurgerImage from './assets/CheeseBurger.png'
import FriesImage from './assets/fries.png'
import CoffeeImage from './assets/coffee.png'
import TeaImage from './assets/tea.png'
import ColaImage from './assets/cola.png'

interface OrderItem {
  name: string;
  price: number;
  count: number;
}


const App = () => {
  return (
    <div className="App">

    </div>
  );
};

export default App;
