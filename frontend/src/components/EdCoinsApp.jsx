import { useState } from "react";
import {
  Trophy,
  Book,
  Calendar,
  Gift,
  Award,
  BarChart,
  User,
  Bell,
  LogOut,
} from "lucide-react";
import { useUser } from "../Context/User";
import { Link, useNavigate } from "react-router-dom";

export default function EdCoinDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const userData = {
    name: "Alex Johnson",
    profileImage: "/api/placeholder/80/80",
    totalCoins: 750,
    rank: "Scholar",
    nextRank: "Dean's List",
    coinsForNextRank: 1000,
    recentActivities: [
      { id: 1, activity: "Attended Workshop", coins: 50, date: "Apr 23" },
      { id: 2, activity: "Submitted Assignment", coins: 25, date: "Apr 21" },
      {
        id: 3,
        activity: "Volunteered Campus Event",
        coins: 100,
        date: "Apr 18",
      },
      { id: 4, activity: "Perfect Attendance", coins: 75, date: "Apr 15" },
    ],
    availableRewards: [
      {
        id: 1,
        name: "Bookstore Discount",
        cost: 100,
        description: "15% off at campus bookstore",
      },
      {
        id: 2,
        name: "Coffee Shop Voucher",
        cost: 200,
        description: "Free coffee for a week",
      },
      {
        id: 3,
        name: "Parking Pass",
        cost: 500,
        description: "Premium parking for a month",
      },
      {
        id: 4,
        name: "Course Credit",
        cost: 1000,
        description: "Extra credit in one course",
      },
    ],
  };

  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white">
        <div className="p-6">
          <Link to="/">
            <h1 className="text-2xl font-bold flex items-center">
              <Trophy className="mr-2" /> EdCoin
            </h1>
            <p className="text-blue-200 text-sm">College Rewards System</p>
          </Link>
        </div>

        <nav className="mt-6">
          <SidebarLink
            icon={<BarChart />}
            text="Dashboard"
            active={activeTab === "dashboard"}
            onClick={() => navigate("/home")}
          />
          <SidebarLink
            icon={<Gift />}
            text="Rewards"
            active={activeTab === "rewards"}
            onClick={() => navigate("/rewards")}
          />
          <SidebarLink
            icon={<Book />}
            text="Activities"
            active={activeTab === "activities"}
            onClick={() => navigate("/activity")}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Top Bar */}
        <div className="bg-white p-4 shadow flex justify-between items-center">
          <h2 className="text-xl font-semibold">Student Dashboard</h2>
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100 mr-2">
              <Bell size={20} />
            </button>
            <div className="flex items-center">
              <span className="mr-4">{userData.name}</span>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <LogOut size={20} />
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* EdCoin Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm mb-2">Total EdCoins</h3>
              <div className="flex items-center">
                <Trophy className="text-yellow-500 mr-2" size={24} />
                <span className="text-3xl font-bold">{500}</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm mb-2">Current Rank</h3>
              <div className="flex items-center">
                <Award className="text-blue-500 mr-2" size={24} />
                <span className="text-3xl font-bold">{userData?.rank}</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm mb-2">Next Rank Progress</h3>
              <div className="mb-2">
                <span className="text-sm">{userData?.nextRank}</span>
                <span className="text-xs text-gray-500 float-right">
                  {userData?.totalCoins}/{userData?.coinsForNextRank}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-slate-600 h-2.5 rounded-full"
                  style={{
                    width: `${
                      (userData?.totalCoins / userData?.coinsForNextRank) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          {/* Recent Activity and Available Rewards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Calendar className="mr-2" size={20} />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {userData?.recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-medium">{activity.activity}</p>
                      <p className="text-sm text-gray-500">{activity.date}</p>
                    </div>
                    <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      +{activity.coins} <Trophy size={14} className="ml-1" />
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-blue-600 text-sm font-medium">
                View all activity
              </button>
            </div>

            {/* Available Rewards */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Gift className="mr-2" size={20} />
                Available Rewards
              </h3>
              <div className="space-y-4">
                {userData?.availableRewards.map((reward) => (
                  <div
                    key={reward.id}
                    className="border rounded-lg p-3 hover:bg-gray-50 transition cursor-pointer"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{reward.name}</h4>
                      <div className="flex items-center text-amber-600 font-medium">
                        {reward.cost} <Trophy size={14} className="ml-1" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {reward.description}
                    </p>
                    <button
                      className={`mt-2 text-sm px-3 py-1 rounded ${
                        userData?.totalCoins >= reward.cost
                          ? "bg-slate-600 text-white hover:bg-slate-700"
                          : "bg-gray-300 text-gray-600 cursor-not-allowed"
                      }`}
                      disabled={userData?.totalCoins < reward.cost}
                    >
                      Redeem
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-blue-600 text-sm font-medium">
                View all rewards
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ icon, text, active, onClick }) {
  return (
    <button
      className={`flex items-center w-full px-6 py-3 text-left ${
        active
          ? "bg-slate-700 text-white"
          : "text-blue-200 hover:bg-slate-700 hover:text-white"
      }`}
      onClick={onClick}
    >
      <span className="mr-3">{icon}</span>
      {text}
    </button>
  );
}
