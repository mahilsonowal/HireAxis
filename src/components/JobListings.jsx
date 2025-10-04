import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Button,
  InputAdornment,
  Paper
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  Sort as SortIcon
} from '@mui/icons-material';
import JobCard from './JobCard';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { supabase } from '../supabaseClient';

const JobListings = () => {

 // Resume upload states
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [preferredJobType, setPreferredJobType] = useState('');
 const [resume, setResume] = useState(null);
 const [uploading, setUploading] = useState(false);
 const [message, setMessage] = useState('');

 // Job listing states
 const [jobs, setJobs] = useState([]);
 const [filteredJobs, setFilteredJobs] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');
 const [location, setLocation] = useState('');
 const [jobType, setJobType] = useState('');
 const [experience, setExperience] = useState('');
 const [sortBy, setSortBy] = useState('newest');

  // Real job data
  const realJobs = [
    {
      id: 1,
      title: "Resort Staff - Services Boy",
      company: "Resort Pamohi",
      location: "Pamohi, Guwahati",
      salary: "₹12,000 - ₹18,000",
      type: "Full Time",
      postedDate: "2 days ago",
      description: "Services boy position with 1-3 years experience required. Join our resort team in Pamohi.",
      requirements: ["1-3 years experience", "Hotel Management preferred", "Good communication skills"],
      experience: "1-3 years"
    },
    {
      id: 2,
      title: "Resort Staff - Chef (Tandoor)",
      company: "Resort Pamohi",
      location: "Pamohi, Guwahati",
      salary: "₹18,000 - ₹25,000",
      type: "Full Time",
      postedDate: "2 days ago",
      description: "Experienced Tandoor Chef required for resort kitchen. Must have expertise in Indian cuisine.",
      requirements: ["Tandoor expertise", "3+ years experience", "Knowledge of Indian cuisine"],
      experience: "3+ years"
    },
    {
      id: 3,
      title: "Resort Staff - Housekeeping",
      company: "Resort Pamohi",
      location: "Pamohi, Guwahati",
      salary: "₹10,000 - ₹15,000",
      type: "Full Time",
      postedDate: "2 days ago",
      description: "Housekeeping staff required for resort maintenance and cleanliness.",
      requirements: ["Housekeeping experience", "Attention to detail", "Physical fitness"],
      experience: "1+ years"
    },
    {
      id: 4,
      title: "Collection Manager",
      company: "Bajaj Finserv LTD",
      location: "Jorhat/Dibrugarh/Silchar",
      salary: "₹25,000 - ₹40,000",
      type: "Full Time",
      postedDate: "1 day ago",
      description: "Collection manager for financial services. Only local candidates preferred.",
      requirements: ["Graduate", "3+ years experience", "Field collection experience", "Local candidate"],
      experience: "3+ years"
    },
    {
      id: 5,
      title: "BDE - Business Development Executive",
      company: "Multiple Companies",
      location: "Guwahati",
      salary: "₹15,000 + Incentives",
      type: "Full Time",
      postedDate: "3 days ago",
      description: "Male staff for BDE position. Must have two-wheeler for field work.",
      requirements: ["HS qualification", "Two-wheeler mandatory", "Sales experience preferred"],
      experience: "Freshers accepted"
    },
    {
      id: 6,
      title: "Bank Staff - Car/Home Loan",
      company: "Punjab National Bank",
      location: "Guwahati",
      salary: "₹18,000 - ₹25,000",
      type: "Full Time",
      postedDate: "4 days ago",
      description: "Male/Female staff for car and home loan processing. Minimum 1 year experience required.",
      requirements: ["1+ year experience", "Banking knowledge", "Customer service skills"],
      experience: "1+ years"
    },
    {
      id: 7,
      title: "Assamese & Bengali Telecaller",
      company: "BPO/KPO Companies",
      location: "Guwahati",
      salary: "₹12,000 - ₹18,000",
      type: "Full Time",
      postedDate: "5 days ago",
      description: "Telecaller positions for Assamese and Bengali language speakers. Team leader positions also available.",
      requirements: ["Assamese/Bengali fluency", "HS qualification", "Telecalling experience"],
      experience: "Freshers accepted"
    },
    {
      id: 8,
      title: "Female Staff - Retail Showroom",
      company: "Puma Retail",
      location: "Guwahati",
      salary: "₹10,000 - ₹15,000",
      type: "Full Time",
      postedDate: "6 days ago",
      description: "Female staff required for Puma retail showroom. Minimum HS qualification required.",
      requirements: ["HS qualification", "Retail experience", "Customer service skills"],
      experience: "Freshers accepted"
    },
    {
      id: 9,
      title: "Supervisor - Site Visit",
      company: "Construction/Logistics",
      location: "Guwahati",
      salary: "Depends on experience + TA, DA",
      type: "Full Time",
      postedDate: "1 week ago",
      description: "Male supervisor for site visits. Salary based on previous work experience.",
      requirements: ["Supervision experience", "Site management", "Travel readiness"],
      experience: "2+ years"
    },
    {
      id: 10,
      title: "Telecaller - Female",
      company: "Multiple Companies",
      location: "Guwahati",
      salary: "Depends on experience + TA, DA",
      type: "Full Time",
      postedDate: "1 week ago",
      description: "Female telecaller position. HS or higher qualification required.",
      requirements: ["HS qualification", "Communication skills", "Telecalling experience"],
      experience: "Freshers accepted"
    },
    {
      id: 11,
      title: "Medical Representative",
      company: "Medicine Company",
      location: "Guwahati",
      salary: "₹14,000 + PF + ESIC",
      type: "Full Time",
      postedDate: "2 days ago",
      description: "Male staff for medicine company. Free medical treatment provided. 8 hours duty.",
      requirements: ["HS qualification", "Sales skills", "Medical knowledge preferred"],
      experience: "Freshers accepted"
    },
    {
      id: 12,
      title: "CRE - Used Car Loan",
      company: "Tata Capital LTD",
      location: "Azara, Guwahati",
      salary: "Depends on experience",
      type: "Full Time",
      postedDate: "3 days ago",
      description: "Customer Relationship Executive for used car loans. Only male candidates.",
      requirements: ["Any graduate", "Sales experience", "Loan processing knowledge"],
      experience: "1+ years"
    },
    {
      id: 13,
      title: "Multiple Positions",
      company: "Various Companies",
      location: "Guwahati",
      salary: "₹15,000 - ₹30,000",
      type: "Full Time",
      postedDate: "4 days ago",
      description: "Accounts Officer, Receptionist, Room Services, Service Engineer, Packaging Worker, Operation Manager",
      requirements: ["Relevant qualifications", "Experience in respective field"],
      experience: "1+ years"
    },
    {
      id: 14,
      title: "Relationship Officer - Axis Bank",
      company: "Axis Bank",
      location: "Guwahati",
      salary: "₹18,000 CTC + Incentives",
      type: "Full Time",
      postedDate: "5 days ago",
      description: "Male Relationship Officer for Axis Bank. 2 vacancies. Only experienced candidates.",
      requirements: ["Any graduate", "Banking experience", "Sales skills"],
      experience: "1+ years"
    },
    {
      id: 15,
      title: "Relationship Officer - ICICI Bank",
      company: "ICICI Bank",
      location: "Bongaigaon",
      salary: "Depends on experience",
      type: "Full Time",
      postedDate: "6 days ago",
      description: "Male Relationship Officer for ICICI Bank Bongaigaon branch.",
      requirements: ["HS to Graduate", "Banking experience", "Local candidate preferred"],
      experience: "1+ years"
    },
    {
      id: 16,
      title: "Multiple Positions - Westside Mall",
      company: "Westside Mall",
      location: "Guwahati",
      salary: "₹15,000 - ₹18,000 CTC",
      type: "Full Time",
      postedDate: "1 week ago",
      description: "Sales Associate (₹16,000), Beauty Advisor (₹15,000), Accounts Officer (₹18,000). Salary increase after 3 months.",
      requirements: ["Relevant experience", "Customer service skills"],
      experience: "Freshers accepted"
    },
    {
      id: 17,
      title: "CSE and BDO - Banking Sector",
      company: "Various Banks",
      location: "Multiple Locations in Assam",
      salary: "₹15,000 - ₹25,000",
      type: "Full Time",
      postedDate: "2 days ago",
      description: "Customer Service Executive and Business Development Officer positions across multiple bank branches.",
      requirements: ["Any graduate", "Banking knowledge", "Sales skills"],
      experience: "Freshers accepted"
    },
    {
      id: 18,
      title: "Area Sales Manager - Pharma/Surgical",
      company: "Pharmaceutical Companies",
      location: "Assam Region",
      salary: "₹25,000 - ₹40,000",
      type: "Full Time",
      postedDate: "3 days ago",
      description: "Area Sales Manager with experience in pharma or surgical sector sales.",
      requirements: ["8+ years pharma/surgical experience", "Sales management", "Team leadership"],
      experience: "8+ years"
    },
    {
      id: 19,
      title: "Accountant",
      company: "Various Companies",
      location: "Guwahati",
      salary: "₹15,000 - ₹25,000",
      type: "Full Time",
      postedDate: "4 days ago",
      description: "Accountant with minimum 2 years experience. B.Com/M.Com preferred with Tally and GST knowledge.",
      requirements: ["B.Com/M.Com preferred", "Tally knowledge", "GST knowledge", "2+ years experience"],
      experience: "2+ years"
    },
    {
      id: 20,
      title: "Supervisor - Logistics",
      company: "Flipkart/Blinkit/Xpress Bees",
      location: "Guwahati",
      salary: "₹15,000 - ₹18,000",
      type: "Full Time",
      postedDate: "5 days ago",
      description: "Male supervisor for logistics company. Minimum 6 months to 1 year experience in logistics.",
      requirements: ["Logistics experience", "Supervision skills", "6+ months experience"],
      experience: "6+ months"
    },
    {
      id: 21,
      title: "Retail Staff - V2/Zudio",
      company: "V2/Zudio Showroom",
      location: "Guwahati",
      salary: "₹10,000 - ₹12,000 + PF, ESIC",
      type: "Part Time/Full Time",
      postedDate: "6 days ago",
      description: "Male/Female staff for retail showroom. Part-time and full-time positions available.",
      requirements: ["HS qualification", "Retail experience", "Flexible timing"],
      experience: "Freshers accepted"
    }
  ];

  useEffect(() => {
    setJobs(realJobs);
    setFilteredJobs(realJobs);
  }, []);

  useEffect(() => {
    filterJobs();
  }, [searchTerm, location, jobType, experience, jobs]);

  const filterJobs = () => {
    let filtered = jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           job.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = !location || job.location.toLowerCase().includes(location.toLowerCase());
      const matchesJobType = !jobType || job.type === jobType;
      const matchesExperience = !experience || job.experience?.includes(experience);
      
      return matchesSearch && matchesLocation && matchesJobType && matchesExperience;
    });

    // Sort jobs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.postedDate) - new Date(a.postedDate);
        case 'oldest':
          return new Date(a.postedDate) - new Date(b.postedDate);
        case 'salary-high':
          return parseFloat(b.salary.replace(/[^\d]/g, '')) - parseFloat(a.salary.replace(/[^\d]/g, ''));
        case 'salary-low':
          return parseFloat(a.salary.replace(/[^\d]/g, '')) - parseFloat(b.salary.replace(/[^\d]/g, ''));
        default:
          return 0;
      }
    });

    setFilteredJobs(filtered);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setLocation('');
    setJobType('');
    setExperience('');
    setSortBy('newest');
  };

  const handleSubmit = async () => {
    if (!name || !phone || !preferredJobType || !resume) {
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
        .insert([{ name, phone, job_type: preferredJobType, resume_url: resumeUrl }]);

      if (insertError) throw insertError;

      setMessage('✅ Resume uploaded successfully! We\'ll contact you soon.');
      setName('');
      setPhone('');
      setPreferredJobType('');
      setResume(null);
    } catch (error) {
      console.error('Upload error:', error.message);
      setMessage('❌ Failed to upload. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Box>

      {/* Filters - Using Grid2 with new responsive system */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <TextField
              fullWidth
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>
          
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Job Type</InputLabel>
              <Select
                value={jobType}
                label="Job Type"
                onChange={(e) => setJobType(e.target.value)}
              >
                <MenuItem value="">All Types</MenuItem>
                <MenuItem value="Full Time">Full Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Remote">Remote</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <FormControl fullWidth>
              <InputLabel>Experience</InputLabel>
              <Select
                value={experience}
                label="Experience"
                onChange={(e) => setExperience(e.target.value)}
              >
                <MenuItem value="">All Levels</MenuItem>
                <MenuItem value="Freshers">Freshers</MenuItem>
                <MenuItem value="1+ years">1+ years</MenuItem>
                <MenuItem value="2+ years">2+ years</MenuItem>
                <MenuItem value="3+ years">3+ years</MenuItem>
                <MenuItem value="5+ years">5+ years</MenuItem>
                <MenuItem value="8+ years">8+ years</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Button
              variant="outlined"
              startIcon={<FilterIcon />}
              onClick={clearFilters}
              fullWidth
            >
              Clear Filters
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Active Filters */}
      {(searchTerm || location || jobType || experience) && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
            Active Filters:
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {searchTerm && (
              <Chip
                label={`Search: "${searchTerm}"`}
                onDelete={() => setSearchTerm('')}
                color="primary"
                variant="outlined"
              />
            )}
            {location && (
              <Chip
                label={`Location: "${location}"`}
                onDelete={() => setLocation('')}
                color="primary"
                variant="outlined"
              />
            )}
            {jobType && (
              <Chip
                label={`Type: "${jobType}"`}
                onDelete={() => setJobType('')}
                color="primary"
                variant="outlined"
              />
            )}
            {experience && (
              <Chip
                label={`Experience: "${experience}"`}
                onDelete={() => setExperience('')}
                color="primary"
                variant="outlined"
              />
            )}
          </Box>
        </Box>
      )}

      {/* Job Cards - Using Grid2 with wider layout */}
      {filteredJobs.length > 0 ? (
        <Grid container spacing={3}>
          {filteredJobs.map((job) => (
            <Grid size={{ xs: 12, md: 6, lg: 6 }} key={job.id}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
            No jobs found matching your criteria
          </Typography>
          <Button variant="outlined" onClick={clearFilters}>
            Clear all filters
          </Button>
        </Box>
      )}


          {/* Resume Upload Section */}
          <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
                lineHeight: 1.2,
                color: '#333'
              }}
            >
              Can't Find Your Perfect Job?
              <br />
              <Box component="span" sx={{ color: '#1976d2' }}>
                Upload Your Resume
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                color: 'black',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                maxWidth: '500px'
              }}
            >
              Let employers find you! Upload your resume and we'll match you with suitable job opportunities based on your skills and preferences.
            </Typography>
          </Grid>

          {/* Resume Upload Form */}
          <Grid item xs={12} md={6}>
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

              <Grid container spacing={2}>
                <Grid item xs={12}>
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

                <Grid item xs={12}>
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

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Preferred Job Type"
                    value={preferredJobType}
                    onChange={(e) => setPreferredJobType(e.target.value)}
                    placeholder="e.g. Data Entry, Telecom, Marketing, Banking, etc"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        backgroundColor: '#f8f9fa'
                      }
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
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

                <Grid item xs={12}>
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

export default JobListings;