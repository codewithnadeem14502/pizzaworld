// eslint-disable-next-line no-unused-vars
import React from "react";
import Pizza from "./Pizza";
import pizza1 from "../pizzas/focaccia.jpg";
import pizza2 from "../pizzas/funghi.jpg";
import pizza3 from "../pizzas/margherita.jpg";
import pizza4 from "../pizzas/prosciutto.jpg";
import pizza5 from "../pizzas/salamino.jpg";
import pizza6 from "../pizzas/spinaci.jpg";
const Menu = () => {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: <img src={pizza1} alt="pizzaimg" />,
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: <img src={pizza2} alt="pizzaimg" />,
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: <img src={pizza3} alt="pizzaimg" />,
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: <img src={pizza4} alt="pizzaimg" />,
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: <img src={pizza5} alt="pizzaimg" />,
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: <img src={pizza6} alt="pizzaimg" />,
      soldOut: false,
    },
  ];
  const pizza = pizzaData;
  const pizzalenght = pizza.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzalenght > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {pizzalenght} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizza.map((pizza) => (
              <Pizza pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
};

export default Menu;
