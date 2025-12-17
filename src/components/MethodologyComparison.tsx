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
                Wanneer stemmen worden omgezet in zetels, gebruiken landen verschillende methoden om dit te doen. In Nederland werken we volgens een systeem van evenredige vertegenwoordiging, waarbij het totaal aantal stemmen evenredig vertaald wordt naar zetels in de Tweede Kamer of gemeenteraad. Hierbij worden eerst de zogenoemde volle zetels toegekend op basis van een kiesdeler; het overschot aan stemmen dat niet genoeg is voor een volle zetel levert restzetels op. Hier zijn meerdere methodes voor.
              </p>
              <p>
                Wat eerlijk is, hangt onder andere af van de gekozen methode. Er zijn veel methodes die net verschillen, zoals de Hamilton-methode, Webster-methode, D'Hondt-methode en meer. In Nederland worden twee manieren om restzetels te verdelen gebruikt: de methode van de grootste overschotten (voor gemeenten met minder dan 19 zetels) en de methode van de grootste gemiddelden, voor gemeenten met 19 zetels of meer en voor de nationale en Europese verkiezingen. Beiden methoden hebben hun eigen voor- en nadelen.
              </p>
              <p>
                Er is geen perfect stemsysteem: elk systeem maakt compromissen, en kan leiden tot verdelingen die oneerlijk lijken. De keuze voor een bepaalde methode is politiek, ethisch en moreel van aard: wat telt zwaarder, eenvoud en transparantie, of proportionele rechtvaardigheid en stabiliteit? Vergelijk hieronder de 2 methoden die in Nederland gebruikt worden, en ontdek waarom geen enkel systeem volledig eerlijk kan zijn.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-gray-900 mb-6">Dit zijn de twee methodes die we gebruiken in Nederland, elk met hun eigen voor- en nadelen:</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column: Methode van grootste gemiddelden */}
          <div className="space-y-4">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h3 className="text-blue-900">Methode van grootste gemiddelden</h3>
            </div>
            
            <div className="space-y-3">
              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-gray-700">
                  Deze methode is wiskundig stabiel en voorkomt de paradoxen die bij de grootste overschotten kunnen optreden. Zo vind de Alabama en Populatieparadox hier niet plaats.
                </p>
              </div>

              <div className="p-4 bg-gray-50 border-l-4 border-gray-500 rounded">
                <p className="text-gray-700">
                  Grotere partijen krijgen sneller een restzetel dan kleinere partijen. Hoewel hierdoor kleinere partijen benadeeld zijn, is het vaak mogelijk om met minder partijen een coalitie te vormen.
                </p>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-gray-700">
                  De berekening is minder intuïtief en moeilijker uit te leggen aan het grote publiek. Hierdoor krijgen mensen sneller een gevoel dat de methode oneerlijk is.
                </p>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-gray-700">
                  De methode wijkt soms af van de exacte verhouding die uit een zuivere quotabenadering zou volgen, en de verdeling van zetels is minder representatief voor de uitslag. Partijen halen zo soms meer dan 1 restzetel, waardoor een coalitie met een minderheid van de stemmen een meerderheid van de zetels kan halen. Dit was het geval in de kabinetten Rutte I, III en IV.
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
                  De methode is transparant en eenvoudig uit te leggen, en voelt voor veel mensen eerlijker.
                </p>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-gray-700">
                  De zetelverdeling sluit vaak zeer nauw aan bij het strikt proportionele aandeel van de stemmen. Partijen kunnen zo nooit meer dan 1 restzetel krijgen.
                </p>
              </div>

              <div className="p-4 bg-gray-50 border-l-4 border-gray-500 rounded">
                <p className="text-gray-700">
                  De kans is voor zowel kleine als grote partijen hetzelfde om een restzetel te krijgen, en hangt enkel van het overschot af.
                </p>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <p className="text-gray-700">
                  De methode kan leiden tot wiskundige paradoxen, zoals de Alabama en Populatie-paradox.
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
            Het idee dat een ideaal stemsysteem bestaat dat 'gerechtigheid' altijd waarborgt, klinkt logisch en fijn, maar is wiskundig gezien onmogelijk. Dat is beschreven in "Arrow's Impossibility Theorem": Geen enkel stemsysteem kan voldoen aan een reeks van eerlijkheidscriteria zonder in conflict te komen met andere criteria. Met andere woorden: ieder stemsysteem moet ergens een compromis sluiten; een partij kan het gevoel krijgen dat haar stem minder recht doet aan de intentie van de kiezer of dat de volgorde van voorkeuren wiskundig paradoxaal wordt.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-gray-700 mb-3">
              Voor elk stemsysteem kunnen we stellen dat we aan bepaalde basale criteria willen voldoen die allemaal eerlijk lijken:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-4">
              <li>Pareto efficiëntie: Als elke stemmer liever partij A heeft dan partij B, dan moet ook uit de stemming volgen dat men liever partij A heeft dan partij B.</li>
              <li>Geen dictatuur: Het mag niet zo zijn dat 1 stemmer altijd de uitkomst kan bepalen, en dat 1 stemmer altijd zijn wil kan krijgen.</li>
              <li>Onafhankelijkheid van irrelevante alternatieven: Als men stemt of ze partij A of B prefereren, dan mag het bestaan van een partij C niet de uitslag aanpassen.</li>
              <li>Ongelimiteerde keuze: Iedere uitslag moet (in theorie) mogelijk zijn, je kan niet een uitslag verbieden omdat het onhandig is.</li>
              <li>Transitiviteit: Als iedereen partij A liever heeft dan partij B, en partij B liever heeft dan partij C, dan heeft iedereen ook partij A liever dan partij C.</li>
            </ul>

            <p className="text-gray-700 mb-3">
              Volgens Arrow's Impossibility Theorem kan geen enkel systeem aan al deze vereisten voldoen. Elk mogelijk systeem gaat tegen een of meerdere van deze criteria in, of veroorzaakt bepaalde paradoxen. Je zal dus zelf moeten kiezen welke je belangrijker vindt.
            </p>
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
              <CardTitle>De Alabamaparadox (grootste overschotten)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>
                  Stel je voor dat een gemeenteraad eerst 10 zetels heeft en daarna hypothetisch 11. In sommige quotamethoden, zoals de methode van de grootste overschotten, kan een partij dan minder zetels krijgen ondanks gelijkblijvende stemverhoudingen, een onlogisch en paradoxaal resultaat. Dit werd ontdekt in de context van de Amerikaanse congresverdeling in 1880, toen berekeningen van de volkstelling aantoonden dat als het totale aantal zetels in het Huis van Afgevaardigden hypothetisch zou worden verhoogd van 299 naar 300, dit het aantal zetels van Alabama zou verminderen van 8 naar 7.
                </p>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h4 className="text-amber-900 mb-2">Voorbeeld binnen Nederland</h4>
                  <p className="text-amber-800 italic">
                    Bij de gemeenteraadsverkiezingen van Zierikzee in 1982 waren er 13 zetels te verdelen. De PCG behaalde 421 stemmen, en haalde daarmee 1,07 zetels. Hiermee haalde ze 1 volle zetel en 1 restzetel. De volgende kleinste partij, de PAK, haalde met 0.66 zetels net niet de kiesdrempel van 0.75 om in aanmerking voor een restzetel te komen, hoewel ze meer reststemmen hadden. Had de gemeente echter 15 zetels gehad, dan had de PCG 1,23 zetels gehaald. Maar omdat dan de volgende kleinste partij, de PAK, 0.765 zetels zouden hebben gehaald, hadden ze net genoeg voor de kiesdrempel van 0.75 om in aanmerking te komen voor een restzetel. Hierdoor ging een restzetel naar PAK en niet PCG, die met minder zetels in een grotere gemeenteraad kwam.  
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>De populatieparadox (grootste overschotten)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>
                  Stel je voor dat een partij A evenveel stemmen heeft gehaald als bij de vorige verkiezingen, en een partij B er een hoop heeft verloren. Dan zou het logisch zijn als partij B een zetel verliest, en niet partij A. Toch kan dit bij de methode van grootste overschotten gebeuren als het totale aantal stemmers afneemt.
                </p>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h4 className="text-amber-900 mb-2">Voorbeeld binnen Nederland</h4>
                  <p className="text-amber-800 italic">
                    Hoewel deze paradox in Nederland niet heeft plaatsgevonden, kunnen we wel een theoretisch voorbeeld geven van Schiermonnikoog, gebaseerd op een lezing van Henk Don uit 2023.
                    Zie de verkiezingsuitslag in de tabel hierdonder. Hoewel SAMEN evenveel stemmen heeft gehaald, en Ons Belang stemmen heeft verloren, heeft juist SAMEN een zetel verloren. Dit kan omdat het totaal aantal stemmers afnam, en wel volledig bij Ons Belang. Omdat het restant van Ons Belang alsnog hoger uitkomt dan SAMEN, en Schiermonnikoogs Belang kwa restant omhoog gaat, krijgt SAMEN geen restzetel meer, maar juist Schiermonnikoogs Belang, die er eerst geen had.
                  </p>
                  <table className="paradox-tabel">
                    <thead>
                      <tr>
                        <th rowSpan={2}>Schiermonnikoog</th>
                        <th colSpan={3}>2022</th>
                        <th colSpan={3}>2026</th>
                      </tr>
                      <tr>
                        <th>stemmen</th>
                        <th>x<sub>i</sub></th>
                        <th>z<sub>i</sub></th>
                        <th>stemmen</th>
                        <th>x<sub>i</sub></th>
                        <th>z<sub>i</sub></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Ons Belang</td>
                        <td>241</td>
                        <td>3,31</td>
                        <td>3</td>
                        <td>172</td>
                        <td>2,67</td>
                        <td>3</td>
                      </tr>
                      <tr className="highlight-loss">
                        <td>SAMEN</td>
                        <td>171</td>
                        <td>2,35</td>
                        <td>3</td>
                        <td>171</td>
                        <td>2,66</td>
                        <td>2</td>
                      </tr>
                      <tr className="highlight-gain">
                        <td>Schiermonnikoogs Belang</td>
                        <td>243</td>
                        <td>3,34</td>
                        <td>3</td>
                        <td>236</td>
                        <td>3,67</td>
                        <td>4</td>
                      </tr>
                      <tr className="totaal">
                        <td>Totaal</td>
                        <td>655</td>
                        <td>9</td>
                        <td>9</td>
                        <td>579</td>
                        <td>9</td>
                        <td>9</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>De lijstverbindingparadox (beiden methodes)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-700">
                <p>
                  Bij sommige verkiezingen kunnen partijen ervoor kiezen om samen een lijst te vormen. Je stemt dan op de lijstverbinding, en de zetels worden verdeeld over de 2 partijen die eraan meedoen. Dit kan er echter voor zorgen dat het aantal restzetels veranderdt, en men geen restzetel krijgt.
                  Stel dat partijen A en B los de verkiezingen in gaan, en elk 1,6 zetel halen. Doordat ze een grote rest van 0,6 halen, krijgen ze elke een restzetel, en hebben ze in totaal dus 4 zetels. Zouden ze een lijstverbinding aangegaan zijn en evenveel stemmen hebben gekregen, dan hadden ze 3,2 zetels gehaald. Nu is de rest maar 0,2, wat wellicht te weinig is voor een restzetel, waardoor ze samen maar 3 zetels halen. Zo eindigen ze na een lijstcombinatie met 3 zetels in plaats van 4, hoewel ze dezelfde hoeveelheid stemmen halen. 
                </p>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h4 className="text-amber-900 mb-2">Voorbeeld binnen Nederland</h4>
                  <p className="text-amber-800 italic">
                    Lijstverbindingen kunnen niet alleen nadelig uitpakken bij het systeem van grootste overschotten, maar ook voordelig bij het systeem van grootste gemiddelden. Zo kreeg in 2014 bij de Europese Verkiezingen D66 15,48 % van de stemmen en het CDA 15,18 %. Toch gingen er uiteindelijk 5 zetels naar het CDA en maar 4 naar D66. Omdat CDA namelijk een lijstverbinding was aangegaan met Christenunie-SGP, hadden ze in totaal meer stemmen, en hadden ze een hoger gemiddeld aantal stemmen per zetel. Omdat de methode van grootste gemiddelden handig uitpakt voor grotere partijen, ging de zetel dus naar het CDA en niet naar D66.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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
            De methoden zijn niet willekeurig gekozen, maar het resultaat van lange politieke en maatschappelijke discussies. Geen methode is perfect, maar wel is ieder systeem ontworpen met inzicht in de praktische gevolgen voor representatie en besluitvorming. Zonder de redenaties achter de methodes te weten kan het stemsysteem oneerlijk aanvoelen, en de onvrede met de politiek toenemen. Door de mechanismen te begrijpen, krijg je grip op waarom bepaalde partijen meer of minder zetels krijgen en hoe zelfs kleine rekensystemen politiek effect kunnen hebben, bijvoorbeeld op de samenstelling van een regering of de stem van kleinere partijen in het parlement.
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

          <div>
            <span>Platform Wiskunde Nederland: </span>
            <a 
              href="https://platformwiskunde.nl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              https://platformwiskunde.nl/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
