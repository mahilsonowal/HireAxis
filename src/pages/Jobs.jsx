import React from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';
import JobListings from '../components/JobListings';

const Jobs = () => {
  const filterChips = [
    'Services Boy', 'Chef', 'Housekeeping', 'Collection Manager', 
    'Business Development', 'Bank Loan', 'Telecaller', 'Retail Staff',
    'Site Supervisor', 'Medical Rep', 'Car Loan', 'Multiple Positions',
    'Relationship Officer', 'Banking Sector', 'Sales Manager', 'Accountant',
    'Logistics Supervisor', 'Showroom Staff', 'Finance', 'Marketing'
  ];

  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Page Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
            Jobs of the day
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
            Search and connect with the right candidates faster
          </Typography>
          
          {/* Filter Chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {filterChips.map((chip) => (
              <Chip
                key={chip}
                label={chip}
                variant="outlined"
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    borderColor: '#1976d2'
                  }
                }}
              />
            ))}
          </Box>
        </Box>

        <JobListings />
      </Container>
    </Box>
  );
};

export default Jobs;
