import React from 'react';

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit'
}

export interface BtnType {
  children?: React.ReactNode;
  additionalClasses?: string[];
  dataAttributes?: any;
  isLoading?: boolean;
  title?: string | null;
  type?: ButtonType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
