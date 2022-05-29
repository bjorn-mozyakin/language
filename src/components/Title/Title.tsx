import './Title.scss';

import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Title = ({ children }: Props) => {
  return <div className="title">{children}</div>;
};

export default Title;
