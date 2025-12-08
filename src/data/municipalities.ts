export interface Municipality {
  name: string;
  inhabitants: number;
  seats: number;
  turnout: number;
  province: string;
  x?: number; // Map coordinates (0-100)
  y?: number; // Map coordinates (0-100)
  electionResults?: {
    party: string;
    votes: number;
    seats: number;
  }[];
}

export const municipalities: Municipality[] = [
  { name: 'Aa en Hunze', inhabitants: 25327, seats: 19, turnout: 55.2, province: 'Drenthe', x: 67, y: 28, electionResults: [
        { party: 'Gemeentebelangen Aa en Hunze', votes: 4983, seats: 0 },
        { party: 'VVD', votes: 2150, seats: 0 },
        { party: 'GROENLINKS', votes: 1941, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1886, seats: 0 },
        { party: 'D66', votes: 1076, seats: 0 },
        { party: 'CDA', votes: 934, seats: 0 }
    ]
  },
  { name: 'Aalsmeer', inhabitants: 31857, seats: 21, turnout: 52.1, province: 'Noord-Holland', x: 48, y: 39, electionResults: [
        { party: 'Absoluut Aalsmeer', votes: 3428, seats: 0 },
        { party: 'CDA', votes: 3054, seats: 0 },
        { party: 'VVD', votes: 2754, seats: 0 },
        { party: 'D66', votes: 1635, seats: 0 },
        { party: 'GROENLINKS', votes: 1011, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 833, seats: 0 }
    ]
  },
  { name: 'Aalten', inhabitants: 27117, seats: 21, turnout: 58.3, province: 'Gelderland', x: 66, y: 52, electionResults: [
        { party: 'CDA', votes: 3788, seats: 0 },
        { party: 'GemeenteBelangen', votes: 2530, seats: 0 },
        { party: 'BBB - HMV', votes: 2347, seats: 0 },
        { party: 'Progressieve Partij', votes: 1597, seats: 0 },
        { party: 'VVD', votes: 1087, seats: 0 },
        { party: 'D66', votes: 1019, seats: 0 },
        { party: 'ChristenUnie', votes: 686, seats: 0 }
    ]
  },
  { name: 'Achtkarspelen', inhabitants: 27836, seats: 21, turnout: 56.7, province: 'Friesland', x: 62, y: 21, electionResults: [
        { party: 'CDA', votes: 2689, seats: 0 },
        { party: 'FNP', votes: 2109, seats: 0 },
        { party: 'ChristenUnie', votes: 1706, seats: 0 },
        { party: 'GBA', votes: 1703, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1103, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 839, seats: 0 },
        { party: 'Forum voor Democratie', votes: 674, seats: 0 },
        { party: 'GROENLINKS', votes: 580, seats: 0 },
        { party: 'VVD', votes: 433, seats: 0 }
    ]
  },
  { name: 'Alblasserdam', inhabitants: 20165, seats: 17, turnout: 48.9, province: 'Zuid-Holland', x: 50, y: 50, electionResults: [
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 2243, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1552, seats: 0 },
        { party: 'VVD', votes: 1413, seats: 0 },
        { party: 'CDA', votes: 1369, seats: 0 },
        { party: 'D66', votes: 1227, seats: 0 },
        { party: 'ChristenUnie', votes: 890, seats: 0 }
    ]
  },
  { name: 'Albrandswaard', inhabitants: 25740, seats: 19, turnout: 51.3, province: 'Zuid-Holland', x: 48, y: 49, electionResults: [
        { party: 'Echt voor Albrandswaard (EVA)', votes: 2482, seats: 0 },
        { party: 'VVD', votes: 2030, seats: 0 },
        { party: 'Stem-Lokaal', votes: 1452, seats: 0 },
        { party: 'GROENLINKS / Partij van de Arbeid (P.v.d.A.)', votes: 1359, seats: 0 },
        { party: 'CDA', votes: 1272, seats: 0 },
        { party: 'Leefbaar Albrandswaard', votes: 684, seats: 0 },
        { party: 'Nieuwe Albrandswaardse Partij (NAP)', votes: 643, seats: 0 }
    ]
  },
  { name: 'Alkmaar', inhabitants: 109896, seats: 39, turnout: 52.8, province: 'Noord-Holland', x: 48, y: 28, electionResults: [
        { party: 'D66', votes: 5272, seats: 0 },
        { party: 'Onafhankelijke Partij Alkmaar (OPA)', votes: 5141, seats: 0 },
        { party: 'GROENLINKS', votes: 5098, seats: 0 },
        { party: 'B.A.S.', votes: 5002, seats: 0 },
        { party: 'VVD', votes: 4488, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 3917, seats: 0 },
        { party: 'CDA', votes: 3453, seats: 0 },
        { party: 'Leefbaar Alkmaar', votes: 3028, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 2766, seats: 0 },
        { party: 'SeniorenPartij Alkmaar (SPA) ouderen', votes: 2640, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1721, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1540, seats: 0 },
        { party: 'ChristenUnie', votes: 1230, seats: 0 },
        { party: 'Progressief Alkmaar', votes: 448, seats: 0 },
        { party: 'Hart voor Vrijheid', votes: 391, seats: 0 }
    ]
  },
  { name: 'Almelo', inhabitants: 72725, seats: 33, turnout: 49.2, province: 'Overijssel', x: 68, y: 45, electionResults: [
        { party: 'VVD', votes: 3335, seats: 0 },
        { party: 'Lokaal Almelo Samen', votes: 3311, seats: 0 },
        { party: 'CDA', votes: 3266, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2057, seats: 0 },
        { party: 'D66', votes: 1897, seats: 0 },
        { party: 'ChristenUnie', votes: 1760, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 1359, seats: 0 },
        { party: 'Partij Vrij Almelo (PVA)', votes: 1271, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1239, seats: 0 },
        { party: 'Almelo Centraal', votes: 1154, seats: 0 },
        { party: 'GROENLINKS', votes: 1125, seats: 0 },
        { party: 'Blanco (Çete, U.)', votes: 991, seats: 0 },
        { party: 'Forum voor Democratie', votes: 766, seats: 0 },
        { party: 'Leefbaar Almelo', votes: 750, seats: 0 },
        { party: 'Democraten.Nu Almelo', votes: 691, seats: 0 },
        { party: 'Forum voor Rechts', votes: 368, seats: 0 }
    ]
  },
  { name: 'Almere', inhabitants: 218096, seats: 39, turnout: 47.2, province: 'Flevoland', x: 54, y: 37, electionResults: [
        { party: 'VVD', votes: 8561, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 6324, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 6236, seats: 0 },
        { party: 'D66', votes: 5482, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 5346, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 4944, seats: 0 },
        { party: 'GROENLINKS', votes: 4912, seats: 0 },
        { party: 'Leefbaar Almere', votes: 3892, seats: 0 },
        { party: 'BIJ1', votes: 3223, seats: 0 },
        { party: 'ChristenUnie', votes: 3073, seats: 0 },
        { party: '50PLUS', votes: 3071, seats: 0 },
        { party: 'Forum voor Democratie', votes: 2611, seats: 0 },
        { party: 'CDA', votes: 2540, seats: 0 },
        { party: 'DENK', votes: 2033, seats: 0 },
        { party: 'AP/OPA', votes: 1505, seats: 0 },
        { party: 'Respect Almere', votes: 1262, seats: 0 }
    ]
  },
  { name: 'Alphen aan den Rijn', inhabitants: 112587, seats: 39, turnout: 51.4, province: 'Zuid-Holland', x: 48, y: 44, electionResults: [
        { party: 'Nieuw Elan', votes: 9005, seats: 0 },
        { party: 'GROENLINKS', votes: 6467, seats: 0 },
        { party: 'VVD', votes: 6392, seats: 0 },
        { party: 'CDA', votes: 5404, seats: 0 },
        { party: 'D66', votes: 4812, seats: 0 },
        { party: 'RijnGouweLokaal (RGL)', votes: 3209, seats: 0 },
        { party: 'ChristenUnie', votes: 2993, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2335, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2193, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1940, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1712, seats: 0 },
        { party: 'Beter Alphen', votes: 1322, seats: 0 }
    ]
  },
  { name: 'Alphen-Chaam', inhabitants: 10304, seats: 13, turnout: 60.2, province: 'Noord-Brabant', x: 50, y: 59, electionResults: [
        { party: 'Gemeenschaps Belangen Alphen (GBA)', votes: 1449, seats: 0 },
        { party: 'GBSV', votes: 1295, seats: 0 },
        { party: 'CDA', votes: 929, seats: 0 },
        { party: 'VVD', votes: 600, seats: 0 },
        { party: 'Gemeentebelangen GSU', votes: 567, seats: 0 },
        { party: 'D66', votes: 430, seats: 0 }
    ]
  },
  { name: 'Altena', inhabitants: 55980, seats: 29, turnout: 56.8, province: 'Noord-Brabant', x: 51, y: 54, electionResults: [
        { party: 'CDA', votes: 5850, seats: 0 },
        { party: 'AltenaLokaal', votes: 4899, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 4005, seats: 0 },
        { party: 'Progressief Altena', votes: 3562, seats: 0 },
        { party: 'ChristenUnie', votes: 2939, seats: 0 },
        { party: 'VVD', votes: 2148, seats: 0 },
        { party: 'Vrije Volkspartij Altena', votes: 1626, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 237, seats: 0 }
    ]
  },
  { name: 'Ameland', inhabitants: 3718, seats: 11, turnout: 62.4, province: 'Friesland', x: 57, y: 14, electionResults: [
        { party: 'AmelandEén', votes: 787, seats: 0 },
        { party: 'Algemeen Belang Ameland', votes: 503, seats: 0 },
        { party: 'CDA', votes: 257, seats: 0 },
        { party: 'Ameland ', votes: 238, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 214, seats: 0 },
        { party: 'VVD', votes: 160, seats: 0 }
    ]
  },
  { name: 'Amersfoort', inhabitants: 159896, seats: 39, turnout: 55.4, province: 'Utrecht', x: 56, y: 43, electionResults: [
        { party: 'D66', votes: 9720, seats: 0 },
        { party: 'GROENLINKS', votes: 8849, seats: 0 },
        { party: 'CDA', votes: 7943, seats: 0 },
        { party: 'ChristenUnie', votes: 7305, seats: 0 },
        { party: 'VVD', votes: 7208, seats: 0 },
        { party: 'Amersfoort2014', votes: 6426, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 4397, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 4049, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 3048, seats: 0 },
        { party: 'Lijst Noëlle Sanders', votes: 2708, seats: 0 },
        { party: 'Burger Partij Amersfoort (BPA)', votes: 2378, seats: 0 },
        { party: 'Blanco (van Lamoen, T.J.)', votes: 2336, seats: 0 },
        { party: 'DENK', votes: 2065, seats: 0 },
        { party: 'ZWARTE PIET IS ZWART', votes: 394, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 196, seats: 0 }
    ]
  },
  { name: 'Amstelveen', inhabitants: 91691, seats: 35, turnout: 54.6, province: 'Noord-Holland', x: 51, y: 40, electionResults: [
        { party: 'VVD', votes: 7107, seats: 0 },
        { party: 'D66', votes: 6042, seats: 0 },
        { party: 'BURGERBELANGEN AMSTELVEEN', votes: 4362, seats: 0 },
        { party: 'GROENLINKS', votes: 4036, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 3077, seats: 0 },
        { party: 'Actief voor Amstelveen', votes: 1968, seats: 0 },
        { party: 'Goed voor Amstelveen', votes: 1756, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1656, seats: 0 },
        { party: 'CDA', votes: 1335, seats: 0 },
        { party: '50PLUS', votes: 1120, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 1071, seats: 0 },
        { party: 'ChristenUnie', votes: 879, seats: 0 }
    ]
  },
  { name: 'Amsterdam', inhabitants: 921402, seats: 45, turnout: 54.2, province: 'Noord-Holland', x: 52, y: 38, electionResults: [
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 57093, seats: 0 },
        { party: 'GROENLINKS', votes: 48096, seats: 0 },
        { party: 'D66', votes: 44732, seats: 0 },
        { party: 'VVD', votes: 34180, seats: 0 },
        { party: 'Amsterdam BIJ1', votes: 22623, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 22031, seats: 0 },
        { party: 'Volt', votes: 14043, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 14036, seats: 0 },
        { party: 'JA21', votes: 13691, seats: 0 },
        { party: 'DENK', votes: 13039, seats: 0 },
        { party: 'CDA', votes: 8270, seats: 0 },
        { party: 'Forum voor Democratie', votes: 6688, seats: 0 },
        { party: 'Partij van de Ouderen (P.v.d.O.)', votes: 5378, seats: 0 },
        { party: 'ChristenUnie', votes: 4823, seats: 0 },
        { party: 'De Groenen Basis Piraten', votes: 4663, seats: 0 },
        { party: 'Hart voor Vrijheid Amsterdam', votes: 2399, seats: 0 },
        { party: '50PLUS', votes: 1997, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 1756, seats: 0 },
        { party: 'St3m', votes: 1617, seats: 0 },
        { party: 'Democratisch Socialisten Amsterdam', votes: 1472, seats: 0 },
        { party: 'LEF - Voor de Nieuwe Generatie', votes: 848, seats: 0 },
        { party: 'DE FEESTPARTIJ (DFP)', votes: 421, seats: 0 },
        { party: 'Blanco (Chan, K.K.)', votes: 346, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 300, seats: 0 },
        { party: 'GO', votes: 219, seats: 0 },
        { party: 'De Republikeinse Politieke Partij', votes: 108, seats: 0 }
    ]
  },
  { name: 'Apeldoorn', inhabitants: 165525, seats: 39, turnout: 54.6, province: 'Gelderland', x: 62, y: 42, electionResults: [
        { party: 'VVD', votes: 9132, seats: 0 },
        { party: 'Lokaal Apeldoorn', votes: 8747, seats: 0 },
        { party: 'GROENLINKS', votes: 5893, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 5769, seats: 0 },
        { party: 'ChristenUnie', votes: 5753, seats: 0 },
        { party: 'D66', votes: 5033, seats: 0 },
        { party: 'GB Apeldoorn (GemeenteBelangen)', votes: 4275, seats: 0 },
        { party: 'CDA', votes: 3718, seats: 0 },
        { party: 'WijApeldoorn', votes: 3673, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 3635, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 3627, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 3584, seats: 0 },
        { party: 'Forum voor Democratie', votes: 2443, seats: 0 },
        { party: '50PLUS', votes: 1914, seats: 0 },
        { party: 'DENK', votes: 1169, seats: 0 }
    ]
  },
  { name: 'Arnhem', inhabitants: 161368, seats: 39, turnout: 52.7, province: 'Gelderland', x: 60, y: 48, electionResults: [
        { party: 'GROENLINKS', votes: 9153, seats: 0 },
        { party: 'D66', votes: 7413, seats: 0 },
        { party: 'VVD', votes: 6527, seats: 0 },
        { party: 'Arnhem Centraal', votes: 6465, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 5157, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 4582, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 3843, seats: 0 },
        { party: 'CDA', votes: 3420, seats: 0 },
        { party: 'Volt', votes: 3040, seats: 0 },
        { party: 'DENK', votes: 2649, seats: 0 },
        { party: 'Arnhemse Ouderen Partij', votes: 2390, seats: 0 },
        { party: 'ChristenUnie', votes: 2337, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 1683, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1566, seats: 0 },
        { party: 'Nederlandse Volks-Unie', votes: 189, seats: 0 },
        { party: 'JenO - De Partij voor Jong en Oud', votes: 143, seats: 0 }
    ]
  },
  { name: 'Assen', inhabitants: 68606, seats: 31, turnout: 53.8, province: 'Drenthe', x: 67, y: 26, electionResults: [
        { party: 'Stadspartij PLOP', votes: 4278, seats: 0 },
        { party: 'ChristenUnie', votes: 3991, seats: 0 },
        { party: 'ASSEN CENTRAAL', votes: 3962, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2703, seats: 0 },
        { party: 'VVD', votes: 2551, seats: 0 },
        { party: 'GROENLINKS', votes: 2434, seats: 0 },
        { party: 'D66', votes: 2357, seats: 0 },
        { party: 'CDA', votes: 2175, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2008, seats: 0 },
        { party: '50PLUS', votes: 1665, seats: 0 }
    ]
  },
  { name: 'Asten', inhabitants: 16880, seats: 15, turnout: 57.9, province: 'Noord-Brabant', x: 58, y: 63, electionResults: [
        { party: 'CDA', votes: 2485, seats: 0 },
        { party: 'Samen voor Asten', votes: 2097, seats: 0 },
        { party: 'Algemeen Belang', votes: 1910, seats: 0 },
        { party: 'PGA', votes: 878, seats: 0 },
        { party: 'VVD', votes: 484, seats: 0 }
    ]
  },
  { name: 'Baarle-Nassau', inhabitants: 6860, seats: 11, turnout: 61.3, province: 'Noord-Brabant', x: 50, y: 61, electionResults: [
        { party: 'BAARLE !', votes: 899, seats: 0 },
        { party: 'CDA', votes: 834, seats: 0 },
        { party: 'Vooruitstrevende Partij Baarle (VPB)', votes: 642, seats: 0 },
        { party: 'Fractie Ulicoten', votes: 575, seats: 0 }
    ]
  },
  { name: 'Baarn', inhabitants: 24814, seats: 19, turnout: 58.2, province: 'Utrecht', x: 55, y: 41, electionResults: [
        { party: 'VoorBaarn', votes: 2982, seats: 0 },
        { party: 'VVD', votes: 1880, seats: 0 },
        { party: 'GROENLINKS', votes: 1812, seats: 0 },
        { party: 'D66', votes: 1384, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1240, seats: 0 },
        { party: 'CDA', votes: 1164, seats: 0 },
        { party: '50PLUS', votes: 957, seats: 0 },
        { party: 'ChristenUnie', votes: 544, seats: 0 }
    ]
  },
  { name: 'Barendrecht', inhabitants: 48713, seats: 27, turnout: 52.6, province: 'Zuid-Holland', x: 49, y: 49, electionResults: [
        { party: 'EVB (Echt voor Barendrecht)', votes: 12813, seats: 0 },
        { party: 'SGP-ChristenUnie', votes: 2010, seats: 0 },
        { party: 'CDA', votes: 1480, seats: 0 },
        { party: 'VVD', votes: 1263, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1205, seats: 0 },
        { party: 'GROENLINKS', votes: 1178, seats: 0 },
        { party: 'D66', votes: 1024, seats: 0 },
        { party: 'Wij Barendrecht', votes: 541, seats: 0 }
    ]
  },
  { name: 'Barneveld', inhabitants: 59077, seats: 29, turnout: 62.1, province: 'Gelderland', x: 58, y: 44, electionResults: [
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 8612, seats: 0 },
        { party: 'Lokaal Belang', votes: 5974, seats: 0 },
        { party: 'ChristenUnie', votes: 4801, seats: 0 },
        { party: 'Pro', votes: 4043, seats: 0 },
        { party: 'CDA', votes: 3695, seats: 0 },
        { party: 'VVD', votes: 2051, seats: 0 },
        { party: 'Burger Initiatief', votes: 837, seats: 0 }
    ]
  },
  { name: 'Beek', inhabitants: 15762, seats: 15, turnout: 53.4, province: 'Limburg', x: 59, y: 75, electionResults: [
        { party: 'CDA', votes: 2452, seats: 0 },
        { party: 'BBB-NDB', votes: 1825, seats: 0 },
        { party: 'Progressief Beek', votes: 1715, seats: 0 },
        { party: 'Belang van Beek', votes: 646, seats: 0 },
        { party: 'VVD', votes: 519, seats: 0 },
        { party: 'Sociaal Belang Beek', votes: 296, seats: 0 }
    ]
  },
  { name: 'Beekdaelen', inhabitants: 35976, seats: 23, turnout: 54.7, province: 'Limburg', x: 60, y: 77, electionResults: [
        { party: 'Vernieuwingsgroep', votes: 4013, seats: 0 },
        { party: 'Beekdaelen Lokaal', votes: 3409, seats: 0 },
        { party: 'CDA', votes: 3187, seats: 0 },
        { party: 'GROENLINKS', votes: 1815, seats: 0 },
        { party: 'VVD', votes: 1702, seats: 0 },
        { party: 'D66', votes: 871, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 676, seats: 0 }
    ]
  },
  { name: 'Beesel', inhabitants: 13483, seats: 15, turnout: 59.2, province: 'Limburg', x: 63, y: 65, electionResults: [
        { party: 'CDA', votes: 1855, seats: 0 },
        { party: 'V.L.P.', votes: 1338, seats: 0 },
        { party: 'Samen Verder Beesel', votes: 1130, seats: 0 },
        { party: 'Beeselse Lijst', votes: 862, seats: 0 }
    ]
  },
  { name: 'Berg en Dal', inhabitants: 34990, seats: 23, turnout: 58.9, province: 'Gelderland', x: 61, y: 52, electionResults: [
        { party: 'Kernachtig Groesbeek', votes: 4167, seats: 0 },
        { party: 'LOKAAL! Berg en Dal', votes: 4088, seats: 0 },
        { party: 'CDA', votes: 2203, seats: 0 },
        { party: 'GROENLINKS', votes: 1967, seats: 0 },
        { party: 'D66', votes: 1902, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1186, seats: 0 },
        { party: 'VVD', votes: 954, seats: 0 }
    ]
  },
  { name: 'Bergeijk', inhabitants: 18503, seats: 17, turnout: 60.4, province: 'Noord-Brabant', x: 56, y: 65, electionResults: [
        { party: 'CDA', votes: 3594, seats: 0 },
        { party: 'Lokale Partij Bergeijk', votes: 2345, seats: 0 },
        { party: 'GROENLINKS / Partij van de Arbeid', votes: 1738, seats: 0 },
        { party: 'VVD', votes: 1176, seats: 0 }
    ]
  },
  { name: 'Bergen (L.)', inhabitants: 13085, seats: 15, turnout: 56.8, province: 'Limburg', x: 63, y: 63, electionResults: [
        { party: 'CDA', votes: 1488, seats: 0 },
        { party: 'Progressieve Kombinatie Bergen (L)', votes: 1226, seats: 0 },
        { party: 'KERN', votes: 1206, seats: 0 },
        { party: 'Dorpsbelangen Bergen (Limburg)', votes: 916, seats: 0 },
        { party: 'VVD', votes: 502, seats: 0 }
    ]
  },
  { name: 'Bergen (NH.)', inhabitants: 29974, seats: 21, turnout: 55.1, province: 'Noord-Holland', x: 49, y: 30, electionResults: [
        { party: 'ONS DORP', votes: 3504, seats: 0 },
        { party: 'KIES Lokaal', votes: 2637, seats: 0 },
        { party: 'CDA', votes: 2429, seats: 0 },
        { party: 'GROENLINKS', votes: 2100, seats: 0 },
        { party: 'VVD', votes: 1923, seats: 0 },
        { party: 'D66', votes: 1383, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1268, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 251, seats: 0 }
    ]
  },
  { name: 'Berkelland', inhabitants: 43527, seats: 25, turnout: 59.3, province: 'Gelderland', x: 67, y: 50, electionResults: [
        { party: 'CDA', votes: 4826, seats: 0 },
        { party: 'OBL (Ondernemend Berkelland)', votes: 3984, seats: 0 },
        { party: 'D66', votes: 3482, seats: 0 },
        { party: 'VVD', votes: 2541, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2156, seats: 0 },
        { party: 'Gemeentebelangen Berkelland', votes: 2071, seats: 0 },
        { party: 'GROENLINKS', votes: 1433, seats: 0 },
        { party: 'Berkellandse Burgerpartij', votes: 1363, seats: 0 }
    ]
  },
  { name: 'Bernheze', inhabitants: 31247, seats: 21, turnout: 58.6, province: 'Noord-Brabant', x: 56, y: 57, electionResults: [
        { party: 'CDA', votes: 3633, seats: 0 },
        { party: 'Lokaal', votes: 2940, seats: 0 },
        { party: 'D66', votes: 1575, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1551, seats: 0 },
        { party: 'Progressief Bernheze', votes: 1284, seats: 0 },
        { party: 'VVD', votes: 1132, seats: 0 },
        { party: '50PLUS', votes: 777, seats: 0 }
    ]
  },
  { name: 'Best', inhabitants: 29985, seats: 21, turnout: 56.2, province: 'Noord-Brabant', x: 56, y: 63, electionResults: [
        { party: 'VVD', votes: 2151, seats: 0 },
        { party: 'D66', votes: 1848, seats: 0 },
        { party: 'Jongerenpartij JO', votes: 1724, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 1573, seats: 0 },
        { party: 'Best Open', votes: 1531, seats: 0 },
        { party: 'CDA', votes: 1512, seats: 0 },
        { party: 'Gemeentebelangen Best', votes: 846, seats: 0 },
        { party: 'ChristenUnie', votes: 574, seats: 0 }
    ]
  },
  { name: 'Beuningen', inhabitants: 25983, seats: 19, turnout: 57.4, province: 'Gelderland', x: 60, y: 50, electionResults: [
        { party: 'Beuningen Nu & Morgen', votes: 2924, seats: 0 },
        { party: 'VVD', votes: 1936, seats: 0 },
        { party: 'D66', votes: 1547, seats: 0 },
        { party: 'CDA', votes: 1473, seats: 0 },
        { party: 'GROENLINKS', votes: 1183, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1025, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 510, seats: 0 }
    ]
  },
  { name: 'Beverwijk', inhabitants: 41613, seats: 25, turnout: 50.3, province: 'Noord-Holland', x: 49, y: 35, electionResults: [
        { party: 'Samen Lokaal Beverwijk (SLB)', votes: 3967, seats: 0 },
        { party: 'D66', votes: 2015, seats: 0 },
        { party: 'VVD', votes: 1954, seats: 0 },
        { party: 'GROENLINKS', votes: 1694, seats: 0 },
        { party: 'VRIJ !', votes: 1488, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1370, seats: 0 },
        { party: 'CDA', votes: 940, seats: 0 },
        { party: 'Forum voor Democratie', votes: 826, seats: 0 },
        { party: 'Democraten Beverwijk', votes: 443, seats: 0 }
    ]
  },
  { name: 'Bladel', inhabitants: 20395, seats: 17, turnout: 59.7, province: 'Noord-Brabant', x: 55, y: 64, electionResults: [
        { party: 'Bladel Transparant (BT)', votes: 3533, seats: 0 },
        { party: 'CDA', votes: 1782, seats: 0 },
        { party: 'VHP', votes: 1769, seats: 0 },
        { party: 'PRO5', votes: 1235, seats: 0 },
        { party: 'VVD', votes: 453, seats: 0 },
        { party: 'D66', votes: 391, seats: 0 }
    ]
  },
  { name: 'Blaricum', inhabitants: 11536, seats: 13, turnout: 60.8, province: 'Noord-Holland', x: 54, y: 39, electionResults: [
        { party: 'Hart voor Blaricum', votes: 2218, seats: 0 },
        { party: 'VVD', votes: 1107, seats: 0 },
        { party: 'D66', votes: 636, seats: 0 },
        { party: 'De Blaricumse Partij', votes: 620, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)/GROENLINKS', votes: 450, seats: 0 },
        { party: 'CDA', votes: 438, seats: 0 }
    ]
  },
  { name: 'Bloemendaal', inhabitants: 23570, seats: 19, turnout: 58.4, province: 'Noord-Holland', x: 48, y: 36, electionResults: [
        { party: 'VVD', votes: 2712, seats: 0 },
        { party: 'D66', votes: 2212, seats: 0 },
        { party: 'Hart voor Bloemendaal', votes: 1832, seats: 0 },
        { party: 'GROENLINKS', votes: 1738, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1048, seats: 0 },
        { party: 'CDA', votes: 949, seats: 0 },
        { party: 'Liberaal Bloemendaal', votes: 793, seats: 0 },
        { party: 'Zelfstandig Bloemendaal', votes: 716, seats: 0 },
        { party: 'Vrijzinnig Democratisch Bloemendaal', votes: 164, seats: 0 }
    ]
  },
  { name: 'Bodegraven-Reeuwijk', inhabitants: 34869, seats: 23, turnout: 54.2, province: 'Zuid-Holland', x: 49, y: 45, electionResults: [
        { party: 'CDA', votes: 2957, seats: 0 },
        { party: 'VVD', votes: 2287, seats: 0 },
        { party: 'Burgerbelangen Bodegraven-Reeuwijk', votes: 2195, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1989, seats: 0 },
        { party: 'Lokaal Liberaal Bodegraven-Reeuwijk', votes: 1572, seats: 0 },
        { party: 'ChristenUnie', votes: 1427, seats: 0 },
        { party: 'GROENLINKS', votes: 1080, seats: 0 },
        { party: 'D66', votes: 1076, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 814, seats: 0 },
        { party: 'mijnklimaatpartij', votes: 432, seats: 0 }
    ]
  },
  { name: 'Boekel', inhabitants: 10784, seats: 13, turnout: 59.8, province: 'Noord-Brabant', x: 57, y: 59, electionResults: [
        { party: 'D.O.P.', votes: 1536, seats: 0 },
        { party: 'CDA', votes: 1413, seats: 0 },
        { party: 'Gemeenschapsbelang Venhorst - Boekel', votes: 1333, seats: 0 },
        { party: 'VVD', votes: 464, seats: 0 }
    ]
  },
  { name: 'Borger-Odoorn', inhabitants: 25558, seats: 19, turnout: 57.2, province: 'Drenthe', x: 70, y: 28, electionResults: [
        { party: 'Gemeentebelangen Borger-Odoorn', votes: 3398, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1733, seats: 0 },
        { party: 'Leefbaar Borger-Odoorn', votes: 1408, seats: 0 },
        { party: 'VVD', votes: 1385, seats: 0 },
        { party: 'CDA', votes: 1316, seats: 0 },
        { party: 'GROENLINKS', votes: 738, seats: 0 },
        { party: 'D66', votes: 484, seats: 0 },
        { party: 'ChristenUnie', votes: 473, seats: 0 }
    ]
  },
  { name: 'Borne', inhabitants: 23313, seats: 19, turnout: 56.1, province: 'Overijssel', x: 68, y: 46, electionResults: [
        { party: 'GB', votes: 2552, seats: 0 },
        { party: 'CDA', votes: 2000, seats: 0 },
        { party: 'VVD', votes: 1537, seats: 0 },
        { party: 'Borne-Nu', votes: 1388, seats: 0 },
        { party: 'GROENLINKS / Partij van de Arbeid (P.v.d.A.)', votes: 1302, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 808, seats: 0 },
        { party: 'D66', votes: 662, seats: 0 }
    ]
  },
  { name: 'Borsele', inhabitants: 22738, seats: 19, turnout: 58.9, province: 'Zeeland', x: 42, y: 57, electionResults: [
        { party: 'Lokale Partij Borsele', votes: 2868, seats: 0 },
        { party: 'SGP-ChristenUnie', votes: 2717, seats: 0 },
        { party: 'CDA', votes: 2671, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1253, seats: 0 },
        { party: 'VVD', votes: 687, seats: 0 },
        { party: 'D66', votes: 662, seats: 0 }
    ]
  },
  { name: 'Boxmeer', inhabitants: 29046, seats: 21, turnout: 56.4, province: 'Noord-Brabant', x: 62, y: 55 },
  { name: 'Boxtel', inhabitants: 33197, seats: 23, turnout: 57.3, province: 'Noord-Brabant', x: 55, y: 61 },
  { name: 'Breda', inhabitants: 184403, seats: 39, turnout: 53.8, province: 'Noord-Brabant', x: 49, y: 60, electionResults: [
        { party: 'VVD', votes: 16181, seats: 0 },
        { party: 'D66', votes: 10355, seats: 0 },
        { party: 'GROENLINKS', votes: 8711, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 7125, seats: 0 },
        { party: 'CDA', votes: 6632, seats: 0 },
        { party: 'Breda Beslist', votes: 4305, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 3976, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 3583, seats: 0 },
        { party: 'Lijst Pim Fortuyn Breda (LPF)', votes: 2477, seats: 0 },
        { party: '50PLUS', votes: 2116, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1691, seats: 0 },
        { party: 'BuurtBelangen', votes: 1086, seats: 0 },
        { party: 'ChristenUnie', votes: 751, seats: 0 },
        { party: 'Volkspartij Breda', votes: 581, seats: 0 },
        { party: 'SHOUT!', votes: 525, seats: 0 }
    ]
  },
  { name: 'Brielle', inhabitants: 17439, seats: 17, turnout: 55.7, province: 'Zuid-Holland', x: 46, y: 50 },
  { name: 'Bronckhorst', inhabitants: 36032, seats: 23, turnout: 61.2, province: 'Gelderland', x: 65, y: 48, electionResults: [
        { party: 'Gemeentebelangen Bronckhorst (GBB)', votes: 5228, seats: 0 },
        { party: 'CDA', votes: 4351, seats: 0 },
        { party: 'VVD', votes: 3095, seats: 0 },
        { party: 'GROENLINKS', votes: 1581, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1525, seats: 0 },
        { party: 'D66', votes: 1474, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 682, seats: 0 }
    ]
  },
  { name: 'Brummen', inhabitants: 20756, seats: 17, turnout: 59.6, province: 'Gelderland', x: 63, y: 45, electionResults: [
        { party: 'Lokaal Belang', votes: 2110, seats: 0 },
        { party: 'VVD', votes: 1621, seats: 0 },
        { party: 'GROENLINKS', votes: 1505, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1314, seats: 0 },
        { party: 'D66', votes: 980, seats: 0 },
        { party: 'CDA', votes: 921, seats: 0 }
    ]
  },
  { name: 'Brunssum', inhabitants: 27817, seats: 21, turnout: 49.3, province: 'Limburg', x: 60, y: 76, electionResults: [
        { party: 'Pak (Progressief Akkoord Brunssum)', votes: 2429, seats: 0 },
        { party: 'Lijst Borger', votes: 2263, seats: 0 },
        { party: 'VVD', votes: 1715, seats: 0 },
        { party: 'Burger Belangen Brunssum Lijst Palmen', votes: 1651, seats: 0 },
        { party: 'Partij van de Arbeid', votes: 961, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 537, seats: 0 },
        { party: 'CDA', votes: 350, seats: 0 },
        { party: 'ChristenUnie', votes: 312, seats: 0 }
    ]
  },
  { name: 'Bunnik', inhabitants: 15191, seats: 15, turnout: 57.8, province: 'Utrecht', x: 54, y: 45, electionResults: [
        { party: 'P21', votes: 2928, seats: 0 },
        { party: 'CDA', votes: 2044, seats: 0 },
        { party: 'VVD', votes: 1549, seats: 0 },
        { party: 'D66', votes: 1497, seats: 0 }
    ]
  },
  { name: 'Bunschoten', inhabitants: 21667, seats: 17, turnout: 63.4, province: 'Utrecht', x: 56, y: 39, electionResults: [
        { party: 'ChristenUnie', votes: 3167, seats: 0 },
        { party: 'VVD', votes: 2250, seats: 0 },
        { party: 'CDA', votes: 1856, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1481, seats: 0 },
        { party: 'Christelijke Arbeiders Partij (CAP)', votes: 1035, seats: 0 }
    ]
  },
  { name: 'Buren', inhabitants: 26742, seats: 19, turnout: 58.2, province: 'Gelderland', x: 57, y: 50, electionResults: [
        { party: 'Gemeentebelangen Buren', votes: 4254, seats: 0 },
        { party: 'Protestants Christelijke Groepering', votes: 1585, seats: 0 },
        { party: 'VVD', votes: 1406, seats: 0 },
        { party: 'Partij van de Arbeid/GROENLINKS', votes: 1321, seats: 0 },
        { party: 'CDA', votes: 925, seats: 0 },
        { party: 'D66', votes: 883, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 805, seats: 0 },
        { party: 'Beter Buren', votes: 371, seats: 0 }
    ]
  },
  { name: 'Capelle aan den IJssel', inhabitants: 67151, seats: 31, turnout: 49.6, province: 'Zuid-Holland', x: 49, y: 47, electionResults: [
        { party: 'Leefbaar Capelle', votes: 6726, seats: 0 },
        { party: 'D66', votes: 2866, seats: 0 },
        { party: 'VVD', votes: 2504, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1992, seats: 0 },
        { party: 'Capels Bewoners Belang', votes: 1635, seats: 0 },
        { party: 'GROENLINKS', votes: 1469, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1435, seats: 0 },
        { party: 'ChristenUnie', votes: 1257, seats: 0 },
        { party: 'CDA', votes: 1214, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1071, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 947, seats: 0 }
    ]
  },
  { name: 'Castricum', inhabitants: 35988, seats: 23, turnout: 56.3, province: 'Noord-Holland', x: 49, y: 32, electionResults: [
        { party: 'Lokaal Vitaal', votes: 4479, seats: 0 },
        { party: 'VVD', votes: 3163, seats: 0 },
        { party: 'GROENLINKS', votes: 2916, seats: 0 },
        { party: 'De VrijeLijst', votes: 1957, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1653, seats: 0 },
        { party: 'D66', votes: 1624, seats: 0 },
        { party: 'CDA', votes: 1584, seats: 0 },
        { party: 'Forza! Castricum', votes: 1318, seats: 0 }
    ]
  },
  { name: 'Coevorden', inhabitants: 35296, seats: 23, turnout: 54.8, province: 'Drenthe', x: 69, y: 32, electionResults: [
        { party: 'Belangen Buitengebied Coevorden', votes: 5920, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2299, seats: 0 },
        { party: 'VVD', votes: 2172, seats: 0 },
        { party: 'CDA', votes: 2162, seats: 0 },
        { party: 'PAC', votes: 1841, seats: 0 },
        { party: 'PPC', votes: 562, seats: 0 }
    ]
  },
  { name: 'Cranendonck', inhabitants: 21166, seats: 17, turnout: 58.7, province: 'Noord-Brabant', x: 57, y: 65, electionResults: [
        { party: 'ELAN', votes: 3236, seats: 0 },
        { party: 'CDA', votes: 2084, seats: 0 },
        { party: 'Cranendonck Actief!', votes: 1465, seats: 0 },
        { party: 'Pro6', votes: 1240, seats: 0 },
        { party: 'VVD', votes: 1038, seats: 0 },
        { party: 'Blanco (Waterschoot, W.P.J.M.)', votes: 103, seats: 0 }
    ]
  },
  { name: 'Cuijk', inhabitants: 25139, seats: 19, turnout: 55.9, province: 'Noord-Brabant', x: 61, y: 56 },
  { name: 'Dalfsen', inhabitants: 28585, seats: 21, turnout: 59.3, province: 'Overijssel', x: 64, y: 40, electionResults: [
        { party: 'Gemeentebelangen', votes: 5472, seats: 0 },
        { party: 'CDA', votes: 3767, seats: 0 },
        { party: 'ChristenUnie', votes: 1966, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1374, seats: 0 },
        { party: 'D66', votes: 1075, seats: 0 },
        { party: 'VVD', votes: 752, seats: 0 }
    ]
  },
  { name: 'Dantumadiel', inhabitants: 18916, seats: 17, turnout: 57.2, province: 'Friesland', x: 61, y: 19, electionResults: [
        { party: 'CDA', votes: 1946, seats: 0 },
        { party: 'Sociaal Links', votes: 1605, seats: 0 },
        { party: 'ChristenUnie', votes: 1291, seats: 0 },
        { party: 'Gemeentebelangen Dantumadiel', votes: 1257, seats: 0 },
        { party: 'FNP', votes: 805, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 752, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 597, seats: 0 },
        { party: 'VVD', votes: 257, seats: 0 }
    ]
  },
  { name: 'De Bilt', inhabitants: 43124, seats: 25, turnout: 58.6, province: 'Utrecht', x: 55, y: 43, electionResults: [
        { party: 'GROENLINKS', votes: 4733, seats: 0 },
        { party: 'D66', votes: 2810, seats: 0 },
        { party: 'VVD', votes: 2697, seats: 0 },
        { party: 'Forza De Bilt', votes: 2634, seats: 0 },
        { party: 'Beter De Bilt en Bilts Belang', votes: 2476, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1545, seats: 0 },
        { party: 'CDA', votes: 1458, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1187, seats: 0 },
        { party: 'ChristenUnie', votes: 1031, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1010, seats: 0 }
    ]
  },
  { name: 'De Fryske Marren', inhabitants: 51567, seats: 27, turnout: 56.8, province: 'Friesland', x: 58, y: 24, electionResults: [
        { party: 'FNP', votes: 4912, seats: 0 },
        { party: 'CDA', votes: 4505, seats: 0 },
        { party: 'VVD', votes: 2641, seats: 0 },
        { party: 'Kleurrijk Fryske Marren (KFM)', votes: 2278, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2172, seats: 0 },
        { party: 'GROENLINKS', votes: 1925, seats: 0 },
        { party: 'Burgerpartij De Fryske Marren', votes: 1302, seats: 0 },
        { party: 'Nieuwe Communistische Partij-NCPN', votes: 1168, seats: 0 },
        { party: 'D66', votes: 1072, seats: 0 },
        { party: 'Forum voor Democratie', votes: 988, seats: 0 },
        { party: 'ChristenUnie', votes: 979, seats: 0 }
    ]
  },
  { name: 'De Ronde Venen', inhabitants: 44457, seats: 25, turnout: 55.3, province: 'Utrecht', x: 51, y: 42, electionResults: [
        { party: 'Ronde Venen Belang', votes: 6895, seats: 0 },
        { party: 'CDA', votes: 3704, seats: 0 },
        { party: 'VVD', votes: 2579, seats: 0 },
        { party: 'D66', votes: 2576, seats: 0 },
        { party: 'P.v.d.A./GROENLINKS', votes: 2421, seats: 0 },
        { party: 'Seniorenpartij De Ronde Venen', votes: 1113, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 1100, seats: 0 },
        { party: 'Inwonerscollectief', votes: 1010, seats: 0 }
    ]
  },
  { name: 'De Wolden', inhabitants: 24246, seats: 19, turnout: 58.1, province: 'Drenthe', x: 66, y: 31, electionResults: [
        { party: 'Gemeentebelangen De Wolden', votes: 5341, seats: 0 },
        { party: 'CDA', votes: 1710, seats: 0 },
        { party: 'VVD', votes: 1617, seats: 0 },
        { party: 'GROENLINKS', votes: 1083, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1009, seats: 0 },
        { party: 'D66', votes: 761, seats: 0 },
        { party: 'ChristenUnie', votes: 678, seats: 0 }
    ]
  },
  { name: 'Delft', inhabitants: 103659, seats: 39, turnout: 55.6, province: 'Zuid-Holland', x: 47, y: 46, electionResults: [
        { party: 'Studenten Techniek in Politiek (STIP)', votes: 6760, seats: 0 },
        { party: 'D66', votes: 6206, seats: 0 },
        { party: 'GROENLINKS', votes: 5831, seats: 0 },
        { party: 'Hart voor Delft', votes: 5742, seats: 0 },
        { party: 'VVD', votes: 3555, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 3033, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2484, seats: 0 },
        { party: 'CDA', votes: 2160, seats: 0 },
        { party: 'Onafhankelijk Delft', votes: 2017, seats: 0 },
        { party: 'ChristenUnie', votes: 2016, seats: 0 },
        { party: 'Volt', votes: 1967, seats: 0 },
        { party: 'BIJ1', votes: 883, seats: 0 }
    ]
  },
  { name: 'Den Helder', inhabitants: 56305, seats: 29, turnout: 51.2, province: 'Noord-Holland', x: 48, y: 20, electionResults: [
        { party: 'BEHOORLIJK BESTUUR', votes: 3812, seats: 0 },
        { party: 'Beter voor Den Helder', votes: 2358, seats: 0 },
        { party: 'VVD', votes: 2074, seats: 0 },
        { party: 'CDA', votes: 1915, seats: 0 },
        { party: 'D66', votes: 1410, seats: 0 },
        { party: 'GROENLINKS', votes: 1382, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 1328, seats: 0 },
        { party: 'Stadspartij Den Helder', votes: 1289, seats: 0 },
        { party: 'Seniorenpartij', votes: 1105, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1048, seats: 0 },
        { party: 'ChristenUnie', votes: 997, seats: 0 },
        { party: 'Samen Actief Sr', votes: 631, seats: 0 },
        { party: 'HELDER ONAFHANKELIJK!', votes: 463, seats: 0 },
        { party: 'HELDERS GELUID', votes: 248, seats: 0 },
        { party: 'Hart voor Vrijheid', votes: 161, seats: 0 }
    ]
  },
  { name: 'Deurne', inhabitants: 32474, seats: 23, turnout: 59.4, province: 'Noord-Brabant', x: 59, y: 62, electionResults: [
        { party: 'Politieke Partij DOE!', votes: 3408, seats: 0 },
        { party: 'DeurneNU', votes: 3040, seats: 0 },
        { party: 'Progressief Akkoord-GROENLINKS-PvdA', votes: 1877, seats: 0 },
        { party: 'CDA', votes: 1826, seats: 0 },
        { party: 'VVD', votes: 1634, seats: 0 },
        { party: 'Transparant Deurne', votes: 1371, seats: 0 },
        { party: '50PLUS', votes: 595, seats: 0 }
    ]
  },
  { name: 'Deventer', inhabitants: 100718, seats: 37, turnout: 54.3, province: 'Overijssel', x: 65, y: 42, electionResults: [
        { party: 'Gemeentebelang', votes: 8610, seats: 0 },
        { party: 'GROENLINKS', votes: 6010, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 5449, seats: 0 },
        { party: 'D66', votes: 3905, seats: 0 },
        { party: 'VVD', votes: 3709, seats: 0 },
        { party: 'Deventer Belang', votes: 2924, seats: 0 },
        { party: 'CDA', votes: 2745, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1682, seats: 0 },
        { party: 'ChristenUnie', votes: 1545, seats: 0 },
        { party: 'DeventerNu', votes: 1373, seats: 0 },
        { party: 'DENK', votes: 1336, seats: 0 },
        { party: 'Deventer Sociaal', votes: 1219, seats: 0 },
        { party: 'Blanco (Rietman, A)', votes: 620, seats: 0 },
        { party: 'ASP (Atheïstisch Seculiere Partij)', votes: 558, seats: 0 }
    ]
  },
  { name: 'Diemen', inhabitants: 30781, seats: 21, turnout: 52.8, province: 'Noord-Holland', x: 53, y: 38, electionResults: [
        { party: 'GROENLINKS', votes: 2289, seats: 0 },
        { party: 'Ons Diemen', votes: 1759, seats: 0 },
        { party: 'D66', votes: 1756, seats: 0 },
        { party: 'VVD', votes: 1517, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1316, seats: 0 },
        { party: 'Ouderenpartij Diemen', votes: 1087, seats: 0 },
        { party: 'Onafhankelijke Partij Diemen', votes: 956, seats: 0 }
    ]
  },
  { name: 'Dinkelland', inhabitants: 26470, seats: 19, turnout: 60.2, province: 'Overijssel', x: 70, y: 48, electionResults: [
        { party: 'Lokaal Dinkelland', votes: 4474, seats: 0 },
        { party: 'CDA', votes: 4372, seats: 0 },
        { party: 'VVD', votes: 2004, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 1200, seats: 0 },
        { party: 'Burgerbelangen Dinkelland', votes: 782, seats: 0 }
    ]
  },
  { name: 'Doesburg', inhabitants: 11078, seats: 13, turnout: 56.4, province: 'Gelderland', x: 64, y: 46, electionResults: [
        { party: 'Stadspartij Doesburg', votes: 1736, seats: 0 },
        { party: 'PvdA/GROENLINKS', votes: 830, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 714, seats: 0 },
        { party: 'D66', votes: 619, seats: 0 },
        { party: 'VVD', votes: 592, seats: 0 },
        { party: 'CDA', votes: 415, seats: 0 }
    ]
  },
  { name: 'Doetinchem', inhabitants: 58009, seats: 29, turnout: 55.7, province: 'Gelderland', x: 66, y: 50, electionResults: [
        { party: 'CDA', votes: 3390, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2820, seats: 0 },
        { party: 'VVD', votes: 2807, seats: 0 },
        { party: 'Partij voor Lokaal Maatwerk (PvLM)', votes: 2440, seats: 0 },
        { party: 'GemeenteBelangen Doetinchem (GBD)', votes: 2278, seats: 0 },
        { party: 'D66', votes: 1942, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1901, seats: 0 },
        { party: 'GROENLINKS', votes: 1886, seats: 0 },
        { party: 'Lokaal Belang Doetinchem', votes: 1487, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 1037, seats: 0 },
        { party: 'Forum voor Democratie', votes: 989, seats: 0 }
    ]
  },
  { name: 'Dongen', inhabitants: 26226, seats: 19, turnout: 57.9, province: 'Noord-Brabant', x: 52, y: 60, electionResults: [
        { party: 'Volkspartij Dongen', votes: 3060, seats: 0 },
        { party: 'CDA', votes: 2527, seats: 0 },
        { party: 'D66', votes: 1763, seats: 0 },
        { party: 'VVD', votes: 1135, seats: 0 },
        { party: 'De Ouderenpartij voor Dongen', votes: 1099, seats: 0 }
    ]
  },
  { name: 'Dordrecht', inhabitants: 119537, seats: 39, turnout: 49.7, province: 'Zuid-Holland', x: 50, y: 52, electionResults: [
        { party: 'VVD', votes: 5952, seats: 0 },
        { party: 'GROENLINKS', votes: 5806, seats: 0 },
        { party: 'Beter Voor Dordt', votes: 5038, seats: 0 },
        { party: 'Verenigde Senioren Partij Dordrecht', votes: 4700, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 4360, seats: 0 },
        { party: 'CDA', votes: 3761, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2777, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 2350, seats: 0 },
        { party: 'DENK', votes: 1844, seats: 0 },
        { party: 'Gewoon Dordt', votes: 1743, seats: 0 },
        { party: 'Op Ons Eiland', votes: 1577, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1537, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 1476, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1123, seats: 0 },
        { party: 'MOEDD', votes: 600, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 230, seats: 0 }
    ]
  },
  { name: 'Drechterland', inhabitants: 19905, seats: 17, turnout: 54.6, province: 'Noord-Holland', x: 52, y: 31, electionResults: [
        { party: 'CDA', votes: 1886, seats: 0 },
        { party: 'Senioren Partij Drechterland', votes: 1816, seats: 0 },
        { party: 'Progressief Drechterland (PDL)', votes: 1803, seats: 0 },
        { party: 'VVD', votes: 1704, seats: 0 },
        { party: 'Gemeentebelangen Drechterland', votes: 1361, seats: 0 }
    ]
  },
  { name: 'Drimmelen', inhabitants: 27274, seats: 21, turnout: 56.2, province: 'Noord-Brabant', x: 48, y: 58, electionResults: [
        { party: 'LIJST HARRY BAKKER', votes: 2871, seats: 0 },
        { party: 'VVD', votes: 2408, seats: 0 },
        { party: 'Groen Drimmelen (VP/D66)', votes: 2391, seats: 0 },
        { party: 'Combinatie Algemeen Belang', votes: 2001, seats: 0 },
        { party: 'SAMEN Drimmelen', votes: 894, seats: 0 },
        { party: 'CDA', votes: 863, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 612, seats: 0 }
    ]
  },
  { name: 'Dronten', inhabitants: 41516, seats: 25, turnout: 51.8, province: 'Flevoland', x: 57, y: 37, electionResults: [
        { party: 'CDA', votes: 3589, seats: 0 },
        { party: 'Leefbaar Dronten', votes: 3409, seats: 0 },
        { party: 'VVD', votes: 2573, seats: 0 },
        { party: 'ChristenUnie', votes: 1820, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1607, seats: 0 },
        { party: 'D66', votes: 1262, seats: 0 },
        { party: 'GROENLINKS', votes: 1165, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1114, seats: 0 }
    ]
  },
  { name: 'Druten', inhabitants: 18918, seats: 17, turnout: 56.9, province: 'Gelderland', x: 59, y: 50, electionResults: [
        { party: 'Kernachtig Druten', votes: 2905, seats: 0 },
        { party: 'Dorpslijst Puiflijk / Druten-Zuid', votes: 1457, seats: 0 },
        { party: 'Welzijn Druten', votes: 1114, seats: 0 },
        { party: 'Dorpslijst Horssen', votes: 777, seats: 0 },
        { party: 'Dorpslijst Afferden', votes: 735, seats: 0 },
        { party: 'Sociaal Maas en Waal', votes: 734, seats: 0 },
        { party: 'CDA', votes: 297, seats: 0 },
        { party: 'VVD', votes: 291, seats: 0 }
    ]
  },
  { name: 'Duiven', inhabitants: 25124, seats: 19, turnout: 54.3, province: 'Gelderland', x: 62, y: 49, electionResults: [
        { party: 'Lokaal Alternatief', votes: 2267, seats: 0 },
        { party: 'DOED', votes: 2262, seats: 0 },
        { party: 'CDA', votes: 1414, seats: 0 },
        { party: 'VVD', votes: 1137, seats: 0 },
        { party: 'GROENLINKS', votes: 1041, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 688, seats: 0 },
        { party: 'Pro Duiven', votes: 536, seats: 0 },
        { party: 'D66', votes: 489, seats: 0 }
    ]
  },
  { name: 'Echt-Susteren', inhabitants: 31618, seats: 21, turnout: 55.7, province: 'Limburg', x: 61, y: 71, electionResults: [
        { party: 'Partij Nieuw Echt-Susteren (PNES)', votes: 4048, seats: 0 },
        { party: 'LIJST SAMENWERKING', votes: 3637, seats: 0 },
        { party: 'CDA', votes: 3345, seats: 0 },
        { party: 'Democraten Echt-Susteren', votes: 1720, seats: 0 },
        { party: 'GROENLINKS', votes: 944, seats: 0 },
        { party: 'D66', votes: 624, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 490, seats: 0 },
        { party: 'Blanco (Masthoff, E.P.H.M.)', votes: 199, seats: 0 }
    ]
  },
  { name: 'Edam-Volendam', inhabitants: 36201, seats: 23, turnout: 53.9, province: 'Noord-Holland', x: 53, y: 34, electionResults: [
        { party: 'Volendam ', votes: 4627, seats: 0 },
        { party: 'Zeevangs Belang', votes: 2580, seats: 0 },
        { party: 'GROENLINKS', votes: 2557, seats: 0 },
        { party: 'CDA', votes: 2062, seats: 0 },
        { party: 'Lijst Kras', votes: 2023, seats: 0 },
        { party: 'VVD', votes: 1848, seats: 0 },
        { party: 'BVNL', votes: 1448, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 992, seats: 0 },
        { party: 'Forum voor Democratie', votes: 683, seats: 0 }
    ]
  },
  { name: 'Ede', inhabitants: 118227, seats: 39, turnout: 57.8, province: 'Gelderland', x: 58, y: 46, electionResults: [
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 9164, seats: 0 },
        { party: 'ChristenUnie', votes: 7861, seats: 0 },
        { party: 'GemeenteBelangen Ede', votes: 7192, seats: 0 },
        { party: 'D66', votes: 5206, seats: 0 },
        { party: 'CDA', votes: 5064, seats: 0 },
        { party: 'Burgerbelangen', votes: 4801, seats: 0 },
        { party: 'GROENLINKS', votes: 4245, seats: 0 },
        { party: 'VVD', votes: 3520, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2680, seats: 0 },
        { party: 'Mens en Milieu Ede', votes: 1734, seats: 0 },
        { party: 'Democratische Partij Ede', votes: 1467, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1234, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 837, seats: 0 },
        { party: 'GBP', votes: 586, seats: 0 }
    ]
  },
  { name: 'Eemnes', inhabitants: 9208, seats: 13, turnout: 58.2, province: 'Utrecht', x: 55, y: 40, electionResults: [
        { party: 'Dorpsbelang', votes: 1621, seats: 0 },
        { party: 'CDA', votes: 1048, seats: 0 },
        { party: 'VVD', votes: 751, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 749, seats: 0 },
        { party: 'D66', votes: 436, seats: 0 }
    ]
  },
  { name: 'Eemsdelta', inhabitants: 46079, seats: 27, turnout: 51.6, province: 'Groningen', x: 70, y: 18 },
  { name: 'Eersel', inhabitants: 19314, seats: 17, turnout: 60.3, province: 'Noord-Brabant', x: 55, y: 65, electionResults: [
        { party: 'Eersel Samen Anders', votes: 3799, seats: 0 },
        { party: 'Partij van de Arbeid / GROENLINKS', votes: 1288, seats: 0 },
        { party: 'CDA', votes: 1158, seats: 0 },
        { party: 'VVD', votes: 908, seats: 0 },
        { party: 'Kernbeleid', votes: 605, seats: 0 },
        { party: 'Democraten 66 (D66)', votes: 585, seats: 0 }
    ]
  },
  { name: 'Eijsden-Margraten', inhabitants: 25753, seats: 19, turnout: 58.4, province: 'Limburg', x: 59, y: 79, electionResults: [
        { party: 'CDA', votes: 3663, seats: 0 },
        { party: 'Eijsden Margraten Lokaal (EML)', votes: 3453, seats: 0 },
        { party: 'PRO / P.v.d.A. / GROENLINKS', votes: 2574, seats: 0 },
        { party: 'VVD', votes: 1723, seats: 0 },
        { party: 'ODE', votes: 1432, seats: 0 }
    ]
  },
  { name: 'Eindhoven', inhabitants: 238326, seats: 39, turnout: 52.1, province: 'Noord-Brabant', x: 56, y: 64, electionResults: [
        { party: 'GROENLINKS', votes: 14367, seats: 0 },
        { party: 'CDA', votes: 9232, seats: 0 },
        { party: 'VVD', votes: 8951, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 8390, seats: 0 },
        { party: 'D66', votes: 7520, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 4584, seats: 0 },
        { party: 'Volt', votes: 4348, seats: 0 },
        { party: 'Ouderen Appèl – Hart voor Eindhoven', votes: 4325, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 3633, seats: 0 },
        { party: 'Lijst Pim Fortuyn Eindhoven', votes: 2631, seats: 0 },
        { party: 'Forum voor Democratie', votes: 2324, seats: 0 },
        { party: '50PLUS', votes: 1774, seats: 0 },
        { party: 'DENK', votes: 1432, seats: 0 },
        { party: 'ChristenUnie', votes: 1408, seats: 0 },
        { party: 'Gewoon Eindhoven', votes: 1275, seats: 0 },
        { party: 'Piratenpartij', votes: 1064, seats: 0 },
        { party: 'DE FEESTPARTIJ (DFP)', votes: 376, seats: 0 }
    ]
  },
  { name: 'Elburg', inhabitants: 23160, seats: 19, turnout: 58.7, province: 'Gelderland', x: 60, y: 38, electionResults: [
        { party: 'Algemeen Belang', votes: 2427, seats: 0 },
        { party: 'ChristenUnie', votes: 2241, seats: 0 },
        { party: 'LEV', votes: 2080, seats: 0 },
        { party: 'Elburg Beleid / PvdA', votes: 1760, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1643, seats: 0 },
        { party: 'CDA', votes: 1295, seats: 0 },
        { party: 'VVD', votes: 776, seats: 0 }
    ]
  },
  { name: 'Emmen', inhabitants: 107055, seats: 37, turnout: 52.4, province: 'Drenthe', x: 72, y: 30, electionResults: [
        { party: 'Wakker Emmen', votes: 13818, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 6669, seats: 0 },
        { party: 'CDA', votes: 4162, seats: 0 },
        { party: 'VVD', votes: 2779, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2557, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 2462, seats: 0 },
        { party: 'ChristenUnie', votes: 1885, seats: 0 },
        { party: 'D66', votes: 1837, seats: 0 },
        { party: 'GROENLINKS', votes: 1731, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1518, seats: 0 },
        { party: '50PLUS', votes: 1119, seats: 0 },
        { party: 'Vitaal Emmen', votes: 582, seats: 0 },
        { party: 'STIP', votes: 188, seats: 0 }
    ]
  },
  { name: 'Enkhuizen', inhabitants: 18592, seats: 17, turnout: 53.8, province: 'Noord-Holland', x: 53, y: 30, electionResults: [
        { party: 'Enkhuizen Vooruit!', votes: 1184, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1116, seats: 0 },
        { party: 'CDA', votes: 832, seats: 0 },
        { party: 'Blanco (Segerius, C.H.)', votes: 716, seats: 0 },
        { party: 'D66', votes: 658, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 649, seats: 0 },
        { party: 'Het Enkhuizer Alternatief', votes: 606, seats: 0 },
        { party: 'Nieuw Enkhuizen', votes: 601, seats: 0 },
        { party: 'VVD', votes: 485, seats: 0 },
        { party: 'Piratenpartij', votes: 380, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 326, seats: 0 }
    ]
  },
  { name: 'Enschede', inhabitants: 159732, seats: 39, turnout: 50.2, province: 'Overijssel', x: 68, y: 47, electionResults: [
        { party: 'Burgerbelangen Enschede (BBE)', votes: 12077, seats: 0 },
        { party: 'VVD', votes: 5854, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 5749, seats: 0 },
        { party: 'GROENLINKS', votes: 5037, seats: 0 },
        { party: 'D66', votes: 4803, seats: 0 },
        { party: 'CDA', votes: 4363, seats: 0 },
        { party: 'ChristenUnie', votes: 2992, seats: 0 },
        { party: 'Volt', votes: 2809, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 2521, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2484, seats: 0 },
        { party: 'EnschedeAnders', votes: 2192, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1832, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 1770, seats: 0 },
        { party: 'LINK', votes: 1135, seats: 0 },
        { party: 'Democratisch Platform Enschede (DPE)', votes: 1070, seats: 0 },
        { party: 'Verbindend Enschede', votes: 775, seats: 0 },
        { party: 'Blanco (Yilmaz, A)', votes: 155, seats: 0 },
        { party: 'Blanco (ten Wolde, J.H.L.)', votes: 86, seats: 0 }
    ]
  },
  { name: 'Epe', inhabitants: 33186, seats: 23, turnout: 60.1, province: 'Gelderland', x: 62, y: 41, electionResults: [
        { party: 'CDA', votes: 2788, seats: 0 },
        { party: 'Nieuwe Lijn', votes: 2440, seats: 0 },
        { party: 'VVD', votes: 2183, seats: 0 },
        { party: 'SGP-ChristenUnie', votes: 2035, seats: 0 },
        { party: 'D66', votes: 1973, seats: 0 },
        { party: 'Gemeentebelangen Epe', votes: 1281, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1059, seats: 0 },
        { party: 'GROENLINKS', votes: 904, seats: 0 },
        { party: 'Forum voor Democratie', votes: 666, seats: 0 }
    ]
  },
  { name: 'Ermelo', inhabitants: 27005, seats: 21, turnout: 59.4, province: 'Gelderland', x: 59, y: 42, electionResults: [
        { party: 'CDA', votes: 2939, seats: 0 },
        { party: 'één-Ermelo', votes: 2777, seats: 0 },
        { party: 'ChristenUnie', votes: 1956, seats: 0 },
        { party: 'Progressief Ermelo', votes: 1878, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1569, seats: 0 },
        { party: 'VVD', votes: 1353, seats: 0 },
        { party: 'BurgerBelangen Ermelo', votes: 803, seats: 0 }
    ]
  },
  { name: 'Etten-Leur', inhabitants: 43896, seats: 25, turnout: 55.8, province: 'Noord-Brabant', x: 48, y: 59, electionResults: [
        { party: 'APB', votes: 3340, seats: 0 },
        { party: 'Ons Etten-Leur', votes: 3088, seats: 0 },
        { party: 'CDA', votes: 2947, seats: 0 },
        { party: 'VVD', votes: 2194, seats: 0 },
        { party: 'GROENLINKS / Partij van de Arbeid (P.v.d.A.)', votes: 2048, seats: 0 },
        { party: 'D66', votes: 1466, seats: 0 },
        { party: 'Leefbaar Etten-Leur', votes: 1117, seats: 0 }
    ]
  },
  { name: 'Geertruidenberg', inhabitants: 21538, seats: 17, turnout: 56.3, province: 'Noord-Brabant', x: 50, y: 58, electionResults: [
        { party: 'Keerpunt', votes: 1991, seats: 0 },
        { party: 'Lokaal+', votes: 1690, seats: 0 },
        { party: 'Morgen!', votes: 1311, seats: 0 },
        { party: 'GemeenteBelangenGeertruidenberg', votes: 1022, seats: 0 },
        { party: 'CDA', votes: 951, seats: 0 },
        { party: 'VVD', votes: 870, seats: 0 },
        { party: 'Sociale Volkspartij Geertruidenberg', votes: 344, seats: 0 }
    ]
  },
  { name: 'Geldrop-Mierlo', inhabitants: 39733, seats: 25, turnout: 57.2, province: 'Noord-Brabant', x: 57, y: 63, electionResults: [
        { party: 'DGG (Democratische Groepering Geldrop)', votes: 3085, seats: 0 },
        { party: 'CDA', votes: 2880, seats: 0 },
        { party: 'Dorpspartij Mierlo (DPM)', votes: 2118, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1652, seats: 0 },
        { party: 'GROENLINKS', votes: 1562, seats: 0 },
        { party: 'D66', votes: 1533, seats: 0 },
        { party: 'VVD', votes: 1425, seats: 0 },
        { party: 'SAMEN', votes: 1410, seats: 0 }
    ]
  },
  { name: 'Gemert-Bakel', inhabitants: 30725, seats: 21, turnout: 61.4, province: 'Noord-Brabant', x: 58, y: 61, electionResults: [
        { party: 'CDA', votes: 3877, seats: 0 },
        { party: 'Dorpspartij', votes: 1866, seats: 0 },
        { party: 'Lokale Realisten', votes: 1840, seats: 0 },
        { party: 'Sociaal Gemert-Bakel', votes: 1554, seats: 0 },
        { party: 'VVD', votes: 1430, seats: 0 },
        { party: 'D66', votes: 1187, seats: 0 },
        { party: 'Partij van de Arbeid', votes: 454, seats: 0 }
    ]
  },
  { name: 'Gennep', inhabitants: 16924, seats: 15, turnout: 57.8, province: 'Limburg', x: 62, y: 57, electionResults: [
        { party: 'CDA', votes: 2025, seats: 0 },
        { party: 'D66', votes: 1537, seats: 0 },
        { party: 'VVD', votes: 1279, seats: 0 },
        { party: 'EERLIJK LOKAAL sociaal samen sterk (ELsss)', votes: 942, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 769, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 630, seats: 0 }
    ]
  },
  { name: 'Gilze en Rijen', inhabitants: 26438, seats: 19, turnout: 58.9, province: 'Noord-Brabant', x: 51, y: 60, electionResults: [
        { party: 'Kern ', votes: 2726, seats: 0 },
        { party: 'Groen Gilze en Rijen', votes: 2526, seats: 0 },
        { party: 'Gemeentebelang', votes: 1259, seats: 0 },
        { party: 'D66', votes: 1181, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1133, seats: 0 },
        { party: 'VVD', votes: 1000, seats: 0 },
        { party: 'CDA', votes: 812, seats: 0 }
    ]
  },
  { name: 'Goeree-Overflakkee', inhabitants: 50049, seats: 27, turnout: 57.6, province: 'Zuid-Holland', x: 44, y: 53, electionResults: [
        { party: 'Vitale Kernen Goeree Overflakkee', votes: 5385, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 5260, seats: 0 },
        { party: 'CDA', votes: 4740, seats: 0 },
        { party: 'Groep Jan Zwerus', votes: 3186, seats: 0 },
        { party: 'VVD', votes: 2252, seats: 0 },
        { party: 'ChristenUnie', votes: 2093, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1966, seats: 0 },
        { party: 'D66', votes: 845, seats: 0 },
        { party: 'Partij vd Jongeren', votes: 506, seats: 0 }
    ]
  },
  { name: 'Goes', inhabitants: 38080, seats: 25, turnout: 54.7, province: 'Zeeland', x: 43, y: 54, electionResults: [
        { party: 'Partij van de Arbeid / GROENLINKS', votes: 3090, seats: 0 },
        { party: 'NG (Nieuw Goes)', votes: 2979, seats: 0 },
        { party: 'CDA', votes: 2675, seats: 0 },
        { party: 'VVD', votes: 2495, seats: 0 },
        { party: 'SGP-ChristenUnie', votes: 2469, seats: 0 },
        { party: 'Partij voor Goes', votes: 1400, seats: 0 },
        { party: 'D66', votes: 1399, seats: 0 }
    ]
  },
  { name: 'Goirle', inhabitants: 23906, seats: 19, turnout: 59.2, province: 'Noord-Brabant', x: 52, y: 62, electionResults: [
        { party: 'Lijst Riel Goirle (LRG)', votes: 2209, seats: 0 },
        { party: 'Gezond Verstand Goirle Riel', votes: 1818, seats: 0 },
        { party: 'Pro Actief Goirle', votes: 1319, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1286, seats: 0 },
        { party: 'VVD', votes: 1093, seats: 0 },
        { party: 'D66', votes: 1053, seats: 0 },
        { party: 'CDA', votes: 644, seats: 0 },
        { party: 'Arbeiderspartij Goirle-Riel', votes: 476, seats: 0 }
    ]
  },
  { name: 'Gooise Meren', inhabitants: 58583, seats: 29, turnout: 56.8, province: 'Noord-Holland', x: 54, y: 38, electionResults: [
        { party: 'Goois Democratisch Platform', votes: 5394, seats: 0 },
        { party: 'D66', votes: 4725, seats: 0 },
        { party: 'VVD', votes: 4539, seats: 0 },
        { party: 'Hart voor BNM', votes: 3550, seats: 0 },
        { party: 'GROENLINKS', votes: 2468, seats: 0 },
        { party: 'CDA', votes: 1983, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1961, seats: 0 },
        { party: 'Partij voor Leefomgeving En Klimaat', votes: 992, seats: 0 },
        { party: 'ChristenUnie', votes: 579, seats: 0 }
    ]
  },
  { name: 'Gorinchem', inhabitants: 37009, seats: 25, turnout: 52.3, province: 'Zuid-Holland', x: 51, y: 51, electionResults: [
        { party: 'Stadsbelang', votes: 2532, seats: 0 },
        { party: 'DemocratenGorinchem', votes: 2194, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1949, seats: 0 },
        { party: 'VVD', votes: 1820, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 1510, seats: 0 },
        { party: 'Gorcum Actief', votes: 1448, seats: 0 },
        { party: 'D66', votes: 1402, seats: 0 },
        { party: 'CDA', votes: 1064, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1033, seats: 0 },
        { party: 'Zorg Voor Gorkum', votes: 407, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 81, seats: 0 }
    ]
  },
  { name: 'Gouda', inhabitants: 73676, seats: 33, turnout: 51.4, province: 'Zuid-Holland', x: 50, y: 46, electionResults: [
        { party: 'D66', votes: 3941, seats: 0 },
        { party: 'GROENLINKS', votes: 3633, seats: 0 },
        { party: 'ChristenUnie', votes: 3586, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 3100, seats: 0 },
        { party: 'Gouda Positief', votes: 3069, seats: 0 },
        { party: 'VVD', votes: 2628, seats: 0 },
        { party: 'Gemeentebelangen Gouda', votes: 2563, seats: 0 },
        { party: 'CDA', votes: 2138, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 2086, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 1914, seats: 0 },
        { party: 'Gouda Vitaal', votes: 1243, seats: 0 },
        { party: 'Gouda Bewust', votes: 456, seats: 0 },
        { party: 'KINDPARTIJ', votes: 108, seats: 0 }
    ]
  },
  { name: 'Grave', inhabitants: 12443, seats: 13, turnout: 58.6, province: 'Noord-Brabant', x: 59, y: 54 },
  { name: 'Groningen', inhabitants: 235878, seats: 45, turnout: 56.4, province: 'Groningen', x: 67, y: 18, electionResults: [
        { party: 'GROENLINKS', votes: 18669, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 12434, seats: 0 },
        { party: 'D66', votes: 10986, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 9730, seats: 0 },
        { party: 'Stadspartij 100% voor Groningen', votes: 9689, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 8631, seats: 0 },
        { party: 'VVD', votes: 7860, seats: 0 },
        { party: 'Student en Stad', votes: 6607, seats: 0 },
        { party: 'ChristenUnie', votes: 5344, seats: 0 },
        { party: 'CDA', votes: 5243, seats: 0 },
        { party: 'Partij voor het Noorden', votes: 4282, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 2234, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1751, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 844, seats: 0 },
        { party: 'Partij van de Zuinigheid', votes: 706, seats: 0 },
        { party: 'Blanco (Dokter, T.)', votes: 100, seats: 0 }
    ]
  },
  { name: 'Gulpen-Wittem', inhabitants: 14176, seats: 15, turnout: 60.7, province: 'Limburg', x: 60, y: 78, electionResults: [
        { party: 'PRO Gulpen-Wittem', votes: 2127, seats: 0 },
        { party: 'Fractie Franssen', votes: 1986, seats: 0 },
        { party: 'Balans Gulpen Wittem', votes: 1439, seats: 0 },
        { party: 'CDA', votes: 1373, seats: 0 },
        { party: 'Van der Laan/DOE', votes: 645, seats: 0 }
    ]
  },
  { name: 'Haaksbergen', inhabitants: 24309, seats: 19, turnout: 59.8, province: 'Overijssel', x: 69, y: 49, electionResults: [
        { party: 'CDA', votes: 2839, seats: 0 },
        { party: 'Nieuw Haaksbergen', votes: 2495, seats: 0 },
        { party: 'Team DAP (Dé Actieve Partij Haaksbergen)', votes: 1672, seats: 0 },
        { party: 'VVD', votes: 1496, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1391, seats: 0 },
        { party: 'D66', votes: 1001, seats: 0 }
    ]
  },
  { name: 'Haarlem', inhabitants: 162543, seats: 39, turnout: 56.2, province: 'Noord-Holland', x: 48, y: 37, electionResults: [
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 10984, seats: 0 },
        { party: 'GROENLINKS', votes: 9703, seats: 0 },
        { party: 'D66', votes: 8684, seats: 0 },
        { party: 'VVD', votes: 7366, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 4233, seats: 0 },
        { party: 'CDA', votes: 3500, seats: 0 },
        { party: 'OPHaarlem', votes: 3299, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2978, seats: 0 },
        { party: 'Jouw Haarlem', votes: 2927, seats: 0 },
        { party: 'Hart voor Haarlem', votes: 2436, seats: 0 },
        { party: 'Actiepartij', votes: 1841, seats: 0 },
        { party: 'Trots op Nederland (TROTS)', votes: 1789, seats: 0 },
        { party: 'ChristenUnie', votes: 1588, seats: 0 },
        { party: 'Belang Van Nederland (BVNL)', votes: 1526, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1450, seats: 0 },
        { party: '50PLUS', votes: 1112, seats: 0 },
        { party: 'DENK', votes: 919, seats: 0 },
        { party: 'Blanco (Vonck, P.H.)', votes: 438, seats: 0 }
    ]
  },
  { name: 'Haarlemmermeer', inhabitants: 156395, seats: 39, turnout: 51.6, province: 'Noord-Holland', x: 47, y: 40, electionResults: [
        { party: 'VVD', votes: 11109, seats: 0 },
        { party: 'Haarlemmermeerse Actieve Politiek (HAP)', votes: 7871, seats: 0 },
        { party: 'GROENLINKS', votes: 6526, seats: 0 },
        { party: 'D66', votes: 5996, seats: 0 },
        { party: 'CDA', votes: 4926, seats: 0 },
        { party: 'Forza! Haarlemmermeer', votes: 4119, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 3857, seats: 0 },
        { party: 'Sociaal Rechts Haarlemmermeer', votes: 3202, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 2209, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1835, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 1640, seats: 0 },
        { party: 'EEN Haarlemmermeer', votes: 1619, seats: 0 },
        { party: 'GEZOND Haarlemmermeer', votes: 1355, seats: 0 },
        { party: 'Blanco (Jankie, C.)', votes: 569, seats: 0 }
    ]
  },
  { name: 'Halderberge', inhabitants: 30277, seats: 21, turnout: 57.4, province: 'Noord-Brabant', x: 47, y: 59, electionResults: [
        { party: 'VVD', votes: 3951, seats: 0 },
        { party: 'Lokaal Halderberge', votes: 2662, seats: 0 },
        { party: 'WOS', votes: 2205, seats: 0 },
        { party: 'CDA', votes: 1209, seats: 0 },
        { party: 'D66', votes: 1053, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 759, seats: 0 }
    ]
  },
  { name: 'Hardenberg', inhabitants: 60940, seats: 29, turnout: 57.9, province: 'Overijssel', x: 67, y: 36, electionResults: [
        { party: 'CDA', votes: 8148, seats: 0 },
        { party: 'OpKoers.nu', votes: 5625, seats: 0 },
        { party: 'ChristenUnie', votes: 5019, seats: 0 },
        { party: 'VVD', votes: 2405, seats: 0 },
        { party: 'Partij van de Arbeid (PvdA)', votes: 1996, seats: 0 },
        { party: 'D66', votes: 1292, seats: 0 },
        { party: 'GROENLINKS', votes: 1120, seats: 0 },
        { party: '50PLUS', votes: 1022, seats: 0 }
    ]
  },
  { name: 'Harderwijk', inhabitants: 48395, seats: 27, turnout: 55.3, province: 'Gelderland', x: 58, y: 39, electionResults: [
        { party: 'Harderwijk Anders', votes: 6388, seats: 0 },
        { party: 'ChristenUnie', votes: 2975, seats: 0 },
        { party: 'VVD', votes: 2441, seats: 0 },
        { party: 'CDA', votes: 2084, seats: 0 },
        { party: 'GEMEENTEBELANG HARDERWIJK/HIERDEN', votes: 1939, seats: 0 },
        { party: 'D66', votes: 1489, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1362, seats: 0 },
        { party: 'GROENLINKS', votes: 1157, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 861, seats: 0 },
        { party: 'Blanco (Looman, P.)', votes: 370, seats: 0 }
    ]
  },
  { name: 'Hardinxveld-Giessendam', inhabitants: 18295, seats: 17, turnout: 56.8, province: 'Zuid-Holland', x: 50, y: 50, electionResults: [
        { party: 'T@B', votes: 2376, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 2359, seats: 0 },
        { party: 'ChristenUnie', votes: 1985, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 829, seats: 0 },
        { party: 'CDA', votes: 796, seats: 0 },
        { party: 'D66', votes: 364, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 100, seats: 0 }
    ]
  },
  { name: 'Harlingen', inhabitants: 15720, seats: 15, turnout: 54.2, province: 'Friesland', x: 56, y: 19, electionResults: [
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1424, seats: 0 },
        { party: 'Harlinger Belang', votes: 1234, seats: 0 },
        { party: 'CDA', votes: 1151, seats: 0 },
        { party: 'VVD', votes: 929, seats: 0 },
        { party: 'WAD', votes: 607, seats: 0 },
        { party: 'HOOP', votes: 509, seats: 0 },
        { party: 'GROENLINKS', votes: 388, seats: 0 },
        { party: 'D66', votes: 304, seats: 0 },
        { party: 'ChristenUnie', votes: 233, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 57, seats: 0 }
    ]
  },
  { name: 'Hattem', inhabitants: 12213, seats: 13, turnout: 60.4, province: 'Gelderland', x: 62, y: 40, electionResults: [
        { party: 'HattemCentraal', votes: 1685, seats: 0 },
        { party: 'ChristenUnie', votes: 1597, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 1155, seats: 0 },
        { party: 'CDA', votes: 1006, seats: 0 },
        { party: 'VVD', votes: 601, seats: 0 },
        { party: 'D66', votes: 395, seats: 0 }
    ]
  },
  { name: 'Heemskerk', inhabitants: 39188, seats: 25, turnout: 52.7, province: 'Noord-Holland', x: 49, y: 33, electionResults: [
        { party: 'Heemskerk Lokaal', votes: 4820, seats: 0 },
        { party: 'D66', votes: 1895, seats: 0 },
        { party: 'VVD', votes: 1817, seats: 0 },
        { party: 'Liberaal Heemskerk', votes: 1720, seats: 0 },
        { party: 'GROENLINKS', votes: 1651, seats: 0 },
        { party: 'CDA', votes: 1548, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1273, seats: 0 }
    ]
  },
  { name: 'Heemstede', inhabitants: 27239, seats: 21, turnout: 59.3, province: 'Noord-Holland', x: 48, y: 38, electionResults: [
        { party: 'VVD', votes: 3137, seats: 0 },
        { party: 'Heemsteeds Burger Belang', votes: 2875, seats: 0 },
        { party: 'D66', votes: 2557, seats: 0 },
        { party: 'GROENLINKS', votes: 1871, seats: 0 },
        { party: 'CDA', votes: 1270, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1179, seats: 0 },
        { party: 'SamenSterkHeemstede', votes: 562, seats: 0 }
    ]
  },
  { name: 'Heerenveen', inhabitants: 50494, seats: 27, turnout: 54.8, province: 'Friesland', x: 62, y: 25, electionResults: [
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 4278, seats: 0 },
        { party: 'VVD', votes: 2605, seats: 0 },
        { party: 'FNP', votes: 2341, seats: 0 },
        { party: 'Heerenveen Lokaal', votes: 2303, seats: 0 },
        { party: 'GROENLINKS', votes: 2068, seats: 0 },
        { party: 'CDA', votes: 2049, seats: 0 },
        { party: 'D66', votes: 1764, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1527, seats: 0 },
        { party: 'GemeenteBelangen', votes: 1519, seats: 0 },
        { party: 'ChristenUnie', votes: 924, seats: 0 },
        { party: 'Blanco (van der Kooij, P.)', votes: 224, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 162, seats: 0 }
    ]
  },
  { name: 'Heerlen', inhabitants: 87057, seats: 35, turnout: 47.9, province: 'Limburg', x: 60, y: 76, electionResults: [
        { party: 'Ouderen Partij Heerlen (OPH)', votes: 5845, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 5346, seats: 0 },
        { party: 'CDA', votes: 3369, seats: 0 },
        { party: 'Jongerenpartij Heerlen', votes: 2211, seats: 0 },
        { party: 'Partij Hoensbroeks Belang', votes: 1920, seats: 0 },
        { party: 'VVD', votes: 1855, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 1625, seats: 0 },
        { party: 'D66', votes: 1516, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 1317, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1304, seats: 0 },
        { party: 'GROENLINKS', votes: 1257, seats: 0 },
        { party: 'Hart Leers', votes: 1116, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 946, seats: 0 },
        { party: 'Stadspartij', votes: 659, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 144, seats: 0 }
    ]
  },
  { name: 'Heeze-Leende', inhabitants: 16150, seats: 15, turnout: 61.2, province: 'Noord-Brabant', x: 57, y: 64, electionResults: [
        { party: 'Lokaal Heeze-Leende', votes: 1605, seats: 0 },
        { party: 'Algemeen belang Heeze-Leende (AbHL)', votes: 1312, seats: 0 },
        { party: 'CDA', votes: 1114, seats: 0 },
        { party: 'VVD', votes: 989, seats: 0 },
        { party: 'GROENLINKS', votes: 934, seats: 0 },
        { party: 'Partij voor Oud en Jong (PvOJ)', votes: 774, seats: 0 },
        { party: 'D66', votes: 557, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 315, seats: 0 }
    ]
  },
  { name: 'Heiloo', inhabitants: 23974, seats: 19, turnout: 57.6, province: 'Noord-Holland', x: 49, y: 31, electionResults: [
        { party: 'Heiloo-2000', votes: 2950, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2087, seats: 0 },
        { party: 'VVD', votes: 1894, seats: 0 },
        { party: 'D66', votes: 1651, seats: 0 },
        { party: 'Gemeentebelangen Heiloo', votes: 1370, seats: 0 },
        { party: 'CDA', votes: 1366, seats: 0 },
        { party: 'Heiloo Lokaal', votes: 948, seats: 0 }
    ]
  },
  { name: 'Hellendoorn', inhabitants: 35923, seats: 23, turnout: 58.4, province: 'Overijssel', x: 66, y: 44, electionResults: [
        { party: 'Lokaal Hellendoorn', votes: 8603, seats: 0 },
        { party: 'CDA', votes: 3104, seats: 0 },
        { party: 'GROENLINKS', votes: 1691, seats: 0 },
        { party: 'VVD', votes: 1524, seats: 0 },
        { party: 'ChristenUnie', votes: 1131, seats: 0 },
        { party: 'D66', votes: 717, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 648, seats: 0 }
    ]
  },
  { name: 'Hellevoetsluis', inhabitants: 40158, seats: 25, turnout: 53.9, province: 'Zuid-Holland', x: 46, y: 51 },
  { name: 'Helmond', inhabitants: 92968, seats: 35, turnout: 48.3, province: 'Noord-Brabant', x: 58, y: 62, electionResults: [
        { party: 'GROENLINKS', votes: 4887, seats: 0 },
        { party: 'VVD', votes: 4763, seats: 0 },
        { party: 'Helder Helmond', votes: 3542, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2554, seats: 0 },
        { party: 'CDA', votes: 2449, seats: 0 },
        { party: 'D66', votes: 2203, seats: 0 },
        { party: 'Lokaal sterk', votes: 2018, seats: 0 },
        { party: '50PLUS', votes: 1530, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1394, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1374, seats: 0 },
        { party: 'DENK', votes: 731, seats: 0 },
        { party: 'MÌ HELLEMONDERS', votes: 721, seats: 0 },
        { party: 'plan!', votes: 544, seats: 0 },
        { party: 'ChristenUnie', votes: 314, seats: 0 }
    ]
  },
  { name: 'Hendrik-Ido-Ambacht', inhabitants: 31204, seats: 21, turnout: 51.7, province: 'Zuid-Holland', x: 49, y: 50, electionResults: [
        { party: 'SGP-ChristenUnie', votes: 3760, seats: 0 },
        { party: 'Gemeente Belangen', votes: 2122, seats: 0 },
        { party: 'VVD', votes: 1895, seats: 0 },
        { party: 'Realistisch Ambacht', votes: 1277, seats: 0 },
        { party: 'CDA', votes: 1186, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1139, seats: 0 },
        { party: 'D66', votes: 1079, seats: 0 },
        { party: 'ECHT VOOR AMBACHT (E.V.A.)', votes: 805, seats: 0 },
        { party: 'A.U.B.', votes: 292, seats: 0 }
    ]
  },
  { name: 'Hengelo', inhabitants: 81147, seats: 33, turnout: 50.6, province: 'Overijssel', x: 69, y: 46 },
  { name: 'Het Hogeland', inhabitants: 47834, seats: 27, turnout: 54.9, province: 'Groningen', x: 67, y: 16, electionResults: [
        { party: 'GemeenteBelangen Het Hogeland', votes: 5163, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2974, seats: 0 },
        { party: 'CDA', votes: 2862, seats: 0 },
        { party: 'ChristenUnie', votes: 2849, seats: 0 },
        { party: 'GROENLINKS', votes: 2531, seats: 0 },
        { party: 'Hogeland Lokaal Centraal', votes: 2147, seats: 0 },
        { party: 'Lokaal Sociaal', votes: 1628, seats: 0 },
        { party: 'VVD', votes: 1243, seats: 0 }
    ]
  },
  { name: 'Heumen', inhabitants: 16450, seats: 15, turnout: 58.7, province: 'Gelderland', x: 60, y: 51, electionResults: [
        { party: 'Democraten Gemeente Heumen', votes: 2819, seats: 0 },
        { party: 'GROENLINKS', votes: 1069, seats: 0 },
        { party: 'VVD', votes: 976, seats: 0 },
        { party: 'CDA', votes: 881, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 865, seats: 0 },
        { party: 'D66', votes: 812, seats: 0 },
        { party: 'De Kiezersclub', votes: 644, seats: 0 }
    ]
  },
  { name: 'Heusden', inhabitants: 44699, seats: 25, turnout: 57.2, province: 'Noord-Brabant', x: 53, y: 57, electionResults: [
        { party: 'DMP Heusden', votes: 4000, seats: 0 },
        { party: 'Gemeentebelangen', votes: 3411, seats: 0 },
        { party: 'Heusden één', votes: 2107, seats: 0 },
        { party: 'Heusden Transparant', votes: 1869, seats: 0 },
        { party: 'VVD', votes: 1830, seats: 0 },
        { party: 'GROENLINKS / Partij van de Arbeid (P.v.d.A.)', votes: 1546, seats: 0 },
        { party: 'CDA', votes: 1340, seats: 0 },
        { party: 'Heusden Verbindt', votes: 917, seats: 0 },
        { party: 'D66', votes: 784, seats: 0 }
    ]
  },
  { name: 'Hillegom', inhabitants: 22208, seats: 17, turnout: 54.8, province: 'Zuid-Holland', x: 47, y: 41, electionResults: [
        { party: 'BEVOLKINGSBELANGEN HILLEGOM (BBH)', votes: 3499, seats: 0 },
        { party: 'Bloeiend Hillegom', votes: 1678, seats: 0 },
        { party: 'D66', votes: 1130, seats: 0 },
        { party: 'CDA', votes: 938, seats: 0 },
        { party: 'VVD', votes: 860, seats: 0 },
        { party: 'GROENLINKS', votes: 811, seats: 0 },
        { party: 'Hart voor Hillegom', votes: 483, seats: 0 }
    ]
  },
  { name: 'Hilvarenbeek', inhabitants: 15514, seats: 15, turnout: 62.3, province: 'Noord-Brabant', x: 53, y: 62, electionResults: [
        { party: 'HOI Werkt', votes: 3879, seats: 0 },
        { party: 'VVD', votes: 2295, seats: 0 },
        { party: 'CDA', votes: 1361, seats: 0 }
    ]
  },
  { name: 'Hilversum', inhabitants: 92407, seats: 35, turnout: 55.3, province: 'Noord-Holland', x: 55, y: 40, electionResults: [
        { party: 'Hart voor Hilversum', votes: 6678, seats: 0 },
        { party: 'D66', votes: 6257, seats: 0 },
        { party: 'VVD', votes: 4927, seats: 0 },
        { party: 'GROENLINKS', votes: 4062, seats: 0 },
        { party: 'CDA', votes: 3313, seats: 0 },
        { party: 'Democraten Hilversum', votes: 2475, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2438, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2002, seats: 0 },
        { party: 'ChristenUnie', votes: 1615, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 1016, seats: 0 },
        { party: 'Hilversums Lokaal Belang', votes: 585, seats: 0 },
        { party: 'Leefbaar Hilversum', votes: 465, seats: 0 }
    ]
  },
  { name: 'Hoeksche Waard', inhabitants: 87461, seats: 35, turnout: 56.4, province: 'Zuid-Holland', x: 48, y: 52, electionResults: [
        { party: 'CDA', votes: 5958, seats: 0 },
        { party: 'Lokalen Hoeksche Waard', votes: 5140, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 4959, seats: 0 },
        { party: 'VVD', votes: 4649, seats: 0 },
        { party: 'VoorWaards Hoeksche Waard', votes: 3685, seats: 0 },
        { party: 'ChristenUnie', votes: 2408, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2402, seats: 0 },
        { party: 'GROENLINKS', votes: 2282, seats: 0 },
        { party: 'Constructief Hoeksche Waard', votes: 2235, seats: 0 },
        { party: 'D66', votes: 2113, seats: 0 },
        { party: 'BurgerBelangen Hoeksche Waard', votes: 1347, seats: 0 },
        { party: 'Waardig Ouder Worden (WOW) HW', votes: 1149, seats: 0 }
    ]
  },
  { name: 'Hof van Twente', inhabitants: 35013, seats: 23, turnout: 60.2, province: 'Overijssel', x: 67, y: 44, electionResults: [
        { party: 'CDA', votes: 4499, seats: 0 },
        { party: 'Gemeente Belangen', votes: 3006, seats: 0 },
        { party: 'VVD', votes: 2859, seats: 0 },
        { party: 'In Beweging', votes: 1912, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1844, seats: 0 },
        { party: 'D66', votes: 1282, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 760, seats: 0 }
    ]
  },
  { name: 'Hollands Kroon', inhabitants: 48434, seats: 27, turnout: 55.7, province: 'Noord-Holland', x: 50, y: 24, electionResults: [
        { party: 'Onafhankelijk Hollands Kroon', votes: 5008, seats: 0 },
        { party: 'CDA', votes: 2808, seats: 0 },
        { party: 'VVD', votes: 2321, seats: 0 },
        { party: 'SHK', votes: 2305, seats: 0 },
        { party: 'GROENLINKS', votes: 1663, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1488, seats: 0 },
        { party: 'LADA & ANDERS !', votes: 1337, seats: 0 },
        { party: 'D66', votes: 1129, seats: 0 }
    ]
  },
  { name: 'Hoogeveen', inhabitants: 55697, seats: 29, turnout: 53.2, province: 'Drenthe', x: 67, y: 32, electionResults: [
        { party: 'Gemeentebelangen Hoogeveen e.o.', votes: 4420, seats: 0 },
        { party: 'CDA', votes: 3528, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 3478, seats: 0 },
        { party: 'VVD', votes: 2315, seats: 0 },
        { party: 'ChristenUnie', votes: 2241, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1542, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1531, seats: 0 },
        { party: 'D66', votes: 1091, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 823, seats: 0 },
        { party: 'GROENLINKS', votes: 704, seats: 0 }
    ]
  },
  { name: 'Hoorn', inhabitants: 73634, seats: 33, turnout: 50.6, province: 'Noord-Holland', x: 52, y: 30, electionResults: [
        { party: 'Fractie Tonnaer', votes: 3994, seats: 0 },
        { party: 'Hoorn Lokaal', votes: 3079, seats: 0 },
        { party: 'GROENLINKS', votes: 2796, seats: 0 },
        { party: 'ÉénHoorn', votes: 2779, seats: 0 },
        { party: 'CDA', votes: 2680, seats: 0 },
        { party: 'VVD', votes: 2500, seats: 0 },
        { party: 'D66', votes: 2177, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2145, seats: 0 },
        { party: 'Sociaal Hoorn', votes: 1835, seats: 0 },
        { party: 'Liberaal Hoorn', votes: 1749, seats: 0 },
        { party: 'De Realistische Partij (DRP)', votes: 961, seats: 0 },
        { party: 'ChristenUnie', votes: 680, seats: 0 }
    ]
  },
  { name: 'Horst aan de Maas', inhabitants: 42433, seats: 25, turnout: 59.6, province: 'Limburg', x: 63, y: 60, electionResults: [
        { party: 'CDA', votes: 4570, seats: 0 },
        { party: 'Essentie', votes: 3581, seats: 0 },
        { party: 'D66 / GROENLINKS', votes: 2860, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2678, seats: 0 },
        { party: 'Perspectief Horst aan de Maas', votes: 2260, seats: 0 },
        { party: 'VVD', votes: 1720, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 1559, seats: 0 }
    ]
  },
  { name: 'Houten', inhabitants: 50146, seats: 27, turnout: 58.9, province: 'Utrecht', x: 54, y: 46, electionResults: [
        { party: 'Inwonerspartij Toekomst Houten', votes: 5109, seats: 0 },
        { party: 'D66', votes: 3184, seats: 0 },
        { party: 'GROENLINKS', votes: 2642, seats: 0 },
        { party: 'NatúúrlijkHouten', votes: 2554, seats: 0 },
        { party: 'VVD', votes: 2473, seats: 0 },
        { party: 'CDA', votes: 2149, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1765, seats: 0 },
        { party: 'ChristenUnie', votes: 1185, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1172, seats: 0 },
        { party: 'Houten Anders!', votes: 1002, seats: 0 }
    ]
  },
  { name: 'Huizen', inhabitants: 41273, seats: 25, turnout: 56.7, province: 'Noord-Holland', x: 55, y: 38, electionResults: [
        { party: 'VVD', votes: 2869, seats: 0 },
        { party: 'Leefbaar Huizen', votes: 2646, seats: 0 },
        { party: 'Dorpsbelangen Huizen', votes: 2309, seats: 0 },
        { party: 'CDA', votes: 2185, seats: 0 },
        { party: 'D66', votes: 2070, seats: 0 },
        { party: 'GROENLINKS', votes: 1644, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1574, seats: 0 },
        { party: 'ChristenUnie', votes: 1337, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 833, seats: 0 },
        { party: 'Transparant Huizen', votes: 682, seats: 0 }
    ]
  },
  { name: 'Hulst', inhabitants: 27556, seats: 21, turnout: 58.3, province: 'Zeeland', x: 41, y: 60, electionResults: [
        { party: 'Algemeen Belang Groot Hulst', votes: 3876, seats: 0 },
        { party: 'CDA', votes: 2180, seats: 0 },
        { party: 'Groot Hontenisse - Hulst', votes: 1567, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1384, seats: 0 },
        { party: 'HulstPLUS', votes: 1086, seats: 0 },
        { party: 'VVD', votes: 889, seats: 0 },
        { party: 'D66', votes: 642, seats: 0 },
        { party: 'Forum voor Democratie', votes: 525, seats: 0 }
    ]
  },
  { name: 'IJsselstein', inhabitants: 34110, seats: 23, turnout: 55.4, province: 'Utrecht', x: 53, y: 46, electionResults: [
        { party: 'LDIJ', votes: 4814, seats: 0 },
        { party: 'VVD', votes: 2039, seats: 0 },
        { party: 'CDA', votes: 1678, seats: 0 },
        { party: 'GROENLINKS', votes: 1444, seats: 0 },
        { party: 'D66', votes: 1379, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1211, seats: 0 },
        { party: 'ChristenUnie', votes: 686, seats: 0 }
    ]
  },
  { name: 'Kaag en Braassem', inhabitants: 27300, seats: 21, turnout: 55.8, province: 'Zuid-Holland', x: 48, y: 43, electionResults: [
        { party: 'PRO Kaag en Braassem', votes: 4192, seats: 0 },
        { party: 'CDA', votes: 2414, seats: 0 },
        { party: 'Samen voor Kaag & Braassem', votes: 2123, seats: 0 },
        { party: 'D66', votes: 1719, seats: 0 },
        { party: 'VVD', votes: 1625, seats: 0 }
    ]
  },
  { name: 'Kampen', inhabitants: 54340, seats: 29, turnout: 60.7, province: 'Overijssel', x: 60, y: 35, electionResults: [
        { party: 'ChristenUnie', votes: 5074, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 3636, seats: 0 },
        { party: 'CDA', votes: 3305, seats: 0 },
        { party: 'Gemeente Belang Kampen', votes: 3209, seats: 0 },
        { party: 'Kampen Sociaal', votes: 2257, seats: 0 },
        { party: 'GROENLINKS', votes: 2202, seats: 0 },
        { party: 'D66', votes: 1937, seats: 0 },
        { party: 'Hart voor Kampen', votes: 1652, seats: 0 },
        { party: 'VVD', votes: 1546, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 990, seats: 0 }
    ]
  },
  { name: 'Kapelle', inhabitants: 12691, seats: 13, turnout: 57.9, province: 'Zeeland', x: 43, y: 55, electionResults: [
        { party: 'VVD', votes: 1616, seats: 0 },
        { party: 'Gemeentebelang', votes: 1294, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1182, seats: 0 },
        { party: 'CDA', votes: 914, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 818, seats: 0 },
        { party: 'ChristenUnie', votes: 533, seats: 0 },
        { party: 'D66', votes: 482, seats: 0 }
    ]
  },
  { name: 'Katwijk', inhabitants: 65754, seats: 31, turnout: 54.6, province: 'Zuid-Holland', x: 46, y: 43, electionResults: [
        { party: 'DURF', votes: 7269, seats: 0 },
        { party: 'CDA', votes: 5565, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 4211, seats: 0 },
        { party: 'ChristenUnie', votes: 3588, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2670, seats: 0 },
        { party: 'VVD', votes: 2237, seats: 0 },
        { party: 'GemeenteBelangen', votes: 1426, seats: 0 },
        { party: 'KiesKatwijk', votes: 1137, seats: 0 },
        { party: 'D66', votes: 984, seats: 0 },
        { party: 'Hart Voor Katwijk', votes: 625, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 204, seats: 0 }
    ]
  },
  { name: 'Kerkrade', inhabitants: 45640, seats: 27, turnout: 48.7, province: 'Limburg', x: 61, y: 77, electionResults: [
        { party: 'Burgerbelangen', votes: 5551, seats: 0 },
        { party: 'Ons Kerkrade', votes: 2513, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1751, seats: 0 },
        { party: 'Lokaal Alternatief', votes: 1559, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1474, seats: 0 },
        { party: 'Ouderenpartij Kerkrade', votes: 1205, seats: 0 },
        { party: 'CDA', votes: 1166, seats: 0 },
        { party: 'VVD', votes: 666, seats: 0 },
        { party: 'Hart voor Vrijheid', votes: 559, seats: 0 }
    ]
  },
  { name: 'Koggenland', inhabitants: 22752, seats: 19, turnout: 56.2, province: 'Noord-Holland', x: 51, y: 31, electionResults: [
        { party: 'VVD', votes: 3171, seats: 0 },
        { party: 'GBK', votes: 2611, seats: 0 },
        { party: 'CDA', votes: 2320, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 1208, seats: 0 },
        { party: 'D66', votes: 715, seats: 0 }
    ]
  },
  { name: 'Krimpen aan den IJssel', inhabitants: 29410, seats: 21, turnout: 52.8, province: 'Zuid-Holland', x: 49, y: 48, electionResults: [
        { party: 'Leefbaar Krimpen', votes: 3499, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 3005, seats: 0 },
        { party: 'Stem van Krimpen', votes: 2213, seats: 0 },
        { party: 'Krimpens Belang', votes: 1432, seats: 0 },
        { party: 'ChristenUnie', votes: 1029, seats: 0 },
        { party: 'VVD', votes: 900, seats: 0 },
        { party: 'CDA', votes: 843, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 780, seats: 0 },
        { party: 'GROENLINKS', votes: 512, seats: 0 },
        { party: 'D66', votes: 499, seats: 0 }
    ]
  },
  { name: 'Krimpenerwaard', inhabitants: 56319, seats: 29, turnout: 55.3, province: 'Zuid-Holland', x: 50, y: 48, electionResults: [
        { party: 'Gemeente Belang Krimpenerwaard (VGBK)', votes: 5378, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 4035, seats: 0 },
        { party: 'Leefbaar Krimpenerwaard', votes: 3287, seats: 0 },
        { party: 'Pro Krimpenerwaard', votes: 2917, seats: 0 },
        { party: 'CDA', votes: 2687, seats: 0 },
        { party: 'VVD', votes: 2545, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 1946, seats: 0 },
        { party: 'ChristenUnie', votes: 1907, seats: 0 },
        { party: 'D66', votes: 1332, seats: 0 },
        { party: 'Lokaal op 1', votes: 1005, seats: 0 }
    ]
  },
  { name: 'Laarbeek', inhabitants: 22530, seats: 19, turnout: 60.8, province: 'Noord-Brabant', x: 58, y: 60, electionResults: [
        { party: 'PNL Partij Nieuw Laarbeek', votes: 2884, seats: 0 },
        { party: 'De Werkgroep', votes: 1815, seats: 0 },
        { party: 'Algemeen Belang Laarbeek', votes: 1691, seats: 0 },
        { party: 'CDA', votes: 987, seats: 0 },
        { party: 'Ouderen Appèl - Hart voor Laarbeek', votes: 917, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 762, seats: 0 }
    ]
  },
  { name: 'Landerd', inhabitants: 15730, seats: 15, turnout: 61.4, province: 'Noord-Brabant', x: 57, y: 58 },
  { name: 'Landgraaf', inhabitants: 37457, seats: 25, turnout: 49.2, province: 'Limburg', x: 60, y: 77, electionResults: [
        { party: 'GBBL Ubach over Worms', votes: 2511, seats: 0 },
        { party: 'GBBL Schaesberg', votes: 2133, seats: 0 },
        { party: 'CDA', votes: 2079, seats: 0 },
        { party: 'GBBL Nieuwenhagen', votes: 2003, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 1539, seats: 0 },
        { party: 'Ouderen Partij Landgraaf', votes: 1400, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1062, seats: 0 },
        { party: 'VVD', votes: 896, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 716, seats: 0 },
        { party: 'GROENLINKS', votes: 634, seats: 0 }
    ]
  },
  { name: 'Landsmeer', inhabitants: 11492, seats: 13, turnout: 57.3, province: 'Noord-Holland', x: 52, y: 36, electionResults: [
        { party: 'Lokaal Landsmeer', votes: 1633, seats: 0 },
        { party: 'D66', votes: 919, seats: 0 },
        { party: 'VVD', votes: 742, seats: 0 },
        { party: 'GROENLINKS', votes: 686, seats: 0 },
        { party: 'Positief Landsmeer', votes: 619, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 471, seats: 0 },
        { party: 'CDA', votes: 288, seats: 0 },
        { party: 'Lijst Hop en Honing', votes: 139, seats: 0 }
    ]
  },
  { name: 'Lansingerland', inhabitants: 63365, seats: 31, turnout: 54.7, province: 'Zuid-Holland', x: 48, y: 47, electionResults: [
        { party: 'WIJ Lansingerland', votes: 5281, seats: 0 },
        { party: 'Leefbaar 3B', votes: 5241, seats: 0 },
        { party: 'CDA', votes: 4913, seats: 0 },
        { party: 'VVD', votes: 3630, seats: 0 },
        { party: 'D66', votes: 2390, seats: 0 },
        { party: 'ChristenUnie', votes: 2171, seats: 0 },
        { party: 'GROENLINKS', votes: 1406, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1286, seats: 0 }
    ]
  },
  { name: 'Laren', inhabitants: 11274, seats: 13, turnout: 62.1, province: 'Noord-Holland', x: 54, y: 39, electionResults: [
        { party: 'Larens Behoud', votes: 1660, seats: 0 },
        { party: 'VVD', votes: 1397, seats: 0 },
        { party: 'Liberaal Laren', votes: 796, seats: 0 },
        { party: 'Groen Laren', votes: 673, seats: 0 },
        { party: 'D66', votes: 591, seats: 0 },
        { party: 'CDA', votes: 396, seats: 0 }
    ]
  },
  { name: 'Leeuwarden', inhabitants: 124058, seats: 39, turnout: 53.1, province: 'Friesland', x: 59, y: 18, electionResults: [
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 9730, seats: 0 },
        { party: 'GROENLINKS', votes: 9034, seats: 0 },
        { party: 'FNP', votes: 5799, seats: 0 },
        { party: 'Gemeentebelangen (GBL)', votes: 5231, seats: 0 },
        { party: 'CDA', votes: 4946, seats: 0 },
        { party: 'VVD', votes: 4436, seats: 0 },
        { party: 'LIJST058', votes: 4306, seats: 0 },
        { party: 'D66', votes: 3614, seats: 0 },
        { party: 'ChristenUnie', votes: 2478, seats: 0 },
        { party: 'Forum voor Democratie', votes: 2149, seats: 0 }
    ]
  },
  { name: 'Leiden', inhabitants: 127046, seats: 39, turnout: 57.8, province: 'Zuid-Holland', x: 47, y: 43, electionResults: [
        { party: 'GROENLINKS', votes: 12521, seats: 0 },
        { party: 'D66', votes: 8647, seats: 0 },
        { party: 'VVD', votes: 6367, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 5546, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 4948, seats: 0 },
        { party: 'Partij Sleutelstad: De Leidse Lijst', votes: 4313, seats: 0 },
        { party: 'Studenten voor Leiden (SVL)', votes: 3122, seats: 0 },
        { party: 'CDA', votes: 3097, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2874, seats: 0 },
        { party: 'ChristenUnie', votes: 2024, seats: 0 },
        { party: 'Klimaatactie Nu', votes: 1062, seats: 0 },
        { party: 'Leiden Participeert', votes: 491, seats: 0 }
    ]
  },
  { name: 'Leiderdorp', inhabitants: 27059, seats: 21, turnout: 56.4, province: 'Zuid-Holland', x: 47, y: 44, electionResults: [
        { party: 'Lokale Partij Leiderdorp', votes: 2921, seats: 0 },
        { party: 'Partij van de Arbeid / GROENLINKS', votes: 2832, seats: 0 },
        { party: 'VVD', votes: 1961, seats: 0 },
        { party: 'D66', votes: 1911, seats: 0 },
        { party: 'CDA', votes: 1439, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 592, seats: 0 }
    ]
  },
  { name: 'Leidschendam-Voorburg', inhabitants: 76553, seats: 33, turnout: 53.9, province: 'Zuid-Holland', x: 46, y: 45, electionResults: [
        { party: 'VVD', votes: 6844, seats: 0 },
        { party: 'GBLV/Gemeentebelangen', votes: 6687, seats: 0 },
        { party: 'D66', votes: 4498, seats: 0 },
        { party: 'GROENLINKS', votes: 4428, seats: 0 },
        { party: 'CDA', votes: 3064, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2445, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1468, seats: 0 },
        { party: 'ChristenUnie', votes: 1172, seats: 0 }
    ]
  },
  { name: 'Lelystad', inhabitants: 78619, seats: 33, turnout: 47.8, province: 'Flevoland', x: 56, y: 36, electionResults: [
        { party: 'VVD', votes: 3169, seats: 0 },
        { party: 'JongLelystad', votes: 2406, seats: 0 },
        { party: 'GROENLINKS', votes: 2059, seats: 0 },
        { party: 'ChristenUnie', votes: 1962, seats: 0 },
        { party: 'Leefbaar Lelystad', votes: 1893, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1853, seats: 0 },
        { party: 'Inwoners Partij Lelystad', votes: 1767, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 1704, seats: 0 },
        { party: 'D66', votes: 1633, seats: 0 },
        { party: 'Mooi Lelystad', votes: 1473, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1460, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1296, seats: 0 },
        { party: 'CDA', votes: 1090, seats: 0 },
        { party: 'Gemeente Belangen Lelystad', votes: 991, seats: 0 },
        { party: 'DENK', votes: 398, seats: 0 },
        { party: 'Partij MENS (Met Eigenheid Naar Samen)', votes: 240, seats: 0 },
        { party: 'Partij voor Logisch Beleid (PvLB)', votes: 149, seats: 0 }
    ]
  },
  { name: 'Leudal', inhabitants: 35896, seats: 23, turnout: 60.2, province: 'Limburg', x: 61, y: 67, electionResults: [
        { party: 'Samen Verder', votes: 4216, seats: 0 },
        { party: 'Ronduit Open', votes: 3344, seats: 0 },
        { party: 'CDA', votes: 2793, seats: 0 },
        { party: 'D66', votes: 2753, seats: 0 },
        { party: 'PAL', votes: 1064, seats: 0 },
        { party: 'Oos Leudal (veur álle 16 dörpe)', votes: 436, seats: 0 }
    ]
  },
  { name: 'Leusden', inhabitants: 30399, seats: 21, turnout: 59.7, province: 'Utrecht', x: 56, y: 42, electionResults: [
        { party: 'Lokaal Belangrijk', votes: 4390, seats: 0 },
        { party: 'CDA', votes: 2410, seats: 0 },
        { party: 'GROENLINKS / Partij van de Arbeid (P.v.d.A.)', votes: 2383, seats: 0 },
        { party: 'VVD', votes: 1625, seats: 0 },
        { party: 'D66', votes: 1522, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 1324, seats: 0 },
        { party: 'Leusden Vooruit', votes: 1237, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 798, seats: 0 }
    ]
  },
  { name: 'Lingewaard', inhabitants: 46606, seats: 27, turnout: 56.8, province: 'Gelderland', x: 61, y: 49, electionResults: [
        { party: 'Lokaal Belang Lingewaard', votes: 3220, seats: 0 },
        { party: 'VVD', votes: 3141, seats: 0 },
        { party: 'GROENLINKS', votes: 2553, seats: 0 },
        { party: 'lingewaard.NU', votes: 1983, seats: 0 },
        { party: 'B06', votes: 1713, seats: 0 },
        { party: 'CDA', votes: 1674, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1661, seats: 0 },
        { party: 'D66', votes: 1621, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1167, seats: 0 },
        { party: 'LFS', votes: 378, seats: 0 },
        { party: 'Gin gezeur we gaon d', votes: 302, seats: 0 }
    ]
  },
  { name: 'Lisse', inhabitants: 22957, seats: 19, turnout: 55.3, province: 'Zuid-Holland', x: 47, y: 42, electionResults: [
        { party: 'NIEUW LISSE', votes: 2952, seats: 0 },
        { party: 'CDA', votes: 1835, seats: 0 },
        { party: 'VVD', votes: 1662, seats: 0 },
        { party: 'Partij van de Arbeid / GROENLINKS', votes: 1493, seats: 0 },
        { party: 'SGP-ChristenUnie', votes: 1133, seats: 0 },
        { party: 'D66', votes: 1097, seats: 0 }
    ]
  },
  { name: 'Lochem', inhabitants: 33730, seats: 23, turnout: 62.4, province: 'Gelderland', x: 65, y: 46, electionResults: [
        { party: 'Gemeentebelangen', votes: 5676, seats: 0 },
        { party: 'VVD', votes: 2091, seats: 0 },
        { party: 'MmL', votes: 1896, seats: 0 },
        { party: 'GROENLINKS', votes: 1864, seats: 0 },
        { party: 'LochemGroen!', votes: 1653, seats: 0 },
        { party: 'D66', votes: 1601, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1533, seats: 0 },
        { party: 'CDA', votes: 1292, seats: 0 }
    ]
  },
  { name: 'Loon op Zand', inhabitants: 23407, seats: 19, turnout: 58.6, province: 'Noord-Brabant', x: 52, y: 60, electionResults: [
        { party: 'Gemeentebelangen', votes: 2988, seats: 0 },
        { party: 'VVD', votes: 1524, seats: 0 },
        { party: 'Pro3', votes: 1518, seats: 0 },
        { party: 'CDA', votes: 1148, seats: 0 },
        { party: 'Voor Loon', votes: 1084, seats: 0 },
        { party: 'TOEKOMSTIG KLM', votes: 666, seats: 0 }
    ]
  },
  { name: 'Lopik', inhabitants: 14471, seats: 15, turnout: 56.7, province: 'Utrecht', x: 51, y: 47, electionResults: [
        { party: 'ChristenUnie-SGP', votes: 2088, seats: 0 },
        { party: 'Hart voor Lopik', votes: 1723, seats: 0 },
        { party: 'CDA', votes: 1205, seats: 0 },
        { party: 'VVD', votes: 906, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 576, seats: 0 }
    ]
  },
  { name: 'Losser', inhabitants: 22547, seats: 19, turnout: 58.9, province: 'Overijssel', x: 71, y: 48, electionResults: [
        { party: 'BURGERFORUM', votes: 3895, seats: 0 },
        { party: 'CDA', votes: 2944, seats: 0 },
        { party: 'D66', votes: 1170, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1139, seats: 0 },
        { party: 'VVD', votes: 1007, seats: 0 }
    ]
  },
  { name: 'Maasdriel', inhabitants: 25034, seats: 19, turnout: 56.2, province: 'Gelderland', x: 57, y: 51, electionResults: [
        { party: 'Samen Sterk Maasdriel', votes: 3747, seats: 0 },
        { party: 'CDA', votes: 2945, seats: 0 },
        { party: 'VVD', votes: 1673, seats: 0 },
        { party: 'GROENLINKS', votes: 963, seats: 0 },
        { party: 'D66', votes: 713, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 483, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 436, seats: 0 }
    ]
  },
  { name: 'Maasgouw', inhabitants: 23960, seats: 19, turnout: 59.3, province: 'Limburg', x: 61, y: 69, electionResults: [
        { party: 'Lokaal Belang', votes: 3676, seats: 0 },
        { party: 'LVM', votes: 1660, seats: 0 },
        { party: 'CDA', votes: 1527, seats: 0 },
        { party: 'VVD', votes: 1441, seats: 0 },
        { party: 'Nieuw Links Maasgouw', votes: 908, seats: 0 },
        { party: 'D66', votes: 623, seats: 0 }
    ]
  },
  { name: 'Maassluis', inhabitants: 33216, seats: 23, turnout: 50.4, province: 'Zuid-Holland', x: 46, y: 48, electionResults: [
        { party: 'CDA', votes: 2173, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1894, seats: 0 },
        { party: 'VVD', votes: 1875, seats: 0 },
        { party: 'Leefbaar Maessluys', votes: 1862, seats: 0 },
        { party: 'Maassluis Belang', votes: 1220, seats: 0 },
        { party: 'VSP Maassluis', votes: 928, seats: 0 },
        { party: 'ChristenUnie', votes: 919, seats: 0 },
        { party: 'D66', votes: 768, seats: 0 },
        { party: 'GROENLINKS', votes: 702, seats: 0 },
        { party: 'Forum voor Maassluis', votes: 600, seats: 0 }
    ]
  },
  { name: 'Maastricht', inhabitants: 121558, seats: 39, turnout: 52.4, province: 'Limburg', x: 58, y: 78, electionResults: [
        { party: 'Seniorenpartij Maastricht (SPM)', votes: 4869, seats: 0 },
        { party: 'GROENLINKS', votes: 4605, seats: 0 },
        { party: 'D66', votes: 4597, seats: 0 },
        { party: 'CDA', votes: 4538, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 4093, seats: 0 },
        { party: 'Partij Veilig Maastricht', votes: 3413, seats: 0 },
        { party: 'VVD', votes: 3152, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 2547, seats: 0 },
        { party: 'Volt', votes: 2218, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2126, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 1232, seats: 0 },
        { party: '50PLUS', votes: 1063, seats: 0 },
        { party: 'SAB Sociaal Actieve Burgerpartij', votes: 1055, seats: 0 },
        { party: 'M:OED', votes: 998, seats: 0 },
        { party: 'Liberale Partij Maastricht', votes: 992, seats: 0 },
        { party: 'Forum voor Democratie', votes: 964, seats: 0 },
        { party: 'Maastrichtse Ondernemers Partij', votes: 926, seats: 0 },
        { party: 'Maastricht Vooruit', votes: 595, seats: 0 },
        { party: 'ChristenUnie', votes: 392, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 227, seats: 0 },
        { party: 'RE:SET', votes: 212, seats: 0 },
        { party: 'Groep Gunther Maastricht', votes: 209, seats: 0 },
        { party: 'Blanco (De Groof, M.G.M.)', votes: 102, seats: 0 }
    ]
  },
  { name: 'Medemblik', inhabitants: 45104, seats: 27, turnout: 54.8, province: 'Noord-Holland', x: 53, y: 27, electionResults: [
        { party: 'Hart voor Medemblik', votes: 3735, seats: 0 },
        { party: 'CDA', votes: 3186, seats: 0 },
        { party: 'GemeenteBelangen', votes: 2991, seats: 0 },
        { party: 'VVD', votes: 2841, seats: 0 },
        { party: 'MORGEN!', votes: 2456, seats: 0 },
        { party: 'D66', votes: 1644, seats: 0 },
        { party: 'GROENLINKS', votes: 983, seats: 0 },
        { party: 'ChristenUnie', votes: 682, seats: 0 }
    ]
  },
  { name: 'Meerssen', inhabitants: 18832, seats: 17, turnout: 59.7, province: 'Limburg', x: 59, y: 77, electionResults: [
        { party: 'Lokaal DNA', votes: 3281, seats: 0 },
        { party: 'BRUG-M', votes: 2598, seats: 0 },
        { party: 'KIJK!!!', votes: 1239, seats: 0 },
        { party: 'CDA', votes: 752, seats: 0 },
        { party: 'PGM het Origineel', votes: 551, seats: 0 }
    ]
  },
  { name: 'Meierijstad', inhabitants: 81197, seats: 33, turnout: 59.2, province: 'Noord-Brabant', x: 56, y: 60, electionResults: [
        { party: 'CDA', votes: 5732, seats: 0 },
        { party: 'HIER', votes: 4580, seats: 0 },
        { party: 'Lokaal Meierijstad', votes: 4076, seats: 0 },
        { party: 'VVD', votes: 3975, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 3211, seats: 0 },
        { party: 'Gemeentebelang Meierijstad', votes: 2809, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 2609, seats: 0 },
        { party: 'Hart', votes: 2255, seats: 0 },
        { party: 'D66', votes: 1941, seats: 0 },
        { party: 'Forum voor Democratie', votes: 947, seats: 0 }
    ]
  },
  { name: 'Meppel', inhabitants: 33902, seats: 23, turnout: 52.6, province: 'Drenthe', x: 65, y: 33, electionResults: [
        { party: 'Sterk Meppel (SteM)', votes: 4383, seats: 0 },
        { party: 'VVD', votes: 2256, seats: 0 },
        { party: 'CDA', votes: 2003, seats: 0 },
        { party: 'ChristenUnie', votes: 1418, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1281, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1230, seats: 0 },
        { party: 'D66', votes: 1168, seats: 0 },
        { party: 'GROENLINKS', votes: 939, seats: 0 }
    ]
  },
  { name: 'Middelburg', inhabitants: 48544, seats: 27, turnout: 54.3, province: 'Zeeland', x: 42, y: 55, electionResults: [
        { party: 'GROENLINKS / Partij van de Arbeid (P.v.d.A.)', votes: 5190, seats: 0 },
        { party: 'Lokale Partij Middelburg', votes: 3601, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 2309, seats: 0 },
        { party: 'CDA', votes: 2282, seats: 0 },
        { party: 'D66', votes: 1894, seats: 0 },
        { party: 'ChristenUnie', votes: 1880, seats: 0 },
        { party: 'VVD', votes: 1819, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1128, seats: 0 },
        { party: 'Forum voor Democratie', votes: 821, seats: 0 },
        { party: '50PLUS', votes: 510, seats: 0 },
        { party: 'Piratenpartij', votes: 137, seats: 0 }
    ]
  },
  { name: 'Midden-Delfland', inhabitants: 19510, seats: 17, turnout: 58.4, province: 'Zuid-Holland', x: 47, y: 47, electionResults: [
        { party: 'Mijn Partij', votes: 2434, seats: 0 },
        { party: 'CDA', votes: 2178, seats: 0 },
        { party: 'OGP Midden-Delfland', votes: 1775, seats: 0 },
        { party: 'VVD', votes: 1468, seats: 0 },
        { party: 'D66', votes: 1113, seats: 0 },
        { party: 'ChristenUnie', votes: 505, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 366, seats: 0 }
    ]
  },
  { name: 'Midden-Drenthe', inhabitants: 33128, seats: 23, turnout: 56.9, province: 'Drenthe', x: 66, y: 29, electionResults: [
        { party: 'Gemeentebelangen - BBBondgenoot', votes: 3226, seats: 0 },
        { party: 'Gemeentebel Smilde-Beilen-Westerbork', votes: 3017, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2936, seats: 0 },
        { party: 'CDA', votes: 1917, seats: 0 },
        { party: 'VVD', votes: 1814, seats: 0 },
        { party: 'GROENLINKS', votes: 1143, seats: 0 },
        { party: 'ChristenUnie', votes: 912, seats: 0 },
        { party: 'D66', votes: 842, seats: 0 }
    ]
  },
  { name: 'Midden-Groningen', inhabitants: 60804, seats: 29, turnout: 53.7, province: 'Groningen', x: 68, y: 22, electionResults: [
        { party: 'GemeenteBelangen Midden-Groningen', votes: 5368, seats: 0 },
        { party: 'BBB-LMG', votes: 3851, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2909, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2000, seats: 0 },
        { party: 'CDA', votes: 1959, seats: 0 },
        { party: 'ChristenUnie', votes: 1957, seats: 0 },
        { party: 'VVD', votes: 1833, seats: 0 },
        { party: 'GROENLINKS', votes: 1791, seats: 0 },
        { party: 'D66', votes: 1264, seats: 0 }
    ]
  },
  { name: 'Moerdijk', inhabitants: 37136, seats: 25, turnout: 55.8, province: 'Noord-Brabant', x: 49, y: 56, electionResults: [
        { party: 'Onafhankelijk Moerdijk', votes: 4130, seats: 0 },
        { party: 'VVD', votes: 2294, seats: 0 },
        { party: 'Moerdijk Lokaal', votes: 1845, seats: 0 },
        { party: 'Burger Belangen Moerdijk / BBB Bondgenoot', votes: 1543, seats: 0 },
        { party: 'CDA', votes: 1491, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1379, seats: 0 },
        { party: 'ChristenUnie', votes: 851, seats: 0 },
        { party: 'D66', votes: 715, seats: 0 }
    ]
  },
  { name: 'Molenlanden', inhabitants: 43931, seats: 25, turnout: 58.2, province: 'Zuid-Holland', x: 50, y: 50, electionResults: [
        { party: 'Doe mee! Molenlanden', votes: 6728, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 4773, seats: 0 },
        { party: 'CDA', votes: 3947, seats: 0 },
        { party: 'ChristenUnie', votes: 3851, seats: 0 },
        { party: 'VVD', votes: 2142, seats: 0 },
        { party: 'Progressief Molenlanden', votes: 1249, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 324, seats: 0 }
    ]
  },
  { name: 'Montferland', inhabitants: 36009, seats: 23, turnout: 60.3, province: 'Gelderland', x: 63, y: 50, electionResults: [
        { party: 'CDA', votes: 3284, seats: 0 },
        { party: 'Helder', votes: 3066, seats: 0 },
        { party: 'Lijst Groot Montferland', votes: 2905, seats: 0 },
        { party: 'Lokaal Belang Montferland (LBM)', votes: 2017, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1982, seats: 0 },
        { party: 'VVD', votes: 1367, seats: 0 },
        { party: 'D66 Montferland', votes: 968, seats: 0 }
    ]
  },
  { name: 'Montfoort', inhabitants: 13920, seats: 15, turnout: 57.6, province: 'Utrecht', x: 51, y: 46, electionResults: [
        { party: 'Lokaal Montfoort', votes: 2047, seats: 0 },
        { party: 'Progressief Akkoord', votes: 1006, seats: 0 },
        { party: 'CDA', votes: 952, seats: 0 },
        { party: 'VVD', votes: 819, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 680, seats: 0 },
        { party: 'Inwonersbelangen Montfoort Linschoten', votes: 641, seats: 0 },
        { party: 'ChristenUnie', votes: 540, seats: 0 },
        { party: 'D66', votes: 429, seats: 0 }
    ]
  },
  { name: 'Mook en Middelaar', inhabitants: 7727, seats: 11, turnout: 61.2, province: 'Limburg', x: 61, y: 54, electionResults: [
        { party: 'Dorpsgroepering Pouwels (DGP)', votes: 1194, seats: 0 },
        { party: 'VVD', votes: 1101, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1011, seats: 0 },
        { party: 'GROENLINKS', votes: 756, seats: 0 },
        { party: 'CDA', votes: 150, seats: 0 }
    ]
  },
  { name: 'Neder-Betuwe', inhabitants: 24342, seats: 19, turnout: 57.8, province: 'Gelderland', x: 58, y: 49, electionResults: [
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 4905, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1606, seats: 0 },
        { party: 'Gemeentebelangen', votes: 1275, seats: 0 },
        { party: 'CDA', votes: 1270, seats: 0 },
        { party: 'VVD', votes: 1025, seats: 0 },
        { party: 'Vóór Neder-Betuwe', votes: 964, seats: 0 },
        { party: 'ChristenUnie', votes: 695, seats: 0 }
    ]
  },
  { name: 'Nederweert', inhabitants: 17022, seats: 15, turnout: 61.3, province: 'Limburg', x: 60, y: 68, electionResults: [
        { party: 'CDA', votes: 2681, seats: 0 },
        { party: 'Jongeren Akkoord Nederweert (J.A.N.)', votes: 2001, seats: 0 },
        { party: 'D66', votes: 1015, seats: 0 },
        { party: 'VVD', votes: 712, seats: 0 },
        { party: 'Nederweert Anders', votes: 709, seats: 0 },
        { party: 'GROENLINKS', votes: 422, seats: 0 },
        { party: 'Hart voor Vrijheid', votes: 238, seats: 0 }
    ]
  },
  { name: 'Nieuwegein', inhabitants: 63461, seats: 31, turnout: 52.7, province: 'Utrecht', x: 53, y: 46, electionResults: [
        { party: 'GROENLINKS', votes: 3795, seats: 0 },
        { party: 'VVD', votes: 3633, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2656, seats: 0 },
        { party: 'VSP', votes: 2267, seats: 0 },
        { party: 'D66', votes: 2141, seats: 0 },
        { party: 'LOKALE VERNIEUWING', votes: 2118, seats: 0 },
        { party: 'CDA', votes: 1742, seats: 0 },
        { party: 'ChristenUnie', votes: 1029, seats: 0 },
        { party: 'De Unie (van Nieuwegein)', votes: 861, seats: 0 },
        { party: 'ieders Belang', votes: 833, seats: 0 },
        { party: 'Stadspartij Núwegein (NÚ)', votes: 649, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 160, seats: 0 }
    ]
  },
  { name: 'Nieuwkoop', inhabitants: 28955, seats: 21, turnout: 56.9, province: 'Zuid-Holland', x: 49, y: 42, electionResults: [
        { party: 'Samen Beter Nieuwkoop', votes: 3535, seats: 0 },
        { party: 'VVD', votes: 3106, seats: 0 },
        { party: 'CDA', votes: 2345, seats: 0 },
        { party: 'Natuurlijk Nieuwkoop', votes: 2287, seats: 0 },
        { party: 'D66', votes: 1247, seats: 0 },
        { party: 'SGP-ChristenUnie', votes: 876, seats: 0 }
    ]
  },
  { name: 'Nijkerk', inhabitants: 43526, seats: 25, turnout: 59.8, province: 'Gelderland', x: 57, y: 41, electionResults: [
        { party: 'CDA', votes: 4508, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 4352, seats: 0 },
        { party: 'PROgressief 21 (D66, Groen Links, PvdA)', votes: 3830, seats: 0 },
        { party: 'De Lokale Partij', votes: 3765, seats: 0 },
        { party: 'VVD', votes: 2555, seats: 0 }
    ]
  },
  { name: 'Nijmegen', inhabitants: 179073, seats: 39, turnout: 59.1, province: 'Gelderland', x: 60, y: 52, electionResults: [
        { party: 'GROENLINKS', votes: 16149, seats: 0 },
        { party: 'Stadspartij Nijmegen', votes: 12873, seats: 0 },
        { party: 'D66', votes: 10664, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 8352, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 7726, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 7043, seats: 0 },
        { party: 'VVD', votes: 6184, seats: 0 },
        { party: 'CDA', votes: 3562, seats: 0 },
        { party: 'GewoonNijmegen.Nu', votes: 2713, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1598, seats: 0 },
        { party: '50PLUS', votes: 925, seats: 0 },
        { party: 'DENK', votes: 727, seats: 0 },
        { party: 'Piratenpartij', votes: 634, seats: 0 },
        { party: 'Blanco (Donders, A.J.A.)', votes: 152, seats: 0 }
    ]
  },
  { name: 'Nissewaard', inhabitants: 85237, seats: 35, turnout: 51.2, province: 'Zuid-Holland', x: 47, y: 50, electionResults: [
        { party: 'ONS', votes: 7961, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 3883, seats: 0 },
        { party: 'Nissewaard Lokaal', votes: 3389, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 3040, seats: 0 },
        { party: 'VOOR Nissewaard', votes: 2421, seats: 0 },
        { party: 'VVD', votes: 1866, seats: 0 },
        { party: 'CDA', votes: 1411, seats: 0 },
        { party: 'BELANG VAN NISSEWAARD', votes: 1348, seats: 0 },
        { party: 'Partij Jong Nissewaard (PJN)', votes: 1091, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 1071, seats: 0 },
        { party: 'GROENLINKS', votes: 1028, seats: 0 },
        { party: 'LieverLinks', votes: 340, seats: 0 }
    ]
  },
  { name: 'Noardeast-Fryslân', inhabitants: 45251, seats: 27, turnout: 55.8, province: 'Friesland', x: 62, y: 17 },
  { name: 'Noord-Beveland', inhabitants: 7395, seats: 11, turnout: 60.4, province: 'Zeeland', x: 43, y: 56, electionResults: [
        { party: 'Noord-Bevelands Belang', votes: 1244, seats: 0 },
        { party: 'VVD', votes: 621, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 530, seats: 0 },
        { party: 'Partij van de Arbeid / GROENLINKS', votes: 428, seats: 0 },
        { party: 'CDA', votes: 383, seats: 0 },
        { party: 'D66', votes: 345, seats: 0 },
        { party: 'BEN BEtrokken Noord-Beveland', votes: 272, seats: 0 }
    ]
  },
  { name: 'Noordenveld', inhabitants: 31242, seats: 21, turnout: 58.3, province: 'Drenthe', x: 66, y: 25, electionResults: [
        { party: 'Gemeentebelangen Noordenveld', votes: 5892, seats: 0 },
        { party: 'LGN', votes: 2364, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1731, seats: 0 },
        { party: 'GROENLINKS', votes: 1383, seats: 0 },
        { party: 'VVD', votes: 1333, seats: 0 },
        { party: 'ChristenUnie', votes: 920, seats: 0 },
        { party: 'CDA', votes: 819, seats: 0 },
        { party: 'D66', votes: 646, seats: 0 }
    ]
  },
  { name: 'Noordoostpolder', inhabitants: 47262, seats: 27, turnout: 54.9, province: 'Flevoland', x: 59, y: 32, electionResults: [
        { party: 'Politieke Unie', votes: 3659, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 3405, seats: 0 },
        { party: 'CDA', votes: 3301, seats: 0 },
        { party: 'ONS Noordoostpolder', votes: 2590, seats: 0 },
        { party: 'VVD', votes: 1981, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1480, seats: 0 },
        { party: 'GROENLINKS', votes: 1388, seats: 0 },
        { party: 'D66', votes: 1049, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 340, seats: 0 }
    ]
  },
  { name: 'Noordwijk', inhabitants: 43528, seats: 25, turnout: 56.7, province: 'Zuid-Holland', x: 46, y: 42, electionResults: [
        { party: 'VVD', votes: 3302, seats: 0 },
        { party: 'Partij voor de Inwoners', votes: 2847, seats: 0 },
        { party: 'NZLokaal', votes: 2686, seats: 0 },
        { party: 'CDA', votes: 2575, seats: 0 },
        { party: 'PUUR', votes: 2287, seats: 0 },
        { party: 'Lijst Salman Noordwijk', votes: 1747, seats: 0 },
        { party: 'GROENLINKS', votes: 1518, seats: 0 },
        { party: 'D66', votes: 1244, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1202, seats: 0 },
        { party: 'Bruisend Noordwijk', votes: 919, seats: 0 },
        { party: 'DOEN!', votes: 382, seats: 0 }
    ]
  },
  { name: 'Nuenen, Gerwen en Nederwetten', inhabitants: 23379, seats: 19, turnout: 60.9, province: 'Noord-Brabant', x: 57, y: 63, electionResults: [
        { party: 'W70 Nuenen Gerwen Nederwetten Eeneind', votes: 3134, seats: 0 },
        { party: 'GROENLINKS/Partij van de Arbeid', votes: 2409, seats: 0 },
        { party: 'VVD', votes: 1503, seats: 0 },
        { party: 'D66', votes: 1248, seats: 0 },
        { party: 'Combinatie Nuenen c.a.', votes: 1072, seats: 0 },
        { party: 'CDA', votes: 994, seats: 0 },
        { party: 'Lijst Pijs', votes: 691, seats: 0 }
    ]
  },
  { name: 'Nunspeet', inhabitants: 27852, seats: 21, turnout: 62.3, province: 'Gelderland', x: 59, y: 40, electionResults: [
        { party: 'Gemeentebelang', votes: 5411, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 4635, seats: 0 },
        { party: 'ChristenUnie', votes: 2578, seats: 0 },
        { party: 'CDA', votes: 1120, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 805, seats: 0 },
        { party: 'VVD', votes: 615, seats: 0 }
    ]
  },
  { name: 'Nutma', inhabitants: 25325, seats: 19, turnout: 57.4, province: 'Gelderland', x: 63, y: 43 },
  { name: 'Oegstgeest', inhabitants: 24843, seats: 19, turnout: 59.6, province: 'Zuid-Holland', x: 47, y: 43, electionResults: [
        { party: 'PrO/P.v.d.A./GROENLINKS', votes: 2687, seats: 0 },
        { party: 'D66', votes: 2586, seats: 0 },
        { party: 'VVD', votes: 2175, seats: 0 },
        { party: 'Hart voor Oegstgeest', votes: 2172, seats: 0 },
        { party: 'CDA', votes: 1498, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 574, seats: 0 },
        { party: 'Lokaal Oegstgeest', votes: 516, seats: 0 }
    ]
  },
  { name: 'Oirschot', inhabitants: 18723, seats: 17, turnout: 61.7, province: 'Noord-Brabant', x: 55, y: 63, electionResults: [
        { party: 'De Gewone Man', votes: 2420, seats: 0 },
        { party: 'CDA', votes: 1866, seats: 0 },
        { party: 'Dorpsvisie', votes: 1553, seats: 0 },
        { party: 'Sociaal Progressief Oirschot', votes: 1236, seats: 0 },
        { party: 'VVD', votes: 942, seats: 0 },
        { party: 'D66', votes: 729, seats: 0 }
    ]
  },
  { name: 'Oisterwijk', inhabitants: 26241, seats: 19, turnout: 60.2, province: 'Noord-Brabant', x: 53, y: 61 },
  { name: 'Oldambt', inhabitants: 38213, seats: 25, turnout: 51.8, province: 'Groningen', x: 72, y: 20, electionResults: [
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2161, seats: 0 },
        { party: 'Gemeentebelangen Oldambt', votes: 1967, seats: 0 },
        { party: 'Partij voor het Noorden', votes: 1547, seats: 0 },
        { party: 'Verenigde Communistische Partij', votes: 1442, seats: 0 },
        { party: 'VVD', votes: 1430, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1347, seats: 0 },
        { party: 'CDA', votes: 1000, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 859, seats: 0 },
        { party: 'D66', votes: 818, seats: 0 },
        { party: 'ChristenUnie', votes: 734, seats: 0 },
        { party: 'GROENLINKS', votes: 628, seats: 0 },
        { party: 'Oldambt Aktief', votes: 497, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 166, seats: 0 },
        { party: 'Blanco (Oosterhoff, B.)', votes: 81, seats: 0 }
    ]
  },
  { name: 'Oldebroek', inhabitants: 23645, seats: 19, turnout: 61.2, province: 'Gelderland', x: 60, y: 39, electionResults: [
        { party: 'ChristenUnie', votes: 2871, seats: 0 },
        { party: 'Algemeen Belang Oldebroek (A.B.O.)', votes: 1815, seats: 0 },
        { party: 'Blanco (de Nooijer, J.T.)', votes: 1425, seats: 0 },
        { party: 'CDA', votes: 1358, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1337, seats: 0 },
        { party: 'Duurzaam Oldebroek', votes: 728, seats: 0 },
        { party: 'VVD', votes: 632, seats: 0 },
        { party: 'D66', votes: 424, seats: 0 }
    ]
  },
  { name: 'Oldenzaal', inhabitants: 31840, seats: 21, turnout: 55.7, province: 'Overijssel', x: 70, y: 47, electionResults: [
        { party: 'WG Oldenzaal', votes: 4899, seats: 0 },
        { party: 'CDA', votes: 2386, seats: 0 },
        { party: 'VVD', votes: 2085, seats: 0 },
        { party: 'Solidair Oldenzaal (SO)', votes: 1549, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1078, seats: 0 },
        { party: 'GROENLINKS', votes: 1016, seats: 0 },
        { party: 'D66', votes: 725, seats: 0 }
    ]
  },
  { name: 'Olst-Wijhe', inhabitants: 18251, seats: 17, turnout: 60.8, province: 'Overijssel', x: 63, y: 41, electionResults: [
        { party: 'Gemeentebelangen Olst-Wijhe', votes: 2288, seats: 0 },
        { party: 'CDA', votes: 1707, seats: 0 },
        { party: 'VVD', votes: 1308, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1085, seats: 0 },
        { party: 'GROENLINKS', votes: 992, seats: 0 },
        { party: 'D66', votes: 572, seats: 0 },
        { party: 'PARTIJvdSPORT', votes: 369, seats: 0 }
    ]
  },
  { name: 'Ommen', inhabitants: 18007, seats: 17, turnout: 59.4, province: 'Overijssel', x: 65, y: 39, electionResults: [
        { party: 'LPO (Lokale Partij Ommen)', votes: 2067, seats: 0 },
        { party: 'CDA', votes: 2035, seats: 0 },
        { party: 'Volkspartij Ommen Vooruit (VOV)', votes: 1524, seats: 0 },
        { party: 'ChristenUnie', votes: 1483, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 669, seats: 0 },
        { party: 'D66', votes: 629, seats: 0 },
        { party: 'VVD', votes: 554, seats: 0 }
    ]
  },
  { name: 'Oost Gelre', inhabitants: 29623, seats: 21, turnout: 61.3, province: 'Gelderland', x: 67, y: 49, electionResults: [
        { party: 'CDA', votes: 3894, seats: 0 },
        { party: 'OOG', votes: 3304, seats: 0 },
        { party: 'VVD', votes: 2862, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1087, seats: 0 },
        { party: 'Nieuwe Liberalen OG', votes: 944, seats: 0 },
        { party: 'OLW (Onafhankelijke Lijst Wallerbos)', votes: 822, seats: 0 },
        { party: 'Democraten Oost Gelre', votes: 518, seats: 0 },
        { party: 'GROENLINKS', votes: 449, seats: 0 }
    ]
  },
  { name: 'Oosterhout', inhabitants: 56206, seats: 29, turnout: 54.9, province: 'Noord-Brabant', x: 50, y: 59, electionResults: [
        { party: 'Gemeentebelangen Oosterhout', votes: 4762, seats: 0 },
        { party: 'GROENLINKS', votes: 2969, seats: 0 },
        { party: 'VVD', votes: 2961, seats: 0 },
        { party: 'Gezond Burger Verstand', votes: 2676, seats: 0 },
        { party: 'Voor Heel Oosterhout', votes: 1878, seats: 0 },
        { party: 'D66', votes: 1861, seats: 0 },
        { party: 'CDA', votes: 1400, seats: 0 },
        { party: 'Lokaal Open en Sociaal (LOeS)', votes: 1226, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1027, seats: 0 }
    ]
  },
  { name: 'Ooststellingwerf', inhabitants: 25472, seats: 19, turnout: 56.2, province: 'Friesland', x: 64, y: 27, electionResults: [
        { party: 'OoststellingwerfsBelang', votes: 2325, seats: 0 },
        { party: 'GROENLINKS', votes: 1387, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1362, seats: 0 },
        { party: 'CDA', votes: 1243, seats: 0 },
        { party: 'VVD', votes: 1234, seats: 0 },
        { party: 'Vrije Partij Ooststellingwerf', votes: 1050, seats: 0 },
        { party: 'Lokaal Sociaal Ooststellingwerf', votes: 945, seats: 0 },
        { party: 'ChristenUnie', votes: 834, seats: 0 },
        { party: 'D66', votes: 649, seats: 0 }
    ]
  },
  { name: 'Oostzaan', inhabitants: 9843, seats: 13, turnout: 54.7, province: 'Noord-Holland', x: 50, y: 35, electionResults: [
        { party: 'VVD', votes: 1658, seats: 0 },
        { party: 'GROENLINKS', votes: 1045, seats: 0 },
        { party: 'CDA', votes: 627, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 619, seats: 0 },
        { party: 'D66', votes: 383, seats: 0 }
    ]
  },
  { name: 'Opmeer', inhabitants: 11837, seats: 13, turnout: 56.8, province: 'Noord-Holland', x: 51, y: 29, electionResults: [
        { party: 'CDA', votes: 1239, seats: 0 },
        { party: 'Gemeentebelangen Opmeer', votes: 994, seats: 0 },
        { party: 'VVD', votes: 846, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 841, seats: 0 },
        { party: 'DOOR SAMENWERKING VOORUIT (DSV)', votes: 685, seats: 0 },
        { party: 'Lokale Partij Opmeer', votes: 620, seats: 0 }
    ]
  },
  { name: 'Opsterland', inhabitants: 29742, seats: 21, turnout: 58.3, province: 'Friesland', x: 63, y: 25, electionResults: [
        { party: 'Opsterlands Belang', votes: 3155, seats: 0 },
        { party: 'FNP', votes: 2038, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1627, seats: 0 },
        { party: 'CDA', votes: 1617, seats: 0 },
        { party: 'ChristenUnie', votes: 1382, seats: 0 },
        { party: 'GROENLINKS', votes: 1230, seats: 0 },
        { party: 'VVD', votes: 1208, seats: 0 },
        { party: 'D66', votes: 839, seats: 0 }
    ]
  },
  { name: 'Oss', inhabitants: 91932, seats: 35, turnout: 55.6, province: 'Noord-Brabant', x: 57, y: 56, electionResults: [
        { party: 'V.D.G. (Voor de Gemeenschap)', votes: 9371, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 7178, seats: 0 },
        { party: 'CDA', votes: 4099, seats: 0 },
        { party: 'VVD', votes: 3358, seats: 0 },
        { party: 'D66', votes: 3174, seats: 0 },
        { party: 'GROENLINKS', votes: 2761, seats: 0 },
        { party: 'Beter Oss', votes: 2295, seats: 0 },
        { party: 'Dynamisch Democratisch Oss (DDO)', votes: 1366, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1221, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1122, seats: 0 }
    ]
  },
  { name: 'Oude IJsselstreek', inhabitants: 39392, seats: 25, turnout: 59.7, province: 'Gelderland', x: 66, y: 51, electionResults: [
        { party: 'Lokaal Belang', votes: 6527, seats: 0 },
        { party: 'DorpEnPlattelandBeweging', votes: 2357, seats: 0 },
        { party: 'CDA', votes: 2034, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1781, seats: 0 },
        { party: 'PRO!', votes: 1598, seats: 0 },
        { party: 'VVD', votes: 1363, seats: 0 },
        { party: 'Achterhoeks Democratisch Alternatief', votes: 801, seats: 0 },
        { party: 'D66', votes: 671, seats: 0 }
    ]
  },
  { name: 'Ouder-Amstel', inhabitants: 14029, seats: 15, turnout: 58.9, province: 'Noord-Holland', x: 52, y: 40, electionResults: [
        { party: 'Ouder-Amstel Anders', votes: 1334, seats: 0 },
        { party: 'VVD', votes: 1247, seats: 0 },
        { party: 'Natuurlijk Belang', votes: 1107, seats: 0 },
        { party: 'D66', votes: 1057, seats: 0 },
        { party: 'GROENLINKS', votes: 986, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 832, seats: 0 }
    ]
  },
  { name: 'Oudewater', inhabitants: 10224, seats: 13, turnout: 58.4, province: 'Utrecht', x: 50, y: 45, electionResults: [
        { party: 'CDA', votes: 1384, seats: 0 },
        { party: 'VVD', votes: 1330, seats: 0 },
        { party: 'De Onafhankelijken', votes: 1074, seats: 0 },
        { party: 'Progressief Oudewater', votes: 650, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 563, seats: 0 }
    ]
  },
  { name: 'Overbetuwe', inhabitants: 48135, seats: 27, turnout: 58.6, province: 'Gelderland', x: 59, y: 50, electionResults: [
        { party: 'Gemeentebelangen Overbetuwe', votes: 4762, seats: 0 },
        { party: 'CDA', votes: 4164, seats: 0 },
        { party: 'D66', votes: 2317, seats: 0 },
        { party: 'Burgerbelangen OverBetuwe (BOB)', votes: 2272, seats: 0 },
        { party: 'VVD', votes: 2089, seats: 0 },
        { party: 'GROENLINKS', votes: 1902, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 887, seats: 0 },
        { party: 'ChristenUnie', votes: 784, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 484, seats: 0 }
    ]
  },
  { name: 'Papendrecht', inhabitants: 32235, seats: 23, turnout: 52.3, province: 'Zuid-Holland', x: 50, y: 51, electionResults: [
        { party: 'PAPENDRECHTS ALGEMEEN BELANG', votes: 2405, seats: 0 },
        { party: 'Onafhankelijk Papendrecht', votes: 1876, seats: 0 },
        { party: 'VVD', votes: 1635, seats: 0 },
        { party: 'CDA', votes: 1354, seats: 0 },
        { party: 'ChristenUnie', votes: 1294, seats: 0 },
        { party: 'D66', votes: 1046, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 927, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 816, seats: 0 },
        { party: 'GROENLINKS', votes: 795, seats: 0 }
    ]
  },
  { name: 'Peel en Maas', inhabitants: 43420, seats: 25, turnout: 60.7, province: 'Limburg', x: 62, y: 64, electionResults: [
        { party: 'Lokaal Peel en Maas', votes: 6454, seats: 0 },
        { party: 'CDA', votes: 4736, seats: 0 },
        { party: 'VVD', votes: 3330, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)/GROENLINKS', votes: 1789, seats: 0 },
        { party: 'D66', votes: 1450, seats: 0 }
    ]
  },
  { name: 'Pekela', inhabitants: 12199, seats: 13, turnout: 50.8, province: 'Groningen', x: 73, y: 22, electionResults: [
        { party: 'Samen Voor Pekela', votes: 970, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 747, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 686, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 681, seats: 0 },
        { party: 'CDA', votes: 525, seats: 0 },
        { party: 'GROENLINKS', votes: 447, seats: 0 },
        { party: 'VVD', votes: 272, seats: 0 }
    ]
  },
  { name: 'Pijnacker-Nootdorp', inhabitants: 55329, seats: 29, turnout: 55.2, province: 'Zuid-Holland', x: 47, y: 46, electionResults: [
        { party: 'Eerlijk Alternatief', votes: 5215, seats: 0 },
        { party: 'D66', votes: 4259, seats: 0 },
        { party: 'VVD', votes: 3199, seats: 0 },
        { party: 'Progressief PN / P.v.d.A. / GROENLINKS', votes: 2939, seats: 0 },
        { party: 'CDA', votes: 2514, seats: 0 },
        { party: 'Trots Pijnacker-Nootdorp', votes: 1422, seats: 0 },
        { party: 'Gemeentebelangen', votes: 1384, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 1272, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 1076, seats: 0 }
    ]
  },
  { name: 'Purmerend', inhabitants: 81233, seats: 33, turnout: 49.8, province: 'Noord-Holland', x: 52, y: 33 },
  { name: 'Putten', inhabitants: 24664, seats: 19, turnout: 62.8, province: 'Gelderland', x: 59, y: 41, electionResults: [
        { party: 'Wij Putten', votes: 2554, seats: 0 },
        { party: 'GEMEENTEBELANGEN', votes: 2170, seats: 0 },
        { party: 'ChristenUnie', votes: 2051, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 2028, seats: 0 },
        { party: 'CDA', votes: 1763, seats: 0 },
        { party: 'VVD', votes: 1628, seats: 0 }
    ]
  },
  { name: 'Raalte', inhabitants: 37709, seats: 25, turnout: 59.3, province: 'Overijssel', x: 64, y: 42, electionResults: [
        { party: 'GemeenteBelangen', votes: 4801, seats: 0 },
        { party: 'BurgerBelangen', votes: 4677, seats: 0 },
        { party: 'CDA', votes: 3281, seats: 0 },
        { party: 'VVD', votes: 1942, seats: 0 },
        { party: 'GROENLINKS', votes: 924, seats: 0 },
        { party: 'D66', votes: 782, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 725, seats: 0 },
        { party: 'Lokaal Alternatief', votes: 414, seats: 0 }
    ]
  },
  { name: 'Reimerswaal', inhabitants: 22737, seats: 19, turnout: 57.4, province: 'Zeeland', x: 43, y: 56, electionResults: [
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 4345, seats: 0 },
        { party: 'LEEFBAAR REIMERSWAAL', votes: 2081, seats: 0 },
        { party: 'ChristenUnie', votes: 1270, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1081, seats: 0 },
        { party: 'VVD', votes: 1060, seats: 0 },
        { party: 'CDA', votes: 952, seats: 0 }
    ]
  },
  { name: 'Renkum', inhabitants: 31404, seats: 21, turnout: 60.2, province: 'Gelderland', x: 59, y: 48, electionResults: [
        { party: 'GemeenteBelangen Renkum', votes: 5288, seats: 0 },
        { party: 'GROENLINKS', votes: 2961, seats: 0 },
        { party: 'VVD', votes: 2290, seats: 0 },
        { party: 'D66', votes: 2044, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1898, seats: 0 },
        { party: 'CDA', votes: 1171, seats: 0 }
    ]
  },
  { name: 'Renswoude', inhabitants: 5448, seats: 11, turnout: 62.7, province: 'Utrecht', x: 55, y: 44, electionResults: [
        { party: 'Dorpsbelang Renswoude', votes: 878, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 759, seats: 0 },
        { party: 'VVD', votes: 556, seats: 0 },
        { party: 'ChristenUnie', votes: 450, seats: 0 },
        { party: 'CDA', votes: 326, seats: 0 }
    ]
  },
  { name: 'Reusel-De Mierden', inhabitants: 13110, seats: 15, turnout: 63.4, province: 'Noord-Brabant', x: 55, y: 65, electionResults: [
        { party: 'Samenwerking Reusel-De Mierden', votes: 2571, seats: 0 },
        { party: 'CDA', votes: 977, seats: 0 },
        { party: 'VVD', votes: 567, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 536, seats: 0 },
        { party: 'Democraten 66 (D66)', votes: 453, seats: 0 }
    ]
  },
  { name: 'Rheden', inhabitants: 43736, seats: 25, turnout: 59.8, province: 'Gelderland', x: 61, y: 47, electionResults: [
        { party: 'GROENLINKS', votes: 3077, seats: 0 },
        { party: 'D66', votes: 3010, seats: 0 },
        { party: 'VVD', votes: 2893, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2801, seats: 0 },
        { party: 'GPR Burgerbelangen', votes: 2478, seats: 0 },
        { party: 'CDA', votes: 1853, seats: 0 },
        { party: 'Volkspartij Politiek Rheden', votes: 1380, seats: 0 },
        { party: 'ChristenUnie', votes: 881, seats: 0 }
    ]
  },
  { name: 'Rhenen', inhabitants: 20125, seats: 17, turnout: 58.2, province: 'Utrecht', x: 56, y: 47, electionResults: [
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 2180, seats: 0 },
        { party: 'VVD', votes: 1454, seats: 0 },
        { party: 'RHENENS BELANG', votes: 1397, seats: 0 },
        { party: 'Progressief Rhenen/GROENLINKS', votes: 1137, seats: 0 },
        { party: 'D66', votes: 1134, seats: 0 },
        { party: 'ChristenUnie', votes: 722, seats: 0 },
        { party: 'CDA', votes: 607, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 515, seats: 0 },
        { party: 'Trots op Nederland (TROTS)', votes: 363, seats: 0 }
    ]
  },
  { name: 'Ridderkerk', inhabitants: 46204, seats: 27, turnout: 51.6, province: 'Zuid-Holland', x: 49, y: 49, electionResults: [
        { party: 'Partij 18PLUS', votes: 4205, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 2967, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 2689, seats: 0 },
        { party: 'Leefbaar Ridderkerk', votes: 1985, seats: 0 },
        { party: 'ChristenUnie', votes: 1863, seats: 0 },
        { party: 'Echt voor Ridderkerk', votes: 1571, seats: 0 },
        { party: 'CDA', votes: 1356, seats: 0 },
        { party: 'VVD', votes: 1154, seats: 0 },
        { party: 'Burger op 1', votes: 1001, seats: 0 }
    ]
  },
  { name: 'Rijssen-Holten', inhabitants: 38178, seats: 25, turnout: 63.2, province: 'Overijssel', x: 67, y: 43, electionResults: [
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 5909, seats: 0 },
        { party: 'Gemeentebelang Rijssen-Holten', votes: 4851, seats: 0 },
        { party: 'ChristenUnie', votes: 3135, seats: 0 },
        { party: 'CDA', votes: 2832, seats: 0 },
        { party: 'VVD', votes: 1899, seats: 0 },
        { party: 'GROENLINKS / Partij van de Arbeid (P.v.d.A.)', votes: 1505, seats: 0 }
    ]
  },
  { name: 'Rijswijk', inhabitants: 54432, seats: 29, turnout: 52.4, province: 'Zuid-Holland', x: 46, y: 46, electionResults: [
        { party: 'BETER VOOR RIJSWIJK (BVR)', votes: 3316, seats: 0 },
        { party: 'GROENLINKS', votes: 3031, seats: 0 },
        { party: 'RijswijksBelang (RB)', votes: 2786, seats: 0 },
        { party: 'Wij.', votes: 2655, seats: 0 },
        { party: 'D66', votes: 2514, seats: 0 },
        { party: 'VVD', votes: 2190, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1450, seats: 0 },
        { party: 'CDA', votes: 1153, seats: 0 },
        { party: 'ChristenUnie', votes: 723, seats: 0 },
        { party: 'P. Gelijkheid & Rechtvaardigheid', votes: 647, seats: 0 },
        { party: 'STOUDT', votes: 60, seats: 0 }
    ]
  },
  { name: 'Roerdalen', inhabitants: 20572, seats: 17, turnout: 60.8, province: 'Limburg', x: 61, y: 70, electionResults: [
        { party: 'Roerstreek Lokaal!', votes: 2519, seats: 0 },
        { party: 'CDA', votes: 1825, seats: 0 },
        { party: 'Democraten Roerdalen', votes: 1742, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 1123, seats: 0 },
        { party: 'Ons Roerdalen', votes: 996, seats: 0 }
    ]
  },
  { name: 'Roermond', inhabitants: 58254, seats: 29, turnout: 54.3, province: 'Limburg', x: 62, y: 66, electionResults: [
        { party: 'Liberale Volkspartij Roermond', votes: 7190, seats: 0 },
        { party: 'GROENLINKS', votes: 3606, seats: 0 },
        { party: 'CDA', votes: 2327, seats: 0 },
        { party: 'Demokraten Swalmen (DS)', votes: 2263, seats: 0 },
        { party: 'Stadspartij Roermond', votes: 1545, seats: 0 },
        { party: 'VVD', votes: 1473, seats: 0 },
        { party: 'D66', votes: 1465, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1346, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 798, seats: 0 },
        { party: 'Blanco (Arslan, M.)', votes: 511, seats: 0 },
        { party: 'DE FEESTPARTIJ (DFP)', votes: 115, seats: 0 }
    ]
  },
  { name: 'Roosendaal', inhabitants: 77226, seats: 33, turnout: 50.4, province: 'Noord-Brabant', x: 47, y: 58, electionResults: [
        { party: 'VLP Roosendaal', votes: 6877, seats: 0 },
        { party: 'Roosendaalse Lijst', votes: 4398, seats: 0 },
        { party: 'VVD', votes: 2739, seats: 0 },
        { party: 'GROENLINKS', votes: 2492, seats: 0 },
        { party: 'CDA', votes: 2462, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1679, seats: 0 },
        { party: 'D66', votes: 1248, seats: 0 },
        { party: 'Burgerbelangen Roosendaal', votes: 1078, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1031, seats: 0 },
        { party: 'Vitaal Liberaal', votes: 752, seats: 0 },
        { party: 'ChristenUnie', votes: 583, seats: 0 }
    ]
  },
  { name: 'Rotterdam', inhabitants: 651446, seats: 45, turnout: 49.8, province: 'Zuid-Holland', x: 48, y: 48, electionResults: [
        { party: 'Leefbaar Rotterdam', votes: 39972, seats: 0 },
        { party: 'VVD', votes: 22410, seats: 0 },
        { party: 'GROENLINKS', votes: 19806, seats: 0 },
        { party: 'D66', votes: 19761, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 17113, seats: 0 },
        { party: 'DENK', votes: 15612, seats: 0 },
        { party: 'Volt', votes: 10365, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 8552, seats: 0 },
        { party: 'BIJ1', votes: 8205, seats: 0 },
        { party: '50PLUS', votes: 7216, seats: 0 },
        { party: 'ChristenUnie', votes: 6822, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 5766, seats: 0 },
        { party: 'CDA', votes: 5749, seats: 0 },
        { party: 'Forum voor Democratie', votes: 4637, seats: 0 },
        { party: 'Jong Rotterdam', votes: 2250, seats: 0 },
        { party: 'Socialisten 010', votes: 2034, seats: 0 },
        { party: 'Beweging Armoedebestrijding Rotterdam', votes: 1439, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 504, seats: 0 },
        { party: 'Wij Kleurrijk Rotterdam', votes: 453, seats: 0 },
        { party: 'Lijst Meeuwissen', votes: 373, seats: 0 }
    ]
  },
  { name: 'Rozendaal', inhabitants: 1705, seats: 9, turnout: 68.2, province: 'Gelderland', x: 61, y: 47, electionResults: [
        { party: 'Rosendael ', votes: 450, seats: 0 },
        { party: 'Progressief Akkoord Rozendaal', votes: 415, seats: 0 },
        { party: 'BGR', votes: 197, seats: 0 }
    ]
  },
  { name: 'Rucphen', inhabitants: 22899, seats: 19, turnout: 60.3, province: 'Noord-Brabant', x: 48, y: 59, electionResults: [
        { party: 'Rucphense Volkspartij (RVP)', votes: 2908, seats: 0 },
        { party: 'VVD', votes: 2279, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 1211, seats: 0 },
        { party: 'CDA', votes: 976, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 564, seats: 0 },
        { party: 'FORZA RUCPHEN', votes: 403, seats: 0 }
    ]
  },
  { name: 'Schagen', inhabitants: 46482, seats: 27, turnout: 54.7, province: 'Noord-Holland', x: 49, y: 26, electionResults: [
        { party: 'CDA', votes: 4763, seats: 0 },
        { party: 'JessLokaal', votes: 3790, seats: 0 },
        { party: 'Seniorenpartij Schagen', votes: 3127, seats: 0 },
        { party: 'VVD', votes: 2494, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2157, seats: 0 },
        { party: 'GROENLINKS', votes: 1204, seats: 0 },
        { party: 'D66', votes: 1064, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 762, seats: 0 },
        { party: 'Wens4U (wij en Schagen voor u)', votes: 740, seats: 0 }
    ]
  },
  { name: 'Scherpenzeel', inhabitants: 9880, seats: 13, turnout: 61.4, province: 'Gelderland', x: 56, y: 45, electionResults: [
        { party: 'GemeenteBelangen Scherpenzeel (GBS)', votes: 1894, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1394, seats: 0 },
        { party: 'CDA', votes: 862, seats: 0 },
        { party: 'VVD', votes: 830, seats: 0 },
        { party: 'PRO Scherpenzeel', votes: 436, seats: 0 }
    ]
  },
  { name: 'Schiedam', inhabitants: 78739, seats: 33, turnout: 49.2, province: 'Zuid-Holland', x: 47, y: 48, electionResults: [
        { party: 'VVD', votes: 4205, seats: 0 },
        { party: 'DENK', votes: 3087, seats: 0 },
        { party: 'GROENLINKS', votes: 2832, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2513, seats: 0 },
        { party: 'D66', votes: 2386, seats: 0 },
        { party: 'OuderenPartij Schiedam', votes: 2268, seats: 0 },
        { party: 'PS Progressief Schiedam', votes: 1984, seats: 0 },
        { party: 'Blanco (Janssen, M.)', votes: 1833, seats: 0 },
        { party: 'Algemeen Ouderen Verbond', votes: 1792, seats: 0 },
        { party: 'CDA', votes: 1710, seats: 0 },
        { party: 'Lokaal Onafhankelijk Schiedam (L.O.S.)', votes: 1504, seats: 0 },
        { party: 'Sociaal Liberaal Verbond (S.L.V.)', votes: 381, seats: 0 }
    ]
  },
  { name: 'Schiermonnikoog', inhabitants: 936, seats: 9, turnout: 64.8, province: 'Friesland', x: 65, y: 14, electionResults: [
        { party: 'Ons Belang', votes: 293, seats: 0 },
        { party: 'SAMEN', votes: 214, seats: 0 },
        { party: 'Schiermonnikoogs Belang', votes: 148, seats: 0 }
    ]
  },
  { name: 'Schouwen-Duiveland', inhabitants: 33858, seats: 23, turnout: 57.9, province: 'Zeeland', x: 43, y: 53, electionResults: [
        { party: 'Leefbaar Schouwen-Duiveland', votes: 3775, seats: 0 },
        { party: 'CDA', votes: 2416, seats: 0 },
        { party: 'VVD', votes: 2351, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 2339, seats: 0 },
        { party: 'GROENLINKS', votes: 1899, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1285, seats: 0 },
        { party: 'ChristenUnie', votes: 1168, seats: 0 },
        { party: 'D66', votes: 1000, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 861, seats: 0 }
    ]
  },
  { name: 'Simpelveld', inhabitants: 10552, seats: 13, turnout: 61.2, province: 'Limburg', x: 60, y: 78, electionResults: [
        { party: 'Samen 1', votes: 1609, seats: 0 },
        { party: 'BurgerBelangen', votes: 1251, seats: 0 },
        { party: 'Leefbaar Simpelveld', votes: 888, seats: 0 },
        { party: 'CDA', votes: 696, seats: 0 },
        { party: 'Lokaal Actief', votes: 468, seats: 0 }
    ]
  },
  { name: 'Sittard-Geleen', inhabitants: 91976, seats: 35, turnout: 52.8, province: 'Limburg', x: 60, y: 74, electionResults: [
        { party: 'G.O.B.', votes: 10635, seats: 0 },
        { party: 'CDA', votes: 6588, seats: 0 },
        { party: 'GROENLINKS', votes: 4847, seats: 0 },
        { party: 'Stadspartij', votes: 2720, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 2117, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1797, seats: 0 },
        { party: 'D66', votes: 1617, seats: 0 },
        { party: 'Samen Politiek Actief (S.P.A.)', votes: 1565, seats: 0 },
        { party: 'Lokaal Sittard-Geleen-Born', votes: 1498, seats: 0 },
        { party: 'VVD', votes: 1433, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1210, seats: 0 },
        { party: 'PIT', votes: 1190, seats: 0 },
        { party: 'Blanco (Engelhart, J.G.J.)', votes: 742, seats: 0 }
    ]
  },
  { name: 'Sliedrecht', inhabitants: 25432, seats: 19, turnout: 51.9, province: 'Zuid-Holland', x: 50, y: 51, electionResults: [
        { party: 'SGP-ChristenUnie', votes: 3614, seats: 0 },
        { party: 'PRO Sliedrecht', votes: 2723, seats: 0 },
        { party: 'CDA', votes: 1459, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1054, seats: 0 },
        { party: 'Slydregt.NU', votes: 1011, seats: 0 },
        { party: 'VVD', votes: 984, seats: 0 },
        { party: 'D66', votes: 342, seats: 0 }
    ]
  },
  { name: 'Sluis', inhabitants: 23217, seats: 19, turnout: 59.4, province: 'Zeeland', x: 40, y: 59, electionResults: [
        { party: 'Sluis Lokaal', votes: 2199, seats: 0 },
        { party: 'VVD', votes: 1862, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1606, seats: 0 },
        { party: 'CDA', votes: 1364, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 767, seats: 0 },
        { party: 'Politieke Vereniging Lijst Babijn', votes: 653, seats: 0 },
        { party: 'Nieuw Gemeentebelang', votes: 593, seats: 0 },
        { party: 'GROENLINKS', votes: 511, seats: 0 },
        { party: 'Forum voor Democratie', votes: 472, seats: 0 }
    ]
  },
  { name: 'Smallingerland', inhabitants: 56154, seats: 29, turnout: 52.8, province: 'Friesland', x: 63, y: 22, electionResults: [
        { party: 'CDA', votes: 3379, seats: 0 },
        { party: 'ChristenUnie', votes: 3238, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2839, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2253, seats: 0 },
        { party: 'Eérste Lokale Partij (ELP)', votes: 2172, seats: 0 },
        { party: 'Smallingerlands Belang', votes: 2141, seats: 0 },
        { party: 'VVD', votes: 1956, seats: 0 },
        { party: 'GROENLINKS', votes: 1693, seats: 0 },
        { party: 'D66', votes: 1645, seats: 0 },
        { party: 'FNP', votes: 1237, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 419, seats: 0 }
    ]
  },
  { name: 'Soest', inhabitants: 46607, seats: 27, turnout: 58.3, province: 'Utrecht', x: 56, y: 42, electionResults: [
        { party: 'Soest 2002', votes: 3792, seats: 0 },
        { party: 'Gemeentebelangen Groen Soest', votes: 3618, seats: 0 },
        { party: 'VVD', votes: 3180, seats: 0 },
        { party: 'GROENLINKS', votes: 2293, seats: 0 },
        { party: 'POS', votes: 2275, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1819, seats: 0 },
        { party: 'D66', votes: 1474, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 1364, seats: 0 },
        { party: 'CDA', votes: 1079, seats: 0 },
        { party: 'Burgerbelangen Soest-Soesterberg', votes: 1063, seats: 0 }
    ]
  },
  { name: 'Someren', inhabitants: 19376, seats: 17, turnout: 61.8, province: 'Noord-Brabant', x: 58, y: 64, electionResults: [
        { party: 'Gemeenschapslijst', votes: 3098, seats: 0 },
        { party: 'CDA', votes: 1959, seats: 0 },
        { party: 'Wij Zijn Someren / VVD', votes: 1516, seats: 0 },
        { party: 'LSH', votes: 988, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 766, seats: 0 },
        { party: 'Leefbaar Someren', votes: 470, seats: 0 }
    ]
  },
  { name: 'Son en Breugel', inhabitants: 17321, seats: 17, turnout: 59.2, province: 'Noord-Brabant', x: 56, y: 63, electionResults: [
        { party: 'DorpsVISIE', votes: 1560, seats: 0 },
        { party: 'CDA', votes: 1399, seats: 0 },
        { party: 'VVD', votes: 1096, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 956, seats: 0 },
        { party: 'Voor U', votes: 947, seats: 0 },
        { party: 'Dorpsbelang Son en Breugel', votes: 704, seats: 0 },
        { party: 'D66', votes: 668, seats: 0 },
        { party: 'Blanco (Spooren, P.A.W.H.)', votes: 159, seats: 0 }
    ]
  },
  { name: 'Stadskanaal', inhabitants: 31688, seats: 21, turnout: 51.4, province: 'Groningen', x: 73, y: 23, electionResults: [
        { party: 'ChristenUnie', votes: 2108, seats: 0 },
        { party: 'CDA', votes: 1778, seats: 0 },
        { party: 'Lokaal Betrokken', votes: 1494, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1430, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1157, seats: 0 },
        { party: 'Gemeentebelangen Stadskanaal', votes: 948, seats: 0 },
        { party: 'VVD', votes: 865, seats: 0 },
        { party: 'D66', votes: 468, seats: 0 },
        { party: 'GROENLINKS', votes: 371, seats: 0 },
        { party: 'HerRman', votes: 134, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 115, seats: 0 }
    ]
  },
  { name: 'Staphorst', inhabitants: 17144, seats: 17, turnout: 67.3, province: 'Overijssel', x: 63, y: 36, electionResults: [
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 3354, seats: 0 },
        { party: 'ChristenUnie', votes: 2601, seats: 0 },
        { party: 'CDA', votes: 1607, seats: 0 },
        { party: 'Gemeentebelangen Staphorst', votes: 1346, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 526, seats: 0 }
    ]
  },
  { name: 'Stede Broec', inhabitants: 21734, seats: 17, turnout: 55.8, province: 'Noord-Holland', x: 52, y: 30, electionResults: [
        { party: 'Open en Duidelijk Stede Broec', votes: 2497, seats: 0 },
        { party: 'CDA', votes: 1960, seats: 0 },
        { party: 'VVD', votes: 1195, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 700, seats: 0 },
        { party: 'Gemeente Belangen Stede Broec (GBS)', votes: 644, seats: 0 },
        { party: 'Onafhankelijke Partij', votes: 569, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 459, seats: 0 },
        { party: 'Eerlijk Leefbaar Stede Broec', votes: 378, seats: 0 }
    ]
  },
  { name: 'Steenwijkerland', inhabitants: 44139, seats: 25, turnout: 56.7, province: 'Overijssel', x: 63, y: 33, electionResults: [
        { party: 'BuitenGewoon Leefbaar (BGL)', votes: 5339, seats: 0 },
        { party: 'Christelijke Partij Burgerbelangen (CPB)', votes: 3454, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2858, seats: 0 },
        { party: 'VVD', votes: 2338, seats: 0 },
        { party: 'CDA', votes: 1685, seats: 0 },
        { party: 'ChristenUnie', votes: 1569, seats: 0 },
        { party: 'GROENLINKS', votes: 1310, seats: 0 },
        { party: 'D66', votes: 966, seats: 0 },
        { party: 'PVBNI', votes: 406, seats: 0 }
    ]
  },
  { name: 'Stein', inhabitants: 24962, seats: 19, turnout: 57.2, province: 'Limburg', x: 59, y: 75, electionResults: [
        { party: 'DOS (Democratisch Onafhankelijken Stein)', votes: 4100, seats: 0 },
        { party: 'Communiceren Met Burgers (CMB)', votes: 3470, seats: 0 },
        { party: 'Politieke vereniging Steins Belang', votes: 1055, seats: 0 },
        { party: 'CDA', votes: 854, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 744, seats: 0 },
        { party: 'VVD', votes: 705, seats: 0 }
    ]
  },
  { name: 'Stichtse Vecht', inhabitants: 64928, seats: 31, turnout: 58.4, province: 'Utrecht', x: 53, y: 42, electionResults: [
        { party: 'Lokaal Liberaal', votes: 4927, seats: 0 },
        { party: 'VVD', votes: 3683, seats: 0 },
        { party: 'D66', votes: 3518, seats: 0 },
        { party: 'GROENLINKS', votes: 2557, seats: 0 },
        { party: 'Streekbelangen', votes: 2493, seats: 0 },
        { party: 'CDA', votes: 2404, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1910, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 1698, seats: 0 },
        { party: 'Samen Stichtse Vecht', votes: 1180, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1079, seats: 0 },
        { party: 'Het Vechtse Verbond', votes: 1049, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 1013, seats: 0 }
    ]
  },
  { name: 'Súdwest-Fryslân', inhabitants: 89987, seats: 35, turnout: 54.2, province: 'Friesland', x: 57, y: 22 },
  { name: 'Terneuzen', inhabitants: 54438, seats: 29, turnout: 53.6, province: 'Zeeland', x: 40, y: 58, electionResults: [
        { party: 'TOP/GEMEENTEBELANGEN', votes: 4085, seats: 0 },
        { party: 'CDA', votes: 2903, seats: 0 },
        { party: 'VVD', votes: 2092, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 1986, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1761, seats: 0 },
        { party: 'ChristenUnie', votes: 1411, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1216, seats: 0 },
        { party: '50PLUS', votes: 960, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 874, seats: 0 },
        { party: 'D66', votes: 778, seats: 0 },
        { party: 'GROENLINKS', votes: 753, seats: 0 },
        { party: 'Terneuzen Sterk', votes: 613, seats: 0 },
        { party: 'Sociaal Terneuzen', votes: 605, seats: 0 },
        { party: 'Bondgenoot Cees Freeke', votes: 241, seats: 0 }
    ]
  },
  { name: 'Terschelling', inhabitants: 4889, seats: 11, turnout: 61.7, province: 'Friesland', x: 55, y: 15, electionResults: [
        { party: 'Plaatselijk Belang Terschelling', votes: 729, seats: 0 },
        { party: 'VVD', votes: 625, seats: 0 },
        { party: 'Samen Terschelling', votes: 522, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 476, seats: 0 },
        { party: 'CDA', votes: 352, seats: 0 }
    ]
  },
  { name: 'Texel', inhabitants: 13573, seats: 15, turnout: 58.9, province: 'Noord-Holland', x: 49, y: 18, electionResults: [
        { party: 'Texels Belang', votes: 1553, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1451, seats: 0 },
        { party: 'GROENLINKS', votes: 1275, seats: 0 },
        { party: 'VVD', votes: 1247, seats: 0 },
        { party: 'CDA', votes: 799, seats: 0 },
        { party: 'Blanco (Kooiman, E.P.)', votes: 709, seats: 0 },
        { party: 'D66', votes: 381, seats: 0 }
    ]
  },
  { name: 'Teylingen', inhabitants: 37426, seats: 25, turnout: 56.2, province: 'Zuid-Holland', x: 47, y: 42, electionResults: [
        { party: 'VVD', votes: 3125, seats: 0 },
        { party: 'CDA', votes: 3124, seats: 0 },
        { party: 'D66', votes: 2612, seats: 0 },
        { party: 'Trilokaal', votes: 2498, seats: 0 },
        { party: 'GROENLINKS', votes: 1521, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1231, seats: 0 },
        { party: 'Progressief Teylingen', votes: 1093, seats: 0 },
        { party: 'Blanco (Schenk, M.)', votes: 930, seats: 0 },
        { party: 'ChristenUnie', votes: 704, seats: 0 }
    ]
  },
  { name: 'Tholen', inhabitants: 25758, seats: 19, turnout: 59.3, province: 'Zeeland', x: 44, y: 56, electionResults: [
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 3805, seats: 0 },
        { party: 'VVD', votes: 1821, seats: 0 },
        { party: 'ABT', votes: 1766, seats: 0 },
        { party: 'ChristenUnie', votes: 1603, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 1164, seats: 0 },
        { party: 'CDA', votes: 1078, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 794, seats: 0 },
        { party: 'Jezus Leeft', votes: 172, seats: 0 }
    ]
  },
  { name: 'Tiel', inhabitants: 42161, seats: 25, turnout: 52.7, province: 'Gelderland', x: 57, y: 50, electionResults: [
        { party: 'Partij van de Burgers', votes: 3388, seats: 0 },
        { party: 'D66', votes: 1819, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1732, seats: 0 },
        { party: 'VVD', votes: 1632, seats: 0 },
        { party: 'GROENLINKS', votes: 1438, seats: 0 },
        { party: 'CDA', votes: 1046, seats: 0 },
        { party: 'Lokaal Liberaal Tiel', votes: 878, seats: 0 },
        { party: 'Forum voor Democratie', votes: 714, seats: 0 },
        { party: 'ProTiel', votes: 615, seats: 0 },
        { party: 'ChristenUnie', votes: 519, seats: 0 },
        { party: 'Krachtig Tiel', votes: 379, seats: 0 }
    ]
  },
  { name: 'Tilburg', inhabitants: 224702, seats: 39, turnout: 51.3, province: 'Noord-Brabant', x: 52, y: 62, electionResults: [
        { party: 'GROENLINKS', votes: 15187, seats: 0 },
        { party: 'D66', votes: 10297, seats: 0 },
        { party: 'Lijst Smolders Tilburg (LST)', votes: 9149, seats: 0 },
        { party: 'VVD', votes: 8116, seats: 0 },
        { party: '50PLUS', votes: 4364, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 4291, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 4104, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 4073, seats: 0 },
        { party: 'CDA', votes: 3613, seats: 0 },
        { party: 'LOKAAL TILBURG', votes: 3209, seats: 0 },
        { party: 'ONS Tilburg', votes: 2792, seats: 0 },
        { party: 'Voor Tilburg', votes: 1564, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1528, seats: 0 },
        { party: 'Hart voor Vrijheid', votes: 538, seats: 0 }
    ]
  },
  { name: 'Tubbergen', inhabitants: 21279, seats: 17, turnout: 62.4, province: 'Overijssel', x: 68, y: 45, electionResults: [
        { party: 'CDA', votes: 3230, seats: 0 },
        { party: 'Gemeentebelangen/VVD', votes: 2972, seats: 0 },
        { party: 'Keerpunt22', votes: 2180, seats: 0 },
        { party: 'Lokaal Sterk', votes: 1957, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 675, seats: 0 }
    ]
  },
  { name: 'Twenterand', inhabitants: 33743, seats: 23, turnout: 57.8, province: 'Overijssel', x: 66, y: 39, electionResults: [
        { party: 'Gemeente Belangen Twenterand', votes: 5529, seats: 0 },
        { party: 'CDA', votes: 2522, seats: 0 },
        { party: 'ChristenUnie', votes: 1972, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1604, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 1494, seats: 0 },
        { party: 'Partij van de Arbeid/GROENLINKS', votes: 905, seats: 0 },
        { party: 'VVD', votes: 815, seats: 0 }
    ]
  },
  { name: 'Tynaarlo', inhabitants: 33879, seats: 23, turnout: 59.2, province: 'Drenthe', x: 66, y: 24, electionResults: [
        { party: 'Leefbaar Tynaarlo/EVZ-2000', votes: 2857, seats: 0 },
        { party: 'Blanco (Aeilkema, R.)', votes: 2206, seats: 0 },
        { party: 'GROENLINKS', votes: 2183, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1942, seats: 0 },
        { party: 'VVD', votes: 1926, seats: 0 },
        { party: 'Democraten 66 (D66)', votes: 1896, seats: 0 },
        { party: 'Gemeentebelangen Tynaarlo', votes: 1038, seats: 0 },
        { party: 'CDA', votes: 995, seats: 0 },
        { party: 'ChristenUnie', votes: 988, seats: 0 },
        { party: 'Hart voor Vrijheid', votes: 447, seats: 0 }
    ]
  },
  { name: 'Tytsjerksteradiel', inhabitants: 31999, seats: 21, turnout: 58.6, province: 'Friesland', x: 60, y: 19, electionResults: [
        { party: 'FNP', votes: 3015, seats: 0 },
        { party: 'CDA', votes: 2807, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 2221, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1821, seats: 0 },
        { party: 'VVD', votes: 1572, seats: 0 },
        { party: 'GROENLINKS', votes: 1411, seats: 0 },
        { party: 'ChristenUnie', votes: 1336, seats: 0 },
        { party: 'D66', votes: 887, seats: 0 }
    ]
  },
  { name: 'Uitgeest', inhabitants: 13649, seats: 15, turnout: 56.3, province: 'Noord-Holland', x: 49, y: 32, electionResults: [
        { party: 'Progressief Uitgeest-PU', votes: 1639, seats: 0 },
        { party: 'D66', votes: 1072, seats: 0 },
        { party: 'CDA', votes: 883, seats: 0 },
        { party: 'Uitgeest Lokaal', votes: 818, seats: 0 },
        { party: 'VVD', votes: 768, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 723, seats: 0 },
        { party: 'Uitgeester vrije partij', votes: 370, seats: 0 }
    ]
  },
  { name: 'Uithoorn', inhabitants: 29466, seats: 21, turnout: 55.7, province: 'Noord-Holland', x: 50, y: 41, electionResults: [
        { party: 'Gemeentebelangen', votes: 3382, seats: 0 },
        { party: 'DUS! GroenLinks en D66', votes: 2846, seats: 0 },
        { party: 'VVD', votes: 1947, seats: 0 },
        { party: 'CDA', votes: 1041, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1015, seats: 0 },
        { party: 'Groen Uithoorn', votes: 837, seats: 0 }
    ]
  },
  { name: 'Urk', inhabitants: 21033, seats: 17, turnout: 68.9, province: 'Flevoland', x: 58, y: 34, electionResults: [
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 3123, seats: 0 },
        { party: 'Hart voor Urk', votes: 1667, seats: 0 },
        { party: 'CDA', votes: 1663, seats: 0 },
        { party: 'ChristenUnie', votes: 1416, seats: 0 },
        { party: 'Gemeentebelangen', votes: 1066, seats: 0 },
        { party: 'Krachtig Urk', votes: 702, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 654, seats: 0 },
        { party: 'Forum voor Democratie', votes: 310, seats: 0 },
        { party: 'JEZUS LEEFT', votes: 216, seats: 0 }
    ]
  },
  { name: 'Utrecht', inhabitants: 361924, seats: 45, turnout: 58.7, province: 'Utrecht', x: 53, y: 44, electionResults: [
        { party: 'GROENLINKS', votes: 29110, seats: 0 },
        { party: 'D66', votes: 25628, seats: 0 },
        { party: 'VVD', votes: 14856, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 12460, seats: 0 },
        { party: 'CDA', votes: 11117, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 10124, seats: 0 },
        { party: 'Volt', votes: 8896, seats: 0 },
        { party: 'Student & Starter', votes: 8546, seats: 0 },
        { party: 'ChristenUnie', votes: 6034, seats: 0 },
        { party: 'DENK', votes: 5525, seats: 0 },
        { party: 'BIJ1', votes: 5398, seats: 0 },
        { party: 'EenUtrecht', votes: 4383, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 3945, seats: 0 },
        { party: 'Stadsbelang Utrecht', votes: 3432, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 3385, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1879, seats: 0 },
        { party: 'Piratenpartij', votes: 1036, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 905, seats: 0 },
        { party: 'Socialisten Utrecht', votes: 694, seats: 0 },
        { party: 'Blanco (van de Wal, R.M.W.A.H.C.)', votes: 72, seats: 0 }
    ]
  },
  { name: 'Utrechtse Heuvelrug', inhabitants: 49572, seats: 27, turnout: 61.3, province: 'Utrecht', x: 55, y: 45, electionResults: [
        { party: 'BVHlokaal', votes: 5071, seats: 0 },
        { party: 'VVD', votes: 4210, seats: 0 },
        { party: 'OPEN - GROENLINKS - P.v.d.A.', votes: 4031, seats: 0 },
        { party: 'D66', votes: 3337, seats: 0 },
        { party: 'CDA', votes: 3105, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 2258, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1912, seats: 0 },
        { party: 'ChristenUnie', votes: 951, seats: 0 }
    ]
  },
  { name: 'Vaals', inhabitants: 10099, seats: 13, turnout: 58.7, province: 'Limburg', x: 61, y: 78, electionResults: [
        { party: 'Visie Vaals (ViVa)', votes: 738, seats: 0 },
        { party: 'Het Alternatief', votes: 735, seats: 0 },
        { party: 'CDA', votes: 663, seats: 0 },
        { party: 'Nuj Lies Vroemen', votes: 607, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 591, seats: 0 },
        { party: 'Lokaal!', votes: 434, seats: 0 },
        { party: 'JONG', votes: 36, seats: 0 }
    ]
  },
  { name: 'Valkenburg aan de Geul', inhabitants: 16360, seats: 15, turnout: 60.4, province: 'Limburg', x: 59, y: 78, electionResults: [
        { party: 'Algemeen Belang', votes: 2448, seats: 0 },
        { party: 'Valkenburgse Senioren Partij (VSP)', votes: 1576, seats: 0 },
        { party: 'PGP (Progressieve Groene Partij)', votes: 1477, seats: 0 },
        { party: 'VVD', votes: 1420, seats: 0 },
        { party: 'CDA', votes: 1141, seats: 0 }
    ]
  },
  { name: 'Valkenswaard', inhabitants: 31200, seats: 21, turnout: 57.8, province: 'Noord-Brabant', x: 56, y: 65, electionResults: [
        { party: 'H&G', votes: 3085, seats: 0 },
        { party: 'VOTE (Valkenswaard Onze Toekomst Eén)', votes: 2270, seats: 0 },
        { party: 'Vwaard Lokaal / Vitaal Vwaard', votes: 1999, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1455, seats: 0 },
        { party: 'Samen voor Valkenswaard', votes: 1374, seats: 0 },
        { party: 'CDA', votes: 1275, seats: 0 },
        { party: 'VVD', votes: 707, seats: 0 },
        { party: 'D66', votes: 489, seats: 0 }
    ]
  },
  { name: 'Veendam', inhabitants: 27387, seats: 21, turnout: 50.2, province: 'Groningen', x: 70, y: 22, electionResults: [
        { party: 'GemeenteBelangen Veendam (GB)', votes: 3094, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2094, seats: 0 },
        { party: 'SP ( Socialistische Partij)', votes: 1243, seats: 0 },
        { party: 'VUK', votes: 914, seats: 0 },
        { party: 'VVD', votes: 734, seats: 0 },
        { party: 'D66', votes: 658, seats: 0 },
        { party: 'CDA', votes: 638, seats: 0 },
        { party: 'ChristenUnie', votes: 432, seats: 0 },
        { party: 'GROENLINKS', votes: 294, seats: 0 }
    ]
  },
  { name: 'Veenendaal', inhabitants: 67526, seats: 31, turnout: 52.1, province: 'Utrecht', x: 56, y: 48, electionResults: [
        { party: 'ProVeenendaal', votes: 6053, seats: 0 },
        { party: 'ChristenUnie', votes: 5725, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 4635, seats: 0 },
        { party: 'CDA', votes: 2601, seats: 0 },
        { party: 'Lokaal Veenendaal', votes: 2549, seats: 0 },
        { party: 'VVD', votes: 2354, seats: 0 },
        { party: 'GROENLINKS', votes: 1348, seats: 0 },
        { party: 'D66', votes: 1223, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1028, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 876, seats: 0 },
        { party: 'JouwVeenendaal', votes: 719, seats: 0 },
        { party: 'DENK', votes: 597, seats: 0 }
    ]
  },
  { name: 'Veere', inhabitants: 21885, seats: 17, turnout: 60.8, province: 'Zeeland', x: 42, y: 55, electionResults: [
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 2577, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 2137, seats: 0 },
        { party: 'HART VOOR VEERE (HVV)', votes: 2051, seats: 0 },
        { party: 'VVD', votes: 1630, seats: 0 },
        { party: 'CDA', votes: 1387, seats: 0 },
        { party: 'Dorpsbelangen en Toerisme Veere (DTV)', votes: 1149, seats: 0 },
        { party: 'D66', votes: 900, seats: 0 },
        { party: 'ChristenUnie', votes: 847, seats: 0 }
    ]
  },
  { name: 'Veldhoven', inhabitants: 45458, seats: 27, turnout: 56.9, province: 'Noord-Brabant', x: 56, y: 64, electionResults: [
        { party: 'Hart voor Veldhoven', votes: 5003, seats: 0 },
        { party: 'Gemeente Belangen Veldhoven (GBV)', votes: 3834, seats: 0 },
        { party: 'VVD', votes: 3292, seats: 0 },
        { party: 'GROENLINKS / Partij van de Arbeid (P.v.d.A.)', votes: 1970, seats: 0 },
        { party: 'SENIOREN VELDHOVEN', votes: 1451, seats: 0 },
        { party: 'D66', votes: 1386, seats: 0 },
        { party: 'CDA', votes: 1109, seats: 0 }
    ]
  },
  { name: 'Velsen', inhabitants: 68660, seats: 31, turnout: 53.7, province: 'Noord-Holland', x: 49, y: 34, electionResults: [
        { party: 'Velsen Lokaal', votes: 5322, seats: 0 },
        { party: 'D66', votes: 4065, seats: 0 },
        { party: 'VVD', votes: 3119, seats: 0 },
        { party: 'GROENLINKS', votes: 2686, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2661, seats: 0 },
        { party: 'LGV', votes: 2325, seats: 0 },
        { party: 'CDA', votes: 1950, seats: 0 },
        { party: 'Forza! IJmond', votes: 1791, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1444, seats: 0 },
        { party: 'ChristenUnie', votes: 1204, seats: 0 }
    ]
  },
  { name: 'Venlo', inhabitants: 102207, seats: 37, turnout: 51.2, province: 'Limburg', x: 63, y: 62, electionResults: [
        { party: 'EENLokaal', votes: 7292, seats: 0 },
        { party: 'CDA', votes: 6403, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 4770, seats: 0 },
        { party: 'GROENLINKS', votes: 3872, seats: 0 },
        { party: 'VVD', votes: 3844, seats: 0 },
        { party: 'VSP (Venlose Senioren Partij)', votes: 3554, seats: 0 },
        { party: 'D66', votes: 2648, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 2401, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1029, seats: 0 },
        { party: 'DENK', votes: 947, seats: 0 },
        { party: '50PLUS', votes: 679, seats: 0 }
    ]
  },
  { name: 'Venray', inhabitants: 43604, seats: 25, turnout: 58.4, province: 'Limburg', x: 62, y: 58, electionResults: [
        { party: 'VENRAY Lokaal', votes: 4147, seats: 0 },
        { party: 'CDA', votes: 3479, seats: 0 },
        { party: 'VVD', votes: 2804, seats: 0 },
        { party: 'D66', votes: 2134, seats: 0 },
        { party: 'Samenwerking Venray', votes: 1997, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1183, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1060, seats: 0 },
        { party: 'GROENLINKS', votes: 884, seats: 0 }
    ]
  },
  { name: 'Vijfheerenlanden', inhabitants: 57555, seats: 29, turnout: 58.9, province: 'Zuid-Holland', x: 52, y: 48, electionResults: [
        { party: 'VHL Lokaal', votes: 5181, seats: 0 },
        { party: 'CDA', votes: 4581, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 3226, seats: 0 },
        { party: 'VVD', votes: 3136, seats: 0 },
        { party: 'ChristenUnie', votes: 2643, seats: 0 },
        { party: 'D66', votes: 2348, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1871, seats: 0 },
        { party: 'GROENLINKS', votes: 1182, seats: 0 }
    ]
  },
  { name: 'Vlaardingen', inhabitants: 73445, seats: 33, turnout: 50.6, province: 'Zuid-Holland', x: 46, y: 48, electionResults: [
        { party: 'VVD', votes: 2810, seats: 0 },
        { party: 'GROENLINKS', votes: 2501, seats: 0 },
        { party: 'ONS.Vlaardingen', votes: 2470, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2311, seats: 0 },
        { party: 'VV2000/Leefbaar Vlaardingen', votes: 2269, seats: 0 },
        { party: 'CDA', votes: 2108, seats: 0 },
        { party: 'D66', votes: 1572, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 1523, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1502, seats: 0 },
        { party: 'Algemeen Ouderen Verbond (AOV)', votes: 1425, seats: 0 },
        { party: 'DENK', votes: 1110, seats: 0 },
        { party: 'HEEL DE STAD', votes: 1044, seats: 0 },
        { party: 'Beter voor Vlaardingen', votes: 1011, seats: 0 },
        { party: 'StadsBelangen Vlaardingen', votes: 720, seats: 0 },
        { party: 'Blanco (Gerritsen, D)', votes: 207, seats: 0 },
        { party: 'Onafhankelijk Sociaal Vlaardingen', votes: 182, seats: 0 }
    ]
  },
  { name: 'Vlieland', inhabitants: 1152, seats: 9, turnout: 67.4, province: 'Friesland', x: 53, y: 16, electionResults: [
        { party: 'Lijst Fier', votes: 253, seats: 0 },
        { party: 'NLV', votes: 187, seats: 0 },
        { party: 'Algemeen Belang Vlieland', votes: 141, seats: 0 },
        { party: 'GroenWit', votes: 74, seats: 0 }
    ]
  },
  { name: 'Vlissingen', inhabitants: 44365, seats: 25, turnout: 52.8, province: 'Zeeland', x: 41, y: 56, electionResults: [
        { party: 'Partij Souburg Ritthem', votes: 2743, seats: 0 },
        { party: 'Lokale Partij Vlissingen', votes: 2153, seats: 0 },
        { party: 'POV perspectief op Vlissingen!', votes: 1648, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1553, seats: 0 },
        { party: 'VVD', votes: 1318, seats: 0 },
        { party: 'GROENLINKS', votes: 1045, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1040, seats: 0 },
        { party: '50PLUS', votes: 878, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 844, seats: 0 },
        { party: 'D66', votes: 774, seats: 0 },
        { party: 'Forum voor Democratie', votes: 745, seats: 0 },
        { party: 'CDA', votes: 605, seats: 0 },
        { party: 'ChristenUnie', votes: 579, seats: 0 },
        { party: 'Bestemming Vlissingen', votes: 315, seats: 0 }
    ]
  },
  { name: 'Voerendaal', inhabitants: 12471, seats: 13, turnout: 62.3, province: 'Limburg', x: 60, y: 77, electionResults: [
        { party: 'Democraten Voerendaal', votes: 2558, seats: 0 },
        { party: 'Voerendaal Actief', votes: 811, seats: 0 },
        { party: 'CDA', votes: 758, seats: 0 },
        { party: 'VVD', votes: 698, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 626, seats: 0 },
        { party: 'D66', votes: 547, seats: 0 }
    ]
  },
  { name: 'Voorschoten', inhabitants: 25603, seats: 19, turnout: 58.7, province: 'Zuid-Holland', x: 47, y: 44, electionResults: [
        { party: 'VVD', votes: 2301, seats: 0 },
        { party: 'Voorschoten Lokaal', votes: 2220, seats: 0 },
        { party: 'CDA', votes: 1964, seats: 0 },
        { party: 'GROENLINKS', votes: 1895, seats: 0 },
        { party: 'D66', votes: 1787, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 898, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 749, seats: 0 }
    ]
  },
  { name: 'Voorst', inhabitants: 24546, seats: 19, turnout: 61.2, province: 'Gelderland', x: 62, y: 42, electionResults: [
        { party: 'Gemeente Belangen Voorst', votes: 3132, seats: 0 },
        { party: 'CDA', votes: 2006, seats: 0 },
        { party: 'VVD / Liberaal 2000', votes: 2001, seats: 0 },
        { party: 'Blanco (Jansen, A.A.)', votes: 1906, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 1812, seats: 0 },
        { party: 'D66', votes: 572, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 530, seats: 0 }
    ]
  },
  { name: 'Vught', inhabitants: 26554, seats: 19, turnout: 60.7, province: 'Noord-Brabant', x: 55, y: 61 },
  { name: 'Waadhoeke', inhabitants: 46079, seats: 27, turnout: 56.3, province: 'Friesland', x: 57, y: 18, electionResults: [
        { party: 'SAM Waadhoeke', votes: 4407, seats: 0 },
        { party: 'Gemeentebelangen', votes: 4329, seats: 0 },
        { party: 'FNP', votes: 3646, seats: 0 },
        { party: 'CDA', votes: 3627, seats: 0 },
        { party: 'VVD', votes: 1644, seats: 0 },
        { party: 'ChristenUnie', votes: 1017, seats: 0 }
    ]
  },
  { name: 'Waalre', inhabitants: 17454, seats: 17, turnout: 63.8, province: 'Noord-Brabant', x: 56, y: 64, electionResults: [
        { party: 'Aalst Waalre Belang', votes: 1546, seats: 0 },
        { party: 'CDA', votes: 1265, seats: 0 },
        { party: 'D66', votes: 1223, seats: 0 },
        { party: 'VVD', votes: 1191, seats: 0 },
        { party: 'GROENLINKS', votes: 1158, seats: 0 },
        { party: 'ZW14', votes: 780, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 509, seats: 0 }
    ]
  },
  { name: 'Waalwijk', inhabitants: 48815, seats: 27, turnout: 55.2, province: 'Noord-Brabant', x: 52, y: 60, electionResults: [
        { party: 'Lokaal Belang', votes: 5976, seats: 0 },
        { party: 'VVD', votes: 2146, seats: 0 },
        { party: 'GroenLinksaf', votes: 1796, seats: 0 },
        { party: 'Samen Waalwijk', votes: 1543, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1333, seats: 0 },
        { party: 'CDA', votes: 1231, seats: 0 },
        { party: 'D66', votes: 1074, seats: 0 },
        { party: 'Lijst IJpelaar', votes: 588, seats: 0 },
        { party: 'ChristenUnie', votes: 583, seats: 0 },
        { party: 'Blanco (Aussems, N.R.W.A.)', votes: 544, seats: 0 }
    ]
  },
  { name: 'Waddinxveen', inhabitants: 29293, seats: 21, turnout: 54.8, province: 'Zuid-Holland', x: 48, y: 45, electionResults: [
        { party: 'PCW | www.kiespcw.nl', votes: 3674, seats: 0 },
        { party: 'CDA', votes: 2268, seats: 0 },
        { party: 'VVD', votes: 1929, seats: 0 },
        { party: 'WeWa (Weerbaar Waddinxveen)', votes: 1764, seats: 0 },
        { party: 'D66', votes: 1595, seats: 0 },
        { party: 'Partij van de Arbeid / GROENLINKS', votes: 1344, seats: 0 }
    ]
  },
  { name: 'Wageningen', inhabitants: 39673, seats: 27, turnout: 58.4, province: 'Gelderland', x: 58, y: 49, electionResults: [
        { party: 'GROENLINKS', votes: 5179, seats: 0 },
        { party: 'Stadspartij Wageningen', votes: 3037, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2737, seats: 0 },
        { party: 'D66', votes: 2527, seats: 0 },
        { party: 'Connect Wageningen', votes: 1931, seats: 0 },
        { party: 'VVD', votes: 1603, seats: 0 },
        { party: 'ChristenUnie', votes: 1156, seats: 0 },
        { party: 'CDA', votes: 716, seats: 0 }
    ]
  },
  { name: 'Wassenaar', inhabitants: 26214, seats: 19, turnout: 62.1, province: 'Zuid-Holland', x: 46, y: 44, electionResults: [
        { party: 'VVD', votes: 2701, seats: 0 },
        { party: 'Hart voor Wassenaar', votes: 2604, seats: 0 },
        { party: 'Lokaal Wassenaar!', votes: 1752, seats: 0 },
        { party: 'CDA', votes: 1111, seats: 0 },
        { party: 'D66', votes: 958, seats: 0 },
        { party: 'GROENLINKS', votes: 945, seats: 0 },
        { party: 'Democratische Liberalen Wassenaar (DLW)', votes: 655, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 605, seats: 0 }
    ]
  },
  { name: 'Waterland', inhabitants: 17422, seats: 17, turnout: 57.9, province: 'Noord-Holland', x: 52, y: 35, electionResults: [
        { party: 'WaterlandNatuurlijk', votes: 2446, seats: 0 },
        { party: 'GROENLINKS', votes: 1670, seats: 0 },
        { party: 'CDA', votes: 1611, seats: 0 },
        { party: 'VVD', votes: 1359, seats: 0 },
        { party: 'D66', votes: 951, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 908, seats: 0 }
    ]
  },
  { name: 'Weert', inhabitants: 50107, seats: 27, turnout: 56.8, province: 'Limburg', x: 60, y: 69, electionResults: [
        { party: 'Weert Lokaal', votes: 6777, seats: 0 },
        { party: 'DUS Weert', votes: 3282, seats: 0 },
        { party: 'VVD', votes: 2764, seats: 0 },
        { party: 'CDA', votes: 2567, seats: 0 },
        { party: 'D66', votes: 1123, seats: 0 },
        { party: 'GROENLINKS', votes: 1058, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1057, seats: 0 }
    ]
  },
  { name: 'Weesp', inhabitants: 19729, seats: 17, turnout: 56.3, province: 'Noord-Holland', x: 53, y: 39 },
  { name: 'West Betuwe', inhabitants: 51198, seats: 27, turnout: 57.6, province: 'Gelderland', x: 56, y: 50, electionResults: [
        { party: 'Dorpsbelangen West Betuwe', votes: 7152, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 3362, seats: 0 },
        { party: 'Leefbaar Lokaal Belang West Betuwe', votes: 2683, seats: 0 },
        { party: 'GROENLINKS', votes: 1942, seats: 0 },
        { party: 'ChristenUnie', votes: 1908, seats: 0 },
        { party: 'VVD', votes: 1867, seats: 0 },
        { party: 'D66', votes: 1688, seats: 0 },
        { party: 'Verenigd West Betuwe', votes: 1598, seats: 0 },
        { party: 'CDA West Betuwe', votes: 1527, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1011, seats: 0 }
    ]
  },
  { name: 'West Maas en Waal', inhabitants: 19320, seats: 17, turnout: 58.4, province: 'Gelderland', x: 58, y: 51, electionResults: [
        { party: 'FD Partij Beneden-Leeuwen', votes: 1893, seats: 0 },
        { party: 'F.D. Dreumel', votes: 1372, seats: 0 },
        { party: 'VVD', votes: 1345, seats: 0 },
        { party: 'F.D. Maasdorpen', votes: 1157, seats: 0 },
        { party: 'Sociaal Maas en Waal', votes: 999, seats: 0 },
        { party: 'CDA', votes: 972, seats: 0 },
        { party: 'F.D. Wamel', votes: 941, seats: 0 },
        { party: 'F.D. Boven-Leeuwen', votes: 671, seats: 0 }
    ]
  },
  { name: 'Westerkwartier', inhabitants: 63375, seats: 31, turnout: 56.9, province: 'Groningen', x: 65, y: 20, electionResults: [
        { party: 'VZ Westerkwartier', votes: 8099, seats: 0 },
        { party: 'ChristenUnie', votes: 4900, seats: 0 },
        { party: 'GROENLINKS', votes: 3227, seats: 0 },
        { party: 'CDA', votes: 3172, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 3029, seats: 0 },
        { party: 'Sterk Westerkwartier', votes: 2837, seats: 0 },
        { party: 'VVD', votes: 1904, seats: 0 },
        { party: 'D66', votes: 1755, seats: 0 },
        { party: '50PLUS', votes: 614, seats: 0 }
    ]
  },
  { name: 'Westerveld', inhabitants: 19470, seats: 17, turnout: 59.3, province: 'Drenthe', x: 64, y: 30, electionResults: [
        { party: 'Duurzaam Sterk Westerveld (DSW)', votes: 2280, seats: 0 },
        { party: 'Progressief Westerveld / GROENLINKS', votes: 2045, seats: 0 },
        { party: 'VVD', votes: 1780, seats: 0 },
        { party: 'Gemeentebelangen', votes: 1300, seats: 0 },
        { party: 'CDA', votes: 1119, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 953, seats: 0 },
        { party: 'D66', votes: 614, seats: 0 }
    ]
  },
  { name: 'Westervoort', inhabitants: 14973, seats: 15, turnout: 53.2, province: 'Gelderland', x: 61, y: 49, electionResults: [
        { party: 'CDA', votes: 1562, seats: 0 },
        { party: 'GROENLINKS', votes: 1282, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 807, seats: 0 },
        { party: 'VVD', votes: 732, seats: 0 },
        { party: 'D66', votes: 729, seats: 0 }
    ]
  },
  { name: 'Westerwolde', inhabitants: 25796, seats: 19, turnout: 57.8, province: 'Groningen', x: 74, y: 24, electionResults: [
        { party: 'Gemeentebelangen Westerwolde', votes: 2879, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2175, seats: 0 },
        { party: 'CDA', votes: 2055, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 1312, seats: 0 },
        { party: 'GROENLINKS', votes: 831, seats: 0 },
        { party: 'VVD', votes: 751, seats: 0 },
        { party: 'Ecologisch Alternatief Westerwolde', votes: 693, seats: 0 }
    ]
  },
  { name: 'Westland', inhabitants: 110357, seats: 37, turnout: 52.4, province: 'Zuid-Holland', x: 45, y: 47, electionResults: [
        { party: 'Westland Verstandig', votes: 12122, seats: 0 },
        { party: 'GemeenteBelang Westland (GBW)', votes: 9461, seats: 0 },
        { party: 'CDA', votes: 7578, seats: 0 },
        { party: 'LPF Westland', votes: 6590, seats: 0 },
        { party: 'VVD', votes: 3814, seats: 0 },
        { party: 'D66', votes: 2651, seats: 0 },
        { party: 'GROENLINKS', votes: 2165, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 1977, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1387, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1307, seats: 0 }
    ]
  },
  { name: 'Weststellingwerf', inhabitants: 25840, seats: 19, turnout: 57.2, province: 'Friesland', x: 63, y: 29, electionResults: [
        { party: 'VVD', votes: 1959, seats: 0 },
        { party: 'Weststellingwerfs Belang', votes: 1752, seats: 0 },
        { party: 'CDA', votes: 1690, seats: 0 },
        { party: 'Sociaal Duurzaam Weststellingwerf', votes: 1680, seats: 0 },
        { party: 'Blijf Stellingwarfs', votes: 1552, seats: 0 },
        { party: 'GROENLINKS', votes: 862, seats: 0 },
        { party: 'D66', votes: 858, seats: 0 },
        { party: 'Krachtig Sociaal Groen', votes: 296, seats: 0 }
    ]
  },
  { name: 'Westvoorne', inhabitants: 14728, seats: 15, turnout: 58.6, province: 'Zuid-Holland', x: 45, y: 50 },
  { name: 'Wierden', inhabitants: 24440, seats: 19, turnout: 60.4, province: 'Overijssel', x: 67, y: 44, electionResults: [
        { party: 'Nieuw Enter Wierden', votes: 4978, seats: 0 },
        { party: 'CDA', votes: 2590, seats: 0 },
        { party: 'Progressief Wierden', votes: 1478, seats: 0 },
        { party: 'ChristenUnie', votes: 1276, seats: 0 },
        { party: 'VVD', votes: 1171, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 758, seats: 0 }
    ]
  },
  { name: 'Wijchen', inhabitants: 41110, seats: 25, turnout: 57.3, province: 'Gelderland', x: 60, y: 51, electionResults: [
        { party: 'Kernachtig Wijchen', votes: 6335, seats: 0 },
        { party: 'CDA', votes: 3141, seats: 0 },
        { party: 'VVD', votes: 2228, seats: 0 },
        { party: 'Wijchen Lokaal', votes: 1761, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1657, seats: 0 },
        { party: 'GROENLINKS', votes: 1496, seats: 0 },
        { party: 'D66', votes: 1237, seats: 0 }
    ]
  },
  { name: 'Wijdemeren', inhabitants: 24360, seats: 19, turnout: 59.8, province: 'Noord-Holland', x: 54, y: 39, electionResults: [
        { party: 'De Lokale Partij', votes: 4159, seats: 0 },
        { party: 'CDA', votes: 1863, seats: 0 },
        { party: 'DorpsBelangen', votes: 1419, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 1192, seats: 0 },
        { party: 'VVD', votes: 1183, seats: 0 },
        { party: 'D66', votes: 986, seats: 0 },
        { party: 'ChristenUnie', votes: 758, seats: 0 }
    ]
  },
  { name: 'Wijk bij Duurstede', inhabitants: 23910, seats: 19, turnout: 60.2, province: 'Utrecht', x: 54, y: 47, electionResults: [
        { party: 'Open / GROENLINKS / P.v.d.A.', votes: 2575, seats: 0 },
        { party: 'VVD', votes: 1677, seats: 0 },
        { party: 'BurgerBelangen', votes: 1389, seats: 0 },
        { party: 'CDA', votes: 1378, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1098, seats: 0 },
        { party: 'Protestant-Christelijke Groepering', votes: 1023, seats: 0 },
        { party: 'D66', votes: 913, seats: 0 },
        { party: 'Duurstede voor Democratie', votes: 860, seats: 0 }
    ]
  },
  { name: 'Winterswijk', inhabitants: 28536, seats: 21, turnout: 60.7, province: 'Gelderland', x: 68, y: 51, electionResults: [
        { party: 'Voor Winterswijk', votes: 3053, seats: 0 },
        { party: 'CDA', votes: 2247, seats: 0 },
        { party: 'Morgen', votes: 2041, seats: 0 },
        { party: 'D66', votes: 1971, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1608, seats: 0 },
        { party: 'Winterswijks Belang', votes: 1587, seats: 0 },
        { party: 'VVD', votes: 1212, seats: 0 },
        { party: 'Blanco (Heming, O.)', votes: 111, seats: 0 }
    ]
  },
  { name: 'Woensdrecht', inhabitants: 21883, seats: 17, turnout: 58.9, province: 'Noord-Brabant', x: 46, y: 59, electionResults: [
        { party: 'ABZ (Algemeen Belang Zuid-Westhoek)', votes: 3141, seats: 0 },
        { party: 'CDA', votes: 1560, seats: 0 },
        { party: 'D66', votes: 1024, seats: 0 },
        { party: 'Alle Kernen Troef (A.K.T.)', votes: 887, seats: 0 },
        { party: 'VVD', votes: 836, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 603, seats: 0 },
        { party: 'Conservatieve Partij (CON)', votes: 211, seats: 0 }
    ]
  },
  { name: 'Woerden', inhabitants: 52294, seats: 27, turnout: 56.4, province: 'Utrecht', x: 51, y: 45, electionResults: [
        { party: 'CDA', votes: 4262, seats: 0 },
        { party: 'LijstvanderDoes', votes: 3949, seats: 0 },
        { party: 'Progressief Woerden (PvdA/GROENLINKS)', votes: 3266, seats: 0 },
        { party: 'VVD', votes: 2774, seats: 0 },
        { party: 'Inwonersbelangen', votes: 2526, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 2423, seats: 0 },
        { party: 'D66', votes: 2197, seats: 0 },
        { party: 'Woerden & Democratie', votes: 1526, seats: 0 },
        { party: 'Splinter', votes: 1098, seats: 0 },
        { party: 'STERK Woerden', votes: 730, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 324, seats: 0 }
    ]
  },
  { name: 'Wormerland', inhabitants: 16299, seats: 15, turnout: 56.8, province: 'Noord-Holland', x: 51, y: 35, electionResults: [
        { party: 'Partij voor Ouderen en Veiligheid', votes: 2066, seats: 0 },
        { party: 'VVD', votes: 1544, seats: 0 },
        { party: 'GROENLINKS', votes: 1520, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1071, seats: 0 },
        { party: 'CDA', votes: 675, seats: 0 },
        { party: 'D66', votes: 457, seats: 0 }
    ]
  },
  { name: 'Woudenberg', inhabitants: 13362, seats: 15, turnout: 62.4, province: 'Utrecht', x: 56, y: 44, electionResults: [
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 1923, seats: 0 },
        { party: 'GemeenteBelangen Woudenberg', votes: 1894, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.) / GROENLINKS', votes: 1088, seats: 0 },
        { party: 'CDA', votes: 1007, seats: 0 },
        { party: 'ChristenUnie', votes: 646, seats: 0 },
        { party: 'VVD', votes: 607, seats: 0 }
    ]
  },
  { name: 'Zaanstad', inhabitants: 157762, seats: 39, turnout: 48.9, province: 'Noord-Holland', x: 50, y: 35, electionResults: [
        { party: 'Partij voor Ouderen en Veiligheid', votes: 8038, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 6979, seats: 0 },
        { party: 'VVD', votes: 6154, seats: 0 },
        { party: 'Democratisch Zaanstad (DZ)', votes: 5928, seats: 0 },
        { party: 'ROSA', votes: 5142, seats: 0 },
        { party: 'GROENLINKS', votes: 4037, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 3429, seats: 0 },
        { party: 'D66', votes: 3250, seats: 0 },
        { party: 'CDA', votes: 2773, seats: 0 },
        { party: 'DENK', votes: 2540, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 2445, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2085, seats: 0 },
        { party: 'ChristenUnie', votes: 1407, seats: 0 },
        { party: 'Belang van Nederland (BVNL)', votes: 1178, seats: 0 }
    ]
  },
  { name: 'Zaltbommel', inhabitants: 28901, seats: 21, turnout: 58.3, province: 'Gelderland', x: 56, y: 51, electionResults: [
        { party: 'Z.V.V.', votes: 2791, seats: 0 },
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 2766, seats: 0 },
        { party: 'VVD', votes: 1650, seats: 0 },
        { party: 'ChristenUnie', votes: 1417, seats: 0 },
        { party: 'D66', votes: 1040, seats: 0 },
        { party: 'CDA', votes: 1000, seats: 0 },
        { party: 'BVNL', votes: 951, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 846, seats: 0 },
        { party: 'GROENLINKS', votes: 761, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 546, seats: 0 }
    ]
  },
  { name: 'Zandvoort', inhabitants: 17116, seats: 17, turnout: 54.2, province: 'Noord-Holland', x: 47, y: 38, electionResults: [
        { party: 'Jong Zandvoort', votes: 1304, seats: 0 },
        { party: 'CDA', votes: 1141, seats: 0 },
        { party: 'Ouderen Partij Zandvoort', votes: 1097, seats: 0 },
        { party: 'VVD', votes: 869, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 740, seats: 0 },
        { party: 'GROENLINKS', votes: 638, seats: 0 },
        { party: 'D66', votes: 619, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 556, seats: 0 },
        { party: 'Zandvoort Echt Eén', votes: 344, seats: 0 },
        { party: 'Gemeente Belangen Zandvoort', votes: 307, seats: 0 }
    ]
  },
  { name: 'Zeewolde', inhabitants: 22656, seats: 19, turnout: 53.7, province: 'Flevoland', x: 56, y: 38, electionResults: [
        { party: 'Leefbaar Zeewolde', votes: 4440, seats: 0 },
        { party: 'ChristenUnie', votes: 2172, seats: 0 },
        { party: 'VVD', votes: 1115, seats: 0 },
        { party: 'CDA', votes: 754, seats: 0 },
        { party: 'Actief Zeewolde', votes: 689, seats: 0 },
        { party: 'D66', votes: 578, seats: 0 }
    ]
  },
  { name: 'Zeist', inhabitants: 65910, seats: 31, turnout: 56.9, province: 'Utrecht', x: 55, y: 43, electionResults: [
        { party: 'GROENLINKS', votes: 5937, seats: 0 },
        { party: 'VVD', votes: 5016, seats: 0 },
        { party: 'D66', votes: 4560, seats: 0 },
        { party: 'CDA', votes: 2471, seats: 0 },
        { party: 'NieuwDemocratischZeist', votes: 2388, seats: 0 },
        { party: 'Seyst.Nu', votes: 2327, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 1905, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1496, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1083, seats: 0 },
        { party: 'ZeisterBelang', votes: 879, seats: 0 },
        { party: '50PLUS', votes: 656, seats: 0 }
    ]
  },
  { name: 'Zevenaar', inhabitants: 43740, seats: 25, turnout: 55.8, province: 'Gelderland', x: 63, y: 49, electionResults: [
        { party: 'Lokaal Belang', votes: 4137, seats: 0 },
        { party: 'CDA', votes: 2753, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2050, seats: 0 },
        { party: 'Blanco (van Dellen, N.)', votes: 1841, seats: 0 },
        { party: 'VVD', votes: 1805, seats: 0 },
        { party: 'D66', votes: 1295, seats: 0 },
        { party: 'GROENLINKS', votes: 1105, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 952, seats: 0 },
        { party: 'Sociaal Zevenaar', votes: 793, seats: 0 },
        { party: 'Blanco (Witjes, M.H.A.G.)', votes: 761, seats: 0 }
    ]
  },
  { name: 'Zoetermeer', inhabitants: 126998, seats: 39, turnout: 50.1, province: 'Zuid-Holland', x: 47, y: 45, electionResults: [
        { party: 'VVD', votes: 6803, seats: 0 },
        { party: 'LHN', votes: 6064, seats: 0 },
        { party: 'GROENLINKS', votes: 4630, seats: 0 },
        { party: 'PDvZ (Partij Democratie voor Zoetermeer)', votes: 4613, seats: 0 },
        { party: 'Zó! Zoetermeer', votes: 4508, seats: 0 },
        { party: 'Zoetermeer Vooruit', votes: 3919, seats: 0 },
        { party: 'D66', votes: 3809, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 3408, seats: 0 },
        { party: 'PVV (Partij voor de Vrijheid)', votes: 3184, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2797, seats: 0 },
        { party: 'CDA', votes: 2655, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 2273, seats: 0 },
        { party: 'Forum voor Democratie', votes: 1909, seats: 0 },
        { party: 'GOED', votes: 840, seats: 0 }
    ]
  },
  { name: 'Zoeterwoude', inhabitants: 8611, seats: 13, turnout: 57.4, province: 'Zuid-Holland', x: 47, y: 44, electionResults: [
        { party: 'Progressief Zoeterwoude (PZ)', votes: 1697, seats: 0 },
        { party: 'CDA', votes: 1517, seats: 0 },
        { party: 'VVD', votes: 705, seats: 0 },
        { party: 'Senioren Belangen Zoeterwoude', votes: 331, seats: 0 }
    ]
  },
  { name: 'Zuidplas', inhabitants: 43894, seats: 25, turnout: 54.9, province: 'Zuid-Holland', x: 49, y: 46, electionResults: [
        { party: 'ChristenUnie-SGP', votes: 3846, seats: 0 },
        { party: 'VVD', votes: 3362, seats: 0 },
        { party: 'CDA', votes: 2493, seats: 0 },
        { party: 'D66', votes: 2383, seats: 0 },
        { party: 'Nieuw Elan Zuidplas (NEZ)', votes: 2229, seats: 0 },
        { party: 'P.v.d.A./GROENLINKS', votes: 1784, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 1254, seats: 0 },
        { party: 'Nieuwe Gemeente Politiek', votes: 524, seats: 0 }
    ]
  },
  { name: 'Zundert', inhabitants: 21821, seats: 17, turnout: 59.7, province: 'Noord-Brabant', x: 49, y: 61, electionResults: [
        { party: 'Ondernemend Platteland (ONPL)', votes: 2342, seats: 0 },
        { party: 'CDA', votes: 1777, seats: 0 },
        { party: 'VVD', votes: 1378, seats: 0 },
        { party: 'Dorpsbelangen', votes: 1118, seats: 0 },
        { party: 'D66', votes: 1022, seats: 0 },
        { party: 'Lokaal Perspectief', votes: 838, seats: 0 },
        { party: 'OPZ Onafhankelijke Partij Zundert', votes: 712, seats: 0 }
    ]
  },
  { name: 'Zutphen', inhabitants: 47942, seats: 27, turnout: 57.6, province: 'Gelderland', x: 65, y: 45, electionResults: [
        { party: 'GROENLINKS', votes: 3507, seats: 0 },
        { party: 'Burgerbelang', votes: 3108, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 2514, seats: 0 },
        { party: 'D66', votes: 2255, seats: 0 },
        { party: 'VVD', votes: 2217, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 2012, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 1526, seats: 0 },
        { party: 'Kies Bewust Lokaal', votes: 1315, seats: 0 },
        { party: 'STADSPARTIJ Zutphen Warnsveld', votes: 1221, seats: 0 },
        { party: 'CDA', votes: 937, seats: 0 },
        { party: 'ChristenUnie', votes: 735, seats: 0 }
    ]
  },
  { name: 'Zwartewaterland', inhabitants: 22690, seats: 19, turnout: 61.8, province: 'Overijssel', x: 62, y: 36, electionResults: [
        { party: 'Staatkundig Gereformeerde Partij (SGP)', votes: 3114, seats: 0 },
        { party: 'ChristenUnie', votes: 2501, seats: 0 },
        { party: 'Buitengewoon Zwartewaterland ( BGZ )', votes: 2438, seats: 0 },
        { party: 'CDA', votes: 1432, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1289, seats: 0 },
        { party: 'VVD', votes: 934, seats: 0 }
    ]
  },
  { name: 'Zwijndrecht', inhabitants: 44741, seats: 25, turnout: 51.3, province: 'Zuid-Holland', x: 49, y: 50, electionResults: [
        { party: 'Algemeen Belang Zwijndrecht', votes: 5491, seats: 0 },
        { party: 'ChristenUnie-SGP', votes: 2395, seats: 0 },
        { party: 'VVD', votes: 1567, seats: 0 },
        { party: 'CDA', votes: 1537, seats: 0 },
        { party: 'GROENLINKS', votes: 1180, seats: 0 },
        { party: 'Zwijndrechtse Plus Partij', votes: 1119, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 1043, seats: 0 },
        { party: 'D66', votes: 958, seats: 0 }
    ]
  },
  { name: 'Zwolle', inhabitants: 130592, seats: 39, turnout: 53.9, province: 'Overijssel', x: 63, y: 38, electionResults: [
        { party: 'ChristenUnie', votes: 9560, seats: 0 },
        { party: 'GROENLINKS', votes: 9526, seats: 0 },
        { party: 'VVD', votes: 6913, seats: 0 },
        { party: 'D66', votes: 6618, seats: 0 },
        { party: 'Partij van de Arbeid (P.v.d.A.)', votes: 5728, seats: 0 },
        { party: 'CDA', votes: 5323, seats: 0 },
        { party: 'SWOLLWACHT', votes: 4849, seats: 0 },
        { party: 'SP (Socialistische Partij)', votes: 3567, seats: 0 },
        { party: 'Partij voor de Dieren', votes: 2923, seats: 0 },
        { party: 'Volt', votes: 2112, seats: 0 }
    ]
  },
];

export const provinces = [
  'Drenthe',
  'Flevoland',
  'Friesland',
  'Gelderland',
  'Groningen',
  'Limburg',
  'Noord-Brabant',
  'Noord-Holland',
  'Overijssel',
  'Utrecht',
  'Zeeland',
  'Zuid-Holland',
];
