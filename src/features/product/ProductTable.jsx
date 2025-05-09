import React from "react";
import { BiEdit } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { HiClipboardList } from "react-icons/hi";
import { MdDelete } from "react-icons/md";

function ProductTable() {
  return (
    <div className="table-container">
      <table className="w-full text-center">
        <thead className="text-sm font-light border-b pb-2 text-secondary-900">
          <tr>
            <th className="w-[50%] ">Product Name</th>
            <th>Date Added</th>
            <th>Category</th>
            <th>Quantity</th>
            <th className="flex items-center justify-center">
              <HiClipboardList className="text-xl" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Eleanor Mug</td>
            <td>23/1/2002</td>
            <td>
              <span className="badge badge--secondary">Mug</span>
            </td>
            <td className="flex items-center justify-center ">
              <span className="badge badge--primary">3</span>
            </td>
            <td>
              <div className="flex items-center justify-between gap-0.5">
                <BiEdit className="text-lg text-secondary-900" />
                <MdDelete className="text-lg text-error" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
