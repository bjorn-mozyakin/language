import { Language } from './Language';

export type State = {
  language: Language;
};

export type StateVerb = {
  isLoading: boolean;
  verb: string;
  verbs: string[];
};
