import React from "react";
import UFOReportIcon from "../../images/UFOReportIcon.png";

interface TableProps {
  headers: string[];
  rows: string[][];
  icon: string;
}

const TestimonialTable: React.FC<TableProps> = ({ headers, rows, icon }) => {
  return (
    <div className="flex justify-center overflow-x-auto drop-shadow-xl">
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
    </div>
  );
};

export default TestimonialTable;
