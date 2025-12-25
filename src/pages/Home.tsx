import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Brain, MessageSquare, Zap, TrendingUp, ChevronRight, Send, FileText, Database, Users, Clock, Target, Award, CheckCircle, ArrowRight, Shield, Phone, Mail, MapPin, CheckCircle2, BarChart3, Lightbulb, Rocket, Globe, Code2, Heart, Package, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const validateForm = () => {
    const errors = {
      name: '',
      company: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      errors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!formData.company.trim()) {
      errors.company = 'La empresa es requerida';
    }

    if (!formData.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'El email no es válido';
    }

    if (!formData.message.trim()) {
      errors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setFormErrors(errors);
    return Object.values(errors).every(error => error === '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Request failed');
      }
      alert('¡Gracias por tu interés! Te contactaremos pronto.');
      setFormData({ name: '', company: '', email: '', message: '' });
      setFormErrors({ name: '', company: '', email: '', message: '' });
    } catch (error) {
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpiar error cuando el usuario empiece a escribir
    if (formErrors[field as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between relative">
            {/* Logo - Left Side */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <img
                  src="https://res.cloudinary.com/dqbzzlxfq/image/upload/v1760658872/Captura_de_pantalla_2025-10-17_a_las_1.54.12_ezgvrd.png"
                  alt="AI Supera-T"
                  className="h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gold-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Navigation Links - Center */}
            <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <button 
                onClick={() => scrollToSection('servicios')} 
                className="text-gray-700 hover:text-gold-500 transition-all duration-300 font-semibold text-sm uppercase tracking-wide relative group"
              >
                Servicios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('beneficios')} 
                className="text-gray-700 hover:text-gold-500 transition-all duration-300 font-semibold text-sm uppercase tracking-wide relative group"
              >
                Beneficios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('casos')} 
                className="text-gray-700 hover:text-gold-500 transition-all duration-300 font-semibold text-sm uppercase tracking-wide relative group"
              >
                Casos de Éxito
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="text-gray-700 hover:text-gold-500 transition-all duration-300 font-semibold text-sm uppercase tracking-wide relative group"
              >
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            {/* CTA Button - Right Side */}
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-black px-6 lg:px-8 py-3 rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 transform hover:scale-105 font-bold text-sm lg:text-base shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">Comenzar ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-col space-y-4 mt-6 pt-6 border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('servicios')} 
                className="text-gray-700 hover:text-gold-500 transition-colors duration-200 font-semibold text-left py-2"
              >
              Servicios
            </button>
              <button 
                onClick={() => scrollToSection('beneficios')} 
                className="text-gray-700 hover:text-gold-500 transition-colors duration-200 font-semibold text-left py-2"
              >
              Beneficios
            </button>
              <button 
                onClick={() => scrollToSection('casos')} 
                className="text-gray-700 hover:text-gold-500 transition-colors duration-200 font-semibold text-left py-2"
              >
              Casos de Éxito
            </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="text-gray-700 hover:text-gold-500 transition-colors duration-200 font-semibold text-left py-2"
              >
              Contacto
            </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-40 pb-24 px-6 relative overflow-hidden bg-gradient-to-br from-white via-beige-50 to-beige-100">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-black/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-gold-400/5 to-gold-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {/* Badge */}
              <div 
                id="hero-badge"
                data-animate
                className={`inline-flex items-center space-x-2 bg-gold-500/10 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-700 ${
                  visibleElements.has('hero-badge') ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>Líderes en Automatización IA</span>
              </div>

              <h1 
                id="hero-title"
                data-animate
                className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight transition-all duration-700 delay-200 ${
                  visibleElements.has('hero-title') ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              >
                Transforma tu empresa con{' '}
                <span className="text-gold-600">
                  Inteligencia Artificial
                </span>
              </h1>
              
              <p 
                id="hero-description"
                data-animate
                className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl transition-all duration-700 delay-400 ${
                  visibleElements.has('hero-description') ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              >
                Implementamos <strong>Automatizaciones y Agentes de IA</strong> que optimizan tus procesos, 
                reducen costos operativos y trabajan por ti las 24 horas del día.
              </p>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent mb-1 sm:mb-2">80%</div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium leading-tight">Reducción de tareas manuales</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent mb-1 sm:mb-2">24/7</div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium leading-tight">Operación automatizada</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent mb-1 sm:mb-2">3x</div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium leading-tight">Aumento de productividad</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent mb-1 sm:mb-2">95%</div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium leading-tight">Satisfacción del cliente</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollToSection('contacto')}
                  className="group bg-gradient-to-r from-gold-500 to-gold-600 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-gold-400 hover:to-gold-500 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 transform hover:scale-105 font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10">Comenzar Transformación</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <button
                  onClick={() => scrollToSection('casos')}
                  className="group border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:border-gold-500 hover:text-gold-600 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 font-semibold text-base sm:text-lg"
                >
                  <span>Ver Casos de Éxito</span>
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600">Garantía de resultados</span>
                </div>
              </div>
            </div>

            {/* Enhanced Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/20 via-gold-500/10 to-black/10 rounded-3xl blur-3xl transform rotate-3"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="group bg-gradient-to-br from-gold-50 to-gold-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <div className="bg-gold-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-white" />
                  </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">IA Avanzada</h3>
                    <p className="text-sm text-gray-600">Tecnología de última generación</p>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <div className="bg-gray-800 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                  </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Automatización</h3>
                    <p className="text-sm text-gray-600">Procesos optimizados</p>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                      <MessageSquare className="w-6 h-6 text-white" />
                </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Chatbots 24/7</h3>
                    <p className="text-sm text-gray-600">Atención continua</p>
              </div>
                  
                  <div className="group bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                    <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Más Eficiencia</h3>
                    <p className="text-sm text-gray-600">Resultados medibles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gold-500/10 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Rocket className="w-4 h-4" />
              <span>Nuestros Servicios</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Integración Oficial{' '}
              <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
                WhatsApp Business API
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Implementamos soluciones de automatización inteligente utilizando la <strong>API Oficial de WhatsApp Business (Cloud API)</strong>. Desarrollamos chatbots a medida que permiten a las empresas gestionar conversaciones a escala, sin riesgos de bloqueo y cumpliendo estrictamente con las normativas de Meta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Consultoría Estratégica */}
            <div 
              id="service-1"
              data-animate
              className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gold-200 transform hover:-translate-y-2 hover-lift hover-glow ${
                visibleElements.has('service-1') ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.1s' }}
            >
              <div className="h-56 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Lightbulb className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Consultoría Estratégica</h3>
                  <div className="bg-gold-500/10 text-gold-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Premium
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Formamos y acompañamos a tu equipo para que domine la creación de agentes inteligentes 
                  y flujos automatizados, aplicándolos en su propio negocio.
                </p>
                <div className="flex items-center text-gold-600 font-semibold group-hover:text-gold-700 transition-colors duration-300">
                  <span>Saber más</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Agentes IA Atención al Cliente */}
            <div 
              id="service-2"
              data-animate
              className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 hover-lift hover-glow ${
                visibleElements.has('service-2') ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="h-56 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Agentes IA 24/7</h3>
                  <div className="bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Atiende a tus clientes 24/7 con agentes virtuales que responden al instante, 
                  resuelven dudas y convierten conversaciones en ventas.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300">
                  <span>Saber más</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Automatización de Procesos */}
            <div 
              id="service-3"
              data-animate
              className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200 transform hover:-translate-y-2 hover-lift hover-glow ${
                visibleElements.has('service-3') ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="h-56 bg-gradient-to-br from-green-500 via-green-600 to-green-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Automatización</h3>
                  <div className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Eficiencia
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Transformamos la forma en que tu empresa opera mediante automatizaciones diseñadas 
                  para eliminar tareas repetitivas y aumentar la eficiencia.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-300">
                  <span>Saber más</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Automatización de Facturas */}
            <div 
              id="service-4"
              data-animate
              className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2 hover-lift hover-glow ${
                visibleElements.has('service-4') ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="h-56 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Facturas IA</h3>
                  <div className="bg-purple-500/10 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Ahorro
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Digitalizamos y automatizamos el proceso de gestión de facturas, 
                  reduciendo errores y ahorrando tiempo en tareas repetitivas.
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition-colors duration-300">
                  <span>Saber más</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* Agentes RAG */}
            <div 
              id="service-5"
              data-animate
              className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2 hover-lift hover-glow ${
                visibleElements.has('service-5') ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.5s' }}
            >
              <div className="h-56 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Agentes RAG</h3>
                  <div className="bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Inteligente
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Transformamos tu documentación en una base de conocimiento inteligente, 
                  accesible al instante para clientes y empleados.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors duration-300">
                  <span>Saber más</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>

            {/* WhatsApp Chatbots */}
            <div 
              id="service-6"
              data-animate
              className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200 transform hover:-translate-y-2 hover-lift hover-glow ${
                visibleElements.has('service-6') ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.6s' }}
            >
              <div className="h-56 bg-gradient-to-br from-green-500 via-green-600 to-green-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 group-hover:scale-110 transition-transform duration-300">
                    <MessageSquare className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">WhatsApp Chatbots</h3>
                  <div className="bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Chatbots inteligentes para WhatsApp que atienden a tus clientes 24/7, 
                  resuelven consultas y generan leads automáticamente.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700 transition-colors duration-300">
                  <span>Saber más</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Code2 className="w-4 h-4" />
              <span>Tecnologías Avanzadas</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Stack Tecnológico de{' '}
              <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
                Vanguardia
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Utilizamos las tecnologías más avanzadas del mercado para crear soluciones 
              de IA robustas, escalables y de alto rendimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* AI/ML Technologies */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-gold-500/50 transition-all duration-300 hover:bg-white/10">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Inteligencia Artificial</h3>
              <div className="space-y-2">
                <div className="text-gray-300 text-sm">• GPT-4 & Claude</div>
                <div className="text-gray-300 text-sm">• LangChain</div>
                <div className="text-gray-300 text-sm">• OpenAI API</div>
                <div className="text-gray-300 text-sm">• Hugging Face</div>
              </div>
            </div>

            {/* Cloud & Infrastructure */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud & Infraestructura</h3>
              <div className="space-y-2">
                <div className="text-gray-300 text-sm">• AWS & Azure</div>
                <div className="text-gray-300 text-sm">• Docker & Kubernetes</div>
                <div className="text-gray-300 text-sm">• Redis & PostgreSQL</div>
                <div className="text-gray-300 text-sm">• CDN Global</div>
              </div>
            </div>

            {/* Development Tools */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:bg-white/10">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Desarrollo</h3>
              <div className="space-y-2">
                <div className="text-gray-300 text-sm">• Python & Node.js</div>
                <div className="text-gray-300 text-sm">• React & Next.js</div>
                <div className="text-gray-300 text-sm">• FastAPI & Express</div>
                <div className="text-gray-300 text-sm">• TypeScript</div>
              </div>
            </div>

            {/* Integration & APIs */}
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:bg-white/10">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Integración & APIs</h3>
              <div className="space-y-2">
                <div className="text-gray-300 text-sm">• REST & GraphQL</div>
                <div className="text-gray-300 text-sm">• Webhooks</div>
                <div className="text-gray-300 text-sm">• N8N</div>
                <div className="text-gray-300 text-sm">• CRM Integration</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-6 bg-beige-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              ¿Por qué elegir nuestras soluciones de IA?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              No solo implementamos tecnología, creamos ecosistemas inteligentes que se adaptan y evolucionan con tu negocio, garantizando resultados sostenibles a largo plazo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-beige-100 p-8 rounded-2xl border-2 border-beige-200 hover:border-gold-500 transition-all duration-300">
              <div className="bg-gold-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Incrementa tu Productividad</h3>
              <p className="text-gray-700 leading-relaxed">
                Automatiza hasta el 80% de tareas repetitivas y libera tiempo para actividades estratégicas que generen mayor valor.
              </p>
            </div>

            <div className="bg-beige-100 p-8 rounded-2xl border-2 border-beige-200 hover:border-gold-500 transition-all duration-300">
              <div className="bg-gold-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Reduce Errores Humanos</h3>
              <p className="text-gray-700 leading-relaxed">
                Nuestros sistemas de IA eliminan prácticamente los errores manuales, garantizando mayor precisión en tus operaciones.
              </p>
            </div>

            <div className="bg-beige-100 p-8 rounded-2xl border-2 border-beige-200 hover:border-gold-500 transition-all duration-300">
              <div className="bg-gold-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Disponibilidad 24/7</h3>
              <p className="text-gray-700 leading-relaxed">
                Tus procesos automatizados funcionan sin descanso, proporcionando servicio continuo a tus clientes y optimizando recursos.
              </p>
            </div>

            <div className="bg-beige-100 p-8 rounded-2xl border-2 border-beige-200 hover:border-gold-500 transition-all duration-300">
              <div className="bg-gold-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">ROI Comprobado</h3>
              <p className="text-gray-700 leading-relaxed">
                Nuestros clientes alcanzan mejoras visibles desde el inicio, convirtiendo cada inversión en valor sostenible para su negocio.
              </p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gold-500 rounded-full p-2 mt-1">
                  <CheckCircle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">Expertos en Automatización</h4>
                  <p className="text-gray-700">Líderes en Automatizaciones IA en Habla Hispana con años de experiencia transformando negocios.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gold-500 rounded-full p-2 mt-1">
                  <CheckCircle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">Integraciones a Medida</h4>
                  <p className="text-gray-700">Conectamos nuestras soluciones con tus herramientas existentes para una operación sin fricciones.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-gold-500 rounded-full p-2 mt-1">
                  <CheckCircle className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-2">Soporte Continuo</h4>
                  <p className="text-gray-700">Acompañamiento permanente para garantizar el éxito de tu transformación digital.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-black to-gray-800 p-12 rounded-3xl text-center">
              <Award className="w-20 h-20 text-gold-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-beige-50 mb-4">
                Haz Crecer tu Negocio Ahora Mismo
              </h3>
              <p className="text-beige-200 mb-8 text-lg">
                Descubre cómo nuestras soluciones inteligentes optimizan tu operativa y te permiten enfocarte en lo que realmente impulsa tu empresa.
              </p>
              <button
                onClick={() => scrollToSection('contacto')}
                className="bg-gold-500 text-black px-8 py-4 rounded-lg hover:bg-gold-400 transition-all duration-300 transform hover:scale-105 font-bold"
              >
                SOLICITA NUESTROS SERVICIOS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="casos" className="py-24 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              <span>Casos de Éxito</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Casos de{' '}
              <span className="bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
                Éxito Real
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Empresas de diferentes sectores han transformado sus operaciones con nuestras 
              soluciones de IA, obteniendo resultados medibles y sostenibles.
            </p>
          </div>

          {/* Casos de Éxito Real - Grid de 2 tarjetas */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Tarjeta 1: Sector Salud y Fitness */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-gold-500/50 transition-all duration-300 hover:bg-white/10">
              <div className="flex items-start justify-between mb-6">
                <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-400 px-4 py-2 rounded-full text-sm font-semibold">
                  <Heart className="w-4 h-4" />
                  <span>Sector Salud y Fitness</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Centro de Entrenamiento Supera-T
                  </h3>
                  <a 
                    href="https://supera-t.es" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors text-sm lg:text-base mb-4 group"
                  >
                    <span>supera-t.es</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-start space-x-2 mb-2">
                      <div className="bg-blue-500/20 rounded-full p-1 mt-1">
                        <Target className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">El Reto</h4>
                        <p className="text-gray-300 leading-relaxed">
                          La gestión manual de citas y dudas repetitivas saturaba la recepción.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start space-x-2 mb-2">
                      <div className="bg-green-500/20 rounded-full p-1 mt-1">
                        <Lightbulb className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">La Solución</h4>
                        <p className="text-gray-300 leading-relaxed">
                          Implementación de un Asistente IA vía WhatsApp Business API.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start space-x-2 mb-2">
                      <div className="bg-gold-500/20 rounded-full p-1 mt-1">
                        <CheckCircle className="w-4 h-4 text-gold-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">Resultado</h4>
                        <p className="text-gray-300 leading-relaxed">
                          Automatización de reservas y atención al cliente 24/7, permitiendo al staff enfocarse en el entrenamiento presencial.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tarjeta 2: Sector Logística y Mudanzas */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 hover:border-gold-500/50 transition-all duration-300 hover:bg-white/10">
              <div className="flex items-start justify-between mb-6">
                <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">
                  <Package className="w-4 h-4" />
                  <span>Sector Logística y Mudanzas</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Mudanzas Cañadas
                  </h3>
                  <a 
                    href="https://mudanzascanadas.es/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors text-sm lg:text-base mb-4 group"
                  >
                    <span>mudanzascanadas.es</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-start space-x-2 mb-2">
                      <div className="bg-blue-500/20 rounded-full p-1 mt-1">
                        <Target className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">El Reto</h4>
                        <p className="text-gray-300 leading-relaxed">
                          Alto volumen de consultas sobre presupuestos y logística.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start space-x-2 mb-2">
                      <div className="bg-green-500/20 rounded-full p-1 mt-1">
                        <Lightbulb className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">La Solución</h4>
                        <p className="text-gray-300 leading-relaxed">
                          Chatbot de atención al cliente integrado en su flujo de ventas.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start space-x-2 mb-2">
                      <div className="bg-gold-500/20 rounded-full p-1 mt-1">
                        <CheckCircle className="w-4 h-4 text-gold-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1">Resultado</h4>
                        <p className="text-gray-300 leading-relaxed">
                          Optimización de la atención al cliente, filtrado automático de solicitudes y respuesta inmediata a dudas frecuentes sobre traslados.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gold-500/10 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Contacto</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              ¿Listo para{' '}
              <span className="text-gold-600">
                Transformar
              </span>{' '}
              tu Negocio?
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Solicita una asesoría gratuita y descubre cómo nuestras soluciones de IA 
              pueden revolucionar tu empresa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">
                  Hablemos de tu Proyecto
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 lg:mb-8">
                  Nuestro equipo de expertos está listo para analizar tus necesidades 
                  y diseñar una solución personalizada que impulse tu negocio.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-500/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">ai@supera-t.es</p>
                    <p className="text-sm text-gray-500">Respuesta en 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gold-500/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Ubicación</h4>
                    <p className="text-gray-600">Av. de la Fuente, 36, 18210 Peligros, Granada, 18210 Peligros</p>
                    <p className="text-sm text-gray-500">Consultas presenciales disponibles</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-r from-gold-50 to-gold-100 p-6 rounded-2xl border border-gold-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Asesoría gratuita sin compromiso</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Soporte técnico 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Garantía de resultados</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Nombre completo *
                    </label>
                <input
                  type="text"
                  value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                        formErrors.name 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-200 focus:border-gold-500'
                      }`}
                  placeholder="Tu nombre completo"
                />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
              </div>
                  
              <div>
                    <label className="block text-gray-900 font-semibold mb-2">
                      Empresa *
                    </label>
                <input
                  type="text"
                  value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                        formErrors.company 
                          ? 'border-red-300 focus:border-red-500' 
                          : 'border-gray-200 focus:border-gold-500'
                      }`}
                  placeholder="Nombre de tu empresa"
                />
                    {formErrors.company && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.company}</p>
                    )}
              </div>
            </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Correo electrónico *
                  </label>
              <input
                type="email"
                value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                      formErrors.email 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-gold-500'
                    }`}
                placeholder="tu@email.com"
              />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                  )}
            </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">
                    Mensaje *
                  </label>
              <textarea
                value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                rows={5}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none resize-none ${
                      formErrors.message 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-gold-500'
                    }`}
                placeholder="Cuéntanos sobre tu proyecto y cómo podemos ayudarte..."
              />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}
            </div>

            <button
              type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-gold-500 to-gold-600 text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Solicitar Asesoría Gratuita</span>
              <Send className="w-5 h-5" />
                    </>
                  )}
            </button>

                <p className="text-sm text-gray-500 text-center">
                  Al enviar este formulario, aceptas nuestra{' '}
                  <Link to="/privacidad" className="text-gold-600 hover:text-gold-700 font-semibold">
                    política de privacidad
                  </Link>
                  .
                </p>
          </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
