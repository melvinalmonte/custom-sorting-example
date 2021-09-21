import { Box, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import users from "./users.json";
import UserTable from "./UserTable";

function App() {
  const [sortInfo, setSortInfo] = React.useState([]);
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
    []
  );

  const handleSort = React.useCallback((sortBy) => {
    //simulate remove server sort here
    setSortInfo(sortBy);
  }, []);

  return (
    <VStack>
      <Box w={"100%"}>
        <UserTable data={users} columns={columns} onSort={handleSort} />
      </Box>
      <Box p={2} w={"100%"}>
        <Text>Sort Info: </Text>
        {console.log(typeof sortInfo)}
        <pre>{sortInfo.length > 0 ? JSON.stringify(sortInfo, null, 2) : "Unsorted"}</pre>
      </Box>
    </VStack>
  );
}

export default App;
