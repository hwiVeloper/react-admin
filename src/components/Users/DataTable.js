import {
  Avatar,
  Checkbox,
  FormControlLabel,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from "@material-ui/core";
import { Person } from "@material-ui/icons";
import React, { useState } from "react";
import data from "./data";

const userData = data;

export const DataTable = props => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [isDense, setIsDense] = useState(true);

  const handleSelectAll = e => {
    let selectedUsers = [];

    if (e.target.checked) {
      selectedUsers = userData.map(item => item.id);
    } else {
      selectedUsers = [];
    }

    setSelectedUsers(selectedUsers);
  };

  const handleSelectOne = (e, index) => {
    const selectedIndex = selectedUsers.indexOf(index);
    console.log(selectedIndex);
    let newSelectedUsers = [];

    if (selectedIndex === -1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers, index);
    } else if (selectedIndex === 0) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
    } else if (selectedIndex === selectedUsers.length - 1) {
      newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedUsers = newSelectedUsers.concat(
        selectedUsers.slice(0, selectedIndex),
        selectedUsers.slice(selectedIndex + 1)
      );
    }

    setSelectedUsers(newSelectedUsers);
  };

  const handlePageChange = (e, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = e => {
    setRowsPerPage(e.target.value);
  };

  const handleDenseChange = e => {
    setIsDense(e.target.checked);
  };

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={isDense}
            onChange={handleDenseChange}
            color="primary"
          />
        }
        style={{ marginBottom: 5 }}
        label="테이블 좁게?"
      />
      <TableContainer>
        <Table size={isDense ? "small" : "medium"} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedUsers.length === userData.length}
                  color="primary"
                  indeterminate={
                    selectedUsers.length > 0 &&
                    selectedUsers.length < userData.length
                  }
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>이름</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>직무</TableCell>
              <TableCell>생일</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map(item => (
                <TableRow
                  key={item.id}
                  hover
                  selected={selectedUsers.indexOf(item.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedUsers.indexOf(item.id) !== -1}
                      color="primary"
                      value="true"
                      onChange={e => handleSelectOne(e, item.id)}
                    />
                  </TableCell>
                  <TableCell>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Avatar sizes="small" style={{ marginRight: 10 }}>
                        <Person />
                      </Avatar>
                      <Typography variant="body1">{item.name}</Typography>
                    </div>
                  </TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>{item.birthday}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={userData.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </>
  );
};
