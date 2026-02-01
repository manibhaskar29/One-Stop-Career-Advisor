import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    Box,
    Container,
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    Alert,
    Link,
    InputAdornment,
    IconButton,
    Divider,
    Stack,
    Avatar,
} from '@mui/material';
import {
    Email as EmailIcon,
    Lock as LockIcon,
    Visibility,
    VisibilityOff,
    Login as LoginIcon,
    Rocket as RocketIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionCard = motion.create(Card);
const MotionBox = motion.create(Box);

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { login, isAuthenticated, user } = useAuth();
    const navigate = useNavigate();

    // Redirect if already logged in
    useEffect(() => {
        if (isAuthenticated) {
            if (user?.role === 'admin') {
                navigate('/admin/dashboard');
            } else {
                navigate('/student/dashboard');
            }
        }
    }, [isAuthenticated, user, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const result = await login(formData.email, formData.password);

        if (result.success) {
            if (result.user.role === 'admin') {
                navigate('/admin/dashboard');
            } else {
                navigate('/student/dashboard');
            }
        } else {
            setError(result.error);
        }

        setLoading(false);
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%)',
                position: 'relative',
                overflow: 'hidden',
                py: 4,
            }}
        >
            {/* Animated Background Blobs */}
            <MotionBox
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(37,99,235,0.05) 70%)',
                    filter: 'blur(40px)',
                }}
                animate={{
                    x: [0, 30, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <MotionBox
                sx={{
                    position: 'absolute',
                    top: '25%',
                    right: '8%',
                    width: 280,
                    height: 280,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(147,51,234,0.05) 70%)',
                    filter: 'blur(40px)',
                }}
                animate={{
                    x: [0, -25, 0],
                    y: [0, 40, 0],
                    scale: [1, 0.95, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                }}
            />

            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 10 }}>
                {/* Logo & Welcome */}
                <MotionBox
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    sx={{ textAlign: 'center', mb: 4 }}
                >
                    <Typography
                        variant="h3"
                        component={RouterLink}
                        to="/"
                        sx={{
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textDecoration: 'none',
                            display: 'inline-block',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        One Stop Career Guide
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mt: 1 }}>
                        <RocketIcon sx={{ color: 'primary.main' }} />
                        <Typography variant="body1" color="text.secondary">
                            Welcome back! Let&apos;s continue your journey
                        </Typography>
                    </Stack>
                </MotionBox>

                {/* Login Card */}
                <MotionCard
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    sx={{
                        backdropFilter: 'blur(20px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <CardContent sx={{ p: 4 }}>
                        {/* Header Icon */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                            <Avatar
                                sx={{
                                    width: 64,
                                    height: 64,
                                    background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                                }}
                            >
                                <LoginIcon sx={{ fontSize: 32 }} />
                            </Avatar>
                        </Box>

                        <Typography variant="h4" align="center" gutterBottom fontWeight={700}>
                            Welcome Back
                        </Typography>
                        <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 3 }}>
                            Sign in to continue your career journey
                        </Typography>

                        {/* Error Alert */}
                        {error && (
                            <MotionBox
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Alert severity="error" sx={{ mb: 3 }}>
                                    {error}
                                </Alert>
                            </MotionBox>
                        )}

                        {/* Login Form */}
                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EmailIcon color="primary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                    placeholder="your.email@example.com"
                                />

                                <TextField
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon color="primary" />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    placeholder="••••••••"
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    disabled={loading}
                                    startIcon={loading ? null : <LoginIcon />}
                                    sx={{
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        boxShadow: '0 4px 14px rgba(37, 99, 235, 0.4)',
                                    }}
                                >
                                    {loading ? 'Signing In...' : 'Sign In'}
                                </Button>
                            </Stack>
                        </Box>

                        <Box sx={{ mt: 3, textAlign: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                                Don&apos;t have an account?{' '}
                                <Link component={RouterLink} to="/register" fontWeight={600}>
                                    Register here
                                </Link>
                            </Typography>
                        </Box>


                    </CardContent>
                </MotionCard>

                {/* Back to Home */}
                <MotionBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    sx={{ textAlign: 'center', mt: 3 }}
                >
                    <Link
                        component={RouterLink}
                        to="/"
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            fontWeight: 600,
                            textDecoration: 'none',
                            '&:hover': {
                                gap: 1.5,
                            },
                            transition: 'gap 0.3s ease',
                        }}
                    >
                        ← Back to Home
                    </Link>
                </MotionBox>
            </Container>
        </Box>
    );
};

export default Login;
