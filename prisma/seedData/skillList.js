const skillList = [
  {
    "id": 25,
    "unitId": 1,
    "name": "Eradicate",
    "code": "sk_c1100_1",
    "type": 1
  },
  {
    "id": 26,
    "unitId": 1,
    "name": "Noble Blood",
    "code": "sk_c1100_2",
    "type": 2
  },
  { "id": 27, "unitId": 1, "name": "Genesis", "code": "sk_c1100_3", "type": 3 },
  {
    "id": 19,
    "unitId": 10,
    "name": "Windbreak Fan",
    "code": "sk_c1071_1",
    "type": 1
  },
  {
    "id": 20,
    "unitId": 10,
    "name": "Butterfly Fan",
    "code": "sk_c1071_2",
    "type": 2
  },
  {
    "id": 21,
    "unitId": 10,
    "name": "Razorwind Fan",
    "code": "sk_c1071_3",
    "type": 3
  },
  {
    "id": 259,
    "unitId": 100,
    "name": "Electrocute",
    "code": "sk_c2037_1",
    "type": 1
  },
  {
    "id": 260,
    "unitId": 100,
    "name": "Electric Charge",
    "code": "pa_c2037_2",
    "type": 2
  },
  {
    "id": 261,
    "unitId": 100,
    "name": "Supercharge",
    "code": "sk_c2037_3",
    "type": 3
  },
  {
    "id": 295,
    "unitId": 101,
    "name": "Earthen Rage",
    "code": "sk_c2010_1",
    "type": 1
  },
  {
    "id": 296,
    "unitId": 101,
    "name": "Iron Will",
    "code": "sk_c2010_2",
    "type": 2
  },
  {
    "id": 297,
    "unitId": 101,
    "name": "Cataclysm",
    "code": "sk_c2010_3",
    "type": 3
  },
  {
    "id": 280,
    "unitId": 102,
    "name": "Relentless Strike",
    "code": "sk_c1014_1",
    "type": 1
  },
  {
    "id": 281,
    "unitId": 102,
    "name": "Wind's Resolve",
    "code": "pa_c1014_2",
    "type": 2
  },
  { "id": 282, "unitId": 102, "name": "Hack", "code": "sk_c1014_3", "type": 3 },
  {
    "id": 283,
    "unitId": 103,
    "name": "Harsh Lesson",
    "code": "sk_c1028_1",
    "type": 1
  },
  { "id": 284, "unitId": 103, "name": "Rage", "code": "pa_c1028_2", "type": 2 },
  {
    "id": 285,
    "unitId": 103,
    "name": "Hysteric",
    "code": "sk_c1028_3",
    "type": 3
  },
  {
    "id": 271,
    "unitId": 104,
    "name": "Ambush",
    "code": "sk_c1033_1",
    "type": 1
  },
  {
    "id": 272,
    "unitId": 104,
    "name": "Accurate Strike",
    "code": "sk_c1033_2",
    "type": 2
  },
  {
    "id": 273,
    "unitId": 104,
    "name": "Baptism of Fire",
    "code": "sk_c1033_3",
    "type": 3
  },
  {
    "id": 289,
    "unitId": 105,
    "name": "Shield Slam",
    "code": "sk_c1012_1",
    "type": 1
  },
  {
    "id": 290,
    "unitId": 105,
    "name": "Macerate",
    "code": "sk_c1012_2",
    "type": 2
  },
  {
    "id": 291,
    "unitId": 105,
    "name": "Fury's Advent",
    "code": "sk_c1012_3",
    "type": 3
  },
  {
    "id": 292,
    "unitId": 106,
    "name": "Heckle",
    "code": "sk_c2054_1",
    "type": 1
  },
  {
    "id": 293,
    "unitId": 106,
    "name": "Eyecatcher",
    "code": "sk_c2054_2",
    "type": 2
  },
  {
    "id": 294,
    "unitId": 106,
    "name": "Curtain Call",
    "code": "sk_c2054_3",
    "type": 3
  },
  {
    "id": 310,
    "unitId": 107,
    "name": "Takedown",
    "code": "sk_c2008_1",
    "type": 1
  },
  {
    "id": 311,
    "unitId": 107,
    "name": "Security State",
    "code": "pa_2008_2",
    "type": 2
  },
  {
    "id": 312,
    "unitId": 107,
    "name": "Shield of Holy Spirit",
    "code": "sk_c2008_3",
    "type": 3
  },
  { "id": 301, "unitId": 108, "name": "Rush", "code": "sk_c1036_1", "type": 1 },
  {
    "id": 302,
    "unitId": 108,
    "name": "Mark of Protection",
    "code": "pa_c1036_2",
    "type": 2
  },
  {
    "id": 303,
    "unitId": 108,
    "name": "Breakthrough",
    "code": "sk_c1036_3",
    "type": 3
  },
  {
    "id": 313,
    "unitId": 109,
    "name": "Prep Ingredients",
    "code": "sk_c1021_1",
    "type": 1
  },
  {
    "id": 314,
    "unitId": 109,
    "name": "Quick Grill",
    "code": "sk_c1021_2",
    "type": 2
  },
  {
    "id": 315,
    "unitId": 109,
    "name": "Free Dinner",
    "code": "sk_c1021_3",
    "type": 3
  },
  {
    "id": 28,
    "unitId": 11,
    "name": "Blood Scythe",
    "code": "sk_c2039_1",
    "type": 1
  },
  { "id": 29, "unitId": 11, "name": "Grudge", "code": "sk_c2039_2", "type": 2 },
  {
    "id": 30,
    "unitId": 11,
    "name": "Moon Slash",
    "code": "sk_c2039_3",
    "type": 3
  },
  { "id": 316, "unitId": 110, "name": "Hail", "code": "sk_c1037_1", "type": 1 },
  {
    "id": 317,
    "unitId": 110,
    "name": "Blizzard Cape",
    "code": "sk_c1037_2",
    "type": 2
  },
  {
    "id": 318,
    "unitId": 110,
    "name": "Ice Spear",
    "code": "sk_c1037_3",
    "type": 3
  },
  {
    "id": 304,
    "unitId": 111,
    "name": "Strike of Provocation",
    "code": "sk_c2032_1",
    "type": 1
  },
  {
    "id": 305,
    "unitId": 111,
    "name": "Reclaim",
    "code": "pa_c2032_2",
    "type": 2
  },
  {
    "id": 306,
    "unitId": 111,
    "name": "Finishing Attack",
    "code": "sk_c2032_3",
    "type": 3
  },
  {
    "id": 307,
    "unitId": 112,
    "name": "Half Slash",
    "code": "sk_c3026_1",
    "type": 1
  },
  {
    "id": 308,
    "unitId": 112,
    "name": "Energy Wave",
    "code": "sk_c3026_2",
    "type": 2
  },
  {
    "id": 309,
    "unitId": 112,
    "name": "Pursuit Cut",
    "code": "sk_c3026_3",
    "type": 3
  },
  {
    "id": 358,
    "unitId": 113,
    "name": "Quickdraw",
    "code": "sk_c1087_1",
    "type": 1
  },
  {
    "id": 359,
    "unitId": 113,
    "name": "Morale Boost",
    "code": "sk_c1087_2",
    "type": 2
  },
  {
    "id": 360,
    "unitId": 113,
    "name": "Fatal Bullet",
    "code": "sk_c1087_3",
    "type": 3
  },
  {
    "id": 331,
    "unitId": 114,
    "name": "Heroic Strike",
    "code": "sk_c2035_1",
    "type": 1
  },
  {
    "id": 332,
    "unitId": 114,
    "name": "Spearhead",
    "code": "pa_c2035_2",
    "type": 2
  },
  {
    "id": 333,
    "unitId": 114,
    "name": "Command to Charge",
    "code": "sk_c2035_3",
    "type": 3
  },
  {
    "id": 622,
    "unitId": 115,
    "name": "Vertical Cut",
    "code": "sk_c2086_1",
    "type": 1
  },
  {
    "id": 623,
    "unitId": 115,
    "name": "Motivation",
    "code": "sk_c2086_2",
    "type": 2
  },
  {
    "id": 624,
    "unitId": 115,
    "name": "Great Chief's Devotion",
    "code": "sk_c2086_3",
    "type": 3
  },
  {
    "id": 355,
    "unitId": 116,
    "name": "Whispering Spirit",
    "code": "sk_c2018_1",
    "type": 1
  },
  {
    "id": 356,
    "unitId": 116,
    "name": "Spirit's Protection",
    "code": "sk_c2018_2",
    "type": 2
  },
  {
    "id": 357,
    "unitId": 116,
    "name": "Wave of Force",
    "code": "sk_c2018_3",
    "type": 3
  },
  {
    "id": 343,
    "unitId": 117,
    "name": "Sequential Cutter",
    "code": "sk_c1011_1",
    "type": 1
  },
  {
    "id": 344,
    "unitId": 117,
    "name": "Blade Art: Flash",
    "code": "sk_c1011_2",
    "type": 2
  },
  {
    "id": 345,
    "unitId": 117,
    "name": "Blade Art: Thunder",
    "code": "sk_c1011_3",
    "type": 3
  },
  {
    "id": 352,
    "unitId": 118,
    "name": "Hey There!",
    "code": "sk_c1086_1",
    "type": 1
  },
  {
    "id": 353,
    "unitId": 118,
    "name": "Casual Introduction",
    "code": "sk_c1086_2",
    "type": 2
  },
  {
    "id": 354,
    "unitId": 118,
    "name": "Rough Welcome",
    "code": "sk_c1086_3",
    "type": 3
  },
  {
    "id": 349,
    "unitId": 119,
    "name": "Flame Strike",
    "code": "sk_c1085_1",
    "type": 1
  },
  {
    "id": 350,
    "unitId": 119,
    "name": "Composure",
    "code": "sk_c1085_2",
    "type": 2
  },
  {
    "id": 351,
    "unitId": 119,
    "name": "Emberstorm",
    "code": "sk_c1085_3",
    "type": 3
  },
  {
    "id": 31,
    "unitId": 12,
    "name": "Quick Bombardment",
    "code": "sk_c1097_1",
    "type": 1
  },
  {
    "id": 32,
    "unitId": 12,
    "name": "Stance Shift",
    "code": "sk_c1097_2",
    "type": 2
  },
  {
    "id": 33,
    "unitId": 12,
    "name": "Full Bombardment!",
    "code": "sk_c1097_3",
    "type": 3
  },
  {
    "id": 337,
    "unitId": 120,
    "name": "Get Away, Meow!",
    "code": "sk_c2028_1",
    "type": 1
  },
  {
    "id": 338,
    "unitId": 120,
    "name": "Meow I'm Angry!",
    "code": "sk_c2028_2",
    "type": 2
  },
  {
    "id": 339,
    "unitId": 120,
    "name": "I'm So Cute, Meow♥",
    "code": "sk_c2028_3",
    "type": 3
  },
  {
    "id": 334,
    "unitId": 121,
    "name": "Aitan Beeeam! ☆",
    "code": "sk_c1107_1",
    "type": 1
  },
  {
    "id": 335,
    "unitId": 121,
    "name": "Crisis Avoidance ♪",
    "code": "sk_c1107_2",
    "type": 2
  },
  {
    "id": 336,
    "unitId": 121,
    "name": "Super Intelligent AI",
    "code": "sk_c1107_3",
    "type": 3
  },
  {
    "id": 322,
    "unitId": 122,
    "name": "Sparrow Dive",
    "code": "sk_c1029_1",
    "type": 1
  },
  {
    "id": 323,
    "unitId": 122,
    "name": "Fox Hunt",
    "code": "sk_c1029_2",
    "type": 2
  },
  {
    "id": 324,
    "unitId": 122,
    "name": "Flying Racoo",
    "code": "sk_c1029_3",
    "type": 3
  },
  {
    "id": 340,
    "unitId": 123,
    "name": "Holy Light",
    "code": "sk_c1031_1",
    "type": 1
  },
  {
    "id": 341,
    "unitId": 123,
    "name": "Regen",
    "code": "sk_c1031_2",
    "type": 2
  },
  {
    "id": 342,
    "unitId": 123,
    "name": "Serenity",
    "code": "sk_c1031_3",
    "type": 3
  },
  {
    "id": 346,
    "unitId": 124,
    "name": "Weakening Blow",
    "code": "sk_c1032_1",
    "type": 1
  },
  {
    "id": 347,
    "unitId": 124,
    "name": "Concuss",
    "code": "sk_c1032_2",
    "type": 2
  },
  {
    "id": 348,
    "unitId": 124,
    "name": "Morale Boost",
    "code": "sk_c1032_3",
    "type": 3
  },
  {
    "id": 325,
    "unitId": 125,
    "name": "Divine Bolt",
    "code": "sk_c1005_1",
    "type": 1
  },
  {
    "id": 326,
    "unitId": 125,
    "name": "Dimensional Rupture",
    "code": "sk_c1005_2",
    "type": 2
  },
  {
    "id": 327,
    "unitId": 125,
    "name": "Blazing Eye of Kal",
    "code": "sk_c1005_3",
    "type": 3
  },
  {
    "id": 319,
    "unitId": 126,
    "name": "Falling Strike",
    "code": "sk_c1035_1",
    "type": 1
  },
  {
    "id": 320,
    "unitId": 126,
    "name": "Get Lost!",
    "code": "pa_c1035_2",
    "type": 2
  },
  {
    "id": 321,
    "unitId": 126,
    "name": "Final Blow",
    "code": "sk_c1035_3",
    "type": 3
  },
  {
    "id": 328,
    "unitId": 127,
    "name": "Ring Throw",
    "code": "sk_c1054_1",
    "type": 1
  },
  {
    "id": 329,
    "unitId": 127,
    "name": "Dazzling Dance",
    "code": "sk_c1054_2",
    "type": 2
  },
  {
    "id": 330,
    "unitId": 127,
    "name": "Showtime",
    "code": "sk_c1054_3",
    "type": 3
  },
  {
    "id": 361,
    "unitId": 128,
    "name": "Fire Slingshot",
    "code": "sk_c2029_1",
    "type": 1
  },
  {
    "id": 362,
    "unitId": 128,
    "name": "Fire Shockbomb",
    "code": "sk_c2029_2",
    "type": 2
  },
  {
    "id": 363,
    "unitId": 128,
    "name": "Go, Racoo!",
    "code": "sk_c2029_3",
    "type": 3
  },
  {
    "id": 370,
    "unitId": 129,
    "name": "Gravity Arrow",
    "code": "sk_c1043_1",
    "type": 1
  },
  {
    "id": 371,
    "unitId": 129,
    "name": "Gravitation",
    "code": "sk_c1043_2",
    "type": 2
  },
  {
    "id": 372,
    "unitId": 129,
    "name": "Event Horizon",
    "code": "sk_c1043_3",
    "type": 3
  },
  {
    "id": 22,
    "unitId": 13,
    "name": "Fallen Flower",
    "code": "sk_c2024_1",
    "type": 1
  },
  {
    "id": 23,
    "unitId": 13,
    "name": "Witch's Curse",
    "code": "sk_c2024_2",
    "type": 2
  },
  {
    "id": 24,
    "unitId": 13,
    "name": "Cursed Thorn",
    "code": "sk_c2024_3",
    "type": 3
  },
  {
    "id": 375,
    "unitId": 130,
    "name": "Sequential Cutter",
    "code": "sk_c1003_1",
    "type": 1
  },
  {
    "id": 376,
    "unitId": 130,
    "name": "Shield of Light",
    "code": "sk_c1003_2",
    "type": 2
  },
  {
    "id": 377,
    "unitId": 130,
    "name": "Goddess of Victory",
    "code": "sk_c1003_3",
    "type": 3
  },
  {
    "id": 367,
    "unitId": 131,
    "name": "Rapid Fire",
    "code": "sk_c1020_1",
    "type": 1
  },
  {
    "id": 368,
    "unitId": 131,
    "name": "Explosive Gentleman",
    "code": "pa_c1020_2",
    "type": 2
  },
  {
    "id": 369,
    "unitId": 131,
    "name": "Rifle Shot",
    "code": "sk_c1020_3",
    "type": 3
  },
  {
    "id": 387,
    "unitId": 132,
    "name": "Seduction",
    "code": "sk_c1040_1",
    "type": 1
  },
  {
    "id": 388,
    "unitId": 132,
    "name": "Spirit Absorb",
    "code": "sk_c1040_2",
    "type": 2
  },
  {
    "id": 389,
    "unitId": 132,
    "name": "Flame Kiss",
    "code": "sk_c1040_3",
    "type": 3
  },
  {
    "id": 381,
    "unitId": 133,
    "name": "Sequential Cutter",
    "code": "sk_c2003_1",
    "type": 1
  },
  {
    "id": 382,
    "unitId": 133,
    "name": "Spear of Darkness",
    "code": "sk_c2003_2",
    "type": 2
  },
  {
    "id": 383,
    "unitId": 133,
    "name": "Goddess of Ruin",
    "code": "sk_c2003_3",
    "type": 3
  },
  {
    "id": 378,
    "unitId": 134,
    "name": "Magic Design",
    "code": "sk_c2017_1",
    "type": 1
  },
  {
    "id": 379,
    "unitId": 134,
    "name": "Resurrection Magic",
    "code": "sk_c2017_2",
    "type": 2
  },
  {
    "id": 380,
    "unitId": 134,
    "name": "Sparkling Star",
    "code": "sk_c2017_3",
    "type": 3
  },
  {
    "id": 364,
    "unitId": 135,
    "name": "Single Shot",
    "code": "sk_c1004_1",
    "type": 1
  },
  {
    "id": 365,
    "unitId": 135,
    "name": "Concentration",
    "code": "pa_c1004_2",
    "type": 2
  },
  {
    "id": 366,
    "unitId": 135,
    "name": "Storm Arrow",
    "code": "sk_c1004_3",
    "type": 3
  },
  {
    "id": 390,
    "unitId": 136,
    "name": "Debilitating Strike",
    "code": "sk_c2062_1",
    "type": 1
  },
  {
    "id": 391,
    "unitId": 136,
    "name": "Soul Harvest",
    "code": "sk_c2062_2",
    "type": 2
  },
  {
    "id": 392,
    "unitId": 136,
    "name": "Dark Salvation",
    "code": "sk_c2062_3",
    "type": 3
  },
  {
    "id": 408,
    "unitId": 137,
    "name": "Chain Dagger",
    "code": "sk_c1065_1",
    "type": 1
  },
  {
    "id": 409,
    "unitId": 137,
    "name": "Edge Smash",
    "code": "sk_c1065_2",
    "type": 2
  },
  {
    "id": 410,
    "unitId": 137,
    "name": "Implosion",
    "code": "sk_c1065_3",
    "type": 3
  },
  {
    "id": 393,
    "unitId": 138,
    "name": "Lunge",
    "code": "sk_c2065_1",
    "type": 1
  },
  {
    "id": 394,
    "unitId": 138,
    "name": "Swift Movement",
    "code": "sk_c2065_2",
    "type": 2
  },
  {
    "id": 395,
    "unitId": 138,
    "name": "Moonlight Shadow",
    "code": "sk_c2065_3",
    "type": 3
  },
  {
    "id": 373,
    "unitId": 139,
    "name": "Pledgeguard",
    "code": "sk_c2036_1",
    "type": 1
  },
  {
    "id": 374,
    "unitId": 139,
    "name": "Oath of Protection",
    "code": "sk_c2036_3",
    "type": 3
  },
  {
    "id": 34,
    "unitId": 14,
    "name": "Deliverance",
    "code": "sk_c1002_1",
    "type": 1
  },
  {
    "id": 35,
    "unitId": 14,
    "name": "Steel Cloudburst",
    "code": "sk_c1002_2",
    "type": 2
  },
  {
    "id": 36,
    "unitId": 14,
    "name": "Ruinous Retribution",
    "code": "sk_c1002_3",
    "type": 3
  },
  {
    "id": 414,
    "unitId": 140,
    "name": "Basic Shoot",
    "code": "sk_c2004_1",
    "type": 1
  },
  {
    "id": 415,
    "unitId": 140,
    "name": "Automatic Fire",
    "code": "sk_c2004_2",
    "type": 2
  },
  {
    "id": 416,
    "unitId": 140,
    "name": "Shock Arrow",
    "code": "sk_c2004_3",
    "type": 3
  },
  {
    "id": 384,
    "unitId": 141,
    "name": "Sniper",
    "code": "sk_c2020_1",
    "type": 1
  },
  {
    "id": 385,
    "unitId": 141,
    "name": "Quickfire",
    "code": "sk_c2020_2",
    "type": 2
  },
  {
    "id": 386,
    "unitId": 141,
    "name": "Finishing Shot",
    "code": "sk_c2020_3",
    "type": 3
  },
  {
    "id": 396,
    "unitId": 142,
    "name": "Ice Thorn",
    "code": "sk_c1010_1",
    "type": 1
  },
  {
    "id": 397,
    "unitId": 142,
    "name": "Ice Pick",
    "code": "sk_c1010_2",
    "type": 2
  },
  {
    "id": 398,
    "unitId": 142,
    "name": "Iceberg",
    "code": "sk_c1010_3",
    "type": 3
  },
  {
    "id": 411,
    "unitId": 143,
    "name": "Mana Release",
    "code": "sk_m0009_w",
    "type": 1
  },
  {
    "id": 412,
    "unitId": 143,
    "name": "Heroism",
    "code": "pa_m0019_w",
    "type": 2
  },
  {
    "id": 413,
    "unitId": 143,
    "name": "Mana Seal",
    "code": "sk_m0010_w",
    "type": 3
  },
  {
    "id": 402,
    "unitId": 144,
    "name": "X-Slash",
    "code": "sk_c5001_1",
    "type": 1
  },
  {
    "id": 403,
    "unitId": 144,
    "name": "Command Strike",
    "code": "sk_c5001_2",
    "type": 2
  },
  {
    "id": 404,
    "unitId": 144,
    "name": "Purifying Flame",
    "code": "sk_c5001_3",
    "type": 3
  },
  {
    "id": 417,
    "unitId": 145,
    "name": "Silent Fire",
    "code": "sk_m0024_d",
    "type": 1
  },
  {
    "id": 418,
    "unitId": 145,
    "name": "Maneuver Support",
    "code": "pa_m0019_d",
    "type": 2
  },
  {
    "id": 419,
    "unitId": 145,
    "name": "Firepower Cube",
    "code": "sk_m0025_d",
    "type": 3
  },
  {
    "id": 405,
    "unitId": 146,
    "name": "Gazelle Punch",
    "code": "sk_c3093_1",
    "type": 1
  },
  { "id": 406, "unitId": 146, "name": "Gash", "code": "sk_c3093_2", "type": 2 },
  { "id": 407, "unitId": 146, "name": "Ram", "code": "sk_c3093_3", "type": 3 },
  {
    "id": 399,
    "unitId": 147,
    "name": "Whispering Spirit",
    "code": "sk_c1018_1",
    "type": 1
  },
  {
    "id": 400,
    "unitId": 147,
    "name": "Guard",
    "code": "sk_c1018_2",
    "type": 2
  },
  {
    "id": 401,
    "unitId": 147,
    "name": "Spirit's Call",
    "code": "sk_c1018_3",
    "type": 3
  },
  { "id": 421, "unitId": 148, "name": "Fell", "code": "sk_m0015_i", "type": 1 },
  {
    "id": 422,
    "unitId": 148,
    "name": "Cold Edge",
    "code": "sk_m0016_i",
    "type": 2
  },
  {
    "id": 423,
    "unitId": 148,
    "name": "Crushing Blow",
    "code": "sk_m0020_i",
    "type": 3
  },
  {
    "id": 430,
    "unitId": 149,
    "name": "Weak Point",
    "code": "sk_c4065_1",
    "type": 1
  },
  {
    "id": 431,
    "unitId": 149,
    "name": "Steady Aim",
    "code": "sk_c4065_2",
    "type": 2
  },
  {
    "id": 432,
    "unitId": 149,
    "name": "One Shot, One Kill",
    "code": "sk_c4065_3",
    "type": 3
  },
  {
    "id": 37,
    "unitId": 15,
    "name": "Uppercut",
    "code": "sk_c1103_1",
    "type": 1
  },
  {
    "id": 38,
    "unitId": 15,
    "name": "Intuition",
    "code": "sk_c1103_2",
    "type": 2
  },
  {
    "id": 39,
    "unitId": 15,
    "name": "Thunderclap",
    "code": "sk_c1103_3",
    "type": 3
  },
  {
    "id": 436,
    "unitId": 150,
    "name": "Sleep Sorcery",
    "code": "sk_c4042_1",
    "type": 1
  },
  {
    "id": 437,
    "unitId": 150,
    "name": "Purification",
    "code": "sk_c4042_2",
    "type": 2
  },
  {
    "id": 438,
    "unitId": 150,
    "name": "Earnest Prayer",
    "code": "sk_c4042_3",
    "type": 3
  },
  {
    "id": 433,
    "unitId": 151,
    "name": "Shield Thrust",
    "code": "sk_m0011_l",
    "type": 1
  },
  {
    "id": 434,
    "unitId": 151,
    "name": "Escort",
    "code": "pa_m0026_l",
    "type": 2
  },
  {
    "id": 435,
    "unitId": 151,
    "name": "Defensive Position",
    "code": "sk_m0012_l",
    "type": 3
  },
  {
    "id": 424,
    "unitId": 152,
    "name": "Persistent Attack",
    "code": "sk_m0005_f",
    "type": 1
  },
  {
    "id": 425,
    "unitId": 152,
    "name": "Challenging Blow",
    "code": "sk_m0006_f",
    "type": 2
  },
  {
    "id": 426,
    "unitId": 152,
    "name": "Sweep",
    "code": "sk_m0017_f",
    "type": 3
  },
  {
    "id": 427,
    "unitId": 153,
    "name": "Protective Strike",
    "code": "sk_c3006_1",
    "type": 1
  },
  {
    "id": 428,
    "unitId": 153,
    "name": "Shield Blow",
    "code": "sk_c3006_2",
    "type": 2
  },
  {
    "id": 429,
    "unitId": 153,
    "name": "Will of Protection",
    "code": "sk_c3006_3",
    "type": 3
  },
  {
    "id": 448,
    "unitId": 154,
    "name": "Brawl",
    "code": "sk_c3095_1",
    "type": 1
  },
  {
    "id": 449,
    "unitId": 154,
    "name": "Justified Provoke",
    "code": "sk_c3095_2",
    "type": 2
  },
  {
    "id": 450,
    "unitId": 154,
    "name": "Certain Victory",
    "code": "sk_c3095_3",
    "type": 3
  },
  {
    "id": 451,
    "unitId": 155,
    "name": "Heavy Strike",
    "code": "sk_m0011_f",
    "type": 1
  },
  {
    "id": 452,
    "unitId": 155,
    "name": "Butcher Corps Gear",
    "code": "pa_m0026_f",
    "type": 2
  },
  { "id": 453, "unitId": 155, "name": "Hack", "code": "sk_m0012_f", "type": 3 },
  {
    "id": 442,
    "unitId": 156,
    "name": "Quick Pierce",
    "code": "sk_c4034_1",
    "type": 1
  },
  {
    "id": 443,
    "unitId": 156,
    "name": "Cheer",
    "code": "sk_c4034_2",
    "type": 2
  },
  {
    "id": 444,
    "unitId": 156,
    "name": "Supreme Spear",
    "code": "sk_c4034_3",
    "type": 3
  },
  {
    "id": 478,
    "unitId": 157,
    "name": "Vampirism",
    "code": "sk_m0009_f",
    "type": 1
  },
  {
    "id": 479,
    "unitId": 157,
    "name": "Vengeful Strike",
    "code": "sk_m0010_f",
    "type": 2
  },
  { "id": 480, "unitId": 157, "name": "Daze", "code": "sk_m0024_f", "type": 3 },
  {
    "id": 469,
    "unitId": 158,
    "name": "Swing",
    "code": "sk_c4051_1",
    "type": 1
  },
  {
    "id": 470,
    "unitId": 158,
    "name": "Flame Barrier",
    "code": "sk_c4051_2",
    "type": 2
  },
  {
    "id": 471,
    "unitId": 158,
    "name": "Blaze Explosion",
    "code": "sk_c4051_3",
    "type": 3
  },
  {
    "id": 439,
    "unitId": 159,
    "name": "Precision Fire",
    "code": "sk_m0007_l",
    "type": 1
  },
  {
    "id": 440,
    "unitId": 159,
    "name": "Volley",
    "code": "sk_m0037_l",
    "type": 2
  },
  {
    "id": 441,
    "unitId": 159,
    "name": "Defcon",
    "code": "sk_m0020_l",
    "type": 3
  },
  {
    "id": 10,
    "unitId": 16,
    "name": "Mystical Arrow",
    "code": "sk_c1081_1",
    "type": 1
  },
  {
    "id": 11,
    "unitId": 16,
    "name": "Luminous Explosion",
    "code": "sk_c1081_2",
    "type": 2
  },
  {
    "id": 12,
    "unitId": 16,
    "name": "Frost Storm",
    "code": "sk_c1081_3",
    "type": 3
  },
  {
    "id": 475,
    "unitId": 160,
    "name": "Heavy Strike",
    "code": "sk_c4001_1",
    "type": 1
  },
  {
    "id": 476,
    "unitId": 160,
    "name": "Butcher Corps Gear",
    "code": "sk_c4001_2",
    "type": 2
  },
  {
    "id": 477,
    "unitId": 160,
    "name": "Preach",
    "code": "sk_c4001_3",
    "type": 3
  },
  {
    "id": 445,
    "unitId": 161,
    "name": "Disconnect",
    "code": "sk_c4025_1",
    "type": 1
  },
  {
    "id": 446,
    "unitId": 161,
    "name": "Attack Chain",
    "code": "sk_c4025_2",
    "type": 2
  },
  {
    "id": 447,
    "unitId": 161,
    "name": "Vigorous Strike",
    "code": "sk_c4025_3",
    "type": 3
  },
  {
    "id": 454,
    "unitId": 162,
    "name": "Disconnect",
    "code": "sk_m0013_d",
    "type": 1
  },
  {
    "id": 455,
    "unitId": 162,
    "name": "Attack Chain",
    "code": "sk_m0014_d",
    "type": 2
  },
  {
    "id": 456,
    "unitId": 162,
    "name": "Plagued Strike",
    "code": "sk_m0017_d",
    "type": 3
  },
  {
    "id": 457,
    "unitId": 163,
    "name": "Sharp Blow",
    "code": "sk_c4035_1",
    "type": 1
  },
  {
    "id": 458,
    "unitId": 163,
    "name": "Spiritual Armament",
    "code": "sk_c4035_2",
    "type": 2
  },
  {
    "id": 459,
    "unitId": 163,
    "name": "Spiral Breakthrough",
    "code": "sk_c4035_3",
    "type": 3
  },
  {
    "id": 472,
    "unitId": 164,
    "name": "Chaos Strike",
    "code": "sk_c4073_1",
    "type": 1
  },
  {
    "id": 473,
    "unitId": 164,
    "name": "Hypnosis",
    "code": "sk_c4073_2",
    "type": 2
  },
  {
    "id": 474,
    "unitId": 164,
    "name": "Endless Nightmare",
    "code": "sk_c4073_3",
    "type": 3
  },
  {
    "id": 460,
    "unitId": 165,
    "name": "Mana Bullet",
    "code": "sk_m0009_l",
    "type": 1
  },
  {
    "id": 461,
    "unitId": 165,
    "name": "Celebration of Light",
    "code": "sk_m0027_l",
    "type": 2
  },
  {
    "id": 462,
    "unitId": 165,
    "name": "Light Curtain",
    "code": "sk_m0020_l",
    "type": 3
  },
  {
    "id": 463,
    "unitId": 166,
    "name": "Come Here",
    "code": "sk_c3094_1",
    "type": 1
  },
  {
    "id": 464,
    "unitId": 166,
    "name": "I Protect",
    "code": "sk_c3094_2",
    "type": 2
  },
  {
    "id": 465,
    "unitId": 166,
    "name": "I'm Tough",
    "code": "sk_c3094_3",
    "type": 3
  },
  {
    "id": 466,
    "unitId": 167,
    "name": "Heavy Strike",
    "code": "sk_m0003_l",
    "type": 1
  },
  {
    "id": 467,
    "unitId": 167,
    "name": "Meteor Shower",
    "code": "sk_m0024_l",
    "type": 2
  },
  {
    "id": 468,
    "unitId": 167,
    "name": "Light's Protection",
    "code": "sk_m0027_l",
    "type": 3
  },
  {
    "id": 481,
    "unitId": 168,
    "name": "Smash",
    "code": "sk_m0013_i",
    "type": 1
  },
  {
    "id": 482,
    "unitId": 168,
    "name": "Judgment",
    "code": "sk_m0014_i",
    "type": 2
  },
  {
    "id": 483,
    "unitId": 168,
    "name": "Prepare Judgment",
    "code": "sk_m0017_i",
    "type": 3
  },
  {
    "id": 511,
    "unitId": 169,
    "name": "Light Step",
    "code": "sk_c4003_1",
    "type": 1
  },
  {
    "id": 512,
    "unitId": 169,
    "name": "Magic Resist",
    "code": "sk_c4003_2",
    "type": 2
  },
  {
    "id": 513,
    "unitId": 169,
    "name": "Fluri, Attack!",
    "code": "sk_c4003_3",
    "type": 3
  },
  {
    "id": 58,
    "unitId": 17,
    "name": "Playing with Fire",
    "code": "sk_c1079_1",
    "type": 1
  },
  {
    "id": 59,
    "unitId": 17,
    "name": "Hot Streak!",
    "code": "sk_c1079_2",
    "type": 2
  },
  {
    "id": 60,
    "unitId": 17,
    "name": "All-In!",
    "code": "sk_c1079_3",
    "type": 3
  },
  {
    "id": 496,
    "unitId": 170,
    "name": "Quick Fire",
    "code": "sk_m0024_w",
    "type": 1
  },
  {
    "id": 497,
    "unitId": 170,
    "name": "Precise Attack",
    "code": "sk_m0025_w",
    "type": 2
  },
  {
    "id": 498,
    "unitId": 170,
    "name": "Focused Fire",
    "code": "sk_m0026_w",
    "type": 3
  },
  { "id": 484, "unitId": 171, "name": "Wail", "code": "sk_m0009_l", "type": 1 },
  {
    "id": 485,
    "unitId": 171,
    "name": "Ill Will",
    "code": "pa_m0019_l",
    "type": 2
  },
  {
    "id": 486,
    "unitId": 171,
    "name": "Soul Destruction",
    "code": "sk_m0010_l",
    "type": 3
  },
  {
    "id": 508,
    "unitId": 172,
    "name": "Gunshot",
    "code": "sk_m0024_f",
    "type": 1
  },
  {
    "id": 509,
    "unitId": 172,
    "name": "Rocket Launcher",
    "code": "sk_m0025_f",
    "type": 2
  },
  {
    "id": 510,
    "unitId": 172,
    "name": "Enhance Maneuverability",
    "code": "sk_m0027_f",
    "type": 3
  },
  {
    "id": 487,
    "unitId": 173,
    "name": "Spirited Blow",
    "code": "sk_m0013_l",
    "type": 1
  },
  {
    "id": 488,
    "unitId": 173,
    "name": "Veteran",
    "code": "pa_m0019_l",
    "type": 2
  },
  {
    "id": 489,
    "unitId": 173,
    "name": "Tenacious Strike",
    "code": "sk_m0014_l",
    "type": 3
  },
  {
    "id": 505,
    "unitId": 174,
    "name": "Knee Smash",
    "code": "sk_c3091_1",
    "type": 1
  },
  {
    "id": 506,
    "unitId": 174,
    "name": "Wind Pressure",
    "code": "sk_c3091_2",
    "type": 2
  },
  {
    "id": 507,
    "unitId": 174,
    "name": "Unbeatable Will",
    "code": "sk_c3091_3",
    "type": 3
  },
  {
    "id": 490,
    "unitId": 175,
    "name": "Book of Fire",
    "code": "sk_m0009_f",
    "type": 1
  },
  {
    "id": 491,
    "unitId": 175,
    "name": "Urgent Regen",
    "code": "sk_m0020_f",
    "type": 2
  },
  {
    "id": 492,
    "unitId": 175,
    "name": "Attack Command",
    "code": "sk_m0027_f",
    "type": 3
  },
  {
    "id": 502,
    "unitId": 176,
    "name": "Armor Rend",
    "code": "sk_m0013_w",
    "type": 1
  },
  {
    "id": 503,
    "unitId": 176,
    "name": "Attack Chain",
    "code": "sk_m0014_w",
    "type": 2
  },
  {
    "id": 504,
    "unitId": 176,
    "name": "Cry of Victory",
    "code": "sk_m0027_w",
    "type": 3
  },
  {
    "id": 493,
    "unitId": 177,
    "name": "Staff Strike",
    "code": "sk_m0003_d",
    "type": 1
  },
  {
    "id": 494,
    "unitId": 177,
    "name": "Dark Magic",
    "code": "pa_m0019_d",
    "type": 2
  },
  {
    "id": 495,
    "unitId": 177,
    "name": "Dark Explosion",
    "code": "sk_m0024_d",
    "type": 3
  },
  {
    "id": 514,
    "unitId": 178,
    "name": "Enhanced Fire",
    "code": "sk_m0024_i",
    "type": 1
  },
  {
    "id": 515,
    "unitId": 178,
    "name": "Combat Support",
    "code": "sk_m0027_i",
    "type": 2
  },
  {
    "id": 516,
    "unitId": 178,
    "name": "High-Density Explosive Cube",
    "code": "sk_m0025_i",
    "type": 3
  },
  {
    "id": 523,
    "unitId": 179,
    "name": "Staff Assault",
    "code": "sk_m0003_w",
    "type": 1
  },
  {
    "id": 524,
    "unitId": 179,
    "name": "Tailwind",
    "code": "pa_m0019_w",
    "type": 2
  },
  { "id": 525, "unitId": 179, "name": "Gale", "code": "sk_m0024_w", "type": 3 },
  { "id": 49, "unitId": 18, "name": "Slash", "code": "sk_c1027_1", "type": 1 },
  { "id": 50, "unitId": 18, "name": "Smash", "code": "sk_c1027_2", "type": 2 },
  {
    "id": 51,
    "unitId": 18,
    "name": "Faithful Strike",
    "code": "sk_c1027_3",
    "type": 3
  },
  {
    "id": 532,
    "unitId": 180,
    "name": "Cold Blow",
    "code": "sk_m0003_i",
    "type": 1
  },
  {
    "id": 533,
    "unitId": 180,
    "name": "Coerce",
    "code": "sk_m0020_i",
    "type": 2
  },
  {
    "id": 534,
    "unitId": 180,
    "name": "Cold Snap",
    "code": "sk_m0024_i",
    "type": 3
  },
  {
    "id": 517,
    "unitId": 181,
    "name": "Weakness Attack",
    "code": "sk_m0015_f",
    "type": 1
  },
  {
    "id": 518,
    "unitId": 181,
    "name": "Urgent Evasion",
    "code": "pa_m0019_f",
    "type": 2
  },
  {
    "id": 519,
    "unitId": 181,
    "name": "Mark of Acceleration",
    "code": "sk_m0016_f",
    "type": 3
  },
  {
    "id": 526,
    "unitId": 182,
    "name": "Auto-Fire",
    "code": "sk_m0008_l",
    "type": 1
  },
  {
    "id": 527,
    "unitId": 182,
    "name": "Defense Mode",
    "code": "pa_resist",
    "type": 2
  },
  {
    "id": 528,
    "unitId": 182,
    "name": "Cleaning Mode",
    "code": "sk_m0024_l",
    "type": 3
  },
  {
    "id": 529,
    "unitId": 183,
    "name": "Venomous Arrow",
    "code": "sk_m0007_w",
    "type": 1
  },
  {
    "id": 530,
    "unitId": 183,
    "name": "Corrosive Volley",
    "code": "sk_m0037_w",
    "type": 2
  },
  {
    "id": 531,
    "unitId": 183,
    "name": "Preparation",
    "code": "sk_m0008_w",
    "type": 3
  },
  {
    "id": 499,
    "unitId": 184,
    "name": "Light Step",
    "code": "sk_m0011_w",
    "type": 1
  },
  {
    "id": 500,
    "unitId": 184,
    "name": "Magic Resist",
    "code": "pa_m0019_w",
    "type": 2
  },
  {
    "id": 501,
    "unitId": 184,
    "name": "Fortitude",
    "code": "sk_m0012_w",
    "type": 3
  },
  {
    "id": 535,
    "unitId": 185,
    "name": "You're Soft",
    "code": "sk_c3092_1",
    "type": 1
  },
  {
    "id": 536,
    "unitId": 185,
    "name": "Power Strike",
    "code": "sk_c3092_2",
    "type": 2
  },
  {
    "id": 537,
    "unitId": 185,
    "name": "Exposed!",
    "code": "sk_c3092_3",
    "type": 3
  },
  {
    "id": 538,
    "unitId": 186,
    "name": "Sharp Blow",
    "code": "sk_m0005_d",
    "type": 1
  },
  {
    "id": 539,
    "unitId": 186,
    "name": "Spiritual Armament",
    "code": "pa_m0019_d",
    "type": 2
  },
  {
    "id": 540,
    "unitId": 186,
    "name": "Resolve",
    "code": "sk_m0006_d",
    "type": 3
  },
  {
    "id": 619,
    "unitId": 187,
    "name": "Paper Throw",
    "code": "sk_c3113_1",
    "type": 1
  },
  {
    "id": 620,
    "unitId": 187,
    "name": "Paper Whirlwind",
    "code": "sk_c3113_2",
    "type": 2
  },
  {
    "id": 621,
    "unitId": 187,
    "name": "Paper Barrier",
    "code": "sk_c3113_3",
    "type": 3
  },
  {
    "id": 520,
    "unitId": 188,
    "name": "Mana Bullet",
    "code": "sk_c4044_1",
    "type": 1
  },
  {
    "id": 521,
    "unitId": 188,
    "name": "Celebration of Light",
    "code": "sk_c4044_2",
    "type": 2
  },
  {
    "id": 522,
    "unitId": 188,
    "name": "Primal Light",
    "code": "sk_c4044_3",
    "type": 3
  },
  {
    "id": 583,
    "unitId": 189,
    "name": "Book of Fire",
    "code": "sk_c4041_1",
    "type": 1
  },
  {
    "id": 584,
    "unitId": 189,
    "name": "Urgent Regen",
    "code": "sk_c4041_2",
    "type": 2
  },
  {
    "id": 585,
    "unitId": 189,
    "name": "A Girl in Uniform",
    "code": "sk_c4041_3",
    "type": 3
  },
  {
    "id": 13,
    "unitId": 19,
    "name": "Dual Swords",
    "code": "sk_c1009_1",
    "type": 1
  },
  {
    "id": 14,
    "unitId": 19,
    "name": "Will of the Swamp",
    "code": "sk_c1009_2",
    "type": 2
  },
  { "id": 15, "unitId": 19, "name": "Vortex", "code": "sk_c1009_3", "type": 3 },
  {
    "id": 541,
    "unitId": 190,
    "name": "Armor Rend",
    "code": "sk_c4023_1",
    "type": 1
  },
  {
    "id": 542,
    "unitId": 190,
    "name": "Attack Chain",
    "code": "sk_c4023_2",
    "type": 2
  },
  {
    "id": 543,
    "unitId": 190,
    "name": "Cry of Victory",
    "code": "sk_c4023_3",
    "type": 3
  },
  {
    "id": 562,
    "unitId": 191,
    "name": "Double Edge",
    "code": "sk_m0015_l",
    "type": 1
  },
  {
    "id": 563,
    "unitId": 191,
    "name": "Brush Off",
    "code": "pa_m0019_l",
    "type": 2
  },
  { "id": 564, "unitId": 191, "name": "Raid", "code": "sk_m0016_l", "type": 3 },
  {
    "id": 544,
    "unitId": 192,
    "name": "Vampirism",
    "code": "sk_m0009_i",
    "type": 1
  },
  {
    "id": 545,
    "unitId": 192,
    "name": "Banshee's Curse",
    "code": "sk_m0010_i",
    "type": 2
  },
  {
    "id": 546,
    "unitId": 192,
    "name": "Life Drain",
    "code": "sk_m0024_i",
    "type": 3
  },
  {
    "id": 565,
    "unitId": 193,
    "name": "Sleep Sorcery",
    "code": "sk_m0009_i",
    "type": 1
  },
  {
    "id": 566,
    "unitId": 193,
    "name": "Purification",
    "code": "sk_m0027_i",
    "type": 2
  },
  {
    "id": 567,
    "unitId": 193,
    "name": "Watery Curtain",
    "code": "sk_m0020_i",
    "type": 3
  },
  {
    "id": 589,
    "unitId": 194,
    "name": "Ancient Spear Art",
    "code": "sk_m0005_w",
    "type": 1
  },
  { "id": 590, "unitId": 194, "name": "Wild", "code": "pa_m0026_w", "type": 2 },
  {
    "id": 591,
    "unitId": 194,
    "name": "Enlightened Blow",
    "code": "sk_m0006_w",
    "type": 3
  },
  {
    "id": 616,
    "unitId": 195,
    "name": "Quick Shot",
    "code": "sk_c4062_1",
    "type": 1
  },
  {
    "id": 617,
    "unitId": 195,
    "name": "Lullaby Arrow",
    "code": "sk_c4062_2",
    "type": 2
  },
  {
    "id": 618,
    "unitId": 195,
    "name": "Hopeful Hymn",
    "code": "sk_c4062_3",
    "type": 3
  },
  {
    "id": 559,
    "unitId": 196,
    "name": "Cover Fire",
    "code": "sk_m0007_f",
    "type": 1
  },
  {
    "id": 560,
    "unitId": 196,
    "name": "Shock Arrow",
    "code": "sk_m0036_f",
    "type": 2
  },
  {
    "id": 561,
    "unitId": 196,
    "name": "A Girl's Determination",
    "code": "sk_m0027_f",
    "type": 3
  },
  {
    "id": 547,
    "unitId": 197,
    "name": "Dark Arrow",
    "code": "sk_m0009_d",
    "type": 1
  },
  {
    "id": 548,
    "unitId": 197,
    "name": "Area Defense",
    "code": "pa_m0026_d",
    "type": 2
  },
  {
    "id": 549,
    "unitId": 197,
    "name": "Mana Release",
    "code": "sk_m0010_d",
    "type": 3
  },
  {
    "id": 556,
    "unitId": 198,
    "name": "Chaos Strike",
    "code": "sk_m0009_w",
    "type": 1
  },
  {
    "id": 557,
    "unitId": 198,
    "name": "Hypnosis",
    "code": "sk_m0027_w",
    "type": 2
  },
  {
    "id": 558,
    "unitId": 198,
    "name": "Nightmare",
    "code": "sk_m0010_w",
    "type": 3
  },
  {
    "id": 550,
    "unitId": 199,
    "name": "Weakening Blow",
    "code": "sk_m0011_d",
    "type": 1
  },
  { "id": 551, "unitId": 199, "name": "Will", "code": "pa_m0026_d", "type": 2 },
  {
    "id": 552,
    "unitId": 199,
    "name": "Guard",
    "code": "sk_m0012_d",
    "type": 3
  },
  {
    "id": 700,
    "unitId": 2,
    "name": "Icy Sword Storm",
    "code": "sk_c2042_1",
    "type": 1
  },
  {
    "id": 701,
    "unitId": 2,
    "name": "Battle Command",
    "code": "sk_c2042_2",
    "type": 2
  },
  { "id": 702, "unitId": 2, "name": "Flash", "code": "sk_c2042_3", "type": 3 },
  {
    "id": 43,
    "unitId": 20,
    "name": "Heavy Strike",
    "code": "sk_c1049_1",
    "type": 1
  },
  {
    "id": 44,
    "unitId": 20,
    "name": "Magic Bolt",
    "code": "sk_c1049_2",
    "type": 2
  },
  {
    "id": 45,
    "unitId": 20,
    "name": "Hyper Strike",
    "code": "sk_c1049_3",
    "type": 3
  },
  {
    "id": 598,
    "unitId": 200,
    "name": "X-Slash",
    "code": "sk_c1001_1",
    "type": 1
  },
  {
    "id": 599,
    "unitId": 200,
    "name": "Command Strike",
    "code": "sk_c1001_2",
    "type": 2
  },
  {
    "id": 600,
    "unitId": 200,
    "name": "Sword of the Heir",
    "code": "sk_c1001_3",
    "type": 3
  },
  {
    "id": 553,
    "unitId": 201,
    "name": "Insanity",
    "code": "sk_m0009_d",
    "type": 1
  },
  {
    "id": 554,
    "unitId": 201,
    "name": "Blood Feast",
    "code": "pa_m0026_d",
    "type": 2
  },
  {
    "id": 555,
    "unitId": 201,
    "name": "Dirge",
    "code": "sk_m0010_d",
    "type": 3
  },
  {
    "id": 568,
    "unitId": 202,
    "name": "Swing",
    "code": "sk_c4051_1",
    "type": 1
  },
  {
    "id": 569,
    "unitId": 202,
    "name": "Flame Barrier",
    "code": "sk_c4051_2",
    "type": 2
  },
  {
    "id": 570,
    "unitId": 202,
    "name": "Flame Spurt",
    "code": "sk_c4051_3",
    "type": 3
  },
  {
    "id": 586,
    "unitId": 203,
    "name": "Hemorrhage",
    "code": "sk_c4013_1",
    "type": 1
  },
  {
    "id": 587,
    "unitId": 203,
    "name": "Wind Slash",
    "code": "sk_c4013_2",
    "type": 2
  },
  {
    "id": 588,
    "unitId": 203,
    "name": "Moonlight Roar",
    "code": "sk_c4013_3",
    "type": 3
  },
  {
    "id": 595,
    "unitId": 204,
    "name": "Quick Pierce",
    "code": "sk_m0005_l",
    "type": 1
  },
  {
    "id": 596,
    "unitId": 204,
    "name": "Cheer",
    "code": "sk_m0020_l",
    "type": 2
  },
  {
    "id": 597,
    "unitId": 204,
    "name": "Flash Cut",
    "code": "sk_m0006_l",
    "type": 3
  },
  {
    "id": 592,
    "unitId": 205,
    "name": "Quick Shot",
    "code": "sk_m0007_i",
    "type": 1
  },
  {
    "id": 593,
    "unitId": 205,
    "name": "Lullaby Arrow",
    "code": "sk_m0036_i",
    "type": 2
  },
  {
    "id": 594,
    "unitId": 205,
    "name": "War Hymn",
    "code": "sk_m0023_i",
    "type": 3
  },
  {
    "id": 571,
    "unitId": 206,
    "name": "Hemorrhage",
    "code": "sk_m0015_w",
    "type": 1
  },
  {
    "id": 572,
    "unitId": 206,
    "name": "Wind Slash",
    "code": "sk_m0016_w",
    "type": 2
  },
  {
    "id": 573,
    "unitId": 206,
    "name": "Divine Response",
    "code": "sk_m0027_w",
    "type": 3
  },
  {
    "id": 577,
    "unitId": 207,
    "name": "Suppressing Fire",
    "code": "sk_m0024_l",
    "type": 1
  },
  {
    "id": 578,
    "unitId": 207,
    "name": "Recovery",
    "code": "sk_m0026_l",
    "type": 2
  },
  {
    "id": 579,
    "unitId": 207,
    "name": "Cube Aura",
    "code": "sk_m0027_l",
    "type": 3
  },
  {
    "id": 580,
    "unitId": 208,
    "name": "Wicked Strike",
    "code": "sk_m0015_d",
    "type": 1
  },
  {
    "id": 581,
    "unitId": 208,
    "name": "Potential",
    "code": "pa_m0019_d",
    "type": 2
  },
  {
    "id": 582,
    "unitId": 208,
    "name": "Capital Punishment",
    "code": "sk_m0016_d",
    "type": 3
  },
  {
    "id": 574,
    "unitId": 209,
    "name": "Spear Art",
    "code": "sk_m0005_i",
    "type": 1
  },
  {
    "id": 575,
    "unitId": 209,
    "name": "Discipline",
    "code": "pa_m0019_i",
    "type": 2
  },
  {
    "id": 576,
    "unitId": 209,
    "name": "Pierce",
    "code": "sk_m0006_i",
    "type": 3
  },
  { "id": 82, "unitId": 21, "name": "Chop", "code": "sk_c1101_1", "type": 1 },
  {
    "id": 83,
    "unitId": 21,
    "name": "Fwoooosh!",
    "code": "sk_c1101_2",
    "type": 2
  },
  {
    "id": 84,
    "unitId": 21,
    "name": "Help Me, Cream!",
    "code": "sk_c1101_3",
    "type": 3
  },
  {
    "id": 601,
    "unitId": 210,
    "name": "Sword of the Kingdom",
    "code": "sk_m0011_i",
    "type": 1
  },
  {
    "id": 602,
    "unitId": 210,
    "name": "Shield Deflect",
    "code": "pa_m0019_i",
    "type": 2
  },
  {
    "id": 603,
    "unitId": 210,
    "name": "Strike",
    "code": "sk_m0012_i",
    "type": 3
  },
  {
    "id": 607,
    "unitId": 211,
    "name": "Demon Cutter",
    "code": "sk_m0013_f",
    "type": 1
  },
  {
    "id": 608,
    "unitId": 211,
    "name": "Dance of Sands",
    "code": "pa_m0026_f",
    "type": 2
  },
  {
    "id": 609,
    "unitId": 211,
    "name": "Soul Break",
    "code": "sk_m0014_f",
    "type": 3
  },
  {
    "id": 604,
    "unitId": 212,
    "name": "Weak Point",
    "code": "sk_m0007_d",
    "type": 1
  },
  {
    "id": 605,
    "unitId": 212,
    "name": "Steady Aim",
    "code": "pa_m0008_d",
    "type": 2
  },
  {
    "id": 606,
    "unitId": 212,
    "name": "Fatal Shot",
    "code": "sk_m0036_d",
    "type": 3
  },
  {
    "id": 610,
    "unitId": 213,
    "name": "Vampirism",
    "code": "sk_c4071_1",
    "type": 1
  },
  {
    "id": 611,
    "unitId": 213,
    "name": "Vengeful Strike",
    "code": "sk_c4071_2",
    "type": 2
  },
  {
    "id": 612,
    "unitId": 213,
    "name": "Spiteful Annihilation",
    "code": "sk_c4071_3",
    "type": 3
  },
  {
    "id": 613,
    "unitId": 214,
    "name": "Flashing Blade",
    "code": "sk_c6000_1",
    "type": 1
  },
  {
    "id": 614,
    "unitId": 214,
    "name": "Tactical Maneuver",
    "code": "sk_c6000_2",
    "type": 2
  },
  {
    "id": 615,
    "unitId": 214,
    "name": "Swift Execution",
    "code": "sk_c6000_3",
    "type": 3
  },
  {
    "id": 628,
    "unitId": 215,
    "name": "Sword of Protection",
    "code": "sk_c6001_1",
    "type": 1
  },
  {
    "id": 629,
    "unitId": 215,
    "name": "Oath Shield",
    "code": "sk_c6001_2",
    "type": 2
  },
  {
    "id": 630,
    "unitId": 215,
    "name": "Hymn of Courage",
    "code": "sk_c6001_3",
    "type": 3
  },
  {
    "id": 631,
    "unitId": 216,
    "name": "Elimination",
    "code": "sk_c6002_1",
    "type": 1
  },
  {
    "id": 632,
    "unitId": 216,
    "name": "Closer",
    "code": "sk_c6002_2",
    "type": 2
  },
  {
    "id": 633,
    "unitId": 216,
    "name": "Descent",
    "code": "sk_c6002_3",
    "type": 3
  },
  { "id": 634, "unitId": 217, "name": "Huma", "code": "sk_c6003_1", "type": 1 },
  {
    "id": 635,
    "unitId": 217,
    "name": "Spirit's Blessing",
    "code": "sk_c6003_2",
    "type": 2
  },
  {
    "id": 636,
    "unitId": 217,
    "name": "Divine Protection of the Great Spirit",
    "code": "sk_c6003_3",
    "type": 3
  },
  {
    "id": 637,
    "unitId": 218,
    "name": "Blunt Strike",
    "code": "sk_c6004_1",
    "type": 1
  },
  {
    "id": 638,
    "unitId": 218,
    "name": "Wild Swing",
    "code": "sk_c6004_2",
    "type": 2
  },
  {
    "id": 639,
    "unitId": 218,
    "name": "Sword of Grace",
    "code": "sk_c6004_3",
    "type": 3
  },
  { "id": 640, "unitId": 219, "name": "Rush", "code": "sk_c6005_1", "type": 1 },
  {
    "id": 641,
    "unitId": 219,
    "name": "Punish",
    "code": "sk_c6005_2",
    "type": 2
  },
  {
    "id": 642,
    "unitId": 219,
    "name": "Repel",
    "code": "sk_c6005_3",
    "type": 3
  },
  {
    "id": 61,
    "unitId": 22,
    "name": "Shield Bash",
    "code": "sk_c2012_1",
    "type": 1
  },
  {
    "id": 62,
    "unitId": 22,
    "name": "Ruin's Advent",
    "code": "pa_c2012_2",
    "type": 2
  },
  {
    "id": 63,
    "unitId": 22,
    "name": "Devil's Descent",
    "code": "sk_c2012_3",
    "type": 3
  },
  {
    "id": 643,
    "unitId": 220,
    "name": "Jealous Strike",
    "code": "sk_c6006_1",
    "type": 1
  },
  {
    "id": 644,
    "unitId": 220,
    "name": "Malicus's Power",
    "code": "sk_c6006_2",
    "type": 2
  },
  {
    "id": 645,
    "unitId": 220,
    "name": "Flames of Destruction",
    "code": "sk_c6006_3",
    "type": 3
  },
  {
    "id": 646,
    "unitId": 221,
    "name": "Freeze!",
    "code": "sk_c6007_1",
    "type": 1
  },
  {
    "id": 647,
    "unitId": 221,
    "name": "Agility",
    "code": "sk_c6007_2",
    "type": 2
  },
  {
    "id": 648,
    "unitId": 221,
    "name": "I'll Blow You Up!",
    "code": "sk_c6007_3",
    "type": 3
  },
  {
    "id": 649,
    "unitId": 222,
    "name": "Merciless Sword",
    "code": "sk_c6008_1",
    "type": 1
  },
  {
    "id": 650,
    "unitId": 222,
    "name": "Preliminary Plans",
    "code": "sk_c6008_2",
    "type": 2
  },
  {
    "id": 651,
    "unitId": 222,
    "name": "Disarm",
    "code": "sk_c6008_3",
    "type": 3
  },
  {
    "id": 652,
    "unitId": 223,
    "name": "How Boring.",
    "code": "sk_c6009_1",
    "type": 1
  },
  {
    "id": 653,
    "unitId": 223,
    "name": "What Are You Looking At?",
    "code": "sk_c6009_2",
    "type": 2
  },
  {
    "id": 654,
    "unitId": 223,
    "name": "El Fura",
    "code": "sk_c6009_3",
    "type": 3
  },
  {
    "id": 655,
    "unitId": 224,
    "name": "Leave It To Me.",
    "code": "sk_c6010_1",
    "type": 1
  },
  {
    "id": 656,
    "unitId": 224,
    "name": "A Maid's Pride",
    "code": "sk_c6010_2",
    "type": 2
  },
  {
    "id": 657,
    "unitId": 224,
    "name": "I Will Punish You!",
    "code": "sk_c6010_3",
    "type": 3
  },
  {
    "id": 658,
    "unitId": 225,
    "name": "Powerful Strike",
    "code": "sk_c6011_1",
    "type": 1
  },
  {
    "id": 659,
    "unitId": 225,
    "name": "Destructive Gaze",
    "code": "sk_c6011_2",
    "type": 2
  },
  {
    "id": 660,
    "unitId": 225,
    "name": "Star Extinction",
    "code": "sk_c6011_3",
    "type": 3
  },
  { "id": 661, "unitId": 226, "name": "", "code": "sk_c6012_1", "type": 1 },
  { "id": 662, "unitId": 226, "name": "", "code": "sk_c6012_2", "type": 2 },
  { "id": 663, "unitId": 226, "name": "", "code": "sk_c6012_3", "type": 3 },
  {
    "id": 91,
    "unitId": 23,
    "name": "Desert Wind",
    "code": "sk_c2053_1",
    "type": 1
  },
  {
    "id": 92,
    "unitId": 23,
    "name": "Everlasting Oasis",
    "code": "sk_c2053_2",
    "type": 2
  },
  {
    "id": 93,
    "unitId": 23,
    "name": "Bastet Roar",
    "code": "sk_c2053_3",
    "type": 3
  },
  {
    "id": 704,
    "unitId": 24,
    "name": "Slice to Pieces",
    "code": "sk_c2095_1",
    "type": 1
  },
  {
    "id": 705,
    "unitId": 24,
    "name": "Emergency Stitching",
    "code": "sk_c2095_2",
    "type": 2
  },
  {
    "id": 706,
    "unitId": 24,
    "name": "Model Disqualification",
    "code": "sk_c2095_3",
    "type": 3
  },
  {
    "id": 64,
    "unitId": 25,
    "name": "Key to an Oath",
    "code": "sk_c2022_1",
    "type": 1
  },
  { "id": 65, "unitId": 25, "name": "Regen", "code": "sk_c2022_2", "type": 2 },
  {
    "id": 66,
    "unitId": 25,
    "name": "Destina's Grace",
    "code": "sk_c2022_3",
    "type": 3
  },
  {
    "id": 67,
    "unitId": 26,
    "name": "Light of Judgment",
    "code": "sk_c1076_1",
    "type": 1
  },
  {
    "id": 68,
    "unitId": 26,
    "name": "Blessings of the Goddess",
    "code": "sk_c1076_2",
    "type": 2
  },
  {
    "id": 69,
    "unitId": 26,
    "name": "Saint's Prayer",
    "code": "sk_c1076_3",
    "type": 3
  },
  {
    "id": 79,
    "unitId": 27,
    "name": "I Used This to Catch Fish",
    "code": "sk_c1094_1",
    "type": 1
  },
  {
    "id": 80,
    "unitId": 27,
    "name": "Gamma Ray",
    "code": "sk_c1094_2",
    "type": 2
  },
  {
    "id": 81,
    "unitId": 27,
    "name": "Emotional Gamma Ray",
    "code": "sk_c1094_3",
    "type": 3
  },
  {
    "id": 707,
    "unitId": 28,
    "name": "Icy Impact",
    "code": "sk_c1111_1",
    "type": 1
  },
  {
    "id": 708,
    "unitId": 28,
    "name": "Cold Snap",
    "code": "sk_c1111_2",
    "type": 2
  },
  {
    "id": 709,
    "unitId": 28,
    "name": "Absolute Zero",
    "code": "sk_c1111_3",
    "type": 3
  },
  {
    "id": 118,
    "unitId": 29,
    "name": "Starlight's Will",
    "code": "sk_c1091_1",
    "type": 1
  },
  {
    "id": 119,
    "unitId": 29,
    "name": "Guardian's Authority",
    "code": "sk_c1091_2",
    "type": 2
  },
  {
    "id": 120,
    "unitId": 29,
    "name": "Eternally Shining Comet",
    "code": "sk_c1091_3",
    "type": 3
  },
  {
    "id": 52,
    "unitId": 3,
    "name": "Spectral Axe",
    "code": "sk_c2019_1",
    "type": 1
  },
  {
    "id": 53,
    "unitId": 3,
    "name": "War God's Might",
    "code": "sk_c2019_2",
    "type": 2
  },
  {
    "id": 54,
    "unitId": 3,
    "name": "Deliverance: Soul Exchange",
    "code": "sk_c2019_3",
    "type": 3
  },
  {
    "id": 94,
    "unitId": 30,
    "name": "Barrage",
    "code": "sk_c1105_1",
    "type": 1
  },
  {
    "id": 95,
    "unitId": 30,
    "name": "Judge Better Half",
    "code": "sk_c1105_2",
    "type": 2
  },
  {
    "id": 96,
    "unitId": 30,
    "name": "Magnum Wedding",
    "code": "sk_c1105_3",
    "type": 3
  },
  {
    "id": 115,
    "unitId": 31,
    "name": "Vengeance",
    "code": "sk_c1108_1",
    "type": 1
  },
  {
    "id": 116,
    "unitId": 31,
    "name": "Sword of Hatred",
    "code": "sk_c1108_2",
    "type": 2
  },
  {
    "id": 117,
    "unitId": 31,
    "name": "Heir to the Throne",
    "code": "sk_c1108_3",
    "type": 3
  },
  {
    "id": 97,
    "unitId": 32,
    "name": "One Pair",
    "code": "sk_c5050_1",
    "type": 1
  },
  {
    "id": 98,
    "unitId": 32,
    "name": "Wild Card",
    "code": "sk_c5050_2",
    "type": 2
  },
  {
    "id": 99,
    "unitId": 32,
    "name": "Tea Party",
    "code": "sk_c5050_3",
    "type": 3
  },
  { "id": 73, "unitId": 33, "name": "Thorn", "code": "sk_c2046_1", "type": 1 },
  {
    "id": 74,
    "unitId": 33,
    "name": "Larkspur",
    "code": "sk_c2046_2",
    "type": 2
  },
  {
    "id": 75,
    "unitId": 33,
    "name": "Hysteria",
    "code": "sk_c2046_3",
    "type": 3
  },
  {
    "id": 70,
    "unitId": 34,
    "name": "Mistake",
    "code": "sk_c2002_1",
    "type": 1
  },
  {
    "id": 71,
    "unitId": 34,
    "name": "Strong Instinct",
    "code": "sk_c2002_2",
    "type": 2
  },
  {
    "id": 72,
    "unitId": 34,
    "name": "Spear of Resentment",
    "code": "sk_c2002_3",
    "type": 3
  },
  {
    "id": 109,
    "unitId": 35,
    "name": "Communication Breakdown",
    "code": "sk_c1110_1",
    "type": 1
  },
  {
    "id": 110,
    "unitId": 35,
    "name": "Data Monopoly",
    "code": "sk_c1110_2",
    "type": 2
  },
  {
    "id": 111,
    "unitId": 35,
    "name": "Advantageous Deal",
    "code": "sk_c1110_3",
    "type": 3
  },
  {
    "id": 76,
    "unitId": 36,
    "name": "Envoy's Scythe",
    "code": "sk_c1039_1",
    "type": 1
  },
  {
    "id": 77,
    "unitId": 36,
    "name": "Blood Rend",
    "code": "sk_c1039_2",
    "type": 2
  },
  {
    "id": 78,
    "unitId": 36,
    "name": "Vampiric Seal",
    "code": "sk_c1039_3",
    "type": 3
  },
  {
    "id": 100,
    "unitId": 37,
    "name": "Just One Bite! ♡",
    "code": "sk_c5016_1",
    "type": 1
  },
  {
    "id": 101,
    "unitId": 37,
    "name": "Let's Eat Together!",
    "code": "sk_c5016_2",
    "type": 2
  },
  {
    "id": 102,
    "unitId": 37,
    "name": "Yufine's ☆ Special",
    "code": "sk_c5016_3",
    "type": 3
  },
  {
    "id": 112,
    "unitId": 38,
    "name": "Refined Flower",
    "code": "sk_c1024_1",
    "type": 1
  },
  {
    "id": 113,
    "unitId": 38,
    "name": "Oathkeeper",
    "code": "sk_c1024_2",
    "type": 2
  },
  {
    "id": 114,
    "unitId": 38,
    "name": "Full Bloom",
    "code": "sk_c1024_3",
    "type": 3
  },
  { "id": 106, "unitId": 39, "name": "Sever", "code": "sk_c1006_1", "type": 1 },
  {
    "id": 107,
    "unitId": 39,
    "name": "End of Evil",
    "code": "sk_c1006_2",
    "type": 2
  },
  {
    "id": 108,
    "unitId": 39,
    "name": "Wave of Light",
    "code": "sk_c1006_3",
    "type": 3
  },
  { "id": 4, "unitId": 4, "name": "Ignite", "code": "sk_c1048_1", "type": 1 },
  { "id": 5, "unitId": 4, "name": "Catalyst", "code": "sk_c1048_2", "type": 2 },
  {
    "id": 6,
    "unitId": 4,
    "name": "Fire Pillar",
    "code": "sk_c1048_3",
    "type": 3
  },
  {
    "id": 88,
    "unitId": 40,
    "name": "Spatial Relocation",
    "code": "sk_c1073_1",
    "type": 1
  },
  {
    "id": 89,
    "unitId": 40,
    "name": "Dimensional Corridor",
    "code": "sk_c1073_2",
    "type": 2
  },
  {
    "id": 90,
    "unitId": 40,
    "name": "Dimensional Explosion",
    "code": "sk_c1073_3",
    "type": 3
  },
  {
    "id": 103,
    "unitId": 41,
    "name": "Void Slash",
    "code": "sk_c1023_1",
    "type": 1
  },
  {
    "id": 104,
    "unitId": 41,
    "name": "Immortal Will",
    "code": "sk_c1023_2",
    "type": 2
  },
  {
    "id": 105,
    "unitId": 41,
    "name": "Apocalypse",
    "code": "sk_c1023_3",
    "type": 3
  },
  {
    "id": 85,
    "unitId": 42,
    "name": "Knockout",
    "code": "sk_c1047_1",
    "type": 1
  },
  {
    "id": 86,
    "unitId": 42,
    "name": "Celestial Kick",
    "code": "sk_c1047_2",
    "type": 2
  },
  {
    "id": 87,
    "unitId": 42,
    "name": "Phoenix Flurry",
    "code": "sk_c1047_3",
    "type": 3
  },
  {
    "id": 127,
    "unitId": 43,
    "name": "Full Moon Scythe",
    "code": "sk_c2006_1",
    "type": 1
  },
  {
    "id": 128,
    "unitId": 43,
    "name": "Dark Scar",
    "code": "sk_c2006_2",
    "type": 2
  },
  {
    "id": 129,
    "unitId": 43,
    "name": "Nocturne",
    "code": "sk_c2006_3",
    "type": 3
  },
  {
    "id": 124,
    "unitId": 44,
    "name": "Swordstorm",
    "code": "sk_c1070_1",
    "type": 1
  },
  {
    "id": 125,
    "unitId": 44,
    "name": "Charge",
    "code": "sk_c1070_2",
    "type": 2
  },
  {
    "id": 126,
    "unitId": 44,
    "name": "Summon Ziegfried",
    "code": "sk_c1070_3",
    "type": 3
  },
  { "id": 130, "unitId": 45, "name": "Fire", "code": "sk_c1109_1", "type": 1 },
  {
    "id": 131,
    "unitId": 45,
    "name": "The Chief Is on the Scene",
    "code": "sk_c1109_2",
    "type": 2
  },
  {
    "id": 132,
    "unitId": 45,
    "name": "Full Burst",
    "code": "sk_c1109_3",
    "type": 3
  },
  {
    "id": 121,
    "unitId": 46,
    "name": "Punishment",
    "code": "sk_c2070_1",
    "type": 1
  },
  {
    "id": 122,
    "unitId": 46,
    "name": "Code Number 00",
    "code": "sk_c2070_2",
    "type": 2
  },
  {
    "id": 123,
    "unitId": 46,
    "name": "Mobile Weapon Ziegfried",
    "code": "sk_c2070_3",
    "type": 3
  },
  {
    "id": 133,
    "unitId": 47,
    "name": "Wild Rose",
    "code": "sk_c1046_1",
    "type": 1
  },
  {
    "id": 134,
    "unitId": 47,
    "name": "Thornbush",
    "code": "sk_c1046_2",
    "type": 2
  },
  {
    "id": 135,
    "unitId": 47,
    "name": "Public Execution",
    "code": "sk_c1046_3",
    "type": 3
  },
  {
    "id": 139,
    "unitId": 48,
    "name": "Follow Me! Charge!",
    "code": "sk_c1089_1",
    "type": 1
  },
  {
    "id": 140,
    "unitId": 48,
    "name": "Defensive Formation!",
    "code": "sk_c1089_2",
    "type": 2
  },
  {
    "id": 141,
    "unitId": 48,
    "name": "Ready, Load, Fire!",
    "code": "sk_c1089_3",
    "type": 3
  },
  {
    "id": 136,
    "unitId": 49,
    "name": "Slice-Slice",
    "code": "sk_c1095_1",
    "type": 1
  },
  {
    "id": 137,
    "unitId": 49,
    "name": "Snip-Snip",
    "code": "sk_c1095_2",
    "type": 2
  },
  {
    "id": 138,
    "unitId": 49,
    "name": "Soul Cutter",
    "code": "sk_c1095_3",
    "type": 3
  },
  { "id": 46, "unitId": 5, "name": "Sweep", "code": "sk_c2007_1", "type": 1 },
  {
    "id": 47,
    "unitId": 5,
    "name": "Dark Contract",
    "code": "pa_c2007_2",
    "type": 2
  },
  {
    "id": 48,
    "unitId": 5,
    "name": "Dark Blade",
    "code": "sk_c2007_3",
    "type": 3
  },
  {
    "id": 178,
    "unitId": 50,
    "name": "Judgment",
    "code": "sk_c2009_1",
    "type": 1
  },
  {
    "id": 179,
    "unitId": 50,
    "name": "A Queen's Dignity",
    "code": "sk_c2009_2",
    "type": 2
  },
  {
    "id": 180,
    "unitId": 50,
    "name": "The Will of La Mare",
    "code": "sk_c2009_3",
    "type": 3
  },
  {
    "id": 160,
    "unitId": 51,
    "name": "Starlight",
    "code": "sk_c1069_1",
    "type": 1
  },
  {
    "id": 161,
    "unitId": 51,
    "name": "Moonlight Blow",
    "code": "sk_c1069_2",
    "type": 2
  },
  {
    "id": 162,
    "unitId": 51,
    "name": "Call of the Full Moon",
    "code": "sk_c1069_3",
    "type": 3
  },
  {
    "id": 148,
    "unitId": 52,
    "name": "Wild Wave",
    "code": "sk_c1082_1",
    "type": 1
  },
  {
    "id": 149,
    "unitId": 52,
    "name": "Rekos's Blessing",
    "code": "sk_c1082_2",
    "type": 2
  },
  {
    "id": 150,
    "unitId": 52,
    "name": "Wave of Vengeance",
    "code": "sk_c1082_3",
    "type": 3
  },
  {
    "id": 163,
    "unitId": 53,
    "name": "Infinity Slash",
    "code": "sk_c1066_1",
    "type": 1
  },
  {
    "id": 164,
    "unitId": 53,
    "name": "Dragon Knight's Will",
    "code": "sk_c1066_2",
    "type": 2
  },
  {
    "id": 165,
    "unitId": 53,
    "name": "Ragnar Spear",
    "code": "sk_c1066_3",
    "type": 3
  },
  {
    "id": 151,
    "unitId": 54,
    "name": "Heavy Strike",
    "code": "sk_c2049_1",
    "type": 1
  },
  {
    "id": 152,
    "unitId": 54,
    "name": "Maid's Cheer",
    "code": "sk_c2049_2",
    "type": 2
  },
  {
    "id": 153,
    "unitId": 54,
    "name": "VIP Treatment",
    "code": "sk_c2049_3",
    "type": 3
  },
  {
    "id": 154,
    "unitId": 55,
    "name": "Knockout",
    "code": "sk_c2047_1",
    "type": 1
  },
  {
    "id": 155,
    "unitId": 55,
    "name": "Dragon Flame",
    "code": "pa_c2047_2",
    "type": 2
  },
  {
    "id": 156,
    "unitId": 55,
    "name": "The Coming of Asura",
    "code": "sk_c2047_3",
    "type": 3
  },
  {
    "id": 710,
    "unitId": 56,
    "name": "Retribution",
    "code": "sk_c2073_1",
    "type": 1
  },
  {
    "id": 711,
    "unitId": 56,
    "name": "Balance of Power",
    "code": "sk_c2073_2",
    "type": 2
  },
  {
    "id": 712,
    "unitId": 56,
    "name": "Nature Restoration",
    "code": "sk_c2073_3",
    "type": 3
  },
  { "id": 169, "unitId": 57, "name": "Might", "code": "sk_c1096_1", "type": 1 },
  {
    "id": 170,
    "unitId": 57,
    "name": "Manifestation",
    "code": "sk_c1096_2",
    "type": 2
  },
  {
    "id": 171,
    "unitId": 57,
    "name": "Blood Bloom",
    "code": "sk_c1096_3",
    "type": 3
  },
  {
    "id": 172,
    "unitId": 58,
    "name": "Extermination",
    "code": "sk_c1104_1",
    "type": 1
  },
  {
    "id": 173,
    "unitId": 58,
    "name": "Absolute Dignity",
    "code": "sk_c1104_2",
    "type": 2
  },
  {
    "id": 174,
    "unitId": 58,
    "name": "Advent: Mortelix",
    "code": "sk_c1104_3",
    "type": 3
  },
  { "id": 166, "unitId": 59, "name": "Lash", "code": "sk_c1044_1", "type": 1 },
  {
    "id": 167,
    "unitId": 59,
    "name": "Punishment",
    "code": "sk_c1044_2",
    "type": 2
  },
  {
    "id": 168,
    "unitId": 59,
    "name": "Grand Finale",
    "code": "sk_c1044_3",
    "type": 3
  },
  {
    "id": 7,
    "unitId": 6,
    "name": "Touch of Chaos",
    "code": "sk_m9194_1",
    "type": 1
  },
  {
    "id": 8,
    "unitId": 6,
    "name": "Twisted Power",
    "code": "pa_m9194_2",
    "type": 2
  },
  {
    "id": 9,
    "unitId": 6,
    "name": "Dissolution",
    "code": "sk_m9194_3",
    "type": 3
  },
  {
    "id": 145,
    "unitId": 60,
    "name": "Incision",
    "code": "sk_c2072_1",
    "type": 1
  },
  {
    "id": 146,
    "unitId": 60,
    "name": "Annihilation",
    "code": "sk_c2072_2",
    "type": 2
  },
  {
    "id": 147,
    "unitId": 60,
    "name": "Obliterate",
    "code": "sk_c2072_3",
    "type": 3
  },
  {
    "id": 157,
    "unitId": 61,
    "name": "Hurricane Sword",
    "code": "sk_c1080_1",
    "type": 1
  },
  {
    "id": 158,
    "unitId": 61,
    "name": "Storm Bullet",
    "code": "sk_c1080_2",
    "type": 2
  },
  {
    "id": 159,
    "unitId": 61,
    "name": "Destructive Pursuit",
    "code": "sk_c1080_3",
    "type": 3
  },
  {
    "id": 713,
    "unitId": 62,
    "name": "Call of the Stars",
    "code": "sk_c1112_1",
    "type": 1
  },
  {
    "id": 714,
    "unitId": 62,
    "name": "Astral Guide",
    "code": "sk_c1112_2",
    "type": 2
  },
  {
    "id": 715,
    "unitId": 62,
    "name": "Starfall",
    "code": "sk_c1112_3",
    "type": 3
  },
  {
    "id": 175,
    "unitId": 63,
    "name": "Slaughter",
    "code": "sk_c1019_1",
    "type": 1
  },
  {
    "id": 176,
    "unitId": 63,
    "name": "Demon's Blood",
    "code": "pa_c1019_2",
    "type": 2
  },
  {
    "id": 177,
    "unitId": 63,
    "name": "Devil Drive",
    "code": "sk_c1019_3",
    "type": 3
  },
  {
    "id": 142,
    "unitId": 64,
    "name": "Extreme Remedies",
    "code": "sk_c1090_1",
    "type": 1
  },
  {
    "id": 143,
    "unitId": 64,
    "name": "Light of Rebirth",
    "code": "sk_c1090_2",
    "type": 2
  },
  {
    "id": 144,
    "unitId": 64,
    "name": "Invigorate",
    "code": "sk_c1090_3",
    "type": 3
  },
  {
    "id": 196,
    "unitId": 65,
    "name": "Sword Flash",
    "code": "sk_c2074_1",
    "type": 1
  },
  {
    "id": 197,
    "unitId": 65,
    "name": "Concentration",
    "code": "sk_c2074_2",
    "type": 2
  },
  {
    "id": 198,
    "unitId": 65,
    "name": "Massacre",
    "code": "sk_c2074_3",
    "type": 3
  },
  {
    "id": 184,
    "unitId": 66,
    "name": "Soul Purification",
    "code": "sk_c1102_1",
    "type": 1
  },
  {
    "id": 185,
    "unitId": 66,
    "name": "Vigilant Eye",
    "code": "sk_c1102_2",
    "type": 2
  },
  {
    "id": 186,
    "unitId": 66,
    "name": "Noble Rekos",
    "code": "sk_c1102_3",
    "type": 3
  },
  {
    "id": 201,
    "unitId": 67,
    "name": "Key to an Oath",
    "code": "sk_c1022_1",
    "type": 1
  },
  {
    "id": 202,
    "unitId": 67,
    "name": "Light Pillar",
    "code": "sk_c1022_2",
    "type": 2
  },
  {
    "id": 203,
    "unitId": 67,
    "name": "Light Ascending",
    "code": "sk_c1022_3",
    "type": 3
  },
  {
    "id": 181,
    "unitId": 68,
    "name": "Evil Spirit's Call",
    "code": "sk_c2015_1",
    "type": 1
  },
  {
    "id": 182,
    "unitId": 68,
    "name": "Cloud of Ruin",
    "code": "sk_c2015_2",
    "type": 2
  },
  {
    "id": 183,
    "unitId": 68,
    "name": "Eye of Death",
    "code": "sk_c2015_3",
    "type": 3
  },
  {
    "id": 190,
    "unitId": 69,
    "name": "Watch Out",
    "code": "sk_c5071_1",
    "type": 1
  },
  {
    "id": 191,
    "unitId": 69,
    "name": "I'm with My Friends",
    "code": "sk_c5071_2",
    "type": 2
  },
  {
    "id": 192,
    "unitId": 69,
    "name": "Haven't I Warned You?",
    "code": "sk_c5071_3",
    "type": 3
  },
  {
    "id": 16,
    "unitId": 7,
    "name": "Ghost Haunt",
    "code": "sk_c1015_1",
    "type": 1
  },
  {
    "id": 17,
    "unitId": 7,
    "name": "Dark Cloud",
    "code": "sk_c1015_2",
    "type": 2
  },
  {
    "id": 18,
    "unitId": 7,
    "name": "Last Requiem",
    "code": "sk_c1015_3",
    "type": 3
  },
  {
    "id": 1,
    "unitId": 70,
    "name": "Spear of Vengeance",
    "code": "sk_c1106_1",
    "type": 1
  },
  {
    "id": 2,
    "unitId": 70,
    "name": "Indomitable Spirit",
    "code": "pa_c1106_2",
    "type": 2
  },
  {
    "id": 3,
    "unitId": 70,
    "name": "Dragon Slayer's Strike",
    "code": "sk_c1106_3",
    "type": 3
  },
  {
    "id": 193,
    "unitId": 71,
    "name": "Dark Shadow",
    "code": "sk_c1038_1",
    "type": 1
  },
  {
    "id": 194,
    "unitId": 71,
    "name": "Encroach",
    "code": "pa_c1038_2",
    "type": 2
  },
  {
    "id": 195,
    "unitId": 71,
    "name": "Conviction",
    "code": "sk_c1038_3",
    "type": 3
  },
  { "id": 213, "unitId": 72, "name": "Sever", "code": "sk_c1072_1", "type": 1 },
  { "id": 214, "unitId": 72, "name": "Smash", "code": "sk_c1072_2", "type": 2 },
  {
    "id": 215,
    "unitId": 72,
    "name": "Guillotine",
    "code": "sk_c1072_3",
    "type": 3
  },
  {
    "id": 187,
    "unitId": 73,
    "name": "Flame Friction",
    "code": "sk_c2048_1",
    "type": 1
  },
  {
    "id": 188,
    "unitId": 73,
    "name": "Flame Release",
    "code": "pa_c2048_2",
    "type": 2
  },
  {
    "id": 189,
    "unitId": 73,
    "name": "Meteor Fall",
    "code": "sk_c2048_3",
    "type": 3
  },
  {
    "id": 199,
    "unitId": 74,
    "name": "Gunflame",
    "code": "sk_c1092_1",
    "type": 1
  },
  {
    "id": 200,
    "unitId": 74,
    "name": "Tyrant Rave ver. Beta",
    "code": "sk_c1092_3",
    "type": 3
  },
  {
    "id": 625,
    "unitId": 75,
    "name": "Pew, Pew, Pew!",
    "code": "sk_c2111_1",
    "type": 1
  },
  {
    "id": 626,
    "unitId": 75,
    "name": "I Wanna Go Home...",
    "code": "sk_c2111_2",
    "type": 2
  },
  {
    "id": 627,
    "unitId": 75,
    "name": "Boom! Starlight Fall!",
    "code": "sk_c2111_3",
    "type": 3
  },
  {
    "id": 210,
    "unitId": 76,
    "name": "Dreamy Iron Mace",
    "code": "sk_c2038_1",
    "type": 1
  },
  {
    "id": 211,
    "unitId": 76,
    "name": "Evil Claws",
    "code": "sk_c2038_2",
    "type": 2
  },
  {
    "id": 212,
    "unitId": 76,
    "name": "Light Storm",
    "code": "sk_c2038_3",
    "type": 3
  },
  {
    "id": 216,
    "unitId": 77,
    "name": "Poison Blast",
    "code": "sk_c2050_1",
    "type": 1
  },
  {
    "id": 217,
    "unitId": 77,
    "name": "Nightmare Illusion",
    "code": "pa_c2050_2",
    "type": 2
  },
  {
    "id": 218,
    "unitId": 77,
    "name": "Endless Nightmare",
    "code": "sk_c2050_3",
    "type": 3
  },
  {
    "id": 231,
    "unitId": 78,
    "name": "Serene Tune",
    "code": "sk_c1067_1",
    "type": 1
  },
  {
    "id": 232,
    "unitId": 78,
    "name": "Song of the Forest",
    "code": "sk_c1067_2",
    "type": 2
  },
  {
    "id": 233,
    "unitId": 78,
    "name": "Shining Star☆",
    "code": "sk_c1067_3",
    "type": 3
  },
  {
    "id": 219,
    "unitId": 79,
    "name": "Dark Explosion",
    "code": "sk_c1050_1",
    "type": 1
  },
  {
    "id": 220,
    "unitId": 79,
    "name": "Ominous Thunder",
    "code": "sk_c1050_2",
    "type": 2
  },
  {
    "id": 221,
    "unitId": 79,
    "name": "Nightmare",
    "code": "sk_c1050_3",
    "type": 3
  },
  {
    "id": 55,
    "unitId": 8,
    "name": "Tatami Gaeshi",
    "code": "sk_c1093_1",
    "type": 1
  },
  {
    "id": 56,
    "unitId": 8,
    "name": "Tsurane Sanzu-watashi",
    "code": "sk_c1093_2",
    "type": 2
  },
  {
    "id": 57,
    "unitId": 8,
    "name": "Garyo Tensei",
    "code": "sk_c1093_3",
    "type": 3
  },
  {
    "id": 225,
    "unitId": 80,
    "name": "Energy Blast",
    "code": "sk_c2082_1",
    "type": 1
  },
  {
    "id": 226,
    "unitId": 80,
    "name": "Victory Pose",
    "code": "sk_c2082_2",
    "type": 2
  },
  {
    "id": 227,
    "unitId": 80,
    "name": "Demolish",
    "code": "sk_c2082_3",
    "type": 3
  },
  {
    "id": 222,
    "unitId": 81,
    "name": "Sword Storm",
    "code": "sk_c1042_1",
    "type": 1
  },
  {
    "id": 223,
    "unitId": 81,
    "name": "Commanding Shout",
    "code": "sk_c1042_2",
    "type": 2
  },
  {
    "id": 224,
    "unitId": 81,
    "name": "All-Out Attack",
    "code": "sk_c1042_3",
    "type": 3
  },
  { "id": 228, "unitId": 82, "name": "Sweep", "code": "sk_c1007_1", "type": 1 },
  {
    "id": 229,
    "unitId": 82,
    "name": "Dancing Blade",
    "code": "pa_c1007_2",
    "type": 2
  },
  {
    "id": 230,
    "unitId": 82,
    "name": "Blade Ascent",
    "code": "sk_c1007_3",
    "type": 3
  },
  {
    "id": 237,
    "unitId": 83,
    "name": "Graceful Cut",
    "code": "sk_c1074_1",
    "type": 1
  },
  {
    "id": 238,
    "unitId": 83,
    "name": "Duel Accepted",
    "code": "sk_c1074_2",
    "type": 2
  },
  {
    "id": 239,
    "unitId": 83,
    "name": "Butterfly Cut",
    "code": "sk_c1074_3",
    "type": 3
  },
  {
    "id": 204,
    "unitId": 84,
    "name": "Vitality Drain",
    "code": "sk_c1088_1",
    "type": 1
  },
  {
    "id": 205,
    "unitId": 84,
    "name": "Thunder God's Cry",
    "code": "sk_c1088_2",
    "type": 2
  },
  {
    "id": 206,
    "unitId": 84,
    "name": "Mana Amplification",
    "code": "sk_c1088_3",
    "type": 3
  },
  {
    "id": 234,
    "unitId": 85,
    "name": "Double Slash",
    "code": "sk_c1016_1",
    "type": 1
  },
  {
    "id": 235,
    "unitId": 85,
    "name": "Dragon's Roar",
    "code": "sk_c1016_2",
    "type": 2
  },
  {
    "id": 236,
    "unitId": 85,
    "name": "Dragon Charge",
    "code": "sk_c1016_3",
    "type": 3
  },
  {
    "id": 207,
    "unitId": 86,
    "name": "Homing Laser",
    "code": "sk_c1030_1",
    "type": 1
  },
  {
    "id": 208,
    "unitId": 86,
    "name": "Upgrade",
    "code": "sk_c1030_2",
    "type": 2
  },
  {
    "id": 209,
    "unitId": 86,
    "name": "Meteor Cannon",
    "code": "sk_c1030_3",
    "type": 3
  },
  {
    "id": 244,
    "unitId": 87,
    "name": "Black Thorn",
    "code": "sk_c1083_1",
    "type": 1
  },
  {
    "id": 245,
    "unitId": 87,
    "name": "Star's Armor",
    "code": "sk_c1083_2",
    "type": 2
  },
  {
    "id": 246,
    "unitId": 87,
    "name": "Ancient Beast",
    "code": "sk_c1083_3",
    "type": 3
  },
  {
    "id": 241,
    "unitId": 88,
    "name": "Magic Design",
    "code": "sk_c1017_1",
    "type": 1
  },
  {
    "id": 242,
    "unitId": 88,
    "name": "Rapid Cure",
    "code": "sk_c1017_2",
    "type": 2
  },
  {
    "id": 243,
    "unitId": 88,
    "name": "Curing Prayer",
    "code": "sk_c1017_3",
    "type": 3
  },
  {
    "id": 253,
    "unitId": 89,
    "name": "Holy Strike",
    "code": "sk_c1062_1",
    "type": 1
  },
  {
    "id": 254,
    "unitId": 89,
    "name": "Origin of Life",
    "code": "sk_c1062_2",
    "type": 2
  },
  {
    "id": 255,
    "unitId": 89,
    "name": "Guide of the Goddess",
    "code": "sk_c1062_3",
    "type": 3
  },
  {
    "id": 40,
    "unitId": 9,
    "name": "Sand Wind",
    "code": "sk_c1053_1",
    "type": 1
  },
  {
    "id": 41,
    "unitId": 9,
    "name": "Hurricane",
    "code": "sk_c1053_2",
    "type": 2
  },
  {
    "id": 42,
    "unitId": 9,
    "name": "Sandstorm",
    "code": "sk_c1053_3",
    "type": 3
  },
  {
    "id": 250,
    "unitId": 90,
    "name": "Takedown",
    "code": "sk_c1008_1",
    "type": 1
  },
  {
    "id": 251,
    "unitId": 90,
    "name": "Flash of Light",
    "code": "sk_c1008_2",
    "type": 2
  },
  {
    "id": 252,
    "unitId": 90,
    "name": "Shield Wall",
    "code": "sk_c1008_3",
    "type": 3
  },
  { "id": 247, "unitId": 91, "name": "Shred", "code": "sk_c2013_1", "type": 1 },
  {
    "id": 248,
    "unitId": 91,
    "name": "Battle Frenzy",
    "code": "pa_c2013_2",
    "type": 2
  },
  {
    "id": 249,
    "unitId": 91,
    "name": "Sudden Assault",
    "code": "sk_c2013_3",
    "type": 3
  },
  { "id": 298, "unitId": 92, "name": "Slice", "code": "sk_c2014_1", "type": 1 },
  {
    "id": 299,
    "unitId": 92,
    "name": "Swift Action",
    "code": "sk_c2014_2",
    "type": 2
  },
  {
    "id": 300,
    "unitId": 92,
    "name": "Execution",
    "code": "sk_c2014_3",
    "type": 3
  },
  {
    "id": 274,
    "unitId": 93,
    "name": "Ambush",
    "code": "sk_c2033_1",
    "type": 1
  },
  {
    "id": 275,
    "unitId": 93,
    "name": "Cloak and Dagger",
    "code": "pa_c2033_2",
    "type": 2
  },
  {
    "id": 276,
    "unitId": 93,
    "name": "Murder",
    "code": "sk_c2033_3",
    "type": 3
  },
  {
    "id": 277,
    "unitId": 94,
    "name": "Black Magic",
    "code": "sk_c2031_1",
    "type": 1
  },
  {
    "id": 278,
    "unitId": 94,
    "name": "Mana Injection",
    "code": "sk_c2031_2",
    "type": 2
  },
  {
    "id": 279,
    "unitId": 94,
    "name": "Desolation",
    "code": "sk_c2031_3",
    "type": 3
  },
  {
    "id": 286,
    "unitId": 95,
    "name": "Mana Arrow",
    "code": "sk_c2043_1",
    "type": 1
  },
  {
    "id": 287,
    "unitId": 95,
    "name": "High Mage's Might",
    "code": "sk_c2043_2",
    "type": 2
  },
  {
    "id": 288,
    "unitId": 95,
    "name": "Mana Fundamentals",
    "code": "sk_c2043_3",
    "type": 3
  },
  {
    "id": 265,
    "unitId": 96,
    "name": "Retribution",
    "code": "sk_c2021_1",
    "type": 1
  },
  {
    "id": 266,
    "unitId": 96,
    "name": "Divine Punishment",
    "code": "sk_c2021_2",
    "type": 2
  },
  {
    "id": 267,
    "unitId": 96,
    "name": "Sacred Power",
    "code": "sk_c2021_3",
    "type": 3
  },
  {
    "id": 262,
    "unitId": 97,
    "name": "Sequential Cutter",
    "code": "sk_c2011_1",
    "type": 1
  },
  {
    "id": 263,
    "unitId": 97,
    "name": "Cursed Sword",
    "code": "pa_c2011_2",
    "type": 2
  },
  {
    "id": 264,
    "unitId": 97,
    "name": "Blade Art: Dragon",
    "code": "sk_c2011_3",
    "type": 3
  },
  { "id": 268, "unitId": 98, "name": "Shred", "code": "sk_c1013_1", "type": 1 },
  {
    "id": 269,
    "unitId": 98,
    "name": "Danger Zone",
    "code": "pa_c1013_2",
    "type": 2
  },
  {
    "id": 270,
    "unitId": 98,
    "name": "Predatory Roar",
    "code": "sk_c1013_3",
    "type": 3
  },
  {
    "id": 256,
    "unitId": 99,
    "name": "Divine Bolt",
    "code": "sk_c2005_1",
    "type": 1
  },
  {
    "id": 257,
    "unitId": 99,
    "name": "Dimensional Rupture",
    "code": "sk_c2005_2",
    "type": 2
  },
  { "id": 258, "unitId": 99, "name": "Finale", "code": "sk_c2005_3", "type": 3 }
]

module.exports = skillList;