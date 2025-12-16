import { useState, useEffect } from "react";
import { Calculator, TrendingUp, RotateCcw } from "lucide-react";

interface Municipality {
  name: string;
  inhabitants: number;
  seats: number;
  turnout: number;
  electionResults?: {
    party: string;
    votes: number;
    seats: number;
  }[];
}

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
  restSeat: boolean;
  totalSeats: number;
  average?: number; // For largest averages method
}

const partyColors: { [key: string]: string } = {
  VVD: "#0066CC",
  D66: "#00A94F",
  PvdA: "#DC143C",
  "Partij van de Arbeid (P.v.d.A.)": "#DC143C",
  GroenLinks: "#76B82A",
  GROENLINKS: "#76B82A",
  CDA: "#007B5F",
  SP: "#F8423F",
  "SP (Socialistische Partij)": "#F8423F",
  PVV: "#0D3D73",
  "PVV (Partij voor de Vrijheid)": "#0D3D73",
  ChristenUnie: "#00B0F0",
  PvdD: "#006B2D",
  "Partij voor de Dieren": "#006B2D",
  FvD: "#8B0000",
  "Forum voor Democratie": "#8B0000",
  DENK: "#00B8C8",
  Volt: "#502379",
  BIJ1: "#FFD700",
  SGP: "#FFA500",
  "Staatkundig Gereformeerde Partij (SGP)": "#FFA500",
  JA21: "#1E3A8A",
  BBB: "#87CEEB",
  "Lokale Partij": "#f97316",
  "Lokaal Belang": "#f59e0b",
  Gemeentebelangen: "#ea580c",
  Onafhankelijk: "#94a3b8",
};

const getDefaultParties = (
  municipality: Municipality,
): Party[] => {
  const estimatedVoters = Math.floor(
    municipality.inhabitants * 0.75,
  );
  const totalVotes = Math.floor(
    estimatedVoters * (municipality.turnout / 100),
  );

  const distributions = [
    { name: "Geen verkiezingsdata", percentage: 0 },
  ];

  return distributions.map((d) => ({
    name: d.name,
    votes: Math.floor(totalVotes * d.percentage),
    color: partyColors[d.name] || "#94a3b8",
  }));
};

const convertElectionResults = (
  municipality: Municipality,
): Party[] => {
  if (!municipality.electionResults) {
    return getDefaultParties(municipality);
  }

  return municipality.electionResults.map((result) => ({
    name: result.party,
    votes: result.votes,
    color: partyColors[result.party] || "#94a3b8",
  }));
};

