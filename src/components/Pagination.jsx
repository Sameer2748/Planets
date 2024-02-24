
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  
  return (
    <nav className="block items-center gap-4 text-gray-700">
      <ul className="pagination flex flex-row gap-8 justify-center items-center ">
        {currentPage > 1 ? (
          <li className="page-item">
            <button className="flex items-center gap-2 rounded-full" onClick={() => onPageChange(currentPage - 1)}>
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
            </button>
          </li>
        ):(
            <li className="page-item">
              <button className="flex items-center gap-2 rounded-full" onClick={() => onPageChange(currentPage - 1)}>
              <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
              </button>
            </li>
          )}

        <div className="flex items-center gap-5">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item  `}>
            <button className={`flex items-center gap-2 rounded-full ${currentPage == number ? "text-white rounded-full bg-gray-700 w-9 h-9 pl-3" :" text-gray-700"} `} onClick={() => onPageChange(number)}>
              {number}
            </button>
          </li>
        ))}

        </div>
        {currentPage < totalPages ? (
          <li className="page-item">
            <button className="flex items-center gap-2 rounded-full" onClick={() => onPageChange(currentPage + 1)}>
              Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </button>
          </li>
        ):(
            <li className="page-item">
            <button className="flex items-center gap-2 rounded-full"  onClick={() => onPageChange(currentPage + 1)}>
              Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
