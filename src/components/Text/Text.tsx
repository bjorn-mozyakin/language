import './Text.scss';

import React from 'react';

type Props = {
  children: React.ReactNode;
  size?: number;
  visibility?: boolean;
  weight?: number;
};

export const Text = ({ children, size = 14, weight = 400, visibility = true }: Props) => {
  return (
    <div className={`text text_weight_${weight} text_visibility_${visibility} text_size_${size}`}>
      {children}
    </div>
  );
};

export default Text;
