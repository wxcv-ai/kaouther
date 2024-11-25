import React, { useState } from 'react';
import { Container, Typography, TextField, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchInterface = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    navigate('/' + query);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#121212',
        boxSizing: 'border-box',
        padding: 3,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 600,
          fontSize: '2rem',
          color: '#ffffff',
          marginBottom: '30px',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        What are searching for ?
      </Typography>

      <Paper
        elevation={3}
        sx={{
          width: '100%',
          borderRadius: '50px',
          padding: 2,
          backgroundColor: '#1e1e1e',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Ask me anything..."
            fullWidth
            value={query}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            sx={{
              borderRadius: '50px',
              backgroundColor: '#2c2c2c',
              padding: '10px 16px',
              marginBottom: '20px',
              fontSize: '1.125rem',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
                '& fieldset': {
                  border: '1px solid #444',
                },
              },
              '& .MuiInputBase-input': {
                padding: '10px',
                fontSize: '1.125rem',
                color: '#ffffff',
              },
            }}
          />
        </Box>
      </Paper>
    </Container>
  );
};

export default SearchInterface;
