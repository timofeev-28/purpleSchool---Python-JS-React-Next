export interface FormState {
  isValid: {
    userName: boolean;
  };
  value: {
    userName: string;
  };
  isFormReadyToSubmit: boolean;
}

export type FormAction =
  | { type: 'SET_VALUE'; payload: { userName: string } }
  | { type: 'CLEAR' }
  | { type: 'RESET_VALIDITY' }
  | { type: 'SUBMIT' };
