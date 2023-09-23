import React from "react";

interface TableProps {
  headers: string[];
  rows: string[][];
}

const TestimonialTable: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <div className="flex justify-center overflow-x-auto">
      <table className="mx-auto min-w-fit rounded-xl bg-slate-300 text-xs">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={`border border-gray-800 p-1 font-normal text-white ${
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
          {rows.map((row, rowIndex) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestimonialTable;
