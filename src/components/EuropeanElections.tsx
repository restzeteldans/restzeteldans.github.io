import { useState } from 'react';
import { Users, Calculator, Award, TrendingUp, RotateCcw } from 'lucide-react';

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
}

const partyColors: { [key: string]: string } = {
  "GL-PvdA": "#76B82A",
  PVV: "#0D3D73",
  VVD: "#0066CC",
  NSC: "#00A3CC",
  D66: "#00A94F",
  CDA: "#007B5F",
  FvD: "#8B0000",
  PvdD: "#006B2D",
  SP: "#F8423F",
  CU: "#00B0F0",
  SGP: "#FFA500",
  Volt: "#502379",
};

// 2024 European Election Results (31 seats)
const europeanElectionResults = [
  { name: "GL-PvdA", percentage: 21.2, seats: 8, votes: 1176000 },
  { name: "PVV", percentage: 17.7, seats: 6, votes: 982000 },
  { name: "VVD", percentage: 12.4, seats: 4, votes: 688000 },
  { name: "NSC", percentage: 9.7, seats: 3, votes: 538000 },
  { name: "D66", percentage: 8.6, seats: 3, votes: 477000 },
  { name: "CDA", percentage: 8.4, seats: 3, votes: 466000 },
  { name: "PvdD", percentage: 5.2, seats: 1, votes: 288000 },
  { name: "FvD", percentage: 4.8, seats: 2, votes: 266000 },
  { name: "SP", percentage: 4.2, seats: 1, votes: 233000 },
  { name: "CU", percentage: 4.7, seats: 0, votes: 261000 },
  { name: "SGP", percentage: 3.1, seats: 0, votes: 172000 },
];

