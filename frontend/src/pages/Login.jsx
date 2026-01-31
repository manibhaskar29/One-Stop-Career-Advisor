import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const result = await login(formData.email, formData.password);

        if (result.success) {
            // Redirect based on role
            if (result.user.role === 'student') {
                if (result.user.hasProfile) {
                    navigate('/student/dashboard');
                } else {
                    navigate('/student/profile');
                }
            } else if (result.user.role === 'admin') {
                navigate('/admin/dashboard');
            }
        } else {
            setError(result.error);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 px-4">
            <div className="max-w-md w-full">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link to="/" className="text-3xl font-display font-bold text-gradient">
                        One Stop Career Guide
                    </Link>
                    <p className="text-gray-600 mt-2">Welcome back! Please login to continue</p>
                </div>

                {/* Login Form */}
                <div className="card p-8">
                    <h2 className="text-2xl font-display font-bold mb-6 text-center">Login</h2>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="label">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input"
                                placeholder="your.email@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="input"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-primary w-full"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">
                                Register here
                            </Link>
                        </p>
                    </div>

                    {/* Demo Credentials */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500 text-center mb-2">Demo Credentials</p>
                        <div className="space-y-2 text-sm">
                            <div className="bg-gray-50 p-3 rounded">
                                <p className="font-medium text-gray-700">Admin</p>
                                <p className="text-gray-600">Email: admin@career-guide.com</p>
                                <p className="text-gray-600">Password: Admin@123</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <Link to="/" className="text-primary-600 hover:text-primary-700">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
