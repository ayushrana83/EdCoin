import React, { useState, useEffect } from "react";
import Back from "../assets/Back.svg";
import { useNavigate } from "react-router-dom";

// --- Mock Data --- (Replace with API data later) ---
const rewardsData = [
  {
    id: 1,
    name: "Free Coffee Voucher",
    description: "Get a voucher for one free coffee at participating cafes.",
    cost: 50,
    imageUrl: "src/assets/coffeeCup.avif",
    category: "Vouchers",
  },
  {
    id: 2,
    name: "Online Course Discount (10%)",
    description: "10% off your next online course purchase on Platform X.",
    cost: 100,
    imageUrl: "src/assets/onlineCourse.avif",
    category: "Education",
  },
  {
    id: 3,
    name: "EdCoin T-Shirt",
    description: "Exclusive EdCoin branded t-shirt (select size).",
    cost: 250,
    imageUrl: "src/assets/edcoinTshirt.avif",
    category: "Merchandise",
  },
  {
    id: 4,
    name: "$5 Donation to Charity",
    description: "We'll donate $5 to a selected educational charity.",
    cost: 75,
    imageUrl: "src/assets/donation.avif",
    category: "Charity",
  },
  {
    id: 5,
    name: "Premium Content Access (1 Month)",
    description: "Unlock premium articles and tutorials for one month.",
    cost: 150,
    imageUrl: "src/assets/premiumCourse.avif",
    category: "Access",
  },
  {
    id: 6,
    name: "Laptop Sticker Pack",
    description: "Cool stickers for your laptop featuring EdCoin designs.",
    cost: 30,
    imageUrl: "src/assets/laptopSticker.avif",
    category: "Merchandise",
  },
];
// --- End Mock Data ---

const RewardsPage = () => {
  // State to hold the user's coin balance (fetch this from your backend)
  const [userCoins, setUserCoins] = useState(185); // Example balance
  const [rewards, setRewards] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling
  const navigate = useNavigate();

  // Simulate fetching data on component mount
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    // --- Simulate API Call ---
    const fetchRewardsData = async () => {
      try {
        // Replace with your actual API calls:
        // const coinsResponse = await fetch('/api/user/coins');
        // const coinsData = await coinsResponse.json();
        // setUserCoins(coinsData.coins);

        // const rewardsResponse = await fetch('/api/rewards');
        // const rewardsApiData = await rewardsResponse.json();
        // setRewards(rewardsApiData);

        // Simulate delay for demo
        await new Promise((resolve) => setTimeout(resolve, 700));

        // Use mock data for now
        setRewards(rewardsData);
        // setUserCoins(185); // Set initial coins if not fetched

        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching rewards data:", err);
        setError("Could not load rewards. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchRewardsData();
  }, []); // Empty dependency array means this runs once on mount

  const handleRedeem = (reward) => {
    // transferEdCoin();
    if (userCoins >= reward.cost) {
      console.log(
        `Attempting to redeem: ${reward.name} for ${reward.cost} EdCoins`
      );
      // --- Add Your Backend Redemption Logic Here ---
      // 1. Show confirmation modal (optional but recommended)
      // 2. Make API call: POST /api/rewards/redeem { rewardId: reward.id }
      // 3. Handle success:
      //    - Show success message (e.g., using a toast notification library)
      //    - Update userCoins state with the new balance from API response
      //    - Maybe update reward availability if it's a limited item
      // 4. Handle error:
      //    - Show error message to the user

      // Example: Optimistic UI update (update locally first, then confirm with backend)
      setUserCoins((prevCoins) => prevCoins - reward.cost);
      alert(
        `Successfully redeemed ${reward.name}! Your new balance is ${
          userCoins - reward.cost
        } EdCoins.`
      ); // Replace with better UI feedback
    } else {
      alert("You don't have enough EdCoins to redeem this reward.");
    }
  };

  // --- Render Logic ---

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-8rem)] bg-white text-slate-600">
        {" "}
        {/* Adjust min-height based on nav/footer */}
        <svg
          className="animate-spin h-8 w-8 text-slate-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span className="ml-3">Loading Rewards...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-8rem)] bg-white text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans pt-20 pb-16">
      {" "}
      {/* Adjust pt-20 if you have a fixed navbar */}
      <div className="ml-10 m-3 ">
        <img
          onClick={() => navigate(-1)}
          className="h-10 w-10 hover:scale-105 hover:bg-slate-400 bg-slate-600 text-white rounded-full px-2 py-2  "
          src={Back}
          alt=""
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Coin Balance */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-down">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Redeem Your EdCoins
          </h1>
          <p className="text-lg text-slate-600">
            You currently have{" "}
            <span className="font-semibold text-slate-800">{userCoins}</span>
            {/* Optional: Coin Icon */}
            {/* <FaCoins className="inline-block ml-1 text-yellow-500 relative -top-px" /> */}
            <span className="font-semibold text-slate-500"> EdCoins</span>.
          </p>
        </div>

        {/* Rewards Grid */}
        {rewards.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {rewards.map((reward, index) => {
              const canAfford = userCoins >= reward.cost;
              return (
                <div
                  key={reward.id}
                  // Add staggered fade-in animation using inline style
                  className="bg-slate-50 border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col transition duration-300 ease-in-out hover:shadow-md animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }} // Stagger animation
                >
                  {/* Reward Image */}
                  <div className="aspect-w-16 aspect-h-9 w-full">
                    {" "}
                    {/* Fixed aspect ratio for all images */}
                    <img
                      src={reward.imageUrl}
                      alt={reward.name}
                      className="object-cover w-full h-52  rounded" // Added rounded corners
                    />
                  </div>

                  {/* Reward Details */}
                  <div className="p-4 flex flex-col flex-grow">
                    <h3
                      className="text-lg font-semibold text-slate-800 mb-1 truncate"
                      title={reward.name}
                    >
                      {reward.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3 flex-grow">
                      {reward.description}
                    </p>

                    {/* Cost and Redeem Button */}
                    <div className="flex justify-between items-center mt-auto pt-3 border-t border-slate-200">
                      <div className="flex items-center">
                        {/* Optional: Coin Icon */}
                        {/* <FaCoins className="text-yellow-500 mr-1" /> */}
                        <span className="font-bold text-slate-700">
                          {reward.cost}
                        </span>
                        <span className="text-xs text-slate-500 ml-1">
                          Coins
                        </span>
                      </div>
                      <button
                        onClick={() => handleRedeem(reward)}
                        disabled={!canAfford}
                        className={`px-4 py-1.5 text-sm font-medium rounded-md transition duration-200 ease-in-out
                          ${
                            canAfford
                              ? "bg-slate-600 text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
                              : "bg-slate-300 text-slate-500 cursor-not-allowed"
                          }`}
                      >
                        {canAfford ? "Redeem" : "More Coins Needed"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-slate-500">
            No rewards available at the moment. Check back soon!
          </div>
        )}
      </div>{" "}
      {/* End max-w container */}
    </div> // End main div
  );
};

export default RewardsPage;
