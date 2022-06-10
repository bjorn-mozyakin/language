import './Label.scss';

import React from 'react';

type Props = {
  children: React.ReactNode;
  additionalClasses?: string[];
  direction?: string;
  name: string;
};

export const Label = ({ children, additionalClasses = [], direction, name }: Props) => {
  const classNames = ['label', `label_direction_${direction}`]
      .concat(additionalClasses)
      .join(' ');

  return <label htmlFor={name} className={classNames}>{children}</label>;
};

export default Label;
