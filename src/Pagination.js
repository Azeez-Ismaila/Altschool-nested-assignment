import React from "react";

const Pagination = ({ paginate, nPages, nextPage, prevPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  return (
    <nav>
      <ul className="flex gap-1 md:gap-6 justify-center">
        <li>
          <button
            className="bg-blue-500  md:px-4 text-white text-xl rounded-lg hover:bg-white hover:text-blue-500"
            onClick={prevPage}
          >
            Prev
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className=" bg-blue-500 px-1 md:px-4 text-white text-xl rounded-lg hover:bg-white hover:text-blue-500"
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            className="bg-blue-500 md:px-4 text-white text-xl rounded-lg hover:bg-white hover:text-blue-500"
            onClick={nextPage}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
