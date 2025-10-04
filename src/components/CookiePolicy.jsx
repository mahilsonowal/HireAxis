import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Button
} from '@mui/material';

const CookiePolicy = () => {
  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    window.location.reload();
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Cookie Policy
        </Typography>
        
        <Typography variant="body1" paragraph>
          Last updated: {new Date().getFullYear()}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            What Are Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better user experience.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Types of Cookies We Use
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Essential Cookies"
                secondary="Required for basic website functionality and cannot be disabled"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Performance Cookies"
                secondary="Help us understand how visitors interact with our website"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Functionality Cookies"
                secondary="Remember your preferences and settings"
              />
            </ListItem>
            <ListItem>
              <ListItemText 
                primary="Analytics Cookies"
                secondary="Help us improve our services by collecting anonymous data"
              />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            How We Use Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            We use cookies to:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Remember your login session" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Save your job search preferences" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Analyze website traffic and usage patterns" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Improve our website performance" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Third-Party Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            We may use third-party services that place cookies on your device for:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Analytics (Google Analytics)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Payment processing" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Social media integrations" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Managing Cookies
          </Typography>
          <Typography variant="body1" paragraph>
            You can control cookie settings through your browser:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Chrome: Settings → Privacy and security → Cookies" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Firefox: Options → Privacy & Security → Cookies" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Safari: Preferences → Privacy → Cookies" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Your Consent
          </Typography>
          <Typography variant="body1" paragraph>
            By using our website, you consent to our use of cookies as described in this policy.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Contact
          </Typography>
          <Typography variant="body1" paragraph>
            For questions about our cookie policy, contact us at info.hireaxis@gmail.com
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default CookiePolicy;