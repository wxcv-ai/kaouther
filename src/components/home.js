import React from 'react';
import { Container, Box, Typography, Avatar, Paper, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import chartImage from '../assets/charts.jpg';

const HomePage = () => {
    const navigate = useNavigate();

    const handleTryItClick = () => {
        navigate('/search');
    };

    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 3,
                minHeight: '100vh',
                backgroundColor: '#121212',
                color: '#ffffff',
            }}
        >
            {/* Intro Section */}
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    borderRadius: 3,
                    backgroundColor: '#1e1e1e',
                    textAlign: 'center',
                    width: '100%',
                    marginBottom: 4,
                }}
            >
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '2.5rem',
                                marginBottom: 2,
                                fontFamily: 'Inter, sans-serif',
                                textAlign: 'left',
                                color: 'orange'
                            }}
                        >
                            Welcome to CHART Financial Platform
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: '1.2rem',
                                color: '#aaaaaa',
                                marginBottom: 3,
                                textAlign: 'left',
                            }}
                        >
                            Your trusted platform for inspecting, analyzing, and visualizing charts and data in a professional way.
                            Discover how we can help you make informed decisions with powerful insights, achieving financial freedom.
                            Learn more about us and how we can help you!
                        </Typography>
                    </Grid>

                    {/* Image section */}
                    <Grid item xs={12} sm={6}>
                        <img
                            src={chartImage}
                            alt="Chart"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                            }}
                        />
                    </Grid>
                </Grid>

                <Box sx={{ textAlign: 'center', marginTop: 3 }}>
                    <Button
                        variant="contained"
                        onClick={handleTryItClick}
                        sx={{
                            backgroundColor: '#ffffff',
                            '&:hover': {
                                backgroundColor: 'black',
                                color: '#ffffff',
                            },
                            padding: '10px 20px',
                            fontSize: '1rem',
                            fontWeight: 600,
                            borderRadius: '50px',
                            color: 'black',
                        }}
                    >
                        Try It
                    </Button>
                </Box>
            </Paper>

            {/* About Me Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    gap: 4,
                    width: '100%',
                    maxWidth: 900,
                }}
            >
                {/* About Me Text */}
                <Box>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 'bold',
                            fontSize: '1.8rem',
                            marginBottom: 1,
                            fontFamily: 'Inter, sans-serif',
                            color: 'white',
                        }}

                    >
                        About Me
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.1rem',
                            color: '#aaaaaa',
                        }}
                    >
                        Hi, We are  the creators of CHART Financial Platform. With a passion for empowering people
                        financially, I am dedicated to helping you navigate the complexities of
                        personal and professional finances.
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default HomePage;
