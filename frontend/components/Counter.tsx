import React, { useState } from 'react';

interface CounterProps {
  onAddUser: () => void;
  onRemoveUser: () => void;
}
function Counter({ onAddUser, onRemoveUser }: CounterProps) {
  const [count, setCount] = useState(0);

  if (count < 0) {
    setCount(0);
  }

  const increment = () => {
    setCount(count + 1);
    onAddUser();
  };

  const decrement = () => {
    setCount(count - 1);
    onRemoveUser();
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
