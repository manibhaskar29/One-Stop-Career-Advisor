import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Card,
    CardContent,
    Typography,
    Chip,
    Stack,
    AppBar,
    Toolbar,
    IconButton,
    Grid,
    Button,
    LinearProgress,
    Avatar,
    ToggleButtonGroup,
    ToggleButton,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Alert,
} from '@mui/material';
import {
    ArrowBack,
    Recommend as RecommendIcon,
    Work,
    TrendingUp,
    AttachMoney,
    ViewList,
    ViewModule,
    ExpandMore,
    School,
    Business,
    Engineering,
    LocalHospital,
    Palette,
    AccountBalance,
    Science,
} from '@mui/icons-material';

// Career database for After 10th
const careersAfter10th = [
    {
        category: 'Skill / Diploma / Polytechnic',
        icon: <Engineering />,
        careers: [
            { title: 'Electrician', duration: '6 months - 2 years', salary: '₹15K - ₹35K/month', demand: 'High' },
            { title: 'Fitter', duration: '1-2 years', salary: '₹12K - ₹30K/month', demand: 'High' },
            { title: 'Mechanic', duration: '6 months - 2 years', salary: '₹15K - ₹40K/month', demand: 'Very High' },
            { title: 'Welder', duration: '6 months - 1 year', salary: '₹18K - ₹35K/month', demand: 'High' },
            { title: 'Plumber', duration: '6 months - 1 year', salary: '₹15K - ₹32K/month', demand: 'High' },
            { title: 'Technician', duration: '1-3 years', salary: '₹18K - ₹40K/month', demand: 'High' },
            { title: 'CNC Operator', duration: '1-2 years', salary: '₹20K - ₹45K/month', demand: 'Very High' },
            { title: 'Automobile Service Engineer', duration: '2-3 years', salary: '₹18K - ₹50K/month', demand: 'High' },
            { title: 'Electronics Technician', duration: '2-3 years', salary: '₹15K - ₹40K/month', demand: 'High' },
            { title: 'Computer Hardware Technician', duration: '1-2 years', salary: '₹12K - ₹35K/month', demand: 'Medium' },
        ],
    },
    {
        category: 'IT / Digital',
        icon: <Engineering />,
        careers: [
            { title: 'Data Entry Operator', duration: '3-6 months', salary: '₹10K - ₹25K/month', demand: 'Medium' },
            { title: 'Computer Operator', duration: '6 months - 1 year', salary: '₹12K - ₹28K/month', demand: 'Medium' },
            { title: 'Web Designer', duration: '1-2 years', salary: '₹15K - ₹45K/month', demand: 'High' },
            { title: 'Video Editor', duration: '6 months - 1 year', salary: '₹15K - ₹50K/month', demand: 'High' },
            { title: 'Graphic Designer', duration: '1-2 years', salary: '₹15K - ₹45K/month', demand: 'High' },
            { title: 'Digital Marketer', duration: '6 months - 1 year', salary: '₹12K - ₹40K/month', demand: 'Very High' },
            { title: 'Mobile Repair Technician', duration: '3-6 months', salary: '₹12K - ₹35K/month', demand: 'High' },
        ],
    },
    {
        category: 'Healthcare Support',
        icon: <LocalHospital />,
        careers: [
            { title: 'Nursing Assistant', duration: '1-2 years', salary: '₹12K - ₹30K/month', demand: 'High' },
            { title: 'Lab Technician', duration: '2 years', salary: '₹15K - ₹35K/month', demand: 'High' },
            { title: 'Pharmacy Assistant', duration: '1-2 years', salary: '₹12K - ₹28K/month', demand: 'Medium' },
            { title: 'Health Worker', duration: '6 months - 1 year', salary: '₹10K - ₹25K/month', demand: 'High' },
            { title: 'Medical Record Assistant', duration: '1 year', salary: '₹12K - ₹26K/month', demand: 'Medium' },
        ],
    },
    {
        category: 'Government / Defense',
        icon: <AccountBalance />,
        careers: [
            { title: 'Army Soldier', duration: '4 years commitment', salary: '₹21K - ₹69K/month', demand: 'High' },
            { title: 'Police Constable', duration: 'Varies by state', salary: '₹25K - ₹60K/month', demand: 'Medium' },
            { title: 'Railway Technician', duration: '2-3 years diploma', salary: '₹18K - ₹50K/month', demand: 'Medium' },
            { title: 'Forest Guard', duration: 'Varies', salary: '₹20K - ₹45K/month', demand: 'Low' },
        ],
    },
    {
        category: 'Entrepreneurship',
        icon: <Business />,
        careers: [
            { title: 'Small Shop Owner', duration: 'Self-paced', salary: 'Depends on business', demand: 'High' },
            { title: 'Repair Services', duration: 'Skill based', salary: '₹20K - ₹60K/month', demand: 'High' },
            { title: 'Freelancing (Design/Content)', duration: 'Skill based', salary: 'Variable', demand: 'Very High' },
            { title: 'Agriculture Based Business', duration: 'Self-paced', salary: 'Variable', demand: 'Medium' },
        ],
    },
];

