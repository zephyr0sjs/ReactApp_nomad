import propTypes from "prop-types";
import styles from "./Button.module.css"; // css 를 모듈화해서 import

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

// propTypes 정의
Button.propTypes = {
  text: propTypes.string,
};

export default Button; // Button 함수 export
