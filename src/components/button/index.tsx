import React, {ReactNode} from "react";

interface Button {
    children?: ReactNode
}
const Button = (props: Button) => <>
    <button>{ props.children }</button>
</>

export default Button;