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
    },
// ANDHRA PRADESH
{
    name: 'Andhra University College of Engineering',
        location: { district: 'Visakhapatnam', city: 'Visakhapatnam', state: 'Andhra Pradesh', pincode: '530003' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'AP EAPCET qualified',
            contactInfo: { phone: '0891-2844000', email: 'registrar@andhrauniversity.edu.in', website: 'www.andhrauniversity.edu.in' }
},
{
    name: 'Sri Venkateswara University College of Engineering',
        location: { district: 'Tirupati', city: 'Tirupati', state: 'Andhra Pradesh', pincode: '517502' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'AP EAPCET qualified',
            contactInfo: { phone: '0877-2289561', email: 'registrar@svuniversity.edu.in', website: 'www.svuniversity.edu.in' }
},
{
    name: 'Government Polytechnic, Vijayawada',
        location: { district: 'Krishna', city: 'Vijayawada', state: 'Andhra Pradesh', pincode: '520008' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'AP POLYCET qualified',
            contactInfo: { phone: '0866-2470429', email: 'gptvijayawada@gmail.com', website: 'www.gptvijayawada.ac.in' }
},
{
    name: 'Rangaraya Medical College',
        location: { district: 'Kakinada', city: 'Kakinada', state: 'Andhra Pradesh', pincode: '533001' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'NEET qualified',
            contactInfo: { phone: '0884-2361259', email: 'principal_rmc@yahoo.com', website: 'www.rmckakinada.com' }
},

// TELANGANA (Additional)
{
    name: 'Osmania University College of Engineering',
        location: { district: 'Hyderabad', city: 'Hyderabad', state: 'Telangana', pincode: '500007' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'TS EAMCET qualified',
            contactInfo: { phone: '040-27098254', email: 'principal@uceou.edu', website: 'www.uceou.edu' }
},
{
    name: 'Gandhi Medical College',
        location: { district: 'Secunderabad', city: 'Secunderabad', state: 'Telangana', pincode: '500003' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'NEET qualified',
            contactInfo: { phone: '040-27505566', email: 'gmc_secunderabad@nic.in', website: 'www.gundhimedicalcollege.in' }
},
{
    name: 'Government Polytechnic, Masab Tank',
        location: { district: 'Hyderabad', city: 'Hyderabad', state: 'Telangana', pincode: '500028' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'TS POLYCET qualified',
            contactInfo: { phone: '040-23391761', email: 'masabtank.poly@gmail.com', website: 'www.polytechnicts.cgg.gov.in' }
},

// PUNJAB & HARYANA
{
    name: 'Punjab Engineering College',
        location: { district: 'Chandigarh', city: 'Chandigarh', state: 'Chandigarh', pincode: '160012' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
            contactInfo: { phone: '0172-2753051', email: 'director@pec.edu.in', website: 'www.pec.ac.in' }
},
{
    name: 'Government Medical College, Patiala',
        location: { district: 'Patiala', city: 'Patiala', state: 'Punjab', pincode: '147001' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'NEET qualified',
            contactInfo: { phone: '0175-2212018', email: 'gmcpatiala@gmail.com', website: 'www.gmcpatiala.com' }
},
{
    name: 'National Institute of Technology, Kurukshetra',
        location: { district: 'Kurukshetra', city: 'Kurukshetra', state: 'Haryana', pincode: '136119' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
            contactInfo: { phone: '01744-233208', email: 'director@nitkkr.ac.in', website: 'www.nitkkr.ac.in' }
},

// BIHAR & JHARKHAND
{
    name: 'Patna Science College',
        location: { district: 'Patna', city: 'Patna', state: 'Bihar', pincode: '800005' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English', 'Hindi'],
        eligibility: 'Class 12 pass with Science',
            contactInfo: { phone: '0612-2670531', email: 'info@patnasciencecollege.org', website: 'www.patnasciencecollege.org' }
},
{
    name: 'Birla Institute of Technology, Mesra',
        location: { district: 'Ranchi', city: 'Ranchi', state: 'Jharkhand', pincode: '835215' },
    type: 'Government-Aided',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
            contactInfo: { phone: '0651-2275444', email: 'registrar@bitmesra.ac.in', website: 'www.bitmesra.ac.in' }
},
{
    name: 'National Institute of Technology, Jamshedpur',
        location: { district: 'Jamshedpur', city: 'Jamshedpur', state: 'Jharkhand', pincode: '831014' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
            contactInfo: { phone: '0657-2373407', email: 'director@nitjsr.ac.in', website: 'www.nitjsr.ac.in' }
},


// ODISHA (Additional)
{
    name: 'SCB Medical College',
        location: { district: 'Cuttack', city: 'Cuttack', state: 'Odisha', pincode: '753007' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'NEET qualified',
            contactInfo: { phone: '0671-2414355', email: 'scbmchcuttack@gmail.com', website: 'www.scbmch.in' }
},
{
    name: 'College of Engineering and Technology, Bhubaneswar',
        location: { district: 'Khurda', city: 'Bhubaneswar', state: 'Odisha', pincode: '751003' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main/OJEE qualified',
            contactInfo: { phone: '0674-2386075', email: 'info@cet.edu.in', website: 'www.cet.edu.in' }
},

// KERALA (Additional)
{
    name: 'Government Engineering College, Thrissur',
        location: { district: 'Thrissur', city: 'Thrissur', state: 'Kerala', pincode: '680009' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'KEAM qualified',
            contactInfo: { phone: '0487-2334144', email: 'principal@gectcr.ac.in', website: 'www.gectcr.ac.in' }
},
{
    name: 'Maharaja\'s College, Ernakulam',
        location: { district: 'Ernakulam', city: 'Kochi', state: 'Kerala', pincode: '682011' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English', 'Malayalam'],
        eligibility: 'Class 12 pass',
            contactInfo: { phone: '0484-2352838', email: 'principal@maharajas.ac.in', website: 'www.maharajas.ac.in' }
},
{
    name: 'Government Medical College, Kozhikode',
        location: { district: 'Kozhikode', city: 'Kozhikode', state: 'Kerala', pincode: '673008' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'NEET qualified',
            contactInfo: { phone: '0495-2350216', email: 'principal@govtmedicalcollegekozhikode.ac.in', website: 'www.govtmedicalcollegekozhikode.ac.in' }
},

// ASSAM & NORTH EAST
{
    name: 'Cotton University',
        location: { district: 'Kamrup', city: 'Guwahati', state: 'Assam', pincode: '781001' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'Class 12 pass',
            contactInfo: { phone: '0361-2733530', email: 'registrar@cottonuniversity.ac.in', website: 'www.cottonuniversity.ac.in' }
},
{
    name: 'Assam Engineering College',
        location: { district: 'Kamrup', city: 'Guwahati', state: 'Assam', pincode: '781013' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'CEE qualified',
            contactInfo: { phone: '0361-2570550', email: 'principal@aec.ac.in', website: 'www.aec.ac.in' }
},
{
    name: 'North Eastern Hill University',
        location: { district: 'East Khasi Hills', city: 'Shillong', state: 'Meghalaya', pincode: '793022' },
    type: 'Central University',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'CUET qualified',
            contactInfo: { phone: '0364-2721001', email: 'regtro@nehu.ac.in', website: 'www.nehu.ac.in' }
},

// CENTRAL UNIVERSITIES & IITs
{
    name: 'Indian Institute of Technology, Bombay',
        location: { district: 'Mumbai', city: 'Mumbai', state: 'Maharashtra', pincode: '400076' },
    type: 'Government (IIT)',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Advanced qualified',
            contactInfo: { phone: '022-25722545', email: 'director@iitb.ac.in', website: 'www.iitb.ac.in' }
},
{
    name: 'Indian Institute of Technology, Delhi',
        location: { district: 'New Delhi', city: 'Delhi', state: 'Delhi', pincode: '110016' },
    type: 'Government (IIT)',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Advanced qualified',
            contactInfo: { phone: '011-26597135', email: 'webmaster@iitd.ac.in', website: 'www.iitd.ac.in' }
},
{
    name: 'Indian Institute of Technology, Madras',
        location: { district: 'Chennai', city: 'Chennai', state: 'Tamil Nadu', pincode: '600036' },
    type: 'Government (IIT)',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Advanced qualified',
            contactInfo: { phone: '044-22578101', email: 'director@iitm.ac.in', website: 'www.iitm.ac.in' }
},
{
    name: 'Indian Institute of Technology, Kanpur',
        location: { district: 'Kanpur Nagar', city: 'Kanpur', state: 'Uttar Pradesh', pincode: '208016' },
    type: 'Government (IIT)',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Advanced qualified',
            contactInfo: { phone: '0512-2590151', email: 'director@iitk.ac.in', website: 'www.iitk.ac.in' }
},
{
    name: 'Indian Institute of Technology, Kharagpur',
        location: { district: 'Paschim Medinipur', city: 'Kharagpur', state: 'West Bengal', pincode: '721302' },
    type: 'Government (IIT)',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Advanced qualified',
            contactInfo: { phone: '03222-255221', email: 'director@iitkgp.ac.in', website: 'www.iitkgp.ac.in' }
},
{
    name: 'Jawaharlal Nehru University',
        location: { district: 'New Delhi', city: 'Delhi', state: 'Delhi', pincode: '110067' },
    type: 'Central University',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'CUET qualified',
            contactInfo: { phone: '011-26742575', email: 'vc@mail.jnu.ac.in', website: 'www.jnu.ac.in' }
},
{
    name: 'Banaras Hindu University',
        location: { district: 'Varanasi', city: 'Varanasi', state: 'Uttar Pradesh', pincode: '221005' },
    type: 'Central University',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English', 'Hindi'],
        eligibility: 'CUET qualified',
            contactInfo: { phone: '0542-2368558', email: 'registrar@bhu.ac.in', website: 'www.bhu.ac.in' }
},
{
    name: 'University of Hyderabad',
        location: { district: 'Hyderabad', city: 'Hyderabad', state: 'Telangana', pincode: '500046' },
    type: 'Central University',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'CUET qualified',
            contactInfo: { phone: '040-23132101', email: 'vc@uohyd.ac.in', website: 'www.uohyd.ac.in' }
},
{
    name: 'Aligarh Muslim University',
        location: { district: 'Aligarh', city: 'Aligarh', state: 'Uttar Pradesh', pincode: '202002' },
    type: 'Central University',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English', 'Urdu'],
        eligibility: 'CUET/University Exam',
            contactInfo: { phone: '0571-2700920', email: 'registrar.amu@amu.ac.in', website: 'www.amu.ac.in' }
},
{
    name: 'Jamia Millia Islamia',
        location: { district: 'New Delhi', city: 'Delhi', state: 'Delhi', pincode: '110025' },
    type: 'Central University',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'CUET/University Exam',
            contactInfo: { phone: '011-26981717', email: 'registrar@jmi.ac.in', website: 'www.jmi.ac.in' }
},

// More States & NITs
{
    name: 'National Institute of Technology, Trichy',
        location: { district: 'Tiruchirappalli', city: 'Trichy', state: 'Tamil Nadu', pincode: '620015' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
            contactInfo: { phone: '0431-2503001', email: 'director@nitt.edu', website: 'www.nitt.edu' }
},
{
    name: 'National Institute of Technology, Surathkal',
        location: { district: 'Dakshina Kannada', city: 'Mangalore', state: 'Karnataka', pincode: '575025' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
            contactInfo: { phone: '0824-2474000', email: 'director@nitk.ac.in', website: 'www.nitk.ac.in' }
},
{
    name: 'Visvesvaraya National Institute of Technology',
        location: { district: 'Nagpur', city: 'Nagpur', state: 'Maharashtra', pincode: '440010' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
            contactInfo: { phone: '0712-2222828', email: 'director@vnit.ac.in', website: 'www.vnit.ac.in' }
},
{
    name: 'Sardar Vallabhbhai National Institute of Technology',
        location: { district: 'Surat', city: 'Surat', state: 'Gujarat', pincode: '395007' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
            contactInfo: { phone: '0261-2259571', email: 'director@svnit.ac.in', website: 'www.svnit.ac.in' }
},
{
    name: 'Motilal Nehru National Institute of Technology',
        location: { district: 'Prayagraj', city: 'Prayagraj', state: 'Uttar Pradesh', pincode: '211004' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
            contactInfo: { phone: '0532-2545404', email: 'director@mnnit.ac.in', website: 'www.mnnit.ac.in' }
},

// AIIMS & Medical
{
    name: 'All India Institute of Medical Sciences, New Delhi',
        location: { district: 'New Delhi', city: 'Delhi', state: 'Delhi', pincode: '110029' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'NEET qualified',
            contactInfo: { phone: '011-26588500', email: 'director@aiims.edu', website: 'www.aiims.edu' }
},
{
    name: 'Jawaharlal Institute of Postgraduate Medical Education and Research',
        location: { district: 'Puducherry', city: 'Puducherry', state: 'Puducherry', pincode: '605006' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'NEET qualified',
            contactInfo: { phone: '0413-2272380', email: 'director@jipmer.edu.in', website: 'www.jipmer.edu.in' }
},
{
    name: 'Post Graduate Institute of Medical Education and Research',
        location: { district: 'Chandigarh', city: 'Chandigarh', state: 'Chandigarh', pincode: '160012' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'NEET PG/INI-CET',
            contactInfo: { phone: '0172-2747585', email: 'director@pgimer.edu.in', website: 'www.pgimer.edu.in' }
},

// Law & Design
{
    name: 'National Law School of India University',
        location: { district: 'Bangalore Urban', city: 'Bangalore', state: 'Karnataka', pincode: '560072' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: false, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'CLAT qualified',
            contactInfo: { phone: '080-23213160', email: 'registrar@nls.ac.in', website: 'www.nls.ac.in' }
},
{
    name: 'NALSAR University of Law',
        location: { district: 'Medchal', city: 'Hyderabad', state: 'Telangana', pincode: '500101' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: false, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'CLAT qualified',
            contactInfo: { phone: '040-23498105', email: 'registrar@nalsar.ac.in', website: 'www.nalsar.ac.in' }
},
{
    name: 'National Institute of Design, Ahmedabad',
        location: { district: 'Ahmedabad', city: 'Ahmedabad', state: 'Gujarat', pincode: '380007' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'NID DAT qualified',
            contactInfo: { phone: '079-26629500', email: 'admissions@nid.edu', website: 'www.nid.edu' }
},
{
    name: 'National Institute of Fashion Technology, Delhi',
        location: { district: 'New Delhi', city: 'Delhi', state: 'Delhi', pincode: '110016' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'NIFT Entrance Exam',
            contactInfo: { phone: '011-26542000', email: 'director.delhi@nift.ac.in', website: 'www.nift.ac.in' }
},

// Miscellaneous Government Colleges
{
    name: 'Government College, Sector 11, Chandigarh',
        location: { district: 'Chandigarh', city: 'Chandigarh', state: 'Chandigarh', pincode: '160011' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'Class 12 pass',
            contactInfo: { phone: '0172-2740597', email: 'principal@gc11.ac.in', website: 'www.gc11.ac.in' }
},
{
    name: 'Maharani\'s College, Jaipur',
        location: { district: 'Jaipur', city: 'Jaipur', state: 'Rajasthan', pincode: '302004' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English', 'Hindi'],
        eligibility: 'Class 12 pass',
            contactInfo: { phone: '0141-2373628', email: 'maharanicollege@gmail.com', website: 'www.universitymaharanicollege.ac.in' }
},
{
    name: 'Government Arts College, Nandanam',
        location: { district: 'Chennai', city: 'Chennai', state: 'Tamil Nadu', pincode: '600035' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English', 'Regional'],
        eligibility: 'Class 12 pass',
            contactInfo: { phone: '044-24351048', email: 'gacnandanam@gmail.com', website: 'www.gacnandanam.com' }
},
{
    name: 'Government Science College, Bangalore',
        location: { district: 'Bangalore Urban', city: 'Bangalore', state: 'Karnataka', pincode: '560001' },
    type: 'Government',
        facilities: { hostel: false, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'Class 12 pass',
            contactInfo: { phone: '080-22212924', email: 'gscblr@gmail.com', website: 'www.gscblr.kar.nic.in' }
},
{
    name: 'Elphinstone College, Mumbai',
        location: { district: 'Mumbai', city: 'Mumbai', state: 'Maharashtra', pincode: '400032' },
    type: 'Government',
        facilities: { hostel: false, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'Class 12 pass',
            contactInfo: { phone: '022-22843797', email: 'info@elphinstone.ac.in', website: 'www.elphinstone.ac.in' }
},
// Adding more to reach > 75
// Himachal Pradesh
{
    name: 'Indira Gandhi Medical College, Shimla',
        location: { district: 'Shimla', city: 'Shimla', state: 'Himachal Pradesh', pincode: '171001' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'NEET qualified',
            contactInfo: { phone: '0177-2804251', email: 'principal.igmc@gmail.com', website: 'www.igmcshimla.edu.in' }
},
{
    name: 'National Institute of Technology, Hamirpur',
        location: { district: 'Hamirpur', city: 'Hamirpur', state: 'Himachal Pradesh', pincode: '177005' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
            contactInfo: { phone: '01972-254011', email: 'registrar@nith.ac.in', website: 'www.nith.ac.in' }
},
// Uttarakhand
{
    name: 'Indian Institute of Technology, Roorkee',
        location: { district: 'Haridwar', city: 'Roorkee', state: 'Uttarakhand', pincode: '247667' },
    type: 'Government (IIT)',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Advanced qualified',
            contactInfo: { phone: '01332-285311', email: 'director@iitr.ac.in', website: 'www.iitr.ac.in' }
},
{
    name: 'G.B. Pant University of Agriculture and Technology',
        location: { district: 'Udham Singh Nagar', city: 'Pantnagar', state: 'Uttarakhand', pincode: '263153' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'University Entrance Exam',
            contactInfo: { phone: '05944-233320', email: 'registrar@gbpuat.ac.in', website: 'www.gbpuat.ac.in' }
},
// Jammu & Kashmir
{
    name: 'National Institute of Technology, Srinagar',
        location: { district: 'Srinagar', city: 'Srinagar', state: 'Jammu and Kashmir', pincode: '190006' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
            contactInfo: { phone: '0194-2422032', email: 'refer@nitsri.ac.in', website: 'www.nitsri.ac.in' }
},
{
    name: 'Government Medical College, Jammu',
        location: { district: 'Jammu', city: 'Jammu', state: 'Jammu and Kashmir', pincode: '180001' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'NEET qualified',
            contactInfo: { phone: '0191-2584247', email: 'pmcjammu@gmail.com', website: 'www.gmcjammu.nic.in' }
},
// Chhattisgarh
{
    name: 'National Institute of Technology, Raipur',
        location: { district: 'Raipur', city: 'Raipur', state: 'Chhattisgarh', pincode: '492010' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
            contactInfo: { phone: '0771-2254200', email: 'director@nitrr.ac.in', website: 'www.nitrr.ac.in' }
},
{
    name: 'Pt. Ravishankar Shukla University',
        location: { district: 'Raipur', city: 'Raipur', state: 'Chhattisgarh', pincode: '492010' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English', 'Hindi'],
        eligibility: 'Merit-based/Entrance',
            contactInfo: { phone: '0771-2262540', email: 'registrarprsu@gmail.com', website: 'www.prsu.ac.in' }
},
// Goa
{
    name: 'Goa College of Engineering',
        location: { district: 'South Goa', city: 'Ponda', state: 'Goa', pincode: '403401' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'GCET qualified',
            contactInfo: { phone: '0832-2336301', email: 'principal@gec.ac.in', website: 'www.gec.ac.in' }
},
{
    name: 'Goa Medical College',
        location: { district: 'North Goa', city: 'Bambolim', state: 'Goa', pincode: '403202' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'NEET qualified',
            contactInfo: { phone: '0832-2495000', email: 'dean-gmc.goa@nic.in', website: 'www.gmc.goa.gov.in' }
},
// Tripura
{
    name: 'National Institute of Technology, Agartala',
        location: { district: 'West Tripura', city: 'Agartala', state: 'Tripura', pincode: '799046' },
    type: 'Government',
        facilities: { hostel: true, library: true, labs: true, sports: true, canteen: true },
    mediumOfInstruction: ['English'],
        eligibility: 'JEE Main qualified',
            contactInfo: { phone: '0381-2546630', email: 'director@nita.ac.in', website: 'www.nita.ac.in' }
}
];

export default colleges;
