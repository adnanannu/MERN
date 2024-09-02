import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Payment = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Info:', formData);
    alert('Payment Submitted!');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
           Payment Page
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Name on Card"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Card Number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Expiry Date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            label="CVV"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
          />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" color="primary" type="submit">
              Submit Payment
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Payment;