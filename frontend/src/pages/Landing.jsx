import { Link as RouterLink } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Grid,
    Card,
    CardContent,
    Avatar,
    AppBar,
    Toolbar,
} from '@mui/material';
import {
    Rocket as RocketIcon,
    Psychology as PsychologyIcon,
    School as SchoolIcon,
    Timeline as TimelineIcon,
    TrendingUp as TrendingUpIcon,
    ArrowForward as ArrowForwardIcon,
    Login as LoginIcon,
    PersonAdd as PersonAddIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const MotionCard = motion.create(Card);

const Landing = () => {
    const features = [
        {
            icon: <PsychologyIcon fontSize="large" />,
            title: 'Career Assessment',
            description: 'Take our comprehensive quiz to discover careers that match your interests and skills',
            color: '#2563eb',
        },
        {
            icon: <SchoolIcon fontSize="large" />,
            title: 'College Directory',
            description: 'Explore thousands of colleges and find the perfect fit for your career goals',
            color: '#9333ea',
        },
        {
            icon: <TimelineIcon fontSize="large" />,
            title: 'Career Timeline',
            description: 'Plan your journey with personalized milestones and track your progress',
            color: '#10b981',
        },
        {
            icon: <TrendingUpIcon fontSize="large" />,
            title: 'Personalized Recommendations',
            description: 'Get AI-powered career suggestions based on your profile and preferences',
            color: '#f59e0b',
        },
    ];

    return (
        <Box>
            {/* Navbar */}
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1, fontWeight: 700 }}
                    >
                        One Stop Career Guide
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button
                            color="inherit"
                            component={RouterLink}
                            to="/login"
                            startIcon={<LoginIcon />}
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: 'white',
                                color: 'primary.main',
                                '&:hover': { bgcolor: 'grey.100' },
                            }}
                            component={RouterLink}
                            to="/register"
                            startIcon={<PersonAddIcon />}
                        >
                            Get Started
                        </Button>
                    </Stack>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 40%, #faf5ff 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                    py: { xs: 8, md: 12 },
                }}
            >
                {/* Animated Blobs */}
                <MotionBox
                    sx={{
                        position: 'absolute',
                        top: '10%',
                        left: '5%',
                        width: 400,
                        height: 400,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(37,99,235,0.02) 70%)',
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <MotionBox
                    sx={{
                        position: 'absolute',
                        top: '20%',
                        right: '5%',
                        width: 350,
                        height: 350,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(147,51,234,0.02) 70%)',
                        filter: 'blur(60px)',
                    }}
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0],
                        scale: [1, 0.95, 1],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                />

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <MotionBox
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                            >
                                <Stack spacing={3}>
                                    <Box>
                                        <Typography
                                            variant="h1"
                                            sx={{
                                                fontSize: { xs: '2.5rem', md: '3.5rem' },
                                                fontWeight: 800,
                                                background: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
                                                backgroundClip: 'text',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                mb: 2,
                                            }}
                                        >
                                            Your Career Journey Starts Here
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            color="text.secondary"
                                            sx={{ lineHeight: 1.6 }}
                                        >
                                            Discover your perfect career path with personalized assessments, college recommendations, and expert guidance.
                                        </Typography>
                                    </Box>

                                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            component={RouterLink}
                                            to="/register"
                                            endIcon={<ArrowForwardIcon />}
                                            sx={{
                                                px: 4,
                                                py: 1.5,
                                                fontSize: '1.1rem',
                                                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)',
                                            }}
                                        >
                                            Get Started Free
                                        </Button>

                                    </Stack>

                                    <Stack direction="row" spacing={4} sx={{ pt: 2 }}>
                                        <Box>
                                            <Typography variant="h4" fontWeight={700} color="primary.main">
                                                10K+
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Students Guided
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="h4" fontWeight={700} color="secondary.main">
                                                500+
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Colleges Listed
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="h4" fontWeight={700} color="success.main">
                                                95%
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Success Rate
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </MotionBox>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <MotionBox
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                sx={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <Avatar
                                    sx={{
                                        width: { xs: 300, md: 400 },
                                        height: { xs: 300, md: 400 },
                                        background: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
                                        boxShadow: '0 20px 60px rgba(37, 99, 235, 0.3)',
                                    }}
                                >
                                    <RocketIcon sx={{ fontSize: { xs: 150, md: 200 } }} />
                                </Avatar>
                            </MotionBox>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Features Section */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    sx={{ textAlign: 'center', mb: 6 }}
                >
                    <Typography variant="h2" fontWeight={700} gutterBottom>
                        Everything You Need to Succeed
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Powerful tools to help you make informed career decisions
                    </Typography>
                </MotionBox>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <MotionCard
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                sx={{
                                    height: '100%',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Avatar
                                        sx={{
                                            width: 64,
                                            height: 64,
                                            bgcolor: feature.color,
                                            margin: '0 auto 16px',
                                            boxShadow: `0 4px 14px ${feature.color}40`,
                                        }}
                                    >
                                        {feature.icon}
                                    </Avatar>
                                    <Typography variant="h6" fontWeight={600} gutterBottom>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </MotionCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* CTA Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
                    py: 8,
                    textAlign: 'center',
                    color: 'white',
                }}
            >
                <Container maxWidth="md">
                    <MotionBox
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography variant="h3" fontWeight={700} gutterBottom>
                            Ready to Start Your Journey?
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                            Join thousands of students who have found their perfect career path
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            component={RouterLink}
                            to="/register"
                            sx={{
                                bgcolor: 'white',
                                color: 'primary.main',
                                px: 6,
                                py: 2,
                                fontSize: '1.2rem',
                                '&:hover': {
                                    bgcolor: 'grey.100',
                                    transform: 'scale(1.05)',
                                },
                            }}
                            endIcon={<RocketIcon />}
                        >
                            Get Started Now
                        </Button>
                    </MotionBox>
                </Container>
            </Box>

            {/* Footer */}
            <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 4, textAlign: 'center' }}>
                <Typography variant="body2">
                    © 2026 One Stop Career Guide. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Landing;