// Career database for After 12th
const careersAfter12th = [
    {
        category: 'Science (MPC/PCM) - Engineering & Tech',
        icon: <Engineering />,
        stream: 'Science',
        careers: [
            { title: 'Software Engineer', degree: 'B.Tech CS', duration: '4 years', salary: '₹3.5L - ₹25L/year', demand: 'Very High' },
            { title: 'AI/ML Engineer', degree: 'B.Tech CS/AI', duration: '4 years', salary: '₹5L - ₹35L/year', demand: 'Very High' },
            { title: 'Data Scientist', degree: 'B.Tech/B.Sc + certifications', duration: '4 years', salary: '₹5L - ₹30L/year', demand: 'Very High' },
            { title: 'Mechanical Engineer', degree: 'B.Tech Mechanical', duration: '4 years', salary: '₹3L - ₹15L/year', demand: 'High' },
            { title: 'Civil Engineer', degree: 'B.Tech Civil', duration: '4 years', salary: '₹2.5L - ₹12L/year', demand: 'High' },
            { title: 'Electrical Engineer', degree: 'B.Tech Electrical', duration: '4 years', salary: '₹3L - ₹18L/year', demand: 'High' },
            { title: 'Robotics Engineer', degree: 'B.Tech Robotics', duration: '4 years', salary: '₹4L - ₹20L/year', demand: 'High' },
            { title: 'Aerospace Engineer', degree: 'B.Tech Aerospace', duration: '4 years', salary: '₹4L - ₹22L/year', demand: 'Medium' },
        ],
    },
    {
        category: 'Science (MPC/PCM) - Core Science',
        icon: <Science />,
        stream: 'Science',
        careers: [
            { title: 'Physicist', degree: 'B.Sc + M.Sc Physics', duration: '5 years', salary: '₹3L - ₹15L/year', demand: 'Medium' },
            { title: 'Chemist', degree: 'B.Sc + M.Sc Chemistry', duration: '5 years', salary: '₹2.5L - ₹12L/year', demand: 'Medium' },
            { title: 'Research Scientist', degree: 'B.Sc + M.Sc + PhD', duration: '8+ years', salary: '₹4L - ₹20L/year', demand: 'Medium' },
            { title: 'Statistician', degree: 'B.Sc Statistics', duration: '3-4 years', salary: '₹3L - ₹14L/year', demand: 'High' },
            { title: 'ISRO Scientist', degree: 'B.Tech + ISRO exam', duration: '4 years + selection', salary: '₹5L - ₹25L/year', demand: 'Low' },
            { title: 'DRDO Engineer', degree: 'B.Tech + DRDO exam', duration: '4 years + selection', salary: '₹5L - ₹20L/year', demand: 'Low' },
        ],
    },
    {
        category: 'Science (BiPC/PCB) - Medical',
        icon: <LocalHospital />,
        stream: 'Medical',
        careers: [
            { title: 'MBBS Doctor', degree: 'MBBS', duration: '5.5 years', salary: '₹6L - ₹50L/year', demand: 'Very High' },
            { title: 'Dentist', degree: 'BDS', duration: '5 years', salary: '₹4L - ₹30L/year', demand: 'High' },
            { title: 'Physiotherapist', degree: 'BPT', duration: '4.5 years', salary: '₹2.5L - ₹10L/year', demand: 'High' },
            { title: 'Pharmacist', degree: 'B.Pharm', duration: '4 years', salary: '₹2.5L - ₹8L/year', demand: 'High' },
            { title: 'Nurse', degree: 'B.Sc Nursing', duration: '4 years', salary: '₹2L - ₹8L/year', demand: 'Very High' },
            { title: 'Radiologist', degree: 'MBBS + MD', duration: '8.5 years', salary: '₹8L - ₹60L/year', demand: 'High' },
            { title: 'Lab Technologist', degree: 'B.Sc MLT', duration: '3 years', salary: '₹2L - ₹6L/year', demand: 'High' },
        ],
    },
    {
        category: 'Science (BiPC/PCB) - Allied Sciences',
        icon: <Science />,
        stream: 'Medical',
        careers: [
            { title: 'Biotechnology Specialist', degree: 'B.Tech/B.Sc Biotech', duration: '4 years', salary: '₹3L - ₹12L/year', demand: 'Medium' },
            { title: 'Nutritionist', degree: 'B.Sc Nutrition', duration: '3 years', salary: '₹2L - ₹8L/year', demand: 'Medium' },
            { title: 'Agriculture Scientist', degree: 'B.Sc Agriculture', duration: '4 years', salary: '₹2.5L - ₹10L/year', demand: 'High' },
            { title: 'Veterinary Doctor', degree: 'BVSc', duration: '5 years', salary: '₹3L - ₹15L/year', demand: 'Medium' },
        ],
    },
    {
        category: 'Commerce - Business & Finance',
        icon: <Business />,
        stream: 'Commerce',
        careers: [
            { title: 'Chartered Accountant (CA)', degree: 'CA', duration: '4-5 years', salary: '₹6L - ₹50L/year', demand: 'Very High' },
            { title: 'Company Secretary (CS)', degree: 'CS', duration: '3-4 years', salary: '₹4L - ₹25L/year', demand: 'High' },
            { title: 'Cost Accountant (CMA)', degree: 'CMA', duration: '3-4 years', salary: '₹4L - ₹20L/year', demand: 'High' },
            { title: 'Financial Analyst', degree: 'B.Com + MBA/CFA', duration: '5-6 years', salary: '₹4L - ₹30L/year', demand: 'Very High' },
            { title: 'Investment Banker', degree: 'B.Com + MBA', duration: '5 years', salary: '₹6L - ₹40L/year', demand: 'High' },
            { title: 'Tax Consultant', degree: 'B.Com + CA/CS', duration: '4-5 years', salary: '₹3L - ₹20L/year', demand: 'High' },
            { title: 'Business Analyst', degree: 'BBA/B.Com + MBA', duration: '5 years', salary: '₹4L - ₹25L/year', demand: 'Very High' },
            { title: 'Marketing Manager', degree: 'BBA + MBA', duration: '5 years', salary: '₹4L - ₹30L/year', demand: 'High' },
            { title: 'HR Manager', degree: 'BBA/B.Com + MBA', duration: '5 years', salary: '₹3L - ₹20L/year', demand: 'High' },
        ],
    },
    {
        category: 'Commerce - Government Jobs',
        icon: <AccountBalance />,
        stream: 'Commerce',
        careers: [
            { title: 'Banking Officer (IBPS PO)', degree: 'Any degree + exam', duration: '3 years + exam', salary: '₹4L - ₹15L/year', demand: 'Very High' },
            { title: 'SSC Jobs (CGL/CHSL)', degree: '12th/Graduation + exam', duration: 'Varies', salary: '₹2.5L - ₹10L/year', demand: 'Very High' },
            { title: 'Insurance Officer (LIC AAO)', degree: 'Graduation + exam', duration: '3 years + exam', salary: '₹4L - ₹12L/year', demand: 'Medium' },
        ],
    },
    {
        category: 'Arts/Humanities - Public Sector',
        icon: <AccountBalance />,
        stream: 'Arts',
        careers: [
            { title: 'UPSC Civil Services (IAS/IPS)', degree: 'Any degree + UPSC', duration: '3 years + exam', salary: '₹7L - ₹25L/year', demand: 'Very High' },
            { title: 'State Services (PCS)', degree: 'Any degree + exam', duration: '3 years + exam', salary: '₹5L - ₹15L/year', demand: 'High' },
            { title: 'Police Services', degree: 'Graduation + exam', duration: '3 years + exam', salary: '₹4L - ₹18L/year', demand: 'High' },
            { title: 'Social Worker', degree: 'BA/BSW', duration: '3 years', salary: '₹2L - ₹8L/year', demand: 'Medium' },
        ],
    },
    {
        category: 'Arts/Humanities - Creative',
        icon: <Palette />,
        stream: 'Arts',
        careers: [
            { title: 'Journalist', degree: 'BA Journalism', duration: '3 years', salary: '₹2.5L - ₹15L/year', demand: 'Medium' },
            { title: 'Writer/Author', degree: 'BA English/Creative Writing', duration: '3 years', salary: 'Variable', demand: 'Medium' },
            { title: 'Graphic Designer', degree: 'B.Des/BFA', duration: '3-4 years', salary: '₹2.5L - ₹12L/year', demand: 'High' },
            { title: 'Animator', degree: 'B.Sc Animation', duration: '3 years', salary: '₹2.5L - ₹15L/year', demand: 'High' },
            { title: 'Filmmaker', degree: 'Film School/BFA', duration: '3-4 years', salary: 'Variable', demand: 'Medium' },
            { title: 'Photographer', degree: 'Diploma/B.A', duration: '1-3 years', salary: 'Variable', demand: 'Medium' },
        ],
    },
    {
        category: 'Arts/Humanities - Academic & Legal',
        icon: <School />,
        stream: 'Arts',
        careers: [
            { title: 'Teacher', degree: 'BA/B.Sc + B.Ed', duration: '4 years', salary: '₹2.5L - ₹10L/year', demand: 'High' },
            { title: 'Professor', degree: 'MA + PhD', duration: '7-8 years', salary: '₹4L - ₹18L/year', demand: 'Medium' },
            { title: 'Lawyer', degree: 'LLB/BA LLB', duration: '3-5 years', salary: '₹3L - ₹50L/year', demand: 'High' },
            { title: 'Counselor/Psychologist', degree: 'BA Psychology + MA', duration: '5 years', salary: '₹2.5L - ₹12L/year', demand: 'High' },
        ],
    },
    {
        category: 'Vocational / Emerging (Any Stream)',
        icon: <Engineering />,
        stream: 'Any',
        careers: [
            { title: 'UI/UX Designer', degree: 'B.Des/Certification', duration: '6 months - 4 years', salary: '₹3L - ₹20L/year', demand: 'Very High' },
            { title: 'Full Stack Developer', degree: 'B.Tech/Bootcamp', duration: '6 months - 4 years', salary: '₹4L - ₹25L/year', demand: 'Very High' },
            { title: 'App Developer', degree: 'B.Tech/Certification', duration: '6 months - 4 years', salary: '₹3L - ₹20L/year', demand: 'Very High' },
            { title: 'Digital Marketing Specialist', degree: 'Any + Certification', duration: '3 months - 3 years', salary: '₹2.5L - ₹15L/year', demand: 'Very High' },
            { title: 'Content Creator', degree: 'Any', duration: 'Self-paced', salary: 'Variable', demand: 'Very High' },
            { title: 'Ethical Hacker', degree: 'B.Tech + Certifications', duration: '4 years', salary: '₹4L - ₹30L/year', demand: 'High' },
            { title: 'Cybersecurity Analyst', degree: 'B.Tech + Certifications', duration: '4 years', salary: '₹4L - ₹25L/year', demand: 'Very High' },
            { title: 'Cloud Engineer', degree: 'B.Tech + Certifications', duration: '4 years', salary: '₹4L - ₹28L/year', demand: 'Very High' },
        ],
    },
];

