import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terminos() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            CONDICIONES DEL SERVICIO (TÉRMINOS DE USO)
          </h1>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Sección 1 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. ACEPTACIÓN
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Al utilizar los servicios de integración de AI Supera-T, usted acepta estos términos y las <strong>Políticas de WhatsApp Business</strong>.
              </p>
            </section>

            {/* Sección 2 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. DESCRIPCIÓN DEL SERVICIO
              </h2>
              <p className="text-gray-700 leading-relaxed">
                AI Supera-T provee una herramienta de software (SaaS) para la automatización de mensajes. No somos propietarios de la plataforma WhatsApp ni estamos afiliados corporativamente con Meta Platforms, Inc.
              </p>
            </section>

            {/* Sección 3 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. RESPONSABILIDAD DEL USUARIO
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                El usuario es el único responsable del contenido de los mensajes enviados a través de nuestros chatbots. Queda prohibido el envío de SPAM, contenido ofensivo o cualquier actividad que viole la Política de Comercio de WhatsApp.
              </p>
              <p className="text-gray-700 leading-relaxed">
                AI Supera-T se reserva el derecho de suspender el servicio si detecta un uso abusivo que ponga en riesgo nuestra infraestructura o la reputación ante Meta.
              </p>
            </section>

            {/* Sección 4 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. PAGOS Y COSTOS DE META
              </h2>
              <p className="text-gray-700 leading-relaxed">
                AI Supera-T cobra por el uso de su software. Los costos derivados de las conversaciones de WhatsApp (tarifas de Meta) son responsabilidad directa del usuario final, quien deberá tener un método de pago válido asociado en su propia cuenta de WhatsApp Business.
              </p>
            </section>

            {/* Sección 5 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. LIMITACIÓN DE RESPONSABILIDAD
              </h2>
              <p className="text-gray-700 leading-relaxed">
                El servicio se ofrece "tal cual". AI Supera-T no será responsable de interrupciones del servicio causadas por caídas de los servidores de Meta/WhatsApp o cambios en sus APIs.
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

