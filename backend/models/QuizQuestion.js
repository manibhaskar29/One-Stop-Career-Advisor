import mongoose from 'mongoose';

const quizQuestionSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['logical', 'subject', 'personality', 'career'],
        required: true
    },
    question: {
        type: String,
        required: [true, 'Question text is required'],
        trim: true
    },
    options: [{
        text: {
            type: String,
            required: true
        },
        // Weight for each stream - used in scoring
        weight: {
            science: {
                type: Number,
                default: 0
            },
            commerce: {
                type: Number,
                default: 0
            },
            arts: {
                type: Number,
                default: 0
            },
            vocational: {
                type: Number,
                default: 0
            }
        }
    }],
    targetClass: {
        type: String,
        enum: ['10', '12', 'both'],
        default: 'both'
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Indexes for efficient querying
quizQuestionSchema.index({ category: 1, targetClass: 1 });
quizQuestionSchema.index({ isActive: 1 });

export default mongoose.model('QuizQuestion', quizQuestionSchema);
