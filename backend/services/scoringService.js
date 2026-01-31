import QuizQuestion from '../models/QuizQuestion.js';

/**
 * Quiz Scoring Service
 * Calculates aptitude scores based on student responses
 */
class ScoringService {
    /**
     * Calculate scores from quiz responses
     * @param {Array} responses - Array of {questionId, selectedOption}
     * @returns {Object} Calculated scores and aptitude profile
     */
    async calculateScore(responses) {
        try {
            // Fetch all questions that were answered
            const questionIds = responses.map(r => r.questionId);
            const questions = await QuizQuestion.find({ _id: { $in: questionIds } });

            // Initialize scores
            const scores = {
                science: 0,
                commerce: 0,
                arts: 0,
                vocational: 0,
                logical: 0,
                creativity: 0,
                analytical: 0
            };

            // Category counts for averaging
            const categoryCounts = {
                logical: 0,
                subject: 0,
                personality: 0,
                career: 0
            };

            // Calculate weighted scores
            responses.forEach(response => {
                const question = questions.find(q => q._id.toString() === response.questionId.toString());

                if (question && question.options[response.selectedOption]) {
                    const selectedOption = question.options[response.selectedOption];
                    const weights = selectedOption.weight;

                    // Add stream weights
                    scores.science += weights.science || 0;
                    scores.commerce += weights.commerce || 0;
                    scores.arts += weights.arts || 0;
                    scores.vocational += weights.vocational || 0;

                    // Add trait scores based on category
                    if (question.category === 'logical') {
                        scores.logical += Math.max(...Object.values(weights));
                        categoryCounts.logical++;
                    } else if (question.category === 'subject') {
                        scores.analytical += Math.max(...Object.values(weights));
                        categoryCounts.subject++;
                    } else if (question.category === 'personality') {
                        scores.creativity += Math.max(...Object.values(weights));
                        categoryCounts.personality++;
                    }

                    categoryCounts[question.category]++;
                }
            });

            // Normalize scores (0-100 scale)
            const totalQuestions = responses.length;
            const maxScore = totalQuestions * 10; // Assuming max weight per question is 10

            Object.keys(scores).forEach(key => {
                scores[key] = Math.round((scores[key] / maxScore) * 100);
            });

            // Generate aptitude profile
            const aptitudeProfile = this.generateAptitudeProfile(scores);

            return { scores, aptitudeProfile };
        } catch (error) {
            console.error('Error calculating scores:', error);
            throw error;
        }
    }

    /**
     * Generate aptitude profile from scores
     * @param {Object} scores - Calculated scores
     * @returns {Object} Aptitude profile
     */
    generateAptitudeProfile(scores) {
        // Get primary and secondary streams
        const streamScores = [
            { stream: 'Science', score: scores.science },
            { stream: 'Commerce', score: scores.commerce },
            { stream: 'Arts', score: scores.arts },
            { stream: 'Vocational', score: scores.vocational }
        ].sort((a, b) => b.score - a.score);

        const primaryStream = streamScores[0].stream;
        const secondaryStream = streamScores[1].stream;

        // Determine strengths
        const strengths = [];
        if (scores.logical > 70) strengths.push('Logical Reasoning');
        if (scores.analytical > 70) strengths.push('Analytical Thinking');
        if (scores.creativity > 70) strengths.push('Creative Problem Solving');
        if (scores.science > 70) strengths.push('Scientific Aptitude');
        if (scores.commerce > 70) strengths.push('Business Acumen');
        if (scores.arts > 70) strengths.push('Artistic Expression');

        // Determine traits
        const traits = [];
        if (scores.logical > 60) traits.push('Detail-oriented');
        if (scores.creativity > 60) traits.push('Innovative');
        if (scores.analytical > 60) traits.push('Problem Solver');
        if (scores.science > 60 && scores.logical > 60) traits.push('Research-minded');
        if (scores.commerce > 60) traits.push('Business-oriented');
        if (scores.arts > 60) traits.push('Creative Thinker');

        return {
            primaryStream,
            secondaryStream,
            strengths,
            traits
        };
    }
}

export default new ScoringService();
