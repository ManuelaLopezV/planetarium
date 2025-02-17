import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center mt-6 gap-4">
      <button
        className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ⬅ Anterior
      </button>
      <span className="text-sm sm:text-base px-4 py-2 bg-gray-800 rounded">
        {currentPage} / {totalPages}
      </span>
      <button
        className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Siguiente ➡
      </button>
    </div>
  );
};

export { Pagination };
