import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { Users, LogOut } from 'lucide-react';

export function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-[#E65100] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Users className="h-8 w-8" />
            <span className="font-bold text-xl">Ubuntu Humanized</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-orange-200">Home</Link>
            <Link to="/about" className="hover:text-orange-200">About</Link>
            <Link to="/community" className="hover:text-orange-200">Community</Link>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="flex items-center space-x-1 bg-black hover:bg-gray-900 px-4 py-2 rounded-md"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 bg-black hover:bg-gray-900 px-6 py-2 rounded-md font-semibold"
              >
                <span>Join Us</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
