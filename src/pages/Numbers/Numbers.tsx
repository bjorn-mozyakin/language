import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  startGame,
  toggleAnswerVisibility,
  increaseCurrentQuestionIndex
} from '../../store/numbers/numbers.actions';

import { StateNumbers } from '../../entities/Numbers';

import Button from '../../components/Button/Button';
import Text from '../../components/Text/Text';

export const Numbers = () => {
  const dispatch = useDispatch();

  const { allNumbers, isGameStarted, isAnswerHidden, questions, currentIdx, currentAnswer } =
    useSelector((state: { numbers: StateNumbers }) => state.numbers);

  const questoinData = {
    weight: 700
  };

  const answerData = {
    weight: 400
  };

  const btnPlayData = {
    onClick: () => {
      dispatch(startGame());
    }
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
          <Text {...questoinData}>{questions[currentIdx]}</Text>
          {isAnswerHidden ? (
            <Button {...btnShowData}>Show</Button>
          ) : (
            <>
              <Text {...answerData}>{allNumbers[questions[currentIdx]]}</Text>
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
