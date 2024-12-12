import { Button, Container, Grid, TextField, Typography, IconButton, InputAdornment, Box, CircularProgress, Grid2 } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTheme } from "@mui/system"; // Hook to access the theme
const Login = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box  sx={{ flexGrow: 1 }}>
      <Grid container sx={{ height: "100vh"}}>
        {/* First Grid Item (Left side) */}
        <Grid
          item
          xs={12} // Take full width on mobile
          md={6} // Take 50% width on medium and larger screens
          sx={{
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: {
              xs: "30vh", // 30vh on small screens (mobile)
              md: "100vh", // 100vh on larger screens
            },
          }}
        >
          <Typography variant="h3" color={theme.palette.secondary.main}>
            LOGO
          </Typography>
        </Grid>

        {/* Second Grid Item (Right side) */}
        <Grid
          item
          xs={12} // Take full width on mobile
          md={6} // Take 50% width on medium and larger screens
          sx={{
            backgroundColor: theme.palette.secondary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: {
              xs: "70vh", // 70vh on small screens (mobile)
              md: "100vh", // 100vh on larger screens
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
              minWidth: "50%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              flexWrap: "wrap",
            }}
            gap={3}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
              <Typography variant="h3">Hello! Welcome Back</Typography>
            </Box>
            {/* {!forgotPassword ? ( */}
            <>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  width: {
                    xs: "70%", // 30vh on small screens (mobile)
                    md: "50%", // 100vh on larger screens
                  },
                }}
                gap={2}
              >
                <Box sx={{ width: "100%" }}>
                  <Box>
                    <Typography fontWeight={"bold"}>Login Id:</Typography>
                  </Box>
                  <TextField
                    type="text"
                    margin="dense"
                    id="loginId_input"
                    placeholder="User Code"
                    // value={username}
                    // onKeyDown={handleKeyDown}
                    // onChange={(e) => setUsername(e.target.value)}
                    required={true}
                    style={{ width: "100%", autocomplete: "none", boxSizing: "border-box" }}
                    InputProps={{
                      style: {
                        height: 40,
                        // fontSize: '0.875rem',
                      },
                      className: "autocomplete-fix",
                      classes: {
                        input: "text-transform-none",
                      },
                    }}
                  />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Box>
                    <Typography fontWeight={"bold"}>Password:</Typography>
                  </Box>
                  <TextField
                    id="password_input"
                    placeholder="Password"
                    margin="dense"
                    // onKeyDown={handleKeyDown}
                    type={showPassword ? "text" : "password"}
                    required={true}
                    sx={{ width: "100%" }}
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                      classes: {
                        input: "text-transform-none",
                      },
                      style: {
                        height: 40,
                        // fontSize: '0.875rem',
                      },
                      className: "autocomplete-fix",
                    }}
                  />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginTop: 2 }}>
                  <Button variant="contained" sx={{ width: "100%", height: 40 }}>
                    {/* {isLoading ? <CircularProgress color="inherit" size={25} /> : <>Login</>} */}
                  </Button>
                </Box>
                <Box>
                  <Link variant="body2" style={{ fontSize: 16 }}>
                    Forgot Password?
                  </Link>
                </Box>
              </Box>
            </>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
