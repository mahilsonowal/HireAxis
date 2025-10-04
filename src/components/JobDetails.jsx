import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Divider,
  Avatar,
  Paper
} from '@mui/material';
import {
  LocationOn,
  Business,
  Schedule,
  AttachMoney,
  People,
  Star,
  Share,
  BookmarkBorder,
  Bookmark
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { supabase } from '../supabaseClient'; // adjust path if needed

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Sample job data - in a real app, this would be fetched from an API
  const job = {
    id: parseInt(id),
    title: "Senior Software Engineer",
    company: "TechCorp Assam",
    location: "Guwahati, Assam",
    salary: "₹8,00,000 - ₹15,00,000",
    type: "Full Time",
    postedDate: "2 days ago",
    description: `We are looking for a skilled Senior Software Engineer to join our growing team in Guwahati. You will work on cutting-edge projects and collaborate with talented developers to build innovative solutions.

As a Senior Software Engineer, you will be responsible for designing, developing, and maintaining high-quality software applications. You will work closely with cross-functional teams to deliver products that meet business requirements and exceed user expectations.

Key responsibilities include:
• Design and develop scalable web applications using modern technologies
• Collaborate with product managers and designers to define technical requirements
• Write clean, maintainable, and efficient code
• Participate in code reviews and mentor junior developers
• Troubleshoot and debug applications to optimize performance
• Stay up-to-date with emerging technologies and industry best practices`,
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of experience in software development",
      "Strong proficiency in React, Node.js, and JavaScript",
      "Experience with databases (MongoDB, PostgreSQL)",
      "Knowledge of cloud platforms (AWS, Azure)",
      "Excellent problem-solving and communication skills",
      "Experience with Agile development methodologies"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Health insurance and wellness programs",
      "Flexible working hours and remote work options",
      "Professional development opportunities",
      "Modern office environment in Guwahati",
      "Team building activities and events"
    ],
    image: "/jobs/IMG-20251003-WA0017.jpg",
    companySize: "50-200 employees",
    industry: "Technology",
    rating: 4.5,
    reviews: 24
  };

  const handleApply = () => {
    // Handle job application
    console.log('Applying for job:', job.id);
  };

  const handleSave = () => {
    // Handle saving job
    console.log('Saving job:', job.id);
  };

  const handleShare = () => {
    // Handle sharing job
    console.log('Sharing job:', job.id);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} md={8}>
          {/* Job Header */}
          <Card elevation={3} sx={{ mb: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar
                    src={job.image}
                    alt={job.company}
                    sx={{ width: 80, height: 80, mr: 3 }}
                  />
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {job.title}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                      {job.company}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Star sx={{ fontSize: 20, color: '#ff9800' }} />
                      <Typography variant="body2">
                        {job.rating} ({job.reviews} reviews)
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="outlined"
                    startIcon={<BookmarkBorder />}
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<Share />}
                    onClick={handleShare}
                  >
                    Share
                  </Button>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                <Chip
                  label={job.type}
                  color="primary"
                  sx={{ fontWeight: 'bold' }}
                />
                <Chip
                  label={job.industry}
                  variant="outlined"
                />
                <Chip
                  label={job.companySize}
                  variant="outlined"
                />
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationOn sx={{ fontSize: 20, color: '#666', mr: 1 }} />
                    <Typography variant="body1">{job.location}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <AttachMoney sx={{ fontSize: 20, color: '#666', mr: 1 }} />
                    <Typography variant="body1">{job.salary}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Schedule sx={{ fontSize: 20, color: '#666', mr: 1 }} />
                    <Typography variant="body1">Posted {job.postedDate}</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <People sx={{ fontSize: 20, color: '#666', mr: 1 }} />
                    <Typography variant="body1">{job.companySize}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Job Description */}
          <Card elevation={2} sx={{ mb: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                Job Description
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, whiteSpace: 'pre-line' }}>
                {job.description}
              </Typography>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card elevation={2} sx={{ mb: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                Requirements
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {job.requirements.map((req, index) => (
                  <Typography
                    key={index}
                    component="li"
                    variant="body1"
                    sx={{ mb: 1, lineHeight: 1.6 }}
                  >
                    {req}
                  </Typography>
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card elevation={2} sx={{ mb: 3 }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                Benefits & Perks
              </Typography>
              <Grid container spacing={2}>
                {job.benefits.map((benefit, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          backgroundColor: '#1976d2',
                          mr: 2,
                          flexShrink: 0
                        }}
                      />
                      <Typography variant="body1">{benefit}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* Apply Section */}
          <Paper elevation={3} sx={{ p: 3, mb: 3, position: 'sticky', top: 100 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Ready to Apply?
            </Typography>
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={handleApply}
              sx={{
                py: 2,
                mb: 2,
                fontSize: '1.1rem',
                fontWeight: 'bold'
              }}
            >
              Apply Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              onClick={handleSave}
              sx={{ mb: 2 }}
            >
              Save Job
            </Button>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
              This job was posted 2 days ago and will expire in 28 days.
            </Typography>
          </Paper>

          {/* Company Info */}
          <Card elevation={2} sx={{ mb: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                About {job.company}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  src={job.image}
                  alt={job.company}
                  sx={{ width: 50, height: 50, mr: 2 }}
                />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {job.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {job.industry} • {job.companySize}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                TechCorp Assam is a leading technology company specializing in innovative 
                software solutions for businesses across Northeast India.
              </Typography>
              <Button variant="outlined" fullWidth>
                View Company Profile
              </Button>
            </CardContent>
          </Card>

          {/* Similar Jobs */}
          <Card elevation={2}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Similar Jobs
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Frontend Developer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Digital Solutions Assam
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹6,00,000 - ₹10,00,000
                  </Typography>
                </Box>
                <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Full Stack Developer
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Startup Hub Guwahati
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹5,00,000 - ₹8,00,000
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default JobDetails;
