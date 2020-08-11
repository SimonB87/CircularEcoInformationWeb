const wasteData = {
  regionCodes: {
    jm: "Jihomoravský", kr: "Královéhradecký", ms: "Moravskoslezský", zl: "Zlínský", vy: "Vysočina", ol: "Olomoucký", pa: "Pardubický", us: "Ústecký", ka: "Karlovarský", li: "Liberecký", pl: "Plzeňský", sc: "Středočeský", jc: "Jihočeský", cr: "Průměr ČR"
  },
  populace: {
    jm: 1184729, kr: 550688, ms: 1204346, zl: 582860, vy: 509019, ol: 632547, pa: 519125, us: 820580, ka: 295285, li: 441608, pl: 582601, sc: 1360998, jc: 640909, cr: 10626430
  },
  nakladyNaOhKc: {
    jm: 949, kr: 969, ms: 1016, zl: 1028, vy: 1034, ol: 1041, pa: 1050, us: 1086, ka: 1122, li: 1159, pl: 1269, sc: 1311, jc: 1329, cr: 1106
  },
  nakladyZOhKc: {
    jm: 628, kr: 521, ms: 569, zl: 536, vy: 623, ol: 747, pa: 696, us: 474, ka: 460, li: 543, pl: 587, sc: 732, jc: 661, cr: 612
  },
  nakladyTridenySberTun: {
    jm: 3293, kr: 4294, ms: 3933, zl: 3970, vy: 3854, ol: 3212, pa: 3976, us: 5466, ka: 3615, li: 5414, pl: 5056, sc: 4806, jc: 4918, cr: null
  },
  nakladyTridenySberKc: {
    jm: 109, kr: 181, ms: 146, zl: 137, vy: 170, ol: 123, pa: 146, us: 157, ka: 149, li: 181, pl: 219, sc: 215, jc: 196, cr: 164
  },
  nakladySkoTun: {
    jm: 2731, kr: 2385, ms: 2474, zl: 2573, vy: 2502, ol: 2255, pa: 2424, us: 2587, ka: 3015, li: 3228, pl: 2716, sc: 2577, jc: 2399, cr: 2605
  },
  nakladySkoKc: {
    jm: 500, kr: 447, ms: 464, zl: 443, vy: 460, ol: 443, pa: 476, us: 516, ka: 584, li: 590, pl: 527, sc: 577, jc: 492, cr: 501
  },
  produkceOdpadCelkova: {
    jm: 4437, kr: 3045, ms: 3844, zl: 2507, vy: 3276, ol: 3868, pa: 2889, us: 3570, ka: 3134, li: 2338, pl: 3371, sc: 3613, jc: 3328, cr: 3325
  },
  produkceOdpadO: {
    jm: 4286, kr: 2933, ms: 3528, zl: 2353, vy: 3136, ol: 3752, pa: 2721, us: 3419, ka: 2968, li: 2142, pl: 3255, sc: 3414, jc: 3189, cr: 3161
  },
  produkceOdpadN: {},
  produkceKomunal: {},
  produkceSko: {},
  produkcePlast: {},
  produkcePapir: {},
  produkceSklo: {},
  produkceKovy: {},
  produkceBro: {}
};

let formValueResult = {
  wasteResult01: "",
  wasteResult02: "",
  wasteResult03: "",
  wasteResult04: "",
  wasteResult05: "",
  wasteResult06: "",
  wasteResult07: "",
  wasteResult08: "",
  wasteResult09: "",
  wasteResult10: "",
  wasteResult11: "",
  wasteResult12: "",
  wasteResult13: "",
  wasteResult14: "",
  wasteResult15: "",
  wasteResult16: ""
}