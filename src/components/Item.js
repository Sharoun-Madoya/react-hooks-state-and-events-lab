import React, {useState} from "react";
function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }
const itemClass = isInCart ? "in-cart" : ""
const buttonClass = isInCart ? "remove" : "add"
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleAddToCartClick}> {isInCart ? "Remove From" : "Add to"} Cart </button>
    </li>
  );
}
export default Item;
