import React, { useState } from "react";

function Item({ name, category }) {
  // Define state for managing the class name
  const [className, setClassName] = useState(false);

  // Function to handle adding item to cart
  const handleItem = () => {
    // Toggle the class name state
    setClassName((prevClassName) => !prevClassName);
  };

  return (
    <li className={className ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleItem}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;
