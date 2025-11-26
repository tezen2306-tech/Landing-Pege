import React from 'react';
import { Users, Video, Gift } from 'lucide-react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { id: 1, value: "7.9K+", label: "Suscriptores", icon: Users },
  { id: 2, value: "33+", label: "Videos Educativos", icon: Video },
  { id: 3, value: "100%", label: "Contenido Gratuito", icon: Gift },
];

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-green-500 font-semibold uppercase tracking-wider text-sm mb-2">Sobre Nosotros</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quiénes Somos
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              En AnaiMedia creemos que la tecnología debe ser para todos. Creamos contenido para ayudar a tu empresa a comunicar mejor apoyándonos con la <span className="font-semibold text-purple-600">Inteligencia Artificial</span>, automatización y herramientas digitales.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div 
                key={stat.id} 
                className={`p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${stat.id === 3 ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <stat.icon className="text-green-500" size={32} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;