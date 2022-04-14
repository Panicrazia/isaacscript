/* cspell:disable */

/** Maps card names to card sub-types. */
export const CARD_MAP: ReadonlyMap<string, Card> = new Map([
  ["fool", 1],
  ["magician", 2],
  ["mag", 2], // Needed since we have "mag?"
  ["highpriestess", 3],
  ["priestess", 3],
  ["priest", 3], // Needed since we have "priest?"
  ["hp", 3],
  ["empress", 4],
  ["emperor", 5],
  ["emp", 5], // Needed since we have "hemp?"
  ["hierophant", 6],
  ["hi", 6], // Needed since we have "hiero?"
  ["lovers", 7],
  ["chariot", 8],
  ["justice", 9],
  ["hermit", 10],
  ["wheeloffortune", 11],
  ["wheel", 11], // Needed since we have "wheel?"
  ["fortune", 11],
  ["strength", 12],
  ["str", 12], // Needed since we have "str?"
  ["hangedman", 13],
  ["hanged", 13],
  ["death", 14],
  ["temperance", 15],
  ["devil", 16],
  ["tower", 17],
  ["stars", 18],
  ["moon", 19],
  ["sun", 20],
  ["judgement", 21],
  ["judge", 21], // Needed since we have "judge?"
  ["world", 22],
  ["2ofclubs", 23],
  ["2clubs", 23],
  ["2ofdiamonds", 24],
  ["2diamonds", 24],
  ["2ofspades", 25],
  ["2spades", 25],
  ["2ofhearts", 26],
  ["2hearts", 26],
  ["aceofclubs", 27],
  ["aceclubs", 27],
  ["aceofdiamonds", 28],
  ["acediamonds", 28],
  ["aceofspades", 29],
  ["acespades", 29],
  ["aceofhearts", 30],
  ["acehearts", 30],
  ["joker", 31],
  ["hagalaz", 32],
  ["destruction", 32],
  ["jera", 33],
  ["abundance", 33],
  ["ehwaz", 34],
  ["passage", 34],
  ["dagaz", 35],
  ["purity", 35],
  ["ansuz", 36],
  ["vision", 36],
  ["perthro", 37],
  ["change", 37],
  ["berkano", 38],
  ["companionship", 38],
  ["algiz", 39],
  ["resistance", 39],
  ["shield", 39],
  ["blank", 40],
  ["black", 41],
  ["chaos", 42],
  ["credit", 43],
  ["rules", 44],
  ["againsthumanity", 45],
  ["humanity", 45],
  ["suicideking", 46],
  ["suicide", 46],
  ["getoutofjailfree", 47],
  ["jail", 47],
  ["?", 48],
  ["diceshard", 49],
  ["shard", 49],
  ["emergencycontact", 50],
  ["contact", 50],
  ["holy", 51],
  ["hugegrowth", 52],
  ["growth", 52],
  ["ancientrecall", 53],
  ["recall", 53],
  ["erawalk", 54],
  ["walk", 54],
  ["runeshard", 55],
  ["shard", 55],
  ["fool?", 56],
  ["magician?", 57],
  ["magi?", 57],
  ["mag?", 57],
  ["highpriestess?", 58],
  ["high?", 58],
  ["hi?", 58],
  ["priestess?", 58],
  ["priest?", 58],
  ["hp?", 58],
  ["empress?", 59],
  ["emperor?", 60],
  ["emp?", 60],
  ["hierophant?", 61],
  ["hiero?", 61],
  ["lovers?", 62],
  ["chariot?", 63],
  ["justice?", 64],
  ["hermit?", 65],
  ["wheeloffortune?", 66],
  ["wheel?", 66],
  ["fortune?", 66],
  ["strength?", 67],
  ["str?", 67],
  ["hangedman?", 68],
  ["hanged?", 68],
  ["death?", 69],
  ["temperance?", 70],
  ["devil?", 71],
  ["tower?", 72],
  ["stars?", 73],
  ["moon?", 74],
  ["sun?", 75],
  ["judgement?", 76],
  ["judge?", 76],
  ["world?", 77],
  ["crackedkey", 78],
  ["key", 78],
  ["queenofhearts", 79],
  ["queenhearts", 79],
  ["wildcard", 80],
  ["soulofisaac", 81],
  ["soulisaac", 81],
  ["isaac", 81],
  ["soulofmagdalene", 82],
  ["soulmagdalene", 82],
  ["magdalene", 82],
  ["soulofcain", 83],
  ["soulcain", 83],
  ["cain", 83],
  ["soulofjudas", 84],
  ["souljudas", 84],
  ["judas", 84],
  ["soulof???", 85],
  ["soul???", 85],
  ["???", 85],
  ["soulofbluebaby", 85],
  ["soulbluebaby", 85],
  ["bluebaby", 85],
  ["soulofeve", 86],
  ["souleve", 86],
  ["eve", 86],
  ["soulofsamson", 87],
  ["soulsamson", 87],
  ["samson", 87],
  ["soulofazazel", 88],
  ["soulazazel", 88],
  ["azazel", 88],
  ["souloflazarus", 89],
  ["soullazarus", 89],
  ["lazarus", 89],
  ["soulofeden", 90],
  ["souleden", 90],
  ["eden", 90],
  ["soulofthelost", 91],
  ["soulthelost", 91],
  ["thelost", 91],
  ["souloflost", 91],
  ["soullost", 91],
  ["lost", 91],
  ["souloflilith", 92],
  ["soullilith", 92],
  ["lilith", 92],
  ["soulofthekeeper", 93],
  ["soulthekeeper", 93],
  ["thekeeper", 93],
  ["soulofkeeper", 93],
  ["soulkeeper", 93],
  ["keeper", 93],
  ["soulofapollyon", 94],
  ["soulapollyon", 94],
  ["apollyon", 94],
  ["souloftheforgotten", 95],
  ["soultheforgotten", 95],
  ["theforgotten", 95],
  ["soulofforgotten", 95],
  ["soulforgotten", 95],
  ["forgotten", 95],
  ["soulofbethany", 96],
  ["soulbethany", 96],
  ["bethany", 96],
  ["soulofjacobandesau", 97],
  ["souljacobandesau", 97],
  ["jacobandesau", 97],
  ["soulofjacob&esau", 97],
  ["souljacob&esau", 97],
  ["jacob&esau", 97],
  ["soulofjacob", 97],
  ["souljacob", 97],
  ["jacob", 97],
]);
