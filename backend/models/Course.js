import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Course name is required'],
        trim: true
    },
    shortName: {
        type: String,
        trim: true
    },
    stream: {
        type: String,
        enum: ['Science', 'Commerce', 'Arts', 'Vocational'],
        required: true
    },
    eligibility: {
        class: {
            type: String,
            enum: ['10', '12'],
            required: true
        },
        minPercentage: {
            type: Number,
            min: 0,
            max: 100
        },
        requiredSubjects: [{
            type: String
        }]
    },
    duration: {
        type: String,
        default: '3 years'
    },
    description: {
        type: String,
        required: true
    },
    relatedCareers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Career'
    }],
    popularity: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Indexes
courseSchema.index({ stream: 1 });
courseSchema.index({ 'eligibility.class': 1 });
courseSchema.index({ isActive: 1 });

export default mongoose.model('Course', courseSchema);
