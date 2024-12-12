import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StartingPage = () => {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(true);

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
        navigate('/login');
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null); // Clear the deferred prompt
    }
  };

  return (
    <Box>
      <Typography variant="h1" sx={{margin:4}}>Starting Page</Typography>
      {isInstallable && (
        <Button sx={{margin: 4}} variant="contained" onClick={handleInstallClick}>
          Install App
        </Button>
      )}
      <Button sx={{margin: 4}} variant="contained" onClick={()=> navigate('/login')} >go to Login</Button>
    </Box>
  );
};

export default StartingPage;
