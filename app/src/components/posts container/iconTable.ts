// interface IconTableInterface {
//   [key: string]: string;
// }

const iconTable: Record<string, string> = {

  // Special
  'ANNOUNCEMENTS': 'fa-bullhorn',
  'MICSPAM': 'fa-headset',

  // Countries & Intl. Regions
  'AFRICA': 'fa-earth-africa',
  'AUS': 'fa-earth-oceania',
  'BALKAN': 'fa-earth-europe',
  'BENE': 'fa-stroopwafel',
  'CAN': 'fa-earth-americas',
  'CANUCKS': 'fa-earth-americas',
  'CN-TW': 'fa-earth-asia',
  'CZECH': 'fa-earth-europe',
  'DEN': 'fa-earth-europe',
  'EUROPE': 'fa-earth-europe',
  'FIN': 'fa-earth-europe',
  'FRANCE': 'fa-earth-europe',
  'GER': 'fa-earth-europe',
  'IND': 'fa-earth-asia',
  'ISRAEL': 'fa-earth-africa',
  'IRELAND': 'fa-earth-europe',
  'ITALY': 'fa-earth-italy',
  'JAPAN': 'fa-earth-asia',
  'KOREA': 'fa-earth-asia',
  'LATAM': 'fa-earth-americas',
  'MAMADAS': 'fa-earth-americas',
  'MIDDLEEAST': 'fa-earth-africa',
  'NOR': 'fa-earth-europe',
  'NZ': 'fa-earth-oceania',
  'POLAND': 'fa-earth-europe',
  'RUS': 'fa-earth-europe',
  'SCAN': 'fa-earth-europe',
  'SEA': 'fa-earth-asia',
  'SWE': 'fa-earth-europe',
  'SWISS': 'fa-earth-europe',
  'UK': 'fa-earth-europe',
  'UKRAINE': 'fa-earth-europe',
  'V4': 'fa-earth-europe',
  'VODKA': 'fa-earth-europe',
  'WHATSAPP-FORWARDS': 'fa-earth-asia',
  'YUROP': 'fa-earth-europe',
  'LONDON': 'fa-city',
  'AUS-SYD': 'fa-city',
  'UCHICAGO': 'fa-graduation-cap',
  'UIUC': 'fa-graduation-cap',

  // US States, Cities & Regions
  'BAY-AREA':	'fa-city',
  'USA-ATL': 'fa-city',
  'USA-AZ': 'fa-flag-usa',
  'USA-CA': 'fa-flag-usa',
  'USA-CO': 'fa-flag-usa',
  'USA-CHI': 'fa-city',
  'USA-CVILLE':	'fa-city',
  'USA-DMV': 'fa-city',
  'USA-FL': 'fa-flag-usa',
  'USA-GA': 'fa-flag-usa',
  'USA-IN': 'fa-flag-usa',
  'USA-KC': 'fa-city',
  'LA': 'fa-city',
  'USA-MI': 'fa-flag-usa',
  'USA-MN': 'fa-flag-usa',
  'USA-MO': 'fa-flag-usa',
  'USA-MT': 'fa-flag-usa',
  'USA-NE': 'fa-flag-usa',
  'USA-NC': 'fa-flag-usa',
  'USA-NJ':	'fa-flag-usa',
  'USA-NY': 'fa-flag-usa',
  'USA-NYC': 'fa-city',
  'USA-OH': 'fa-flag-usa',
  'USA-OR': 'fa-flag-usa',
  'USA-PA': 'fa-flag-usa',
  'USA-SDG': 'fa-flag-usa',
  'USA-TX': 'fa-flag-usa',
  'USA-UT': 'fa-flag-usa',
  'USA-VA': 'fa-flag-usa',
  'USA-WA': 'fa-flag-usa',
  'USA-WI': 'fa-flag-usa',

  // Politicians
  'BIDEN': 'fa-democrat',
  'BUTTI': 'fa-democrat',	
  'COP': 'fa-democrat',
  'DELANEY': 'fa-democrat',
  'DIAMOND-JOE': 'fa-democrat',
  'GIGASUCC': 'fa-democrat',
  'OBAMA': 'fa-democrat',
  'OSBORNE': 'fa-check-to-slot',
  'PATERNALIST': 'fa-democrat',
  'QUACK': 'fa-democrat',
  'QUEEN': 'fa-democrat',
  'RICE': 'fa-democrat',
  'SALAD-COMB': 'fa-democrat',
  'SAUCER': 'fa-landmark-dome',
  'WELD': 'fa-republican',
  'YANG': 'fa-democrat',

  // Policy & Ideology
  'ALTRUISM': 'fa-handshake-simple',
  'BLUE-DOGS': 'fa-democrat',
  'CANLIB': 'fa-canadian-maple-leaf',
  'CUBE': 'fa-city',
  'DOWNBALLOT': 'fa-check-to-slot',
  'DEMOCRACY': 'fa-globe',
  'DEMS': 'fa-democrat',
  'ECO': 'fa-seedling',
  'ED-POLICY': 'fa-school-flag',
  'ELECTIONS': 'fa-check-to-slot',
  'FEMINISTS': 'fa-venus',
  'FOREIGN-POLICY': 'fa-dove',
  'GEORGIST': 'fa-globe',
  'HEALTH-POLICY': 'fa-staff-aesculapius',
  'IMMIGRATION': 'fa-passport',
  'INTERNATIONAL-RELATIONS': 'fa-globe',
  'LABOR': 'fa-hand-holding-dollar',
  'LAW': 'fa-scale-balanced',
  'LDC': 'fa-globe',
  'MARKETS':	'fa-arrow-trend-up',
  'MILITARY': 'fa-jet-fighter',
  'OSINT': 'fa-eye',
  'PIDGIN': 'fa-landmark-dome',
  'RADXC': 'fa-handshake-simple',
  'RINO': 'fa-republican',
  'SNEK': 'fa-worm',
  'TAX': 'fa-sack-dollar',
  'TRANSHUMANISM': 'fa-microchip',
  'TRANSIT': 'fa-train-subway',
  'YIMBY': 'fa-city',

  // Sports
  'BASEBALL': 'fa-baseball',
  'CBB': 'fa-basketball',
  'CFB': 'fa-football',
  'CRICKET': 'fa-baseball-bat-ball',
  'FFB': 'fa-football',
  'MMA': 'fa-person-running',
  'MOTO': 'fa-flag-checkered',
  'OLYMPICS': 'fa-person-running',
  'PRO-WRESTLING': 'fa-person-running',
  'NBA': 'fa-basketball',
  'NFL': 'fa-football',
  'NHL': 'fa-hockey-puck',
  'SOCCER': 'fa-futbol',
  'TENNIS': 'fa-baseball',

  // Music
  'CLASSICAL': 'fa-music',
  'ELECTRONICA': 'fa-music',
  'FASH-TUNES': 'fa-music',
  'FOLK': 'fa-music',
  'INDIE': 'fa-music',
  'JAZZ': 'fa-music',
  'METAL': 'fa-music',
  'MUSICIAN': 'fa-music',
  'OONTS': 'fa-music',
  'POP': 'fa-music',
  'PRETENTIOUS': 'fa-music',
  'PUNK': 'fa-music',
  'RAP': 'fa-music',
  'ROCK': 'fa-music',
  'WORLD-MUSIC': 'fa-music',

  // TV / Movies / Video / Books
  'ASOIAF': 'fa-tv',
  'AVATAR': 'fa-tv',
  'BAD-FEELING': 'fa-clapperboard',
  'BCS': 'fa-tv',
  'COMICS': 'fa-book',
  'COMMUNITY': 'fa-tv',
  'DESIMEDIA': 'fa-clapperboard',
  'EUROVISION': 'fa-tv',
  'EXPANSE': 'fa-tv',
  'FAMILY-GUY': 'fa-tv',
  'HORROR': 'fa-clapperboard',
  'MOVIES': 'fa-clapperboard',
  'NORTHERNLION': 'fa-youtube',
  'READING': 'fa-book',
  'SANDERSON': 'fa-book',
  'SCI-FI': 'fa-book',
  'SIMPSONS': 'fa-tv',
  'SNL': 'fa-tv',
  'SURVIVOR': 'fa-tv',
  'THEATRE': 'fa-theater',
  'THEGOODPLACE': 'fa-tv',
  'TREK': 'fa-tv',
  'TV': 'fa-tv',
  'WEEBS': 'fa-tv',
  'WEST-WING': 'fa-tv',

  // Games
  '40K': 'fa-gamepad',
  'AMONG-US': 'fa-gamepad',
  'ANIMAL-CROSSING': 'fa-gamepad',
  'BIOWARE': 'fa-gamepad',
  'BLIZZARD': 'fa-gamepad',
  'CHESS': 'fa-chess',
  'CIV': 'fa-gamepad',
  'CONSOLE-WARS': 'fa-gamepad',
  'DESTINY': 'fa-gamepad',
  'DIPLOMACY': 'fa-gamepad',
  'DOTA2': 'fa-gamepad',
  'FALLOUT': 'fa-gamepad',
  'FIRE-EMB': 'fa-gamepad',
  'FM': 'fa-gamepad',
  'GAMING': 'fa-gamepad',
  'HALO': 'fa-gamepad',
  'HOI4': 'fa-gamepad',
  'KSP': 'fa-gamepad',
  'METAL-GEAR': 'fa-gamepad',
  'MINECRAFT': 'fa-gamepad',
  'MTG': 'fa-hat-wizard',
  'NATIONSTATES': 'fa-gamepad',
  'NIER': 'fa-gamepad',
  'PARADOX': 'fa-gamepad',
  'RPG': 'fa-gamepad',
  'SHITLER': 'fa-gamepad',
  'SOULSBORNE': 'fa-gamepad',
  'STELLARIS': 'fa-gamepad',
  'TES': 'fa-gamepad',
  'VICTORIA': 'fa-gamepad',
  'WORDLE': 'fa-spell-check',
  'XCOM': 'fa-gamepad',

  // Online
  'APPLES': 'fa-apple-whole',
  'ASK-NL': 'fa-circle-question',
  'BESTOF': 'fa-award',
  'BURPMAS': 'fa-face-meh',
  'DUNC': 'fa-microphone-lines',
  'NL-ELECTS': 'fa-check-to-slot',
  'ONTHISDAY': 'fa-calendar-days',
  'PLACE': 'fa-reddit',
  'PMG': 'fa-user',
  'PREZPOLL':  'fa-check-to-slot',
  'READ-ANOTHER-BOOK': 'fa-book',
  'SHITPOSTERS': 'fa-brain',
  'SMBC': 'fa-computer',
  'SPECIES': 'fa-frog',
  'TACOTUBE': 'fa-youtube',
  'WIKI': 'fa-wikipedia-w',

  // News
  'EXTREMISM': 'fa-person-rifle',
  'FIVEY': 'fa-chart-line',
  'NPR': 'fa-newspaper',
  'GOOD-NEWS': 'fa-newspaper',

  // Interests & Fun
  'ALCOHOL': 'fa-wine-glass',
  'ALTHISTORY': 'fa-timeline',
  'ANDROID': 'fa-android',
  'AOC': 'fa-laptop-code',
  'AUTO': 'fa-car',
  'ARCHITECTURE': 'fa-building',
  'AWW': 'fa-face-fmile',
  'BAJA': 'fa-pepper-hot',
  'COFFEE': 'fa-mug-hot',
  'DOG': 'fa-dog',
  'DYEL': 'fa-dumbbell',
  'FAKE-ROTHKO': 'fa-palette',
  'FASHION': 'fa-shirt',
  'FAST-FOOD': 'fa-burger',
  'FURRY': 'fa-paw',
  'GOLF': 'fa-gold-ball-tee',
  'GARAND': 'fa-gun',
  'HONKHONK': 'fa-feather',
  'KITTY': 'fa-cat',
  'LINUX': 'fa-linux',
  'MATERIEL': 'fa-jet-fighter',
  'OUTDOORS': 'fa-person-hikinh',
  'PANDA': 'fa-paw',
  'PHOTO': 'fa-camera',
  'PC': 'fa-screwdriver-wrench',
  'RELIGION': 'fa-place-of-worship',
  'SCHIIT': 'fa-headphones',
  'SPACEFLIGHT': 'fa-shuttle-space',
  'TECH': 'fa-microchip',
  'TRAVEL': 'fa-map-location-dot',
  'TRIVIA': 'fa-circle-question',
  'VR': 'fa-vr-cardboard',
  'WATERCOOLER': 'fa-glass-water',
  'WEED': 'fa-cannabis',
  'WHOREOLOGY': 'fa-clock',
  'WRITING': 'fa-pen',

  // Health & Wellness
  'ACCOUNTABILITY': 'fa-handshake',
  'ADHD': 'fa-heart',
  'BIKE': 'fa-person-biking',
  'CHALK': 'fa-person-running',
  'COOKING': 'fa-utensils',
  'CORONAVIRUS': 'fa-virus-covid',
  'FAMILY': 'fa-child-reaching',
  'FITNESS': 'fa-person-running',
  'FOX-ANON': 'fa-circle-radiation',
  'INSOMNIA': 'fa-bed',
  'PERSONAL-FINANCE': 'fa-hand-holding-dollar',
  'VEGAN': 'fa-leaf',

  // Demographics & Religion
  'ALPHABET-MAFIA': 'fa-rainbow',
  'BALD': 'fa-bowling-ball',
  'BLACK-PEOPLE': 'fa-person',
  'CHILD': 'fa-child',
  'CHRISTIAN': 'fa-cross',
  'DHARMA': 'fa-dharmachakra',
  'FEDORA': 'fa-spaghetti-monster-flying',
  'FEMALE': 'fa-venus',
  'GEFILTE': 'fa-star-of-david',
  'GENTRY': 'fa-house',
  'GNOSTIC': 'fa-face-smile',
  'INDIGENOUS': 'fa-sun',
  'ISLAM': 'fa-star-and-crescent',
  'LGBT': 'fa-rainbow',
  'MILK-TEA': 'fa-earth-asia',
  'OVER25': 'fa-person-cane',
  'PHD': 'fa-graduation-cap',
  'RURAL': 'fa-tractor',
  'SHORT': 'fa-person',
  'TALL': 'fa-person',

  // Academia & Work
  'ACCOUNTING': 'fa-calculator',
  'AI': 'fa-robot',
  'ASTRONOMY': 'fa-meteor',
  'AVIATION': 'fa-plane',
  'BIGDATA': 'fa-chart-pie',
  'BIOLOGY': 'fa-dna',
  'CAREER': 'fa-briefcase',
  'COLLEGE': 'fa-graduation-cap',
  'CLASSICS': 'fa-landmark',
  'COMPUTER-SCIENCE': 'fa-laptop-code',
  'CYBERSECURITY': 'fa-eye',
  'COURT-CASE': 'fa-gavel',
  'DEBATE': 'fa-gavel',
  'ECE': 'fa-bolt',
  'ECON': 'fa-coins',
  'HISTORY': 'fa-scroll',
  'LANGUAGE': 'fa-language',
  'LAW-SCHOOL': 'fa-scale-balanced',
  'MATHEMATICS': 'fa-square-root-variable',
  'MEDICINE': 'fa-prescription',
  'MUN': 'fa-globe',
  'PHILOSOPHY': 'fa-landmark',
  'PHYSICS': 'fa-atom',
  'POLIJOBS': 'fa-landmark',
  'SOCIAL-SCIENCE': 'fa-handshake',
  'STEM': 'fa-flask',
  'TEACHERS': 'fa-person-chalkboard',
  'TRANSLATION': 'fa-language'
};

export { iconTable };