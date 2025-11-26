import React from 'react';

const FooterCTA: React.FC = () => {
  return (
    <footer className="w-full" id="footer">
      <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para Dominar la IA?
          </h2>
          <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Únete a miles que ya están emprendiendo con nosotros y transformando sus negocios con tecnología.
          </p>
          <a
            href="https://youtube.com/@tegedigital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-700 px-10 py-4 rounded-full font-bold text-xl shadow-2xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
          >
            Suscribirse al Canal
          </a>
        </div>
      </div>
      
      <div className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} AnaiMedia. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white transition-colors">Términos</a>
             <a href="#" className="hover:text-white transition-colors">Privacidad</a>
             <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;