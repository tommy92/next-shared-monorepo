import styles from "./styles.module.scss";

const Button = ({ children, ...rest }) => (
  <button type="button" className={styles.c} {...rest}>
    {children}
  </button>
);

export default Button;
