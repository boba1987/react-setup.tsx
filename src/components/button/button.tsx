import React, {ReactNode} from "react";
import styles from './button.module.scss';

interface ButtonInterface {
    children?: ReactNode
}
const Button = (props: ButtonInterface) => <>
    <button className={styles.button}>{ props.children }</button>
</>

export default Button;