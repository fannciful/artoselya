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
import project9 from '../assets/project9.jpg';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Реконструкція житлового будинку',
    image: project1,
  },
  {
    title: 'Схема генплану',
    image: project7,
  },
  {
    title: 'Ескізний проєкт школи',
    image: project5,
  },
  {
    title: 'Індивідуальний житловий будинок',
    image: project4,
  },
  {
    title: 'Індивідуальний житловий будинок',
    image: project3,
  },
  {
    title: 'Будівництво народного дому з сільською радою',
    image: project9,
  },
  {
    title: 'Проєктування багатоповерхового житлового будинку',
    image: project2,
  },
  {
    title: 'Проєктування багатоповерхового житлового будинку',
    image: project6,
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
