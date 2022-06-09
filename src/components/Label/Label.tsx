// import './Label.scss';

import React from 'react';

type Props = {
  children: React.ReactNode;
  name: string;
};

export const Label = ({ children, name }: Props) => {
  return <label htmlFor={name}>{children}</label>;
};

export default Label;
