import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid } from "@mui/material";
import React, { useContext } from "react";
import { UserContext } from "../../util/context/User";

const UserTable = ({ userData }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        maxWidth: { xs: '90%', sm: '80%', md: '60%' }, // Responsive width for different screen sizes
        margin: 'auto',
        mt: 4,
      }}
    >
      <Table>
        {/* Table Header */}
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Field</strong>
            </TableCell>
            <TableCell>
              <strong>Value</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        {/* Table Body */}
        <TableBody>
          <TableRow>
            <TableCell>Academy</TableCell>
            <TableCell>{userData?.academy || "N/A"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>{userData?.email || "N/A"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>{userData?.id || "N/A"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Message</TableCell>
            <TableCell>{userData?.message || "N/A"}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>User Code</TableCell>
            <TableCell>{userData?.userCode || "N/A"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Dashboard = () => {
  const { user ,updateRefresh } = useContext(UserContext);
  const handleLogout = () =>{
    localStorage.removeItem("jwtToken");
    updateRefresh();
  }

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          {/* Conditionally render user data or loading */}
          {user ? (
            <UserTable userData={user} />
          ) : (
            <Typography variant="h6" align="center" sx={{ mt: 4 }}>
              Loading user data...
            </Typography>
          )}
        </Grid>

        {/* Logout Button */}
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button
            variant="contained"
            onClick={handleLogout}
            sx={{
              width: { xs: '90%', sm: '60%', md: '50%' }, // Button adjusts width based on screen size
              height: 40,
            }}
          >
            LOGOUT
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
