import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

const TermsOfService = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Terms of Service
        </Typography>
        
        <Typography variant="body1" paragraph>
          Last updated: {new Date().getFullYear()}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            1. Acceptance of Terms
          </Typography>
          <Typography variant="body1" paragraph>
            By accessing and using HireAxis, you accept and agree to be bound by these Terms of Service.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            2. User Accounts
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="You must be at least 18 years old to create an account" />
            </ListItem>
            <ListItem>
              <ListItemText primary="You are responsible for maintaining the confidentiality of your account" />
            </ListItem>
            <ListItem>
              <ListItemText primary="You must provide accurate and complete information" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            3. Job Seeker Responsibilities
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Provide truthful and accurate information in your profile and resume" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Do not misrepresent your qualifications or experience" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Respect the confidentiality of job opportunities" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            4. Service Fees
          </Typography>
          <Typography variant="body1" paragraph>
            HireAxis may charge a nominal registration fee for premium services. All fees will be clearly communicated before any payment is required.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            5. Prohibited Activities
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Posting false or misleading information" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Harassing other users or employers" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Using the service for any illegal purpose" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Attempting to gain unauthorized access to the system" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            6. Intellectual Property
          </Typography>
          <Typography variant="body1" paragraph>
            All content on HireAxis, including logos, text, and graphics, is the property of HireAxis and protected by intellectual property laws.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            7. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            HireAxis is not responsible for employment decisions made by employers or the actions of job seekers. We facilitate connections but do not guarantee employment.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            8. Termination
          </Typography>
          <Typography variant="body1" paragraph>
            We reserve the right to terminate or suspend accounts that violate these terms.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            9. Governing Law
          </Typography>
          <Typography variant="body1" paragraph>
            These terms are governed by the laws of India and the state of Assam.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsOfService;