import { createTheme } from '@mui/material/styles';

// Custom Material-UI theme for One Stop Career Guide
const theme = createTheme({
    palette: {
        primary: {
            main: '#2563eb', // Blue
            light: '#3b82f6',
            dark: '#1d4ed8',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#9333ea', // Purple
            light: '#a855f7',
            dark: '#7e22ce',
            contrastText: '#ffffff',
        },
        success: {
            main: '#10b981',
            light: '#34d399',
            dark: '#059669',
        },
        warning: {
            main: '#f59e0b',
            light: '#fbbf24',
            dark: '#d97706',
        },
        error: {
            main: '#ef4444',
            light: '#f87171',
            dark: '#dc2626',
        },
        background: {
            default: '#f9fafb',
            paper: '#ffffff',
        },
        text: {
            primary: '#111827',
            secondary: '#6b7280',
        },
    },
    typography: {
        fontFamily: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            'sans-serif',
        ].join(','),
        h1: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: '2.5rem',
            lineHeight: 1.2,
        },
        h2: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: '2rem',
            lineHeight: 1.3,
        },
        h3: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            fontSize: '1.75rem',
            lineHeight: 1.4,
        },
        h4: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.4,
        },
        h5: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            fontSize: '1.25rem',
            lineHeight: 1.5,
        },
        h6: {
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 600,
            fontSize: '1.125rem',
            lineHeight: 1.5,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12,
    },
    shadows: [
        'none',
        '0px 2px 4px rgba(0,0,0,0.05)',
        '0px 4px 8px rgba(0,0,0,0.08)',
        '0px 8px 16px rgba(0,0,0,0.1)',
        '0px 12px 24px rgba(0,0,0,0.12)',
        '0px 16px 32px rgba(0,0,0,0.14)',
        '0px 20px 40px rgba(0,0,0,0.16)',
        '0px 24px 48px rgba(0,0,0,0.18)',
        '0px 2px 4px rgba(37,99,235,0.1)',
        '0px 4px 8px rgba(37,99,235,0.12)',
        '0px 8px 16px rgba(37,99,235,0.14)',
        '0px 12px 24px rgba(37,99,235,0.16)',
        '0px 16px 32px rgba(37,99,235,0.18)',
        '0px 20px 40px rgba(37,99,235,0.2)',
        '0px 24px 48px rgba(37,99,235,0.22)',
        '0px 28px 56px rgba(37,99,235,0.24)',
        '0px 32px 64px rgba(37,99,235,0.26)',
        '0px 36px 72px rgba(37,99,235,0.28)',
        '0px 40px 80px rgba(37,99,235,0.3)',
        '0px 44px 88px rgba(37,99,235,0.32)',
        '0px 48px 96px rgba(37,99,235,0.34)',
        '0px 52px 104px rgba(37,99,235,0.36)',
        '0px 56px 112px rgba(37,99,235,0.38)',
        '0px 60px 120px rgba(37,99,235,0.4)',
        '0px 64px 128px rgba(37,99,235,0.42)',
    ],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    padding: '10px 24px',
                    fontSize: '1rem',
                    fontWeight: 600,
                    boxShadow: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
                        transform: 'translateY(-2px)',
                    },
                },
                contained: {
                    background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%)',
                    },
                },
                containedSecondary: {
                    background: 'linear-gradient(135deg, #9333ea 0%, #a855f7 100%)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #7e22ce 0%, #9333ea 100%)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        boxShadow: '0px 8px 24px rgba(0,0,0,0.12)',
                        transform: 'translateY(-4px)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 10,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#3b82f6',
                            },
                        },
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontWeight: 500,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
                    background: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
                },
            },
        },
    },
});

export default theme;
