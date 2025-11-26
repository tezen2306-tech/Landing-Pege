import React from 'react';
import { Brain, Bot, Code, Palette, Zap } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesList: ServiceItem[] = [
  {
    id: 1,
    title: "Tutoriales de IA",
    description: "Aprende a usar ChatGPT, Claude, Midjourney y más herramientas de IA con tutoriales paso a paso para principiantes.",
    icon: Brain
  },
  {
    id: 2,
    title: "Automatización con IA",
    description: "Descubre cómo automatizar tareas repetitivas usando agentes de IA, desde organizar finanzas hasta crear contenido.",
    icon: Bot
  },
  {
    id: 3,
    title: "Programación para Todos",
    description: "Crea tus primeras aplicaciones web sin ser programador. De la idea al deploy en producción.",
    icon: Code
  },
  {
    id: 4,
    title: "Diseño con IA",
    description: "Aprende a crear imágenes, logos y contenido visual profesional usando herramientas de IA generativa.",
    icon: Palette
  },
  {
    id: 5,
    title: "Productividad Digital",
    description: "Optimiza tu trabajo con herramientas de IA para gestión de proyectos, notas inteligentes y organización.",
    icon: Zap
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-green-500 font-semibold uppercase tracking-wider text-sm mb-2">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Potencia tu Pyme con Tecnología
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <service.icon className="text-purple-600 group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;