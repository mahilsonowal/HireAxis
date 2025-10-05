import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button
} from '@mui/material';
import {
  Handshake,
  Business,
  Security,
  ConnectWithoutContact,
  VerifiedUser
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Handshake />,
      title: "Trusted Partnerships",
      description: "We work exclusively with verified and reliable employment agencies."
    },
    {
      icon: <Security />,
      title: "Secure Connections",
      description: "Your information is safe as we connect you with trusted partners only."
    },
    {
      icon: <ConnectWithoutContact />,
      title: "Direct Bridge",
      description: "We serve as the direct bridge between job seekers and employment agencies."
    },
    {
      icon: <VerifiedUser />,
      title: "Verified Agencies",
      description: "All partner agencies are thoroughly vetted for credibility and reliability."
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Register with HireAxis",
      description: "Create your profile and upload your resume"
    },
    {
      step: "2",
      title: "Get Connected",
      description: "We match you with verified employment agencies"
    },
    {
      step: "3",
      title: "Agency Contact",
      description: "Trusted agencies contact you directly with job opportunities"
    },
    {
      step: "4",
      title: "Get Hired",
      description: "Start your new job through our partner agencies"
    }
  ];

  const partnerBenefits = [
    "Direct access to verified employment agencies",
    "Trusted and reliable partner companies",
    "Wide network of hiring agencies",
    "Secure and confidential process",
    "Regular job opportunities"
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
            About HireAxis
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
            Your trusted broker connecting job seekers with verified employment agencies across Assam. 
            We bridge the gap between talent and reliable hiring partners.
          </Typography>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%', p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Handshake sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Our Role
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                HireAxis acts as a trusted broker, connecting job seekers with verified employment 
                agencies and companies. We don't directly employ, but we ensure you get connected 
                with reliable partners who can provide genuine job opportunities across Assam and Northeast India.
              </Typography>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card elevation={3} sx={{ height: '100%', p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Business sx={{ fontSize: 40, color: '#1976d2', mr: 2 }} />
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  How We Work
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                We maintain partnerships with trusted employment agencies. When you register with us, 
                we share your profile with these verified partners who then contact you directly with 
                suitable job opportunities that match your skills and preferences.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* How It Works */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}
          >
            How HireAxis Connects You
          </Typography>
          
          <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {howItWorks.map((step, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    width: 300,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        backgroundColor: '#1976d2',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        mx: 'auto',
                        mb: 2
                      }}
                    >
                      {step.step}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold' }}
        >
          Why Choose HireAxis?
        </Typography>
        
        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={2}
                sx={{
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  width: 300,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ color: '#1976d2', mb: 2, fontSize: 40 }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Partner Benefits */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                sx={{ mb: 3, fontWeight: 'bold' }}
              >
                Benefits for Job Seekers
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {partnerBenefits.map((benefit, index) => (
                  <Box component="li" key={index} sx={{ mb: 2 }}>
                    <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Story */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
              HireAxis operates as a specialized broker in the employment ecosystem. We recognized 
              that many job seekers struggle to find reliable employment agencies, while trustworthy 
              agencies need qualified candidates.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem', mb: 3 }}>
              Our unique model ensures that when you register with HireAxis, you're not just applying 
              to jobs - you're gaining access to a network of verified employment partners who can 
              provide ongoing job opportunities and career support.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
              We take pride in being the bridge that connects talented individuals with agencies 
              that can truly help advance their careers in Assam and beyond.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Ready to Get Connected?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary' }}>
          Join thousands who have found reliable employment through our trusted agency partners
        </Typography>
        <Button
          component={Link}
          to="/contact"
          variant="contained"
          size="large"
          sx={{
            py: 2,
            px: 4,
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          Contact Us
        </Button>
      </Container>
    </Box>
  );
};

export default About;