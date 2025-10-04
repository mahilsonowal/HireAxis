import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid, // Updated import
  TextField,
  Button,
  Card,
  CardContent,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Business,
  Send,
  Message,
  Schedule
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactReason: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: "Whatsapp Only",
      details: "+91 6913613647",
      action: "Whatsapp Only"
    },
    {
      icon: <Email sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: "Email Us",
      details: "info.hireaxis@gmail.com",
      action: "Send Email"
    },
    {
      icon: <Schedule sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: "Office Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM, Sat: 10:00 AM - 4:00 PM",
    }
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
            Get in Touch
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
            Have questions? We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </Typography>
        </Container>
      </Box>

      {/* Contact Information */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {contactInfo.map((info, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                elevation={3}
                sx={{
                  textAlign: 'center',
                  p: 3,
                  height: '100%',
                  maxWidth: 300,
                  mx: 'auto',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    {info.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {info.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {info.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Form and Map */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} >
            {/* Contact Form */}
            <Grid size={{ xs: 12, md: 12 }}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Get in Touch - Whether You're Looking for Jobs or Want to Post Job Openings
                </Typography>
                
                <Box component="form">
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>Contact Reason</InputLabel>
                        <Select
                          name="contactReason"
                          value={formData.contactReason}
                          onChange={handleChange}
                          label="Contact Reason"
                        >
                          <MenuItem value="job-search">Job Search Help</MenuItem>
                          <MenuItem value="post-job">Post Job Opening</MenuItem>
                          <MenuItem value="general">General Inquiry</MenuItem>
                          <MenuItem value="partnership">Partnership</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12 }}>
                      <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        startIcon={<Send />}
                        onClick={() => {
                          const subject = encodeURIComponent(formData.subject || 'Contact from HireAxis Website');
                          const body = encodeURIComponent(
                            `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nReason: ${formData.contactReason}\n\nMessage:\n${formData.message}`
                          );
                          window.location.href = `mailto:info.hireaxis@gmail.com?subject=${subject}&body=${body}`;
                        }}
                        sx={{
                          py: 2,
                          fontSize: '1.1rem',
                          fontWeight: 'bold'
                        }}
                      >
                        Send Message via Email
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>

          </Grid>
        </Container>
      </Box>


    </Box>
  );
};

export default Contact;