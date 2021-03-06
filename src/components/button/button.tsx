import React, {ReactNode} from "react";
import styles from './button.module.scss';

interface ButtonInterface {
    children?: ReactNode,
    onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const Button = (props: ButtonInterface) => <>
    <button className={styles.button} onClick={props.onclick}>{ props.children }</button>
</>

export default Button;