import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  CircularProgress
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { supabase } from '../supabaseClient'; // adjust path if needed

const Hero = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [jobType, setJobType] = useState('');
  const [resume, setResume] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!name || !phone || !jobType || !resume) {
      setMessage('⚠️ Please fill all fields and upload your resume.');
      return;
    }

    setUploading(true);
    setMessage('');

    try {
      // Upload resume file
      const fileName = `${Date.now()}_${resume.name}`;
      const { data: fileData, error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(fileName, resume);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: publicUrlData } = supabase
        .storage
        .from('resumes')
        .getPublicUrl(fileName);

      const resumeUrl = publicUrlData.publicUrl;

      // Insert details in Supabase table
      const { error: insertError } = await supabase
        .from('applications')
        .insert([{ name, phone, job_type: jobType, resume_url: resumeUrl }]);

      if (insertError) throw insertError;

      setMessage('✅ Resume uploaded successfully! We\'ll contact you soon.');
      setName('');
      setPhone('');
      setJobType('');
      setResume(null);
    } catch (error) {
      console.error('Upload error:', error.message);
      setMessage('❌ Failed to upload. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        py: { xs: 6, md: 15 },
        position: 'relative',
        backgroundImage: 'url(/image/hero1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        minHeight: { xs: '80vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
                color: '#333'
              }}
            >
              The Easiest Way
              <br /> to Get Your{' '}
              <Box component="span" sx={{ color: '#2196f3' }}>
                New Job
              </Box>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: 'black',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.6,
                maxWidth: '500px'
              }}
            >
              Each month, more than 1000 job seekers turn to HireAxis in their search for work,
              making over 100 applications every single day across Assam.
            </Typography>
          </Grid>

          {/* Right Side - Drop Your Resume Form */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 4,
                backgroundColor: 'white',
                border: '1px solid #e0e0e0'
              }}
            >
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  mb: 3,
                  fontWeight: 'bold',
                  color: '#333',
                  textAlign: 'center'
                }}
              >
                Drop Your Resume
              </Typography>

              <Grid container spacing={2} >
                <Grid item xs={12} sx={ { width: 300}}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: '#f8f9fa'
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12} sx={ { width: 300}}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: '#f8f9fa'
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12} sx={ { width: 300}}>
                  <TextField
                    fullWidth
                    label="Preferred Job Type"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    placeholder="e.g.Data Entry,  Telecom,Marketing, Banking, etc"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: '#f8f9fa'
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12} sx={ { width: 300}}>
                  <Button
                    variant="outlined"
                    component="label"
                    startIcon={<UploadFileIcon />}
                    sx={{
                      width: '100%',
                      py: 1.5,
                      borderRadius: 2,
                      borderColor: '#1976d2',
                      color: '#1976d2',
                      '&:hover': {
                        borderColor: '#1565c0',
                        backgroundColor: 'rgba(25, 118, 210, 0.04)'
                      }
                    }}
                  >
                    {resume ? resume.name : 'Upload Resume (PDF/DOC)'}
                    <input
                      type="file"
                      hidden
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setResume(e.target.files[0])}
                    />
                  </Button>
                </Grid>

                <Grid item xs={12} sx={ { width: 300}}>
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                    disabled={uploading}
                    sx={{
                      py: 2,
                      borderRadius: 2,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      backgroundColor: '#1976d2',
                      '&:hover': {
                        backgroundColor: '#1565c0'
                      }
                    }}
                  >
                    {uploading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      'Submit Resume'
                    )}
                  </Button>
                </Grid>
              </Grid>

              {message && (
                <Typography
                  sx={{
                    mt: 3,
                    color: message.includes('✅') ? 'green' : 'red',
                    textAlign: 'center',
                    fontWeight: 'medium'
                  }}
                >
                  {message}
                </Typography>
              )}

              {/* Note Section */}
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontStyle: 'italic' }}
                >
                  <strong>Note:</strong> A small registration charge will be collected later.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;