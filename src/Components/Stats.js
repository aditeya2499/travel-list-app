export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start Adding some Items 🚀</em>
      </footer>
    );
  }
  const item = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / item) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You are ready to go ✈️`
          : `💼 You have ${item} items on your list, and you already packed ${packed}(
          ${percentage}%)`}
      </em>
    </footer>
  );
}
