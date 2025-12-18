import { Info, Users, Calculator, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function AboutSeatDistribution() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-orange-100 rounded-lg">
            <Info className="w-8 h-8 text-orange-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-orange-600 mb-4">Wat zijn restzetels en waarom zijn ze belangrijk?</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Nadat Nederland naar de stembus is gegaan en de stemmen zijn geteld, worden er zetels uitgedeeld. Voor het verdelen van zetels bestaan er verschillende systemen. Geen enkel systeem is perfect; elk heeft zijn eigen voor- en nadelen.
              </p>
              <p>
                Een belangrijk onderdeel van alle systemen is hoe de restzetels verdeeld worden. De vele verschillende methodes doen dit net anders, waardoor dezelfde stemmingsuitslagen tot andere zetelverdelingen kunnen leiden.  
              </p>
              <p>
                Hoe goed begrijpen we eigenlijk ons eigen systeem? Hoe worden de restzetels verdeeld? En vooral: Is dit wel eerlijk? Met deze tool kun je beter begrijpen hoe restzetels werken, wat het verschil is tussen de methodes die in Nederland gebruikt worden, en zelf ontdekken wat (on)eerlijk is. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="aspect-video w-full rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/EvyrDy8Gwjg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      {/* How it works section */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Calculator className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h2 className="text-blue-600">Hoe werkt de zetelverdeling?</h2>
            <p className="text-gray-600 mt-2">Kort uitgelegd verloopt de verdeling van zetels in Nederland in de volgende stappen:</p>
          </div>
        </div>

        <div className="space-y-6 mt-8">
          {/* Step 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full">
                  1
                </div>
                <span>Stemmen uitbrengen en tellen</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Heel Nederland brengt zijn stem uit voor de verkiezingen. Na het tellen gaat de uitslag naar de kiesraad, waar ze verder verwerkt worden.
              </p>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full">
                  2
                </div>
                <span>Kiesdeler/kiesdrempel berekenen</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Om te kijken hoeveel stemmen er nodig zijn voor 1 zetel, word de kiesdeler bepaald. Dit geld ook als kiesdrempel voor de 2e kamer verkiezingen: Haal je minder stemmen dan de kiesdeler, dan kom je niet in de kamer.
              </p>
              <p className="text-gray-700 mb-4">
                De kiesdeler wordt berekend als:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-center">
                  <span className="text-orange-600">Kiesdeler</span> = <span className="text-blue-600">Totaal aantal geldige en niet-blanco stemmen</span> ÷ <span className="text-green-600">Aantal zetels</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full">
                  3
                </div>
                <span>Volle zetels verdelen per partij</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Het aantal volle zetels dat elke partij krijgt word berekend met:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                <p className="text-center">
                  <span className="text-orange-600">Zetels per partij</span> = <span className="text-blue-600">Stemmen partij</span> ÷ <span className="text-green-600">Kiesdeler</span> <span className="text-gray-600">(afgerond naar beneden)</span>
                </p>
              </div>
              <p className="text-gray-700">
                Omdat het aantal <span className="text-orange-600">zetels per partij</span> vaak geen gehele getallen oplevert, en je niet een stukje van een zetel kan uitdelen, word dit naar beneden afgerond. Zo blijven er echter restjes van een zetel over, de restzetels.
              </p>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full">
                  4
                </div>
                <span>Restzetels verdelen</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  De restzetels die na stap 3 over zijn worden verdeeld op basis van het aantal reststemmen. Hier zijn meerdere manieren voor. Bij nationale verkiezingen en gemeenten met 19 zetels of meer gebeurt dit volgens de methode van <span className="text-orange-600">de grootste gemiddelden</span>, ookwel de <span className="text-orange-600">d'Hondt-methode</span>.
                </p>
                
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                    <h4 className="text-blue-900">De d'Hondt-methode werkt als volgt:</h4>
                  </div>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-2">
                    <li>
                      Voor elke partij wordt een quotiënt berekend door het aantal stemmen van de partij te delen door het aantal zetels dat de partij al heeft plus één.
                    </li>
                    <li>
                      De partij met het hoogste quotiënt krijgt de eerstvolgende restzetel.
                    </li>
                    <li>
                      Dit proces wordt herhaald totdat alle restzetels zijn verdeeld.
                    </li>
                  </ol>
                </div>

                <p className="text-gray-700">
                  Op deze manier worden de overgebleven zetels zo verdeeld dat de partijen gemiddeld zoveel mogelijk stemmen per zetel hebben. Hierdoor hebben partijen met meer stemmen de grootste kans op extra zetels, terwijl kleinere partijen ook nog steeds kans maken op een restzetel.
                </p>
                <p className="text-gray-700">
                  Voor gemeentes met minder dan 19 zetels, word de methode van <span className="text-orange-600">de grootste overschotten</span> gebruikt, ookwel de <span className="text-orange-600">Hare-Niemeyer</span> methode.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                    <h4 className="text-blue-900">De methode van de grootste overschotten werkt als volgt:</h4>
                  </div>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700 ml-2">
                    <li>
                      Voor elke partij wordt gekeken naar het aantal reststemmen
                    </li>
                    <li>
                      De partij met het hoogste aantal reststemmen krijgt als eerste een zetel. Vervolgens krijgt de partij met het op een na hoogste aantal reststemmen een zetel.
                    </li>
                    <li>
                      Dit proces wordt doorgezet totdat alle restzetels zijn verdeeld.
                    </li>
                  </ol>
                </div>
                
                <p className="text-gray-700">
                  Op deze manier worden de overgebleven zetels zo verdeeld dat de partijen die het dichtste bij een nieuwe volle zetel zitten er een krijgen. Hierdoor hebben partijen een even grote kans op extra zetels, onafhankelijk van het aantal zetels dat een partij al heeft.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg shadow-sm p-8 text-white">
        <div className="flex items-start gap-4">
          <Users className="w-8 h-8 flex-shrink-0" />
          <div>
            <h3 className="mb-2">Zie wat eerlijk is en probeer het zelf uit!</h3>
            <p className="text-white/90">
              De verschillende methodes hebben elk hun eigen kwaliteiten, en het valt niet te zeggen of de een eerlijker is dan de ander.
              Gebruik de verschillende tabs hierboven om meer te weten te komen over de eerlijkheid van de methodes, en om zelf te zien hoe zetelverdeling werkt bij gemeenteraadsverkiezingen, nationale verkiezingen en Europese verkiezingen. Experimenteer met de stemmen en zie direct hoe dit de zetelverdeling beïnvloedt!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}