import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import WorkIcon from '@mui/icons-material/Work';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const drawerContent = (
    <Box sx={{ width: 280, p: 3 }}>
      <Box sx={{ mb: 3, pb: 2, borderBottom: '1px solid #e0e0e0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <WorkIcon sx={{ mr: 1, color: '#1976d2', fontSize: 28 }} />
          <Typography
            variant="h6"
            sx={{
              color: '#1976d2',
              fontWeight: 'bold',
              fontSize: '1.3rem'
            }}
          >
            HireAxis
          </Typography>
        </Box>
      </Box>
      
      <List sx={{ px: 0 }}>
        {navigationItems.map((item) => (
          <ListItem
            key={item.label}
            component={Link}
            to={item.path}
            onClick={() => setMobileMenuOpen(false)}
            sx={{
              borderRadius: 2,
              mb: 1,
              '&:hover': {
                backgroundColor: '#f8f9fa'
              },
              transition: 'background-color 0.3s ease'
            }}
          >
            <ListItemText 
              primary={item.label}
              sx={{
                '& .MuiListItemText-primary': {
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#333'
                }
              }}
            />
          </ListItem>
        ))}
      </List>
      
      <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #e0e0e0' }}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#1976d2',
            color: 'white',
            textTransform: 'none',
            py: 1.5,
            borderRadius: 2,
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#1565c0'
            }
          }}
          onClick={() => {
            navigate('/jobs');
            setMobileMenuOpen(false);
          }}
        >
          Find Jobs
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Top notification bar */}
      <Box sx={{ 
        backgroundColor: '#f5f5f5', 
        py: 1, 
        borderBottom: '1px solid #e0e0e0',
        display: { xs: 'none', md: 'block' }
      }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
             Welcome to HireAxis - Your Gateway to Career Opportunities in Assam
          </Typography>
        </Container>
      </Box>

      <AppBar position="sticky" sx={{ 
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
        borderBottom: '1px solid #e0e0e0',
        backdropFilter: 'blur(10px)'
      }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ py: { xs: 1, md: 2 }, px: 0 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <WorkIcon sx={{ 
                mr: 1, 
                color: '#1976d2', 
                fontSize: { xs: 28, md: 32 }
              }} />
              <Typography
                variant="h5"
                component={Link}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: '#1976d2',
                  fontWeight: 'bold',
                  fontSize: { xs: '1.4rem', md: '1.8rem' },
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#1565c0'
                  }
                }}
              >
                HireAxis
              </Typography>
            </Box>

            {/* Spacer to push content to the right */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Right side - Navigation and buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* Desktop Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1 }, mr: 2 }}>
                  {navigationItems.map((item) => (
                    <Button
                      key={item.label}
                      component={Link}
                      to={item.path}
                      sx={{
                        textTransform: 'none',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        fontWeight: 500,
                        color: '#333',
                        px: { xs: 1.5, md: 2 },
                        py: 1,
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#f8f9fa',
                          color: '#1976d2',
                          transform: 'translateY(-1px)'
                        },
                        '&.active': {
                          color: '#1976d2',
                          backgroundColor: 'rgba(25, 118, 210, 0.08)',
                          borderBottom: '2px solid #1976d2'
                        }
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              )}

              {/* Find Jobs Button */}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#1976d2',
                  color: 'white',
                  textTransform: 'none',
                  px: { xs: 2, sm: 3 },
                  py: 1,
                  borderRadius: 2,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  minWidth: { xs: 'auto', sm: '120px' },
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#1565c0',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)'
                  },
                  transition: 'all 0.3s ease'
                }}
                onClick={() => navigate('/jobs')}
              >
                Find Jobs
              </Button>

              {/* Mobile menu button */}
              {isMobile && (
                <IconButton
                  onClick={handleMobileMenuToggle}
                  sx={{ 
                    ml: 1,
                    color: '#333',
                    '&:hover': {
                      backgroundColor: '#f5f5f5'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        sx={{ 
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
          }
        }}
      >
        {drawerContent}
      </Drawer>


    </>
  );
};

export default Header;
