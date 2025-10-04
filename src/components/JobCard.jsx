import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Avatar,
  Grid
} from '@mui/material';
import {
  LocationOn,
  Business,
  Schedule,

} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const {
    id,
    title,
    company,
    location,
    salary,
    type,
    postedDate,
    description,
    image,
    requirements,
    benefits
  } = job;

  const handleViewDetails = () => {
    navigate(`/job/${id}`);
  };

  const getJobTypeColor = (type) => {
    switch (type) {
      case 'Full Time':
        return 'success';
      case 'Part Time':
        return 'info';
      case 'Contract':
        return 'warning';
      case 'Remote':
        return 'secondary';
      default:
        return 'primary';
    }
  };

  return (
    <Card
      elevation={2}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
        border: '1px solid #f0f0f0',
        borderRadius: 3,
        '&:hover': {
          elevation: 8,
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
          border: '1px solid #e0e0e0'
        }
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>


        {/* Job Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            color: '#333',
            lineHeight: 1.3,
            fontSize: '1.1rem'
          }}
        >
          {title}
        </Typography>

        {/* Company Name */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Business sx={{ fontSize: 16, color: '#666', mr: 1 }} />
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
            {company}
          </Typography>
        </Box>

        {/* Location */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LocationOn sx={{ fontSize: 16, color: '#666', mr: 1 }} />
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
            {location}
          </Typography>
        </Box>

        {/* Salary */}
        {salary && (
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>Salary :
              { salary}
            </Typography>
          </Box>
        )}

        {/* Job Description */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.5,
            fontSize: '0.9rem'
          }}
        >
          {description}
        </Typography>

        {/* Posted Date */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Schedule sx={{ fontSize: 14, color: '#666', mr: 1 }} />
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
            Posted {postedDate}
          </Typography>
        </Box>
      </CardContent>


    </Card>
  );
};

export default JobCard;
