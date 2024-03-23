import React from "react";

export default function HistoryTable(props: { data: any[][] }) {
  return (
    <div className="flex flex-col my-2">
      <div className="-m-1.5 overflow-x-auto">
        <div className="inline-block min-w-full p-1.5 align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500"
                  >
                    To
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium uppercase text-gray-500"
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-black">
                {props.data.map((val, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-100 dark:hover:bg-[#ab9ff2]"
                  >
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium ">
                      {val[0]}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm ">
                      {val[1]} ether
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
