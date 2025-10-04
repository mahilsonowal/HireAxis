import React, { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Container
} from '@mui/material';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        p: 2
      }}
    >
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Cookie Consent
          </Typography>
          <Typography variant="body2" paragraph>
            We use cookies to enhance your experience on our website. By continuing to visit this site, you agree to our use of cookies as described in our Cookie Policy.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button variant="contained" onClick={handleAccept}>
              Accept All
            </Button>
            <Button variant="outlined" onClick={() => setShowBanner(false)}>
              Reject
            </Button>
            <Button variant="text" href="/cookie-policy">
              Learn More
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CookieBanner;