import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 lg:mb-6">
              <img
                src="https://res.cloudinary.com/dqbzzlxfq/image/upload/v1760658872/Captura_de_pantalla_2025-10-17_a_las_1.54.12_ezgvrd.png"
                alt="AI Supera-T"
                className="h-12 sm:h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 lg:mb-6">
              Líderes en automatización e inteligencia artificial para empresas. 
              Transformamos tu negocio con tecnología de vanguardia.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-gold-500/20 p-3 rounded-xl transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-gold-400" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gold-500/20 p-3 rounded-xl transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-gold-400" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-gold-500/20 p-3 rounded-xl transition-all duration-300 group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-gold-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Servicios</h3>
            <div className="space-y-4">
              <a href="#servicios" className="block text-gray-300 hover:text-gold-400 transition-colors duration-200 group">
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  Consultoría Estratégica
                </span>
              </a>
              <a href="#servicios" className="block text-gray-300 hover:text-gold-400 transition-colors duration-200 group">
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  Agentes IA 24/7
                </span>
              </a>
              <a href="#servicios" className="block text-gray-300 hover:text-gold-400 transition-colors duration-200 group">
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  Automatización de Procesos
                </span>
              </a>
              <a href="#servicios" className="block text-gray-300 hover:text-gold-400 transition-colors duration-200 group">
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  Facturas IA
                </span>
              </a>
              <a href="#servicios" className="block text-gray-300 hover:text-gold-400 transition-colors duration-200 group">
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  Agentes RAG
                </span>
              </a>
              <a href="#servicios" className="block text-gray-300 hover:text-gold-400 transition-colors duration-200 group">
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  WhatsApp Chatbots
                </span>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold-400 mt-1" />
                <div>
                  <p className="text-gray-300">ai@supera-t.es</p>
                  <p className="text-sm text-gray-500">Respuesta en 24h</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1" />
                <div>
                  <p className="text-gray-300">Palma de Mallorca, España</p>
                  <p className="text-sm text-gray-500">Consultas presenciales</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal & Resources */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Recursos</h3>
            <div className="space-y-4">
              <a href="#" className="block text-gray-300 hover:text-gold-400 transition-colors duration-200 group">
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  Blog
                </span>
              </a>
              <a href="#" className="block text-gray-300 hover:text-gold-400 transition-colors duration-200 group">
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  Casos de Éxito
                </span>
              </a>
              <a href="#" className="block text-gray-300 hover:text-gold-400 transition-colors duration-200 group">
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  Documentación
                </span>
              </a>
              <a href="#" className="block text-gray-300 hover:text-gold-400 transition-colors duration-200 group">
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  Soporte Técnico
                </span>
              </a>
              <a href="#" className="block text-gray-300 hover:text-gold-400 transition-colors duration-200 group">
                <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                  API Reference
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8 lg:mb-12 border border-white/10">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 lg:mb-4">
                Mantente al día con las últimas novedades
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Recibe insights exclusivos sobre IA, automatización y las últimas tendencias tecnológicas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-500 transition-colors duration-200 text-sm sm:text-base"
              />
              <button className="bg-gradient-to-r from-gold-500 to-gold-600 text-black px-6 py-3 rounded-xl font-semibold hover:from-gold-400 hover:to-gold-500 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-6 lg:pt-8">
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <p className="text-gray-400 text-sm sm:text-base">
                &copy; 2025 AI Supera-T. Todos los derechos reservados.
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Transformando el futuro empresarial con inteligencia artificial.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 sm:gap-6 justify-start sm:justify-end">
              <Link to="/terminos" className="text-gray-400 hover:text-gold-400 transition-colors duration-200 text-xs sm:text-sm">
                Términos del Servicio
              </Link>
              <Link to="/privacidad" className="text-gray-400 hover:text-gold-400 transition-colors duration-200 text-xs sm:text-sm">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

