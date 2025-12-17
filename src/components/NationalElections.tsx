import { useState } from 'react';
import { Users, Calculator, Award, TrendingUp, RotateCcw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface Party {
  name: string;
  votes: number;
  color: string;
}

interface SeatAllocation {
  party: string;
  votes: number;
  color: string;
  fullSeats: number;
  remainder: number;
  restSeatSurplus: boolean;
  restSeatAverages: boolean;
  totalSeatsSurplus: number;
  totalSeatsAverages: number;
  average: number;
  quot: number;
}

const partyColors: { [key: string]: string } = {
  D66: "#00A94F",
  PVV: "#0D3D73",
  VVD: "#0066CC",
  "GL-PvdA": "#76B82A",
  CDA: "#007B5F",
  JA21: "#1E3A8A",
  FvD: "#8B0000",
  BBB: "#87CEEB",
  DENK: "#00B8C8",
  SGP: "#FFA500",
  PvdD: "#006B2D",
  CU: "#00B0F0",
  SP: "#F8423F",
  "50+": "#800080",
  Volt: "#502379",
};

// 2025 National Election Results
const nationalElectionResults = [
  { name: "D66", percentage: 16.94, seats: 26, votes: 1790634 },
  { name: "PVV", percentage: 16.66, seats: 26, votes: 1760966 },
  { name: "VVD", percentage: 14.24, seats: 22, votes: 1505829 },
  { name: "GL-PvdA", percentage: 12.79, seats: 20, votes: 1352163 },
  { name: "CDA", percentage: 11.79, seats: 18, votes: 1246874 },
  { name: "JA21", percentage: 5.95, seats: 9, votes: 628517 },
  { name: "FvD", percentage: 4.54, seats: 7, votes: 480393 },
  { name: "BBB", percentage: 2.65, seats: 4, votes: 279916 },
  { name: "DENK", percentage: 2.37, seats: 3, votes: 250368 },
  { name: "SGP", percentage: 2.25, seats: 3, votes: 238093 },
  { name: "PvdD", percentage: 2.08, seats: 3, votes: 219371 },
  { name: "CU", percentage: 1.90, seats: 3, votes: 201361 },
  { name: "SP", percentage: 1.89, seats: 3, votes: 199585 },
  { name: "50+", percentage: 1.43, seats: 2, votes: 151053 },
  { name: "Volt", percentage: 1.10, seats: 1, votes: 116468 },
  { name: "Bij1", percentage: 0.38, seats: 0, votes: 40360 },
  { name: "Nieuw Sociaal Contract (NSC)", percentage: 0.37, seats: 0, votes: 39408 },
  { name: "Belang Van Nederland (BVNL)", percentage: 0.17, seats: 0, votes: 18477 },
  { name: "Vrede voor Dieren", percentage: 0.16, seats: 0, votes: 16819 },
  { name: "Piratenpartij", percentage: 0.10, seats: 0, votes: 10575 },
  { name: "FNP", percentage: 0.09, seats: 0, votes: 9331 },
  { name: "LP", percentage: 0.08, seats: 0, votes: 8248 },
];

export function NationalElections() {
  const [parties, setParties] = useState<Party[]>(() =>
    nationalElectionResults.map((result) => ({
      name: result.name,
      votes: result.votes,
      color: partyColors[result.name] || "#94a3b8",
    }))
  );

  const totalSeats = 150;
  const totalVotes = parties.reduce((sum, p) => sum + p.votes, 0);
  const electoralQuotient = totalVotes / totalSeats;

  const calculateSeats = (): SeatAllocation[] => {
    // Initialize allocations
    const allocations: SeatAllocation[] = parties.map(
      (party) => ({
        party: party.name,
        votes: party.votes,
        color: party.color,
        fullSeats: 0,
        remainder: 0,
        restSeatSurplus: false,
        restSeatAverages: false,
        totalSeatsSurplus: 0,
        totalSeatsAverages: 0,
        average: party.votes,
        quot: 0,
      }),
    );

    // Calculate full seats and remainders
    allocations.forEach(allocation => {
      const quotient = allocation.votes / electoralQuotient;
      allocation.fullSeats = Math.floor(quotient);
      allocation.remainder = quotient - allocation.fullSeats;
    });

    // Method 1: Largest Surplus (Hare-Niemeyer)
    allocations.forEach(allocation => {
      allocation.totalSeatsSurplus = allocation.fullSeats;
    });

    const remainingSeats = totalSeats - allocations.reduce((sum, a) => sum + a.fullSeats, 0);
    const sortedByRemainder = [...allocations].sort((a, b) => b.remainder - a.remainder);
    
    for (let i = 0; i < remainingSeats; i++) {
      sortedByRemainder[i].restSeatSurplus = true;
      sortedByRemainder[i].totalSeatsSurplus += 1;
    }

    // Method 2: Largest Averages (D'Hondt)
    const tempAllocations = allocations.map(a => ({ ...a, seats: 0 }));
    
    for (let seat = 0; seat < totalSeats; seat++) {
      let maxIndex = 0;
      let maxAverage = 0;

      tempAllocations.forEach((allocation, index) => {
        const average = allocation.votes / (allocation.seats + 1);
        allocation.quot = average;
        if (average > maxAverage) {
          maxAverage = average;
          maxIndex = index;
        }
      });

      
      tempAllocations[maxIndex].seats += 1;
    }

    allocations.forEach((allocation, index) => {
      allocation.totalSeatsAverages = tempAllocations[index].seats;
      allocation.restSeatAverages = allocation.totalSeatsAverages > allocation.fullSeats;
      allocation.quot = tempAllocations[index].quot;
    });

    return allocations.sort((a, b) => b.totalSeatsAverages - a.totalSeatsAverages);
  };

  const allocations = calculateSeats();
  const totalAllocatedSurplus = allocations.reduce(
    (sum, a) => sum + a.totalSeatsSurplus,
    0
  );
  const totalAllocatedAverages = allocations.reduce(
    (sum, a) => sum + a.totalSeatsAverages,
    0
  );
  const remainingSeats =
    totalSeats -
    allocations.reduce((sum, a) => sum + a.fullSeats, 0);

  const updateVotes = (index: number, votes: number) => {
    const newParties = [...parties];
    newParties[index].votes = Math.max(0, votes);
    setParties(newParties);
  };

  const updatePercentage = (index: number, percentage: number) => {
      setParties(prev =>
        prev.map((p, i) =>
          i === index
            ? { ...p, votes: Math.round((percentage / 100) * totalVotes) }
            : p
        )
      );
    };
    
  const resetVotes = () => {
    setParties(
      nationalElectionResults.map((result) => ({
        name: result.name,
        votes: result.votes,
        color: partyColors[result.name] || "#94a3b8",
      }))
    );
  };

  // Generate parliament seats in C-shape
  const generateParliamentSeats = () => {
    const seats = [];
    const rows = 8; // Number of rows in parliament
    const centerX = 400;
    const centerY = 500;
    const innerRadius = 150;
    const rowSpacing = 35;

    let seatIndex = 0;

    for (let row = 0; row < rows; row++) {
      const radius = innerRadius + row * rowSpacing;
      const seatsInRow = Math.floor(12 + row * 3);
      const angleStart = Math.PI * 0.75; // Start angle
      const angleEnd = Math.PI * 0.25; // End angle
      const angleStep = (angleEnd - angleStart) / (seatsInRow - 1);

      for (let i = 0; i < seatsInRow && seatIndex < 150; i++) {
        const angle = angleStart + i * angleStep;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY - radius * Math.sin(angle);

        // Find which party this seat belongs to (using D'Hondt method)
        let currentSeat = 0;
        let partyForSeat = null;
        for (const allocation of allocations) {
          if (seatIndex < currentSeat + allocation.totalSeatsAverages) {
            partyForSeat = allocation;
            break;
          }
          currentSeat += allocation.totalSeatsAverages;
        }

        seats.push({
          x,
          y,
          party: partyForSeat?.party || "",
          color: partyForSeat?.color || "#cccccc",
        });

        seatIndex++;
      }
    }

    return seats;
  };

  const parliamentSeats = generateParliamentSeats();

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-orange-600 mb-4">Hoe werken Tweede Kamerverkiezingen?</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700">
            Bij Tweede Kamerverkiezingen worden 150 zetels verdeeld over de politieke partijen op basis van het aantal stemmen dat zij hebben ontvangen. Nederland gebruikt een systeem van evenredige vertegenwoordiging.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-gray-900">1. Stemmen Tellen</h3>
          </div>
          <p className="text-gray-700">
            Alle stemmen in Nederland worden geteld, en de uitslagen worden gedeeld met en bevestigt door de kiesraad.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Calculator className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900">2. Kiesdeler</h3>
          </div>
          <p className="text-gray-700">
            De kiesdeler wordt berekend door het totaal aantal geldige en niet-blanco stemmen te delen door 150 (aantal zetels). Dit is het minimum aantal stemmen voor één zetel. Haal je minder stemmen dan de kiesdeler, dan kom je zelfs met reststemmen niet in aanmerking voor een zetel.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-gray-900">3. Restzetels</h3>
          </div>
          <p className="text-gray-700">
            Na de eerste verdeling blijven er vaak reststemmen over, omdat men nooit precies genoeg stemmen heeft voor een zetel. Zo blijven er ook restzetels over, die worden toegewezen door de methode van de grootste gemiddelden.
          </p>
        </div>
      </div>
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
                  De <span className="text-orange-600">methode van de grootste gemiddelden</span> word gebruikt, ookwel de <span className="text-orange-600">d'Hondt-methode</span>.
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
              </div>
            </CardContent>
          </Card>
      {/*
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-gray-900 mb-4">De Kiesdeler Methode</h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-900 mb-2">Stap 1: Bereken de kiesdeler</p>
            <code className="text-sm text-gray-700 block bg-white p-2 rounded">
              Kiesdeler = Totaal aantal stemmen / 150
            </code>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-900 mb-2">Stap 2: Verdeel zetels per partij</p>
            <code className="text-sm text-gray-700 block bg-white p-2 rounded">
              Zetels per partij = Stemmen partij / Kiesdeler (afgerond naar beneden)
            </code>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
            <p className="text-gray-900 mb-2">Stap 3: Verdeel restzetels</p>
            <p className="text-gray-700 text-sm">
              Als er na stap 2 nog zetels over zijn, worden deze toegewezen aan de partijen met de grootste restanten (het deel na de komma bij de deling door de kiesdeler). Deze partijen krijgen elk één extra zetel totdat alle 150 zetels zijn verdeeld.
            </p>
          </div>
        </div>
      </div>
      */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-900 mb-3">Voorbeeld berekening</h3>
        <div className="space-y-2 text-sm">
          <p className="text-gray-700"><span className="text-gray-900">Totaal stemmen:</span> 10.564.809</p>
          <p className="text-gray-700"><span className="text-gray-900">Kiesdeler:</span> 10.564.809 / 150 = 70.432,06 stemmen per zetel</p>
          <p className="text-gray-700 mt-4"><span className="text-gray-900">Gl-PvdA:</span> 1.352.163 stemmen → 1.352.163 / 70.432,06 = 19,20 → 19 zetels + restant 0,20</p>
          <p className="text-gray-700"><span className="text-gray-900">Denk:</span> 250.368 stemmen → 250.368 / 70.432,06 = 3,56 → 3 zetels + restant 0,56</p>
          <p className="text-gray-700 mt-4"><span className="text-gray-900">Quotiënt Gl-PvdA:</span> 1.352.163 / 20 (19 + 1) = 67.608 </p>
          <p className="text-gray-700"><span className="text-gray-900">Quotiënt Denk:</span> 250.368 / 4 (3 + 1) = 62.592 </p>
          <p className="text-orange-700 mt-4">Gl-PvdA heeft het hoogste quotiënt en krijgt daarom een extra restzetel!</p>
        </div>
      </div>

      {/* Both Methods Comparison */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-6 h-6 text-orange-600" />
          <h3 className="text-gray-900">
            Methodes
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          Vergelijking van beide methodes voor het verdelen van restzetels
        </p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-2 text-gray-700">
                  Partij
                </th>
                <th className="text-right py-3 px-2 text-gray-700">
                  Stemmen
                </th>
                <th className="text-right py-3 px-2 text-gray-700">
                  %
                </th>
                <th className="text-right py-3 px-2 text-gray-700">
                  Volle zetels
                </th>
                <th className="text-right py-3 px-2 text-gray-700">
                  Restant
                </th>
                <th className="text-right py-3 px-2 text-orange-700">
                  Restzetel:<br/>Grootste overschot
                </th>
                <th className="text-right py-3 px-2 text-gray-900">
                  Totaal zetels<br/>(Grootste overschot)
                </th>
                <th className="text-right py-3 px-2 text-orange-700">
                  Restzetel:<br/>Grootste gemiddelde
                </th>
                <th className="text-right py-3 px-2 text-gray-900">
                  Totaal zetels<br/>(Grootste gemiddelde)
                </th>
              </tr>
            </thead>
            <tbody>
              {allocations.map((allocation) => (
                <tr
                  key={allocation.party}
                  className="border-b border-gray-100"
                >
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded"
                        style={{
                          backgroundColor: allocation.color,
                        }}
                      />
                      <span className="text-gray-900">
                        {allocation.party}
                      </span>
                    </div>
                  </td>
                  <td className="text-right py-3 px-2 text-gray-700">
                    {allocation.votes.toLocaleString("nl-NL")}
                  </td>
                  <td className="text-right py-3 px-2 text-gray-700">
                    {(
                      (allocation.votes / totalVotes) *
                      100
                    ).toLocaleString("nl-NL", {minimumFractionDigits: 1, maximumFractionDigits: 1,})}
                    %
                  </td>
                  <td className="text-right py-3 px-2 text-gray-700">
                    {allocation.fullSeats}
                  </td>
                  <td className="text-right py-3 px-2 text-gray-700">
                    {allocation.remainder.toLocaleString("nl-NL", {minimumFractionDigits: 3, maximumFractionDigits: 3,})}
                  </td>
                  <td className="text-right py-3 px-2">
                    {allocation.restSeatSurplus ? (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm">
                        +1
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="text-right py-3 px-2">
                    <span className="text-gray-900">
                      {allocation.totalSeatsSurplus}
                    </span>
                  </td>
                  <td className="text-right py-3 px-2">
                    {allocation.restSeatAverages ? (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm">
                        +{allocation.totalSeatsAverages - allocation.fullSeats}
                      </span>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className="text-right py-3 px-2">
                    <span className="text-gray-900">
                      {allocation.totalSeatsAverages}
                    </span>
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-gray-300">
                <td
                  colSpan={5}
                  className="py-3 px-2 text-gray-900"
                >
                  Totaal
                </td>
                <td className="text-right py-3 px-2 text-gray-900">
                  {remainingSeats} restzetels
                </td>
                <td className="text-right py-3 px-2 text-orange-600">
                  {totalAllocatedSurplus}
                </td>
                <td className="text-right py-3 px-2 text-gray-900">
                  {remainingSeats} restzetels
                </td>
                <td className="text-right py-3 px-2 text-orange-600">
                  {totalAllocatedAverages}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {remainingSeats > 0 && (
            <div className="p-4 bg-orange-50 border-2 border-orange-200 rounded-lg">
              <p className="text-orange-900 mb-2">
                🎯 Restzetels toewijzing (Grootste Overschotten)
              </p>
              <p className="text-orange-800 text-sm mb-3">
                Er zijn {remainingSeats} restzetel
                {remainingSeats > 1 ? "s" : ""} te verdelen. Deze
                worden toegewezen aan de partijen met de hoogste
                restanten:
              </p>
              <div className="space-y-1">
                {allocations
                  .filter((a) => a.restSeatSurplus)
                  .sort((a, b) => b.remainder - a.remainder)
                  .map((allocation, index) => (
                    <p
                      key={allocation.party}
                      className="text-orange-800 text-sm"
                    >
                      {index + 1}.{" "}
                      <span className="text-orange-900">
                        {allocation.party}
                      </span>{" "}
                      - restant: {allocation.remainder.toLocaleString("nl-NL", {minimumFractionDigits: 3, maximumFractionDigits: 3,})}
                    </p>
                  ))}
              </div>
            </div>
          )}

          {remainingSeats > 0 && (
              <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <p className="text-blue-900 mb-2">
                  🎯 Restzetels toewijzing (Grootste Gemiddelden)
                </p>
                <p className="text-blue-800 text-sm mb-3">
                  Er zijn {remainingSeats} restzetel
                  {remainingSeats > 1 ? "s" : ""} te verdelen. Deze
                  worden toegewezen aan de partijen met de hoogste
                  gemiddelden:
                </p>
                <div className="space-y-1">
                  {allocations
                    .filter((a) => a.restSeatAverages)
                    .sort((a, b) => b.quot - a.quot)
                    .map((allocation, index) => (
                      <p
                        key={allocation.party}
                        className="text-orange-800 text-sm"
                      >
                        {index + 1}.{" "}
                        <span className="text-orange-900">
                          {allocation.party}
                        </span>{" "}
                        - gemiddelden: {allocation.quot.toLocaleString("nl-NL", {minimumFractionDigits: 2, maximumFractionDigits: 2,})}
                      </p>
                    ))}
                </div>
              </div>
            )}
        </div>
      </div>

      {/* Combined Parliament Visualization and Interactive Calculator */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-gray-900 mb-6">Zetelverdeling Tweede Kamer (150 zetels) - Interactieve Zetelverdeling</h3>
        
        <div className="flex justify-center mb-8">
          <svg width="800" height="500" viewBox="0 0 800 600" className="max-w-full">
            {/* Parliament seats */}
            {parliamentSeats.map((seat, index) => (
              <rect
                key={index}
                x={seat.x - 6}
                y={seat.y - 6}
                width="12"
                height="12"
                fill={seat.color}
                stroke="#333"
                strokeWidth="1"
                opacity="0.9"
              >
                <title>{seat.party}</title>
              </rect>
            ))}
            
            {/* Speaker's position */}
            <rect
              x="360"
              y="520"
              width="80"
              height="40"
              fill="#8B4513"
              stroke="#333"
              strokeWidth="2"
              rx="4"
            />
            <text x="400" y="545" textAnchor="middle" fill="white" fontSize="14">
              Voorzitter
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {allocations.map((allocation) => (
            <div key={allocation.party} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: allocation.color }}
              />
              <span className="text-sm text-gray-700">
                {allocation.party} ({allocation.totalSeatsAverages})
              </span>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-gray-200 pt-6">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-700">
              Pas de stemmen aan om te zien hoe de zetels in de Tweede Kamer worden
              verdeeld. Let speciaal op de restzetels (oranje gemarkeerd)!
            </p>
            <button
              onClick={resetVotes}
              className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
            {parties.map((party, index) => (
              <div
                key={party.name}
                className="flex items-center gap-4"
              >
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: party.color }}
                />
                <label className="w-32 text-gray-700">
                  {party.name}
                </label>
                <input
                  type="number"
                  value={party.votes}
                  onChange={(e) =>
                    updateVotes(
                      index,
                      parseInt(e.target.value) || 0
                    )
                  }
                  className="w-36 px-3 py-2 border border-gray-300 rounded focus:border-orange-500 focus:outline-none"
                />
                <span className="text-gray-600 text-sm">
                  stemmen
                </span>
                <input
                type="number"
                step="0.1"
                value={totalVotes > 0 ? ((party.votes / totalVotes) * 100).toFixed(1) : 0}
                onChange={(e) =>
                  updatePercentage(
                    index,
                    parseFloat(e.target.value) || 0,
                  )
                }
                className="w-16 px-2 py-1 text-sm border border-gray-300 rounded focus:border-orange-500 focus:outline-none"
              />
              <span className="text-gray-600 text-xs flex-shrink-0">
                %
              </span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-900 mb-2">
              Totaal aantal stemmen:{" "}
              <span className="text-orange-600">
                {totalVotes.toLocaleString("nl-NL")}
              </span>
            </p>
            <p className="text-gray-900">
              Kiesdeler:{" "}
              <span className="text-orange-600">
                {electoralQuotient.toLocaleString("nl-NL", {minimumFractionDigits: 1, maximumFractionDigits: 2,})}
              </span>{" "}
              stemmen per zetel
            </p>
          </div>
        </div>
      </div>
      {/*
      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-900 mb-3">
          💡 Begrijp het systeem
        </h3>
        <div className="space-y-3 text-sm text-blue-800">
          <p>
            <span className="text-blue-900">Stap 1:</span>{" "}
            Bereken de kiesdeler door het totaal aantal stemmen
            te delen door 150 (aantal zetels in de Tweede Kamer).
          </p>
          <p>
            <span className="text-blue-900">Stap 2:</span> Deel
            het aantal stemmen per partij door de kiesdeler. Het
            gehele getal is het aantal "volle zetels" dat een
            partij krijgt.
          </p>
          <p>
            <span className="text-blue-900">Stap 3:</span> Het
            getal na de komma is het "restant". Als er nog
            zetels over zijn, krijgen de partijen met de hoogste
            restanten elk één extra zetel (een restzetel).
          </p>
          <p className="text-blue-900 mt-4">
            Probeer verschillende stemverhoudingen uit om te
            zien hoe restzetels van partij kunnen wisselen!
          </p>
        </div>
      </div>
      */}
    </div>
  );
}