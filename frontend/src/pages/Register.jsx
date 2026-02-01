import { useState } from 'react';
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
    Stack,
    Avatar,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@mui/material';
import {
    Email as EmailIcon,
    Lock as LockIcon,
    Person as PersonIcon,
    Visibility,
    VisibilityOff,
    PersonAdd as PersonAddIcon,
    Phone as PhoneIcon,
    School as SchoolIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionCard = motion.create(Card);
const MotionBox = motion.create(Box);

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        role: 'student',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register: registerUser } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setLoading(true);

        const result = await registerUser(formData);

        if (result.success) {
            navigate('/login');
        } else {
            setError(result.error || 'Registration failed');
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
                background: 'linear-gradient(135deg, #faf5ff 0%, #ffffff 50%, #eff6ff 100%)',
                position: 'relative',
                overflow: 'hidden',
                py: 6,
            }}
        >
            {/* Animated Background */}
            <MotionBox
                sx={{
                    position: 'absolute',
                    top: '15%',
                    left: '10%',
                    width: 250,
                    height: 250,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(147,51,234,0.2) 0%, rgba(147,51,234,0.05) 70%)',
                    filter: 'blur(40px)',
                }}
                animate={{
                    x: [0, 40, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 10 }}>
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
                            background: 'linear-gradient(135deg, #9333ea 0%, #2563eb 100%)',
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
                </MotionBox>

                <MotionCard
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    sx={{
                        backdropFilter: 'blur(20px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                            <Avatar
                                sx={{
                                    width: 64,
                                    height: 64,
                                    background: 'linear-gradient(135deg, #9333ea 0%, #a855f7 100%)',
                                    boxShadow: '0 4px 12px rgba(147, 51, 234, 0.3)',
                                }}
                            >
                                <PersonAddIcon sx={{ fontSize: 32 }} />
                            </Avatar>
                        </Box>

                        <Typography variant="h4" align="center" gutterBottom fontWeight={700}>
                            Create Account
                        </Typography>
                        <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 3 }}>
                            Start your career journey today
                        </Typography>

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

                        <Box component="form" onSubmit={handleSubmit}>
                            <Stack spacing={2.5}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PersonIcon color="secondary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

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
                                                <EmailIcon color="secondary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <PhoneIcon color="secondary" />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <FormControl fullWidth>
                                    <InputLabel>I am a</InputLabel>
                                    <Select
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        label="I am a"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <SchoolIcon color="secondary" />
                                            </InputAdornment>
                                        }
                                    >
                                        <MenuItem value="student">Student</MenuItem>
                                        <MenuItem value="admin">Admin</MenuItem>
                                    </Select>
                                </FormControl>

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
                                                <LockIcon color="secondary" />
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
                                />

                                <TextField
                                    fullWidth
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon color="secondary" />
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    edge="end"
                                                >
                                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    fullWidth
                                    disabled={loading}
                                    startIcon={!loading && <PersonAddIcon />}
                                    sx={{
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        boxShadow: '0 4px 14px rgba(147, 51, 234, 0.4)',
                                    }}
                                >
                                    {loading ? 'Creating Account...' : 'Create Account'}
                                </Button>
                            </Stack>
                        </Box>

                        <Box sx={{ mt: 3, textAlign: 'center' }}>
                            <Typography variant="body2" color="text.secondary">
                                Already have an account?{' '}
                                <Link component={RouterLink} to="/login" fontWeight={600}>
                                    Sign in
                                </Link>
                            </Typography>
                        </Box>
                    </CardContent>
                </MotionCard>

                <MotionBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
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
                            color: 'secondary.main',
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

export default Register;
