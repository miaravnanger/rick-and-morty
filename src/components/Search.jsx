import { useState, useEffect } from "react";

export default function Search({ onSearchChange }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearchChange(value);
    }, 250);

    return () => clearTimeout(timeout);
  }, [value, onSearchChange]);

  return (
    <input
      type="text"
      placeholder="Search characters…"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="p-2 border rounded w-full mb-4"
    />
  );
}