export function SeatCalculator({
  municipality,
}: {
  municipality: Municipality;
}) {
  const [parties, setParties] = useState<Party[]>(() =>
    convertElectionResults(municipality),
  );
  const [initialParties, setInitialParties] = useState<Party[]>(() =>
    convertElectionResults(municipality).map(p => ({ ...p }))
  );

  useEffect(() => {
    const newParties = convertElectionResults(municipality);
    setParties(newParties);
    setInitialParties(newParties.map(p => ({ ...p })));
  }, [municipality.name]);

  const totalVotes = parties.reduce(
    (sum, p) => sum + p.votes,
    0,
  );
  const electoralQuotient = totalVotes / municipality.seats;

  // Method 1: Largest Surplus (grootste overschot / Hare-Niemeyer)
  const calculateSeatsSurplus = (): SeatAllocation[] => {
    const allocations: SeatAllocation[] = parties.map(
      (party) => {
        const quotient = party.votes / electoralQuotient;
        const fullSeats = Math.floor(quotient);
        const remainder = quotient - fullSeats;

        return {
          party: party.name,
          votes: party.votes,
          color: party.color,
          fullSeats,
          remainder,
          restSeat: false,
          totalSeats: fullSeats,
        };
      },
    );

    const seatsAllocated = allocations.reduce(
      (sum, a) => sum + a.fullSeats,
      0,
    );
    const remainingSeats = municipality.seats - seatsAllocated;

    if (remainingSeats > 0) {
      const sorted = [...allocations].sort(
        (a, b) => b.remainder - a.remainder,
      );

      for (let i = 0; i < remainingSeats; i++) {
        sorted[i].restSeat = true;
        sorted[i].totalSeats += 1;
      }
    }

    return allocations.sort(
      (a, b) => b.totalSeats - a.totalSeats,
    );
  };

  // Method 2: Largest Averages (grootste gemiddelden / D'Hondt)
  const calculateSeatsAverages = (): SeatAllocation[] => {
    const allocations: SeatAllocation[] = parties.map(
      (party) => ({
        party: party.name,
        votes: party.votes,
        color: party.color,
        fullSeats: 0,
        remainder: 0,
        restSeat: false,
        totalSeats: 0,
        average: party.votes,
      }),
    );

    // Distribute all seats one by one
    for (let seat = 0; seat < municipality.seats; seat++) {
      // Find party with highest average
      let maxIndex = 0;
      let maxAverage = 0;

      allocations.forEach((allocation, index) => {
        const average = allocation.votes / (allocation.totalSeats + 1);
        if (average > maxAverage) {
          maxAverage = average;
          maxIndex = index;
        }
      });

      // Award seat to party with highest average
      allocations[maxIndex].totalSeats += 1;
      allocations[maxIndex].average = 
        allocations[maxIndex].votes / (allocations[maxIndex].totalSeats + 1);
    }

    // Calculate full seats and remainders for display
    allocations.forEach(allocation => {
      const quotient = allocation.votes / electoralQuotient;
      allocation.fullSeats = Math.floor(quotient);
      allocation.remainder = quotient - allocation.fullSeats;
      allocation.restSeat = allocation.totalSeats > allocation.fullSeats;
    });

    return allocations.sort(
      (a, b) => b.totalSeats - a.totalSeats,
    );
  };

  const allocationsSurplus = calculateSeatsSurplus();
  const allocationsAverages = calculateSeatsAverages();

  const totalAllocatedSurplus = allocationsSurplus.reduce(
    (sum, a) => sum + a.totalSeats,
    0,
  );
  const remainingSeatsSurplus =
    municipality.seats -
    allocationsSurplus.reduce((sum, a) => sum + a.fullSeats, 0);

  const totalAllocatedAverages = allocationsAverages.reduce(
    (sum, a) => sum + a.totalSeats,
    0,
  );
  const remainingSeatsAverages =
    municipality.seats -
    allocationsAverages.reduce((sum, a) => sum + a.fullSeats, 0);

  // Determine which method is used based on seat count
  const usesLargestSurplus = municipality.seats < 19;
  const primaryAllocations = usesLargestSurplus ? allocationsSurplus : allocationsAverages;
  const primaryMethod = usesLargestSurplus ? "Grootste Overschot (Hare-Niemeyer)" : "Grootste Gemiddelden (D'Hondt)";

    const updateVotes = (index: number, votes: number) => {
      setParties(prev =>
        prev.map((p, i) =>
          i === index ? { ...p, votes: Math.max(0, votes) } : p
        )
      );
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
      setParties(initialParties.map(p => ({ ...p })));
    };

  return (
    <div className="space-y-6">
      {/* Combined Methods Box */}
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
                <th className="text-right py-3 px-2 text-blue-700">
                  Restzetel:<br/>Grootste gemiddelde
                </th>
                <th className="text-right py-3 px-2 text-gray-900">
                  Totaal zetels<br/>(Grootste gemiddelde)
                </th>
              </tr>
            </thead>
            <tbody>
              {allocationsSurplus.map((allocation, index) => {
                const avgAllocation = allocationsAverages.find(a => a.party === allocation.party);
                return (
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
                      {allocation.restSeat ? (
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-sm">
                          +1
                        </span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="text-right py-3 px-2">
                      <span className="text-gray-900">
                        {allocation.totalSeats}
                      </span>
                    </td>
                    <td className="text-right py-3 px-2">
                      {avgAllocation?.restSeat ? (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">
                          +{avgAllocation.totalSeats - avgAllocation.fullSeats}
                        </span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="text-right py-3 px-2">
                      <span className="text-gray-900">
                        {avgAllocation?.totalSeats || 0}
                      </span>
                    </td>
                  </tr>
                );
              })}
              <tr className="border-t-2 border-gray-300">
                <td
                  colSpan={5}
                  className="py-3 px-2 text-gray-900"
                >
                  Totaal
                </td>
                <td className="text-right py-3 px-2 text-gray-900">
                  {remainingSeatsSurplus} restzetels
                </td>
                <td className="text-right py-3 px-2 text-orange-600">
                  {totalAllocatedSurplus}
                </td>
                <td className="text-right py-3 px-2 text-gray-900">
                  {remainingSeatsAverages} restzetels
                </td>
                <td className="text-right py-3 px-2 text-blue-600">
                  {totalAllocatedAverages}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {(remainingSeatsSurplus > 0 || remainingSeatsAverages > 0) && (
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {remainingSeatsSurplus > 0 && (
              <div className="p-4 bg-orange-50 border-2 border-orange-200 rounded-lg">
                <p className="text-orange-900 mb-2">
                  🎯 Restzetels toewijzing (Grootste Overschot)
                </p>
                <p className="text-orange-800 text-sm mb-3">
                  Er zijn {remainingSeatsSurplus} restzetel
                  {remainingSeatsSurplus > 1 ? "en" : ""} te verdelen. Deze
                  worden toegewezen aan de partijen met de hoogste
                  restanten:
                </p>
                <div className="space-y-1">
                  {allocationsSurplus
                    .filter((a) => a.restSeat)
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

            {remainingSeatsAverages > 0 && (
              <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <p className="text-blue-900 mb-2">
                  🎯 Restzetels toewijzing (Grootste Gemiddelden)
                </p>
                <p className="text-blue-800 text-sm mb-3">
                  Er zijn {remainingSeatsAverages} restzetel
                  {remainingSeatsAverages > 1 ? "en" : ""} te verdelen. Deze
                  worden toegewezen aan de partijen met de hoogste
                  gemiddelden:
                </p>
                <div className="space-y-1">
                  {allocationsAverages
                    .filter((a) => a.restSeat)
                    .sort((a, b) => b.average - a.average)
                    .map((allocation, index) => (
                      <p
                        key={allocation.party}
                        className="text-orange-800 text-sm"
                      >
                        {index + 1}.{" "}
                        <span className="text-orange-900">
                          {allocation.party}
                        </span>{" "}
                        - gemiddelden: {allocation.average.toLocaleString("nl-NL", {minimumFractionDigits: 2, maximumFractionDigits: 2,})}
                      </p>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Interactive Calculator */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Calculator className="w-6 h-6 text-orange-600" />
            <h3 className="text-gray-900">
              Interactieve Zetelverdeling
            </h3>
          </div>
          <button
            onClick={resetVotes}
            className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>

        <p className="text-gray-700 mb-6">
          Pas de stemmen aan om te zien hoe de zetels worden
          verdeeld volgens beide methoden. Let speciaal op het verschil in restzetelverdeling!
        </p>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
          {parties.map((party, index) => (
            <div
              key={party.name}
              className="flex items-center gap-3"
            >
              <div
                className="w-4 h-4 rounded flex-shrink-0"
                style={{ backgroundColor: party.color }}
              />
              <label className="w-32 text-gray-700 text-sm flex-shrink-0">
                {party.name}
              </label>
              <input
                type="number"
                value={party.votes}
                onChange={(e) =>
                  updateVotes(
                    index,
                    parseInt(e.target.value) || 0,
                  )
                }
                className="w-28 px-2 py-1 text-sm border border-gray-300 rounded focus:border-orange-500 focus:outline-none"
              />
              <span className="text-gray-600 text-xs flex-shrink-0">
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

        <div className="p-4 bg-gray-50 rounded-lg mb-6">
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

      {/* Comparison */}
      <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
        <h3 className="text-purple-900 mb-4">
          🔍 Vergelijking van de methoden
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-purple-800 mb-2">Grootste Overschot</h4>
            <div className="space-y-1">
              {allocationsSurplus.map((allocation) => (
                <div key={allocation.party} className="flex justify-between text-sm">
                  <span className="text-purple-900">{allocation.party}</span>
                  <span className="text-purple-700 font-semibold">{allocation.totalSeats} zetels</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-purple-800 mb-2">Grootste Gemiddelden</h4>
            <div className="space-y-1">
              {allocationsAverages.map((allocation) => (
                <div key={allocation.party} className="flex justify-between text-sm">
                  <span className="text-purple-900">{allocation.party}</span>
                  <span className="text-purple-700 font-semibold">{allocation.totalSeats} zetels</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {JSON.stringify(allocationsSurplus.map(a => a.totalSeats)) !== 
         JSON.stringify(allocationsAverages.map(a => a.totalSeats)) && (
          <div className="mt-4 p-3 bg-purple-100 rounded">
            <p className="text-purple-900 text-sm">
              ⚠️ <strong>Let op:</strong> De twee methoden geven verschillende resultaten! 
              Dit laat zien waarom de keuze voor een bepaalde methode belangrijk is.
            </p>
          </div>
        )}
      </div>

      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
        <h3 className="text-blue-900 mb-3">
          💡 Begrijp de systemen
        </h3>
        <div className="space-y-4 text-sm text-blue-800">
          <div>
            <h4 className="text-blue-900 mb-2">Methode 1: Grootste Overschot</h4>
            <p className="mb-2">
              <span className="text-blue-900">Stap 1:</span>{" "}
              Bereken de kiesdeler door het totaal aantal stemmen
              te delen door {municipality.seats} (aantal zetels in{" "}
              {municipality.name}).
            </p>
            <p className="mb-2">
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
          </div>
          
          <div className="border-t border-blue-300 pt-4">
            <h4 className="text-blue-900 mb-2">Methode 2: Grootste Gemiddelden</h4>
            <p className="mb-2">
              Bij deze methode worden alle {municipality.seats} zetels één voor één verdeeld.
            </p>
            <p className="mb-2">
              Voor elke zetel wordt berekend: stemmen / (reeds toegewezen zetels + 1).
            </p>
            <p>
              De partij met het hoogste gemiddelde krijgt de zetel. Dit bevordert grotere partijen.
            </p>
          </div>
          
          <p className="text-blue-900 mt-4 pt-4 border-t border-blue-300">
            Probeer verschillende stemverhoudingen uit om te
            zien hoe de methoden verschillend uitpakken!
          </p>
        </div>
      </div>
    </div>
  );
}
