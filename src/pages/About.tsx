import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Globe, Users, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>About Ubuntu</SectionTitle>
        
        {/* Introduction with Hero Image */}
        <div className="relative h-96 mb-16 rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1484712401471-05c7215830eb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2340"
            alt="African community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 text-white max-w-3xl">
              <p className="text-2xl font-light mb-4">
                Ubuntu is a profound African concept that emphasizes the interconnectedness of all people 
                and the crucial role of community in fostering individual and collective well-being.
              </p>
            </div>
          </div>
        </div>

        {/* Origins Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-[#2C1810]">Origins & Philosophy</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <p className="text-lg leading-relaxed">
                The word "Ubuntu" originates from several African languages, including Zulu and Xhosa. 
                It embodies the belief that a universal bond of sharing connects all humanity. The phrase 
                "umuntu ngumuntu ngabantu" translates to "a person is a person through other persons."
              </p>
            </div>
            <div className="h-80 relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2532"
                alt="Traditional African wisdom sharing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#8B4513]">
            <Globe className="h-12 w-12 text-[#8B4513] mb-4" />
            <h4 className="text-xl font-semibold mb-4 text-[#2C1810]">
              Interconnection
            </h4>
            <p className="text-gray-700">
              Ubuntu stresses our interdependence, acknowledging that each individual's actions 
              impact the community as a whole. We are all connected, like threads in a tapestry.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#8B4513]">
            <Users className="h-12 w-12 text-[#8B4513] mb-4" />
            <h4 className="text-xl font-semibold mb-4 text-[#2C1810]">
              Community
            </h4>
            <p className="text-gray-700">
              The essence of Ubuntu lies in recognizing that we are part of something greater 
              than ourselves. Our actions and choices affect the collective well-being of our community.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#8B4513]">
            <Heart className="h-12 w-12 text-[#8B4513] mb-4" />
            <h4 className="text-xl font-semibold mb-4 text-[#2C1810]">
              Compassion
            </h4>
            <p className="text-gray-700">
              Ubuntu teaches us to extend compassion and understanding to all. It reminds us that 
              our humanity is inextricably bound up in others' humanity.
            </p>
          </div>
        </div>

        {/* Visual Impact Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 relative">
              <img
                src="https://images.unsplash.com/photo-1488861859915-4b5a5e57649f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2340"
                alt="Community support"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 text-[#2C1810]">Community Impact</h3>
              <p className="text-gray-700">
                Through Ubuntu principles, communities worldwide are discovering new ways to support 
                each other, celebrate diversity, and create lasting positive change.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 relative">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2340"
                alt="Future generations"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 text-[#2C1810]">Future Generations</h3>
              <p className="text-gray-700">
                By embracing Ubuntu philosophy, we create a legacy of compassion, understanding, 
                and interconnectedness for future generations.
              </p>
            </div>
          </div>
        </div>

        {/* Transformative Power */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-[#2C1810]">
            Transformative Power
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Ubuntu's philosophy has the power to transform our world by:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li>Fostering genuine human connections and understanding</li>
            <li>Promoting collective responsibility and mutual support</li>
            <li>Building stronger, more resilient communities</li>
            <li>Encouraging sustainable and ethical decision-making</li>
            <li>Creating a more compassionate and harmonious world</li>
          </ul>
        </div>
      </div>
    </div>
  );
}