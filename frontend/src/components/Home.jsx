import { useState } from 'react';
import { motion } from 'framer-motion'; // <== NEW
import { Coins, Award, Users, BookOpen, TrendingUp, ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [email, setEmail] = useState('');
  const {user} = "fd";
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest! We'll send updates to ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <Coins className="h-8 w-8 text-slate-600" />
          <span className="text-2xl font-bold text-slate-600">EdCoin</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {['Features', 'How It Works', 'Testimonials', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className="text-sm font-medium hover:text-slate-600 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div>
          {user ? <Link to={"/login"} className="bg-slate-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300">
            Log In
          </Link> : <button to={"/logout"} className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-all duration-300">
            Log Out
          </button>}
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center"
      >
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
        >
          Earn Rewards for <span className="text-slate-600">Academic Excellence</span>
        </motion.h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 mb-12 transition-opacity duration-1000">
          EdCoin transforms your academic achievements into real rewards and opportunities on campus.
        </p>

        <div className="flex sm:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-slate-700 transition flex items-center gap-2"
          >
            <Link to={"/home"}>Get Started</Link>
             <ChevronRight className="h-5 w-5" />
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-slate-600 text-slate-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-slate-100 transition"
          >
            Learn More
          </motion.button>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 relative"
        >
          <div className="bg-white shadow-xl rounded-2xl p-6 max-w-4xl mx-auto">
            <img 
              src="/api/placeholder/800/500" 
              alt="EdCoin Dashboard Preview" 
              className="rounded-lg w-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4"
            >
              Why Choose EdCoin?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Our innovative reward system recognizes and incentivizes academic achievement.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[Award, Coins, TrendingUp, Users, BookOpen, Check].map((Icon, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <div className="bg-slate-100 p-3 rounded-full inline-block mb-4">
                  <Icon className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Feature {idx + 1}</h3>
                <p className="text-gray-600">Some amazing feature description goes here for EdCoin system.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Similarly you can animate How It Works, Testimonials, CTA... */}
    </div>
  );
}
