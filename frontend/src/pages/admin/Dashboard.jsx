import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
    Box,
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    AppBar,
    Toolbar,
    Avatar,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import {
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    School as SchoolIcon,
    TrendingUp as TrendingUpIcon,
    Logout as LogoutIcon,
    VerifiedUser,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionCard = motion.create(Card);

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        if (!user || user.role !== 'admin') {
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
        { label: 'Total Students', value: '1,247', change: '+12%', icon: <PeopleIcon />, color: 'primary' },
        { label: 'Active Users', value: '834', change: '+8%', icon: <TrendingUpIcon />, color: 'success' },
        { label: 'Colleges Listed', value: '523', change: '+15', icon: <SchoolIcon />, color: 'secondary' },
        { label: 'Quizzes Completed', value: '3,492', change: '+24%', icon: <VerifiedUser />, color: 'warning' },
    ];

    const recentUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student', status: 'Active', joined: '2026-01-28' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Student', status: 'Active', joined: '2026-01-27' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Student', status: 'Active', joined: '2026-01-26' },
        { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Student', status: 'Active', joined: '2026-01-25' },
        { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Student', status: 'Active', joined: '2026-01-24' },
    ];

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <AppBar position="static">
                <Toolbar>
                    <DashboardIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
                        Admin Dashboard
                    </Typography>
                    <IconButton color="inherit" onClick={handleMenu}>
                        <Avatar sx={{ bgcolor: 'warning.main' }}>
                            <VerifiedUser />
                        </Avatar>
                    </IconButton>
                    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                        <MenuItem disabled>{user?.name || 'Admin'}</MenuItem>
                        <MenuItem onClick={handleLogout}>
                            <LogoutIcon sx={{ mr: 1 }} fontSize="small" />
                            Logout
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                    Welcome, Admin! 👨‍💼
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Manage users, content, and monitor platform activity
                </Typography>

                {/* Stats Cards */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                    {stats.map((stat, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <MotionCard
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                            >
                                <CardContent>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Avatar sx={{ bgcolor: `${stat.color}.main`, width: 56, height: 56 }}>
                                            {stat.icon}
                                        </Avatar>
                                        <Box>
                                            <Typography variant="h4" fontWeight={700}>
                                                {stat.value}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {stat.label}
                                            </Typography>
                                            <Chip
                                                label={stat.change}
                                                size="small"
                                                color="success"
                                                sx={{ mt: 0.5 }}
                                            />
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </MotionCard>
                        </Grid>
                    ))}
                </Grid>

                {/* Recent Users */}
                <Typography variant="h5" fontWeight={700} gutterBottom sx={{ mb: 3 }}>
                    Recent Users
                </Typography>
                <Card>
                    <TableContainer component={Paper} elevation={0}>
                        <Table>
                            <TableHead>
                                <TableRow sx={{ bgcolor: 'grey.50' }}>
                                    <TableCell><Typography fontWeight={600}>Name</Typography></TableCell>
                                    <TableCell><Typography fontWeight={600}>Email</Typography></TableCell>
                                    <TableCell><Typography fontWeight={600}>Role</Typography></TableCell>
                                    <TableCell><Typography fontWeight={600}>Status</Typography></TableCell>
                                    <TableCell><Typography fontWeight={600}>Joined</Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {recentUsers.map((user) => (
                                    <TableRow
                                        key={user.id}
                                        sx={{
                                            '&:hover': { bgcolor: 'primary.50' },
                                            transition: 'background-color 0.3s ease',
                                        }}
                                    >
                                        <TableCell>{user.name}</TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            <Chip label={user.role} size="small" color="primary" />
                                        </TableCell>
                                        <TableCell>
                                            <Chip label={user.status} size="small" color="success" />
                                        </TableCell>
                                        <TableCell>{user.joined}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>

                {/* Quick Stats */}
                <Grid container spacing={3} sx={{ mt: 2 }}>
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" fontWeight={600} gutterBottom>
                                    Platform Activity
                                </Typography>
                                <Stack spacing={2}>
                                    <Box>
                                        <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
                                            <Typography variant="body2">Quizzes Taken</Typography>
                                            <Typography variant="body2" fontWeight={600}>85%</Typography>
                                        </Stack>
                                        <Box sx={{ width: '100%', bgcolor: 'grey.200', borderRadius: 1, height: 8 }}>
                                            <Box sx={{ width: '85%', bgcolor: 'primary.main', borderRadius: 1, height: 8 }} />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
                                            <Typography variant="body2">Profile Completion</Typography>
                                            <Typography variant="body2" fontWeight={600}>72%</Typography>
                                        </Stack>
                                        <Box sx={{ width: '100%', bgcolor: 'grey.200', borderRadius: 1, height: 8 }}>
                                            <Box sx={{ width: '72%', bgcolor: 'success.main', borderRadius: 1, height: 8 }} />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Stack direction="row" justifyContent="space-between" sx={{ mb: 0.5 }}>
                                            <Typography variant="body2">College Searches</Typography>
                                            <Typography variant="body2" fontWeight={600}>68%</Typography>
                                        </Stack>
                                        <Box sx={{ width: '100%', bgcolor: 'grey.200', borderRadius: 1, height: 8 }}>
                                            <Box sx={{ width: '68%', bgcolor: 'secondary.main', borderRadius: 1, height: 8 }} />
                                        </Box>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" fontWeight={600} gutterBottom>
                                    Top Career Interests
                                </Typography>
                                <Stack spacing={2}>
                                    {[
                                        { name: 'Technology', count: 456 },
                                        { name: 'Healthcare', count: 342 },
                                        { name: 'Business', count: 298 },
                                        { name: 'Engineering', count: 267 },
                                    ].map((interest, index) => (
                                        <Stack key={index} direction="row" justifyContent="space-between" alignItems="center">
                                            <Typography variant="body2">{interest.name}</Typography>
                                            <Chip label={interest.count} size="small" />
                                        </Stack>
                                    ))}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AdminDashboard;
