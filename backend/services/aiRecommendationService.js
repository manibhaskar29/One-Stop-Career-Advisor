import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Calculate category scores from quiz answers
 * Maps 22 questions to 6 career categories
 */
const calculateCategoryScores = (answers, studentType) => {
    const scores = {
        stem: 0,        // Science, Technology, Engineering, Math
        medical: 0,     // Healthcare, Biology, Medicine
        commerce: 0,    // Business, Finance, Accounting
        arts: 0,        // Humanities, Social Sciences
        creative: 0,    // Design, Arts, Content Creation
        technical: 0,   // Hands-on Technical, Skilled Labor
    };

    // Section A: Academic Strength (5 questions)
    // Q0: Maths - STEM
    scores.stem += (answers['0-0'] || 3) * 2;

    // Q1: Machines/Gadgets - STEM + Technical
    const machineScore = answers['0-1'] || 3;
    scores.stem += machineScore;
    scores.technical += machineScore * 1.5;

    // Q2: Biology/Health - Medical
    scores.medical += (answers['0-2'] || 3) * 2;

    // Q3: Accounting - Commerce
    scores.commerce += (answers['0-3'] || 3) * 2;

    // Q4: Coding/Logic - STEM
    scores.stem += (answers['0-4'] || 3) * 2;

    // Section B: Interests (5 questions)
    // Q0: Technology - STEM
    scores.stem += (answers['1-0'] || 3) * 1.5;

    // Q1: Helping people - Medical + Arts
    const helpingScore = answers['1-1'] || 3;
    scores.medical += helpingScore;
    scores.arts += helpingScore;

    // Q2: Design/Creative - Creative
    scores.creative += (answers['1-2'] || 3) * 2;

    // Q3: Business/Startups - Commerce
    scores.commerce += (answers['1-3'] || 3) * 2;

    // Q4: Health/Medical - Medical
    scores.medical += (answers['1-4'] || 3) * 1.5;

    // Section C: Work Style & Personality (4 questions)
    // Q0: Complex problem solving - STEM
    scores.stem += (answers['2-0'] || 3);

    // Q1: Leadership - Commerce + Arts
    const leadershipScore = answers['2-1'] || 3;
    scores.commerce += leadershipScore * 0.5;
    scores.arts += leadershipScore * 0.5;

    // Q2: Government jobs preference - affects final filtering, not scoring
    // Q3: People interaction - Arts + Commerce
    const peopleScore = answers['2-3'] || 3;
    scores.arts += peopleScore;
    scores.commerce += peopleScore * 0.5;

    // Section D: Career Constraints (4 questions)
    // Q0: Early earning - Technical + Commerce
    const earlyEarning = answers['3-0'] || 3;
    if (earlyEarning >= 4) {
        scores.technical += 2;
    }

    // Q1: Long education willingness - STEM + Medical
    const longEducation = answers['3-1'] || 3;
    if (longEducation >= 4) {
        scores.stem += 1;
        scores.medical += 1.5;
    }

    // Q3: Skill/Diploma openness - Technical
    const skillCourses = answers['3-3'] || 3;
    if (skillCourses >= 4) {
        scores.technical += 2;
    }

    // Section E: Situational Questions (4 questions)
    // Q0: Free time activity
    const freeTime = answers['4-0'] || '';
    if (freeTime.includes('Fixing')) scores.technical += 2;
    if (freeTime.includes('Reading')) scores.arts += 1.5;
    if (freeTime.includes('Drawing')) scores.creative += 2;
    if (freeTime.includes('business')) scores.commerce += 2;
    if (freeTime.includes('Helping')) scores.medical += 1.5;

    // Q1: Project role
    const projectRole = answers['4-1'] || '';
    if (projectRole.includes('Lead')) scores.commerce += 1;
    if (projectRole.includes('Research')) scores.stem += 1.5;
    if (projectRole.includes('Design')) scores.creative += 2;
    if (projectRole.includes('Calculate')) scores.commerce += 1.5;

    // Q2: Pride source
    const pride = answers['4-2'] || '';
    if (pride.includes('Building')) scores.technical += 2;
    if (pride.includes('Helping')) scores.medical += 1.5;
    if (pride.includes('Earning')) scores.commerce += 1;
    if (pride.includes('exams')) scores.stem += 1;
    if (pride.includes('art')) scores.creative += 2;

    // Q3: Work environment
    const environment = answers['4-3'] || '';
    if (environment.includes('Laboratory')) scores.stem += 2;
    if (environment.includes('Hospital')) scores.medical += 2;
    if (environment.includes('Office')) scores.commerce += 1;
    if (environment.includes('Outdoor')) scores.technical += 1.5;
    if (environment.includes('Classroom')) scores.arts += 1.5;
    if (environment.includes('Studio')) scores.creative += 2;

    return scores;
};

/**
 * Get top 3 career categories
 */
const getTopCategories = (scores) => {
    return Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map(([category, score]) => ({ category, score }));
};

