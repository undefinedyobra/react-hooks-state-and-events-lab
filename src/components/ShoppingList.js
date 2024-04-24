import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Define state for filtering
  const [filterBy, setFilterBy] = useState("All");

  // Function to handle filter change
  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  // Filter items based on the selected category
  const filteredItems = items.filter((item) => {
    if (filterBy === "All") {
      return true;
    } else {
      return item.category === filterBy;
    }
  });

  // Map filtered items to Item components
  const itemList = filteredItems.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ));

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={filterBy} onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">{itemList}</ul>
    </div>
  );
}

export default ShoppingList;
