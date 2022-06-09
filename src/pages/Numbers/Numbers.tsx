import './Numbers.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  showNextNumber,
  startGame,
  toggleAnswerVisibility,
  updateInputMaxNum,
  updateInputMinNum
} from '../../store/numbers/numbers.actions';

import { StateNumbers } from '../../entities/Numbers';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import Text from '../../components/Text/Text';

export const Numbers = () => {
  const dispatch = useDispatch();

  const {
    allNumbers,
    currentIdx,
    gameNumbers,
    isGameStarted,
    isAnswerHidden,
    maxlength,
    settings
  } = useSelector((state: { numbers: StateNumbers }) => state.numbers);
  const { amount, maxNum, minNum } = settings;

  const textData = {
    weight: 400,
    size: 10
  };

  const numberData = {
    weight: 700
  };

  const answerData = {
    weight: 400,
    visibility: !isAnswerHidden
  };

  const btnPlayData = {
    onClick: () => dispatch(startGame({ amount: +amount, maxNum: +maxNum, minNum: +minNum }))
  };

  const btnShowData = {
    onClick: () => dispatch(toggleAnswerVisibility())
  };

  const minName = 'minNum';
  const maxName = 'maxNum';

  const labelMinNum = {
    name: minName
  };

  const labelMaxNum = {
    name: maxName
  };

  const inputMinNum = {
    maxlength: maxlength,
    name: minName,
    size: 4,
    value: minNum.toString(),
    onChange: (value: string) => dispatch(updateInputMinNum(value))
  };

  const inputMaxNum = {
    maxlength: maxlength,
    name: maxName,
    size: 4,
    value: maxNum.toString(),
    onChange: (value: string) => dispatch(updateInputMaxNum(value))
  };

  const btnNextData = {
    onClick: () => dispatch(showNextNumber())
  };

  return (
    <div className="page">
      <h1>Numbers page</h1>
      {isGameStarted ? (
        <div className="numbers">
          <div className="numbers__container">
            <div className="numbers__one-of">
              {currentIdx + 1}/{amount}
            </div>
            <Text {...textData}>How to say:</Text>
            <Text {...numberData}>{gameNumbers[currentIdx]}</Text>
            <Text {...answerData}>{allNumbers[gameNumbers[currentIdx]]}</Text>
            {isAnswerHidden ? (
              <Button {...btnShowData}>Show</Button>
            ) : (
              <Button {...btnNextData}>Next</Button>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="settings">
            <Label {...labelMinNum}>
              От
              <Input {...inputMinNum} />
            </Label>
            <Label {...labelMaxNum}>
              До
              <Input {...inputMaxNum} />
            </Label>
          </div>
          <Button {...btnPlayData}>Play</Button>
        </>
      )}
    </div>
  );
};

export default Numbers;
