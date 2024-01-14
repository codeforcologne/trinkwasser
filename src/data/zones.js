// Werte aus den PDF-Dateien auf:
// https://www.rheinenergie.com/de/unternehmen/search_result.html?search=Trinkwasseranalyse&page=1

tw.data.zones = {
  'Köln linksrheinisch': {
    // inklusive Pulheim
    natrium: '35', // 35 ± 4
    kalium: '4.3', // 4.3 ± 0.3
    calcium: '103', // 103 ± 8
    magnesium: '14', // 14 ± 1
    chlorid: '64', // 64 ± 6
    nitrat: '20', // 20 ± 3
    sulfat: '72', // 72 ± 9
    hardness: '17.5', // Summe Erdalkalien (Gesamthärte) 3,14 ± 0,27 mol/m³ entspricht 17,5 ± 1,5°dH (hart), Karbonathärte 12,1 ± 0,9 °dH
    year: '2023',
    description: 'Wasserwerke Hochkirchen und Weiler', // https://web.cdn.rheinenergie.com/cms/media/documents/trinkwasseranalyse/Trinkwasseranalyse_Linksrheinisch.pdf
  },
  'Köln rechtsrheinisch': {
    natrium: '27', // 27 ± 2
    kalium: '3.2', // 3.2 ± 8
    calcium: '74', // 74 ± 3
    magnesium: '14', // 14 ± 4
    chlorid: '33', // 33 ± 3
    nitrat: '19', // 19 ± 1
    sulfat: '62', // 62 ± 9
    hardness: '14', // Summe Erdalkalien (Gesamthärte) 2,49 ± 0,19 mol/m³ entspricht 14,0 ± 1,0°dH (hart), Karbonathärte 10,0 ± 0,4 °dH
    year: '2023',
    description: 'Wasserwerke Höhenhaus und Urbach', //https://web.cdn.rheinenergie.com/cms/media/documents/trinkwasseranalyse/Trinkwasseranalyse_Koln-rechtsrheinisch-2020.pdf
    // die 2020 muss im Dateinamen stehen. Es wird dann automatisch zur aktuellsten Version weitergeleitet.
  },
};
tw.data.averageValues = {
  natrium: '31',
  kalium: '3.75',
  calcium: '88.5',
  magnesium: '14',
  chlorid: '48.5',
  nitrat: '19.5',
  sulfat: '67',
  hardness: '15.75',
};