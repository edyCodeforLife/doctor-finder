// Internal modules
import IDoctor from '@/interfaces/IDoctor';
import IOption from '@/interfaces/IOption';

export interface IState {
  doctors: IDoctor[];
  hospitals: IOption[];
  selectedHospitals: IOption[];
  specializations: IOption[];
  selectedSpecializations: IOption[];
  searchTerm: string;
}

export interface IAction {
  type: string;
  payload: any;
}

export type TDispatch = (action: IAction) => void;

export interface IAppProvider {
  children: React.ReactNode;
}
