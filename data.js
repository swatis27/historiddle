// data.js — the personality data, and nothing else.
// Each entry describes one historical figure the player might be asked to
// guess. Adding a new person here should never require changing game.js.

const PERSONALITIES = [
  {
    name: "Albert Einstein",
    acceptedAnswers: ["albert einstein", "einstein"],
    birthYear: 1879,
    birthCity: "Ulm",
    birthCountry: "Germany",
    birthLat: 48.4011,
    birthLon: 9.9876,
    deathYear: 1955,
    deathCity: "Princeton",
    deathCountry: "United States",
    deathLat: 40.3573,
    deathLon: -74.6672,
    hints: [
      "I refused to wear socks, even to the most formal occasions, and found more comfort in playing the violin than in most conversations.",
      "A newly founded country in the Middle East once offered me its presidency. I turned it down — I'd rather keep rewriting how the universe measures space and time."
    ]
  },
  {
    name: "Ludwig van Beethoven",
    acceptedAnswers: ["ludwig van beethoven", "beethoven"],
    birthYear: 1770,
    birthCity: "Bonn",
    birthCountry: "Germany",
    birthLat: 50.7374,
    birthLon: 7.0982,
    deathYear: 1827,
    deathCity: "Vienna",
    deathCountry: "Austria",
    deathLat: 48.2082,
    deathLon: 16.3738,
    hints: [
      "I changed apartments in the same city more than sixty times, because I could never stand the noise, the neighbors, or my own furniture for long.",
      "By the time my most famous symphony premiered, I couldn't hear a single note of it — someone had to turn me around so I'd see the audience applauding."
    ]
  },
  {
    name: "Alexander the Great",
    acceptedAnswers: ["alexander the great", "alexander iii of macedon", "alexander"],
    birthYear: -356,
    birthCity: "Pella",
    birthCountry: "Macedon",
    birthLat: 40.7595,
    birthLon: 22.5255,
    deathYear: -323,
    deathCity: "Babylon",
    deathCountry: "Mesopotamia",
    deathLat: 32.5364,
    deathLon: 44.4208,
    hints: [
      "Legend has it that as a boy, I tamed a wild horse everyone else had given up on, just by noticing it was startled by its own shadow and turning it to face the sun instead.",
      "I founded so many cities named after myself across three continents that historians still argue over exactly how many there were — some say more than twenty."
    ]
  },
  {
    name: "Marie Curie",
    acceptedAnswers: ["marie curie", "marie sklodowska-curie", "curie"],
    birthYear: 1867,
    birthCity: "Warsaw",
    birthCountry: "Poland",
    birthLat: 52.2297,
    birthLon: 21.0122,
    deathYear: 1934,
    deathCity: "Passy",
    deathCountry: "France",
    deathLat: 45.9214,
    deathLon: 6.6989,
    hints: [
      "My old research notebooks are still radioactive today. Anyone who wants to read them has to sign a waiver and wear protective gear — over a century later.",
      "I'm the only person ever to win Nobel Prizes in two different sciences, and I coined the very word we now use for the phenomenon I discovered."
    ]
  },
  {
    name: "Christopher Columbus",
    acceptedAnswers: ["christopher columbus", "columbus"],
    birthYear: 1451,
    birthCity: "Genoa",
    birthCountry: "Italy",
    birthLat: 44.4056,
    birthLon: 8.9463,
    deathYear: 1506,
    deathCity: "Valladolid",
    deathCountry: "Spain",
    deathLat: 41.6523,
    deathLon: -4.7245,
    hints: [
      "I was arrested by my own patrons and shipped back across the ocean in chains after mismanaging the colony they'd put me in charge of.",
      "I crossed the Atlantic four times looking for a westward route to Asia, and died still convinced I'd found it — never once setting foot on the mainland of the continent that ended up named after somebody else."
    ]
  },
  {
    name: "Ferdinand Magellan",
    acceptedAnswers: ["ferdinand magellan", "magellan"],
    birthYear: 1480,
    birthCity: "Sabrosa",
    birthCountry: "Portugal",
    birthLat: 41.2758,
    birthLon: -7.5583,
    deathYear: 1521,
    deathCity: "Mactan",
    deathCountry: "Philippines",
    deathLat: 10.3103,
    deathLon: 123.9494,
    hints: [
      "I never made it home from the voyage I'm best remembered for — I died partway through, in a beach battle against a local chieftain who refused to bow to a foreign king.",
      "Only one of the five ships I set out with finished the first voyage around the world, and I wasn't on it. History gave me the credit anyway."
    ]
  },
  {
    name: "Napoleon Bonaparte",
    acceptedAnswers: ["napoleon bonaparte", "napoleon", "napoleon i"],
    birthYear: 1769,
    birthCity: "Ajaccio",
    birthCountry: "France",
    birthLat: 41.9192,
    birthLon: 8.7386,
    deathYear: 1821,
    deathCity: "Longwood",
    deathCountry: "Saint Helena",
    deathLat: -15.9506,
    deathLon: -5.6702,
    hints: [
      "When it came time for the Pope to crown me Emperor, I grabbed the crown right out of his hands and placed it on my own head — why let anyone else take the credit?",
      "In 1803, I sold roughly 828,000 square miles of North America to Thomas Jefferson for pennies an acre, because I needed quick cash for a war back home in Europe."
    ]
  },
  {
    name: "Catherine the Great",
    acceptedAnswers: ["catherine the great", "catherine ii", "catherine ii of russia"],
    birthYear: 1729,
    birthCity: "Stettin",
    birthCountry: "Poland",
    birthLat: 53.4285,
    birthLon: 14.5528,
    deathYear: 1796,
    deathCity: "Saint Petersburg",
    deathCountry: "Russia",
    deathLat: 59.9343,
    deathLon: 30.3351,
    hints: [
      "I was born a minor German princess under a completely different name, and I overthrew my own husband to take the throne of the empire I'd go on to rule for over three decades.",
      "I spent years trading letters with the great philosophers of the French Enlightenment, all while pushing my adopted empire's borders further than almost any ruler before me."
    ]
  },
  {
    name: "Hannibal Barca",
    acceptedAnswers: ["hannibal barca", "hannibal"],
    birthYear: -247,
    birthCity: "Carthage",
    birthCountry: "Carthage",
    birthLat: 36.8065,
    birthLon: 10.1815,
    deathYear: -183,
    deathCity: "Libyssa",
    deathCountry: "Bithynia",
    deathLat: 40.8020,
    deathLon: 29.4310,
    hints: [
      "I carried a hidden vial of poison for years, just in case my enemies ever finally cornered me — and eventually, they did.",
      "I marched war elephants across the Alps to invade Italy from the north, catching everyone completely off guard — though most of the elephants didn't survive the crossing."
    ]
  },
  {
    name: "Freddie Mercury",
    acceptedAnswers: ["freddie mercury", "farrokh bulsara"],
    birthYear: 1946,
    birthCity: "Stone Town",
    birthCountry: "Zanzibar",
    birthLat: -6.1659,
    birthLon: 39.1917,
    deathYear: 1991,
    deathCity: "London",
    deathCountry: "England",
    deathLat: 51.5074,
    deathLon: -0.1278,
    hints: [
      "When touring the world, I used to call home and have my housemates hold the phone up to my cats so we could talk.",
      "I had four extra teeth at the back of my mouth that pushed my front teeth forward. I refused to get them fixed — I was terrified it would ruin my four-octave vocal range."
    ]
  },
  {
    name: "Nikola Tesla",
    acceptedAnswers: ["nikola tesla", "tesla"],
    birthYear: 1856,
    birthCity: "Smiljan",
    birthCountry: "Croatia",
    birthLat: 44.5975,
    birthLon: 15.3247,
    deathYear: 1943,
    deathCity: "New York City",
    deathCountry: "United States",
    deathLat: 40.7128,
    deathLon: -74.0060,
    hints: [
      "I was utterly devoted to one particular pigeon in New York City, and said I loved her the way most men love a woman.",
      "I helped win the war between two competing electrical currents in the 1890s, but I died broke and alone in a hotel room, decades after being called the man who lit up the modern world."
    ]
  },
  {
    name: "Leon Trotsky",
    acceptedAnswers: ["leon trotsky", "trotsky", "lev trotsky"],
    birthYear: 1879,
    birthCity: "Yanovka",
    birthCountry: "Ukraine",
    birthLat: 48.15,
    birthLon: 32.05,
    deathYear: 1940,
    deathCity: "Mexico City",
    deathCountry: "Mexico",
    deathLat: 19.3467,
    deathLon: -99.1618,
    hints: [
      "I spent the last years of my life in exile, guarded day and night, convinced my old rival back home wanted me dead — I was right.",
      "I was killed in Mexico City by an assassin posing as a friend, who buried an ice axe in my skull. A rival I'd out-argued for years finally had the last word."
    ]
  },
  {
    name: "Paul Gauguin",
    acceptedAnswers: ["paul gauguin", "gauguin"],
    birthYear: 1848,
    birthCity: "Paris",
    birthCountry: "France",
    birthLat: 48.8566,
    birthLon: 2.3522,
    deathYear: 1903,
    deathCity: "Atuona",
    deathCountry: "French Polynesia",
    deathLat: -9.8064,
    deathLon: -139.0331,
    hints: [
      "I abandoned a comfortable career trading stocks in the city to chase paint and canvas, leaving my wife and children behind in the process.",
      "I sailed away from Europe entirely, settling on a remote Pacific island where I painted the vivid, unspoiled scenes I'm now most famous for — and died there, poor and largely unrecognized."
    ]
  },
  {
    name: "Robert Louis Stevenson",
    acceptedAnswers: ["robert louis stevenson", "stevenson"],
    birthYear: 1850,
    birthCity: "Edinburgh",
    birthCountry: "Scotland",
    birthLat: 55.9533,
    birthLon: -3.1883,
    deathYear: 1894,
    deathCity: "Vailima",
    deathCountry: "Samoa",
    deathLat: -13.8506,
    deathLon: -171.7514,
    hints: [
      "Chronic lung trouble chased me out of my damp home country and across the globe in search of a climate that wouldn't kill me.",
      "I settled on a Pacific island where the locals gave me a nickname meaning 'teller of tales,' and I died suddenly there, mid-way through opening a bottle of wine."
    ]
  },
  {
    name: "George Orwell",
    acceptedAnswers: ["george orwell", "orwell", "eric arthur blair", "eric blair"],
    birthYear: 1903,
    birthCity: "Motihari",
    birthCountry: "India",
    birthLat: 26.6499,
    birthLon: 84.9199,
    deathYear: 1950,
    deathCity: "London",
    deathCountry: "England",
    deathLat: 51.5074,
    deathLon: -0.1278,
    hints: [
      "Before I ever published a word under this name, I spent five years as a colonial police officer in Southeast Asia, and hated nearly every part of the job.",
      "I was shot through the throat by a sniper while fighting fascists in a Spanish civil war, survived, and years later died of the tuberculosis that had dogged me most of my life — shortly after finishing the book I'm now best known for."
    ]
  },
  {
    name: "Vasco da Gama",
    acceptedAnswers: ["vasco da gama", "vasco de gama", "da gama"],
    birthYear: 1460,
    birthCity: "Sines",
    birthCountry: "Portugal",
    birthLat: 37.9558,
    birthLon: -8.8647,
    deathYear: 1524,
    deathCity: "Kochi",
    deathCountry: "India",
    deathLat: 9.9312,
    deathLon: 76.2673,
    hints: [
      "On my third and final trip east, I was sent not just to trade, but to govern — a viceroy for a king who lived thousands of miles away.",
      "I was the first European to sail a sea route all the way around Africa to reach India, opening a spice trade so lucrative it reshaped the wealth of my home country — and I died of illness on Indian soil during my third voyage there."
    ]
  },
  {
    name: "Leonardo da Vinci",
    acceptedAnswers: ["leonardo da vinci", "da vinci", "leonardo"],
    birthYear: 1452,
    birthCity: "Vinci",
    birthCountry: "Italy",
    birthLat: 43.7833,
    birthLon: 10.9333,
    deathYear: 1519,
    deathCity: "Amboise",
    deathCountry: "France",
    deathLat: 47.4137,
    deathLon: 0.9838,
    hints: [
      "I wrote most of my private notes backwards, in mirror script, readable only by holding a looking glass up to the page.",
      "In my final years, a French king invited me to live in a chateau near his own, and legend has it he was holding my hand when I died — a long way from the Italian hills I was born in."
    ]
  },
  {
    name: "Marie Antoinette",
    acceptedAnswers: ["marie antoinette"],
    birthYear: 1755,
    birthCity: "Vienna",
    birthCountry: "Austria",
    birthLat: 48.2082,
    birthLon: 16.3738,
    deathYear: 1793,
    deathCity: "Paris",
    deathCountry: "France",
    deathLat: 48.8566,
    deathLon: 2.3522,
    hints: [
      "I was sent from my homeland at just fourteen to marry a foreign prince I'd never met, sealing an alliance between two rival empires.",
      "My extravagant spending earned me a nickname meaning 'deficit,' and years later, an angry crowd watched the blade fall on my neck in a public square."
    ]
  },
  {
    name: "Toussaint Louverture",
    acceptedAnswers: ["toussaint louverture", "toussaint l'ouverture", "toussaint"],
    birthYear: 1743,
    birthCity: "Cap-Haitien",
    birthCountry: "Haiti",
    birthLat: 19.7592,
    birthLon: -72.2014,
    deathYear: 1803,
    deathCity: "Fort de Joux",
    deathCountry: "France",
    deathLat: 46.8167,
    deathLon: 6.3333,
    hints: [
      "I was born enslaved and taught myself to read using books borrowed from my godfather. Decades later, I was leading an army.",
      "I led the only slave revolt in history to result in a nation's independence, but I never lived to see the nation I helped free — I was tricked into a truce, arrested, and shipped off to die in a freezing French mountain prison."
    ]
  },
  {
    name: "Empress Elisabeth of Austria",
    acceptedAnswers: ["empress elisabeth of austria", "elisabeth of austria", "sisi", "sissi"],
    birthYear: 1837,
    birthCity: "Munich",
    birthCountry: "Germany",
    birthLat: 48.1351,
    birthLon: 11.5820,
    deathYear: 1898,
    deathCity: "Geneva",
    deathCountry: "Switzerland",
    deathLat: 46.2044,
    deathLon: 6.1432,
    hints: [
      "I spent up to three hours a day just having my ankle-length hair brushed and styled, and I fasted and exercised obsessively to maintain an eighteen-inch waist well into my forties.",
      "An anarchist stabbed me with a homemade blade while I was boarding a boat in Switzerland. I didn't even realize I'd been wounded at first — I kept walking until I collapsed."
    ]
  },
  {
    name: "Josephine Baker",
    acceptedAnswers: ["josephine baker"],
    birthYear: 1906,
    birthCity: "St. Louis",
    birthCountry: "United States",
    birthLat: 38.6270,
    birthLon: -90.1994,
    deathYear: 1975,
    deathCity: "Paris",
    deathCountry: "France",
    deathLat: 48.8566,
    deathLon: 2.3522,
    hints: [
      "I adopted twelve children from all over the world and raised them together at my chateau in France, calling them my 'Rainbow Tribe.'",
      "I smuggled secrets for the French Resistance hidden in my sheet music during the war, and decades earlier had scandalized Paris by dancing on stage in a costume made of bananas."
    ]
  },
  {
    name: "James Joyce",
    acceptedAnswers: ["james joyce", "joyce"],
    birthYear: 1882,
    birthCity: "Dublin",
    birthCountry: "Ireland",
    birthLat: 53.3498,
    birthLon: -6.2603,
    deathYear: 1941,
    deathCity: "Zurich",
    deathCountry: "Switzerland",
    deathLat: 47.3769,
    deathLon: 8.5417,
    hints: [
      "I left my homeland in my early twenties and never really lived there again, moving between three countries for the rest of my life while writing almost exclusively about the city I'd left behind.",
      "I went nearly blind from a series of eye operations while writing one of the most famously difficult novels in the English language — one that unfolds entirely across a single day."
    ]
  },
  {
    name: "Rudyard Kipling",
    acceptedAnswers: ["rudyard kipling", "kipling"],
    birthYear: 1865,
    birthCity: "Bombay",
    birthCountry: "India",
    birthLat: 18.9750,
    birthLon: 72.8258,
    deathYear: 1936,
    deathCity: "London",
    deathCountry: "England",
    deathLat: 51.5074,
    deathLon: -0.1278,
    hints: [
      "My son went missing in a WWI battle and his body was never found in my lifetime. I spent years afterward searching for word of missing soldiers, hoping for news that never came.",
      "I was the youngest person ever to win the Nobel Prize in Literature, thanks largely to stories and poems steeped in the British colonial India I grew up in."
    ]
  },
  {
    name: "Sigmund Freud",
    acceptedAnswers: ["sigmund freud", "freud"],
    birthYear: 1856,
    birthCity: "Freiberg",
    birthCountry: "Czech Republic",
    birthLat: 49.6389,
    birthLon: 18.1447,
    deathYear: 1939,
    deathCity: "London",
    deathCountry: "England",
    deathLat: 51.5074,
    deathLon: -0.1278,
    hints: [
      "Early in my career, I enthusiastically promoted a certain white powder as a wonder drug for treating fatigue and depression — including using it myself.",
      "I fled the Nazis in my final year of life, and asked my doctor to end my suffering from jaw cancer with a lethal dose of morphine once my work analyzing the human mind was done."
    ]
  },
  {
    name: "Bruce Lee",
    acceptedAnswers: ["bruce lee"],
    birthYear: 1940,
    birthCity: "San Francisco",
    birthCountry: "United States",
    birthLat: 37.7749,
    birthLon: -122.4194,
    deathYear: 1973,
    deathCity: "Hong Kong",
    deathCountry: "Hong Kong",
    deathLat: 22.3193,
    deathLon: 114.1694,
    hints: [
      "As a teenager in Hong Kong, I was a champion cha-cha dancer, winning a citywide competition years before anyone knew me for anything else.",
      "I collapsed and died at just thirty-two from brain swelling, likely triggered by a reaction to a headache medication — cutting short a career that had just started reshaping martial arts on screen worldwide."
    ]
  },
  {
    name: "Captain James Cook",
    acceptedAnswers: ["captain james cook", "james cook", "captain cook"],
    birthYear: 1728,
    birthCity: "Marton",
    birthCountry: "England",
    birthLat: 54.5200,
    birthLon: -1.2200,
    deathYear: 1779,
    deathCity: "Kealakekua Bay",
    deathCountry: "Hawaii",
    deathLat: 19.4794,
    deathLon: -155.9186,
    hints: [
      "After I died, the islanders who killed me treated my remains the way they honored their own great chiefs — a custom that horrified my crew when parts of me were eventually returned to the ship.",
      "I mapped enormous stretches of the Pacific that Europeans had never charted before, from New Zealand to the eastern coast of Australia, before dying in a violent clash on a Hawaiian beach over a stolen rowboat."
    ]
  },
  {
    name: "Thomas Paine",
    acceptedAnswers: ["thomas paine", "paine"],
    birthYear: 1737,
    birthCity: "Thetford",
    birthCountry: "England",
    birthLat: 52.4136,
    birthLon: 0.7476,
    deathYear: 1809,
    deathCity: "New York City",
    deathCountry: "United States",
    deathLat: 40.7128,
    deathLon: -74.0060,
    hints: [
      "Only six people came to my funeral, despite the fact that I once helped convince a nation to declare independence with a single pamphlet.",
      "My pamphlets helped spark a revolution in one country and a different kind of uproar in another, but by the time I died, my criticism of organized religion had made me such a pariah that almost no one showed up to bury me."
    ]
  },
  {
    name: "Suleiman the Magnificent",
    acceptedAnswers: ["suleiman the magnificent", "suleiman i", "suleiman"],
    birthYear: 1494,
    birthCity: "Trabzon",
    birthCountry: "Ottoman Empire",
    birthLat: 41.0027,
    birthLon: 39.7168,
    deathYear: 1566,
    deathCity: "Szigetvar",
    deathCountry: "Hungary",
    deathLat: 46.0500,
    deathLon: 17.8000,
    hints: [
      "When I died, my closest advisors hid the news from my own army for weeks, propping up the appearance that I was still alive so the campaign wouldn't collapse.",
      "I ruled the longest of any sultan in my empire's history, earning a nickname that translates to 'the Lawgiver' for the sweeping legal reforms I introduced — and I died in my war tent during a siege deep in Europe."
    ]
  },
  {
    name: "Giacomo Casanova",
    acceptedAnswers: ["giacomo casanova", "casanova"],
    birthYear: 1725,
    birthCity: "Venice",
    birthCountry: "Italy",
    birthLat: 45.4408,
    birthLon: 12.3155,
    deathYear: 1798,
    deathCity: "Dux",
    deathCountry: "Czech Republic",
    deathLat: 50.6167,
    deathLon: 13.7500,
    hints: [
      "I once escaped from a supposedly inescapable prison built into the roof of a palace, squeezing through a hole I'd carved in the ceiling.",
      "I spent my final years as a bored librarian in a Bohemian castle, writing lengthy memoirs about a much wilder earlier life full of romantic conquests across the courts of Europe."
    ]
  },
  {
    name: "George Frideric Handel",
    acceptedAnswers: ["george frideric handel", "george frederick handel", "handel"],
    birthYear: 1685,
    birthCity: "Halle",
    birthCountry: "Germany",
    birthLat: 51.4964,
    birthLon: 11.9693,
    deathYear: 1759,
    deathCity: "London",
    deathCountry: "England",
    deathLat: 51.5074,
    deathLon: -0.1278,
    hints: [
      "I wrote one of my most enduring works in a single, feverish burst lasting only about three weeks, barely eating or leaving my room the whole time.",
      "Though born in Germany, I became a naturalized subject of the British crown, and by the end of my life I'd gone completely blind, yet I kept performing at the organ from memory."
    ]
  },
  {
    name: "El Greco",
    acceptedAnswers: ["el greco", "domenikos theotokopoulos"],
    birthYear: 1541,
    birthCity: "Candia",
    birthCountry: "Greece",
    birthLat: 35.3387,
    birthLon: 25.1442,
    deathYear: 1614,
    deathCity: "Toledo",
    deathCountry: "Spain",
    deathLat: 39.8628,
    deathLon: -4.0273,
    hints: [
      "I signed my paintings in Greek lettering, even though I spent most of my working life in Spain and almost nobody there could read my signature.",
      "I trained first as an icon painter on a Greek island, then reinvented myself in Spain with elongated, almost otherworldly figures — a style so ahead of its time that critics only really came around to me centuries after I died."
    ]
  },
  {
    name: "Vincent van Gogh",
    acceptedAnswers: ["vincent van gogh", "van gogh"],
    birthYear: 1853,
    birthCity: "Zundert",
    birthCountry: "Netherlands",
    birthLat: 51.4667,
    birthLon: 4.6500,
    deathYear: 1890,
    deathCity: "Auvers-sur-Oise",
    deathCountry: "France",
    deathLat: 49.0728,
    deathLon: 2.1717,
    hints: [
      "My brother paid nearly all my bills for the last decade of my life, and I paid him back in letters — hundreds of them, and only a single painting sale.",
      "During a mental health crisis, I cut off part of my own ear. Less than two years later, I died from a gunshot wound, just as the world was starting to notice the paintings I'd been making almost nonstop."
    ]
  },
  {
    name: "Frederic Chopin",
    acceptedAnswers: ["frederic chopin", "chopin", "fryderyk chopin"],
    birthYear: 1810,
    birthCity: "Zelazowa Wola",
    birthCountry: "Poland",
    birthLat: 52.2833,
    birthLon: 20.1667,
    deathYear: 1849,
    deathCity: "Paris",
    deathCountry: "France",
    deathLat: 48.8566,
    deathLon: 2.3522,
    hints: [
      "After I died, my heart was cut out, sealed in a jar of alcohol, and smuggled across a border to be entombed separately from the rest of me, exactly as I'd asked.",
      "I was one of the most celebrated pianists of my era, yet I dreaded large public concerts and much preferred playing in small, intimate salons instead."
    ]
  },
  {
    name: "Karl Marx",
    acceptedAnswers: ["karl marx", "marx"],
    birthYear: 1818,
    birthCity: "Trier",
    birthCountry: "Germany",
    birthLat: 49.7596,
    birthLon: 6.6441,
    deathYear: 1883,
    deathCity: "London",
    deathCountry: "England",
    deathLat: 51.5074,
    deathLon: -0.1278,
    hints: [
      "I sported one of the most voluminous, unchecked beards in 19th-century intellectual history.",
      "My closest friend and lifelong co-author quietly bankrolled my anti-capitalist writing for years, using profits from his own father's textile factories."
    ]
  },
  {
    name: "Che Guevara",
    acceptedAnswers: ["che guevara", "che", "ernesto guevara"],
    birthYear: 1928,
    birthCity: "Rosario",
    birthCountry: "Argentina",
    birthLat: -32.9468,
    birthLon: -60.6393,
    deathYear: 1967,
    deathCity: "La Higuera",
    deathCountry: "Bolivia",
    deathLat: -19.9167,
    deathLon: -63.5833,
    hints: [
      "I trained for years to become a doctor before deciding fixing individual patients wasn't going to be enough, and picked up a rifle instead.",
      "I was captured and executed in a schoolhouse in Bolivia, and my hands were cut off after death just to prove my identity to the outside world."
    ]
  },
  {
    name: "Pablo Picasso",
    acceptedAnswers: ["pablo picasso", "picasso"],
    birthYear: 1881,
    birthCity: "Malaga",
    birthCountry: "Spain",
    birthLat: 36.7213,
    birthLon: -4.4213,
    deathYear: 1973,
    deathCity: "Mougins",
    deathCountry: "France",
    deathLat: 43.6000,
    deathLon: 6.9833,
    hints: [
      "My full birth name has more than twenty words in it, stringing together the names of assorted saints and relatives — thankfully, nobody actually calls me that.",
      "I painted a massive, anguished mural in stark black, white, and grey after a Spanish town was bombed during my country's civil war — it remains one of the most famous anti-war artworks ever made."
    ]
  },
  {
    name: "Oscar Wilde",
    acceptedAnswers: ["oscar wilde", "wilde"],
    birthYear: 1854,
    birthCity: "Dublin",
    birthCountry: "Ireland",
    birthLat: 53.3498,
    birthLon: -6.2603,
    deathYear: 1900,
    deathCity: "Paris",
    deathCountry: "France",
    deathLat: 48.8566,
    deathLon: 2.3522,
    hints: [
      "Legend has it that, dying in a cheap hotel room, I complained that either the wallpaper or I would have to go — and one of us did.",
      "I spent two years in prison doing hard labor after a Victorian court convicted me for loving a man, and the ordeal broke my health so thoroughly I was dead within a few years of release."
    ]
  },
  {
    name: "Alexander Graham Bell",
    acceptedAnswers: ["alexander graham bell", "alexander bell"],
    birthYear: 1847,
    birthCity: "Edinburgh",
    birthCountry: "Scotland",
    birthLat: 55.9533,
    birthLon: -3.1883,
    deathYear: 1922,
    deathCity: "Baddeck",
    deathCountry: "Canada",
    deathLat: 46.1002,
    deathLon: -60.7500,
    hints: [
      "I refused to keep one of my own most famous inventions in my study, worried it would be too distracting while I worked.",
      "I rushed to build a crude metal detector to help locate an assassin's bullet lodged in a wounded American president, though the device failed, confused by the metal bed frame he was lying on."
    ]
  },
  {
    name: "Albert Schweitzer",
    acceptedAnswers: ["albert schweitzer", "schweitzer"],
    birthYear: 1875,
    birthCity: "Kaysersberg",
    birthCountry: "Germany",
    birthLat: 48.1394,
    birthLon: 7.2667,
    deathYear: 1965,
    deathCity: "Lambarene",
    deathCountry: "Gabon",
    deathLat: -0.7000,
    deathLon: 10.2333,
    hints: [
      "Before I ever picked up a scalpel, I already held doctorates in philosophy, theology, and music, and was considered one of Europe's foremost interpreters of a particular Baroque composer's organ works.",
      "I funded and built a hospital deep in equatorial Africa, largely paying for it myself through organ recitals, and won the Nobel Peace Prize for the decades of medical work I did there."
    ]
  },
  {
    name: "Anna Pavlova",
    acceptedAnswers: ["anna pavlova", "pavlova"],
    birthYear: 1881,
    birthCity: "Saint Petersburg",
    birthCountry: "Russia",
    birthLat: 59.9343,
    birthLon: 30.3351,
    deathYear: 1931,
    deathCity: "The Hague",
    deathCountry: "Netherlands",
    deathLat: 52.0705,
    deathLon: 4.3007,
    hints: [
      "Legend has it that as I lay dying, my last request was for someone to have a particular costume ready for my next performance.",
      "I refused a surgery that doctors said might save my life, because it would have meant giving up dancing — I toured constantly, bringing ballet to places on nearly every continent that had never seen it performed live before."
    ]
  },
  {
    name: "Harry Houdini",
    acceptedAnswers: ["harry houdini", "houdini"],
    birthYear: 1874,
    birthCity: "Budapest",
    birthCountry: "Hungary",
    birthLat: 47.4979,
    birthLon: 19.0402,
    deathYear: 1926,
    deathCity: "Detroit",
    deathCountry: "United States",
    deathLat: 42.3314,
    deathLon: -83.0458,
    hints: [
      "I made a secret pact with my wife: if there really was an afterlife, I'd find a way to send her a coded message from beyond. She held seances for ten years after I died, waiting for a signal that never came.",
      "I spent my later career debunking fraudulent psychics and mediums, and died from a ruptured appendix, reportedly after a college student sucker-punched me in the stomach before I was ready for the blow."
    ]
  },
  {
    name: "Mata Hari",
    acceptedAnswers: ["mata hari"],
    birthYear: 1876,
    birthCity: "Leeuwarden",
    birthCountry: "Netherlands",
    birthLat: 53.2012,
    birthLon: 5.7999,
    deathYear: 1917,
    deathCity: "Vincennes",
    deathCountry: "France",
    deathLat: 48.8471,
    deathLon: 2.4373,
    hints: [
      "I invented an entire exotic persona for the Paris stage, claiming an upbringing and a title I never actually had, and audiences fell for it completely.",
      "I was tried and executed as a spy during the First World War. Legend has it I refused the blindfold and blew a kiss to the firing squad — historians still argue about how guilty I actually was."
    ]
  },
  {
    name: "Charlie Chaplin",
    acceptedAnswers: ["charlie chaplin", "chaplin"],
    birthYear: 1889,
    birthCity: "London",
    birthCountry: "England",
    birthLat: 51.5074,
    birthLon: -0.1278,
    deathYear: 1977,
    deathCity: "Vevey",
    deathCountry: "Switzerland",
    deathLat: 46.4628,
    deathLon: 6.8419,
    hints: [
      "I once anonymously entered a lookalike contest for my own iconic on-screen character at a local theater — and didn't even make the top three.",
      "I wore a tiny toothbrush mustache years before an infamous dictator made that look impossible to wear innocently again, then used our uncanny resemblance to mock him mercilessly in one of my films."
    ]
  },
  {
    name: "Vladimir Nabokov",
    acceptedAnswers: ["vladimir nabokov", "nabokov"],
    birthYear: 1899,
    birthCity: "Saint Petersburg",
    birthCountry: "Russia",
    birthLat: 59.9343,
    birthLon: 30.3351,
    deathYear: 1977,
    deathCity: "Montreux",
    deathCountry: "Switzerland",
    deathLat: 46.4312,
    deathLon: 6.9107,
    hints: [
      "Alongside my writing, I spent years seriously classifying butterflies, and a genus of blue butterflies is still named in my honor today.",
      "I fled my homeland after one revolution and fled continental Europe ahead of a second global catastrophe, eventually building my most famous, most controversial novel in English — a language that wasn't even the one I grew up writing in."
    ]
  },
  {
    name: "Jim Morrison",
    acceptedAnswers: ["jim morrison", "morrison"],
    birthYear: 1943,
    birthCity: "Melbourne",
    birthCountry: "United States",
    birthLat: 28.0836,
    birthLon: -80.6081,
    deathYear: 1971,
    deathCity: "Paris",
    deathCountry: "France",
    deathLat: 48.8566,
    deathLon: 2.3522,
    hints: [
      "I studied filmmaking in college before ever picking up a microphone professionally, and always thought of myself as more of a poet than a rock star.",
      "I was arrested onstage in Florida over an indecent exposure charge that stayed on my record for decades until a governor issued a posthumous pardon. I died in a Paris bathtub at twenty-seven — officially of heart failure, though no autopsy was ever performed to confirm it."
    ]
  },
  {
    name: "Antonio Vivaldi",
    acceptedAnswers: ["antonio vivaldi", "vivaldi"],
    birthYear: 1678,
    birthCity: "Venice",
    birthCountry: "Italy",
    birthLat: 45.4408,
    birthLon: 12.3155,
    deathYear: 1741,
    deathCity: "Vienna",
    deathCountry: "Austria",
    deathLat: 48.2082,
    deathLon: 16.3738,
    hints: [
      "I was an ordained priest, but a chronic chest ailment meant I could rarely actually perform Mass, so I spent most of my working life teaching music at a girls' orphanage instead.",
      "Despite writing hundreds of concertos and being enormously famous in my lifetime, I died in poverty, was buried in an unmarked pauper's grave, and was almost completely forgotten for nearly two centuries before my music was rediscovered."
    ]
  },
  {
    name: "Simon Bolivar",
    acceptedAnswers: ["simon bolivar", "bolivar"],
    birthYear: 1783,
    birthCity: "Caracas",
    birthCountry: "Venezuela",
    birthLat: 10.4806,
    birthLon: -66.9036,
    deathYear: 1830,
    deathCity: "Santa Marta",
    deathCountry: "Colombia",
    deathLat: 11.2408,
    deathLon: -74.1990,
    hints: [
      "Legend has it that, dying poor and disillusioned, I said all my years of struggle amounted to little more than plowing the sea.",
      "I helped liberate half a continent from colonial rule, and one entire country was later renamed in my honor — yet I died in exile, stripped of power, with the union of nations I'd dreamed of building already falling apart."
    ]
  },
  {
    name: "T.S. Eliot",
    acceptedAnswers: ["t.s. eliot", "ts eliot", "t. s. eliot", "eliot"],
    birthYear: 1888,
    birthCity: "St. Louis",
    birthCountry: "United States",
    birthLat: 38.6270,
    birthLon: -90.1994,
    deathYear: 1965,
    deathCity: "London",
    deathCountry: "England",
    deathLat: 51.5074,
    deathLon: -0.1278,
    hints: [
      "For years, I wrote some of the century's most influential poetry in whatever hours I could find outside my day job, quietly processing loans and mortgages at a London bank.",
      "I was born an American but became a British citizen as an adult, and went on to win the Nobel Prize in Literature for poetry so dense that entire university courses are still built around untangling it."
    ]
  },
  {
    name: "Ernest Shackleton",
    acceptedAnswers: ["ernest shackleton", "shackleton"],
    birthYear: 1874,
    birthCity: "Kilkea",
    birthCountry: "Ireland",
    birthLat: 52.9333,
    birthLon: -6.9167,
    deathYear: 1922,
    deathCity: "Grytviken",
    deathCountry: "South Georgia",
    deathLat: -54.2811,
    deathLon: -36.5085,
    hints: [
      "My wife decided I should be buried on the remote island where I died rather than brought home, saying it's where I'd have wanted to stay.",
      "My ship was slowly crushed by pack ice in Antarctica, yet I got every single one of my twenty-eight crew members home alive after nearly two years stranded in the ice — then died of a heart attack at the very start of my next expedition south."
    ]
  },
  {
    name: "Bob Marley",
    acceptedAnswers: ["bob marley", "marley"],
    birthYear: 1945,
    birthCity: "Nine Mile",
    birthCountry: "Jamaica",
    birthLat: 18.2667,
    birthLon: -77.3833,
    deathYear: 1981,
    deathCity: "Miami",
    deathCountry: "United States",
    deathLat: 25.7617,
    deathLon: -80.1918,
    hints: [
      "Doctors found a melanoma under one of my toenails years before it killed me, and I refused the amputation that might have stopped it from spreading.",
      "I survived an assassination attempt at my own home, then went ahead and performed a massive peace concert in my home country just two days later, bullet fragments still in my body."
    ]
  },
  {
    name: "Babur",
    acceptedAnswers: ["babur"],
    birthYear: 1483,
    birthCity: "Andijan",
    birthCountry: "Uzbekistan",
    birthLat: 40.7833,
    birthLon: 72.3442,
    deathYear: 1530,
    deathCity: "Agra",
    deathCountry: "India",
    deathLat: 27.1767,
    deathLon: 78.0081,
    hints: [
      "I lost the small Central Asian kingdom I was born to rule while still a teenager, and spent years as a wandering exile before ever conquering anything bigger.",
      "I descended from two of history's most feared conquerors on either side of my family, and used that legacy to found an empire in India — even though I wrote in my memoirs that I never much cared for the place, missing the fruit and gardens of home instead."
    ]
  },
  {
    name: "Timur",
    acceptedAnswers: ["timur", "tamerlane", "amir timur"],
    birthYear: 1336,
    birthCity: "Shahrisabz",
    birthCountry: "Uzbekistan",
    birthLat: 39.0500,
    birthLon: 66.8333,
    deathYear: 1405,
    deathCity: "Otrar",
    deathCountry: "Kazakhstan",
    deathLat: 42.8500,
    deathLon: 68.3167,
    hints: [
      "An old injury left me with a permanent limp for most of my life, which later gave rise to the nickname most of the world still remembers me by.",
      "I built one of history's largest and most brutal empires, stacking towers of skulls outside cities that resisted me, and died in the dead of winter while marching to invade Ming China."
    ]
  },
  {
    name: "Bahadur Shah Zafar",
    acceptedAnswers: ["bahadur shah zafar", "bahadur shah ii", "zafar"],
    birthYear: 1775,
    birthCity: "Delhi",
    birthCountry: "India",
    birthLat: 28.6139,
    birthLon: 77.2090,
    deathYear: 1862,
    deathCity: "Rangoon",
    deathCountry: "Myanmar",
    deathLat: 16.8409,
    deathLon: 96.1735,
    hints: [
      "I was a respected poet, writing in Urdu about loss and longing long before I ever became a symbol of anything political.",
      "I was the last emperor of a once-mighty dynasty, reduced to a mostly ceremonial figurehead before being swept up as the reluctant face of a major uprising against colonial rule — and exiled to a foreign land, where I died far from the throne my family had held for centuries."
    ]
  },
  {
    name: "Raja Ram Mohan Roy",
    acceptedAnswers: ["raja ram mohan roy", "ram mohan roy", "rammohan roy"],
    birthYear: 1772,
    birthCity: "Radhanagar",
    birthCountry: "India",
    birthLat: 23.0333,
    birthLon: 87.9333,
    deathYear: 1833,
    deathCity: "Bristol",
    deathCountry: "England",
    deathLat: 51.4545,
    deathLon: -2.5879,
    hints: [
      "I could read and argue fluently in half a dozen classical and modern languages, and used that skill to campaign for years against a deadly practice that forced widows onto their husbands' funeral pyres.",
      "I traveled to England as an unofficial ambassador for an aging emperor back home, and died there before I could return — my grave still stands in a quiet English city, far from the country I spent my life trying to reform."
    ]
  },
  {
    name: "Koxinga",
    acceptedAnswers: ["koxinga", "zheng chenggong"],
    birthYear: 1624,
    birthCity: "Hirado",
    birthCountry: "Japan",
    birthLat: 33.3608,
    birthLon: 129.5531,
    deathYear: 1662,
    deathCity: "Tainan",
    deathCountry: "Taiwan",
    deathLat: 22.9999,
    deathLon: 120.2269,
    hints: [
      "My mother was Japanese and my father a Chinese merchant with a very colorful reputation as, among other things, a pirate — I was born on a small Japanese island most people have never heard of.",
      "I led an army that besieged and expelled European colonizers from an island fortress they thought was unconquerable, founding a loyalist kingdom there in the name of a fallen dynasty. I died within the year, still in my thirties — historians aren't entirely sure what killed me."
    ]
  },
  {
    name: "Yamamoto Isoroku",
    acceptedAnswers: ["yamamoto isoroku", "isoroku yamamoto", "yamamoto"],
    birthYear: 1884,
    birthCity: "Nagaoka",
    birthCountry: "Japan",
    birthLat: 37.4467,
    birthLon: 138.8514,
    deathYear: 1943,
    deathCity: "Buin",
    deathCountry: "Papua New Guinea",
    deathLat: -6.7407,
    deathLon: 155.6997,
    hints: [
      "I lost two fingers on my left hand in an earlier war years before I ever became a military strategist, and I was also known throughout the fleet as a formidable poker and bridge player.",
      "I studied at Harvard and served in the United States before privately warning my own government it couldn't win a prolonged war against American industry. I was killed years later when American codebreakers intercepted my flight plans and sent fighters to shoot my plane down."
    ]
  },
  {
    name: "Zheng He",
    acceptedAnswers: ["zheng he", "cheng ho"],
    birthYear: 1371,
    birthCity: "Kunyang",
    birthCountry: "China",
    birthLat: 24.6500,
    birthLon: 102.6167,
    deathYear: 1433,
    deathCity: "Calicut",
    deathCountry: "India",
    deathLat: 11.2588,
    deathLon: 75.7804,
    hints: [
      "I was captured as a boy during a military campaign, castrated, and sent into palace service — where I eventually rose to command the largest fleets the world had ever seen up to that point.",
      "I led seven massive naval expeditions across the Indian Ocean, reaching as far as the coast of East Africa, decades before Europe's own age of exploration began. Historians still debate exactly where and how I died, on what turned out to be my final voyage."
    ]
  }
];
