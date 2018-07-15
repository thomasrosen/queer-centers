# Queer-Centers

Eine Karte über Jugendzentren oder andere hilfreiche Anlaufstellen für Queere Menschen.


## Einen Ort hinzufügen oder bearbeiten:

Alle Orte werden in der places.js Datei gespeichert.
Du kannst die Datei einfach bearbeiten und danach eine Pull request erstellen. Gib in der Beschreibung möglichst Quellen an und die Daten zu verifiezieren.

Der Datensatz für einen Ort ist wie folgt aufgebaut (Hier als Beispiel der für das Anyway in Köln):
    {
        "name": "Anyway",
        "lat": 50.9419,
        "lng": 6.9380,
        "address": "Kamekestr. 14, 50672 Köln, Germany",
        "min_age": 14,
        "max_age": 27,
        "website": "http://www.anyway-koeln.de/",
        "this_is_a_place_for": ["queer", "undecided", "hetero-friends"],
        "tags": ["youthcenter", "cafe", "bar"]
    }


### Kategorien für "this_is_a_place_for":
_Die Liste hat keine bestimmte Reihenfolge. Eröffne ein Issue wenn eine Kategorie fehlt._
* queer _(Nutze dies wenn alle nicht-heteronormativ-idedifizierenden-Menschen willkommen sind.)_
* hetero-friends
* undecided
* a-sexual
* bi
* pan
* poly
* gay
* lesbian
* inter
* trans
* non-binary
* genderqueer
* genderfluid

### "tags":
_Die Liste hat keine bestimmte Reihenfolge. Eröffne ein Issue wenn eine Kategorie fehlt._
* youthcenter
* cafe
* bar
* support-group
