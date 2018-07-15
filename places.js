/*
Template:
  {
    "name": "",
    "lat": ,
    "lng": ,
    "address": "",
    "min_age": -1,
    "max_age": -1,
    "website": "",
    "this_is_a_place_for": [],
    "tags": []
  },

*/

var places = [
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
  },
  {
    "name": "Magnus-Hirschfeld-Centrum",
    "lat": 53.5893874,
    "lng": 10.0139137,
    "address": "Borgweg 8, 22303 Hamburg, Germany",
    "min_age": -1,
    "max_age": -1,
    "website": "https://www.mhc-hh.de/",
    "this_is_a_place_for": ["queer", "undecided", "hetero-friends"],
    "tags": ["cafe", "youthcenter"]
  },
  {
    "name": "Sunrise",
    "lat": 51.5173371,
    "lng": 7.467899,
    "address": "Geschwister-Scholl-Straße 33-37, 44135 Dortmund, Germany",
    "min_age": -1,
    "max_age": 23,
    "website": "http://www.sunrise-dortmund.de/",
    "this_is_a_place_for": ["queer", "undecided", "hetero-friends"],
    "tags": ["youthcenter", "education"]
  },
  {
    "name": "diversity München",
    "lat": 48.1331836,
    "lng": 11.5713013,
    "address": "Blumenstraße 11, 80331 München, Germany",
    "min_age": -1,
    "max_age": 27,
    "website": "https://diversity-muenchen.de/",
    "this_is_a_place_for": ["queer", "undecided", "hetero-friends"],
    "tags": ["youthcenter", "cafe", "education"]
  },
  {
    "name": "Gerede e.V.",
    "lat": 51.0651315,
    "lng": 13.7571573,
    "address": "Prießnitzstraße 18, 01099 Dresden",
    "min_age": 14,
    "max_age": -1,
    "website": "http://www.gerede-dresden.de/",
    "this_is_a_place_for": ["queer", "undecided", "hetero-friends", "family"],
    "tags": ["community-center", "education"]
  },
  {
    "name": "GAP",
    "lat": 50.7401353,
    "lng": 7.1233544,
    "address": "Obere Wilhelmstraße 29, 53225 Bonn, Germany",
    "min_age": 14,
    "max_age": 27,
    "website": "http://gap-in-bonn.de",
    "this_is_a_place_for": ["queer", "undecided", "hetero-friends", "family"],
    "tags": ["youthcenter", "education"]
  },
  {
    "name": "Harvey House",
    "lat": 41.692108,
    "lng": -83.5785127,
    "address": "2039 W Laskey Rd, Toledo, OH 43612, USA",
    "min_age": -1,
    "max_age": -1,
    "website": "http://harveyhousenwo.org/",
    "this_is_a_place_for": ["queer", "undecided", "hetero-friends"],
    "tags": ["youthcenter"]
  },
  {
    "name": "ITrouth - Trans-inter Jugendgruppe Oldenburg",
    "lat": 53.1485385,
    "lng": 8.2015414,
    "address": "Ziegelhofstraße 83, 26121 Oldenburg",
    "min_age": 14,
    "max_age": 27,
    "website": "https://twitter.com/itrouth",
    "this_is_a_place_for": ["trans", "inter"],
    "tags": ["youthgroup"]
  },
  {
    "name": "Hempels",
    "lat": 53.1485385,
    "lng": 8.2015414,
    "address": "Ziegelhofstraße 83, 26121 Oldenburg",
    "min_age": -1,
    "max_age": -1,
    "website": "naund-oldenburg.de",
    "this_is_a_place_for": ["queer", "undecided", "hetero-friends"],
    "tags": ["community-center", "cafe", "bar"]
  },
  {
    "name": "Jugendnetzwerk::Lambda::Berlin-Brandenburg e. V",
    "lat": 52.54831,
    "lng": 13.4049613,
    "address": "Sonnenburger Str. 69, 10437 Berlin",
    "min_age": 14,
    "max_age": 27,
    "website": "https://www.lambda-bb.de/",
    "this_is_a_place_for": ["queer", "undecided"],
    "tags": ["youthcenter"]
  },
  {
    "name": "Queeres Zentrum Darmstadt",
    "lat": 49.8830765,
    "lng": 8.6651286,
    "address": "Kranichsteiner Str. 81, 64289 Darmstadt",
    "min_age": 14,
    "max_age": 27,
    "website": "http://queereszentrum-darmstadt.org/",
    "this_is_a_place_for": ["queer", "undecided", "hetero-friends"],
    "tags": ["youthcenter"]
  },
  {
    "name": "Queeres Zentrum Göttingen",
    "lat": 51.5575034,
    "lng": 9.9298358,
    "address": "Hannoversche Str. 80, 37077 Göttingen",
    "min_age": -1,
    "max_age": -1,
    "website": "http://queeres-zentrum-goettingen.de",
    "this_is_a_place_for": ["queer", "undecided", "hetero-friends"],
    "tags": ["community-center", "youthcenter"]
  },
  {
    "name": "Knutschfleck e.V.",
    "lat": 50.7702529,
    "lng": 6.0729973,
    "address": "Jakobspl. 1, 52064 Aachen",
    "min_age": 14,
    "max_age": 27,
    "website": "https://www.knutschfleck-online.de/",
    "this_is_a_place_for": ["queer", "undecided", "hetero-friends"],
    "tags": ["youthcenter"]
  },
  {
    "name": "KUSS41",
    "lat": 50.1136134,
    "lng": 8.6854024,
    "address": "Kurt-Schumacher-Straße 41, 60311 Frankfurt am Main",
    "min_age": 14,
    "max_age": 27,
    "website": "http://www.kuss41.de/",
    "this_is_a_place_for": ["queer", "undecided", "hetero-friends"],
    "tags": ["youthcenter"]
  },
  {
    "name": "Das Gugg – Café und Vereinszentrum der HOSI Wien",
    "lat": 48.1962028,
    "lng": 16.3595653,
    "address": "Heumühlgasse 14, 1040 Wien",
    "min_age": -1,
    "max_age": -1,
    "website": "http://www.hosiwien.at/gugg/",
    "this_is_a_place_for": ["queer", "undecided", "hetero-friends"],
    "tags": ["cafe"]
  },
  {
    "name": "DéjàWü e. V.",
    "lat": 49.79521,
    "lng": 9.9178613,
    "address": "Nigglweg 2, 97082 Würzburg",
    "min_age": 16,
    "max_age": 26,
    "website": "http://www.dejawue.de/",
    "this_is_a_place_for": ["queer", "undecided"],
    "tags": ["youthcenter"]
  },
  {
    "name": "LSBT-Jugendtreff Hildesheim",
    "lat": 52.157187,
    "lng": 9.952266,
    "address": "Bernwardstraße 3, 31134 Hildesheim",
    "min_age": 14,
    "max_age": 24,
    "website": "https://lsbt-jugendtreff-hildesheim.jimdo.com/",
    "this_is_a_place_for": ["queer", "undecided"],
    "tags": ["youthgroup"]
  },
  {
    "name": "Queerbeet Hildesheim",
    "lat": 51.9849145,
    "lng": 9.8257856,
    "address": "Am Klinsberg 1, 31061 Alfeld, Niedersachsen, Germany",
    "min_age": -1,
    "max_age": -1,
    "website": "https://www.facebook.com/queerbeet.hildesheim/",
    "this_is_a_place_for": ["queer", "undecided"],
    "tags": ["group"]
  }
];
