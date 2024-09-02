import { useCallback, useState } from "react";

export default function useSearch(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleSearch = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  return { value, handleSearch };
}
