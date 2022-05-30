import './Button.scss';

import React from 'react';

import { ButtonType, BtnType } from '../../entities/Button';

import { renameDataAttributes } from '../../utils/helpers';

export const Button = ({
  children,
  title = null,
  type = ButtonType.BUTTON,
  additionalClasses = [],
  dataAttributes = null,
  isLoading = false,
  onClick
}: BtnType) => {
  const classNames = ['button', isLoading ? 'btn-flat_loading' : '']
    .concat(additionalClasses)
    .join(' ');

  let attrs;
  if (dataAttributes) {
    attrs = renameDataAttributes(dataAttributes);
  }

  return (
    <button
      className={classNames}
      {...(attrs || '')}
      {...(title ? { title } : '')}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
