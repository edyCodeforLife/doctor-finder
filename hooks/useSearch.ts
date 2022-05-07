// External modules
import { SetStateAction, useState } from 'react';

/**
 * Hook to handle user typing
 * @returns {searchTerm,  handleChangeSearch} The user typing and its handle
 */
const useSearch = () => {
  // Store typed searchTerm by user
  const [searchTerm, setSearchTerm] = useState('');
  const handleChangeSearch = (event: {
    target: { value: SetStateAction<string> };
  }) => setSearchTerm(event.target.value);

  return { searchTerm, handleChangeSearch };
};

export default useSearch;
