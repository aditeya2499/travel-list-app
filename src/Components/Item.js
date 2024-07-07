export default function Item({ itemObj, handleDeleteItems, handleToggle }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => handleToggle(itemObj.id)}
      ></input>
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.desc}
      </span>
      <button onClick={() => handleDeleteItems(itemObj.id)}>❌</button>
    </li>
  );
}
