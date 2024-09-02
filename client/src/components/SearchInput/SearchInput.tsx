interface ISearchInput {
  value: string;
  onSearch: (value: string) => void;
}

function SearchInput({ value, onSearch }: ISearchInput) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onSearch(e.target.value)}
      placeholder="Filter Product"
    />
  );
}

export default SearchInput;
