import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizAPI } from '../../services/api';

const TakeQuiz = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [responses, setResponses] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            const res = await quizAPI.getQuestions();
            setQuestions(res.data.data);
        } catch (err) {
            setError('Failed to load questions');
        } finally {
            setLoading(false);
        }
    };

    const handleAnswer = (questionId, optionIndex) => {
        setResponses({
            ...responses,
            [questionId]: optionIndex
        });
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleSubmit = async () => {
        // Check if all questions are answered
        const unanswered = questions.filter(q => responses[q._id] === undefined);
        if (unanswered.length > 0) {
            setError(`Please answer all questions. ${unanswered.length} question(s) remaining.`);
            return;
        }

        setSubmitting(true);
        setError('');

        try {
            await quizAPI.submitQuiz(responses);
            navigate('/student/recommendations');
        } catch (err) {
            setError(err.response?.data?.error?.message || 'Failed to submit quiz');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading quiz...</p>
                </div>
            </div>
        );
    }

    if (questions.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="card max-w-md text-center">
                    <p className="text-gray-600">No questions available</p>
                </div>
            </div>
        );
    }

    const question = questions[currentQuestion];
    const progress = ((Object.keys(responses).length / questions.length) * 100).toFixed(0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-display font-bold mb-2">Aptitude Assessment</h1>
                    <p className="text-gray-600">
                        Question {currentQuestion + 1} of {questions.length}
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Progress</span>
                        <span>{progress}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
                        {error}
                    </div>
                )}

                {/* Question Card */}
                <div className="card p-8 mb-6">
                    {/* Category Badge */}
                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium capitalize">
                            {question.category}
                        </span>
                    </div>

                    {/* Question */}
                    <h2 className="text-xl font-semibold mb-6">{question.question}</h2>

                    {/* Options */}
                    <div className="space-y-3">
                        {question.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(question._id, index)}
                                className={`w-full p-4 border-2 rounded-lg text-left transition-all ${responses[question._id] === index
                                        ? 'border-primary-600 bg-primary-50 text-primary-700 font-medium'
                                        : 'border-gray-200 hover:border-gray-300'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${responses[question._id] === index
                                            ? 'border-primary-600 bg-primary-600'
                                            : 'border-gray-300'
                                        }`}>
                                        {responses[question._id] === index && (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        )}
                                    </div>
                                    <span>{option.text}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center">
                    <button
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                        className="btn btn-outline disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        ← Previous
                    </button>

                    <div className="flex gap-2">
                        {questions.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentQuestion(index)}
                                className={`w-3 h-3 rounded-full transition-all ${responses[questions[index]._id] !== undefined
                                        ? 'bg-green-500'
                                        : index === currentQuestion
                                            ? 'bg-primary-600 w-6'
                                            : 'bg-gray-300'
                                    }`}
                            ></button>
                        ))}
                    </div>

                    {currentQuestion === questions.length - 1 ? (
                        <button
                            onClick={handleSubmit}
                            disabled={submitting}
                            className="btn btn-primary"
                        >
                            {submitting ? 'Submitting...' : 'Submit Quiz'}
                        </button>
                    ) : (
                        <button onClick={handleNext} className="btn btn-primary">
                            Next →
                        </button>
                    )}
                </div>

                {/* Summary */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    <p>
                        Answered: {Object.keys(responses).length} / {questions.length}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TakeQuiz;
