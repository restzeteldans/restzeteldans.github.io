import { Scale, AlertTriangle, BookOpen, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function MethodologyComparison() {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-orange-100 rounded-lg">
            <Scale className="w-8 h-8 text-orange-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-orange-600 mb-4">Eerlijkheid in zetelverdeling</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Wanneer stemmen worden omgezet in zetels, gebruiken landen verschillende methoden om dit zo eerlijk mogelijk te doen. In Nederland werken we volgens een systeem van evenredige vertegenwoordiging, waarbij het totaal aantal stemmen vertaald wordt naar zetels in de Tweede Kamer of gemeenteraad. Hierbij worden eerst de zogenoemde volle zetels toegekend op basis van een kiesdeler; het overschot aan stemmen dat niet genoeg is voor een volle zetel levert restzetels op.
              </p>
              <p>
                Maar wat eerlijk is, hangt af van de gekozen methode. In Nederland bestaan twee manieren om restzetels te verdelen: de methode van de grootste overschotten (voor gemeenten met minder dan 19 zetels) en de methode van de grootste gemiddelden voor grotere boven de 19 zetels, nationale en Europese verkiezingen.
              </p>
              <p>
                Er is geen perfect stemsysteem: elk systeem maakt compromissen. De keuze voor een bepaalde methode is dus politiek, ethisch en moreel van aard: wat telt zwaarder, eenvoud en transparantie, of proportionele rechtvaardigheid en stabiliteit?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-gray-900 mb-6">Dit zijn de twee methodes die we gebruiken in Nederland met hun voor en nadelen:</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column: Methode van grootste gemiddelden */}
          <div className="space-y-4">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-blue-900">Methode van grootste gemiddelden</h3>
            </div>
            
            <div className="space-y-3">
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-gray-700">
                  Deze methode is wiskundig stabiel en voorkomt de paradoxen die bij de grootste overschotten kunnen optreden.
                </p>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-gray-700">
                  Afhankelijk van de variant kunnen grotere partijen voordeel krijgen, waardoor de verdeling iets minder proportioneel wordt.
                </p>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-gray-700">
                  Het systeem kan bijdragen aan stabielere meerderheden, met name de D'Hondt-variant, die grotere partijen iets bevoordeelt.
                </p>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-gray-700">
                  De berekening is minder intuïtief en moeilijker uit te leggen aan het grote publiek.
                </p>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-gray-700">
                  De methode wijkt soms af van de exacte verhouding die uit een zuivere quotabenadering zou volgen.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Methode van grootste overschotten */}
          <div className="space-y-4">
            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="text-purple-900">Methode van grootste overschotten</h3>
            </div>
            
            <div className="space-y-3">
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-gray-700">
                  De methode is transparant en eenvoudig uit te leggen.
                </p>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-gray-700">
                  De zetelverdeling sluit vaak zeer nauw aan bij het strikt proportionele aandeel van de stemmen.
                </p>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-gray-700">
                  Vooral kleinere en middelgrote partijen profiteren van deze aanpak.
                </p>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-gray-700">
                  De methode kan leiden tot wiskundige paradoxen, zoals de Alabama-paradox, waarbij een partij een zetel kan verliezen wanneer het totale aantal zetels stijgt.
                </p>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-gray-700">
                  Een combinatie van partijen (bijvoorbeeld een lijstverbinding) kan in sommige situaties minder zetels krijgen dan wanneer ze afzonderlijk meededen.
                </p>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-gray-700">
                  Kleinere partijen kunnen oververtegenwoordigd raken wanneer hun reststemmen relatief hoog zijn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concrete Paradoxes */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-red-100 rounded-lg">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <div>
            <h2 className="text-red-600">Concrete paradoxen: wat kan er misgaan?</h2>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>De Alabamaparadox</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>
                  Stel je voor dat een gemeenteraad eerst 10 zetels heeft en daarna hypothetisch 11. In sommige quotamethoden kan een partij dan minder zetels krijgen ondanks gelijkblijvende stemverhoudingen een onlogisch resultaat dat paradoxaal lijkt. Dit werd ontdekt in de context van de Amerikaanse congresverdeling in 1880, toen berekeningen van de volkstelling aantoonden dat als het totale aantal zetels in het Huis van Afgevaardigden hypothetisch zou worden verhoogd van 299 naar 300, dit het aantal zetels van Alabama zou verminderen van 8 naar 7.
                </p>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h4 className="text-amber-900 mb-2">Voorbeeld binnen Nederland</h4>
                  <p className="text-amber-800 italic">
                    Nog zoeken
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Arrow's Theorem */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-blue-100 rounded-lg">
            <BookOpen className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h2 className="text-blue-600">Waarom geen perfect systeem bestaat: Arrow's theorem & paradoxen</h2>
          </div>
        </div>

        <div className="space-y-4 text-gray-700">
          <p>
            Het idee dat een ideaal stemsysteem bestaat dat 'gerechtigheid' altijd waarborgt, klinkt logisch, maar wiskundig gezien is dat onmogelijk. Volgens Arrow's Impossibility Theorem kan geen enkel stemsysteem voldoen aan een reeks van eerlijkheidscriteria (zoals onafhankelijkheid van irrelevante alternatieven en Pareto-efficiëntie) zonder in conflict te komen met andere criteria. Met andere woorden: ieder stemsysteem moet ergens een compromis sluiten: een partij kan het gevoel krijgen dat haar stem minder recht doet aan de intentie van de kiezer of dat de volgorde van voorkeuren wiskundig paradoxaal wordt.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-gray-700 mb-3">
              In de context van restzetels betekent dit dat we moeten kiezen welke vorm van eerlijkheid we willen prioriteren:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
              <li>Zo dicht mogelijk bij de exacte proportie van stemmen,</li>
              <li>Of stabiliteit en vermijding van paradoxen,</li>
              <li>Of juist maximale eenvoud en transparantie voor kiezers.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What this means for voters */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-green-100 rounded-lg">
            <Users className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h2 className="text-green-600">Wat betekent dit voor kiezers?</h2>
          </div>
        </div>

        <div className="text-gray-700 space-y-4">
          <p>
            De methoden zijn niet willekeurig gekozen; ze zijn het resultaat van lange politieke en maatschappelijke discussies. Geen methode is perfect, maar ieder systeem is ontworpen met inzicht in de praktische gevolgen voor representatie en besluitvorming. Door de mechanismen te begrijpen, krijg je grip op waarom bepaalde partijen meer of minder zetels krijgen en hoe zelfs kleine rekensystemen politiek effect kunnen hebben, bijvoorbeeld op de samenstelling van een regering of de stem van kleinere partijen in het parlement.
          </p>
        </div>
      </div>

      {/* Resources Box */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg shadow-sm p-8 text-white">
        <div className="flex items-start gap-4 mb-6">
          <ExternalLink className="w-8 h-8 flex-shrink-0" />
          <div>
            <h3 className="mb-2">Voor als je er dieper in wil duiken:</h3>
          </div>
        </div>
        
        <div className="space-y-3 text-white/90">
          <div>
            <span>Stemsystemen: </span>
            <a 
              href="https://www.youtube.com/watch?v=yhO6jfHPFQU&t=27s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              https://www.youtube.com/watch?v=yhO6jfHPFQU&t=27s
            </a>
          </div>
          
          <div>
            <span>Arrow's theorem: </span>
            <a 
              href="https://plato.stanford.edu/entries/arrows-theorem/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              https://plato.stanford.edu/entries/arrows-theorem/
            </a>
          </div>
          
          <div>
            <span>Alabama Paradox: </span>
            <a 
              href="https://www.youtube.com/watch?v=-5gMG408H74" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              https://www.youtube.com/watch?v=-5gMG408H74
            </a>
          </div>
          
          <div>
            <span>Filip Moons over zetels: </span>
            <a 
              href="https://www.nporadio1.nl/podcasts/vroeg/132450/hoe-wordt-jouw-stem-een-zetel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              https://www.nporadio1.nl/podcasts/vroeg/132450/hoe-wordt-jouw-stem-een-zetel
            </a>
          </div>
          
          <div>
            <span>Wiskundige benadering restzetelverdeling: </span>
            <a 
              href="https://www.nieuwarchief.nl/serie5/pdf/naw5-2024-25-3-140.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              https://www.nieuwarchief.nl/serie5/pdf/naw5-2024-25-3-140.pdf
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
