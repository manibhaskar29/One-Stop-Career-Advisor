import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    AppBar,
    Toolbar,
    Avatar,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    LinearProgress,
    Chip,
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    Person as PersonIcon,
    Quiz as QuizIcon,
    Recommend as RecommendIcon,
    School as SchoolIcon,
    Timeline as TimelineIcon,
    Logout as LogoutIcon,
    TrendingUp,
    Category,
    CheckCircle,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionCard = motion.create(Card);

const StudentDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        if (!user || user.role !== 'student') {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const stats = [
        { label: 'Profile Completion', value: 75, color: 'primary', icon: <PersonIcon /> },
        { label: 'Quizzes Taken', value: 3, max: 5, color: 'secondary', icon: <QuizIcon /> },
        { label: 'Recommendations', value: 12, color: 'success', icon: <RecommendIcon /> },
    ];

    const quickActions = [
        { title: 'Setup Profile', description: 'Complete your profile setup', route: '/student/profile', icon: <PersonIcon />, color: '#2563eb' },
        { title: 'Take Quiz', description: 'Discover your career path', route: '/student/quiz', icon: <QuizIcon />, color: '#9333ea' },
        { title: 'View Recommendations', description: 'See personalized careers', route: '/student/recommendations', icon: <RecommendIcon />, color: '#10b981' },
        { title: 'Browse Colleges', description: 'Explore college options', route: '/student/colleges', icon: <SchoolIcon />, color: '#f59e0b' },
        { title: 'Career Timeline', description: 'Track your milestones', route: '/student/timeline', icon: <TimelineIcon />, color: '#ef4444' },
    ];

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            {/* AppBar */}
            <AppBar position="static">
                <Toolbar>
                    <DashboardIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                        Student Dashboard
                    </Typography>
                    <IconButton color="inherit" onClick={handleMenu}>
                        <Avatar sx={{ bgcolor: 'secondary.main' }}>
                            {user?.name?.[0]?.toUpperCase() || 'S'}
                        </Avatar>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem disabled>{user?.name}</MenuItem>
                        <MenuItem onClick={handleLogout}>
                            <LogoutIcon sx={{ mr: 1 }} fontSize="small" />
                            Logout
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {/* Welcome Section */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        Welcome back, {user?.name?.split(' ')[0]}! 🎓
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Continue your career journey and explore new opportunities
                    </Typography>
                </Box>

                {/* Stats Cards */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                    {stats.map((stat, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <MotionCard
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                            >
                                <CardContent>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Avatar sx={{ bgcolor: `${stat.color}.main` }}>
                                            {stat.icon}
                                        </Avatar>
                                        <Box sx={{ flexGrow: 1 }}>
                                            <Typography variant="h4" fontWeight={700}>
                                                {stat.value}{stat.max && `/${stat.max}`}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {stat.label}
                                            </Typography>
                                            {stat.label === 'Profile Completion' && (
                                                <LinearProgress
                                                    variant="determinate"
                                                    value={stat.value}
                                                    sx={{ mt: 1 }}
                                                />
                                            )}
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </MotionCard>
                        </Grid>
                    ))}
                </Grid>

                {/* Quick Actions */}
                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
                    Quick Actions
                </Typography>
                <Grid container spacing={3} sx={{ mb: 4 }}>
                    {quickActions.map((action, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <MotionCard
                                component={RouterLink}
                                to={action.route}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                sx={{
                                    textDecoration: 'none',
                                    height: '100%',
                                    cursor: 'pointer',
                                    borderTop: `4px solid ${action.color}`,
                                }}
                            >
                                <CardContent>
                                    <Avatar sx={{ bgcolor: action.color, mb: 2 }}>
                                        {action.icon}
                                    </Avatar>
                                    <Typography variant="h6" fontWeight={600} gutterBottom>
                                        {action.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {action.description}
                                    </Typography>
                                </CardContent>
                            </MotionCard>
                        </Grid>
                    ))}
                </Grid>

                {/* Recent Activity */}
                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
                    Recent Activity
                </Typography>
                <Card>
                    <CardContent>
                        <Stack spacing={2}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <CheckCircle color="success" />
                                <Box>
                                    <Typography variant="body1" fontWeight={600}>
                                        Completed Career Assessment Quiz
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        2 days ago
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <TrendingUp color="primary" />
                                <Box>
                                    <Typography variant="body1" fontWeight={600}>
                                        Received 5 new career recommendations
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        3 days ago
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Category color="secondary" />
                                <Box>
                                    <Typography variant="body1" fontWeight={600}>
                                        Updated profile interests
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        1 week ago
                                    </Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default StudentDashboard;
