import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Replace 'false' with a state variable that can be toggled between true and false
  // This will be used for the Dark Mode Toggle feature
  const [isDark, setIsDark] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

  // Determine the class name based on dark mode state
  const appClass = isDark ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Add onClick handler to toggle dark mode */}
        <button onClick={toggleDarkMode}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
