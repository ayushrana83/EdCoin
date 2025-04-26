import { useState, useEffect } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const WalletConnect = ({setKey}) => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);

  const helper = (e) => {
    e.preventDefault();
    walletOptions;
  }

  const helper2 = (e , caller) => {
    e.preventDefault();
    caller();
  }

  const walletOptions = [
    {
      name: "Phantom",
      icon: "🟣",
      connect: async () => {
        if (window.solana) {
          try {
            const response = await window.solana.connect();
            setWalletAddress(response.publicKey.toString());
            setShowOptions(false);
            setSelectedWallet("Phantom");
            console.log("wallet =" ,walletAddress);
            console.log("response ==" , response.publicKey.toString());
            console.log(walletAddress);
          } catch (err) {
            console.error("Phantom wallet connection failed", err);
          }
        } else {
          window.open("https://phantom.app/", "_blank");
        }
      }
    },
    {
      name: "Brave",
      icon: "🦁",
      connect: async () => {
        if (window.solflare) {
          try {
            const response = await window.solflare.connect();
            setWalletAddress(response.publicKey.toString());
            setShowOptions(false);
            setSelectedWallet("Brave");
          } catch (err) {
            console.error("Brave wallet connection failed", err);
          }
        } else {
          alert("Please enable Solana in Brave browser settings.");
        }
      }
    },
    {
      name: "Backpack",
      icon: "🎒",
      connect: async () => {
        if (window.backpack) {
          try {
            const response = await window.backpack.connect();
            setWalletAddress(response.publicKey.toString());
            setShowOptions(false);
            setSelectedWallet("Backpack");
          } catch (err) {
            console.error("Backpack wallet connection failed", err);
          }
        } else {
          window.open("https://www.backpack.app/", "_blank");
        }
      }
    },
    {
      name: "Solflare",
      icon: "🔆",
      connect: async () => {
        if (window.solflare) {
          try {
            const response = await window.solflare.connect();
            setWalletAddress(response.publicKey.toString());
            setShowOptions(false);
            setSelectedWallet("Solflare");
          } catch (err) {
            console.error("Solflare wallet connection failed", err);
          }
        } else {
          window.open("https://solflare.com/", "_blank");
        }
      }
    }
  ];

  useEffect(()=>{
    setKey(walletAddress);
    console.log(walletAddress);
  },[walletAddress])

  // Function to toggle wallet options
  const toggleWalletOptions = (e) => {
    e.preventDefault();
    setShowOptions(!showOptions);
  };

  // Function to disconnect wallet
  const disconnectWallet = (e) => {
    e.preventDefault();
    if (window.solana && selectedWallet === "Phantom") {
      window.solana.disconnect();
    } else if (window.solflare && (selectedWallet === "Solflare" || selectedWallet === "Brave")) {
      window.solflare.disconnect();
    } else if (window.backpack && selectedWallet === "Backpack") {
      window.backpack.disconnect();
    }
    setWalletAddress(null);
    setSelectedWallet(null);
  };

  // Function to format wallet address for display
  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="relative">
      {walletAddress ? (
        <div>
          <button onClick={(e) => disconnectWallet(e)} className="flex items-center rounded  text-white px-4 py-2 bg-green-400 text-left hover:bg-green-200 transition-colors">Wallet Connected</button>
        </div>
      ) : (
        <div className="relative">
          <button 
            onClick={(e) => toggleWalletOptions(e)} 
            className="bg-slate-500 hover:bg-slate-600 text-white px-4 py-2 rounded flex items-center transition-colors"
          >
            Connect Wallet
          </button>
          
          {showOptions && (
            <div className="absolute mt-2 w-64 bg-white rounded-md shadow-lg z-10 overflow-hidden">
              <div className="py-2">
                <h3 className="px-4 py-2 text-sm font-medium text-gray-700 border-b">
                  Select Wallet
                </h3>
                {walletOptions.map((wallet, index) => (
                  <button
                    key={index}
                    onClick={(e) => helper2(e , wallet.connect)}
                    className="flex items-center w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-xl mr-3">{wallet.icon}</span>
                    <span className="font-medium">{wallet.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WalletConnect;