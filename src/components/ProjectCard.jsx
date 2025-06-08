import React from 'react';
import { Card, CardMedia, Box, Typography } from '@mui/material';

function ProjectCard({ image, alt, title, description }) {
  return (
    <Card
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 500,
        height: 300,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        '&:hover .overlay': {
          opacity: 1,
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={alt || 'Project image'}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <Box
        className="overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Card>
  );
}

export default ProjectCard;
