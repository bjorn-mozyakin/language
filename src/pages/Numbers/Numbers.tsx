import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  startGame,
  toggleAnswerVisibility,
  increaseCurrentQuestionIndex,
  updateInputMaxNum,
  updateInputMinNum,
  updateSettings
} from '../../store/numbers/numbers.actions';

import { InputType } from '../../entities/Input';
import { StateNumbers } from '../../entities/Numbers';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Label from '../../components/Label/Label';
import Text from '../../components/Text/Text';

export const Numbers = () => {
  const dispatch = useDispatch();

  const {
    amount,
    allNumbers,
    gameNumbers,
    isGameStarted,
    isAnswerHidden,
    currentIdx,
    currentAnswer,
    settings,
    minNumValue,
    maxNumValue
  } = useSelector((state: { numbers: StateNumbers }) => state.numbers);

  const numberData = {
    weight: 700
  };

  const answerData = {
    weight: 400
  };

  const btnPlayData = {
    onClick: () => dispatch(startGame({ amount: amount, maxNum: maxNumValue, minNum: minNumValue }))
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
    maxLength: 4,
    name: minName,
    placeholder: 'from 0 to 9999',
    value: minNumValue.toString(),
    onChange: (value: number) => dispatch(updateInputMinNum(value))
  };

  const inputMaxNum = {
    maxLength: 4,
    name: maxName,
    placeholder: 'from 0 to 9999',
    value: maxNumValue.toString(),
    onChange: (value: number) => dispatch(updateInputMaxNum(value))
  };

  const btnNextData = {
    onClick: () => {
      dispatch(toggleAnswerVisibility());
      dispatch(increaseCurrentQuestionIndex());
    }
  };

  return (
    <div className="page">
      <h1>Numbers page</h1>
      {isGameStarted ? (
        <div>
          <div>
            {currentIdx + 1}/{amount}
          </div>
          <Text {...numberData}>{gameNumbers[currentIdx]}</Text>
          {isAnswerHidden ? (
            <Button {...btnShowData}>Show</Button>
          ) : (
            <>
              <Text {...answerData}>{allNumbers[gameNumbers[currentIdx]]}</Text>
              <Button {...btnNextData}>Next</Button>
            </>
          )}
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
