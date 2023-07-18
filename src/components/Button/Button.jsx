import PropTypes from "prop-types";
import css from '../Button/Button.module.css'

export const Button = ({ onClick }) => {
  return <button className={css.button} onClick={onClick}>Load more</button>;
};

// import PropTypes from "prop-types";
Button.propTypes = {
  onClick:PropTypes.func.isRequired
};