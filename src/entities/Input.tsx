export enum InputType {
  CHECKBOX = 'checkbox',
  EMAIL = 'email',
  HIDDEN = 'hidden',
  NUMBER = 'number',
  PASSWORD = 'password',
  TEXT = 'text'
}

export interface InputState {
  additionalClasses?: string[];
  autocomplete?: string;
  autoFocus?: boolean;
  hint?: string;
  maxlength?: number;
  name: string;
  pattern?: string;
  placeholder?: string;
  required?: boolean;
  size?: number;
  tmpl?: string;
  type?: InputType;
  value?: string;
  withError?: boolean;
  onChange?: (value: string) => void;
}
