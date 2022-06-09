import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  startGame,
  toggleAnswerVisibility,
  increaseCurrentQuestionIndex,
  updateSettings
} from '../../store/numbers/numbers.actions';

import { StateNumbers } from '../../entities/Numbers';

import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';

export const Numbers = () => {
  const dispatch = useDispatch();

  const {
    allNumbers,
    gameNumbers,
    isGameStarted,
    isAnswerHidden,
    currentIdx,
    currentAnswer,
    settings
  } = useSelector((state: { numbers: StateNumbers }) => state.numbers);

  const numberData = {
    weight: 700
  };

  const answerData = {
    weight: 400
  };

  const btnPlayData = {
    onClick: () => dispatch(startGame({ amount: 10, maxNum: 99, minNum: 10 }))
  };

  const btnShowData = {
    onClick: () => dispatch(toggleAnswerVisibility())
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
        <Button {...btnPlayData}>Play</Button>
      )}
    </div>
  );
};

export default Numbers;
