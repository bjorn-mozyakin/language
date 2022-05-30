import './Syllable.scss';

import React from 'react';

type Props = {
  children: React.ReactNode;
  color: string;
};

export const Syllable = ({ children, color = 'black' }: Props) => {
  return <span className={`syllable syllable_color_${color}`}>{children}</span>;
};

export default Syllable;
