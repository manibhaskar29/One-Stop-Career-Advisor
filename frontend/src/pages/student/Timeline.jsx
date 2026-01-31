import { useState, useEffect } from 'react';
import { timelineAPI } from '../../services/api';

const Timeline = () => {
    const [loading, setLoading] = useState(true);
    const [events, setEvents] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const res = await timelineAPI.getAll();
            setEvents(res.data.data);
        } catch (err) {
            console.error('Failed to fetch timeline:', err);
        } finally {
            setLoading(false);
        }
    };

    const filteredEvents = events.filter(event =>
        filter === 'all' || event.type === filter
    );

    const getEventIcon = (type) => {
        switch (type) {
            case 'exam': return '📝';
            case 'admission': return '🎓';
            case 'scholarship': return '💰';
            case 'counseling': return '🗓️';
            default: return '📅';
        }
    };

    const isUpcoming = (date) => new Date(date) > new Date();
    const isPast = (date) => new Date(date) < new Date();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading timeline...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-display font-bold mb-2">Important Dates & Timeline</h1>
                <p className="text-gray-600 mb-8">Stay updated with admissions, exams, and scholarship deadlines</p>

                {/* Filters */}
                <div className="flex gap-2 mb-8 overflow-x-auto">
                    {['all', 'exam', 'admission', 'scholarship', 'counseling'].map(type => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-4 py-2 rounded-lg capitalize font-medium whitespace-nowrap ${filter === type
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            {type === 'all' ? 'All Events' : type}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <div className="space-y-4">
                    {filteredEvents.map((event, index) => {
                        const upcoming = isUpcoming(event.startDate);
                        return (
                            <div key={index} className={`card ${upcoming ? 'border-l-4 border-primary-600' : 'opacity-75'}`}>
                                <div className="flex items-start gap-4">
                                    <div className="text-4xl flex-shrink-0">{getEventIcon(event.type)}</div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-lg font-bold">{event.title}</h3>
                                                <div className="flex gap-2 mt-1">
                                                    <span className={`text-xs px-2 py-1 rounded-full capitalize ${event.type === 'exam' ? 'bg-blue-100 text-blue-700' :
                                                            event.type === 'admission' ? 'bg-green-100 text-green-700' :
                                                                event.type === 'scholarship' ? 'bg-yellow-100 text-yellow-700' :
                                                                    'bg-purple-100 text-purple-700'
                                                        }`}>
                                                        {event.type}
                                                    </span>
                                                    {event.priority === 'high' && (
                                                        <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">High Priority</span>
                                                    )}
                                                </div>
                                            </div>
                                            {upcoming && (
                                                <span className="text-xs px-3 py-1 bg-green-500 text-white rounded-full font-medium">
                                                    Upcoming
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-gray-600 mb-3">{event.description}</p>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                            <div>
                                                <strong>Start:</strong> {new Date(event.startDate).toLocaleDateString('en-IN', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })}
                                            </div>
                                            {event.endDate && event.startDate !== event.endDate && (
                                                <div>
                                                    <strong>End:</strong> {new Date(event.endDate).toLocaleDateString('en-IN', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })}
                                                </div>
                                            )}
                                            <div>
                                                <strong>For:</strong> {event.targetClass === 'both' ? 'Class 10 & 12' : `Class ${event.targetClass}`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredEvents.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        No events found for this category
                    </div>
                )}
            </div>
        </div>
    );
};

export default Timeline;
