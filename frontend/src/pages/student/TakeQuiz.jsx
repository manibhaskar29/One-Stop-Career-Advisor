import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizAPI } from '../../services/api';
import {
    Box,
    Container,
    Card,
    CardContent,
    Typography,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    LinearProgress,
    Stack,
    AppBar,
    Toolbar,
    IconButton,
    Chip,
    Stepper,
    Step,
    StepLabel,
    FormControl,
    RadioGroup as MuiRadioGroup,
    CircularProgress,
} from '@mui/material';
import {
    ArrowBack,
    Quiz as QuizIcon,
    CheckCircle,
    NavigateNext,
    School,
    AutoAwesome,
} from '@mui/icons-material';

const studentTypeQuestions = [
    {
        id: 'student-type',
        type: 'selection',
        question: 'What is your current education level?',
        options: [
            { value: 'after-10th', label: 'After 10th Standard', description: 'Looking for career paths after completing 10th grade' },
            { value: 'after-12th', label: 'After 12th Standard', description: 'Looking for career paths after completing 12th grade' },
        ],
    },
];

const quizQuestions = [
    // Section A: Academic Strength (5 questions - Most Predictive)
    {
        section: 'A',
        sectionTitle: 'Academic Strength',
        questions: [
            'I can solve maths problems faster than most of my classmates.',
            'I enjoy understanding how machines or gadgets work.',
            'I can easily understand biology or health related topics.',
            'I am comfortable with accounting or money calculations.',
            'I like coding, logical puzzles, or step-by-step problem solving.',
        ],
    },
    // Section B: Interests (5 questions)
    {
        section: 'B',
        sectionTitle: 'Interests',
        questions: [
            'I often explore new technologies or innovations.',
            'I enjoy helping people with their problems.',
            'I like creating designs, videos, or creative content.',
            'I feel excited about business ideas or startups.',
            'I am interested in health, fitness, or medical fields.',
        ],
    },
    // Section C: Work Style & Personality (4 questions)
    {
        section: 'C',
        sectionTitle: 'Work Style & Personality',
        questions: [
            'I enjoy solving complex problems for long hours.',
            'I like taking leadership roles.',
            'I prefer stable government jobs over risky private jobs.',
            'I am comfortable speaking or interacting with many people daily.',
        ],
    },
    // Section D: Career Constraints (4 questions - Very Important for India)
    {
        section: 'D',
        sectionTitle: 'Career Constraints',
        questions: [
            'I want to start earning money as early as possible.',
            'I am willing to study for 5 to 8 years for higher education.',
            'I prefer low-cost government colleges.',
            'I am open to skill-based or diploma courses.',
        ],
    },
    // Section E: Situational Questions (4 questions - Strongest indicators)
    {
        section: 'E',
        sectionTitle: 'Situational Questions',
        type: 'situational',
        questions: [
            {
                question: 'If given free time, I would choose:',
                options: ['Fixing gadgets', 'Reading books', 'Drawing/Creating', 'Planning business', 'Helping people'],
            },
            {
                question: 'In school projects, I usually:',
                options: ['Lead the team', 'Research content', 'Design visuals', 'Present', 'Calculate/Budget'],
            },
            {
                question: 'I feel more proud when:',
                options: ['Building something', 'Helping someone', 'Earning money', 'Winning exams', 'Creating art'],
            },
            {
                question: 'My dream work environment:',
                options: ['Laboratory', 'Hospital', 'Office', 'Outdoor site', 'Classroom', 'Studio'],
            },
        ],
    },
];

const scaleOptions = [
    { value: 5, label: 'Strongly Agree' },
    { value: 4, label: 'Agree' },
    { value: 3, label: 'Neutral' },
    { value: 2, label: 'Disagree' },
    { value: 1, label: 'Strongly Disagree' },
];

