import mongoose from 'mongoose';

const quizResultSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    responses: [{
        questionId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'QuizQuestion',
            required: true
        },
        selectedOption: {
            type: Number,
            required: true
        }
    }],
    scores: {
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
        },
        logical: {
            type: Number,
            default: 0
        },
        creativity: {
            type: Number,
            default: 0
        },
        analytical: {
            type: Number,
            default: 0
        }
    },
    aptitudeProfile: {
        primaryStream: {
            type: String,
            enum: ['Science', 'Commerce', 'Arts', 'Vocational']
        },
        secondaryStream: {
            type: String,
            enum: ['Science', 'Commerce', 'Arts', 'Vocational']
        },
        strengths: [{
            type: String
        }],
        traits: [{
            type: String
        }]
    },
    completedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Indexes
quizResultSchema.index({ userId: 1 });
quizResultSchema.index({ completedAt: -1 });

export default mongoose.model('QuizResult', quizResultSchema);
