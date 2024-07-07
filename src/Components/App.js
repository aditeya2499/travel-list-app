import { useState } from "react";

import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, desc: "Passports", quantity: 2, packed: false },
  { id: 2, desc: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [item, setItem] = useState(initialItems);

  function handleAddItems(newItem) {
    setItem((item) => [...item, newItem]);
  }
  function handleDeleteItems(id) {
    setItem((item) => item.filter((item) => item.id !== id));
  }
  function handleToggle(id) {
    setItem((item) =>
      //Updating only packed field of an object
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClear() {
    const confirm = window.confirm("You really want to delete all the items?");
    if (confirm) {
      setItem([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        handleClear={handleClear}
        items={item}
        handleDeleteItems={handleDeleteItems}
        handleToggle={handleToggle}
      />
      <Stats items={item} />
    </div>
  );
}
