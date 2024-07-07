import { useState } from "react";

export default function Form({ handleAddItems }) {
  const [desc, setDescp] = useState("");
  const [quantity, setQuantity] = useState(10);

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      desc,
      quantity,
      package: false,
    };
    console.log(newItem);
    handleAddItems(newItem);

    //Setting the description and quantity to normal after form submission
    setDescp("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDescp(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
