import React from 'react';
import { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Crea tu Primer Agente de IA en 27 Minutos",
    excerpt: "Tutorial completo para construir un agente que organice tus finanzas automáticamente.",
    date: "Hace 6 días",
    tag: "Tutorial",
    imageUrl: "https://picsum.photos/seed/ai-agent/600/400"
  },
  {
    id: 2,
    title: "ChatGPT vs Gemini: ¿Cuál Elegir en 2025?",
    excerpt: "Comparativa completa de las dos IAs más populares y cuál se adapta mejor a ti.",
    date: "Hace 2 semanas",
    tag: "Comparativo",
    imageUrl: "https://picsum.photos/seed/chat-vs-gemini/600/400"
  },
  {
    id: 3,
    title: "Make.com: Automatiza Sin Código",
    excerpt: "Crea automatizaciones profesionales sin escribir una línea de código.",
    date: "Hace 3 semanas",
    tag: "Herramientas",
    imageUrl: "https://picsum.photos/seed/automation/600/400"
  }
];

const Blog: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-green-500 font-semibold uppercase tracking-wider text-sm mb-2">Nuestro Blog</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Últimas Novedades
            </h3>
          </div>
          <a href="#" className="hidden md:block text-purple-600 font-semibold hover:text-purple-700">
            Ver todos los artículos &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video shadow-md">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-green-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {post.tag}
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="text-sm text-gray-400 mb-2">{post.date}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-600 mb-4 flex-1">
                  {post.excerpt}
                </p>
                <span className="text-purple-600 font-medium text-sm group-hover:underline">
                  Leer artículo
                </span>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="text-purple-600 font-semibold hover:text-purple-700">
            Ver todos los artículos &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};

export default Blog;