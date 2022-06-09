import './Text.scss';

import React from 'react';

type Props = {
    children: React.ReactNode;
    weight: number;
};

export const Text = ({ children, weight }: Props) => {
    return <div className={`text text_weight_${weight}`}>{children}</div>;
};

export default Text;
