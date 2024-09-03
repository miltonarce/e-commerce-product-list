import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface ISearchInput {
  onSearch: (value: string) => void;
}

function SearchInput({ onSearch }: ISearchInput) {
  return (
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="text"
        onChange={e => onSearch(e.target.value)}
        placeholder="Filter Product"
        className="block w-full rounded-md border-0 py-1.5 pl-10
      pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
      focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
      />
    </div>
  );
}

export default SearchInput;
