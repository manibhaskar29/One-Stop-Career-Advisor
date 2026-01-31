import mongoose from 'mongoose';


const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    class: {
        type: String,
        enum: ['10', '12'],
        required: [true, 'Please specify your class']
    },
    interests: [{
        type: String,
        trim: true
    }],
    preferredSubjects: [{
        type: String,
        trim: true
    }],
    location: {
        district: {
            type: String,
            trim: true
        },
        city: {
            type: String,
            trim: true
        },
        state: {
            type: String,
            trim: true
        }
    },
    languagePreference: {
        type: String,
        default: 'en',
        enum: ['en', 'hi', 'mr', 'ta', 'te', 'kn', 'gu', 'bn']
    },
    academicPerformance: {
        percentage: {
            type: Number,
            min: 0,
            max: 100
        },
        stream: {
            type: String,
            enum: ['Science', 'Commerce', 'Arts', 'Vocational'],
            // Only required for class 12
            required: function () {
                return this.class === '12';
            }
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

// Index for faster queries
profileSchema.index({ userId: 1 });
profileSchema.index({ 'location.district': 1 });
profileSchema.index({ 'location.state': 1 });

export default mongoose.model('Profile', profileSchema);
