// Comprehensive career data with mappings to courses

const careers = [
    // SCIENCE & TECHNOLOGY CAREERS
    {
        title: 'Software Engineer',
        industries: ['Information Technology', 'Software Development', 'Tech Startups'],
        description: 'Design, develop, and maintain software applications and systems. Work with programming languages, frameworks, and development tools.',
        skills: ['Programming', 'Problem Solving', 'Algorithms', 'System Design', 'Team Collaboration'],
        governmentExams: ['GATE', 'ISRO Recruitment', 'BARC'],
        higherEducationOptions: ['M.Tech', 'MS in Computer Science', 'MBA'],
        salaryRange: { min: 400000, max: 2000000, currency: 'INR' },
        jobOutlook: 'Excellent',
        popularity: 95
    },
    {
        title: 'Doctor (Medical Practitioner)',
        industries: ['Healthcare', 'Hospitals', 'Private Practice'],
        description: 'Diagnose and treat illnesses, perform surgeries, and provide medical care to patients.',
        skills: ['Medical Knowledge', 'Patient Care', 'Decision Making', 'Communication', 'Empathy'],
        governmentExams: ['NEET PG', 'AIIMS PG', 'UPSC Medical Services'],
        higherEducationOptions: ['MD', 'MS', 'DM', 'MCh'],
        salaryRange: { min: 600000, max: 5000000, currency: 'INR' },
        jobOutlook: 'Excellent',
        popularity: 90
    },
    {
        title: 'Mechanical Engineer',
        industries: ['Manufacturing', 'Automobile', 'Aerospace', 'Energy'],
        description: 'Design, develop, and test mechanical devices and systems including machines, engines, and tools.',
        skills: ['CAD/CAM', 'Thermodynamics', 'Mechanics', 'Materials Science', 'Project Management'],
        governmentExams: ['GATE', 'UPSC Engineering Services', 'PSU Exams'],
        higherEducationOptions: ['M.Tech', 'MS', 'MBA'],
        salaryRange: { min: 350000, max: 1500000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 75
    },
    {
        title: 'Civil Engineer',
        industries: ['Construction', 'Infrastructure', 'Urban Planning', 'Government'],
        description: 'Plan, design, and oversee construction of buildings, roads, bridges, and infrastructure projects.',
        skills: ['Structural Analysis', 'AutoCAD', 'Project Management', 'Surveying', 'Construction Management'],
        governmentExams: ['GATE', 'UPSC', 'State PWD Exams', 'SSC JE'],
        higherEducationOptions: ['M.Tech in Structural Engineering', 'Urban Planning', 'MBA'],
        salaryRange: { min: 300000, max: 1200000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 70
    },
    {
        title: 'Data Scientist',
        industries: ['IT', 'Finance', 'E-commerce', 'Consulting'],
        description: 'Analyze complex data to help organizations make better decisions using statistical methods and machine learning.',
        skills: ['Python/R', 'Statistics', 'Machine Learning', 'Data Visualization', 'SQL'],
        governmentExams: ['Data Analyst positions in PSUs'],
        higherEducationOptions: ['MS in Data Science', 'MBA in Analytics'],
        salaryRange: { min: 600000, max: 2500000, currency: 'INR' },
        jobOutlook: 'Excellent',
        popularity: 85
    },
    {
        title: 'Pharmacist',
        industries: ['Healthcare', 'Pharmaceutical', 'Retail', 'Research'],
        description: 'Dispense medications, provide healthcare advice, and ensure safe use of prescription drugs.',
        skills: ['Pharmaceutical Knowledge', 'Patient Counseling', 'Drug Interactions', 'Healthcare Regulations'],
        governmentExams: ['GPAT', 'Government Hospital Pharmacist Exams'],
        higherEducationOptions: ['M.Pharm', 'PharmD', 'MBA Pharma'],
        salaryRange: { min: 250000, max: 800000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 60
    },
    {
        title: 'Research Scientist',
        industries: ['Research Institutions', 'Universities', 'R&D Labs', 'Government'],
        description: 'Conduct scientific research, experiments, and publish findings in specialized fields.',
        skills: ['Research Methodology', 'Data Analysis', 'Technical Writing', 'Laboratory Skills', 'Critical Thinking'],
        governmentExams: ['CSIR NET', 'GATE', 'ISRO', 'DRDO'],
        higherEducationOptions: ['M.Sc', 'PhD'],
        salaryRange: { min: 400000, max: 1500000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 55
    },
    {
        title: 'Architect',
        industries: ['Architecture Firms', 'Construction', 'Urban Planning', 'Real Estate'],
        description: 'Design buildings and structures, create blueprints, and oversee construction projects.',
        skills: ['AutoCAD', 'SketchUp', 'Design Thinking', 'Building Codes', 'Project Management'],
        governmentExams: ['GATE Architecture', 'Government PWD Architect Exams'],
        higherEducationOptions: ['M.Arch', 'Urban Planning'],
        salaryRange: { min: 350000, max: 1500000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 50
    },

    // COMMERCE & BUSINESS CAREERS
    {
        title: 'Chartered Accountant',
        industries: ['Accounting', 'Finance', 'Taxation', 'Consulting'],
        description: 'Manage financial records, conduct audits, provide tax advice, and ensure compliance with regulations.',
        skills: ['Accounting', 'Taxation', 'Auditing', 'Financial Analysis', 'Business Law'],
        governmentExams: ['UPSC', 'SSC Accountant', 'RBI Grade B'],
        higherEducationOptions: ['MBA Finance', 'CFA'],
        salaryRange: { min: 600000, max: 3000000, currency: 'INR' },
        jobOutlook: 'Excellent',
        popularity: 90
    },
    {
        title: 'Investment Banker',
        industries: ['Banking', 'Finance', 'Investment', 'Corporate Finance'],
        description: 'Help companies raise capital, manage mergers and acquisitions, and provide financial advisory services.',
        skills: ['Financial Modeling', 'Valuation', 'Market Analysis', 'Communication', 'Negotiation'],
        governmentExams: ['RBI Grade B', 'SEBI Grade A'],
        higherEducationOptions: ['MBA Finance', 'CFA', 'FRM'],
        salaryRange: { min: 800000, max: 5000000, currency: 'INR' },
        jobOutlook: 'Excellent',
        popularity: 75
    },
    {
        title: 'Business Manager',
        industries: ['Corporations', 'Consulting', 'Retail', 'Services'],
        description: 'Plan, direct, and coordinate operations of organizations to ensure efficiency and profitability.',
        skills: ['Leadership', 'Strategic Planning', 'Communication', 'Financial Management', 'Team Building'],
        governmentExams: ['UPSC', 'Bank PO', 'Management Trainee Exams'],
        higherEducationOptions: ['MBA', 'PGDM'],
        salaryRange: { min: 500000, max: 2500000, currency: 'INR' },
        jobOutlook: 'Excellent',
        popularity: 80
    },
    {
        title: 'Entrepreneur',
        industries: ['Startups', 'E-commerce', 'Services', 'Manufacturing'],
        description: 'Start and run your own business, identify opportunities, and create innovative solutions.',
        skills: ['Business Planning', 'Leadership', 'Risk Management', 'Innovation', 'Networking'],
        governmentExams: ['MUDRA Loan', 'Startup India initiatives'],
        higherEducationOptions: ['MBA', 'Executive Programs'],
        salaryRange: { min: 300000, max: 10000000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 70
    },
    {
        title: 'Marketing Manager',
        industries: ['FMCG', 'Technology', 'Retail', 'Services'],
        description: 'Develop marketing strategies, manage campaigns, and promote products or services to target audiences.',
        skills: ['Market Research', 'Digital Marketing', 'Brand Management', 'Analytics', 'Communication'],
        governmentExams: ['Marketing positions in PSUs'],
        higherEducationOptions: ['MBA Marketing', 'Digital Marketing Certifications'],
        salaryRange: { min: 400000, max: 2000000, currency: 'INR' },
        jobOutlook: 'Excellent',
        popularity: 75
    },
    {
        title: 'Financial Analyst',
        industries: ['Banking', 'Investment', 'Corporate', 'Consulting'],
        description: 'Analyze financial data, prepare reports, and provide recommendations for investment decisions.',
        skills: ['Financial Modeling', 'Excel', 'Data Analysis', 'Reporting', 'Market Research'],
        governmentExams: ['RBI', 'SEBI', 'Bank PO'],
        higherEducationOptions: ['MBA Finance', 'CFA'],
        salaryRange: { min: 400000, max: 1800000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 70
    },

    // ARTS & HUMANITIES CAREERS
    {
        title: 'Lawyer',
        industries: ['Legal Services', 'Corporate Law', 'Litigation', 'Government'],
        description: 'Represent clients in legal matters, provide legal advice, and advocate in courts.',
        skills: ['Legal Research', 'Argumentation', 'Writing', 'Communication', 'Critical Thinking'],
        governmentExams: ['Judicial Services', 'CLAT', 'Law Officer Exams'],
        higherEducationOptions: ['LLM', 'Specialization in Corporate/Criminal Law'],
        salaryRange: { min: 400000, max: 3000000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 75
    },
    {
        title: 'Teacher/Professor',
        industries: ['Education', 'Schools', 'Colleges', 'Universities'],
        description: 'Educate students, develop curriculum, conduct research, and contribute to academic development.',
        skills: ['Subject Expertise', 'Communication', 'Patience', 'Curriculum Development', 'Assessment'],
        governmentExams: ['CTET', 'UGC NET', 'State TET', 'KVS/NVS Exams'],
        higherEducationOptions: ['M.Ed', 'PhD', 'Subject specializations'],
        salaryRange: { min: 300000, max: 1200000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 80
    },
    {
        title: 'Journalist',
        industries: ['Media', 'News', 'Digital Media', 'Broadcasting'],
        description: 'Research, write, and report news stories across various media platforms.',
        skills: ['Writing', 'Research', 'Communication', 'Ethics', 'Digital Media'],
        governmentExams: ['DD News', 'AIR', 'Press Information Bureau'],
        higherEducationOptions: ['Masters in Journalism', 'Specializations'],
        salaryRange: { min: 250000, max: 1500000, currency: 'INR' },
        jobOutlook: 'Average',
        popularity: 60
    },
    {
        title: 'Psychologist',
        industries: ['Healthcare', 'Counseling', 'Corporate', 'Education'],
        description: 'Study human behavior, provide therapy, and help individuals overcome mental health challenges.',
        skills: ['Counseling', 'Assessment', 'Empathy', 'Communication', 'Research'],
        governmentExams: ['RCI Licence', 'Clinical Psychologist positions'],
        higherEducationOptions: ['M.Phil', 'PhD in Psychology'],
        salaryRange: { min: 300000, max: 1000000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 55
    },
    {
        title: 'Social Worker',
        industries: ['NGOs', 'Government', 'Healthcare', 'Community Development'],
        description: 'Work with communities to improve social welfare, provide support services, and advocate for change.',
        skills: ['Empathy', 'Communication', 'Organization', 'Advocacy', 'Community Engagement'],
        governmentExams: ['UPSC', 'State Social Welfare Exams'],
        higherEducationOptions: ['MSW', 'Specializations in different areas'],
        salaryRange: { min: 200000, max: 800000, currency: 'INR' },
        jobOutlook: 'Average',
        popularity: 45
    },
    {
        title: 'Content Writer',
        industries: ['Digital Marketing', 'Media', 'Publishing', 'Corporate'],
        description: 'Create engaging written content for websites, blogs, marketing materials, and publications.',
        skills: ['Writing', 'SEO', 'Research', 'Creativity', 'Editing'],
        governmentExams: ['Limited government opportunities'],
        higherEducationOptions: ['Masters in English/Communication', 'Certifications'],
        salaryRange: { min: 250000, max: 1000000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 65
    },
    {
        title: 'Graphic Designer',
        industries: ['Advertising', 'Media', 'Digital Marketing', 'Publishing'],
        description: 'Create visual concepts using software or by hand to communicate ideas that inspire and inform.',
        skills: ['Adobe Suite', 'Creativity', 'Typography', 'Branding', 'UI/UX'],
        governmentExams: ['Designer positions in government organizations'],
        higherEducationOptions: ['Advanced Design courses', 'Specializations'],
        salaryRange: { min: 250000, max: 1200000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 60
    },

    // VOCATIONAL & TECHNICAL CAREERS
    {
        title: 'Electrician',
        industries: ['Construction', 'Maintenance', 'Manufacturing', 'Self-employed'],
        description: 'Install, maintain, and repair electrical systems in homes, businesses, and factories.',
        skills: ['Electrical Systems', 'Circuit Analysis', 'Safety Protocols', 'Troubleshooting', 'Blueprint Reading'],
        governmentExams: ['Railway Electrician', 'State Electricity Board Exams'],
        higherEducationOptions: ['Advanced certifications', 'Supervisory courses'],
        salaryRange: { min: 200000, max: 600000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 65
    },
    {
        title: 'Chef/Cook',
        industries: ['Hospitality', 'Restaurants', 'Hotels', 'Catering'],
        description: 'Prepare meals, develop menus, and manage kitchen operations in various food service establishments.',
        skills: ['Cooking Techniques', 'Food Safety', 'Menu Planning', 'Creativity', 'Time Management'],
        governmentExams: ['Railway Catering', 'Defence Canteen'],
        higherEducationOptions: ['Advanced Culinary Arts', 'Hotel Management'],
        salaryRange: { min: 200000, max: 1000000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 60
    },
    {
        title: 'Computer Operator',
        industries: ['IT Services', 'Government', 'Banking', 'Corporate'],
        description: 'Operate computer systems, manage data entry, and maintain computer hardware and software.',
        skills: ['Computer Skills', 'Typing', 'Data Entry', 'MS Office', 'Basic Troubleshooting'],
        governmentExams: ['SSC Data Entry Operator', 'Bank Clerk'],
        higherEducationOptions: ['Advanced IT certifications', 'BCA'],
        salaryRange: { min: 150000, max: 400000, currency: 'INR' },
        jobOutlook: 'Average',
        popularity: 70
    },
    {
        title: 'Agricultural Officer',
        industries: ['Agriculture', 'Government', 'Agribusiness', 'Rural Development'],
        description: 'Provide technical guidance to farmers, implement agricultural programs, and promote modern farming.',
        skills: ['Agricultural Knowledge', 'Extension Services', 'Communication', 'Problem Solving'],
        governmentExams: ['IBPS SO Agriculture', 'State Agriculture Service', 'FCI'],
        higherEducationOptions: ['M.Sc Agriculture', 'MBA Agribusiness'],
        salaryRange: { min: 300000, max: 800000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 50
    },

    // GOVERNMENT SERVICE CAREERS
    {
        title: 'Civil Services Officer (IAS/IPS/IFS)',
        industries: ['Government Administration', 'Public Policy', 'Law Enforcement'],
        description: 'Serve in administrative, police, or foreign services at national and state levels.',
        skills: ['Leadership', 'Decision Making', 'Public Administration', 'Communication', 'Ethics'],
        governmentExams: ['UPSC CSE', 'State PCS'],
        higherEducationOptions: ['Mid-career training programs'],
        salaryRange: { min: 600000, max: 2500000, currency: 'INR' },
        jobOutlook: 'Excellent',
        popularity: 85
    },
    {
        title: 'Bank Officer',
        industries: ['Banking', 'Finance', 'Public Sector Banks'],
        description: 'Manage banking operations, customer service, loans, and financial products.',
        skills: ['Banking Operations', 'Customer Service', 'Financial Products', 'Risk Assessment'],
        governmentExams: ['IBPS PO', 'SBI PO', 'RBI Grade B'],
        higherEducationOptions: ['MBA Banking', 'CAIIB'],
        salaryRange: { min: 400000, max: 1500000, currency: 'INR' },
        jobOutlook: 'Good',
        popularity: 80
    }
];

export default careers;
