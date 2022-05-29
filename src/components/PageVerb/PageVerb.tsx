import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showVerbForms, updateVerb } from '../../store/verb/verb.actions';

import { StateVerb } from '../../entities/State';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

export const Page = () => {
  const dispatch = useDispatch();
  const verb = useSelector((state: { verb: StateVerb }) => state.verb.verb);
  const verbs = useSelector((state: { verb: StateVerb }) => state.verb.verbs);

  const inputData = {
    name: 'verb',
    placeholder: 'Введите глагол',
    value: verb,
    onChange: (verb: string) => dispatch(updateVerb(verb))
  };

  const buttonData = {
    onClick: () => dispatch(showVerbForms(verb))
  };

  return (
    <div className="page">
      <Input {...inputData} />
      <Button {...buttonData}>Показать</Button>
      {verbs.length &&
        verbs.map((verb, i) => {
          return <div key={`verb_${i}`}>{verb}</div>;
        })}
    </div>
  );
};

export default Page;
