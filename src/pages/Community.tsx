import React from 'react';
import { Layout } from '../components/Layout';
import { SectionTitle } from '../components/SectionTitle';
import { Calendar, Users, MessageCircle, Globe, Target, Lightbulb } from 'lucide-react';
import { colors } from '../constants/colors';

export function Community() {
  const events = [
    {
      title: "Monthly Ubuntu Circle",
      date: "Last Sunday of every month",
      description: "Join our community gathering where we share stories, wisdom, and experiences.",
    },
    {
      title: "Youth Mentorship Program",
      date: "Every Wednesday",
      description: "Connect young minds with experienced mentors to foster growth and understanding.",
    },
    {
      title: "Community Service Day",
      date: "First Saturday monthly",
      description: "Come together to support local initiatives and make a difference in our community.",
    }
  ];

  return (
    <div className="bg-orange-50 min-h-screen py-16">
      <Layout>
        <SectionTitle>Our Vibrant Community</SectionTitle>

        {/* Community Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-[#8B4513]" />
            <div className="text-4xl font-bold text-[#8B4513]">1,200+</div>
            <div className="text-gray-600 mt-2">Active Members</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <Globe className="h-12 w-12 mx-auto mb-4 text-[#8B4513]" />
            <div className="text-4xl font-bold text-[#8B4513]">25</div>
            <div className="text-gray-600 mt-2">Countries Represented</div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-[#8B4513]" />
            <div className="text-4xl font-bold text-[#8B4513]">50+</div>
            <div className="text-gray-600 mt-2">Monthly Events</div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-[#2C1810]">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <Calendar className="h-8 w-8 text-[#8B4513] mb-4" />
                  <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
                  <p className="text-[#D4A017] font-medium mb-2">{event.date}</p>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Plans */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-8 text-[#2C1810]">Our Vision for the Future</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Target className="h-12 w-12 text-[#8B4513] mb-4" />
              <h4 className="text-xl font-semibold mb-4">2024-2025 Goals</h4>
              <ul className="space-y-3 text-gray-600">
                <li>• Establish Ubuntu learning centers in 5 new countries</li>
                <li>• Launch digital mentorship platform</li>
                <li>• Create scholarship program for underprivileged youth</li>
                <li>• Develop Ubuntu leadership certification program</li>
              </ul>
            </div>
            <div>
              <Lightbulb className="h-12 w-12 text-[#8B4513] mb-4" />
              <h4 className="text-xl font-semibold mb-4">Long-term Vision</h4>
              <ul className="space-y-3 text-gray-600">
                <li>• Global Ubuntu festival celebrating cultural diversity</li>
                <li>• Research center for African philosophy and wisdom</li>
                <li>• International youth exchange programs</li>
                <li>• Ubuntu principles integration in education systems</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}