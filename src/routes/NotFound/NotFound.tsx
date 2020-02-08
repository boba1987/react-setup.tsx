import React from 'react';
import {
  useLocation
} from "react-router-dom";

export default function NotFound() {
  let {pathname} = useLocation();

  return <>
      <h1><code>{pathname}</code> page not found</h1>
  </>;
}