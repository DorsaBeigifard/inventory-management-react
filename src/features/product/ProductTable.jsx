// ProductTable.jsx
import React from "react";
import { BiEdit } from "react-icons/bi";
import { HiClipboardList } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import Table from "../../ui/Table";

function ProductTable() {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell className="w-[50%]">Product Name</Table.HeaderCell>
        <Table.HeaderCell>Date Added</Table.HeaderCell>
        <Table.HeaderCell>Category</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Quantity</Table.HeaderCell>
        <Table.HeaderCell className="flex items-center justify-center">
          <HiClipboardList className="text-xl" />
        </Table.HeaderCell>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Eleanor Mug</Table.Cell>
          <Table.Cell>23/1/2002</Table.Cell>
          <Table.Cell>
            <span className="badge badge--secondary">Mug</span>
          </Table.Cell>
          <Table.Cell>$ 120</Table.Cell>
          <Table.Cell className="flex items-center justify-center">
            <span className="badge badge--primary">3</span>
          </Table.Cell>
          <Table.Cell>
            <div className="flex items-center justify-between gap-0.5">
              <BiEdit className="text-lg text-secondary-900" />
              <MdDelete className="text-lg text-error" />
            </div>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

export default ProductTable;
