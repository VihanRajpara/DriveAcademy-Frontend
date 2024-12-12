import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const StartingPage = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstallable, setIsInstallable] = useState(false);
  
    useEffect(() => {
      const handleBeforeInstallPrompt = (e) => {
        e.preventDefault(); // Prevent the default mini-info bar from appearing
        setDeferredPrompt(e);
        setIsInstallable(true); // Show the install button
      };
  
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
  
      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      };
    }, []);

    const handleInstallClick = async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt(); // Show the installation prompt
          const choiceResult = await deferredPrompt.userChoice;
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          setDeferredPrompt(null); // Clear the deferred prompt
        }
      };


  return (
    <div>
      {/* <h1>Starting Page</h1> */}
      {isInstallable && (
        <Button variant='contained' onClick={handleInstallClick}>Install App</Button>
      )}
    </div>
  );
};

export default StartingPage;
