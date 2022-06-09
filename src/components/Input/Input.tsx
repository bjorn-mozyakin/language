import './Input.scss';

import React from 'react';

import { InputState, InputType } from '../../entities/Input';

const Input = ({
  additionalClasses = [],
  autocomplete = '',
  autoFocus = false,
  hint = '',
  maxlength,
  name,
  pattern = '',
  placeholder = '',
  required = false,
  type = InputType.TEXT,
  value = '',
  withError = false,
  onChange
}: InputState) => {
  const classNames = ['input-area__input'].concat(additionalClasses).join(' ');

  return (
    <div className="input-area">
      <input
        className={classNames}
        autoComplete={autocomplete}
        autoFocus={autoFocus}
        maxLength={maxlength}
        name={name}
        {...pattern || ''}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
        onChange={
          onChange &&
          ((event) => {
            onChange(event.target.value);
          })
        }
      />
      {hint && (
        <div className="input-area__underneath">
          <div className="input-area__hint">{hint}</div>
        </div>
      )}
      {withError && (
        <div className="input-area__underneath">
          <div className="input-area__error-msg"></div>
        </div>
      )}
    </div>
  );
};

export default Input;