const TakeQuiz = () => {
    const navigate = useNavigate();
    const [studentType, setStudentType] = useState('');
    const [showTypeSelection, setShowTypeSelection] = useState(true);
    const [currentSection, setCurrentSection] = useState(0);
    const [currentQuestionInSection, setCurrentQuestionInSection] = useState(0);
    const [answers, setAnswers] = useState({});
    const [completed, setCompleted] = useState(false);
    const [analyzingQuiz, setAnalyzingQuiz] = useState(false);
    const [analysisError, setAnalysisError] = useState('');

    const handleStudentTypeSelect = (type) => {
        setStudentType(type);
        setShowTypeSelection(false);
    };

    const handleAnswer = (answer) => {
        const key = `${currentSection}-${currentQuestionInSection}`;
        setAnswers({ ...answers, [key]: answer });
    };

    const getCurrentQuestion = () => {
        const section = quizQuestions[currentSection];
        if (section.type === 'situational') {
            return section.questions[currentQuestionInSection];
        }
        return section.questions[currentQuestionInSection];
    };

    const getTotalQuestions = () => {
        return quizQuestions.reduce((total, section) => total + section.questions.length, 0);
    };

    const getCurrentQuestionNumber = () => {
        let count = 0;
        for (let i = 0; i < currentSection; i++) {
            count += quizQuestions[i].questions.length;
        }
        return count + currentQuestionInSection + 1;
    };

    const analyzeQuizWithAI = async () => {
        setAnalyzingQuiz(true);
        setAnalysisError('');

        try {
            console.log('📊 Sending quiz data to AI for analysis...');

            // Call backend AI analysis API
            const response = await quizAPI.analyze({
                answers,
                studentType
            });

            if (response.data.success) {
                console.log('✅ AI analysis complete!');

                // Save everything to localStorage
                localStorage.setItem('quizAnswers', JSON.stringify(answers));
                localStorage.setItem('studentType', studentType);
                localStorage.setItem('aiRecommendations', JSON.stringify(response.data.data));

                setCompleted(true);
            } else {
                throw new Error(response.data.error || 'Analysis failed');
            }
        } catch (error) {
            console.error('❌ AI analysis error:', error);
            setAnalysisError(error.response?.data?.message || error.message || 'Failed to analyze quiz. Please try again.');

            // Save basic data and continue anyway
            localStorage.setItem('quizAnswers', JSON.stringify(answers));
            localStorage.setItem('studentType', studentType);

            // Show error for 3 seconds then proceed
            setTimeout(() => {
                setAnalyzingQuiz(false);
                setCompleted(true);
            }, 3000);
        }
    };

    const handleNext = async () => {
        const currentSectionData = quizQuestions[currentSection];

        if (currentQuestionInSection < currentSectionData.questions.length - 1) {
            setCurrentQuestionInSection(currentQuestionInSection + 1);
        } else if (currentSection < quizQuestions.length - 1) {
            setCurrentSection(currentSection + 1);
            setCurrentQuestionInSection(0);
        } else {
            // Quiz completed - analyze with AI
            await analyzeQuizWithAI();
        }
    };

    const handleBack = () => {
        if (currentQuestionInSection > 0) {
            setCurrentQuestionInSection(currentQuestionInSection - 1);
        } else if (currentSection > 0) {
            setCurrentSection(currentSection - 1);
            setCurrentQuestionInSection(quizQuestions[currentSection - 1].questions.length - 1);
        }
    };

    const progress = (getCurrentQuestionNumber() / getTotalQuestions()) * 100;
    const currentKey = `${currentSection}-${currentQuestionInSection}`;
    const currentAnswer = answers[currentKey];

    // Student Type Selection Screen
    if (showTypeSelection) {
        return (
            <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" onClick={() => navigate('/student/dashboard')}>
                            <ArrowBack />
                        </IconButton>
                        <QuizIcon sx={{ ml: 2, mr: 2 }} />
                        <Typography variant="h6" fontWeight={700}>
                            Career Assessment Quiz
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Container maxWidth="md" sx={{ mt: 8 }}>
                    <Card>
                        <CardContent sx={{ p: 6, textAlign: 'center' }}>
                            <School sx={{ fontSize: 80, color: 'primary.main', mb: 3 }} />
                            <Typography variant="h4" fontWeight={700} gutterBottom>
                                Welcome to Career Assessment
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
                                Select your current education level to get personalized career recommendations
                            </Typography>

                            <Stack spacing={3}>
                                {studentTypeQuestions[0].options.map((option) => (
                                    <Card
                                        key={option.value}
                                        variant="outlined"
                                        sx={{
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                borderColor: 'primary.main',
                                                bgcolor: 'primary.50',
                                                transform: 'scale(1.02)',
                                            },
                                        }}
                                        onClick={() => handleStudentTypeSelect(option.value)}
                                    >
                                        <CardContent sx={{ p: 4 }}>
                                            <Typography variant="h5" fontWeight={600} gutterBottom color="primary">
                                                {option.label}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {option.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        );
    }

    // AI Analysis Loading Screen
    if (analyzingQuiz) {
        return (
            <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
                <AppBar position="static">
                    <Toolbar>
                        <AutoAwesome sx={{ mr: 2 }} />
                        <Typography variant="h6" fontWeight={700}>
                            AI Career Analysis
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
                    <CircularProgress size={80} sx={{ mb: 4, color: 'primary.main' }} />
                    <Typography variant="h4" fontWeight={700} gutterBottom>
                        Analyzing Your Responses...
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                        Our AI is generating personalized career recommendations based on your:
                    </Typography>
                    <Stack spacing={2} sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
                        <Chip label="✓ Academic Strengths" color="success" />
                        <Chip label="✓ Personal Interests" color="success" />
                        <Chip label="✓ Work Style Preferences" color="success" />
                        <Chip label="✓ Career Constraints" color="success" />
                        <Chip label="✓ Behavioral Patterns" color="success" />
                    </Stack>
                    <Typography variant="body1" color="text.secondary">
                        This may take a few seconds...
                    </Typography>

                    {analysisError && (
                        <Alert severity="error" sx={{ mt: 3, maxWidth: 600, mx: 'auto' }}>
                            {analysisError}
                        </Alert>
                    )}
                </Container>
            </Box>
        );
    }

    // Completion Screen
    if (completed) {
        return (
            <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
                <AppBar position="static">
                    <Toolbar>
                        <QuizIcon sx={{ mr: 2 }} />
                        <Typography variant="h6" fontWeight={700}>
                            Career Assessment Quiz
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Container maxWidth="md" sx={{ mt: 8, textAlign: 'center' }}>
                    <CheckCircle sx={{ fontSize: 100, color: 'success.main', mb: 3 }} />
                    <Typography variant="h3" fontWeight={700} gutterBottom>
                        Assessment Completed!</Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                        Excellent! We've analyzed your responses across all 5 sections to generate personalized career recommendations based on your strengths, interests, and preferences.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => navigate('/student/recommendations')}
                        sx={{ px: 6, py: 2, fontSize: '1.1rem' }}
                    >
                        View My Career Recommendations
                    </Button>
                </Container>
            </Box>
        );
    }

    // Quiz Screen
    const currentSectionData = quizQuestions[currentSection];
    const isFirstQuestion = currentSection === 0 && currentQuestionInSection === 0;
    const isSituational = currentSectionData.type === 'situational';
    const question = isSituational ? getCurrentQuestion() : getCurrentQuestion();

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" onClick={() => navigate('/student/dashboard')}>
                        <ArrowBack />
                    </IconButton>
                    <QuizIcon sx={{ ml: 2, mr: 2 }} />
                    <Typography variant="h6" fontWeight={700}>
                        Career Assessment Quiz
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
                {/* Section Stepper */}
                <Stepper activeStep={currentSection} sx={{ mb: 4 }}>
                    {quizQuestions.map((section, index) => (
                        <Step key={index}>
                            <StepLabel>Section {section.section}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Card>
                    <CardContent sx={{ p: 4 }}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                            <Chip
                                label={`Section ${currentSectionData.section}: ${currentSectionData.sectionTitle}`}
                                color="primary"
                                sx={{ fontWeight: 600 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                Question {getCurrentQuestionNumber()} of {getTotalQuestions()}
                            </Typography>
                        </Stack>

                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{ mb: 4, height: 8, borderRadius: 4 }}
                        />

                        <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mb: 4 }}>
                            {isSituational ? question.question : question}
                        </Typography>

                        {isSituational ? (
                            // Situational MCQ
                            <Stack spacing={2}>
                                {question.options.map((option, index) => (
                                    <Card
                                        key={index}
                                        variant="outlined"
                                        sx={{
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                borderColor: 'primary.main',
                                                bgcolor: 'primary.50',
                                            },
                                            bgcolor: currentAnswer === option ? 'primary.50' : 'transparent',
                                            borderColor: currentAnswer === option ? 'primary.main' : 'grey.300',
                                            borderWidth: currentAnswer === option ? 2 : 1,
                                        }}
                                        onClick={() => handleAnswer(option)}
                                    >
                                        <CardContent sx={{ py: 2 }}>
                                            <Typography variant="body1" fontWeight={currentAnswer === option ? 600 : 400}>
                                                {option}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Stack>
                        ) : (
                            // Likert Scale
                            <Stack spacing={2}>
                                {scaleOptions.map((option) => (
                                    <Card
                                        key={option.value}
                                        variant="outlined"
                                        sx={{
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                borderColor: 'primary.main',
                                                bgcolor: 'primary.50',
                                            },
                                            bgcolor: currentAnswer === option.value ? 'primary.50' : 'transparent',
                                            borderColor: currentAnswer === option.value ? 'primary.main' : 'grey.300',
                                            borderWidth: currentAnswer === option.value ? 2 : 1,
                                        }}
                                        onClick={() => handleAnswer(option.value)}
                                    >
                                        <CardContent sx={{ py: 2 }}>
                                            <Typography variant="body1" fontWeight={currentAnswer === option.value ? 600 : 400}>
                                                {option.label}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Stack>
                        )}

                        <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ mt: 4 }}>
                            <Button
                                disabled={isFirstQuestion}
                                onClick={handleBack}
                                variant="outlined"
                                sx={{ px: 4 }}
                            >
                                Back
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleNext}
                                disabled={!currentAnswer}
                                endIcon={<NavigateNext />}
                                sx={{ px: 4 }}
                            >
                                {currentSection === quizQuestions.length - 1 &&
                                    currentQuestionInSection === currentSectionData.questions.length - 1
                                    ? 'Finish'
                                    : 'Next'}
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};

export default TakeQuiz;
