import './Select.scss';

import React from 'react';

import Label from '../Label/Label';

type Option = {
  value: string;
  text: string;
};

type Props = {
  name: string;
  text: string;
  options: Option[];
};

export const Select = ({ name, text, options }: Props) => {
  return (
    <>
      <Label name={name}>{text}</Label>
      <select className="select" name={name} id={name}>
        {options.map(({ value, text }, i) => {
          return (
            <option key={`option_${i}`} value={value}>
              {text}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
