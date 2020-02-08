import React from "react";

interface Button {
    text: string
}

export default (props: Button) => <>
    <button>{ props.text }</button>
</>