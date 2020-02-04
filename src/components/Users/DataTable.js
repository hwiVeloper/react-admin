import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox
} from "@material-ui/core";

export const DataTable = () => {
  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
              // checked={selectedUsers.length === users.length}
              // color="primary"
              // indeterminate={
              //   selectedUsers.length > 0 &&
              //   selectedUsers.length < users.length
              // }
              // onChange={handleSelectAll}
              />
            </TableCell>
            <TableCell>ID</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>직무</TableCell>
            <TableCell>생일</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </>
  );
};
