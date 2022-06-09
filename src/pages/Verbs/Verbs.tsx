import './Verbs.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showVerbForms, updateVerb } from '../../store/verb/verb.actions';

import { StateVerb } from '../../entities/State';

import Block from '../../components/Block/Block';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import FormLine from '../../components/Form/FormLine';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Title from '../../components/Title/Title';
import WordSet from '../../components/WordSet/WordSet';

export const Verbs = () => {
  const verbs = useSelector((state: { verb: StateVerb }) => state.verb.verbs);
  const dispatch = useDispatch();
  const verb = useSelector((state: { verb: StateVerb }) => state.verb.verb);

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

  const optionsData = {
    name: 'tense',
    text: 'Время',
    options: [
      {
        value: 'presentContinuous',
        text: 'Present Continuous'
      }
    ]
  };

  return (
    <div className="page">
      <div className="page-verb__input outdent-top-24">
        <Form>
          <FormLine>
            <Select {...optionsData} />
            <Input {...inputData} />
            <Button {...buttonData}>Показать</Button>
          </FormLine>
        </Form>
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

export default Verbs;
