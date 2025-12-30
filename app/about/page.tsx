import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Chi Siamo | Bufaga',
  description: 'Scopri la storia e la missione di Bufaga',
}

export default function AboutPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Chi Siamo</h1>
            <p className="text-xl text-gray-600">
              Innovazione italiana per città più pulite e sostenibili
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">La Nostra Missione</h2>
            <p className="text-lg text-gray-700 mb-4">
              Bufaga nasce con l'obiettivo di rendere le città più vivibili attraverso 
              tecnologie innovative di purificazione dell'aria e comunicazione digitale.
            </p>
            <p className="text-lg text-gray-700">
              I nostri totem intelligenti combinano efficienza energetica, monitoraggio 
              ambientale in tempo reale e soluzioni di advertising digitale, creando 
              un modello di business sostenibile che beneficia comunità e ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Il Nostro Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Mario Rossi', role: 'CEO & Founder', bio: 'Esperto di sostenibilità urbana' },
              { name: 'Laura Bianchi', role: 'CTO', bio: 'Ingegnere ambientale' },
              { name: 'Paolo Verdi', role: 'Head of Sales', bio: '15 anni nel B2B tech' },
            ].map((member) => (
              <div key={member.name} className="bg-white p-6 rounded-lg text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}