export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Bufaga</h3>
            <p className="text-gray-400">
              Aria pulita per città sostenibili
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Soluzioni</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/landing/industria" className="hover:text-white">Industria</a></li>
              <li><a href="/landing/logistica" className="hover:text-white">Logistica</a></li>
              <li><a href="/landing/parking" className="hover:text-white">Parcheggi</a></li>
              <li><a href="/landing/trasporti" className="hover:text-white">Trasporti</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Azienda</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">Chi Siamo</a></li>
              <li><a href="/tecnologia" className="hover:text-white">Tecnologia</a></li>
              <li><a href="/case-studies" className="hover:text-white">Casi Studio</a></li>
              <li><a href="/contatti" className="hover:text-white">Contatti</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Roma, Italia</li>
              <li>info@bufaga.com</li>
              <li>+39 06 XXXX XXXX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bufaga. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
