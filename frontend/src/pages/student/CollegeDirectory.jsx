import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    TextField,
    InputAdornment,
} from '@mui/material';
import {
    ArrowBack,
    School as SchoolIcon,
    Search as SearchIcon,
} from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';

const colleges = [
    { id: 1, name: 'MIT', location: 'Cambridge, MA', ranking: 1, tuition: '$53,818', acceptance: '4%', type: 'Private' },
    { id: 2, name: 'Stanford University', location: 'Stanford, CA', ranking: 2, tuition: '$55,473', acceptance: '4%', type: 'Private' },
    { id: 3, name: 'Harvard University', location: 'Cambridge, MA', ranking: 3, tuition: '$51,925', acceptance: '5%', type: 'Private' },
    { id: 4, name: 'UC Berkeley', location: 'Berkeley, CA', ranking: 4, tuition: '$43,176', acceptance: '15%', type: 'Public' },
    { id: 5, name: 'Caltech', location: 'Pasadena, CA', ranking: 5, tuition: '$56,394', acceptance: '3%', type: 'Private' },
    { id: 6, name: 'Carnegie Mellon', location: 'Pittsburgh, PA', ranking: 6, tuition: '$58,924', acceptance: '15%', type: 'Private' },
    { id: 7, name: 'UCLA', location: 'Los Angeles, CA', ranking: 7, tuition: '$42,218', acceptance: '12%', type: 'Public' },
    { id: 8, name: 'University of Michigan', location: 'Ann Arbor, MI', ranking: 8, tuition: '$51,200', acceptance: '23%', type: 'Public' },
    { id: 9, name: 'Georgia Tech', location: 'Atlanta, GA', ranking: 9, tuition: '$33,794', acceptance: '21%', type: 'Public' },
    { id: 10, name: 'UT Austin', location: 'Austin, TX', ranking: 10, tuition: '$38,326', acceptance: '32%', type: 'Public' },
];

const CollegeDirectory = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const columns = [
        {
            field: 'ranking',
            headerName: 'Rank',
            width: 80,
            align: 'center',
            headerAlign: 'center',
        },
        {
            field: 'name',
            headerName: 'College Name',
            width: 250,
            renderCell: (params) => (
                <Typography fontWeight={600}>{params.value}</Typography>
            ),
        },
        {
            field: 'location',
            headerName: 'Location',
            width: 200,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 120,
        },
        {
            field: 'tuition',
            headerName: 'Tuition',
            width: 130,
        },
        {
            field: 'acceptance',
            headerName: 'Acceptance Rate',
            width: 150,
        },
    ];

    const filteredColleges = colleges.filter((college) =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        college.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit" onClick={() => navigate('/student/dashboard')}>
                        <ArrowBack />
                    </IconButton>
                    <SchoolIcon sx={{ ml: 2, mr: 2 }} />
                    <Typography variant="h6" fontWeight={700}>
                        College Directory
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                    Explore Colleges
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Search and compare top colleges to find your perfect fit
                </Typography>

                <TextField
                    fullWidth
                    placeholder="Search by college name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ mb: 3 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />

                <Box sx={{ height: 600, width: '100%', bgcolor: 'white', borderRadius: 2 }}>
                    <DataGrid
                        rows={filteredColleges}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10, 25, 50]}
                        disableSelectionOnClick
                        sx={{
                            border: 'none',
                            '& .MuiDataGrid-cell:focus': {
                                outline: 'none',
                            },
                            '& .MuiDataGrid-row:hover': {
                                bgcolor: 'primary.50',
                            },
                        }}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default CollegeDirectory;
