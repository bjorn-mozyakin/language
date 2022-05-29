import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showVerbForms, updateVerb } from '../../store/verb/verb.actions';

import { StateVerb } from '../../entities/State';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';

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
      {Object.entries(verbs).map(([key, value], i) => {
        return (
          <div key={`verb1_${i}`}>
            <Title>{key}</Title>
            <div>
              {Object.entries(value).map(([type, verbs], i) => {
                return (
                  <div key={`verb2_${i}`}>
                    <Title>{type}</Title>
                    <div>
                      {verbs &&
                        verbs.map((verb, i) => {
                          return <div key={`verb3_${i}`}>{verb}</div>;
                        })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
