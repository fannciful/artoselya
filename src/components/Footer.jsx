import React from 'react';
import { Box, Typography, Grid, Link as MuiLink } from '@mui/material';


function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: '1px solid #ddd',
        mt: 8,
        px: 4,
        py: 3,
        textAlign: 'center',
      }}
    >

      {/* Авторські права */}
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} ArtOselya. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
