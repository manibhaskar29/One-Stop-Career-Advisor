import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Career title is required'],
        trim: true
    },
    relatedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
    industries: [{
        type: String,
        trim: true
    }],
    description: {
        type: String,
        required: true
    },
    skills: [{
        type: String,
        trim: true
    }],
    governmentExams: [{
        type: String,
        trim: true
    }],
    higherEducationOptions: [{
        type: String,
        trim: true
    }],
    salaryRange: {
        min: {
            type: Number
        },
        max: {
            type: Number
        },
        currency: {
            type: String,
            default: 'INR'
        }
    },
    jobOutlook: {
        type: String,
        enum: ['Excellent', 'Good', 'Average', 'Limited'],
        default: 'Good'
    },
    popularity: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

// Indexes
careerSchema.index({ title: 1 });
careerSchema.index({ industries: 1 });
careerSchema.index({ popularity: -1 });

export default mongoose.model('Career', careerSchema);
