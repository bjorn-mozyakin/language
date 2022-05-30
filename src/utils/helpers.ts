import { HarmonyType } from '../entities/Rules';

import presentContinuousInterrogativeWord from '../rules/tenseEnds/present';
import endingsPresentQuestion from '../rules/tenseEnds/present_question';
import vowelHarmonyFour from '../rules/vowelHarmonyFour';
import vowelHarmonyTwo from '../rules/vowelHarmonyTwo';
import vowels from '../rules/vowels';

export const renameDataAttributes = (obj: any) => {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [`data-${key}`, value]));
};

export const getAffix = () => {
  return 'yor';
};

export const getVowel = (root: string, harmonyType = HarmonyType.VowelsFour) => {
  let obj;
  switch (harmonyType) {
    case HarmonyType.VowelsFour:
      obj = vowelHarmonyFour;
      break;
    case HarmonyType.VowelsTwo:
    default:
      obj = vowelHarmonyTwo;
  }

  const previousVowel = root
    .split('')
    .reverse()
    .find((letter) => vowels.includes(letter));

  const vowel =
    previousVowel &&
    Object.entries(obj).find(([key, value]) => {
      if (value.includes(previousVowel)) return key;
    });

  return vowel && vowel[0];
};

export const getVerbs = (root: string) => {
  const vowel = getVowel(root);
  const affirmativeStatementAffix = vowel;
  const negativeStatementAffix = 'm' + vowel;
  const tenseAffix = getAffix();

  const verbs = {
    affirmative: {
      statement: Object.entries(endingsPresent).map(([pronoun, ending]) => {
        return `${pronoun} ${root + affirmativeStatementAffix + tenseAffix + ending}`;
      }),
      interrogative: Object.entries(endingsPresentQuestion).map(([pronoun, word]) => {
        return `${pronoun} ${root + affirmativeStatementAffix + tenseAffix} ${word}`;
      })
    },
    negative: {
      statement: Object.entries(endingsPresent).map(([pronoun, ending]) => {
        return `${pronoun} ${root + negativeStatementAffix + tenseAffix + ending}`;
      }),
      interrogative: Object.entries(endingsPresentQuestion).map(([pronoun, word]) => {
        return `${pronoun} ${root + negativeStatementAffix + tenseAffix} ${word}`;
      })
    }
  };

  return verbs;
};
