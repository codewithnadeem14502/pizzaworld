import React from "react";

const Pizza = ({ pizzaobj }) => {
  return (
    <>
      <li className={`pizza  ${pizzaobj.soldOut ? "sold-out" : ""}`}>
        {pizzaobj.photoName}
        <div>
          <h1>{pizzaobj.name}</h1>
          <h1>{pizzaobj.ingredients}</h1>
          <span>{pizzaobj.soldOut ? "SOLD-OUT" : pizzaobj.price * 10}</span>
        </div>
      </li>
    </>
  );
};

export default Pizza;
