import { useState } from "react";
import styles from "./styles.module.scss";
import Button from "../../components/Button";

const Home = () => {
  const [count, setCount] = useState<number>(0);

  const handleCountChange = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className={styles.container}>
      <span>{count}</span>
      <Button onClick={() => handleCountChange()}>Increment counter</Button>
    </div>
  );
};

export default Home;
