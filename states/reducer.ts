// Internal modules
import { IAction, IState } from '@/interfaces/IStates';
import {
  SET_DOCTORS,
  SET_HOSPITALS,
  SET_SEARCH_TERM,
  SET_SELECTED_HOSPITALS,
  SET_SELECTED_SPECIALIZATIONS,
  SET_SPECIALIZATIONS,
} from '@/states/actionTypes';

const appReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case SET_DOCTORS: {
      return {
        ...state,
        doctors: action.payload,
      };
    }
    case SET_HOSPITALS: {
      return {
        ...state,
        hospitals: action.payload,
      };
    }
    case SET_SELECTED_HOSPITALS: {
      return {
        ...state,
        selectedHospitals: action.payload,
      };
    }
    case SET_SPECIALIZATIONS: {
      return {
        ...state,
        specializations: action.payload,
      };
    }
    case SET_SELECTED_SPECIALIZATIONS: {
      return {
        ...state,
        selectedSpecializations: action.payload,
      };
    }
    case SET_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export default appReducer;
