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
                Er zijn veel verschillende manieren om verkiezingen te houden. Denk bijvoorbeeld aan het bekende Amerikaanse systeem in vergelijking met het Nederlandse systeem. Geen enkel systeem is perfect; elk heeft zijn eigen voor- en nadelen.
              </p>
              <p>
                Maar hoe goed begrijpen we eigenlijk ons eigen systeem? En vooral: hoe worden de restzetels verdeeld? Met deze tool kun je beter begrijpen hoe restzetels werken en waarom in Nederland juist deze methode wordt gebruikt.
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
            src="https://www.youtube.com/embed/7bNKPIRPaQA"
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
            <h2 className="text-blue-600">Hoe werkt het?</h2>
            <p className="text-gray-600 mt-2">Kort uitgelegd verloopt de verdeling van zetels in een paar stappen:</p>
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
                <span>Stemmen uitbrengen</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Heel Nederland brengt zijn stem uit voor de verkiezingen.
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
              <p className="text-gray-700 mb-4">
                De kiesdeler wordt berekend als:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-center">
                  <span className="text-orange-600">Kiesdeler</span> = <span className="text-blue-600">Totaal aantal geldige stemmen</span> ÷ <span className="text-green-600">Aantal zetels</span>
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
                <span>Zetels per partij verdelen</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Zetels per partij worden berekend met:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                <p className="text-center">
                  <span className="text-orange-600">Zetels per partij</span> = <span className="text-blue-600">Stemmen partij</span> ÷ <span className="text-green-600">Kiesdeler</span> <span className="text-gray-600">(afgerond naar beneden)</span>
                </p>
              </div>
              <p className="text-gray-700">
                Omdat dit vaak geen hele getallen oplevert, blijven er reststemmen over.
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
                  Als er na stap 3 nog zetels over zijn, worden deze toegewezen aan de partijen met de grootste reststemmen. Bij nationale verkiezingen en gemeenten met meer dan 19 zetels gebeurt dit volgens de <span className="text-orange-600">d'Hondt-methode</span>.
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
                  Op deze manier worden de overgebleven zetels eerlijk verdeeld: partijen met meer stemmen hebben de grootste kans op extra zetels, terwijl kleinere partijen ook nog steeds kans maken op een restzetel.
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
            <h3 className="mb-2">Probeer het zelf uit!</h3>
            <p className="text-white/90">
              Gebruik de verschillende tabs hierboven om te zien hoe zetelverdeling werkt bij gemeenteraadsverkiezingen, nationale verkiezingen en Europese verkiezingen. Experimenteer met de stemmen en zie direct hoe dit de zetelverdeling beïnvloedt!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}