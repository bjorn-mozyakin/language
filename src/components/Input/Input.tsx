import './Input.scss';

import React from 'react';
import { useDispatch } from 'react-redux';

import { InputState, InputType } from '../../entities/Input';

const Input = ({
  name,
  type = InputType.TEXT,
  value = '',
  placeholder = '',
  autocomplete = '',
  required = false,
  withError = false,
  additionalClasses = [],
  autoFocus = false,
  maxLength,
  min,
  max,
  hint = '',
  onChange
}: InputState) => {
  const dispatch = useDispatch();

  const classNames = ['input-area__input'].concat(additionalClasses).join(' ');

  return (
    <div className="input-area">
      <input
        className={classNames}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autocomplete}
        required={required}
        autoFocus={autoFocus}
        maxLength={maxLength}
        min={min}
        max={max}
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
