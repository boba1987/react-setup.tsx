import React, {ReactNode} from "react";

interface Button {
    children?: ReactNode
}

export default (props: Button) => <>
    <button>{ props.children }</button>
</>