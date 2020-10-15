import React, { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleCountChange = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <span>{count}</span>
      <button type="button" onClick={() => handleCountChange()}>
        Increment counter
      </button>
    </>
  );
};

export default Home;
