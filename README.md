# GEU Coin

GEU Coin is a **blockchain-based utility token** designed to incentivize and reward students, faculty, and staff at Graphic Era University (GEU). Built on the **Solana blockchain**, GEU Coin enables seamless distribution of tokens for academic achievements, participation in events, and other campus activities.

---

## Features

- **Token Creation**: Create and manage GEU Coin using Solana's SPL Token standard.
- **Wallet Integration**: Connect with Phantom Wallet to view and manage GEU Coin balances.
- **Token Distribution**: Distribute tokens to students, faculty, and staff based on achievements or participation.
- **Reward System**: Redeem tokens for rewards like course discounts, mentorship sessions, or college merchandise.
- **Admin Dashboard**: Monitor transactions and manage token distribution through a centralized admin panel.

---

## Tech Stack

- **Blockchain**: Solana (SPL Token, Web3.js).
- **Frontend**: React.js, Vite, Tailwind CSS.
- **Backend**: Node.js, Express.js.
- **Database**: Firebase Firestore.
- **Wallet Integration**: Phantom Wallet.
- **Authentication**: Firebase Authentication.
- **DevOps**: Docker, GitHub Actions, Vercel/Netlify.

---

## Getting Started

### Prerequisites

- **Node.js**: Install Node.js from [https://nodejs.org](https://nodejs.org).
- **Solana CLI**: Install the Solana CLI from [https://docs.solana.com/cli/install-solana-cli-tools](https://docs.solana.com/cli/install-solana-cli-tools).
- **Phantom Wallet**: Install the Phantom Wallet extension from [https://phantom.app](https://phantom.app).

---

### Installation

1. **Clone the Repository**:
   git clone https://github.com/ayushrana83/GeuCoin.git
   cd GeuCoin
Install Dependencies:

cd frontend
npm install
cd ../backend
npm install
Set Up Firebase:

Create a Firebase project at https://console.firebase.google.com.

Add your Firebase configuration in frontend/src/firebase.js.

Set Up Solana Devnet:

Configure the Solana CLI to use Devnet:
solana config set --url https://api.devnet.solana.com
Airdrop SOL tokens for testing:
solana airdrop 1
Run the Application:
Start the frontend:
cd frontend
npm run dev
Start the backend:
cd backend
npm start
Usage
For Students/Faculty
Connect Wallet: Click the "Connect Wallet" button to connect your Phantom Wallet.

View Balance: Your GEU Coin balance will be displayed on the dashboard.

Redeem Tokens: Use your tokens to redeem rewards like course discounts or mentorship sessions.

For Admins
Log In: Access the admin dashboard using your credentials.

Distribute Tokens: Distribute tokens to users based on achievements or participation.

Monitor Transactions: View all transactions and user balances in real-time.

Future Scope
Decentralized Governance: Introduce a DAO for voting on college decisions using GEU Coins.

NFTs for Achievements: Mint NFTs for academic and extracurricular achievements.

Partnerships: Partner with local businesses to allow token redemption for discounts.

Mobile App: Develop a mobile app for easier access to GEU Coin wallets.

Sustainability Initiatives: Reward tokens for participating in eco-friendly activities.
