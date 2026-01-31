import { useState, useEffect } from 'react';
import { collegeAPI } from '../../services/api';

const CollegeDirectory = () => {
    const [loading, setLoading] = useState(true);
    const [colleges, setColleges] = useState([]);
    const [filters, setFilters] = useState({ state: '', district: '', search: '' });

    useEffect(() => {
        fetchColleges();
    }, []);

    const fetchColleges = async () => {
        try {
            const res = await collegeAPI.getAll();
            setColleges(res.data.data);
        } catch (err) {
            console.error('Failed to fetch colleges:', err);
        } finally {
            setLoading(false);
        }
    };

    const filteredColleges = colleges.filter(college => {
        const matchesState = !filters.state || college.location.state === filters.state;
        const matchesDistrict = !filters.district || college.location.district.toLowerCase().includes(filters.district.toLowerCase());
        const matchesSearch = !filters.search || college.name.toLowerCase().includes(filters.search.toLowerCase());
        return matchesState && matchesDistrict && matchesSearch;
    });

    const states = [...new Set(colleges.map(c => c.location.state))].sort();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading colleges...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-display font-bold mb-2">Government College Directory</h1>
                <p className="text-gray-600 mb-8">Explore {colleges.length} government colleges across India</p>

                {/* Filters */}
                <div className="card mb-8 p-6">
                    <div className="grid md:grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Search by college name..."
                            value={filters.search}
                            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                            className="input"
                        />
                        <select
                            value={filters.state}
                            onChange={(e) => setFilters({ ...filters, state: e.target.value })}
                            className="input"
                        >
                            <option value="">All States</option>
                            {states.map(state => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            placeholder="Search by district..."
                            value={filters.district}
                            onChange={(e) => setFilters({ ...filters, district: e.target.value })}
                            className="input"
                        />
                    </div>
                </div>

                {/* Results */}
                <div className="mb-4 text-gray-600">
                    Showing {filteredColleges.length} college(s)
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {filteredColleges.map((college, index) => (
                        <div key={index} className="card">
                            <h3 className="text-lg font-bold mb-2">{college.name}</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                📍 {college.location.city}, {college.location.district}, {college.location.state}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {college.facilities.hostel && <span className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded">🏠 Hostel</span>}
                                {college.facilities.library && <span className="text-xs px-2 py-1 bg-purple-50 text-purple-700 rounded">📚 Library</span>}
                                {college.facilities.labs && <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded">🔬 Labs</span>}
                                {college.facilities.sports && <span className="text-xs px-2 py-1 bg-orange-50 text-orange-700 rounded">⚽ Sports</span>}
                                {college.facilities.canteen && <span className="text-xs px-2 py-1 bg-red-50 text-red-700 rounded">🍽️ Canteen</span>}
                            </div>

                            <div className="text-sm space-y-2">
                                <div>
                                    <strong>Type:</strong> <span className="text-gray-600">{college.type}</span>
                                </div>
                                <div>
                                    <strong>Medium:</strong> <span className="text-gray-600">{college.mediumOfInstruction.join(', ')}</span>
                                </div>
                                <div>
                                    <strong>Courses:</strong> <span className="text-gray-600">{college.coursesOffered.length} programs</span>
                                </div>
                                {college.contactInfo?.phone && (
                                    <div>
                                        <strong>Phone:</strong> <span className="text-gray-600">{college.contactInfo.phone}</span>
                                    </div>
                                )}
                                {college.contactInfo?.website && (
                                    <div>
                                        <strong>Website:</strong>{' '}
                                        <a href={`https://${college.contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                                            {college.contactInfo.website}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredColleges.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        No colleges found matching your filters
                    </div>
                )}
            </div>
        </div>
    );
};

export default CollegeDirectory;
