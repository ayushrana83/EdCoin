import { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, UserPlus, CheckCircle } from 'lucide-react';
import WalletConnect from './WalletConnet';

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [publicKey , setPublicKey] = useState(null);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when field is being edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      console.log(formData);
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1500);
    }
  };

  if (submitted) {
    console.log("public key =" ,publicKey);
    // return (
    //   <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50">
    //     <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
    //       <div className="mx-auto h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
    //         <CheckCircle className="h-6 w-6 text-green-600" />
    //       </div>
    //       <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-slate-900">
    //         Account created!
    //       </h2>
    //       <p className="mt-2 text-slate-600">
    //         Thank you for signing up. We've sent a confirmation email to {formData.email}.
    //       </p>
    //       <button
    //         className="mt-6 w-full py-2 px-4 rounded-md bg-slate-600 text-white hover:bg-slate-700"
    //         onClick={() => window.location.reload()}
    //       >
    //         Back to Sign in
    //       </button>
    //     </div>
    //   </div>
    // );
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="mx-auto h-12 w-12 rounded-full bg-slate-600 flex items-center justify-center">
          <UserPlus className="h-6 w-6 text-white" />
        </div>
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-slate-900">
          Create an account
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <a href="#" className="font-semibold leading-6 text-slate-600 hover:text-slate-500">
            Sign in
          </a>
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-slate-900">
              Full Name
            </label>
            <div className="mt-2 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                value={formData.fullName}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2 pl-10 pr-3 text-slate-900 shadow-sm ring-1 ring-inset ${
                  errors.fullName ? 'ring-red-300' : 'ring-slate-300' 
                } placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6`}
                placeholder="John Doe"
              />
            </div>
            {errors.fullName && (
              <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">
              Email address
            </label>
            <div className="mt-2 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2 pl-10 pr-3 text-slate-900 shadow-sm ring-1 ring-inset ${
                  errors.email ? 'ring-red-300' : 'ring-slate-300' 
                } placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6`}
                placeholder="you@example.com"
              />
            </div>
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-slate-900">
              Password
            </label>
            <div className="mt-2 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2 pl-10 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ${
                  errors.password ? 'ring-red-300' : 'ring-slate-300'
                } placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 
                  <EyeOff className="h-5 w-5 text-slate-400" /> : 
                  <Eye className="h-5 w-5 text-slate-400" />
                }
              </button>
            </div>
            {errors.password && (
              <p className="mt-2 text-sm text-red-600">{errors.password}</p>
            )}
            <p className="mt-2 text-xs text-slate-500">
              Password must be at least 8 characters
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-slate-900">
              Confirm Password
            </label>
            <div className="mt-2 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`block w-full rounded-md border-0 py-2 pl-10 pr-10 text-slate-900 shadow-sm ring-1 ring-inset ${
                  errors.confirmPassword ? 'ring-red-300' : 'ring-slate-300'
                } placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6`}
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? 
                  <EyeOff className="h-5 w-5 text-slate-400" /> : 
                  <Eye className="h-5 w-5 text-slate-400" />
                }
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>
            )}
          </div>

          <div>
            <WalletConnect setKey={setPublicKey}/>
          </div>

          <div>
            <button
            onClick={handleSubmit}
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline  focus-visible:outline-offset-2 focus-visible:outline-slate-600 disabled:opacity-70"
            >
              {loading ? 'Creating account...' : 'Sign up'}
            </button>
          </div>
        </form>

        <div className="mt-10 text-center">
          <p className="text-xs text-slate-500">
            By signing up, you agree to our{' '}
            <a href="#" className="font-medium text-slate-600 hover:text-slate-500">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="font-medium text-slate-600 hover:text-slate-500">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}