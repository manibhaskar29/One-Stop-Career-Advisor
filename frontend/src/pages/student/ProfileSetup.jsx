import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { profileAPI } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const ProfileSetup = () => {
    const navigate = useNavigate();
    const { updateUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        class: '',
        interests: [],
        preferredSubjects: [],
        location: { district: '', state: '' },
        languagePreference: 'English'
    });

    const interestOptions = [
        'Technology', 'Science', 'Mathematics', 'Business', 'Arts & Design',
        'Social Sciences', 'Healthcare', 'Engineering', 'Law', 'Education',
        'Agriculture', 'Media & Communication'
    ];

    const subjectOptions = {
        '10': ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi', 'Computer Science'],
        '12': ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science',
            'Accountancy', 'Business Studies', 'Economics', 'History', 'Political Science',
            'Psychology', 'Sociology', 'English', 'Hindi']
    };

    const indianStates = [
        'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
        'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
        'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
        'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
        'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
        'Uttarakhand', 'West Bengal'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData({
                ...formData,
                [parent]: { ...formData[parent], [child]: value }
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleMultiSelect = (field, value) => {
        const current = formData[field];
        if (current.includes(value)) {
            setFormData({ ...formData, [field]: current.filter(item => item !== value) });
        } else {
            setFormData({ ...formData, [field]: [...current, value] });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Validation
        if (!formData.class) {
            setError('Please select your class');
            setLoading(false);
            return;
        }

        if (formData.interests.length === 0) {
            setError('Please select at least one interest');
            setLoading(false);
            return;
        }

        if (formData.preferredSubjects.length === 0) {
            setError('Please select at least one preferred subject');
            setLoading(false);
            return;
        }

        if (!formData.location.district || !formData.location.state) {
            setError('Please provide your location');
            setLoading(false);
            return;
        }

        try {
            await profileAPI.create(formData);
            updateUser({ ...formData, hasProfile: true });
            navigate('/student/dashboard');
        } catch (err) {
            setError(err.response?.data?.error?.message || 'Failed to create profile');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-display font-bold mb-2">Complete Your Profile</h1>
                    <p className="text-gray-600">Help us personalize your career recommendations</p>
                </div>

                {/* Form */}
                <div className="card p-8">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Class Selection */}
                        <div>
                            <label className="label">Which class are you in? *</label>
                            <div className="grid grid-cols-2 gap-4">
                                {['10', '12'].map(classLevel => (
                                    <button
                                        key={classLevel}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, class: classLevel, preferredSubjects: [] })}
                                        className={`p-4 border-2 rounded-lg text-center transition-all ${formData.class === classLevel
                                                ? 'border-primary-600 bg-primary-50 text-primary-700 font-semibold'
                                                : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        Class {classLevel}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Interests */}
                        <div>
                            <label className="label">What are your interests? * (Select multiple)</label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {interestOptions.map(interest => (
                                    <button
                                        key={interest}
                                        type="button"
                                        onClick={() => handleMultiSelect('interests', interest)}
                                        className={`px-4 py-2 border-2 rounded-lg text-sm transition-all ${formData.interests.includes(interest)
                                                ? 'border-primary-600 bg-primary-50 text-primary-700 font-medium'
                                                : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                    >
                                        {interest}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Preferred Subjects */}
                        {formData.class && (
                            <div>
                                <label className="label">Preferred Subjects * (Select multiple)</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {subjectOptions[formData.class].map(subject => (
                                        <button
                                            key={subject}
                                            type="button"
                                            onClick={() => handleMultiSelect('preferredSubjects', subject)}
                                            className={`px-4 py-2 border-2 rounded-lg text-sm transition-all ${formData.preferredSubjects.includes(subject)
                                                    ? 'border-primary-600 bg-primary-50 text-primary-700 font-medium'
                                                    : 'border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            {subject}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Location */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">District *</label>
                                <input
                                    type="text"
                                    name="location.district"
                                    value={formData.location.district}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Enter your district"
                                    required
                                />
                            </div>
                            <div>
                                <label className="label">State *</label>
                                <select
                                    name="location.state"
                                    value={formData.location.state}
                                    onChange={handleChange}
                                    className="input"
                                    required
                                >
                                    <option value="">Select State</option>
                                    {indianStates.map(state => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Language Preference */}
                        <div>
                            <label className="label">Preferred Language</label>
                            <select
                                name="languagePreference"
                                value={formData.languagePreference}
                                onChange={handleChange}
                                className="input"
                            >
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Regional">Regional Language</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary w-full text-lg py-4"
                        >
                            {loading ? 'Creating Profile...' : 'Complete Profile & Continue'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileSetup;
