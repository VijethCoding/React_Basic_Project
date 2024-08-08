import styles from './Button.module.css';

const Button = ({isOutline ,text, icon ,...rest }) => {
  return (
    <button
    {...rest} className={isOutline ? styles.outlineBtn : styles.primaryBtn}
    >
      {icon}
      {text}
    </button>
  )
}

export default Button;
