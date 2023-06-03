import React, { useState, MouseEvent } from "react";
import "./App.css";
import Food from "./components/Food";
import HamBurgerImage from "./assets/hamBurger.png";
import CheeseBurgerImage from "./assets/cheeseBurger.png";
import FriesImage from "./assets/fries.jpeg";
import CoffeeImage from "./assets/coffee.jpeg";
import TeaImage from "./assets/tea.png";
import ColaImage from "./assets/cola.jpeg";

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
    const index2 = orderList.findIndex((item) => item.name === name);

    setSign({ part1: "", part2: "" });
    let price = foodArr[index].price;

    if (orderList.length > 0 && index2 > -1) {
      const updatedOrderList = [...orderList];
      updatedOrderList[index2].count++;
      setOrderList(updatedOrderList);
    } else {
      const newItem: OrderItem = { name, price, count: 1 };
      setOrderList((prevOrderList) => [...prevOrderList, newItem]);
    }
    setTotal((prevTotal) => prevTotal + price);
  };
  const deleteItem = (event: MouseEvent<HTMLButtonElement>) => {
    const name = event.currentTarget.className;
    const index = orderList.findIndex((item) => item.name === name);

    if (index > -1 && orderList[index].count > 0) {
      const price = orderList[index].price;
      const updatedOrderList = [...orderList];
      updatedOrderList[index].count--;

      if (updatedOrderList[index].count === 0) {
        updatedOrderList.splice(index, 1);
      }
      setOrderList(updatedOrderList);
      setTotal((prevTotal) => prevTotal - price);
    }
  };
  return (
    <div className="App mainDiv">
      <div className="foodList">
        <p>Food List</p>
        <div className="main_block">
          {foodArr.map((item, index) => (
            <Food
              key={index}
              name={item.name}
              price={item.price}
              src={item.src}
              onClickAdd={addItem}
            />
          ))}
        </div>
      </div>
      <div className="orderDetails">
        <p>Order Details</p>
        <div className="sign">
          <p>{sign.part1}</p>
          <p> {sign.part2}</p>
        </div>
        {orderList.map((order, index) => (
          <div key={index} className="orderItem">
            {order.name + " X " + order.count}
            <p>{order.price * order.count + " KGS"}</p>
            <button className={order.name} onClick={deleteItem}>
              Delete
            </button>
          </div>
        ))}
        <div className="total">Total: {total}</div>
      </div>
    </div>
  );
};

export default App;
