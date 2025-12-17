import { useState } from 'react';
import { NationalElections } from './components/NationalElections';
import { EuropeanElections } from './components/EuropeanElections';
import { MethodologyComparison } from './components/MethodologyComparison';
import { MunicipalityTool } from './components/MunicipalityTool';
import { AboutSeatDistribution } from './components/AboutSeatDistribution';
import { Vote } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'municipality' | 'national' | 'european' | 'methodology'>('about');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Vote className="w-8 h-8 text-orange-600" />
            <div>
              <h1 className="text-orange-600">Zetelverdeling Nederland</h1>
              <p className="text-gray-600">Leer hoe zetels worden verdeeld na verkiezingen</p>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('about')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'about'
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Zetelverdeling Nederland
            </button>
            <button
              onClick={() => setActiveTab('municipality')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'municipality'
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Gemeenteraadsverkiezingen
            </button>
            <button
              onClick={() => setActiveTab('national')}
              className={`py-4 px-2 border-b-2 transition-colors bg-transparent text-inherit focus:outline-none ${
                activeTab === 'national'
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Nationale Verkiezingen
            </button>
            <button
              onClick={() => setActiveTab('european')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'european'
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Europese Verkiezingen
            </button>
            <button
              onClick={() => setActiveTab('methodology')}
              className={`py-4 px-2 border-b-2 transition-colors ${
                activeTab === 'methodology'
                  ? 'border-orange-600 text-orange-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              (On)Eerlijkheid
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'about' && <AboutSeatDistribution />}
        {activeTab === 'municipality' && <MunicipalityTool />}
        {activeTab === 'national' && <NationalElections />}
        {activeTab === 'european' && <EuropeanElections />}
        {activeTab === 'methodology' && <MethodologyComparison />}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>Dit educatieve project over Nederlandse verkiezingen is tot stand gekomen uit een samenwerking tussen studenten van de Science Communication in Society Master Eszter Nagy, Floris Löffler, Igor van der Meulen, Lucy van Staalduine, en Teun Grimbergen, onder supervisie van Ionica Smeets, en Platform Wiskunde Nederland (Nicos Starreveld)</p>
        </div>
      </footer>
    </div>
  );
}