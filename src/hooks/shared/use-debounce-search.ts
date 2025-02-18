import { useState } from 'react';
import { useDebounceValue } from './use-debounce-value';

export const useDebounceSearch = (delay = 500) => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounceValue(searchValue, delay);

  return {
    searchValue,
    debouncedSearchValue,
    handleSearch: (value: string) => setSearchValue(value),
  };
};
