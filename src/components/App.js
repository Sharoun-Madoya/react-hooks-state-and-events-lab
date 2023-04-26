import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  function updateAppClass (appClass){
    return (
      <>
      <div className="App dark">{/* for dark mode */}</div>
      <div className="App light">{/* for light mode */}</div>
      </>
    )
  }
  const [ dark, setDark ] = useState(false)
  const appClass = dark? "App dark" : "App light"

  function handleDarkMode (){
    setDark((dark)=> !dark);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode} onChange={updateAppClass}>
          {dark ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
