import React from "react";
import Button from './button';

export default { title: 'Button' };

export const withText = () => <Button>Hello world</Button>;

export const clickMe = () => <Button>Click me</Button>;