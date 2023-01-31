import { ReceitaFederalClient } from './ReceitaFederalClient';

export type SharedServiceInterface = {
  cpfValidate: boolean;
  cpfData: Partial<ReceitaFederalClient>;
};
