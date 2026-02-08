import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { getPlan } from '../services/api';
import { Link } from 'react-router-dom';

const MyPlan = () => {
    const { bodyType } = useContext(UserContext);
    const [plan, setPlan] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (bodyType) {
            getPlan(bodyType)
                .then(data => {
                    setPlan(data);
                    setLoading(false);
                })
                .catch(err => {
                    setError('Failed to load plan');
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [bodyType]);

    if (!bodyType) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-2xl font-bold mb-4">No Body Type Found</h2>
                <p className="mb-4">Please take the quiz to get your personalized plan.</p>
                <Link to="/quiz" className="bg-blue-500 text-white px-4 py-2 rounded">Take Quiz</Link>
            </div>
        );
    }

    if (loading) return <div className="text-center mt-20">Loading your plan...</div>;
    if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;
    if (!plan) return <div className="text-center mt-20">Plan not found.</div>;

    return (
        <div className="container mx-auto p-4 mt-10">
            <h1 className="text-3xl font-bold text-center mb-2">Your {plan.bodyType} Plan</h1>
            <p className="text-center text-gray-600 mb-8">{plan.description}</p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-green-50 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-3 text-green-800">Dietary Guidelines</h3>
                    <ul className="list-disc list-inside">
                        {plan.dietaryGuidelines.map((g, i) => <li key={i} className="mb-1">{g}</li>)}
                    </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">Workout Guidelines</h3>
                    <ul className="list-disc list-inside">
                        {plan.workoutGuidelines.map((g, i) => <li key={i} className="mb-1">{g}</li>)}
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 border-b pb-2">Weekly Schedule</h2>
            <div className="space-y-6">
                {plan.schedule.map((dayPlan, index) => (
                    <div key={index} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                        <h3 className="text-lg font-bold mb-3 bg-gray-100 p-2 rounded">{dayPlan.day}</h3>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold text-gray-700 mb-2">Meals</h4>
                                <ul className="space-y-2">
                                    {dayPlan.meals.map((meal, mIndex) => (
                                        <li key={mIndex} className="text-sm">
                                            <span className="font-medium text-gray-900">{meal.type}:</span> {meal.item}
                                            <span className="text-xs text-gray-500 ml-2">({meal.calories} kcal)</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-700 mb-2">Exercises</h4>
                                <ul className="space-y-2">
                                    {dayPlan.exercises.map((ex, eIndex) => (
                                        <li key={eIndex} className="text-sm">
                                            <span className="font-medium text-gray-900">{ex.name}</span>
                                            <span className="text-xs text-gray-500 ml-2">({ex.duration} - {ex.category})</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyPlan;
