// ProductTable.jsx
import React from "react";
import { HiClipboardList } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import Table from "../../ui/Table";

function ProductTable({ products, updateProducts, categories }) {
  const handleDelete = (productId) => {
    const filtered = products.filter((p) => p.id !== productId);
    updateProducts(filtered);
  };

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
        {products.length === 0 ? (
          <Table.Row>
            <Table.Cell
              colSpan="6"
              className="text-center text-sm text-secondary-500 dark:text-white"
            >
              No products added yet.
            </Table.Cell>
          </Table.Row>
        ) : (
          products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>{product.productName}</Table.Cell>
              <Table.Cell>
                {new Date(product.date).toLocaleDateString("en-GB")}
              </Table.Cell>
              <Table.Cell>
                <span className="badge badge--secondary text-[12px]">
                  {product.category}
                </span>
              </Table.Cell>
              <Table.Cell>${product.price}</Table.Cell>
              <Table.Cell className="flex items-center justify-center">
                <span className="badge badge--primary">{product.quantity}</span>
              </Table.Cell>
              <Table.Cell>
                <div className="flex items-center justify-between gap-0.5">
                  {/* <BiEdit className="text-lg text-secondary-900 cursor-pointer" /> */}
                  <MdDelete
                    className="text-lg text-error cursor-pointer"
                    onClick={() => handleDelete(product.id)}
                  />
                </div>
              </Table.Cell>
            </Table.Row>
          ))
        )}
      </Table.Body>
    </Table>
  );
}

export default ProductTable;