/**
 * Generate AI-powered career recommendations using Gemini
 */
export const generateAIRecommendations = async (quizAnswers, studentType) => {
    try {
        // Step 1: Calculate category scores
        const categoryScores = calculateCategoryScores(quizAnswers, studentType);
        const topCategories = getTopCategories(categoryScores);

        // Step 2: Prepare context for AI
        const context = {
            studentType,
            topCategories: topCategories.map(c => c.category),
            scores: categoryScores,
            constraints: {
                earlyEarning: quizAnswers['3-0'] >= 4,
                longEducation: quizAnswers['3-1'] >= 4,
                governmentPreference: quizAnswers['2-2'] >= 4,
                lowCostPreference: quizAnswers['3-2'] >= 4,
                skillCoursesOpen: quizAnswers['3-3'] >= 4,
            },
            situationalChoices: {
                freeTime: quizAnswers['4-0'],
                projectRole: quizAnswers['4-1'],
                prideSource: quizAnswers['4-2'],
                workEnvironment: quizAnswers['4-3'],
            }
        };

        // Step 3: Create AI prompt
        const prompt = `You are an expert Indian career counselor. Analyze this student's career assessment:

**Student Type**: ${studentType === 'after-10th' ? 'After 10th Standard' : 'After 12th Standard'}

**Top Career Categories** (by score):
1. ${topCategories[0].category} (${topCategories[0].score.toFixed(1)} points)
2. ${topCategories[1].category} (${topCategories[1].score.toFixed(1)} points)
3. ${topCategories[2].category} (${topCategories[2].score.toFixed(1)} points)

**Career Constraints**:
- Wants early earning: ${context.constraints.earlyEarning ? 'Yes' : 'No'}
- Willing for long education (5-8 years): ${context.constraints.longEducation ? 'Yes' : 'No'}
- Prefers government jobs: ${context.constraints.governmentPreference ? 'Yes' : 'No'}
- Prefers low-cost colleges: ${context.constraints.lowCostPreference ? 'Yes' : 'No'}
- Open to skill/diploma courses: ${context.constraints.skillCoursesOpen ? 'Yes' : 'No'}

**Behavioral Indicators**:
- Free time choice: ${context.situationalChoices.freeTime}
- Project role: ${context.situationalChoices.projectRole}
- Pride source: ${context.situationalChoices.prideSource}
- Dream work environment: ${context.situationalChoices.workEnvironment}

Provide personalized career recommendations in JSON format:

{
  "recommendations": [
    {
      "title": "Career Name",
      "category": "stem/medical/commerce/arts/creative/technical",
      "match_score": 85-99,
      "reasoning": "2-3 sentences explaining why this career perfectly matches their strengths, interests, and constraints",
      "degree_required": "${studentType === 'after-10th' ? 'Diploma/Skill course name' : 'Degree name (e.g., B.Tech CS, MBBS, B.Com)'}",
      "duration": "Time to complete education",
      "salary_range": "Realistic Indian salary range",
      "demand_level": "Very High/High/Medium",
      "action_steps": [
        "Immediate action step for this month",
        "Next 6 months goal",
        "1 year goal"
      ]
    }
  ],
  "stream_recommendation": "${studentType === 'after-12th' ? 'Choose: Science (MPC), Science (BiPC), Commerce, or Arts based on top categories' : 'Not applicable'}",
  "overall_profile": "2-3 sentences summarizing their unique strengths and career personality"
}

Provide exactly ${studentType === 'after-10th' ? '5' : '7'} career recommendations, ordered by match score. Be specific to Indian education system and job market.`;

        // Step 4: Call Gemini AI
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Step 5: Parse JSON response
        // Remove markdown code blocks if present
        const cleanText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const aiRecommendations = JSON.parse(cleanText);

        // Step 6: Add category scores to response
        return {
            ...aiRecommendations,
            category_scores: categoryScores,
            top_categories: topCategories,
            analysis_timestamp: new Date().toISOString(),
        };

    } catch (error) {
        console.error('AI Recommendation Error:', error);
        throw new Error('Failed to generate AI recommendations: ' + error.message);
    }
};

/**
 * Get fallback recommendations if AI fails
 */
export const getFallbackRecommendations = (quizAnswers, studentType) => {
    const categoryScores = calculateCategoryScores(quizAnswers, studentType);
    const topCategories = getTopCategories(categoryScores);

    return {
        recommendations: [
            {
                title: 'Please retry',
                category: topCategories[0].category,
                match_score: 0,
                reasoning: 'AI service temporarily unavailable. Please try again.',
                degree_required: 'N/A',
                duration: 'N/A',
                salary_range: 'N/A',
                demand_level: 'N/A',
                action_steps: ['Retry the analysis', 'Contact support if issue persists'],
            }
        ],
        stream_recommendation: 'Analysis unavailable',
        overall_profile: 'Please retry to get personalized recommendations.',
        category_scores: categoryScores,
        top_categories: topCategories,
    };
};
