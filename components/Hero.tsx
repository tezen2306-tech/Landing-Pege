import React from 'react';
import { Youtube, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 text-white overflow-hidden">
      {/* Abstract Background Shapes (Optional for depth) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Tu socio estratégico en el <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
            crecimiento de tu empresa
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-light text-purple-100 mb-8 max-w-3xl mx-auto">
          Somos el complemento para tu crecimiento exponencial de tu Pyme.
          Hacemos que la IA potencie y agilice tu crecimiento y rentabilidad.
        </h2>

        <p className="text-lg text-purple-100 mb-10 italic max-w-2xl mx-auto">
          "Tutoriales, consejos y herramientas para principiantes."
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://youtube.com/@tegedigital"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105"
          >
            <Youtube size={24} className="text-red-500" />
            Ver Canal de YouTube
          </a>
          <a
            href="#servicios"
            className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            Explorar Servicios
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;