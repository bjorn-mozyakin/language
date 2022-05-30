import { Language } from './Language';

export type State = {
  language: Language;
};

export type Verbs = {
  affirmative: {
    statement: string[];
    interrogative: string[];
  };
  interrogative?: {
    statement: string[];
    interrogative: string[];
  };
};

export type StateVerb = {
  isLoading: boolean;
  verb: string;
  verbs: Verbs;
};
