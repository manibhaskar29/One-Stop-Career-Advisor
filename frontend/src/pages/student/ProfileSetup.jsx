import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
    Stack,
    Chip,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    AppBar,
    Toolbar,
    IconButton,
} from '@mui/material';
import {
    ArrowBack,
    ArrowForward,
    Save,
    Person,
} from '@mui/icons-material';

const steps = ['Basic Info', 'Education', 'Interests & Skills'];

const ProfileSetup = () => {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        institution: '',
        year: '',
        interests: [],
        skills: [],
    });

    const handleNext = () => {
        setActiveStep((prev) => prev + 1);
    };

    const handleBack = () => {
        setActiveStep((prev) => prev - 1);
    };

    const handleSave = () => {
        // Save profile data
        alert('Profile saved successfully!');
        navigate('/student/dashboard');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Stack spacing={3}>
                        <TextField
                            fullWidth
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Stack>
                );
            case 1:
                return (
                    <Stack spacing={3}>
                        <FormControl fullWidth>
                            <InputLabel>Education Level</InputLabel>
                            <Select
                                name="education"
                                value={formData.education}
                                onChange={handleChange}
                                label="Education Level"
                            >
                                <MenuItem value="high-school">High School</MenuItem>
                                <MenuItem value="undergraduate">Undergraduate</MenuItem>
                                <MenuItem value="graduate">Graduate</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            fullWidth
                            label="Institution Name"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="Graduation Year"
                            name="year"
                            type="number"
                            value={formData.year}
                            onChange={handleChange}
                        />
                    </Stack>
                );
            case 2:
                return (
                    <Stack spacing={3}>
                        <Box>
                            <Typography variant="body1" gutterBottom fontWeight={600}>
                                Select Your Interests
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                {['Technology', 'Healthcare', 'Business', 'Arts', 'Engineering', 'Science'].map((interest) => (
                                    <Chip
                                        key={interest}
                                        label={interest}
                                        onClick={() => { }}
                                        color="primary"
                                        variant="outlined"
                                    />
                                ))}
                            </Stack>
                        </Box>
                        <Box>
                            <Typography variant="body1" gutterBottom fontWeight={600}>
                                Select Your Skills
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                {['Programming', 'Communication', 'Leadership', 'Problem Solving', 'Creativity', 'Analysis'].map((skill) => (
                                    <Chip
                                        key={skill}
                                        label={skill}
                                        onClick={() => { }}
                                        color="secondary"
                                        variant="outlined"
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </Stack>
                );
            default:
                return null;
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" onClick={() => navigate('/student/dashboard')}>
                        <ArrowBack />
                    </IconButton>
                    <Person sx={{ ml: 2, mr: 2 }} />
                    <Typography variant="h6" fontWeight={700}>
                        Profile Setup
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                <Card>
                    <CardContent sx={{ p: 4 }}>
                        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <Box sx={{ mb: 4 }}>
                            {renderStepContent(activeStep)}
                        </Box>

                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                startIcon={<ArrowBack />}
                            >
                                Back
                            </Button>
                            {activeStep === steps.length - 1 ? (
                                <Button
                                    variant="contained"
                                    onClick={handleSave}
                                    startIcon={<Save />}
                                >
                                    Save Profile
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    endIcon={<ArrowForward />}
                                >
                                    Next
                                </Button>
                            )}
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default ProfileSetup;
