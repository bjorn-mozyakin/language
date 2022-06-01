import './Form.scss';

import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const FormLine = ({ children }: Props) => {
  return <div className="form__line">{children}</div>;
};

export default FormLine;
