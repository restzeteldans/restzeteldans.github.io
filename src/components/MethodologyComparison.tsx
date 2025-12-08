import { CheckCircle, XCircle, Scale } from 'lucide-react';

export function MethodologyComparison() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center gap-3 mb-4">
          <Scale className="w-8 h-8 text-orange-600" />
          <h2 className="text-orange-600">
            Vergelijking van de methode van de grootste overschotten en de grootste gemiddelden
          </h2>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-gray-700">
            Bij verkiezingen waarin zetels evenredig moeten worden verdeeld, bestaan er verschillende rekenmethoden om stemmen om te zetten naar zetels. Twee veelgebruikte systemen zijn de methode van de grootste overschotten en de methode van de grootste gemiddelden. Beide streven naar proportionaliteit, maar doen dat met een andere benadering en met andere effecten voor partijen. Hieronder vindt u een overzicht van hoe beide methoden werken, en welke voor- en nadelen eraan verbonden zijn.
          </p>
        </div>
      </div>

      {/* Method 1: Largest Surplus */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-gray-900 mb-4">Methode van de grootste overschotten</h3>
        
        <p className="text-gray-700 mb-6">
          De methode van de grootste overschotten werkt op basis van een kiesdeler. Deze kiesdeler wordt berekend door het totaal aantal uitgebrachte stemmen te delen door het aantal beschikbare zetels. Elke partij krijgt vervolgens eerst de zetels die overeenkomen met het gehele aantal malen dat zij de kiesdeler behalen. De resterende zetels worden verdeeld op basis van de grootste overschotten: partijen met de hoogste reststemmen ontvangen als eerste een extra zetel.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Advantages */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h4 className="text-green-900">Voordelen</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-2 text-green-800 text-sm">
                <span className="text-green-600 mt-1">•</span>
                <span>De methode is transparant en eenvoudig uit te leggen.</span>
              </li>
              <li className="flex gap-2 text-green-800 text-sm">
                <span className="text-green-600 mt-1">•</span>
                <span>De zetelverdeling sluit vaak zeer nauw aan bij het strikt proportionele aandeel van de stemmen.</span>
              </li>
              <li className="flex gap-2 text-green-800 text-sm">
                <span className="text-green-600 mt-1">•</span>
                <span>Vooral kleinere en middelgrote partijen profiteren van deze aanpak.</span>
              </li>
            </ul>
          </div>

          {/* Disadvantages */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-red-600" />
              <h4 className="text-red-900">Nadelen</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-2 text-red-800 text-sm">
                <span className="text-red-600 mt-1">•</span>
                <span>De methode kan leiden tot wiskundige paradoxen, zoals de Alabama-paradox, waarbij een partij een zetel kan verliezen wanneer het totale aantal zetels stijgt.</span>
              </li>
              <li className="flex gap-2 text-red-800 text-sm">
                <span className="text-red-600 mt-1">•</span>
                <span>Een combinatie van partijen (bijvoorbeeld een lijstverbinding) kan in sommige situaties minder zetels krijgen dan wanneer ze afzonderlijk meededen.</span>
              </li>
              <li className="flex gap-2 text-red-800 text-sm">
                <span className="text-red-600 mt-1">•</span>
                <span>Kleinere partijen kunnen oververtegenwoordigd raken wanneer hun reststemmen relatief hoog zijn.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Method 2: Largest Averages */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-gray-900 mb-4">Methode van de grootste gemiddelden</h3>
        
        <p className="text-gray-700 mb-6">
          De methode van de grootste gemiddelden werkt niet met restzetels, maar met gemiddelden. Voor elke partij wordt een reeks berekend door haar stemmen te delen door vaste delers (bijvoorbeeld 1, 2, 3, … bij D'Hondt). De zetels worden vervolgens één voor één toegekend aan de hoogste berekende gemiddelden.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Advantages */}
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h4 className="text-green-900">Voordelen</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-2 text-green-800 text-sm">
                <span className="text-green-600 mt-1">•</span>
                <span>Deze methode is wiskundig stabiel en voorkomt de paradoxen die bij de grootste overschotten kunnen optreden.</span>
              </li>
              <li className="flex gap-2 text-green-800 text-sm">
                <span className="text-green-600 mt-1">•</span>
                <span>Het systeem kan bijdragen aan stabielere meerderheden, met name de D'Hondt-variant, die grotere partijen iets bevoordeelt.</span>
              </li>
              <li className="flex gap-2 text-green-800 text-sm">
                <span className="text-green-600 mt-1">•</span>
                <span>Verschillende delersystemen bieden flexibiliteit: sommige varianten zijn neutraler of juist gunstiger voor kleinere partijen.</span>
              </li>
            </ul>
          </div>

          {/* Disadvantages */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-5 h-5 text-red-600" />
              <h4 className="text-red-900">Nadelen</h4>
            </div>
            <ul className="space-y-3">
              <li className="flex gap-2 text-red-800 text-sm">
                <span className="text-red-600 mt-1">•</span>
                <span>De berekening is minder intuïtief en moeilijker uit te leggen aan het grote publiek.</span>
              </li>
              <li className="flex gap-2 text-red-800 text-sm">
                <span className="text-red-600 mt-1">•</span>
                <span>Afhankelijk van de variant kunnen grotere partijen voordeel krijgen, waardoor de verdeling iets minder proportioneel wordt.</span>
              </li>
              <li className="flex gap-2 text-red-800 text-sm">
                <span className="text-red-600 mt-1">•</span>
                <span>De methode wijkt soms af van de exacte verhouding die uit een zuivere quotabenadering zou volgen.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
        <h3 className="text-blue-900 mb-4">Samenvattend</h3>
        
        <div className="space-y-4 text-blue-800">
          <p>
            Hoewel beide methoden proportionaliteit nastreven, leggen zij andere accenten:
          </p>
          
          <ul className="space-y-3 ml-4">
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                De <strong>grootste overschotten</strong> zijn helder, toegankelijk en doorgaans sterk proportioneel, maar kennen enkele opmerkelijke wiskundige paradoxen en werken soms in het voordeel van kleinere partijen.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                De <strong>grootste gemiddelden</strong> bieden meer wiskundige consistentie en politieke stabiliteit, maar zijn minder doorzichtig en kunnen grotere partijen bevoordelen.
              </span>
            </li>
          </ul>

          <p className="pt-4 border-t-2 border-blue-300">
            Welke methode het meest geschikt is, hangt af van de doelen van het kiesstelsel: maximale transparantie en proportionaliteit, of juist stabiliteit en voorspelbaarheid in de zetelverdeling.
          </p>
        </div>
      </div>

      {/* Practical Application */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-gray-900 mb-4">Toepassing in Nederland</h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
            <p className="text-orange-900 mb-1">Tweede Kamerverkiezingen</p>
            <p className="text-orange-800 text-sm">
              Voor de Tweede Kamerverkiezingen wordt de <strong>methode van de grootste gemiddelden (D'Hondt)</strong> gebruikt.
            </p>
          </div>

          <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
            <p className="text-purple-900 mb-1">Europese verkiezingen</p>
            <p className="text-purple-800 text-sm">
              Ook voor de Europese verkiezingen wordt de <strong>methode van de grootste gemiddelden (D'Hondt)</strong> gebruikt.
            </p>
          </div>

          <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
            <p className="text-green-900 mb-1">Gemeenteraadsverkiezingen</p>
            <p className="text-green-800 text-sm">
              Bij gemeenteraadsverkiezingen hangt de methode af van het aantal zetels:
            </p>
            <ul className="mt-2 ml-4 space-y-1 text-green-800 text-sm">
              <li>• Gemeenten met minder dan 19 zetels: <strong>methode van de grootste overschotten</strong> (Hare-Niemeyer)</li>
              <li>• Gemeenten met 19 of meer zetels: <strong>methode van de grootste gemiddelden</strong> (D'Hondt)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
