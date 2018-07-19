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
    "this_is_a_place_for": ["queer", "undecided", "friends"],
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
    "this_is_a_place_for": ["queer", "undecided", "friends"],
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
    "this_is_a_place_for": ["queer", "undecided", "friends"],
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
    "this_is_a_place_for": ["queer", "undecided", "friends"],
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
    "this_is_a_place_for": ["queer", "undecided", "friends", "family"],
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
    "this_is_a_place_for": ["queer", "undecided", "friends", "family"],
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
    "this_is_a_place_for": ["queer", "undecided", "friends"],
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
    "this_is_a_place_for": ["queer", "undecided", "friends"],
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
    "this_is_a_place_for": ["queer", "undecided", "friends"],
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
    "this_is_a_place_for": ["queer", "undecided", "friends"],
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
    "this_is_a_place_for": ["queer", "undecided", "friends"],
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
    "this_is_a_place_for": ["queer", "undecided", "friends"],
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
    "this_is_a_place_for": ["queer", "undecided", "friends"],
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
  },
  {
    "name": "All the same",
    "lat": 52.2861503,
    "lng": 8.9063873,
    "address": "Juxbude Minden, Königswall 101, 32423 Minden",
    "min_age": 14,
    "max_age": 21,
    "website": "https://www.facebook.com/allthesameMinden/",
    "this_is_a_place_for": ["queer", "undecided"],
    "tags": ["youthcenter"]
  },
  {
    "name": "Queerlaut Bielefeld",
    "lat": 52.0741504,
    "lng": 8.5937618,
    "address": "AWO Kinder- und Jugendhaus Brake, Glückstädterstr. 25, 33729 Bielefeld",
    "min_age": 16,
    "max_age": 27,
    "website": "https://www.queerlaut.de/",
    "this_is_a_place_for": [],
    "tags": ["group"]
  },
  {
    "name": "jung, schwul, positiv Köln",
    "lat": 50.9326734,
    "lng": 6.9371913,
    "address": "Aidshilfe Köln, Beethovenstraße 1, 50674 Köln",
    "min_age": -1,
    "max_age": 30,
    "website": "http://queere-jugend-nrw.de/projekte/jung-schwul-positiv-koeln/",
    "this_is_a_place_for": ["gay"],
    "tags": ["group"]
  },
  {
    "name": "Bunter Ort Wuppertal",
    "lat": 51.2289002,
    "lng": 7.1032164,
    "address": "Kinder-und Jugendfarm Wuppertal e.V., Rutenbecker Weg 167, 42329 Wuppertal",
    "min_age": 14,
    "max_age": 27,
    "website": "https://www.facebook.com/BunterOrt/",
    "this_is_a_place_for": ["queer", "undecided", "hetero"],
    "tags": ["youthcenter"]
  },
  {
    "name": "Young Heroes Mönchengladbach",
    "lat": 51.1962811,
    "lng": 6.4220063,
    "address": "Aidshilfe Mönchengladbach, August-Pieper-Straße 1, 41061 Mönchengladbach",
    "min_age": 14,
    "max_age": 21,
    "website": "https://www.facebook.com/YoungHeroes-Young-Gay-M%C3%B6nchengladbach-805027019619523/",
    "this_is_a_place_for": ["bi", "gay"],
    "tags": ["youthcenter"]
  },
  {
    "name": "Jugendtreff Paderborn",
    "lat": 51.720063,
    "lng": 8.7457264,
    "address": "AIDS-Hilfe Paderborn, Friedrichstraße 51, 33102 Paderborn",
    "min_age": 14,
    "max_age": 26,
    "website": "https://www.facebook.com/QueereJugendgruppePaderborn/",
    "this_is_a_place_for": ["queer", "undecided"],
    "tags": ["youthgroup"]
  },
  {
    "name": "Trans*Fair Bonn",
    "lat": 50.7401387,
    "lng": 7.1233544,
    "address": "GAP in Bonn, Obere Wilhelmstraße 29, 53225 Bonn-Beuel",
    "min_age": 14,
    "max_age": 27,
    "website": "http://gap-in-bonn.de/",
    "this_is_a_place_for": ["trans", "inter"],
    "tags": ["youthgroup"]
  },
  {
    "name": "Sunrise MeeTS Dortmund",
    "lat": 51.5173371,
    "lng": 7.467899,
    "address": "Sunrise im Fritz-Henßler-Haus, Geschwister-Scholl-Straße 33-37, 44135 Dortmund",
    "min_age": 14,
    "max_age": 23,
    "website": "http://www.sunrise-dortmund.de/",
    "this_is_a_place_for": ["trans"],
    "tags": ["youthgroup"]
  },
  {
    "name": "Lucky MG Mönchengladbach",
    "lat": 51.1962811,
    "lng": 6.4220063,
    "address": "Aidshilfe Mönchengladbach/Rheydt, August-Pieper-Straße 1, 41061 Mönchengladbach",
    "min_age": 24,
    "max_age": 27,
    "website": "https://www.facebook.com/liveluckymg",
    "this_is_a_place_for": ["bi", "lesbian"],
    "tags": ["youthgroup"]
  },
  {
    "name": "begin Bielefeld",
    "lat": 52.0185625,
    "lng": 8.5467641,
    "address": "Jugendzentrum Kamp, Niedermühlenkamp 43, 33604 Bielefeld",
    "min_age": 14,
    "max_age": 26,
    "website": "http://begin-bielefeld.de/",
    "this_is_a_place_for": ["queer", "undecided"],
    "tags": ["youthcenter"]
  },
  {
    "name": "Diversity Detmold",
    "lat": 51.9388606,
    "lng": 8.8745995,
    "address": "Jugendfreizeithaus, Wiesenstraße 5a, 32756 Detmold",
    "min_age": 16,
    "max_age": 25,
    "website": "http://viva-detmold.de/diversity/",
    "this_is_a_place_for": ["queer", "undecided", "friends"],
    "tags": ["youthcenter", "cafe"]
  },
  {
    "name": "SLaM in Moers",
    "lat": 51.4481739,
    "lng": 6.6058028,
    "address": "Keller des Kindergartens, Rüttgersweg 25, 47441 Moers",
    "min_age": 16,
    "max_age": 26,
    "website": "http://slam-moers.de/",
    "this_is_a_place_for": ["queer", "undecided", "friends"],
    "tags": ["youthgroup"]
  },
  {
    "name": "MGay Mönchengladbach",
    "lat": 51.1962811,
    "lng": 6.4220063,
    "address": "Aids-Hilfe Mönchengladbach, August-Pieper-Straße 1, 41061 Mönchengladbach",
    "min_age": 25,
    "max_age": -1,
    "website": "https://www.facebook.com/MGay-Die-Gruppe-1618361998409829",
    "this_is_a_place_for": ["gay"],
    "tags": ["group"]
  },
  {
    "name": "Puzzles im andersRoom Siegen",
    "lat": 50.8805534,
    "lng": 8.0054913,
    "address": "andersROOM, Freudenbergerstraße 67, 57072 Siegen",
    "min_age": 14,
    "max_age": 24,
    "website": "https://www.facebook.com/Puzzles-Jugendtreff-im-andersROOM-615735518573140",
    "this_is_a_place_for": ["queer", "undecided", "friends"],
    "tags": ["youthcenter"]
  }
];
