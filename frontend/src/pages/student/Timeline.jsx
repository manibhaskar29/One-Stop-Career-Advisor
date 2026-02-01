import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Card,
    CardContent,
    Chip,
    Stack,
} from '@mui/material';
import {
    Timeline as MuiTimeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent,
} from '@mui/lab';
import {
    ArrowBack,
    Timeline as TimelineIcon,
    CheckCircle,
    RadioButtonUnchecked,
    Assignment,
    School,
    Work,
    EmojiEvents,
} from '@mui/icons-material';

const milestones = [
    {
        id: 1,
        title: 'Complete Profile Setup',
        description: 'Fill out your personal information and preferences',
        date: 'Completed',
        status: 'completed',
        icon: <CheckCircle />,
        color: 'success',
    },
    {
        id: 2,
        title: 'Take Career Assessment',
        description: 'Complete the comprehensive career quiz',
        date: 'Completed',
        status: 'completed',
        icon: <Assignment />,
        color: 'success',
    },
    {
        id: 3,
        title: 'Review Recommendations',
        description: 'Explore personalized career suggestions',
        date: 'In Progress',
        status: 'in-progress',
        icon: <RadioButtonUnchecked />,
        color: 'primary',
    },
    {
        id: 4,
        title: 'Research Colleges',
        description: 'Browse and shortlist colleges that match your goals',
        date: 'Upcoming',
        status: 'upcoming',
        icon: <School />,
        color: 'grey',
    },
    {
        id: 5,
        title: 'Apply to Programs',
        description: 'Submit applications to your chosen colleges',
        date: 'Upcoming',
        status: 'upcoming',
        icon: <Work />,
        color: 'grey',
    },
    {
        id: 6,
        title: 'Start Your Career Journey',
        description: 'Begin your path towards your dream career',
        date: 'Future Goal',
        status: 'upcoming',
        icon: <EmojiEvents />,
        color: 'grey',
    },
];

const Timeline = () => {
    const navigate = useNavigate();

    const getStatusChip = (status) => {
        const statusConfig = {
            completed: { label: 'Completed', color: 'success' },
            'in-progress': { label: 'In Progress', color: 'primary' },
            upcoming: { label: 'Upcoming', color: 'default' },
        };

        const config = statusConfig[status];
        return <Chip label={config.label} color={config.color} size="small" />;
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" onClick={() => navigate('/student/dashboard')}>
                        <ArrowBack />
                    </IconButton>
                    <TimelineIcon sx={{ ml: 2, mr: 2 }} />
                    <Typography variant="h6" fontWeight={700}>
                        Career Timeline
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                    Your Career Journey
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Track your progress and upcoming milestones
                </Typography>

                <MuiTimeline position="alternate">
                    {milestones.map((milestone, index) => (
                        <TimelineItem key={milestone.id}>
                            <TimelineOppositeContent color="text.secondary">
                                <Typography variant="body2" fontWeight={600}>
                                    {milestone.date}
                                </Typography>
                            </TimelineOppositeContent>

                            <TimelineSeparator>
                                <TimelineDot color={milestone.color}>
                                    {milestone.icon}
                                </TimelineDot>
                                {index < milestones.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>

                            <TimelineContent>
                                <Card
                                    sx={{
                                        opacity: milestone.status === 'upcoming' ? 0.7 : 1,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.02)',
                                            boxShadow: 4,
                                        },
                                    }}
                                >
                                    <CardContent>
                                        <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                            <Typography variant="h6" fontWeight={600}>
                                                {milestone.title}
                                            </Typography>
                                            {getStatusChip(milestone.status)}
                                        </Stack>
                                        <Typography variant="body2" color="text.secondary">
                                            {milestone.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </MuiTimeline>
            </Container>
        </Box>
    );
};

export default Timeline;
