import React, {memo, ReactNode} from "react";
import styles from './button.module.scss';

interface ButtonInterface {
    children?: ReactNode,
    onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
const Button = (props: ButtonInterface) => <>
    <button className={styles.button} onClick={props.onclick} data-testid="button">{ props.children }</button>
</>

export default memo(Button);