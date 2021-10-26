/* eslint-disable */
import React from 'react';
import Todo from './Todo';

export default {
  title: "Todo",
};

export const Default = () => <Todo id={0} done={false} title={''} description={''} />;

Default.story = {
  name: 'default',
};
