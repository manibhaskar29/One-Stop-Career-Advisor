import Profile from '../models/Profile.js';
import QuizResult from '../models/QuizResult.js';
import Course from '../models/Course.js';
import Career from '../models/Career.js';
import College from '../models/College.js';

/**
 * Recommendation Service
 * Generates personalized recommendations based on quiz results and profile
 */
class RecommendationService {
    /**
     * Get comprehensive recommendations for a user
     * @param {String} userId - User ID
     * @returns {Object} Recommendations object
     */
    async getRecommendations(userId) {
        try {
            // Get user profile and latest quiz result
            const profile = await Profile.findOne({ userId });
            const latestQuiz = await QuizResult.findOne({ userId })
                .sort({ completedAt: -1 })
                .limit(1);

            if (!profile) {
                throw new Error('Profile not found. Please complete your profile first.');
            }

            if (!latestQuiz) {
                throw new Error('No quiz results found. Please take the aptitude test first.');
            }

            // Get stream recommendations
            const streams = this.recommendStreams(latestQuiz, profile);

            // Get course recommendations
            const courses = await this.recommendCourses(latestQuiz, profile);

            // Get career recommendations
            const careers = await this.recommendCareers(courses, latestQuiz, profile);

            // Get college recommendations
            const colleges = await this.recommendColleges(courses, profile);

            return {
                streams,
                courses,
                careers,
                colleges,
                aptitudeProfile: latestQuiz.aptitudeProfile,
                quizScores: latestQuiz.scores
            };
        } catch (error) {
            console.error('Error generating recommendations:', error);
            throw error;
        }
    }

    /**
     * Recommend streams based on quiz scores
     * @param {Object} quizResult - Quiz result object
     * @param {Object} profile - User profile
     * @returns {Array} Recommended streams
     */
    recommendStreams(quizResult, profile) {
        const scores = quizResult.scores;

        // Calculate stream compatibility scores
        const streamData = [
            {
                name: 'Science',
                score: scores.science,
                description: 'For students interested in research, technology, medicine, and engineering',
                subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
                careers: ['Engineer', 'Doctor', 'Scientist', 'Researcher']
            },
            {
                name: 'Commerce',
                score: scores.commerce,
                description: 'For students interested in business, finance, accounting, and economics',
                subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics'],
                careers: ['Chartered Accountant', 'Manager', 'Entrepreneur', 'Banker']
            },
            {
                name: 'Arts',
                score: scores.arts,
                description: 'For students interested in humanities, social sciences, and creative fields',
                subjects: ['History', 'Psychology', 'Literature', 'Political Science'],
                careers: ['Teacher', 'Lawyer', 'Journalist', 'Social Worker']
            },
            {
                name: 'Vocational',
                score: scores.vocational,
                description: 'For students interested in skill-based practical training and employment',
                subjects: ['IT Skills', 'Agriculture', 'Tourism', 'Media'],
                careers: ['IT Technician', 'Chef', 'Travel Guide', 'Animator']
            }
        ];

        // Apply profile-based boost
        streamData.forEach(stream => {
            // Boost for matching interests
            const interestMatch = this.calculateInterestMatch(stream.name, profile.interests);
            stream.compatibilityScore = Math.round(
                (stream.score * 0.6) + (interestMatch * 0.4)
            );

            // Boost for class 12 students with matching stream
            if (profile.class === '12' && profile.academicPerformance?.stream === stream.name) {
                stream.compatibilityScore += 10;
            }
        });

        // Sort by compatibility and return top recommendations
        return streamData
            .sort((a, b) => b.compatibilityScore - a.compatibilityScore)
            .map((stream, index) => ({
                ...stream,
                rank: index + 1,
                recommended: index === 0
            }));
    }

    /**
     * Recommend courses based on quiz results and profile
     * @param {Object} quizResult - Quiz result object
     * @param {Object} profile - User profile
     * @returns {Array} Recommended courses
     */
    async recommendCourses(quizResult, profile) {
        const primaryStream = quizResult.aptitudeProfile.primaryStream;
        const secondaryStream = quizResult.aptitudeProfile.secondaryStream;

        // Find courses matching streams and eligibility
        const courses = await Course.find({
            stream: { $in: [primaryStream, secondaryStream] },
            'eligibility.class': profile.class,
            isActive: true
        }).populate('relatedCareers');

        // Score each course
        const scoredCourses = courses.map(course => {
            let score = 0;

            // Stream alignment (40%)
            if (course.stream === primaryStream) {
                score += 40;
            } else if (course.stream === secondaryStream) {
                score += 25;
            }

            // Career path diversity (30%)
            score += Math.min(course.relatedCareers.length * 5, 30);

            // Popularity (20%)
            score += Math.min(course.popularity / 10, 20);

            // Interest match (10%)
            const interestMatch = this.calculateInterestMatch(course.name, profile.interests);
            score += interestMatch * 0.1;

            return {
                ...course.toObject(),
                compatibilityScore: Math.round(score)
            };
        });

        // Sort by compatibility
        return scoredCourses
            .sort((a, b) => b.compatibilityScore - a.compatibilityScore)
            .slice(0, 10); // Top 10 courses
    }

