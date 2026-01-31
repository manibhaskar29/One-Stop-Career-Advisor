import mongoose from 'mongoose';

const timelineSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Timeline title is required'],
        trim: true
    },
    type: {
        type: String,
        enum: ['admission', 'scholarship', 'exam', 'counseling'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    targetClass: {
        type: String,
        enum: ['10', '12', 'both'],
        default: 'both'
    },
    targetStream: {
        type: String,
        enum: ['Science', 'Commerce', 'Arts', 'Vocational', 'All'],
        default: 'All'
    },
    relatedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

// Indexes
timelineSchema.index({ startDate: 1 });
timelineSchema.index({ endDate: 1 });
timelineSchema.index({ targetClass: 1 });
timelineSchema.index({ type: 1 });
timelineSchema.index({ isActive: 1 });

export default mongoose.model('Timeline', timelineSchema);
