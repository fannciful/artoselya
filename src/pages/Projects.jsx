import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import project5 from '../assets/project5.jpg';
import project6 from '../assets/project6.jpg';
import project7 from '../assets/project7.jpg';
import project8 from '../assets/project8.jpg';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Chaykovskoho',
    image: project1,
    description: 'An elegant private residence located on Chaykovskoho Street, featuring a minimalist architectural style, large panoramic windows, and a harmonious blend of concrete, wood, and greenery that creates a peaceful modern living space.',
  },
  {
    title: 'Yasnytsia village council',
    image: project7,
    description: 'A modern administrative building designed to serve the local community, combining functionality with a clean, approachable architectural style that reflects the identity and traditions of Yasnytsia village.',
  },
  {
    title: 'Yavoriv School',
    image: project5,
    description: 'A contemporary educational facility in Yavoriv that prioritizes sustainability, energy efficiency, and a healthy learning environment through the use of natural lighting, eco-friendly materials, and innovative spatial planning.',
  },
  {
    title: '..',
    image: project4,
    description: 'Innovative skyscraper in the heart of the city blending form and function.',
  },
  {
    title: 'Individual residential building',
    image: project3,
    description: 'A thoughtfully designed private home that blends modern aesthetics with comfort, featuring natural materials, spacious interiors, and energy-efficient solutions for contemporary living.',
  },
  {
    title: 'Yasnytsia village council',
    image: project8,
    description: 'A modern administrative building designed to serve the local community, combining functionality with a clean, approachable architectural style that reflects the identity and traditions of Yasnytsia village.',
  },
  {
    title: 'Chuvaska',
    image: project2,
    description: 'A cozy and efficient residential project that emphasizes sustainability, using eco-friendly materials, modern construction techniques, and a design that harmonizes with the surrounding environment.',
  },
  {
    title: 'Urban Skyscraper',
    image: project6,
    description: 'Innovative skyscraper in the heart of the city blending form and function.',
  },
];

function Projects() {
  return (
    <Container sx={{ mt: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Selected Projects
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          mt: 4,
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <ProjectCard
              title={project.title}
              image={project.image}
              description={project.description}
            />
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}

export default Projects;
