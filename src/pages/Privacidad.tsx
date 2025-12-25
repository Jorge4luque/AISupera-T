import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacidad() {
  const fechaHoy = new Date().toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Header Simple */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Volver al inicio</span>
            </Link>
            <img
              src="https://res.cloudinary.com/dqbzzlxfq/image/upload/v1760658872/Captura_de_pantalla_2025-10-17_a_las_1.54.12_ezgvrd.png"
              alt="AI Supera-T"
              className="h-12 w-auto"
            />
          </div>
        </nav>
      </header>

      {/* Contenido Principal */}
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            POLÍTICA DE PRIVACIDAD
          </h1>
          <p className="text-gray-600 mb-8">
            <strong>Última actualización:</strong> {fechaHoy}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Sección 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. RESPONSABLE Y CONTACTO
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El servicio es operado bajo la marca comercial <strong>AI Supera-T</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                * <strong>Delegado de Protección de Datos (DPO):</strong>{' '}
                <a 
                  href="mailto:dpo@privacidadglobal.com" 
                  className="text-gold-600 hover:text-gold-700 underline"
                >
                  dpo@privacidadglobal.com
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                * <strong>Correo de contacto:</strong>{' '}
                <a 
                  href="mailto:ai@supera-t.es" 
                  className="text-gold-600 hover:text-gold-700 underline"
                >
                  ai@supera-t.es
                </a>
              </p>
            </section>

            {/* Sección 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. DATOS RECOPILADOS
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Recopilamos datos de contacto (nombre, teléfono, email) necesarios para la configuración de los chatbots.
              </p>
            </section>

            {/* Sección 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. USO DE WHATSAPP CLOUD API
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Para prestar el servicio, los datos necesarios para la transmisión de mensajes son procesados a través de la infraestructura de <strong>Meta Platforms, Inc.</strong> (WhatsApp Cloud API). AI Supera-T actúa como Encargado del Tratamiento (Tech Provider), facilitando la conexión técnica entre el Usuario y Meta.
              </p>
            </section>

            {/* Sección 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. DERECHOS
              </h2>
              <p className="text-gray-700 leading-relaxed">
                El usuario puede solicitar la baja o modificación de sus datos escribiendo al correo del DPO indicado arriba.
              </p>
            </section>
          </div>

          {/* Botón de Volver */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-gold-600 hover:text-gold-700 font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver al inicio</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

