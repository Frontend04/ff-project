import React, { useState, MouseEvent } from "react";
import "./App.css";
import Food from "./components/Food";
import HamBurgerImage from "./assets/hamBurger.png";
import CheeseBurgerImage from "./assets/CheeseBurger.png";
import FriesImage from "./assets/fries.png";
import CoffeeImage from "./assets/coffee.png";
import TeaImage from "./assets/tea.png";
import ColaImage from "./assets/cola.png";

interface OrderItem {
  name: string;
  price: number;
  count: number;
}
const foodArr = [
  { name: "Hamburger", price: 80, src: HamBurgerImage },
  { name: "Cheeseburger", price: 80, src: CheeseBurgerImage },
  { name: "Fries", price: 80, src: FriesImage },
  { name: "Coffee", price: 80, src: CoffeeImage },
  { name: "Tea", price: 80, src: TeaImage },
  { name: "Cola", price: 80, src: ColaImage },
];

const App: React.FC = () => {
  const [sign, setSign] = useState<{ part1: string; part2: string }>({
    part1: "Order is Empty!",
    part2: "Please Add some items!",
  });
  const [orderList, setOrderList] = useState<OrderItem[]>([]);
  const [total, setTotal] = useState(0);

  const addItem = (event: MouseEvent<HTMLDivElement>) => {
    const name = event.currentTarget.className;
    const index = foodArr.findIndex((item) => item.name === name);
    const index2 = foodArr.findIndex((item) => item.name === name);

    setSign({ part1: "", part2: "" });
    let price = foodArr[index].price;

    if (orderList.length > 0 && index2 > -1) {
      const updateOrderList = [...orderList];
      updateOrderList[index2].count++;
      setOrderList(updateOrderList);
    } else {
      const newItem: OrderItem = { name, price, count: 1 };
      setOrderList((prevOrderList) => [...prevOrderList, newItem]);
    }
    setTotal((prevTotal) => prevTotal + price);
  };
  const deleteItem = (event: MouseEvent<HTMLButtonElement>) => {
    const name = event.currentTarget.className;
    const index = foodArr.findIndex((item) => item.name === name);

    if (index > -1 && orderList[index].count > 0) {
      const price = orderList[index].price;
      const updatedOrderList = [...orderList];
      updatedOrderList[index].count--;

      if (updatedOrderList[index].count === 0) {
        updatedOrderList.splice(index, 0);
      }
      setOrderList(updatedOrderList);
      setTotal((prevTotal) => prevTotal - price)
    }
  };
  return <div className="App mainDiv"></div>;
};

export default App;