    /**
     * Recommend careers based on recommended courses
     * @param {Array} recommendedCourses - Array of recommended courses
     * @param {Object} quizResult - Quiz result
     * @param {Object} profile - User profile
     * @returns {Array} Recommended careers
     */
    async recommendCareers(recommendedCourses, quizResult, profile) {
        // Get all career IDs from recommended courses
        const careerIds = recommendedCourses
            .flatMap(course => course.relatedCareers)
            .filter(id => id);

        // Fetch unique careers
        const careers = await Career.find({
            _id: { $in: careerIds }
        }).populate('relatedCourses');

        // Remove duplicates
        const uniqueCareers = Array.from(
            new Map(careers.map(c => [c._id.toString(), c])).values()
        );

        // Score careers
        const scoredCareers = uniqueCareers.map(career => {
            let score = 0;

            // Course relevance (35%)
            const courseMatch = recommendedCourses.filter(c =>
                career.relatedCourses.some(rc => rc._id.toString() === c._id.toString())
            ).length;
            score += Math.min(courseMatch * 10, 35);

            // Skills match (25%)
            const skillsMatch = this.calculateArrayMatch(career.skills, profile.interests);
            score += skillsMatch * 0.25;

            // Job outlook (20%)
            const outlookScore = {
                'Excellent': 20,
                'Good': 15,
                'Average': 10,
                'Limited': 5
            };
            score += outlookScore[career.jobOutlook] || 10;

            // Industry alignment (20%)
            const industryMatch = this.calculateArrayMatch(career.industries, profile.interests);
            score += industryMatch * 0.2;

            return {
                ...career.toObject(),
                compatibilityScore: Math.round(score)
            };
        });

        return scoredCareers
            .sort((a, b) => b.compatibilityScore - a.compatibilityScore)
            .slice(0, 15); // Top 15 careers
    }

    /**
     * Recommend colleges based on location and courses
     * @param {Array} recommendedCourses - Array of recommended courses
     * @param {Object} profile - User profile
     * @returns {Array} Recommended colleges
     */
    async recommendColleges(recommendedCourses, profile) {
        const courseIds = recommendedCourses.map(c => c._id);
        const userDistrict = profile.location?.district;
        const userState = profile.location?.state;

        // Find colleges offering recommended courses
        let colleges = await College.find({
            coursesOffered: { $in: courseIds },
            isActive: true
        }).populate('coursesOffered');

        // Score colleges
        const scoredColleges = colleges.map(college => {
            let score = 0;

            // Location proximity (40%)
            if (college.location.district === userDistrict) {
                score += 40;
            } else if (college.location.state === userState) {
                score += 25;
            } else {
                score += 10; // Other states
            }

            // Course availability (30%)
            const matchingCourses = college.coursesOffered.filter(c =>
                courseIds.some(cId => cId.toString() === c._id.toString())
            ).length;
            score += Math.min(matchingCourses * 10, 30);

            // Facilities (20%)
            const facilitiesCount = Object.values(college.facilities).filter(Boolean).length;
            score += facilitiesCount * 4;

            // Medium of instruction match (10%)
            if (college.mediumOfInstruction.includes('English')) {
                score += 10;
            }

            return {
                ...college.toObject(),
                compatibilityScore: Math.round(score),
                distance: this.getDistance(college.location, profile.location)
            };
        });

        return scoredColleges
            .sort((a, b) => b.compatibilityScore - a.compatibilityScore)
            .slice(0, 20); // Top 20 colleges
    }

    /**
     * Calculate interest match percentage
     * @param {String} target - Target string
     * @param {Array} interests - User interests
     * @returns {Number} Match percentage (0-100)
     */
    calculateInterestMatch(target, interests) {
        if (!interests || interests.length === 0) return 50; // Default

        const targetLower = target.toLowerCase();
        const matches = interests.filter(interest =>
            targetLower.includes(interest.toLowerCase()) ||
            interest.toLowerCase().includes(targetLower)
        );

        return Math.min(matches.length * 20, 100);
    }

    /**
     * Calculate match between two arrays
     * @param {Array} arr1 - First array
     * @param {Array} arr2 - Second array
     * @returns {Number} Match percentage (0-100)
     */
    calculateArrayMatch(arr1, arr2) {
        if (!arr1 || !arr2 || arr1.length === 0 || arr2.length === 0) return 50;

        const matches = arr1.filter(item1 =>
            arr2.some(item2 =>
                item1.toLowerCase().includes(item2.toLowerCase()) ||
                item2.toLowerCase().includes(item1.toLowerCase())
            )
        );

        return Math.min((matches.length / arr1.length) * 100, 100);
    }

    /**
     * Get distance category between two locations
     * @param {Object} loc1 - Location 1
     * @param {Object} loc2 - Location 2
     * @returns {String} Distance category
     */
    getDistance(loc1, loc2) {
        if (!loc1 || !loc2) return 'Unknown';

        if (loc1.district === loc2.district) return 'Same District';
        if (loc1.state === loc2.state) return 'Same State';
        return 'Other State';
    }
}

export default new RecommendationService();
