import React from "react";
import UFOReportIcon from "../../images/UFOReportIcon.png";

interface TableProps {
  headers: string[];
  rows: string[][];
  icon: string;
}

const TestimonialTable: React.FC<TableProps> = ({ headers, rows, icon }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const rowsPerPage = 21;

  const totalPages = Math.ceil(rows.length / rowsPerPage);
  const maxPageButtons = Math.min(10, totalPages);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPageRows = rows.slice(startIndex, endIndex);

  const pageNumbers = Array.from({ length: maxPageButtons }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center overflow-x-auto drop-shadow-xl">
      <table className="mx-auto min-w-fit rounded-lg bg-slate-300 text-xs">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`border border-gray-800 p-1 font-normal ${
                  header === "Date" || header === "Location"
                    ? "min-w-[200px]"
                    : ""
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="font-normal break-words">
          {currentPageRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`border border-gray-800 p-1 ${
                    headers[cellIndex] === "Date" ||
                    headers[cellIndex] === "Location"
                      ? "min-w-[200px]"
                      : ""
                  } ${
                    headers[cellIndex] === "Description" ||
                    headers[cellIndex] === "Behavior"
                      ? "truncate max-w-[200px]"
                      : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
              <td className="border border-gray-800 drop-shadow-xl p-1">
                <button className="focus:outline-none w-[30px] h-[30px]">
                  <img
                    src={UFOReportIcon}
                    alt="View Full Witness Testimonial"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
          className="mr-2 px-2 py-1 bg-gray-200 rounded"
        >
          First
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="mr-2 px-2 py-1 bg-gray-200 rounded"
        >
          Previous
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={`px-2 py-1 bg-gray-200 rounded ${
              currentPage === number ? "bg-gray-400" : ""
            }`}
          >
            {number}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="ml-2 px-2 py-1 bg-gray-200 rounded"
        >
          Next
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className="ml-2 px-2 py-1 bg-gray-200 rounded"
        >
          Last
        </button>
      </div>
    </div>
  );
};

export default TestimonialTable;
