import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  Chip,
} from '@mui/material';
import {
  TrendingUp,
  People,
  Business,
  Star,
  LocationOn,
  School,
  AttachMoney,
  Schedule,
  ShoppingCart,
  Edit,
  Group,
  Search,
  Lightbulb,
  AccountBalance,
  Computer,
  Campaign,
 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const featuredJobs = [
    {
      id: 1,
      title: "Sales and Marketing Executive",
      location: "Guwahati",
      salary: "₹15,000 - ₹45,000",
      type: "Full Time/Part Time",
    },
    {
      id: 2,
      title: "Accountant",
      location: "Guwahati",
      salary: "₹15,000 - ₹25,000",
      type: "Full Time/Part Time",
    },
    {
      id: 3,
      title: "Billing Executive",
      location: "Guwahati",
      salary: "₹10,000 - ₹20,000",
      type: "Full Time/Part Time",
    }
  ];

  const navigationItems = [
    { label: 'Contact', path: '/contact' }
  ];

  const jobCategories = [
    { icon: <ShoppingCart />, name: "Retail & Product", jobs: 15, color: "#ff9800" },
    { icon: <Edit />, name: "Content Writer", jobs: 8, color: "#4caf50" },
    { icon: <Group />, name: "Human Resource", jobs: 12, color: "#2196f3" },
    { icon: <Search />, name: "Market Research", jobs: 6, color: "#9c27b0" },
    { icon: <Lightbulb />, name: "Software", jobs: 25, color: "#ff5722" },
    { icon: <AccountBalance />, name: "Finance", jobs: 18, color: "#795548" },
    { icon: <Computer />, name: "Management", jobs: 20, color: "#607d8b" },
    { icon: <Campaign />, name: "Marketing & Sales", jobs: 14, color: "#e91e63" }
  ];

  const stats = [

    { icon: <People />, number: "10,000+", label: "Job Seekers" },
    { icon: <TrendingUp />, number: "2,500+", label: "Jobs Posted" },
    { icon: <Star />, number: "95%", label: "Success Rate" }
  ];

  const benefits = [
    {
      title: "Local Focus",
      description: "Specialized in Assam job market with deep local connections",
      icon: <LocationOn sx={{ fontSize: 40, color: '#1976d2' }} />
    },
    {
      title: "Freshers Welcome",
      description: "Special opportunities and guidance for fresh graduates and newcomers",
      icon: <School sx={{ fontSize: 40, color: '#1976d2' }} />
    },
    {
      title: "Flexible Options",
      description: "Full-time, part-time, remote, and contract opportunities",
      icon: <Schedule sx={{ fontSize: 40, color: '#1976d2' }} />
    }
  ];

  return (
    <Box>

      {/* Stats Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold', color: '#333' }}
          >
            Trusted by Thousands Across Assam
          </Typography>
        
        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card
                elevation={3}
                sx={{
                  textAlign: 'center',
                  p: 3,
                  display: 'flex',
                  justifyContent: 'center', alignItems: 'center',
                  height: '100%',
                  width: 200,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ color: '#1976d2', mb: 2 }}>
                    {stat.icon}
                  </Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
      </Box>

      {/* Featured Jobs Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}
          >
            Featured Job Opportunities
          </Typography>
          
          <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {featuredJobs.map((job) => (
              <Grid item xs={12} md={4} key={job.id}>
                <Card
                  elevation={3}
                  sx={{
                    height: '100%',
                    width: {xs: 300, md: 400},
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                          {job.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {job.location}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={job.type}
                        color="primary"
                        size="small"
                        sx={{ mb: 1 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {job.location}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {job.salary}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
      </Container>

{/* Job Application CTA Section */}
<Container maxWidth="lg" sx={{ py: 6 }}>
  <Paper
    elevation={3}
    sx={{
      p: 6,
      textAlign: 'center',
      backgroundColor: '#f8f9fa',
      border: '2px solid #e3f2fd',
      borderRadius: 4,
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e3f2fd 100%)'
    }}
  >
    <Typography
      variant="h4"
      component="h2"
      sx={{ 
        fontWeight: 'bold', 
        mb: 3,
        color: '#1976d2'
      }}
    >
      Want to Apply for Jobs?
    </Typography>
    
    <Typography
      variant="h6"
      sx={{ 
        mb: 4,
        color: '#333',
        fontSize: '1.2rem'
      }}
    >
      Contact us directly or upload your resume to get started
    </Typography>

    <Box sx={{ mb: 4 }}>
      <Button
        variant="contained"
        size="large"
        sx={{
          py: 2,
          px: 4,
          fontSize: '1.1rem',
          fontWeight: 'bold',
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#1565c0'
          }
        }}
       
        onClick={() => {
          navigate('/contact');
        }}
      >
        Contact Us
      </Button>
    </Box>


    <Typography
      variant="body1"
      sx={{
        mt: 2,
        color: '#666',
        fontStyle: 'italic'
      }}
    >
      Our team will contact you with suitable job opportunities
    </Typography>
  </Paper>
</Container>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}
        >
          Why Choose HireAxis?
        </Typography>
        
        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                elevation={2}
                sx={{
                  textAlign: 'center',
                  p: 4,
                  height: '100%',
                  width: {xs: '100%', md: 400},
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg,rgb(67, 143, 206) 0%,rgb(250, 250, 250) 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
            Ready to Start Your Career Journey?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of professionals who have found their dream jobs through HireAxis
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: '#1976d2',
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
              onClick={() => {
                navigate('/jobs');
              }}
            >
              Find Jobs
            </Button>
            
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
