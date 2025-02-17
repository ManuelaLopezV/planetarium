import React from "react";

interface SearchInputProps {
  search: string;
  placeholder?: string;
  onSearchChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  search,
  onSearchChange,
  placeholder = "Buscar...",
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full lg:w-1/2 p-2 rounded bg-gray-700 text-white border border-gray-600"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export { SearchInput };
