import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Privacy Policy
        </Typography>
        
        <Typography variant="body1" paragraph>
          Last updated: {new Date().getFullYear()}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4 }}>
            1. Information We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We collect information to provide better services to all our users. This includes:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Personal Information: Name, email address, phone number, resume/CV" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Professional Information: Job preferences, work experience, education history" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Usage Data: How you interact with our website and services" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Device Information: IP address, browser type, operating system" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            2. How We Use Your Information
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Match job seekers with suitable employment opportunities" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Communicate with you about job opportunities and updates" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Improve our services and user experience" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Comply with legal obligations" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            3. Data Sharing
          </Typography>
          <Typography variant="body1" paragraph>
            We may share your information with:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Potential employers for job matching purposes" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Service providers who assist in our operations" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Legal authorities when required by law" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            4. Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            5. Your Rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the right to:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Access and review your personal information" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Correct inaccurate data" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Request deletion of your data" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Opt-out of marketing communications" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            6. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            For any privacy-related questions, contact us at:<br />
            Email: info.hireaxis@gmail.com<br />
            Phone: 6913613647
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;