import React, { useState } from 'react';

export default function Form({ onSubmit }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(num1, num2);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First number:
        <input type="number" value={num1} onChange={event => setNum1(event.target.value)} />
      </label>
      <label>
        Second number:
        <input type="number" value={num2} onChange={event => setNum2(event.target.value)} />
      </label>
      <button type="submit">Add Numbers</button>
    </form>
  );
}

