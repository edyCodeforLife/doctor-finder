// External modules
import { createContext, useContext, useEffect, useReducer } from 'react';

// Internal modules
import { IAppProvider, IState, TDispatch } from '@/interfaces/IStates';
import appReducer from '@/states/reducer';

// Create App context
const AppContext = createContext<
  { state: IState; dispatch: TDispatch } | undefined
>(undefined);

// Create App provider
const AppProvider = ({ children }: IAppProvider) => {
  // Initial state
  const initialState: IState = {
    doctors: [],
    hospitals: [],
    selectedHospitals: [],
    specializations: [],
    selectedSpecializations: [],
    searchTerm: '',
  };

  // Create persisted state
  // and ensure it runs in the browser
  const isClient = typeof window !== 'undefined';

  // Get the state from storage
  const cachedState = isClient ? localStorage.getItem('doctor-finder') : null;
  const localState = JSON.parse(cachedState === null ? 'null' : cachedState);

  // Set the state along with reducer
  const [state, dispatch] = useReducer(appReducer, localState || initialState);

  // Persist the state in the browser
  useEffect(() => {
    localStorage.setItem('doctor-finder', JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};

export { AppProvider, useAppContext };
