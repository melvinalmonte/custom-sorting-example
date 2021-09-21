import { Box, Flex, Spacer, Text } from "@chakra-ui/layout";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import React from "react";
import { useTable, useSortBy } from "react-table";

const UserTable = ({ columns, data, onSort }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { sortBy },
  } = useTable(
    {
      columns,
      data,
      manualSortBy: true,
    },
    useSortBy
  );
  React.useEffect(() => {
    onSort(sortBy);
  }, [onSort, sortBy]);

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                <Flex>
                  <Box>
                    <Text>{column.render("Header")}</Text>
                  </Box>
                  <Spacer />
                  {/* Add a sort direction indicator */}
                  <Box>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </Box>
                </Flex>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>;
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default UserTable;
