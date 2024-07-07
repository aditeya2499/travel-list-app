import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  handleDeleteItems,
  handleToggle,
  handleClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "desc")
    sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));

  if (sortBy === "packed")
    sortedItems = items
      .slice(0)
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            itemObj={item}
            handleDeleteItems={handleDeleteItems}
            handleToggle={handleToggle}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="desc">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={handleClear}>Clear List</button>
      </div>
    </div>
  );
}
