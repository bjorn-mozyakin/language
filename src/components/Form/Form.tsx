import './Form.scss';

import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Form = ({ children }: Props) => {
  return <form className="form">{children}</form>;
};

export default Form;
