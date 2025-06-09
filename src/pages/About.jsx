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

  const coreValues = [
    {
      icon: <EmojiObjects fontSize="large" color="primary" />,
      title: 'Інноваційність',
      description: 'Ми впроваджуємо сучасні технології та нестандартні підходи у проєктуванні, щоб створювати простори, що відповідають вимогам сьогодення та викликам майбутнього.'
    },
    {
      icon: <Public fontSize="large" color="primary" />,
      title: 'Стійкість',
      description: 'У своїх проєктах ми дбаємо про довкілля — використовуємо енергоефективні рішення та екологічні матеріали, з повагою ставлячись до ресурсів планети.'
    },
    {
      icon: <Architecture fontSize="large" color="primary" />,
      title: 'Людяність',
      description: 'Ми проєктуємо з думкою про людей — кожен простір покликаний не лише функціонувати, а й бути комфортним, безпечним і натхненним для тих, хто в ньому живе, працює чи відпочиває.'
    }
  ];

  const achievements = [
    'Розробка генеральних планів для міських та приміських територій',
    'Сертифіковані фахівці зі сталого проєктування',
    '30+ виконаних проєктів',
    'Інноваційні концепції житлових комплексів'
  ];

  const testimonials = [
    {
      name: 'Орест Тетенко',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'Співпрацювали з АртОселею при розробці проєкту приватного будинку. Команда уважно вислухала наші побажання й запропонувала кілька цікавих рішень.'
    },
    {
      name: 'Софія Музика',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'Звернулися до АртОселі для створення генплану нашого селища. Професійний підхід, грамотні консультації, все виконано вчасно та оперативно!'
    },
    {
      name: 'Артем Ницинський',
      photo: 'https://randomuser.me/api/portraits/men/65.jpg',
      quote: 'Команда продемонструвала високий рівень знань та досвіду. Працювати було комфортно, постійний зворотний зв’язок, зрозумілі пояснення щодо рішень.'
    },
        {
      name: 'Михайло Довбик',
      photo: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'Нам потрібен був проєкт для приватного будинку з використанням енергоефективних рішень. Отримали продуману концепцію та гарну підтримку.'
    },
    {
      name: 'Анна Микитюк',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'Хороша команда з сучасним баченням. Замовляли дизайн простору для дитячого центру. Дуже сподобалися увага до деталей і врахування безпеки.'
    },
    {
      name: 'Артем Вамницький',
      photo: 'https://randomuser.me/api/portraits/men/65.jpg',
      quote: 'Звертались до АртОселі як до підрядника по архітектурній частині житлового комплексу. Приємно, що команда працює відповідально.'
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
          Наша компанія
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
      Формуємо архітектуру завтрашнього дня сьогодні
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
      <strong>ArtOselya</strong> — це простір, де інновації поєднуються зі стійким розвитком. 
      Ми створюємо не просто будівлі, а живі простори, які надихають, зцілюють і об’єднують спільноти. 
      У кожному нашому проєкті закладено глибоку повагу до людського досвіду та турботу про майбутнє планети.
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
              На чому ми спеціалізуємося?
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
            Наша компанія, забезпечує сучасні та кваліфіковані рішення в галузі архітектури та містобудування. 
            Ми спеціалізуємося на створенні детальних планів території, ескізах намірів забудови, 
            архітектурних проєктах різної складності. 
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
              Досягнення
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
              Визнання лідерів галузі підтверджує нашу прихильність до досконалості та інновацій у сфері сталої архітектури.
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
          Наші основні цінності
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
         Фундаментальні принципи, якими ми керуємося при прийнятті кожного рішення і створенні кожного простору.
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
    Відгуки клієнтів
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
    Відгуки наших задоволених клієнтів відображають наше прагнення до досконалості та турботи.
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
