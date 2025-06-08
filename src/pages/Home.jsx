import React from 'react';
import { Box, Typography, Button, Grow, Slide, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 3,
        pt: '80px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Пульсуючі кола */}
      {[...Array(3)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            borderRadius: '50%',
            border: `3px solid ${theme.palette.primary.main}`, // колір з теми
            width: (200 + i * 100) * 2,
            height: (200 + i * 100) * 2,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0,
            animation: `pulse 4s ease-in-out infinite`,
            animationDelay: `${i * 1.3}s`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Контент поверх */}
      <Box sx={{ zIndex: 1 }}>
        <Grow in timeout={1000}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary, // адаптивний колір
              letterSpacing: '0.1em',
              mb: 2,
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              userSelect: 'none',
            }}
          >
            ArtOselya
          </Typography>
        </Grow>

        <Slide direction="up" in timeout={1400}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 480,
              mb: 4,
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.1rem' },
              userSelect: 'none',
            }}
          >
            Showcasing elegant architecture projects blending innovation and simplicity.
          </Typography>
        </Slide>

        <Grow in timeout={1800}>
          <Button
            component={Link}
            to="/projects"
            variant="outlined"
            color="primary"
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 500,
              px: 4,
              py: 1,
            }}
          >
            View Projects
          </Button>
        </Grow>
      </Box>

      {/* Глобальні стилі для анімації */}
      <style>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </Box>
  );
}

export default Home;
