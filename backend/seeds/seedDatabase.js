import dotenv from 'dotenv';
import connectDB from '../config/database.js';
import QuizQuestion from '../models/QuizQuestion.js';
import Course from '../models/Course.js';
import Career from '../models/Career.js';
import College from '../models/College.js';
import Timeline from '../models/Timeline.js';
import User from '../models/User.js';

// Load seed data
import quizQuestionsData from './quizQuestions.js';
import coursesData from './coursesData.js';
import careersData from './careersData.js';
import collegesData from './collegesData.js';
import timelineData from './timelineData.js';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const seedDatabase = async () => {
    try {
        console.log('\n🌱 Starting database seeding...\n');

        // Clear existing data
        console.log('📦  Clearing existing data...');
        await QuizQuestion.deleteMany({});
        await Course.deleteMany({});
        await Career.deleteMany({});
        await College.deleteMany({});
        await Timeline.deleteMany({});
        console.log('✓ Existing data cleared\n');

        // Seed Quiz Questions
        console.log('📝 Seeding quiz questions...');
        const quizQuestions = await QuizQuestion.insertMany(quizQuestionsData);
        console.log(`✓ ${quizQuestions.length} quiz questions seeded\n`);

        // Seed Courses
        console.log('📚 Seeding courses...');
        const courses = await Course.insertMany(coursesData);
        console.log(`✓ ${courses.length} courses seeded\n`);

        // Create a mapping of course names to IDs for career linking
        const courseMap = {};
        courses.forEach(course => {
            courseMap[course.shortName] = course._id;
        });

        // Seed Careers with course references
        console.log('💼 Seeding careers...');
        const careersWithRefs = careersData.map(career => {
            const relatedCourses = [];

            // Map careers to courses based on logical connections
            if (career.title.includes('Software') || career.title.includes('Data Scientist')) {
                relatedCourses.push(courseMap['B.Tech'], courseMap['BCA'], courseMap['B.Sc']);
            } else if (career.title.includes('Doctor') || career.title === 'Pharmacist') {
                relatedCourses.push(courseMap['MBBS'], courseMap['B.Pharm'], courseMap['BDS']);
            } else if (career.title.includes('Engineer')) {
                relatedCourses.push(courseMap['B.Tech'], courseMap['Diploma'], courseMap['B.Sc']);
            } else if (career.title.includes('Chartered Accountant') || career.title.includes('Investment')) {
                relatedCourses.push(courseMap['CA'], courseMap['B.Com'], courseMap['BBA']);
            } else if (career.title.includes('Manager') || career.title.includes('Entrepreneur') || career.title.includes('Marketing')) {
                relatedCourses.push(courseMap['BBA'], courseMap['B.Com'], courseMap['MBA']);
            } else if (career.title === 'Lawyer') {
                relatedCourses.push(courseMap['LLB'], courseMap['BA']);
            } else if (career.title.includes('Teacher')) {
                relatedCourses.push(courseMap['B.Ed'], courseMap['BA'], courseMap['B.Sc']);
            } else if (career.title.includes('Journalist') || career.title.includes('Content Writer')) {
                relatedCourses.push(courseMap['BJMC'], courseMap['BA']);
            } else if (career.title.includes('Architect')) {
                relatedCourses.push(courseMap['B.Arch']);
            } else if (career.title.includes('Chef')) {
                relatedCourses.push(courseMap['BHM'], courseMap['Diploma HM']);
            } else if (career.title.includes('Electrician') || career.title.includes('Computer Operator')) {
                relatedCourses.push(courseMap['ITI'], courseMap['Diploma']);
            } else if (career.title.includes('Agricultural')) {
                relatedCourses.push(courseMap['B.Sc Agriculture'], courseMap['Diploma Agri']);
            } else {
                // Default mapping for others
                relatedCourses.push(courseMap['BA']);
            }

            return {
                ...career,
                relatedCourses: relatedCourses.filter(id => id) // Remove undefined IDs
            };
        });

        const careers = await Career.insertMany(careersWithRefs);
        console.log(`✓ ${careers.length} careers seeded\n`);

        // Update courses with career references
        console.log('🔗 Linking courses to careers...');
        for (const career of careers) {
            for (const courseId of career.relatedCourses) {
                await Course.findByIdAndUpdate(
                    courseId,
                    { $addToSet: { relatedCareers: career._id } }
                );
            }
        }
        console.log('✓ Courses linked to careers\n');

        // Seed Colleges with course references
        console.log('🏫 Seeding colleges...');
        const collegesWithCourses = collegesData.map(college => {
            const coursesOffered = [];

            // Add courses based on college type
            if (college.name.includes('Engineering') || college.name.includes('Technology') || college.name.includes('Polytechnic')) {
                coursesOffered.push(courseMap['B.Tech'], courseMap['Diploma'], courseMap['B.Sc']);
            } else if (college.name.includes('Medical') || college.name.includes('Dental')) {
                coursesOffered.push(courseMap['MBBS'], courseMap['BDS'], courseMap['B.Sc Nursing']);
            } else if (college.name.includes('Law')) {
                coursesOffered.push(courseMap['LLB'], courseMap['BA']);
            } else if (college.name.includes('Commerce')) {
                coursesOffered.push(courseMap['B.Com'], courseMap['BBA'], courseMap['CA']);
            } else if (college.name.includes('Women') || college.name.includes('Arts')) {
                coursesOffered.push(courseMap['BA'], courseMap['B.Com'], courseMap['BSW']);
            } else {
                // General colleges - add multiple streams
                coursesOffered.push(courseMap['BA'], courseMap['B.Sc'], courseMap['B.Com']);
            }

            return {
                ...college,
                coursesOffered: coursesOffered.filter(id => id)
            };
        });

        const colleges = await College.insertMany(collegesWithCourses);
        console.log(`✓ ${colleges.length} colleges seeded\n`);

        // Seed Timeline events
        console.log('📅 Seeding timeline events...');
        const timeline = await Timeline.insertMany(timelineData);
        console.log(`✓ ${timeline.length} timeline events seeded\n`);

        // Create default admin user
        console.log('👤 Creating default admin user...');
        const adminExists = await User.findOne({ email: 'admin@career-guide.com' });

        if (!adminExists) {
            const adminUser = await User.create({
                email: 'admin@career-guide.com',
                password: 'Admin@123',
                role: 'admin'
            });
            console.log('✓ Default admin user created');
            console.log(`   Email: admin@career-guide.com`);
            console.log(`   Password: Admin@123\n`);
        } else {
            console.log('✓ Admin user already exists\n');
        }

        console.log('✅ Database seeding completed successfully!\n');
        console.log('Summary:');
        console.log(`   - ${quizQuestions.length} Quiz Questions`);
        console.log(`   - ${courses.length} Courses`);
        console.log(`   - ${careers.length} Careers`);
        console.log(`   - ${colleges.length} Colleges`);
        console.log(`   - ${timeline.length} Timeline Events`);
        console.log(`   - 1 Admin User\n`);

        process.exit(0);
    } catch (error) {
        console.error('\n✗ Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
