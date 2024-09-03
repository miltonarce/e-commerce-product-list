import { useCallback, useEffect, useState } from "react";

export default function useSearch(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleSearch = useCallback((newValue: string) => {
    if (debounceTimeout !== null) {
      clearTimeout(debounceTimeout);
    }
    const timeout = setTimeout(() => {
      setValue(newValue);
    }, 500); // Adjust the debounce delay as needed
    setDebounceTimeout(timeout);
  }, []);

  useEffect(() => {
    return () => {
      if (debounceTimeout !== null) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  return { value, handleSearch };
}
