import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
} & JSX.IntrinsicElements["button"];

const Button: React.FC<Props> = ({ children, ...rest }) => (
  <button type="button" className={styles.c} {...rest}>
    {children}
  </button>
);

export default Button;
