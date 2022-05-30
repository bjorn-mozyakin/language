import './PageVerb.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showVerbForms, updateVerb } from '../../store/verb/verb.actions';

import { StateVerb } from '../../entities/State';

import Block from '../../components/Block/Block';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import WordSet from '../../components/WordSet/WordSet';

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
    additionalClasses: ['outdent-left-24'],
    onClick: () => dispatch(showVerbForms(verb))
  };

  return (
    <div className="page">
      <div className="page-verb__input outdent-top-24">
        <Input {...inputData} />
        <Button {...buttonData}>Показать</Button>
      </div>
      {Object.entries(verbs).map(([key, value], i) => {
        return (
          <div key={`verb1_${i}`} className="outdent-top-24">
            <Title>{key}</Title>
            <Block>
              <WordSet words={value}></WordSet>
            </Block>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
