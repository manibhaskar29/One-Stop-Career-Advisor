// Timeline events for admissions, scholarships, and exams

const timelineEvents = [
    // ENTRANCE EXAMS
    {
        title: 'JEE Main 2026 - Session 1',
        type: 'exam',
        description: 'Joint Entrance Examination Main for admission to engineering programs (B.Tech/B.E/B.Arch)',
        startDate: new Date('2026-01-24'),
        endDate: new Date('2026-02-01'),
        targetClass: '12',
        targetStream: 'Science',
        priority: 'high'
    },
    {
        title: 'NEET UG 2026',
        type: 'exam',
        description: 'National Eligibility cum Entrance Test for MBBS, BDS, AYUSH and other medical courses',
        startDate: new Date('2026-05-03'),
        endDate: new Date('2026-05-03'),
        targetClass: '12',
        targetStream: 'Science',
        priority: 'high'
    },
    {
        title: 'CLAT 2026',
        type: 'exam',
        description: 'Common Law Admission Test for admission to National Law Universities',
        startDate: new Date('2026-12-06'),
        endDate: new Date('2026-12-06'),
        targetClass: '12',
        targetStream: 'All',
        priority: 'high'
    },
    {
        title: 'CAT 2026',
        type: 'exam',
        description: 'Common Admission Test for MBA programs in IIMs and other B-Schools',
        startDate: new Date('2026-11-22'),
        endDate: new Date('2026-11-22'),
        targetClass: '12',
        targetStream: 'All',
        priority: 'medium'
    },

    // ADMISSION DEADLINES
    {
        title: 'DU Undergraduate Admissions 2026',
        type: 'admission',
        description: 'Delhi University undergraduate admission process through CUET scores',
        startDate: new Date('2026-06-15'),
        endDate: new Date('2026-07-31'),
        targetClass: '12',
        targetStream: 'All',
        priority: 'high'
    },
    {
        title: 'Engineering College Admissions - Maharashtra',
        type: 'admission',
        description: 'CAP round admissions for engineering colleges in Maharashtra through MHT-CET',
        startDate: new Date('2026-07-01'),
        endDate: new Date('2026-08-15'),
        targetClass: '12',
        targetStream: 'Science',
        priority: 'high'
    },
    {
        title: 'Commerce College Admissions',
        type: 'admission',
        description: 'Merit-based admissions to government commerce colleges',
        startDate: new Date('2026-06-10'),
        endDate: new Date('2026-07-25'),
        targetClass: '12',
        targetStream: 'Commerce',
        priority: 'high'
    },
    {
        title: 'Arts College Admissions',
        type: 'admission',
        description: 'Admissions to BA programs in government and aided colleges',
        startDate: new Date('2026-06-20'),
        endDate: new Date('2026-07-31'),
        targetClass: '12',
        targetStream: 'Arts',
        priority: 'medium'
    },
    {
        title: 'Polytechnic Diploma Admissions',
        type: 'admission',
        description: 'Admissions to diploma engineering courses after Class 10',
        startDate: new Date('2026-05-15'),
        endDate: new Date('2026-07-10'),
        targetClass: '10',
        targetStream: 'All',
        priority: 'high'
    },
    {
        title: 'ITI Admissions 2026',
        type: 'admission',
        description: 'Industrial Training Institute admissions for various trades',
        startDate: new Date('2026-06-01'),
        endDate: new Date('2026-07-20'),
        targetClass: '10',
        targetStream: 'All',
        priority: 'medium'
    },

    // SCHOLARSHIPS
    {
        title: 'National Scholarship Portal - Pre-Matric',
        type: 'scholarship',
        description: 'Scholarship for students from Class 9-10 from SC/ST/OBC/Minority communities',
        startDate: new Date('2026-08-01'),
        endDate: new Date('2026-10-31'),
        targetClass: '10',
        targetStream: 'All',
        priority: 'high'
    },
    {
        title: 'National Scholarship Portal - Post-Matric',
        type: 'scholarship',
        description: 'Scholarship for students pursuing higher education after Class 12',
        startDate: new Date('2026-08-01'),
        endDate: new Date('2026-11-30'),
        targetClass: '12',
        targetStream: 'All',
        priority: 'high'
    },
    {
        title: 'INSPIRE Scholarship',
        type: 'scholarship',
        description: 'Innovation in Science Pursuit for Inspired Research (INSPIRE) for science students',
        startDate: new Date('2026-07-01'),
        endDate: new Date('2026-09-30'),
        targetClass: '12',
        targetStream: 'Science',
        priority: 'medium'
    },
    {
        title: 'Merit-cum-Means Scholarship',
        type: 'scholarship',
        description: 'Central government scholarship for economically disadvantaged meritorious students',
        startDate: new Date('2026-09-01'),
        endDate: new Date('2026-11-15'),
        targetClass: 'both',
        targetStream: 'All',
        priority: 'medium'
    },
    {
        title: 'District Minority Scholarship',
        type: 'scholarship',
        description: 'Scholarship for minority community students at district level',
        startDate: new Date('2026-08-15'),
        endDate: new Date('2026-10-31'),
        targetClass: 'both',
        targetStream: 'All',
        priority: 'medium'
    },

    // COUNSELING EVENTS
    {
        title: 'JoSAA Counseling 2026',
        type: 'counseling',
        description: 'Joint Seat Allocation Authority counseling for IITs, NITs, IIITs and GFTIs',
        startDate: new Date('2026-06-15'),
        endDate: new Date('2026-07-20'),
        targetClass: '12',
        targetStream: 'Science',
        priority: 'high'
    },
    {
        title: 'NEET Counseling - All India Quota',
        type: 'counseling',
        description: 'MCC counseling for All India Quota medical and dental seats',
        startDate: new Date('2026-07-01'),
        endDate: new Date('2026-08-15'),
        targetClass: '12',
        targetStream: 'Science',
        priority: 'high'
    },
    {
        title: 'State Engineering Counseling',
        type: 'counseling',
        description: 'State-level counseling for engineering college admissions',
        startDate: new Date('2026-07-10'),
        endDate: new Date('2026-08-20'),
        targetClass: '12',
        targetStream: 'Science',
        priority: 'high'
    },
    {
        title: 'CLAT Counseling',
        type: 'counseling',
        description: 'Counseling for admission to National Law Universities',
        startDate: new Date('2026-07-01'),
        endDate: new Date('2026-08-05'),
        targetClass: '12',
        targetStream: 'All',
        priority: 'medium'
    },

    // REGISTRATION DEADLINES
    {
        title: 'JEE Main 2026 - Application',
        type: 'exam',
        description: 'Last date to apply for JEE Main January session',
        startDate: new Date('2025-12-01'),
        endDate: new Date('2025-12-31'),
        targetClass: '12',
        targetStream: 'Science',
        priority: 'high'
    },
    {
        title: 'NEET 2026 - Application',
        type: 'exam',
        description: 'Application process for NEET UG 2026',
        startDate: new Date('2026-02-10'),
        endDate: new Date('2026-03-15'),
        targetClass: '12',
        targetStream: 'Science',
        priority: 'high'
    },
    {
        title: 'CUET 2026 Registration',
        type: 'exam',
        description: 'Common University Entrance Test registration for central university admissions',
        startDate: new Date('2026-02-15'),
        endDate: new Date('2026-03-31'),
        targetClass: '12',
        targetStream: 'All',
        priority: 'high'
    }
];

export default timelineEvents;
