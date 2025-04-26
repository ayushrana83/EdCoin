import { useState } from 'react';
import { Coins, Award, Users, BookOpen, TrendingUp, ChevronRight, Check } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest! We'll send updates to ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-800">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Coins className="h-8 w-8 text-slate-600" />
          <span className="text-2xl font-bold text-slate-600">EdCoin</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium hover:text-slate-600">Features</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-slate-600">How It Works</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-slate-600">Testimonials</a>
          <a href="#faq" className="text-sm font-medium hover:text-slate-600">FAQ</a>
        </div>
        <div>
          <button className="bg-slate-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-700 transition">Log In</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Earn Rewards for <span className="text-slate-600">Academic Excellence</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 mb-12">
          EdCoin transforms your academic achievements into real rewards and opportunities on campus.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-slate-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-slate-700 transition flex items-center justify-center gap-2">
            Get Started <ChevronRight className="h-5 w-5" />
          </button>
          <button className="border border-slate-600 text-slate-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-slate-50 transition">
            Learn More
          </button>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-white shadow-xl rounded-2xl p-6 max-w-4xl mx-auto">
            <img 
              src="/api/placeholder/800/500" 
              alt="EdCoin Dashboard Preview" 
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose EdCoin?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our innovative reward system recognizes and incentivizes academic achievement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-slate-100 p-3 rounded-full inline-block mb-4">
                <Award className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Achievement Recognition</h3>
              <p className="text-gray-600">Earn tokens for academic excellence, class participation, and extracurricular leadership.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-slate-100 p-3 rounded-full inline-block mb-4">
                <Coins className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real Rewards</h3>
              <p className="text-gray-600">Redeem EdCoins for campus services, bookstore discounts, and exclusive opportunities.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-slate-100 p-3 rounded-full inline-block mb-4">
                <TrendingUp className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Track Progress</h3>
              <p className="text-gray-600">Monitor your academic journey with our intuitive dashboard and set achievement goals.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-slate-100 p-3 rounded-full inline-block mb-4">
                <Users className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Building</h3>
              <p className="text-gray-600">Connect with peers, collaborate on projects, and build a network of achievers.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-slate-100 p-3 rounded-full inline-block mb-4">
                <BookOpen className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Learning Resources</h3>
              <p className="text-gray-600">Unlock premium study materials and tutorials by earning and spending EdCoins.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-slate-100 p-3 rounded-full inline-block mb-4">
                <Check className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Resume Enhancement</h3>
              <p className="text-gray-600">Showcase your EdCoin achievements as verified credentials on your resume.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How EdCoin Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple process to reward your academic achievements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-slate-600 text-white text-2xl font-bold h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold mb-2">Earn Points</h3>
              <p className="text-gray-600">Complete courses, participate in class, attend events, and excel in your academics to earn EdCoins.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-600 text-white text-2xl font-bold h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold mb-2">Track Progress</h3>
              <p className="text-gray-600">Monitor your EdCoin balance and achievements through our easy-to-use mobile app or web portal.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-slate-600 text-white text-2xl font-bold h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold mb-2">Redeem Rewards</h3>
              <p className="text-gray-600">Exchange your EdCoins for campus perks, services, discounts, and exclusive opportunities.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Students Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from students who have already benefited from the EdCoin system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 mb-4">
                "EdCoin motivated me to attend every class and participate more actively. I've redeemed my points for campus cafe credits and a premium parking spot!"
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 h-12 w-12 rounded-full flex items-center justify-center">
                  <span className="font-bold text-slate-600">JD</span>
                </div>
                <div>
                  <p className="font-bold">Jamie Davis</p>
                  <p className="text-sm text-gray-500">Computer Science, Junior</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 mb-4">
                "The EdCoin system helped me stay focused on my academic goals. I love how it gamifies learning while offering real benefits on campus."
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 h-12 w-12 rounded-full flex items-center justify-center">
                  <span className="font-bold text-slate-600">MP</span>
                </div>
                <div>
                  <p className="font-bold">Maria Patel</p>
                  <p className="text-sm text-gray-500">Business, Senior</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 mb-4">
                "As a freshman, EdCoin helped me engage with campus activities and meet academic standards. The rewards are actually useful and motivating!"
              </p>
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 h-12 w-12 rounded-full flex items-center justify-center">
                  <span className="font-bold text-slate-600">TW</span>
                </div>
                <div>
                  <p className="font-bold">Tyler Wilson</p>
                  <p className="text-sm text-gray-500">Engineering, Freshman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of students already benefiting from the EdCoin reward system.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
            <button 
              type="submit"
              className="bg-slate-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition whitespace-nowrap"
            >
              Get Early Access
            </button>
          </form>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about the EdCoin system
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">How do I earn EdCoins?</h3>
              <p className="text-gray-600">
                EdCoins are earned through academic achievements, class attendance, participation in campus events, 
                completing assignments on time, and excelling in exams and projects.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">What can I redeem EdCoins for?</h3>
              <p className="text-gray-600">
                EdCoins can be redeemed for campus services, bookstore discounts, priority registration, 
                premium study spaces, parking permits, dining credits, and more.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">How do I track my EdCoin balance?</h3>
              <p className="text-gray-600">
                You can track your EdCoin balance through our mobile app or web portal. Your profile shows 
                your current balance, transaction history, and available rewards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-2">Do EdCoins expire?</h3>
              <p className="text-gray-600">
                EdCoins are valid throughout your time at the college. However, they must be used before graduation 
                as they cannot be transferred or redeemed after you leave the institution.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coins className="h-6 w-6 text-slate-400" />
                <span className="text-xl font-bold text-white">EdCoin</span>
              </div>
              <p className="text-gray-400">
                Rewarding academic excellence and campus engagement.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <p className="text-gray-400 mb-4">
                Stay updated with the latest EdCoin news and features.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 EdCoin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}