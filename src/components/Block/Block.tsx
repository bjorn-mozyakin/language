import './Block.scss';

import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Block = ({ children }: Props) => {
  return <div className="block">{children}</div>;
};

export default Block;
