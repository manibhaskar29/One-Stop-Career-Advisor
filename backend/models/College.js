import mongoose from 'mongoose';

const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'College name is required'],
        trim: true
    },
    location: {
        district: {
            type: String,
            required: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        state: {
            type: String,
            required: true,
            trim: true
        },
        pincode: {
            type: String,
            trim: true
        }
    },
    type: {
        type: String,
        enum: ['Government', 'Government-Aided'],
        default: 'Government'
    },
    coursesOffered: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
    facilities: {
        hostel: {
            type: Boolean,
            default: false
        },
        library: {
            type: Boolean,
            default: false
        },
        labs: {
            type: Boolean,
            default: false
        },
        sports: {
            type: Boolean,
            default: false
        },
        canteen: {
            type: Boolean,
            default: false
        }
    },
    mediumOfInstruction: [{
        type: String,
        enum: ['English', 'Hindi', 'Regional'],
        default: ['English']
    }],
    eligibility: {
        type: String
    },
    contactInfo: {
        phone: String,
        email: String,
        website: String
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Indexes for location-based queries
collegeSchema.index({ 'location.district': 1 });
collegeSchema.index({ 'location.state': 1 });
collegeSchema.index({ coursesOffered: 1 });
collegeSchema.index({ isActive: 1 });

export default mongoose.model('College', collegeSchema);
