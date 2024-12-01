import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DataTable = () => {
  const [tableData, setTableData] = useState(null);
  const storedata = useSelector((state) => state.dashboard);

  useEffect(() => {
    const data = storedata?.dashboardData?.widgets?.[6];
    setTableData(data);
  }, [storedata]);

  return (
    <section className="h-auto w-2/3">
      <h1>{tableData?.title}</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {tableData?.columns?.map((col) => (
                <th id={col.length} scope="col" className="px-6 py-3">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData?.rows?.map((row) => (
              <tr
                id={row["Order ID"]}
                className="bg-white border-b dark:bg-[#2a2a2a] dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {row["Order ID"]}
                </th>
                <td className="px-6 py-4">{row?.Customer}</td>
                <td className="px-6 py-4">{row?.Date}</td>
                <td className="px-6 py-4">{row?.Total}</td>
                <td className="px-6 py-4">{row?.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DataTable;
