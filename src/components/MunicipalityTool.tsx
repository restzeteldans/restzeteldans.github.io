import { useState } from 'react';
import { MapPin, Info, Map, List } from 'lucide-react';
import { municipalities, provinces } from '../data/municipalities';
import { SeatCalculator } from './SeatCalculator';
import { NetherlandsMap } from './NetherlandsMap';
import { calculateSeats } from '../utils/calculateSeats';

export function MunicipalityTool() {
  const [selectedMunicipality, setSelectedMunicipality] = useState<string>('');
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  
  const municipalityData = municipalities.find(m => m.name === selectedMunicipality);
  
  // Calculate the correct number of seats based on inhabitants
  const municipality = municipalityData ? {
    ...municipalityData,
    seats: calculateSeats(municipalityData.inhabitants)
  } : undefined;

  const handleMunicipalitySelect = (name: string) => {
    setSelectedMunicipality(name);
    // Scroll to results if on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        document.getElementById('municipality-results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-orange-600 mb-4">Gemeenteraadsverkiezingen 2026</h2>
        
        <p className="text-gray-700 mb-6">
          In maart 2026 vinden er gemeenteraadsverkiezingen plaats. Selecteer uw gemeente om te zien hoe de zetelverdeling werkt in uw gemeenteraad, met speciale aandacht voor restzetels.
        </p>

        <div className="flex items-start gap-3 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg mb-4">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-blue-900 mb-1">Wat zijn restzetels?</p>
            <p className="text-blue-800 text-sm">
              Omdat partijen vaak meer stemmen krijgen dan precies nodig is voor een zetel, blijven er stemmen over, ookwel reststemmen. Hierdoor blijven er ook nog zetels over die verdeeld moeten, de restzetels. Per gemeente verschilt de methode waarmee ze toegewezen worden.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 p-4 bg-orange-50 border-2 border-orange-200 rounded-lg">
          <Info className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-orange-900 mb-1">Welke methode wordt gebruikt?</p>
            <p className="text-orange-800 text-sm">
              Gemeenten met minder dan 19 zetels gebruiken de <strong>methode van grootste overschot</strong> (Hare-Niemeyer). Gemeenten met 19 of meer zetels gebruiken de <strong>methode van grootste gemiddelden</strong> (D'Hondt).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-orange-600" />
            <h3 className="text-gray-900">Selecteer uw gemeente</h3>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('map')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'map'
                  ? 'bg-orange-100 text-orange-700 border-2 border-orange-300'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Map className="w-4 h-4" />
              <span className="hidden sm:inline">Kaart</span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-orange-100 text-orange-700 border-2 border-orange-300'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">Lijst</span>
            </button>
          </div>
        </div>

        {viewMode === 'map' ? (
          <NetherlandsMap 
            onMunicipalityClick={handleMunicipalitySelect}
            selectedMunicipality={selectedMunicipality}
          />
        ) : (
          <div>
            <select
              value={selectedMunicipality}
              onChange={(e) => handleMunicipalitySelect(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none"
            >
              <option value="">-- Kies een gemeente --</option>
              {provinces.map(province => (
                <optgroup key={province} label={province}>
                  {municipalities
                    .filter(m => m.province === province)
                    .map(m => (
                      <option key={m.name} value={m.name}>
                        {m.name} ({m.inhabitants.toLocaleString('nl-NL')} inwoners)
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>
            <p className="text-sm text-gray-600 mt-2">
              Gemeenten zijn gegroepeerd per provincie
            </p>
          </div>
        )}
      </div>

      {municipality && (
        <>
          <div id="municipality-results" className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-gray-900 mb-4">Gemeente {municipality.name}</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-sm">Inwoners</p>
                <p className="text-gray-900">{municipality.inhabitants.toLocaleString('nl-NL')}</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <p className="text-gray-600 text-sm">Aantal zetels gemeenteraad</p>
                <p className="text-orange-600">{municipality.seats}</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-600 text-sm">Opkomst vorige verkiezing</p>
                <p className="text-blue-600">{municipality.turnout}%</p>
              </div>
            </div>
            {/*
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-900 mb-2">Hoe wordt het aantal zetels bepaald?</p>
              <p className="text-gray-700 text-sm">
                Het aantal raadszetels in een gemeente wordt bepaald door het aantal inwoners. 
                {municipality.inhabitants <= 3000 && ' Gemeenten tot 3.000 inwoners hebben 9 zetels.'}
                {municipality.inhabitants >= 3001 && municipality.inhabitants <= 6000 && ' Gemeenten met 3.001-6.000 inwoners hebben 11 zetels.'}
                {municipality.inhabitants >= 6001 && municipality.inhabitants <= 10000 && ' Gemeenten met 6.001-10.000 inwoners hebben 13 zetels.'}
                {municipality.inhabitants >= 10001 && municipality.inhabitants <= 15000 && ' Gemeenten met 10.001-15.000 inwoners hebben 15 zetels.'}
                {municipality.inhabitants >= 15001 && municipality.inhabitants <= 20000 && ' Gemeenten met 15.001-20.000 inwoners hebben 17 zetels.'}
                {municipality.inhabitants >= 20001 && municipality.inhabitants <= 25000 && ' Gemeenten met 20.001-25.000 inwoners hebben 19 zetels.'}
                {municipality.inhabitants >= 25001 && municipality.inhabitants <= 30000 && ' Gemeenten met 25.001-30.000 inwoners hebben 21 zetels.'}
                {municipality.inhabitants >= 30001 && municipality.inhabitants <= 35000 && ' Gemeenten met 30.001-35.000 inwoners hebben 23 zetels.'}
                {municipality.inhabitants >= 35001 && municipality.inhabitants <= 40000 && ' Gemeenten met 35.001-40.000 inwoners hebben 25 zetels.'}
                {municipality.inhabitants >= 40001 && municipality.inhabitants <= 45000 && ' Gemeenten met 40.001-45.000 inwoners hebben 27 zetels.'}
                {municipality.inhabitants >= 45001 && municipality.inhabitants <= 50000 && ' Gemeenten met 45.001-50.000 inwoners hebben 29 zetels.'}
                {municipality.inhabitants >= 50001 && municipality.inhabitants <= 60000 && ' Gemeenten met 50.001-60.000 inwoners hebben 31 zetels.'}
                {municipality.inhabitants >= 60001 && municipality.inhabitants <= 70000 && ' Gemeenten met 60.001-70.000 inwoners hebben 33 zetels.'}
                {municipality.inhabitants >= 70001 && municipality.inhabitants <= 80000 && ' Gemeenten met 70.001-80.000 inwoners hebben 35 zetels.'}
                {municipality.inhabitants >= 80001 && municipality.inhabitants <= 100000 && ' Gemeenten met 80.001-100.000 inwoners hebben 37 zetels.'}
                {municipality.inhabitants >= 100001 && municipality.inhabitants <= 200000 && ' Gemeenten met 100.001-200.000 inwoners hebben 39 zetels.'}
                {municipality.inhabitants >= 200001 && ' Gemeenten met 200.001 inwoners of meer hebben 45 zetels.'}
              </p>
            </div>
            */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-900 mb-2">De methode</p>
              <p className="text-gray-700 text-sm">
                Omdat deze gemeente  
                {municipality.inhabitants <= 3000 && '9 zetels '}
                {municipality.inhabitants >= 3001 && municipality.inhabitants <= 6000 && ' 11 zetels '}
                {municipality.inhabitants >= 6001 && municipality.inhabitants <= 10000 && ' 13 zetels '}
                {municipality.inhabitants >= 10001 && municipality.inhabitants <= 15000 && ' 15 zetels '}
                {municipality.inhabitants >= 15001 && municipality.inhabitants <= 20000 && ' 17 zetels '}
                {municipality.inhabitants >= 20001 && municipality.inhabitants <= 25000 && ' 19 zetels '}
                {municipality.inhabitants >= 25001 && municipality.inhabitants <= 30000 && ' 21 zetels '}
                {municipality.inhabitants >= 30001 && municipality.inhabitants <= 35000 && ' 23 zetels '}
                {municipality.inhabitants >= 35001 && municipality.inhabitants <= 40000 && ' 25 zetels '}
                {municipality.inhabitants >= 40001 && municipality.inhabitants <= 45000 && ' 27 zetels '}
                {municipality.inhabitants >= 45001 && municipality.inhabitants <= 50000 && ' 29 zetels '}
                {municipality.inhabitants >= 50001 && municipality.inhabitants <= 60000 && ' 31 zetels '}
                {municipality.inhabitants >= 60001 && municipality.inhabitants <= 70000 && ' 33 zetels '}
                {municipality.inhabitants >= 70001 && municipality.inhabitants <= 80000 && ' 35 zetels '}
                {municipality.inhabitants >= 80001 && municipality.inhabitants <= 100000 && ' 37 zetels '}
                {municipality.inhabitants >= 100001 && municipality.inhabitants <= 200000 && ' 39 zetels '}
                {municipality.inhabitants >= 200001 && '45 zetels '}
                heeft, word de methode van
                {municipality.inhabitants <= 20000 && ' de Grootste Overschotten '}
                {municipality.inhabitants >= 20001 && ' de Grootste Gemiddelden '}
                gebruikt.
              </p>
            </div>

            {municipality.electionResults && (
              <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-lg">
                <p className="text-green-900 mb-1">✓ Werkelijke verkiezingsdata</p>
                <p className="text-green-800 text-sm">
                  Voor deze gemeente gebruiken we de werkelijke uitslagen van de gemeenteraadsverkiezingen 2022 als startpunt.
                </p>
              </div>
            )}
            {!municipality.electionResults && (
              <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <p className="text-red-900 mb-1">✖ Geen verkiezingsdata</p>
                <p className="text-red-800 text-sm">
                  Voor deze gemeente is geen verkiezingsdata beschikbaar. Het is mogelijk dat deze gemeente niet meedeed aan de algemene verkiezingen in 2022.
                </p>
              </div>
            )}
          </div>

          <SeatCalculator municipality={municipality} />
        </>
      )}
    </div>
  );
}