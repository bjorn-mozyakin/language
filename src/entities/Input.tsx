export enum InputType {
  CHECKBOX = 'checkbox',
  EMAIL = 'email',
  HIDDEN = 'hidden',
  PASSWORD = 'password',
  TEXT = 'text'
}

export interface InputState {
  name: string;
  type?: InputType;
  value?: string;
  placeholder?: string;
  autocomplete?: string;
  required?: boolean;
  withError?: boolean;
  additionalClasses?: string[];
  autoFocus?: boolean;
  maxLength?: string;
  hint?: string;
  onChange?: (e: any) => void;
}
