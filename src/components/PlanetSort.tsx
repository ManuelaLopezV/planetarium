import React from "react";

interface PlanetSortProps {
  sortOrder: string;
  onSortChange: (value: string) => void;
}

const PlanetSort: React.FC<PlanetSortProps> = ({ sortOrder, onSortChange }) => {
  return (
    <select
      className="p-2 rounded bg-gray-700 text-white border border-gray-600"
      value={sortOrder}
      onChange={(e) => onSortChange(e.target.value)}
    >
      <option value="original">Orden Original</option>
      <option value="asc">Ascendente</option>
      <option value="desc">Descendente</option>
    </select>
  );
};

export { PlanetSort };
