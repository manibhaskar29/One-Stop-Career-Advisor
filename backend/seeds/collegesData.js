// Sample government colleges across different states of India

const colleges = [
    // MAHARASHTRA
    {
        name: 'Government College of Engineering, Pune',
        location: { district: 'Pune', city: 'Pune', state: 'Maharashtra', pincode: '411005' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'Minimum 50% in Class 12 with required subjects',
        contactInfo: { phone: '020-25507001', email: 'info@coep.ac.in', website: 'www.coep.ac.in' }
    },
    {
        name: 'Fergusson College, Pune',
        location: { district: 'Pune', city: 'Pune', state: 'Maharashtra', pincode: '411004' },
        type: 'Government-Aided',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'Class 12 pass with minimum 45%',
        contactInfo: { phone: '020-25654200', email: 'principal@fergusson.edu', website: 'www.fergusson.edu' }
    },
    {
        name: 'Government Polytechnic, Mumbai',
        location: { district: 'Mumbai', city: 'Mumbai', state: 'Maharashtra', pincode: '400051' },
        type: 'Government',
        facilities: { hostel: false, library: true, labs: true, sports: false, canteen: true },
        mediumOfInstruction: ['English', 'Hindi'],
        eligibility: 'Class 10 pass',
        contactInfo: { phone: '022-24097346', email: 'info@gpoly.ac.in', website: 'www.govpolymumbai.ac.in' }
    },
    {
        name: 'Government Law College, Mumbai',
        location: { district: 'Mumbai', city: 'Mumbai', state: 'Maharashtra', pincode: '400032' },
        type: 'Government',
        facilities: { hostel: false, library: true, labs: false, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'Graduation in any discipline',
        contactInfo: { phone: '022-22620489', email: 'principal@glc.edu', website: 'www.glc.edu' }
    },

    // KARNATAKA
    {
        name: 'Bangalore Medical College and Research Institute',
        location: { district: 'Bangalore Urban', city: 'Bangalore', state: 'Karnataka', pincode: '560002' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'NEET qualified with minimum required percentile',
        contactInfo: { phone: '080-26702200', email: 'info@bmcri.edu.in', website: 'www.bmcri.edu.in' }
    },
    {
        name: 'University Visvesvaraya College of Engineering',
        location: { district: 'Bangalore Urban', city: 'Bangalore', state: 'Karnataka', pincode: '560001' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'CET/JEE qualified',
        contactInfo: { phone: '080-22961710', email: 'principal@uvce.ac.in', website: 'www.uvce.ac.in' }
    },
    {
        name: 'Government First Grade College, Mangalore',
        location: { district: 'Dakshina Kannada', city: 'Mangalore', state: 'Karnataka', pincode: '575003' },
        type: 'Government',
        facilities: { hostel: false, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English', 'Regional'],
        eligibility: 'Class 12 pass',
        contactInfo: { phone: '0824-2426770', email: 'gfgcmys@gmail.com', website: 'www.gfgcmangalore.edu.in' }
    },

    // TAMIL NADU
    {
        name: 'Madras Medical College',
        location: { district: 'Chennai', city: 'Chennai', state: 'Tamil Nadu', pincode: '600003' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'NEET qualified',
        contactInfo: { phone: '044-25305000', email: 'mmc@tn.gov.in', website: 'www.mmc.edu.in' }
    },
    {
        name: 'College of Engineering, Guindy',
        location: { district: 'Chennai', city: 'Chennai', state: 'Tamil Nadu', pincode: '600025' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'TNEA/JEE qualified',
        contactInfo: { phone: '044-22358661', email: 'principal@annauniv.edu', website: 'www.ceg.annauniv.edu' }
    },
    {
        name: 'Government Arts College, Coimbatore',
        location: { district: 'Coimbatore', city: 'Coimbatore', state: 'Tamil Nadu', pincode: '641018' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English', 'Regional'],
        eligibility: 'Class 12 pass',
        contactInfo: { phone: '0422-2527478', email: 'gacbe@yahoo.com', website: 'www.govarts.tn.nic.in' }
    },

    // DELHI
    {
        name: 'Delhi Technological University',
        location: { district: 'New Delhi', city: 'Delhi', state: 'Delhi', pincode: '110042' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
        contactInfo: { phone: '011-27871023', email: 'info@dtu.ac.in', website: 'www.dtu.ac.in' }
    },
    {
        name: 'Lady Shri Ram College for Women',
        location: { district: 'South Delhi', city: 'Delhi', state: 'Delhi', pincode: '110024' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'CUET qualified',
        contactInfo: { phone: '011-24334408', email: 'principal@lsr.du.ac.in', website: 'www.lsr.edu.in' }
    },

    // UTTAR PRADESH
    {
        name: 'King George Medical University',
        location: { district: 'Lucknow', city: 'Lucknow', state: 'Uttar Pradesh', pincode: '226003' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'NEET qualified',
        contactInfo: { phone: '0522-2257450', email: 'kgmu@kgmcindia.edu', website: 'www.kgmcindia.edu' }
    },
    {
        name: 'Government Polytechnic, Kanpur',
        location: { district: 'Kanpur Nagar', city: 'Kanpur', state: 'Uttar Pradesh', pincode: '208024' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: false, canteen: true },
        mediumOfInstruction: ['English', 'Hindi'],
        eligibility: 'Class 10 pass',
        contactInfo: { phone: '0512-2211521', email: 'gpkanpur@rediffmail.com', website: 'www.gpkanpur.ac.in' }
    },

    // WEST BENGAL
    {
        name: 'Jadavpur University',
        location: { district: 'Kolkata', city: 'Kolkata', state: 'West Bengal', pincode: '700032' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'JEE Main/WBJEE qualified',
        contactInfo: { phone: '033-24146666', email: 'registrar@jadavpuruniversity.in', website: 'www.jadavpuruniversity.in' }
    },
    {
        name: 'Presidency University',
        location: { district: 'Kolkata', city: 'Kolkata', state: 'West Bengal', pincode: '700073' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'Merit-based admission after Class 12',
        contactInfo: { phone: '033-22826396', email: 'registrar@presiuniv.ac.in', website: 'www.presiuniv.ac.in' }
    },

    // RAJASTHAN
    {
        name: 'Malaviya National Institute of Technology',
        location: { district: 'Jaipur', city: 'Jaipur', state: 'Rajasthan', pincode: '302017' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
        contactInfo: { phone: '0141-2713167', email: 'director@mnit.ac.in', website: 'www.mnit.ac.in' }
    },
    {
        name: 'Government Commerce College, Jaipur',
        location: { district: 'Jaipur', city: 'Jaipur', state: 'Rajasthan', pincode: '302004' },
        type: 'Government',
        facilities: { hostel: false, library: true, labs: false, sports: true, canteen: true },
        mediumOfInstruction: ['English', 'Hindi'],
        eligibility: 'Class 12 pass with Commerce',
        contactInfo: { phone: '0141-2705801', email: 'gcc@rajasthan.gov.in', website: 'www.gccjaipur.ac.in' }
    },

    // GUJARAT
    {
        name: 'L.D. College of Engineering',
        location: { district: 'Ahmedabad', city: 'Ahmedabad', state: 'Gujarat', pincode: '380015' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'GUJCET/JEE Main qualified',
        contactInfo: { phone: '079-27545876', email: 'info@ldce.ac.in', website: 'www.ldce.ac.in' }
    },
    {
        name: 'Government Law College, Ahmedabad',
        location: { district: 'Ahmedabad', city: 'Ahmedabad', state: 'Gujarat', pincode: '380014' },
        type: 'Government',
        facilities: { hostel: false, library: true, labs: false, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'Graduation/Class 12 with CLAT',
        contactInfo: { phone: '079-22878500', email: 'glsuniversity@gmail.com', website: 'www.glsuniversity.ac.in' }
    },

    // MADHYA PRADESH
    {
        name: 'Maulana Azad National Institute of Technology',
        location: { district: 'Bhopal', city: 'Bhopal', state: 'Madhya Pradesh', pincode: '462003' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
        contactInfo: { phone: '0755-4051000', email: 'director@manit.ac.in', website: 'www.manit.ac.in' }
    },
    {
        name: 'Government Model Science College, Gwalior',
        location: { district: 'Gwalior', city: 'Gwalior', state: 'Madhya Pradesh', pincode: '474011' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English', 'Hindi'],
        eligibility: 'Class 12 with Science',
        contactInfo: { phone: '0751-2343456', email: 'gmscgwalior@gmail.com', website: 'www.gmscgwalior.ac.in' }
    },

    // Additional colleges (simplified for brevity)
    {
        name: 'National Institute of Technology, Warangal',
        location: { district: 'Warangal', city: 'Warangal', state: 'Telangana', pincode: '506004' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
        contactInfo: { phone: '0870-2462000', email: 'director@nitw.ac.in', website: 'www.nitw.ac.in' }
    },
    {
        name: 'Government College for Women, Thiruvananthapuram',
        location: { district: 'Thiruvananthapuram', city: 'Thiruvananthapuram', state: 'Kerala', pincode: '695014' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'Class 12 pass',
        contactInfo: { phone: '0471-2324377', email: 'gcwtrivandrum@gmail.com', website: 'www.gcwtrivandrum.ac.in' }
    },
    {
        name: 'Government Polytechnic, Patna',
        location: { district: 'Patna', city: 'Patna', state: 'Bihar', pincode: '800005' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: false, canteen: true },
        mediumOfInstruction: ['English', 'Hindi'],
        eligibility: 'Class 10 pass',
        contactInfo: { phone: '0612-2666005', email: 'gppatna@yahoo.com', website: 'www.gppatna.ac.in' }
    },
    {
        name: 'National Institute of Technology, Rourkela',
        location: { district: 'Sundargarh', city: 'Rourkela', state: 'Odisha', pincode: '769008' },
        type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
        mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
        contactInfo: { phone: '0661-2462020', email: 'director@nitrkl.ac.in', website: 'www.nitrkl.ac.in' }
    }
];

export default colleges;
