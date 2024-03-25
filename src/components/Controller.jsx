import { useState } from "react";

// Viewer 컴포넌트
const Viewer = ({ count }) => {
  return (
    <div>
      <h2>현재 카운트:</h2>
      <h2>{count}</h2>
    </div>
  );
};

// Controller 컴포넌트
const Controller = ({ count, setCount }) => {
  const handleClick = (amount) => {
    setCount(count + amount);
  };

  return (
    <div>
      <button onClick={() => handleClick(-1)}>-1</button>
      <button onClick={() => handleClick(-10)}>-10</button>
      <button onClick={() => handleClick(-100)}>-100</button>
      <button onClick={() => handleClick(100)}>+100</button>
      <button onClick={() => handleClick(10)}>+10</button>
      <button onClick={() => handleClick(1)}>+1</button>
    </div>
  );
};

// 부모 컴포넌트
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Viewer count={count} />
      <Controller count={count} setCount={setCount} />
    </div>
  );
};

export default ParentComponent;
