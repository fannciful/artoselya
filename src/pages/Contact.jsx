import React, { useState } from 'react';
import {
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Alert,
  CircularProgress,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Contact() {
  const theme = useTheme();

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const SERVICE_ID = 'service_75a1hxq';
  const TEMPLATE_ID = 'template_cl0cafp';
  const PUBLIC_KEY = 'Z9_10jFrVe1gBOa_J';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );

      console.log('Email sent:', result.text);

      setStatus({
        type: 'success',
        message: `Thank you, ${form.name}! Your message has been sent successfully.`,
      });

      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send the message. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        backgroundColor: theme.palette.background.default, // фон сторінки
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ width: '100%', maxWidth: 600 }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 4,
            borderRadius: 4,
            backgroundColor: theme.palette.background.default, // фон паперу адаптивний
            color: theme.palette.text.primary, // текстовий колір основний
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              We'd love to hear from you. Please fill out the form below.
            </Typography>
          </motion.div>

          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Alert
                severity={status.type}
                sx={{ mb: 2 }}
                onClose={() => setStatus({ type: '', message: '' })}
              >
                {status.message}
              </Alert>
            </motion.div>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              name="name"
              fullWidth
              margin="normal"
              value={form.name}
              onChange={handleChange}
              required
              disabled={loading}
              InputLabelProps={{
                style: { color: theme.palette.text.primary },
              }}
              inputProps={{
                style: { color: theme.palette.text.primary },
              }}
            />
            <TextField
              label="Email Address"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              value={form.email}
              onChange={handleChange}
              required
              disabled={loading}
              InputLabelProps={{
                style: { color: theme.palette.text.primary },
              }}
              inputProps={{
                style: { color: theme.palette.text.primary },
              }}
            />
            <TextField
              label="Your Message"
              name="message"
              multiline
              minRows={5}
              fullWidth
              margin="normal"
              value={form.message}
              onChange={handleChange}
              required
              disabled={loading}
              sx={{
                '& .MuiInputBase-root': {
                  alignItems: 'flex-start',
                  color: theme.palette.text.primary,
                },
                textarea: {
                  resize: 'vertical',
                  color: theme.palette.text.primary,
                },
              }}
              InputLabelProps={{
                style: { color: theme.palette.text.primary },
              }}
              inputProps={{
                style: { color: theme.palette.text.primary },
              }}
            />

            <motion.div
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: loading ? 1 : 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={loading}
                sx={{ mt: 3 }}
              >
                {loading ? (
                  <>
                    <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </motion.div>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
}

export default Contact;
