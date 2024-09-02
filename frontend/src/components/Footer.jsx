import React from 'react';
import { Container, Grid, Box, Typography, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <footer className='bg-slate-200'>
       <div className='container mx-auto p-4'>
       <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </div>
      <Box
      component="footer"
      sx={{
        py: 6,
        px: 3,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[900],
        color: (theme) => theme.palette.common.white,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a leading company in the industry, providing the best services for our customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" variant="body2" color="inherit" sx={{ display: 'block', mt: 1 }}>
              Home
            </Link>
            <Link href="#" variant="body2" color="inherit" sx={{ display: 'block', mt: 1 }}>
              Services
            </Link>
            <Link href="#" variant="body2" color="inherit" sx={{ display: 'block', mt: 1 }}>
              Contact
            </Link>
            <Link href="#" variant="body2" color="inherit" sx={{ display: 'block', mt: 1 }}>
              About
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              kannur,kerala,india
            </Typography>
            <Typography variant="body2">
              Email: adnanannu796@example.com
            </Typography>
            <Typography variant="body2">
              Phone:9895735589
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>
                <Facebook />
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>
                <Twitter />
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>
                <Instagram />
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>
                <LinkedIn />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
    </footer>
  )
}

export default Footer
