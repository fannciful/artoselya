import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Divider, 
  Grid, 
  Avatar, 
  Card,
  CardContent,
  Chip,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';
import { 
  EmojiObjects, 
  Public, 
  Architecture,
  Groups,
  Timeline,
  Star
} from '@mui/icons-material';

function About() {
  const teamMembers = [
    { 
      name: 'Olha Hotsii', 
      role: 'Founder & Lead Architect',
      experience: '15+ years',
      specialization: 'Sustainable Design'
    },
    { 
      name: 'Oleh Hotsii', 
      role: 'Sustainability Consultant',
      experience: '12+ years',
      specialization: 'Green Building'
    },
    { 
      name: 'Yuliia Hotsii', 
      role: 'Interior Design Lead',
      experience: '10+ years',
      specialization: 'Modern Interiors'
    },
  ];

  const coreValues = [
    {
      icon: <EmojiObjects fontSize="large" color="primary" />,
      title: 'Innovation',
      description: 'We push boundaries with cutting-edge technology and creative solutions that define tomorrow\'s architecture.'
    },
    {
      icon: <Public fontSize="large" color="primary" />,
      title: 'Sustainability',
      description: 'Environmental responsibility drives our design philosophy, integrating eco-friendly materials and energy-efficient strategies.'
    },
    {
      icon: <Architecture fontSize="large" color="primary" />,
      title: 'Craftsmanship',
      description: 'Every detail is meticulously crafted, combining traditional artistry with modern precision to create timeless spaces.'
    }
  ];

  const achievements = [
    'Award-winning sustainable designs',
    'LEED Platinum certified projects',
    '50+ completed architectural projects',
    'International recognition'
  ];

  const testimonials = [
    {
      name: 'Michael Smith',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'ArchiDesign transformed our workspace into an inspiring environment. Their attention to detail and sustainable approach are unmatched.'
    },
    {
      name: 'Sofia Martinez',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'The team was professional, creative, and truly cared about the impact of their designs. Highly recommend ArchiDesign!'
    },
    {
      name: 'David Johnson',
      photo: 'https://randomuser.me/api/portraits/men/65.jpg',
      quote: 'Their innovative solutions helped us reduce costs while creating beautiful, functional spaces.'
    },
        {
      name: 'Michael Smith',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'ArchiDesign transformed our workspace into an inspiring environment. Their attention to detail and sustainable approach are unmatched.'
    },
    {
      name: 'Sofia Martinez',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'The team was professional, creative, and truly cared about the impact of their designs. Highly recommend ArchiDesign!'
    },
    {
      name: 'David Johnson',
      photo: 'https://randomuser.me/api/portraits/men/65.jpg',
      quote: 'Their innovative solutions helped us reduce costs while creating beautiful, functional spaces.'
    }
  ];

  return (
    <Container sx={{ mt: 10, mb: 8 }}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4" // smaller header
          align="center"
          gutterBottom
          sx={{ 
            fontWeight: 'bold', 
            letterSpacing: 1,
            color: 'primary.main',
            mb: 2
          }}
        >
          About Our Company
        </Typography>
        <Divider 
          sx={{ 
            width: 100, 
            borderBottomWidth: 4, 
            mx: 'auto', 
            mb: 6, 
            borderColor: 'primary.main',
            borderRadius: 2
          }} 
        />
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
<Card 
  elevation={6}
  sx={(theme) => ({
    mb: 6,
    borderRadius: 4,
    overflow: 'visible',
    background: theme.palette.mode === 'dark'
      ? theme.palette.background.paper
      : 'linear-gradient(135deg, #f8f9ff, #ffffff)',
    color: theme.palette.text.primary,
  })}
>
  <CardContent sx={{ p: 4, textAlign: 'center' }}>
    <Typography 
      variant="h5"
      gutterBottom 
      sx={{ 
        fontWeight: 'bold',
        color: 'primary.main',
        mb: 3
      }}
    >
      Shaping Tomorrow's Architecture Today
    </Typography>
    <Typography 
      variant="body2"
      sx={{ 
        lineHeight: 1.8,
        color: 'text.primary',
        maxWidth: '800px',
        mx: 'auto',
        fontSize: '0.95rem'
      }}
    >
      <strong>ArtOselya</strong> is a visionary architecture studio where innovation meets sustainability. 
      We create spaces that don't just shelter, but inspire, heal, and connect communities. Our designs 
      tell stories of human experience while respecting our planet's future.
    </Typography>
  </CardContent>
</Card>

      </motion.div>

      {/* Our Approach */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" // smaller heading
              gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                color: 'text.primary',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Timeline color="primary" />
              Our Design Process
            </Typography>
            <Typography 
              variant="body2" // smaller body font
              paragraph 
              sx={{ 
                lineHeight: 1.8,
                color: 'text.secondary',
                fontSize: '0.95rem'
              }}
            >
              From initial concept to final construction, we embrace collaboration at every stage. 
              Our process involves deep listening, community engagement, and iterative design that 
              ensures each project reflects both functional excellence and emotional resonance.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold', 
                color: 'text.primary',
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Star color="primary" />
              Our Achievements
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
              {achievements.map((achievement, index) => (
                <Chip
                  key={index}
                  label={achievement}
                  variant="outlined"
                  color="primary"
                  sx={{ mb: 1, fontSize: '0.9rem' }} // smaller chip font
                />
              ))}
            </Stack>
            <Typography 
              variant="body2"
              sx={{ 
                lineHeight: 1.8,
                color: 'text.secondary',
                fontSize: '0.95rem'
              }}
            >
              Recognition from industry leaders validates our commitment to excellence and innovation 
              in sustainable architecture.
            </Typography>
          </Grid>
        </Grid>
      </motion.div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Typography 
          variant="h5" // smaller heading
          align="center"
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            color: 'text.primary',
            mb: 1
          }}
        >
          Our Core Values
        </Typography>
        <Typography 
          variant="body2" // smaller body font
          align="center"
          sx={{ 
            color: 'text.secondary',
            mb: 4,
            maxWidth: '600px',
            mx: 'auto',
            fontSize: '0.95rem'
          }}
        >
          The fundamental principles that guide every decision we make and every space we create.
        </Typography>
        
        <Box sx={{ 
          width: '100vw', 
          position: 'relative', 
          left: '50%', 
          right: '50%', 
          marginLeft: '-50vw', 
          marginRight: '-50vw',
          px: 4,
          mb: 8
        }}>
          <Container maxWidth="lg">
            <Box sx={{ 
              display: 'flex', 
              gap: 4, 
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'center', sm: 'stretch' }
            }}>
              {coreValues.map((value, index) => (
                <Box 
                  key={index}
                  sx={{ 
                    flex: 1,
                    textAlign: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {value.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 1.5 }}>
                    {value.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      lineHeight: 1.5,
                      px: 1,
                      fontSize: '0.9rem'
                    }}
                  >
                    {value.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Typography 
          variant="h5" // smaller heading
          align="center"
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            color: 'text.primary',
            mb: 1
          }}
        >
          <Groups sx={{ mr: 1, verticalAlign: 'middle' }} />
          Meet Our Expert Team
        </Typography>
        <Typography 
          variant="body2" // smaller body font
          align="center"
          sx={{ 
            color: 'text.secondary',
            mb: 4,
            maxWidth: '600px',
            mx: 'auto',
            fontSize: '0.95rem'
          }}
        >
          Our diverse team brings together decades of experience in architecture, sustainability, and design innovation.
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
              <Card 
                elevation={3}
                sx={{ 
                  borderRadius: 3,
                  transition: 'transform 0.3s ease',
                  height: 320,
                  width: 280,
                  minWidth: 280,
                  maxWidth: 280,
                  flex: 'none',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              >
                <CardContent sx={{ 
                  textAlign: 'center', 
                  p: 3, 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <Avatar 
                    sx={{ 
                      width: 96, 
                      height: 96, 
                      mx: 'auto',
                      mb: 2 
                    }}
                    alt={member.name}
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1976d2&color=fff&size=128`}
                  />
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                    Experience: {member.experience}
                    <br />
                    Specialization: {member.specialization}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Testimonials Section */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.0, duration: 0.6 }}
>
  <Typography 
    variant="h5" 
    align="center" 
    gutterBottom
    sx={{ 
      fontWeight: 'bold', 
      color: 'text.primary',
      mb: 1
    }}
  >
    What Our Clients Say
  </Typography>
  <Typography 
    variant="body2" 
    align="center"
    sx={{ 
      color: 'text.secondary',
      mb: 4,
      maxWidth: '600px',
      mx: 'auto',
      fontSize: '0.95rem'
    }}
  >
    Testimonials from our satisfied clients reflect our dedication to excellence and care.
  </Typography>

  <Box
    sx={{
      display: 'flex',
      gap: 3,
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      py: 1,
      px: 2,
      '&::-webkit-scrollbar': { height: 8 },
      '&::-webkit-scrollbar-thumb': { bgcolor: 'primary.main', borderRadius: 2 },
    }}
  >
    {testimonials.map(({ name, photo, quote }, index) => (
      <Card
        key={index}
        elevation={4}
        sx={{
          minWidth: 350,
          maxWidth: 350,
          height: 180,
          flexShrink: 0,
          borderRadius: 3,
          p: 3,
          scrollSnapAlign: 'start',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src={photo} alt={name} sx={{ width: 56, height: 56, mr: 2 }} />
          <Typography variant="subtitle1" fontWeight="bold">
            {name}
          </Typography>
        </Box>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ fontSize: '0.9rem', flexGrow: 1 }}
        >
          "{quote}"
        </Typography>
      </Card>
    ))}
  </Box>
</motion.div>

    </Container>
  );
}

export default About;
