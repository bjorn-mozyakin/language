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
  name: string;
  max?: number;
  maxLength?: number;
  min?: number;
  placeholder?: string;
  required?: boolean;
  type?: InputType;
  value?: string;
  withError?: boolean;
  onChange?: (e: any) => void;
}
