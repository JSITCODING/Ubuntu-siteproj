import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Heart } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import { WelcomeMessage } from '../components/WelcomeMessage';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuthStore();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    setShowWelcome(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-orange-50 flex">
      {/* Left side - Image and message */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="African community celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-white max-w-md p-8">
            <h2 className="text-4xl font-bold mb-4">Join Our Ubuntu Family</h2>
            <p className="text-lg">
              "Ubuntu ngumuntu ngabantu" - A person is a person through other persons.
              Become part of a community that celebrates African wisdom and shared humanity.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center">
            <Heart className="mx-auto h-12 w-12 text-[#E65100]" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              {isLogin ? 'Welcome Back to Ubuntu' : 'Begin Your Ubuntu Journey'}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin ? 'Rejoin your community' : 'Start your journey of connection and growth'}
            </p>
          </div>

          <div className="mt-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E65100] focus:ring-[#E65100]"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#E65100] focus:ring-[#E65100]"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E65100] hover:bg-[#F57C00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E65100] transition-colors duration-200"
                >
                  {isLogin ? 'Sign in to Ubuntu' : 'Join Ubuntu Community'}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="w-full text-center text-sm text-[#E65100] hover:text-[#F57C00]"
              >
                {isLogin 
                  ? 'New to Ubuntu? Start your journey' 
                  : 'Already part of Ubuntu? Welcome back'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showWelcome && <WelcomeMessage />}
    </div>
  );
}