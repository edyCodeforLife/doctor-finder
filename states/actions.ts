// Internal modules
import {
  SET_DOCTORS,
  SET_HOSPITALS,
  SET_SEARCH_TERM,
  SET_SELECTED_HOSPITALS,
  SET_SELECTED_SPECIALIZATIONS,
  SET_SPECIALIZATIONS,
} from '@/states/actionTypes';
import IDoctor from '@/interfaces/IDoctor';
import IOption from '@/interfaces/IOption';

export const setDoctors = (doctors: IDoctor[]) => ({
  type: SET_DOCTORS,
  payload: doctors,
});

export const setHospitals = (hospitals: IOption[]) => ({
  type: SET_HOSPITALS,
  payload: hospitals,
});

export const setSelectedHospitals = (selectedHospitals: IOption[]) => ({
  type: SET_SELECTED_HOSPITALS,
  payload: selectedHospitals,
});

export const setSpecializations = (specializations: IOption[]) => ({
  type: SET_SPECIALIZATIONS,
  payload: specializations,
});

export const setSelectedSpecializations = (
  selectedSpecializations: IOption[]
) => ({
  type: SET_SELECTED_SPECIALIZATIONS,
  payload: selectedSpecializations,
});

export const setSearchTerm = (searchTerm: string) => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm,
});
