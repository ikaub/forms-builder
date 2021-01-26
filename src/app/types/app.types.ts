import { FormState } from '../layout/types/layout.types';
import { AuthState } from '../auth/types/auth.types';

export interface AppState {
  form: FormState;
  auth: AuthState;
}
