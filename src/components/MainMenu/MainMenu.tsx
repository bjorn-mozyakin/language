import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { switchLanguage } from '../../store/common/common.actions';

import { Language } from '../../entities/Language';

import Select from '../Select/Select';

export const MainMenu = () => {
  const dispatch = useDispatch();

  const optionsData = {
    name: 'language',
    text: 'Язык',
    options: [
      {
        value: Language.EN,
        text: Language.EN
      },
      {
        value: Language.ES,
        text: Language.ES
      },
      {
        value: Language.FR,
        text: Language.FR
      },
      {
        value: Language.RU,
        text: Language.RU
      },
      {
        value: Language.TR,
        text: Language.TR
      }
    ],
    onChange: (event: any) => {
      dispatch(switchLanguage(event.target.value));
    }
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="numbers">Numbers</Link>
        <Link to="verbs">Verbs</Link>
      </nav>
      <Select {...optionsData} />
    </div>
  );
};

export default MainMenu;
