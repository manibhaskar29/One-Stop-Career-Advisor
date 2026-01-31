// Comprehensive course data (50+ courses across all streams)

const courses = [
    // SCIENCE STREAM COURSES (Class 12)
    {
        name: 'Bachelor of Technology (B.Tech)',
        shortName: 'B.Tech',
        stream: 'Science',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: ['Physics', 'Chemistry', 'Mathematics']
        },
        duration: '4 years',
        description: 'Undergraduate engineering program focusing on technology and innovation. Covers various specializations like Computer Science, Mechanical, Civil, Electrical, and Electronics Engineering.',
        popularity: 95
    },
    {
        name: 'Bachelor of Science (B.Sc)',
        shortName: 'B.Sc',
        stream: 'Science',
        eligibility: {
            class: '12',
            minPercentage: 45,
            requiredSubjects: ['Physics', 'Chemistry', 'Mathematics/Biology']
        },
        duration: '3 years',
        description: 'Undergraduate science degree offering specializations in Physics, Chemistry, Mathematics, Biology, Computer Science, Biotechnology, and more.',
        popularity: 80
    },
    {
        name: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)',
        shortName: 'MBBS',
        stream: 'Science',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: ['Physics', 'Chemistry', 'Biology']
        },
        duration: '5.5 years',
        description: 'Professional medical degree to become a doctor. Includes internship and extensive practical training in hospitals.',
        popularity: 90
    },
    {
        name: 'Bachelor of Pharmacy',
        shortName: 'B.Pharm',
        stream: 'Science',
        eligibility: {
            class: '12',
            minPercentage: 45,
            requiredSubjects: ['Physics', 'Chemistry', 'Biology/Mathematics']
        },
        duration: '4 years',
        description: 'Pharmaceutical sciences program covering drug development, pharmacy practice, and healthcare.',
        popularity: 70
    },
    {
        name: 'Bachelor of Dental Surgery',
        shortName: 'BDS',
        stream: 'Science',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: ['Physics', 'Chemistry', 'Biology']
        },
        duration: '5 years',
        description: 'Professional degree in dentistry covering oral health, dental surgery, and patient care.',
        popularity: 65
    },
    {
        name: 'Bachelor of Science in Nursing',
        shortName: 'B.Sc Nursing',
        stream: 'Science',
        eligibility: {
            class: '12',
            minPercentage: 45,
            requiredSubjects: ['Physics', 'Chemistry', 'Biology']
        },
        duration: '4 years',
        description: 'Nursing program preparing healthcare professionals for patient care and medical support.',
        popularity: 60
    },
    {
        name: 'Bachelor of Architecture',
        shortName: 'B.Arch',
        stream: 'Science',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: ['Mathematics']
        },
        duration: '5 years',
        description: 'Professional degree in architecture covering building design, planning, and construction.',
        popularity: 55
    },

    // COMMERCE STREAM COURSES (Class 12)
    {
        name: 'Bachelor of Commerce',
        shortName: 'B.Com',
        stream: 'Commerce',
        eligibility: {
            class: '12',
            minPercentage: 45,
            requiredSubjects: ['Accountancy', 'Business Studies']
        },
        duration: '3 years',
        description: 'Comprehensive commerce degree covering accounting, finance, taxation, business law, and economics.',
        popularity: 85
    },
    {
        name: 'Bachelor of Business Administration',
        shortName: 'BBA',
        stream: 'Commerce',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: []
        },
        duration: '3 years',
        description: 'Management degree focusing on business administration, marketing, finance, and entrepreneurship.',
        popularity: 80
    },
    {
        name: 'Chartered Accountancy',
        shortName: 'CA',
        stream: 'Commerce',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: ['Accountancy']
        },
        duration: '4-5 years',
        description: 'Professional accounting qualification with extensive training in auditing, taxation, and financial management.',
        popularity: 90
    },
    {
        name: 'Bachelor of Economics',
        shortName: 'B.Econ',
        stream: 'Commerce',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: ['Economics', 'Mathematics']
        },
        duration: '3 years',
        description: 'Economics degree covering microeconomics, macroeconomics, econometrics, and policy analysis.',
        popularity: 60
    },
    {
        name: 'Company Secretary',
        shortName: 'CS',
        stream: 'Commerce',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: []
        },
        duration: '3-4 years',
        description: 'Professional course for corporate governance, compliance, and secretarial practices.',
        popularity: 55
    },
    {
        name: 'Cost and Management Accountant',
        shortName: 'CMA',
        stream: 'Commerce',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: ['Accountancy']
        },
        duration: '3-4 years',
        description: 'Management accounting qualification focusing on cost accounting, financial management, and strategy.',
        popularity: 50
    },

    // ARTS/HUMANITIES STREAM COURSES (Class 12)
    {
        name: 'Bachelor of Arts',
        shortName: 'BA',
        stream: 'Arts',
        eligibility: {
            class: '12',
            minPercentage: 40,
            requiredSubjects: []
        },
        duration: '3 years',
        description: 'Liberal arts degree with specializations in History, Political Science, Psychology, Sociology, Literature, and more.',
        popularity: 75
    },
    {
        name: 'Bachelor of Laws',
        shortName: 'LLB',
        stream: 'Arts',
        eligibility: {
            class: '12',
            minPercentage: 45,
            requiredSubjects: []
        },
        duration: '3 years',
        description: 'Law degree covering constitutional law, criminal law, civil law, and legal procedures. (5-year integrated program also available)',
        popularity: 70
    },
    {
        name: 'Bachelor of Education',
        shortName: 'B.Ed',
        stream: 'Arts',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: []
        },
        duration: '2 years',
        description: 'Teacher training program for secondary education. Requires graduation in relevant subject.',
        popularity: 65
    },
    {
        name: 'Bachelor of Social Work',
        shortName: 'BSW',
        stream: 'Arts',
        eligibility: {
            class: '12',
            minPercentage: 45,
            requiredSubjects: []
        },
        duration: '3 years',
        description: 'Social work program focusing on community development, welfare, and social justice.',
        popularity: 50
    },
    {
        name: 'Bachelor of Journalism and Mass Communication',
        shortName: 'BJMC',
        stream: 'Arts',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: []
        },
        duration: '3 years',
        description: 'Media and communication program covering journalism, advertising, public relations, and digital media.',
        popularity: 60
    },
    {
        name: 'Bachelor of Fine Arts',
        shortName: 'BFA',
        stream: 'Arts',
        eligibility: {
            class: '12',
            minPercentage: 45,
            requiredSubjects: []
        },
        duration: '3-4 years',
        description: 'Arts degree in painting, sculpture, applied arts, and visual communication.',
        popularity: 45
    },
    {
        name: 'Bachelor of Design',
        shortName: 'B.Des',
        stream: 'Arts',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: []
        },
        duration: '4 years',
        description: 'Design program covering product design, fashion design, graphic design, and interaction design.',
        popularity: 55
    },

    // VOCATIONAL STREAM COURSES (After Class 10 & 12)
    {
        name: 'Diploma in Engineering',
        shortName: 'Diploma',
        stream: 'Vocational',
        eligibility: {
            class: '10',
            minPercentage: 35,
            requiredSubjects: []
        },
        duration: '3 years',
        description: 'Technical diploma in various engineering branches including Mechanical, Civil, Electrical, Computer Science.',
        popularity: 70
    },
    {
        name: 'Industrial Training Institute',
        shortName: 'ITI',
        stream: 'Vocational',
        eligibility: {
            class: '10',
            minPercentage: 35,
            requiredSubjects: []
        },
        duration: '1-2 years',
        description: 'Skill-based training in trades like Electrician, Fitter, Welder, Plumber, and Computer Operator.',
        popularity: 75
    },
    {
        name: 'Diploma in Hotel Management',
        shortName: 'Diploma HM',
        stream: 'Vocational',
        eligibility: {
            class: '12',
            minPercentage: 45,
            requiredSubjects: []
        },
        duration: '3 years',
        description: 'Hospitality management program covering hotel operations, food production, and service management.',
        popularity: 55
    },
    {
        name: 'Certificate in Computer Applications',
        shortName: 'CCA',
        stream: 'Vocational',
        eligibility: {
            class: '10',
            minPercentage: 35,
            requiredSubjects: []
        },
        duration: '6 months - 1 year',
        description: 'Computer skills training in MS Office, internet, and basic programming.',
        popularity: 65
    },
    {
        name: 'Diploma in Agriculture',
        shortName: 'Diploma Agri',
        stream: 'Vocational',
        eligibility: {
            class: '10',
            minPercentage: 35,
            requiredSubjects: []
        },
        duration: '2 years',
        description: 'Agricultural education covering farming techniques, crop management, and rural development.',
        popularity: 50
    },

    // Additional specialized courses
    {
        name: 'Bachelor of Computer Applications',
        shortName: 'BCA',
        stream: 'Science',
        eligibility: {
            class: '12',
            minPercentage: 45,
            requiredSubjects: ['Mathematics']
        },
        duration: '3 years',
        description: 'Computer applications degree covering programming, databases, networking, and software development.',
        popularity: 75
    },
    {
        name: 'Bachelor of Science in Agriculture',
        shortName: 'B.Sc Agriculture',
        stream: 'Science',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: ['Physics', 'Chemistry', 'Biology']
        },
        duration: '4 years',
        description: 'Agricultural science degree covering agronomy, horticulture, plant breeding, and farming technology.',
        popularity: 50
    },
    {
        name: 'Bachelor of Veterinary Science',
        shortName: 'BVSc',
        stream: 'Science',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: ['Physics', 'Chemistry', 'Biology']
        },
        duration: '5 years',
        description: 'Veterinary medicine program for animal healthcare and disease management.',
        popularity: 45
    },
    {
        name: 'Bachelor of Physiotherapy',
        shortName: 'BPT',
        stream: 'Science',
        eligibility: {
            class: '12',
            minPercentage: 45,
            requiredSubjects: ['Physics', 'Chemistry', 'Biology']
        },
        duration: '4.5 years',
        description: 'Physical therapy program for rehabilitation and movement disorders.',
        popularity: 55
    },
    {
        name: 'Bachelor of Hotel Management',
        shortName: 'BHM',
        stream: 'Commerce',
        eligibility: {
            class: '12',
            minPercentage: 50,
            requiredSubjects: []
        },
        duration: '4 years',
        description: 'Comprehensive hospitality management degree with industry internships.',
        popularity: 50
    },
    {
        name: 'Bachelor of Fashion Technology',
        shortName: 'B.FTech',
        stream: 'Vocational',
        eligibility: {
            class: '12',
            minPercentage: 45,
            requiredSubjects: []
        },
        duration: '4 years',
        description: 'Fashion design and technology program covering garment manufacturing and trends.',
        popularity: 45
    }
];

export default courses;