const Recommendations = () => {
    const navigate = useNavigate();
    const [viewMode, setViewMode] = useState('grid');
    const [studentType, setStudentType] = useState('');
    const [careersData, setCareersData] = useState([]);

    useEffect(() => {
        // Get student type from localStorage
        const type = localStorage.getItem('studentType');
        setStudentType(type || 'after-12th');

        // Set careers based on student type
        if (type === 'after-10th') {
            setCareersData(careersAfter10th);
        } else {
            setCareersData(careersAfter12th);
        }
    }, []);

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" onClick={() => navigate('/student/dashboard')}>
                        <ArrowBack />
                    </IconButton>
                    <RecommendIcon sx={{ ml: 2, mr: 2 }} />
                    <Typography variant="h6" fontWeight={700}>
                        Career Recommendations
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                {/* Header */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        {studentType === 'after-10th' ? 'Career Paths After 10th' : 'Career Paths After 12th'}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Comprehensive career options based on your profile and assessment
                    </Typography>
                    <Chip
                        label={studentType === 'after-10th' ? 'After 10th Standard' : 'After 12th Standard'}
                        color="primary"
                        sx={{ mt: 2 }}
                    />
                </Box>

                <Alert severity="info" sx={{ mb: 4 }}>
                    <Typography variant="body2">
                        These recommendations are based on your quiz responses. Explore each category to find careers that match your interests, strengths, and goals.
                    </Typography>
                </Alert>

                {/* Career Categories */}
                <Stack spacing={3}>
                    {careersData.map((categoryData, catIndex) => (
                        <Accordion key={catIndex} defaultExpanded={catIndex === 0}>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                                        {categoryData.icon}
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h6" fontWeight={600}>
                                            {categoryData.category}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {categoryData.careers.length} career options
                                        </Typography>
                                    </Box>
                                </Stack>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={2}>
                                    {categoryData.careers.map((career, index) => (
                                        <Grid item xs={12} md={6} key={index}>
                                            <Card
                                                variant="outlined"
                                                sx={{
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-4px)',
                                                        boxShadow: 4,
                                                        borderColor: 'primary.main',
                                                    },
                                                }}
                                            >
                                                <CardContent>
                                                    <Typography variant="h6" fontWeight={600} gutterBottom color="primary">
                                                        {career.title}
                                                    </Typography>

                                                    <Stack spacing={1}>
                                                        {career.degree && (
                                                            <Stack direction="row" spacing={1} alignItems="center">
                                                                <School fontSize="small" color="action" />
                                                                <Typography variant="body2" color="text.secondary">
                                                                    <strong>Degree:</strong> {career.degree}
                                                                </Typography>
                                                            </Stack>
                                                        )}

                                                        <Stack direction="row" spacing={1} alignItems="center">
                                                            <Typography variant="body2" color="text.secondary">
                                                                <strong>Duration:</strong> {career.duration}
                                                            </Typography>
                                                        </Stack>

                                                        <Stack direction="row" spacing={1} alignItems="center">
                                                            <AttachMoney fontSize="small" color="success" />
                                                            <Typography variant="body2" color="success.main">
                                                                <strong>{career.salary}</strong>
                                                            </Typography>
                                                        </Stack>

                                                        <Stack direction="row" spacing={1} alignItems="center">
                                                            <TrendingUp fontSize="small" color="primary" />
                                                            <Chip
                                                                label={`${career.demand} Demand`}
                                                                size="small"
                                                                color={
                                                                    career.demand === 'Very High' ? 'success' :
                                                                        career.demand === 'High' ? 'primary' :
                                                                            'default'
                                                                }
                                                            />
                                                        </Stack>
                                                    </Stack>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Stack>

                {/* Next Steps */}
                <Card sx={{ mt: 4, background: 'linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%)' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                            Next Steps
                        </Typography>
                        <Stack spacing={2}>
                            <Typography variant="body1">
                                ✅ Explore colleges and institutions that offer courses for your chosen career
                            </Typography>
                            <Typography variant="body1">
                                ✅ Research entrance exams required for your target courses
                            </Typography>
                            <Typography variant="body1">
                                ✅ Connect with professionals in your field of interest
                            </Typography>
                            <Typography variant="body1">
                                ✅ Start building relevant skills through online courses or certifications
                            </Typography>
                        </Stack>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/student/colleges')}
                            sx={{ mt: 3 }}
                        >
                            Browse Colleges
                        </Button>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default Recommendations;
