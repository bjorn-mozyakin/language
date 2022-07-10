import './Select.scss';

import React from 'react';
import { useSelector } from 'react-redux';

import { StateCommon } from '../../entities/Common';

import Label from '../Label/Label';

type Option = {
  value: string;
  text: string;
};

type Props = {
  name: string;
  text: string;
  options: Option[];
  onChange?: (event: any) => void;
};

export const Select = ({ name, text, options, onChange }: Props) => {
  const { language } = useSelector((state: { common: StateCommon }) => state.common);

  return (
    <>
      <Label name={name}>{text}</Label>
      <select className="select sel" name={name} id={name} onChange={onChange} value={language}>
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