export function EuropeanElections() {
  const [parties, setParties] = useState<Party[]>(() =>
    europeanElectionResults.map((result) => ({
      name: result.name,
      votes: result.votes,
      color: partyColors[result.name] || "#94a3b8",
    }))
  );

  const totalSeats = 31;
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

  const resetVotes = () => {
    setParties(
      europeanElectionResults.map((result) => ({
        name: result.name,
        votes: result.votes,
        color: partyColors[result.name] || "#94a3b8",
      }))
    );
  };

  // Generate European Parliament seats in arc
  const generateParliamentSeats = () => {
    const seats = [];
    const rows = 5; // Number of rows
    const centerX = 400;
    const centerY = 400;
    const innerRadius = 120;
    const rowSpacing = 40;

    let seatIndex = 0;

    for (let row = 0; row < rows; row++) {
      const radius = innerRadius + row * rowSpacing;
      const seatsInRow = Math.floor(4 + row * 2);
      const angleStart = Math.PI * 0.7;
      const angleEnd = Math.PI * 0.3;
      const angleStep = (angleEnd - angleStart) / (seatsInRow - 1);

      for (let i = 0; i < seatsInRow && seatIndex < 31; i++) {
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
        <h2 className="text-orange-600 mb-4">Hoe werken Europese verkiezingen?</h2>
        
        <div className="prose max-w-none">
          <p className="text-gray-700">
            Bij Europese verkiezingen worden 31 Nederlandse zetels verdeeld over de politieke partijen op basis van het aantal stemmen dat zij hebben ontvangen. Ook hier wordt een systeem van evenredige vertegenwoordiging gebruikt.
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
            Alle stemmen in Nederland worden geteld. Elke partij die minimaal één zetel haalt, krijgt zitplaatsen in het Europees Parlement.
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
            De kiesdeler wordt berekend door het totaal aantal geldige stemmen te delen door 31 (aantal Nederlandse zetels).
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
            Na de eerste verdeling blijven er vaak restzetels over. Deze worden toegewezen aan partijen met de grootste restanten.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-gray-900 mb-4">De Kiesdeler Methode</h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-900 mb-2">Stap 1: Bereken de kiesdeler</p>
            <code className="text-sm text-gray-700 block bg-white p-2 rounded">
              Kiesdeler = Totaal aantal stemmen / 31
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
              Als er na stap 2 nog zetels over zijn, worden deze toegewezen aan de partijen met de grootste restanten (het deel na de komma bij de deling door de kiesdeler).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-900 mb-3">Voorbeeld berekening</h3>
        <div className="space-y-2 text-sm">
          <p className="text-gray-700"><span className="text-gray-900">Totaal stemmen:</span> 5.500.000</p>
          <p className="text-gray-700"><span className="text-gray-900">Kiesdeler:</span> 5.500.000 / 31 = 177.419 stemmen per zetel</p>
          <p className="text-gray-700 mt-4"><span className="text-gray-900">Partij A:</span> 1.200.000 stemmen → 1.200.000 / 177.419 = 6,76 → 6 zetels + restant 0,76</p>
          <p className="text-gray-700"><span className="text-gray-900">Partij B:</span> 900.000 stemmen → 900.000 / 177.419 = 5,07 → 5 zetels + restant 0,07</p>
          <p className="text-orange-700 mt-4">Partij A heeft het hoogste restant (0,76) en krijgt daarom een extra restzetel!</p>
        </div>
      </div>

      {/* Combined Parliament Visualization and Interactive Calculator */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h3 className="text-gray-900 mb-6">Zetelverdeling Europees Parlement (31 Nederlandse zetels) - Interactieve Zetelverdeling</h3>
        
        <div className="flex justify-center mb-8">
          <svg width="800" height="450" viewBox="0 0 800 500" className="max-w-full">
            {/* Parliament seats */}
            {parliamentSeats.map((seat, index) => (
              <rect
                key={index}
                x={seat.x - 8}
                y={seat.y - 8}
                width="16"
                height="16"
                fill={seat.color}
                stroke="#333"
                strokeWidth="1"
                opacity="0.9"
                rx="2"
              >
                <title>{seat.party}</title>
              </rect>
            ))}
            
            {/* Speaker's position */}
            <rect
              x="360"
              y="420"
              width="80"
              height="35"
              fill="#8B4513"
              stroke="#333"
              strokeWidth="2"
              rx="4"
            />
            <text x="400" y="442" textAnchor="middle" fill="white" fontSize="13">
              Voorzitter
            </text>
          </svg>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
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
              Pas de stemmen aan om te zien hoe de zetels worden verdeeld. Let speciaal op de restzetels (oranje gemarkeerd)!
            </p>
            <button
              onClick={resetVotes}
              className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>

          <div className="space-y-4 mb-8">
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
                {electoralQuotient.toFixed(2)}
              </span>{" "}
              stemmen per zetel
            </p>
          </div>
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
                    ).toFixed(1)}
                    %
                  </td>
                  <td className="text-right py-3 px-2 text-gray-700">
                    {allocation.fullSeats}
                  </td>
                  <td className="text-right py-3 px-2 text-gray-700">
                    {allocation.remainder.toFixed(3)}
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

        {remainingSeats > 0 && (
          <div className="mt-6 p-4 bg-orange-50 border-2 border-orange-200 rounded-lg">
            <p className="text-orange-900 mb-2">
              🎯 Restzetels toewijzing
            </p>
            <p className="text-orange-800 text-sm mb-3">
              Er zijn {remainingSeats} restzetel
              {remainingSeats > 1 ? "en" : ""} te verdelen. Deze
              worden toegewezen aan de partijen met de hoogste
              restanten (Grootste overschot) of aan partijen die de hoogste gemiddelden behalen (Grootste gemiddelde):
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
                    - restant: {allocation.remainder.toFixed(3)}
                  </p>
                ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-900 mb-3">
          💡 Begrijp het systeem
        </h3>
        <div className="space-y-3 text-sm text-blue-800">
          <p>
            <span className="text-blue-900">Stap 1:</span>{" "}
            Bereken de kiesdeler door het totaal aantal stemmen
            te delen door 31 (aantal Nederlandse zetels in het Europees Parlement).
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
    </div>
  );
}