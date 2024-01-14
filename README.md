Trinkwasser Visualisierung: Härtegrad, Bestandteile und Kosten
=======================

* Im Verzeichnis converter/ befinden sich die Rohdaten + kleine Skripte, die diese Rohdaten für die Webansicht aufbereiten
* Im Verzeichnis src/ befinden sich die HTML, CSS und JavaScript Dateien + die aufbereiteten Daten für die Visualisierung. Nach Änderungen einfach grunt gh-pages ausführen, um die Online-Version zu aktualisieren.

Online-Version Region Heilbronn: http://opendatalab.de/projects/trinkwasser/

Datenquellen:
==================

* Stadtwerke Heilbronn: https://www.stadtwerke-heilbronn.de/index/hsw/Wasserh%C3%A4rte.html
* Stadtwerke Neckarsulm: http://www.sw-neckarsulm.de/main/produkte/trinkwasser/wasseranalyse.html
* Webseiten der Gemeinden im Landkreis Heilbronn


Datenquellen für Köln:
===================================

* Rheinenergie: https://www.rheinenergie.com/de/unternehmen/search_result.html?search=Trinkwasseranalyse&page=1

geänderte Dateien für Köln:
============================================
* README.md
* package.json
* src/index.html
* src/data/locations.js
* src/data/mineralwaesser.js
* src/data/zones.js (enthält Wasserwerte aus PDF Dateien)
* unused files moved to: src/data/not used for Cologne version
