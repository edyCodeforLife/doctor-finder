// External modules
import { useEffect, useState } from 'react';

// Internal modules
import {
  FILTER_PH_HOSPITAL,
  FILTER_PH_SPECIALIZATION,
  SEARCH_PH_DOCTOR,
} from '@/constants/app';
import { actions, header, heading } from '@/components/Header/style';
import {
  setSearchTerm,
  setSelectedHospitals,
  setSelectedSpecializations,
} from '@/states/actions';
import Filter from '@/components/Filter';
import Heading from '@/components/Heading';
import Search from '@/components/Search';
import { useAppContext } from '@/states/context';
import useSearch from '@/hooks/useSearch';

const Header = () => {
  const { state, dispatch } = useAppContext();

  // Get hospitals and specializations from the global state
  const { hospitals, specializations } = state;

  // Current state which is selected by user
  const [currHospitals, setCurrHospitals] = useState([]);
  const [currSpecializations, setCurrSpecializations] = useState([]);

  // Set searchTerm, selectedHospitals, and selectedSpecializations to the global state
  const { searchTerm, handleChangeSearch } = useSearch();
  useEffect(() => dispatch(setSearchTerm(searchTerm)), [searchTerm]);
  useEffect(() => {
    dispatch(setSelectedHospitals(currHospitals));
    dispatch(setSelectedSpecializations(currSpecializations));
  }, [currHospitals, currSpecializations]);

  return (
    <header css={header}>
      <Heading level={1} css={heading}>
        <span>Doctor</span>
        <span>Finder</span>
      </Heading>
      <section css={actions}>
        <Search
          placeholder={SEARCH_PH_DOCTOR}
          onChange={handleChangeSearch}
          value={searchTerm}
        />
        <Filter
          options={hospitals}
          placeholder={FILTER_PH_HOSPITAL}
          value={currHospitals}
          onChange={setCurrHospitals}
        />
        <Filter
          options={specializations}
          placeholder={FILTER_PH_SPECIALIZATION}
          value={currSpecializations}
          onChange={setCurrSpecializations}
        />
      </section>
    </header>
  );
};

export default Header;
