import './WordSet.scss';

import React from 'react';

import Title from '../Title/Title';

type Props = {
  words: {
    statement: string[];
    interrogative: string[];
  };
};

export const WordSet = ({ words }: Props) => {
  return (
    <>
      {Object.entries(words).map(([type, verbs], i) => {
        return (
          <div key={`verb2_${i}`} className="word-set">
            <Title>{type}</Title>
            <div className="word-set__words">
              {verbs &&
                verbs.map((verb, i) => {
                  return <div key={`verb3_${i}`}>{verb}</div>;
                })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WordSet;
