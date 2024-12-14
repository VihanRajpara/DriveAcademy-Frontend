import { Button, Container, Grid, TextField, Typography, IconButton, InputAdornment, Box, CircularProgress, Grid2 } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTheme } from "@mui/system"; // Hook to access the theme
import { Link, useNavigate } from "react-router-dom";
import api from "../../util/api";
import { UserContext } from "../../util/context/User";

const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [userCode, setUserCode] = useState(""); // State for user code
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error message
  const [isLoading, setIsLoading] = useState(false); // For loading state
  const { updateRefresh } = useContext(UserContext);

  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevent the default mini-info bar from appearing
      setDeferredPrompt(e);
      setIsInstallable(true); // Show the install button
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the installation prompt
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null); // Clear the deferred prompt
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "loginId_input") {
      if (value.length <= 6) {
        setUserCode(value); // Restrict user code to 6 characters
      }
    } else if (id === "password_input") {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await api.post("/auth/user/login", {
        userCode,
        password,
      });
      console.log("login DATA", response.data);
      if (response.data) {
        localStorage.setItem("jwtToken", response.data?.token);
        updateRefresh();
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ maxWidth: "100%", maxHeight: "100vh" }}>
        {/* First Grid Item (Left side) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            maxWidth: "100%",
            maxHeight: "100vh",
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "30vh", md: "100vh" },
            flexDirection: "column",
          }}
        >
          <img src={"/DRIVING Academy.png"} alt="Logo" style={{ width: "70%" }} />
        </Grid>

        {/* Second Grid Item (Right side) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            maxWidth: "100%",
            maxHeight: "100vh",
            backgroundColor: theme.palette.secondary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "70vh", md: "100vh" },
          }}
        >
          <Box
            sx={{
              maxWidth: "100%",
              maxHeight: "100vh",
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
              <Typography variant="h2">Hello! Welcome Back</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: { xs: "70%", md: "50%" },
              }}
              gap={2}
            >
              <Box sx={{ width: "100%" }}>
                <Box>
                  <Typography fontWeight={"bold"}>User Code (6 digits):</Typography>
                </Box>
                <TextField
                  type="text"
                  margin="dense"
                  id="loginId_input"
                  placeholder="User Code"
                  value={userCode}
                  onChange={handleChange}
                  required={true}
                  style={{ width: "100%", boxSizing: "border-box" }}
                  InputProps={{
                    style: { height: 40 },
                    className: "autocomplete-fix",
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
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handleChange}
                  required={true}
                  sx={{ width: "100%" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                    style: { height: 40 },
                    className: "autocomplete-fix",
                  }}
                />
              </Box>

              {error && (
                <Typography color="error" sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}

              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginTop: 2,gap:2 }}>
                <Button
                  variant="contained"
                  sx={{ flex:1, height: 40 }}
                  onClick={handleLogin} // Trigger login on button click
                  disabled={isLoading} // Disable button when loading
                >
                  {isLoading ? <CircularProgress color="inherit" size={25} /> : <>Login</>}
                </Button>
                {isInstallable && (
                  <Button
                  sx={{ flex:1, height: 40 }}
                    variant="contained"
                    onClick={handleInstallClick}
                  >
                    Install App
                  </Button>
                )}
              </Box>

              <Box>
                <Link variant="body2" style={{ fontSize: 16 }}>
                  Forgot Password?
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
