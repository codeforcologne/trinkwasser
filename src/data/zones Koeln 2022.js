// Werte aus den PDF-Dateien auf:
// https://www.rheinenergie.com/de/unternehmen/search_result.html?search=Trinkwasseranalyse&page=1

tw.data.zones = {
  'Köln linksrheinisch': {
    // inklusive Pulheim
    natrium: '34', // 34 ± 4
    kalium: '4.2', // 4.2 ± 0.3
    calcium: '103', // 103 ± 8
    magnesium: '14', // 14 ± 1
    chlorid: '62', // 62 ± 6
    nitrat: '20', // 20 ± 2
    sulfat: '73', // 73 ± 9
    hardness: '17.5', // Summe Erdalkalien (Gesamthärte) 3,14 ± 0,26 mol/m³ entspricht 17,5 ± 1,4°dH (hart), Karbonathärte 12,0 ± 0,8 °dH
    year: '2022',
    description: 'Wasserwerke Hochkirchen und Weiler', // https://web.cdn.rheinenergie.com/cms/media/documents/trinkwasseranalyse/Trinkwasseranalyse_Linksrheinisch.pdf
  },
  'Köln rechtsrheinisch': {
    natrium: '26', // 26 ± 3
    kalium: '3.2', // 3.2 ± 8
    calcium: '77', // 77 ± 8
    magnesium: '14', // 14 ± 4
    chlorid: '34', // 34 ± 5
    nitrat: '21', // 21 ± 2
    sulfat: '62', // 62 ± 11
    hardness: '14', // Summe Erdalkalien (Gesamthärte) 2,48 ± 0,30 mol/m³ entspricht 14,0 ± 1,6°dH (hart), Karbonathärte 10,2 ± 0,8 °dH
    year: '2022',
    description: 'Wasserwerke Höhenhaus und Urbach', //https://web.cdn.rheinenergie.com/cms/media/documents/trinkwasseranalyse/Trinkwasseranalyse_Koln-rechtsrheinisch-2020.pdf
  },
};
tw.data.averageValues = {
  natrium: '30',
  kalium: '3.7',
  calcium: '90',
  magnesium: '14',
  chlorid: '48',
  nitrat: '20.5',
  sulfat: '67.5',
  hardness: '15.75',
};