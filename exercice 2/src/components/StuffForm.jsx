import React, { useState } from "react";

export default function StuffForm({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, price: parseFloat(price) });
    setName("");
    setPrice("");
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input
        type="text"
        placeholder="Banana"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Stuff price</p>
      <input
        type="number"
        placeholder="15"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button>Add Stuff</button>
    </form>
  );
}
