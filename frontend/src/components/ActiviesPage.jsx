import React from 'react';

const activities = [
  {
    id: 1,
    title: "Complete JavaScript Basics Course",
    description: "Finish all modules and quizzes in the JavaScript Basics course.",
    reward: 50,
  },
  {
    id: 2,
    title: "Participate in Weekly Coding Challenge",
    description: "Solve at least 3 problems in this week's coding challenge.",
    reward: 30,
  },
  {
    id: 3,
    title: "Attend Blockchain Workshop",
    description: "Join our special workshop and earn bonus EdCoins.",
    reward: 70,
  },
  {
    id: 4,
    title: "Submit a Project",
    description: "Build and submit a project for the Monthly Hackathon.",
    reward: 100,
  },
  {
    id: 5,
    title: "Daily Login Streak",
    description: "Log in 7 days in a row to claim extra EdCoins.",
    reward: 20,
  },
];

const ActivitiesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Activities & Events</h1>
        <p className="text-lg text-slate-600">
          Explore opportunities to learn and earn EdCoins!
        </p>
      </div>

      {/* Activities Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <div key={activity.id} className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition duration-300">
            <h2 className="text-2xl font-semibold mb-2 text-slate-800">{activity.title}</h2>
            <p className="text-slate-600 text-sm mb-4">{activity.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-slate-700 font-bold">{activity.reward} EdCoins</span>
              <button
                className="px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition duration-300"
              >
                Participate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;
