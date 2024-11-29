import React from 'react';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import { Users, Heart, Handshake } from 'lucide-react';

export function Home() {
  return (
    <div className="bg-orange-50">
      <Hero />
      
      <Layout className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          The Essence of Ubuntu
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card icon={Users} title="Interconnection">
            Ubuntu stresses our interdependence, acknowledging that each individual's actions
            impact the community as a whole. We are all connected, like threads in a tapestry.
          </Card>
          
          <Card icon={Heart} title="Compassion">
            At the heart of Ubuntu lies deep compassion for others. We recognize our shared
            humanity and treat each person with dignity and respect.
          </Card>
          
          <Card icon={Handshake} title="Solidarity">
            Solidarity is paramount in Ubuntu, promoting cooperation and mutual support in
            times of need. We build stronger communities together.
          </Card>
        </div>
      </Layout>
    </div>
  );
}