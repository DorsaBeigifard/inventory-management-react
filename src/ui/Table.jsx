function Table({ children }) {
  return (
    <div className="table-container">
      <table className="w-full text-center">{children}</table>
    </div>
  );
}

function TableHeader({ children }) {
  return (
    <thead className="text-sm font-light border-b pb-2 text-secondary-900">
      <tr>{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

function TableCell({ children, className = "" }) {
  return <td className={className}>{children}</td>;
}

function TableHeaderCell({ children, className = "" }) {
  return <th className={className}>{children}</th>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.HeaderCell = TableHeaderCell;

export default Table;
