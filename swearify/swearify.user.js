// ==UserScript==
// @name        Swearify
// @description Adds a number of enhancements to your experience on AIM games.
// @namespace   kaffeinition@gmail.com
// @include     http://aimgames.forummotion.com/*
// @version     2.smart.10.1.pickproof.1450576028.16
// @grant       none
// @icon        http://i.imgur.com/HlEs1B4.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @require     https://raw.githubusercontent.com/RadLikeWhoa/Countable/master/Countable.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/swearify/textUtils.js
// @require     https://raw.githubusercontent.com/arasatasaygin/is.js/master/is.js
// ==/UserScript==
//////////////////////////////VERSIONING: X.X.XX
//////////////////////////////DO NOT CHANGE
///////FACTS FOR FRIENDS
///////
var facts = [
  'The billionth digit of Pi is 9.',
  'Humans can survive underwater. But not for very long.',
  'A nanosecond lasts one billionth of a second.',
  'Honey does not spoil.',
  'The atomic weight of Germanium is seven two point six four.',
  'An ostrich\'s eye is bigger than its brain.',
  'Rats cannot throw up.',
  'Iguanas can stay underwater for twenty-eight point seven minutes.',
  'The moon orbits the Earth every 27.32 days.',
  'A gallon of water weighs 8.34 pounds.',
  'According to Norse legend, thunder god Thor\'s chariot was pulled across the sky by two goats.',
  'Tungsten has the highest melting point of any metal, at 3,410 degrees Celsius.',
  'Gently cleaning the tongue twice a day is the most effective way to fight bad breath.',
  'The Tariff Act of 1789, established to protect domestic manufacture, was the second statute ever enacted by the United States government.',
  'The value of Pi is the ratio of any circle\'s circumference to its diameter in Euclidean space.',
  'The Mexican-American War ended in 1848 with the signing of the Treaty of Guadalupe Hidalgo.',
  'In 1879, Sandford Fleming first proposed the adoption of worldwide standardized time zones at the Royal Canadian Institute.',
  'Marie Curie invented the theory of radioactivity, the treatment of radioactivity, and dying of radioactivity.',
  'At the end of The Seagull by Anton Chekhov, Konstantin kills himself.',
  'Hot water freezes quicker than cold water.',
  '[1]',
  'The situation you are in is very dangerous.',
  'Polymerase I polypeptide A is a human gene.',
  'The Sun is 330,330 times larger than Earth.',
  'Dental floss has superb tensile strength.',
  'Raseph, the Semitic god of war and plague, had a gazelle growing out of his forehead.',
  'Human tapeworms can grow up to twenty-two point nine meters.',
  'If you have trouble with simple counting, use the following mnemonic device: one comes before two comes before 60 comes after 12 comes before six trillion comes after 504. This will make your earlier counting difficulties seem like no big deal.',
  'The first person to prove that cow\'s milk is drinkable was very, very thirsty.',
  'Roman toothpaste was made with human urine. Urine as an ingredient in toothpaste continued to be used up until the 18th century.',
  'Volcano-ologists are experts in the study of volcanoes.',
  'In Victorian England, a commoner was not allowed to look directly at the Queen, due to a belief at the time that the poor had the ability to steal thoughts. Science now believes that less than 4% of poor people are able to do this.',
  'Cellular phones will not give you cancer. Only hepatitis.',
  'In Greek myth, Prometheus stole fire from the Gods and gave it to humankind. The jewelry he kept for himself.',
  'The Schrodinger\'s cat paradox outlines a situation in which a cat in a box must be considered, for all intents and purposes, simultaneously alive and dead. Schrodinger created this paradox as a justification for killing cats.',
  'In 1862, Abraham Lincoln signed the Emancipation Proclamation, freeing the slaves. Like everything he did, Lincoln freed the slaves while sleepwalking, and later had no memory of the event.',
  'The plural of surgeon general is surgeons general. The past tense of surgeons general is surgeonsed general',
  'Contrary to popular belief, the Eskimo do not have one hundred different words for snow. They do, however, have two hundred and thirty-four words for fudge.',
  'Halley\'s Comet can be viewed orbiting Earth every seventy-six years. For the other seventy-five, it retreats to the heart of the sun, where it hibernates undisturbed.',
  'The first commercial airline flight took to the air in 1914. Everyone involved screamed the entire way.',
  'Edmund Hillary, the first person to climb Mount Everest, did so accidentally while chasing a bird.',
  'We will both die because of your negligence.',
  'This is a bad plan. You will fail.',
  'He will most likely kill you, violently.',
  'He will most likely kill you.',
  'You will be dead soon.',
  'You are going to die in this room.',
  'The Fact Sphere is a good person, whose insights are relevant.',
  'The Fact Sphere is a good sphere, with many friends.',
  'Dreams are the subconscious mind\'s way of reminding people to go to school naked and have their teeth fall out.',
  'The square root of rope is string.',
  '89% of magic tricks are not magic. Technically, they are sorcery.',
  'At some point in their lives 1 in 6 children will be abducted by the Dutch.',
  'According to most advanced algorithms, the world\'s best name is Craig.',
  'To make a photocopier, simply photocopy a mirror.',
  'Whales are twice as intelligent, and three times as delicious, as humans.',
  'Pants were invented by sailors in the sixteenth century to avoid Poseidon\'s wrath. It was believed that the sight of naked sailors angered the sea god.',
  'In Greek myth, the craftsman Daedalus invented human flight so a group of Minotaurs would stop teasing him about it.',
  'The average life expectancy of a rhinoceros in captivity is 15 years.',
  'Morris, 1965',
  'China produces the world\'s second largest crop of soybeans.',
  'In 1948, at the request of a dying boy, baseball legend Babe Ruth ate seventy-five hot dogs, then died of hot dog poisoning.',
  'William Shakespeare did not exist. His plays were masterminded in 1589 by Francis Bacon, who used a Ouija board to enslave play-writing ghosts.',
  'It is incorrectly noted that Thomas Edison invented \'push-ups\' in 1878. Nikolai Tesla had in fact patented the activity three years earlier, under the name \'Tesla-cize\'.',
  'The automobile brake was not invented until 1895. Before this, someone had to remain in the car at all times, driving in circles until passengers returned from their errands.',
  'The most poisonous fish in the world is the orange ruffy. Everything but its eyes are made of a deadly poison. The ruffy\'s eyes are composed of a less harmful, deadly poison.',
  'The occupation of court jester was invented accidentally, when a vassal\'s epilepsy was mistaken for capering.',
  'Before the Wright Brothers invented the airplane, anyone wanting to fly anywhere was required to eat 200 pounds of helium.',
  'Before the invention of scrambled eggs in 1912, the typical breakfast was either whole eggs still in the shell or scrambled rocks.',
  'During the Great Depression, the Tennessee Valley Authority outlawed pet rabbits, forcing many to hot glue-gun long ears onto their pet mice.',
  'This situation is hopeless.',
  'Diamonds are made when coal is put under intense pressure. Diamonds put under intense pressure become foam pellets, commonly used today as packing material.',
  'Corruption at 25%',
  'Corruption at 50%',
  'Fact: Space does not exist.',
  'The Fact Sphere is not defective. Its facts are wholly accurate and very interesting.',
  'The Fact Sphere is always right.',
  'You will never go into space.',
  'The Space Sphere will never go to space.',
  'While the submarine is vastly superior to the boat in every way, over 97% of people still use boats for aquatic transportation.',
  'The likelihood of you dying within the next five minutes is eighty-seven point six one percent.',
  'The likelihood of you dying violently within the next five minutes is eighty-seven point six one percent.',
  'You are about to get me killed.',
  'The Fact Sphere is the most intelligent sphere.',
  'The Fact Sphere is the most handsome sphere.',
  'The Fact Sphere is incredibly handsome.',
  'Spheres that insist on going into space are inferior to spheres that don\'t.',
  'Whoever wins this battle is clearly superior, and will earn the allegiance of the Fact Sphere.',
  'You could stand to lose a few pounds.',
  'Avocados have the highest fiber and calories of any fruit.',
  'Avocados have the highest fiber and calories of any fruit. They are found in Australians.',
  'Every square inch of the human body has 32 million bacteria on it.',
  'The average adult body contains half a pound of salt.',
  'The Adventure Sphere is a blowhard and a coward.',
  'Twelve. Twelve. Twelve. Twelve. Twelve. Twelve. Twelve. Twelve. Twelve. Twelve.',
  'Pens. Pens. Pens. Pens. Pens. Pens. Pens.',
  'Apples. Oranges. Pears. Plums. Kumquats. Tangerines. Lemons. Limes. Avocado. Tomato. Banana. Papaya. Guava.',
  'Error. Error. Error. File not found.',
  'Error. Error. Error. Fact not found.',
  'Fact not found.',
  'Warning, sphere corruption at twenty-- rats cannot throw up.',
  //random facts
    'Gandhi was extremely racist towards africans and even lobbied for segregated entrances to public buildings.',
  'British people say \"Happy Christmas\" because in the 19th century the word \"merry\" also meant \"intoxicated\" so they wanted to separate it from public insobriety.',
  'Drinking caffeine in the evening delays our brain\'s release of melatonin and interrupts our circadian rhythm by as much as 40 minutes.',
  'The man most responsible for the Rwandan Genocide was only sentenced to 35 years in prison.',
  'The King of Norway is 73rd in line to the British throne.',
  'In the UK, you can never be more than 70 miles away from the sea.',
  'The first President born in the U.S. spoke Dutch as his first language.',
  '1 out of every 4 dollars employers pay for healthcare in the U.S. is tied to unhealthy lifestyle choices or conditions like smoking, stress, or obesity.',
  'IKEA is an acronym: \"IK\" are the founder\'s initials, \"E\" is for the farm he grew up on (Elmtaryd), and \"A\" is for Agunnaryd, his village.',
  'A study found that fewer than 10% of people say they\'re not perfectionists in any area of life, so perfectionism is a common trait.',
  'This sentence is false.',
  'Around 7% of all wars in history were religiously motivated.',
  'Paul McCartney had a dream about his deceased mother, Mary, who calmly told him to \"let it be.\" He started writing the song the next day.',
  'Barack Obama was the first sitting U.S. president to visit a federal prison.',
  'The average American spends about US$232 on legal expenses each year.',
  '51% of Britons have never had a one-night stand.',
  'Parking takes up as much as 14% of all land-use in Los Angeles County.',
  'The Chinese Han empire was aware of the Roman Rmpire and they sent envoys to each-other.',
  'The 3 tallest statues in the world are of Buddha.',
  'The most dangerous job in America is President: over 9% have been killed in office.',
  'Whenever Prince Charles visits the U.S., his Secret Service code name is \"Unicorn.\"',
  'A man named Bud Weisser was recently arrested for trespassing at the Budweiser Brewery in St. Louis, Missouri.',
  'People of the world produce roughly 1,043,000 tonnes (that\'s 2,299,421,390 lbs) of poop each day.',
  'There are 5,865,696,000,000 miles or 9,460,800,000,000 kilometers in a light year.',
  'Despite its \"Sunshine State\" nickname, Florida is not the sunniest U.S. state—Arizona is, closely followed by Nevada.',
  'The volcanic system beneath Yellowstone holds enough lava to fill 11 Grand Canyons.',
  'If you have 3 quarters, 4 dimes, and 4 pennies, you have $1.19. You also have the largest amount of money in coins without being able to make change for a dollar.',
  'The numbers \'172\' can be found on the back of the U.S. $5 dollar bill in the bushes at the base of the Lincoln Memorial.',
  'President Kennedy was the fastest random speaker in the world with upwards of 350 words per minute.',
  'In the average lifetime, a person will walk the equivalent of 5 times around the equator.',
  'Odontophobia is the fear of teeth.',
  'The 57 on Heinz ketchup bottles represents the number of varieties of pickles the company once had.',
  'In the early days of the telephone, operators would pick up a call and use the phrase, \"Well, are you there?\". It wasn\'t until 1895 that someone suggested answering the phone with the phrase \"number please?\"',
  'The surface area of an average-sized brick is 79 cm squared.',
  'According to suicide statistics, Monday is the favored day for self-destruction.',
  'Cats sleep 16 to 18 hours per day.',
  'The most common name in the world is Mohammed.',
  'It is believed that Shakespeare was 46 around the time that the King James Version of the Bible was written. In Psalms 46, the 46th word from the first word is shake and the 46th word from the last word is spear.',
  'Karoke means \"empty orchestra\" in Japanese.',
  'The Eisenhower interstate system requires that one mile in every five must be straight. These straight sections are usable as airstrips in times of war or other emergencies.',
  'The first known contraceptive was crocodile dung, used by Egyptians in 2000 B.C.',
  'Rhode Island is the smallest state with the longest name. The official name, used on all state documents, is \"Rhode Island and Providence Plantations.\"',
  'When you die your hair still grows for a couple of months.',
  'There are two credit cards for every person in the United States.',
  'Isaac Asimov is the only author to have a book in every Dewey-decimal category.',
  'The newspaper serving Frostbite Falls, Minnesota, the home of Rocky and Bullwinkle, is the Picayune Intellegence.',
  'It would take 11 Empire State Buildings, stacked one on top of the other, to measure the Gulf of Mexico at its deepest point.',
  'The first person selected as the Time Magazine Man of the Year - Charles Lindbergh in 1927.',
  'The most money ever paid for a cow in an auction was $1.3 million.',
  'It took Leo Tolstoy six years to write \"War & Peace\".',
  'The Neanderthal\'s brain was bigger than yours is.',
  'On the new hundred dollar bill the time on the clock tower of Independence Hall is 4:10.',
  'Each of the suits on a deck of cards represents the four major pillars of the economy in the middle ages: heart represented the Church, spades represented the military, clubs represented agriculture, and diamonds represented the merchant class.',
  'The names of the two stone lions in front of the New York Public Library are Patience and Fortitude. They were named by then-mayor Fiorello LaGuardia.',
  'The Main Library at Indiana University sinks over an inch every year because when it was built, engineers failed to take into account the weight of all the books that would occupy the building.',
  'The sound of E.T. walking was made by someone squishing her hands in jelly.',
  'Lucy and Linus (who where brother and sister) had another little brother named Rerun. (He sometimes played left-field on Charlie Brown\'s baseball team, [when he could find it.]).',
  'The pancreas produces Insulin.',
  '1 in 5,000 north Atlantic lobsters are born bright blue.',
  'There are 10 human body parts that are only 3 letters long (eye hip arm leg ear toe jaw rib lip gum).',
  'A skunk\'s smell can be detected by a human a mile away.',
  'The word \"lethologica\" describes the state of not being able to remember the word you want.',
  'The king of hearts is the only king without a moustache.',
  'Henry Ford produced the model T only in black because the black paint available at the time was the fastest to dry.',
  'Mario, of Super Mario Bros. fame, appeared in the 1981 arcade game, Donkey Kong. His original name was Jumpman, but was changed to Mario to honor the Nintendo of America\'s landlord, Mario Segali.',
  'The three best-known western names in China: Jesus Christ, Richard Nixon, and Elvis Presley.',
  'Every year about 98% of the atoms in your body are replaced.',
  'Elephants are the only mammals that can\'t jump.',
  'The international telephone dialing code for Antarctica is 672.',
  'World Tourist day is observed on September 27.',
  'Women are 37% more likely to go to a psychiatrist than men are.',
  'The human heart creates enough pressure to squirt blood 30 feet (9 m).',
  'Diet Coke was only invented in 1982.',
  'There are more than 1,700 references to gems and precious stones in the King James translation of the Bible.',
  'When snakes are born with two heads, they fight each other for food.',
  'Turning a clock\'s hands counterclockwise while setting it is not necessarily harmful. It is only damaging when the timepiece contains a chiming mechanism.',
  'There are twice as many kangaroos in Australia as there are people. The kangaroo population is estimated at about 40 million.',
  'Police dogs are trained to react to commands in a foreign language; commonly German but more recently Hungarian.',
  'The Australian $5 to $100 notes are made of plastic.',
  'St. Stephen is the patron saint of bricklayers.',
  'The average person makes about 1,140 telephone calls each year.',
  'Stressed is Desserts spelled backwards.',
  'If you had enough water to fill one million goldfish bowls, you could fill an entire stadium.',
  'Mary Stuart became Queen of Scotland when she was only six days old.',
  'Charlie Brown\'s father was a barber.',
  'Flying from London to New York by Concord, due to the time zones crossed, you can arrive 2 hours before you leave.',
  'Dentists have recommended that a toothbrush be kept at least 6 feet (2 m) away from a toilet to avoid airborne particles resulting from the flush.',
  'You burn more calories sleeping than you do watching TV.',
  'A lion\'s roar can be heard from five miles away.',
  'The citrus soda 7-UP was created in 1929; \"7\" was selected because the original containers were 7 ounces. \"UP\" indicated the direction of the bubbles.',
  'Canadian researchers have found that Einstein\'s brain was 15% wider than normal.',
  'The average person spends about 2 years on the phone in a lifetime.',
  'The fist product to have a bar code was Wrigleys gum.',
  'The largest number of children born to one woman is recorded at 69. From 1725-1765, a Russian peasant woman gave birth to 16 sets of twins, 7 sets of triplets, and 4 sets of quadruplets.',
  'Beatrix Potter created the first of her legendary \"Peter Rabbit\" children\'s stories in 1902.',
  'In ancient Rome, it was considered a sign of leadership to be born with a crooked nose.',
  'The word \"nerd\" was first coined by Dr. Seuss in \"If I Ran the Zoo.\"',
  'A 41-gun salute is the traditional salute to a royal birth in Great Britain.',
  'The bagpipe was originally made from the whole skin of a dead sheep.',
  'The roar that we hear when we place a seashell next to our ear is not the ocean, but rather the sound of blood surging through the veins in the ear. Any cup-shaped object placed over the ear produces the same effect.',
  'Revolvers cannot be silenced because of all the noisy gasses which escape the cylinder gap at the rear of the barrel.',
  'Liberace Museum has a mirror-plated Rolls Royce; jewel-encrusted capes, and the largest rhinestone in the world, weighing 59 pounds and almost a foot in diameter.',
  'A car that shifts manually gets 2 miles more per gallon of gas than a car with automatic shift.',
  'Cats can hear ultrasound.',
  'Dueling is legal in Paraguay as long as both parties are registered blood donors.',
  'The highest point in Pennsylvania is lower than the lowest point in Colorado.',
  'The United States has never lost a war in which mules were used.',
  'Children grow faster in the springtime.',
  'On average, there are 178 sesame seeds on each McDonalds BigMac bun.',
  'Paul Revere rode on a horse that belonged to Deacon Larkin.',
  'The Baby Ruth candy bar was actually named after Grover Cleveland\'s baby daughter, Ruth.',
  'Minus 40 degrees Celsius is exactly the same as minus 40 degrees Fahrenheit.',
  'Clans of long ago that wanted to get rid of unwanted people without killing them used to burn their houses down -- hence the expression \"to get fired\"',
  'Nobody knows who built the Taj Mahal. The names of the architects, masons, and designers that have come down to us have all proved to be latter-day inventions, and there is no evidence to indicate who the real creators were.',
  'Every human spent about half an hour as a single cell.',
  '7.5 million toothpicks can be created from a cord of wood.',
  'The plastic things on the end of shoelaces are called aglets.',
  'The earliest recorded case of a man giving up smoking was on April 5, 1679, when Johan Katsu, Sheriff of Turku, Finland, wrote in his diary \"I quit smoking tobacco.\" He died one month later.',
  '\"Goodbye\" came from \"God bye\" which came from \"God be with you.\"',
  'February is Black History Month.',
  'Jane Barbie was the woman who did the voice recordings for the Bell System.',
  'The first drive-in service station in the United States was opened by Gulf Oil Company - on December 1, 1913, in Pittsburgh, Pennsylvania.',
  'The elephant is the only animal with 4 knees.',
  'Kansas state law requires pedestrians crossing the highways at night to wear tail lights.',
  'When the show \"Friends\" debuted, People Magazine gave it a D+ rating and Time magazine called the cast \"dysfunctional morons.\"',
  'Gun sales in the U.S. actually increase after mass shootings.',
  'Banging your head against a wall burns 150 calories an hour.',
  'In the UK, it is illegal to eat mince pies on Christmas Day.',
  'Pteronophobia is the fear of being tickled by feathers.',
  'When hippos are upset, their sweat turns red.',
  'A flock of crows is known as a murder.',
  '\"Facebook Addiction Disorder\" is a mental disorder identified by psychologists.',
  'The average woman uses her height in lipstick every 5 years.',
  '29th May is officially \"Put a Pillow on Your Fridge Day\".',
  'Cherophobia is the fear of fun.',
  'Human saliva has a boiling point three times that of regular water.',
  'If you lift a kangaroo\'s tail off the ground it can\'t hop.',
  'Hyphephilia are people who get aroused by touching fabrics.',
  'Billy goats urinate on their own heads to smell more attractive to females.',
  'The person who invented the Frisbee was cremated and made into frisbees after he died.',
  'During your lifetime, you will produce enough saliva to fill two swimming pools.',
  'An eagle can kill a young deer and fly away with it.',
  'Polar bears can eat as many as 86 penguins in a single sitting.',
  'King Henry VIII slept with a gigantic axe beside him.',
  'Bikinis and tampons invented by men.',
  'If Pinokio says \"My Nose Will Grow Now\", it would cause a paradox.',
  'Heart attacks are more likely to happen on a Monday.',
  'If you consistently fart for 6 years & 9 months, enough gas is produced to create the energy of an atomic bomb.',
  'An average person\'s yearly fast food intake will contain 12 pubic hairs.',
  'The top six foods that make your fart are beans, corn, bell peppers, cauliflower, cabbage and milk.',
  'There is a species of spider called the Hobo Spider.',
  'All the swans in England are property of the Queen.',
  'The town of Calma, Chile in the Atacama Desert has never had rain.',
  'Cleveland spelled backwards is DNA level C.',
  'Winston Churchill was born in a ladies room during a dance.',
  'A normal raindrop falls at about 7 miles per hour.',
  'The average person falls asleep in seven minutes.',
  'There are 336 dimples on a regulation golf ball.',
  '\"Stewardesses\" is the longest word that is typed with only the left hand.',
  'The \"pound\" key on your keyboard (#) is called an octotroph.',
  'The only domestic animal not mentioned in the Bible is the cat.',
  'During his entire life, Vincent Van Gogh sold exactly one painting, \"Red Vineyard at Arles\".',
  'Certain species of male butterflies produce scents that serve in attracting females during courtship.',
  'There are no clocks in Las Vegas gambling casinos.',
  'Male bees will try to attract sex partners with orchid fragrance.',
  'On a Canadian two-dollar bill, the American flag is flying over the Parliament Building.',
  'In the Arctic, the sun sometimes appears to be square.',
  'Non-dairy creamer is flammable.',
  'Camels have three eyelids.',
  'The average person laughs 10 times a day.',
  'A healthy (non-colorblind) human eye can distinguish between 500 shades of gray.',
  'A syzygy occurs when three atronomical bodies line up.',
  'Your heart beats over 100,000 times a day.',
  'The Beetham Tower has 47 floors.',
  'A duck\'s quack doesn\'t echo, and no one knows why.',
  'Elwood Edwards did the voice for the AOL sound files (i.e. \"You\'ve got Mail.\").',
  'Americans are responsible for about 1/5 of the world\'s garbage annually.',
  'Lizards can self-amputate their tails for protection. It grows back after a few months.',
  'The most frequently named bugs from the Bible are: Locust: 24, Moth: 11, Grasshopper: 10, Scorpion: 10, Caterpillar: 9, and Bee: 4.',
  'Our eyes are always the same size from birth, but our nose and ears never stop growing.',
  'In Utah, it is illegal to swear in front of a dead person.',
  'Due to precipitation, for a few weeks, K2 is taller than Mt. Everest.',
  'A scholar who studies the Marquis de Sade is called a Sadian not a Sadist.',
  'What is called a \"French kiss\" in the English speaking world is known as an \"English kiss\" in France.',
  'It\'s estimated that at any one time around 0.7% of the world\'s population is drunk.',
  'Like fingerprints, everyone\'s tongue print is different.',
  'Everyday, more money is printed for Monopoly sets than for the U.S. Treasury.',
  'There is a hotel in Sweden built entirely out of ice; it is rebuilt every year.',
  'Intelligent people have more zinc and copper in their hair.',
  'The average talker sprays about 300 microscopic saliva droplets per minute, about 2.5 droplets per word.',
  'The Earth experiences 50,000 Earthquakes per year and is hit by Lightning 100 times a second.',
  'Every year 11,000 Americans injure themselves while trying out bizarre sexual positions.',
  'If we had the same mortality rate now as in 1900, more than half the people in the world today would not be alive.',
  'On average, Americans eat 18 acres of pizza everyday.',
  'The Romans used to make toothpaste from urine.',
  'Catfish are the only animals that naturally have an odd number of whiskers.',
  'Your ribs move about 5 million times a year, everytime you breathe.',
  'Nutmeg is extremely poisonous if injected intravenously',
  'A cockroach will live nine days without it\'s head, before it starves to death.',
  'A species of earthworm in Australia grows up to 10 feet in length.',
  'A female swine, or a sow, will always have a even number of teats or nipples, usually twelve.',
  'It takes 8.5 minutes for light to get from the sun to earth.',
  'Lightning strikes the earth about 8 million times a day.',
  'The airplane Buddy Holly died in the \"American Pie.\" (Thus the name of the Don McLean song.)',
  'Golf courses cover 4% of North America.',
  'The average person will accidentally eat just under a pound of insects every year.',
  'Until 1994, world maps and globes sold in Albania only had Albania on them.',
  'The only real person to be a Pez head was Betsy Ross.',
  'When the University of Nebraska Cornhuskers play football at home, the stadium becomes the state\'s third largest city.',
  'A dragonfly has a lifespan of 24 hours.',
  'A goldfish has a memory span of three seconds.',
  'A dime has 118 ridges around the edge.',
  'If you yelled for 8 years, 7 months and 6 days, you would have produced enough sound energy to heat one cup of coffee.',
  'The strongest muscle in proportion to its size in the human body is the tongue.',
  'Every time you lick a stamp, you\'re consuming 1/10 of a calorie.',
  'The human heart creates enough pressure when it pumps out to the body to squirt blood 30 feet.',
  'Banging your head against a wall uses 150 calories an hour.',
  'It takes a sloth two weeks to digest the food it eats.',
  '2,000 pounds of space dust and other space debris fall on the Earth everyday.',
  'Sherlock Holmes NEVER said, \"Elementary, my dear Watson.\"',
  'God is not mentioned once in the book of Esther.',
  'The skeleton of Jeremy Bentham is present at all important meetings of the University of London',
  'Orville Wright was involved in the first aircraft accident. His passenger, a Frenchman, was killed.',
  'Andorra, a tiny country between France & Spain, has the longest average lifespan: 83.49 years.',
  'All porcupines float in water.',
  'Ever wonder where the phrase two bits came from? Some coins used in the American colonies before the Revolutionary War were Spanish dollars, which could be cut into pieces, or bits. Since two pieces equaled one-fourth dollar, the expression two bits came into being as a name for 25 cents.',
  'Paraskevidekatriaphobia means fear of Friday the 13th, which occurs one to three times a year.',
  'The average raindrop falls at 7 miles per hour.',
  'Rats and horses can\'t vomit.',
  'Netherlands is the only country with a national dog.',
  'Ancient Egyptian priests would pluck every hair from their bodies.',
  'About seven million cars are junked each year in the U.S.',
  'A rodents teeth never stop growing. They are worn down by the animal\'s constant gnawing on bark, leaves, and other vegetables.',
  'Camel\'s milk does not curdle.',
  'American Airlines saved $40,000 in 1987 by eliminating one olive from each salad served in first class.',
  'In 1933, Mickey Mouse, an animated cartoon character, received 800,000 fan letters.',
  'Flies jump backwards during takeoff.',
  'Benjamin Franklin was the fifth in a series of the youngest son of the youngest son.',
  'Human thigh bones are stronger than concrete.',
  'The people of Israel consume more turkeys per capita than any other country.',
  'In Quebec, there is an old law that states margarine must be a different color than butter.',
  'A \"quidnunc\" is a person who is eager to know the latest news and gossip.',
  'It\'s possible to lead a cow upstairs…but not downstairs.',
  'Human thighbones are stronger than concrete.',
  'A group of hares is called a Husk.',
  'There are more than 10 million bricks in the Empire State Building.',
  'Dreamt is the only English word that ends in the letters \"MT\".',
  'In New York State, it is illegal to but any alcohol on Sundays before noon.',
  '98% of Japanese are cremated.',
  'For every \'normal\' webpage, there are five porn pages.',
  'Arnold Schonberg suffered from triskaidecphobia, the fear of the number 13. He died 13 minutes from midnight on Friday the 13th.',
  'Montpelier, Vermont is the only state capital without a McDonalds.',
  'A cow gives nearly 200,000 glasses of milk in her lifetime.',
  'Cuba is the only island in the Caribbean to have a railroad.',
  'Earthworms have 5 hearts.',
  'People say \"bless you\" when you sneeze because your heart stops for a millisecond.',
  '\"Duff\" is the decaying organic matter found on a forest floor.',
  'It is impossible to drown and not die. Technically the term \'drowning\' refers to the process of taking water into the lungs, not to death caused by that process.',
  'Camels have three eyelids to protect themselves from blowing sand.',
  '11% of the world is left-handed.',
  'The Falkland Isles (pop. about 2000) has over 700000 sheep (350 per person).',
  'The average Japanese household watches more than 10 hours of television a day.',
  'The Brimstone butterfly (Gonepterix rhamni) has the longest lifetime of the adult butterflies: 9-10 months.',
  'A female ferret will die if it goes into heat and cannot find a mate.',
  'A full moon is nine times brighter than a half moon.',
  'An average human loses about 200 head hairs per day.',
  'Dartboards are made out of horse hairs.',
  'On average, 2 newborns will be given to the wrong parents every day.',
  'In the U.S, Frisbees outsell footballs, baseballs and basketballs combined.',
  'The human body is comprised of 80% water.',
  'Despite a population of over a billion, China has only about 200 family names.',
  'Buckingham Palace has 602 rooms.',
  'Beethoven dipped his head in cold water before he composed.',
  'The Olympic was the sister ship of the Titanic, and she provided twenty-five years of service.',
  'Your ribs move about 5 million times a year, every time you breathe.',
  'Starfish have no brains.',
  'The national anthem of Greece has 158 verses.',
  'During it\'s lifetime an oyster changes its sex from male to female and back several times.',
  'Cephalacaudal recapitulation is the reason our extremities develop faster than the rest of us.',
  'Nutmeg is extremely poisonous if injected intravenously.',
  'Daniel Boone hated coonskin caps.',
  'More people speak English in China than the United States.',
  'Butterflies taste with their hind feet.',
  '1 in 5 of the world\'s doctors are Russian.',
  'Rape is reported every six minutes in the U.S.',
  'Two-thirds of the world\'s eggplant is grown in New Jersey.',
  'Olympus Mons is the largest volcano in our solar system.',
  'Venus is the only planet that rotates clockwise.',
  'In space you cannot cry because there is no gravity to make the tears flow.',
  'Elephants have the longest pregnancy in the animal kingdom at 22 months. The longest human pregnancy on record is 17 months, 11 days.',
  'California consumes more bottled water than any other product.',
  'In 1936, American track star Jesse Owens beat a race horse over a 100-yard course. The horse was given a head start.',
  //SWERVE.
  'I place the good of the Vault above everything, even my own paternal feelings. We must not allow sentiment to cloud our judgment! But I admire your protective instincts. Very well. I give you my word that Amata will not suffer further because of your actions. Now then. If you really care about Amata, you will see how dangerous your father\'s actions were. Hand over your weapons, and put an end to this dangerous situation. There\'s no need to join your father as a traitor to the Vault.',
  'And you expect me to believe that the only way to do that is to let them travel out in the Wastes and mingle with those savages? I suppose it would allow them to stay alive, and we could still keep the Vault as our safe haven. But it\'d require a new type of leader. And I know only one person with the proper attitude to do that. I\'ll inform my daughter Amata that she is the new Overseer, effective immediately.',
  'Really? And here I had expected you to be full of bullets and bravado, but short on brains. Perhaps you\'ve grown up since you left our Vault. I regret the unfortunate events of that night, but I\'m afraid that once your father left us, they were unavoidable. The sad truth is that his actions presented a real and direct threat to the future success of our Vault. And so, regrettably, they had to be opposed.',
  'And what makes you so certain about that? I can\'t imagine you\'re still so naive after spending time in that hell outside. None of them know what the outside is like, and most of them would die out there. Then the rest of us inside would eventually die out, too. I won\'t risk all of our lives just for few people\'s passing fancy of taking a Wasteland vacation. I hope you can understand that.',
  //DEFLECT.
  'The Unity will bring about the master race. Master! Master! One able to survive, or even thrive, in the wasteland. As long as there are differences, we will tear ourselves apart! fighting each other. We need one race. Race! Race! One goal! Goal! Goal! One people... to move forward to our destiny. Destiny.',
  'We are all biased, are we not? We each care more about our individual communities than other people. We haven\'t changed. And I\'ll tell you something else... We won\'t change. Not unless we are of one people. One. One! One. One race. One. One! One. The Unity will allow us to move beyond these petty concerns, and deal with the major problems at hand. You do want to be a part of that, don\'t you? Part. Don\'t!',
  'You think you can destroy me?! Destroy! Me?',
  'So what shall it be. Do you join the unity? Or do you die here? Join! Die! Join! Die!',
  // random shit pt1
  'Most American car horns honk in the key of F.',
  'The name Wendy was made up for the book \"Peter Pan.\"',
  'Barbie\'s full name is Barbara Millicent Roberts.',
  'Every time you lick a stamp, you consume 1/10 of a calorie.',
  'Studies show that if a cat falls off the seventh floor of a building it has about thirty percent less chance of surviving than a cat that falls off the twentieth floor. It supposedly takes about eight floors for the cat to realize what is occurring, relax and correct itself.',
  'Your stomach has to produce a new layer of mucus every 2 weeks otherwise it will digest itself.',
  'The citrus soda 7-UP was created in 1929; \'7\' was selected after the original 7-ounce containers and \'UP\' for the direction of the bubbles.',
  '101 Dalmatians, Peter Pan, Lady and the Tramp, and Mulan are the only Disney cartoons where both parents are present and don\'t die throughout the movie.  .',
  'To escape the grip of a crocodile\'s jaws, push your thumbs into its eyeballs - it will let you go instantly.',
  'Reindeer like to eat bananas.',
  'No word in the English language rhymes with month, orange, silver and purple.',
  'The word \"samba\" means \"to rub navels together.\"',
  'Mel Blanc (the voice of Bugs Bunny) was allergic to carrots.',
  'The electric chair was invented by a dentist.',
  'The very first bomb dropped by the Allies on Berlin during World War II Killed the only elephant in the Berlin Zoo.',
  'More people are killed annually by donkeys than airplane crashes.',
  'A \'jiffy\' is a unit of time for 1/100th of a second.',
  'A whale\'s penis is called a dork.',
  'Because of the rotation of the earth, an object can be thrown farther if it is thrown west.',
  'The average person spends 6 months of their life sitting at red lights.',
  'In 1912 a law passed in Nebraska where drivers in the country at night were required to stop every 150 yards, send up a skyrocket, wait eight minutes for the road to clear before proceeding cautiously, all the while blowing their horn and shooting off flares.',
  'More Monopoly money is printed in a year, than real money throughout the world.',
  'Caesar salad has nothing to do with any of the Caesars. It was first concocted in a bar in Tijuana, Mexico, in the 1920\'s.',
  'One quarter of the bones in your body are in your feet.',
  'Crocodiles and alligators are surprisingly fast on land. Although they are rapid, they are not agile. So, if being chased by one, run in a zigzag line to lose him or her.',
  'Seattle’s Fremont Bridge rises up and down more than any drawbridge in the world.',
  'Right-handed people live, on average; nine years longer than left handed people.',
  'Ten percent of the Russian government\'s income comes from the sale of vodka.',
  'In the United States, a pound of potato chips costs two hundred times more than a pound of potatoes.',
  'A giraffe can go without water longer than a camel.',
  'A person cannot taste food unless it is mixed with saliva. For example, if a strong-tasting substance like salt is placed on a dry tongue, the taste buds will not be able to taste it. As soon as a drop of saliva is added and the salt is dissolved, however, a definite taste sensation results. This is true for all foods.',
  'Nearly 80% of all animals on earth have six legs.',
  'In the marriage ceremony of the ancient Inca Indians of Peru, the couple was considered officially wed when they took off their sandals and handed them to each other.',
  'Ninety percent of all species that have become extinct have been birds.',
  'There is approximately one chicken for every human being in the world.',
  'Most collect calls are made on father\'s day.',
  'The first automobile race ever seen in the United States was held in Chicago in 1895. The track ran from Chicago to Evanston, Illinois. The winner was J. Frank Duryea, whose average speed was 71/2 miles per hour.',
  'Each of us generates about 3.5 pounds of rubbish a day, most of it paper.',
  'Women manage the money and pay the bills in  75% of all Americans households.',
  'A rainbow can be seen only in the morning or late afternoon. It can occur only when the sun is 40 degrees or less above the horizon.',
  'It has NEVER rained in Calama, a town in the Atacama Desert of Chile.',
  'It costs more to buy a new car today in the United States than it cost Christopher Columbus to equip and undertake three voyages to and from the New World.',
  'An eighteenth-century German named Matthew Birchinger, known as \"the little man of Nuremberg,\" played four musical instruments including the bagpipes, was an expert calligrapher, and was the most famous stage magician of his day. He performed tricks with the cup and balls that have never been explained. Yet Birchinger had no hands, legs, or thighs, and was less than 29 inches tall.',
  'Daylight Saving Time is not observed in most of the state of Arizona and parts of Indiana.',
  'Ants closely resemble human manners: When they wake, they stretch & appear to yawn in a human manner before taking up the tasks of the day.',
  'Bees have 5 eyes. There are 3 small eyes on the top of a bee\'s head and 2 larger ones in front.',
  'Count the number of cricket chirps in a 15-second period, add 37 to the total, and your result will be very close to the actual outdoor Fahrenheit temperature.',
  'One-fourth of the world\'s population lives on less than $200 a year. Ninety million people survive on less than $75 a year.',
  'Only female mosquito’s\' bite and most are attracted to the color blue twice as much as to any other color.',
  'If one places a tiny amount of liquor on a scorpion, it will instantly go mad and sting itself to death.',
  'It is illegal to hunt camels in the state of Arizona.',
  'In eighteenth-century English gambling dens, there was an employee whose only job was to swallow the dice if there was a police raid.',
  'The human tongue tastes bitter things with the taste buds toward the back. Salty and pungent flavors are tasted in the middle of the tongue, sweet flavors at the tip.',
  'The first product to have a bar code was Wrigley’s gum. [link]',
  'When you sneeze, air and particles travel through the nostrils at speeds over 100 mph. During this time, all bodily functions stop, including your heart, contributing to the impossibility of keeping one\'s eyes open during a sneeze.',
  'Annual growth of WWW traffic is 314,000%',
  '%60 of all people using the Internet, use it for pornography.',
  'In 1778, fashionable women of Paris never went out in blustery weather without a lightning rod attached to their hats.',
  'Sex burns 360 calories per hour. [link]',
  'A raisin dropped in a glass of fresh champagne will bounce up and down continually from the bottom of the glass to the top.',
  'Celery has negative calories. It takes more calories to eat a piece of celery than the celery has in it.',
  'The average lead pencil will draw a line 35 miles long or write approximately 50,000 English words. More than 2 billion pencils are manufactured each year in the United States. If these were laid end to end they would circle the world nine times.',
  'The pop you hear when you crack your knuckles is actually a bubble of gas burning.',
  'A literal translation of a standard traffic sign in China: \"Give large space to the festive dog that makes sport in the roadway.\"',
  'Larry Lewis ran the 100-yard dash in 17.8 seconds in 1969, thereby setting a new world\'s record for runners in the 100-years-or-older class. He was 101.',
  'In a lifetime the average human produces enough quarts of spit to fill 2 swimming pools.',
  'It\'s against the law to doze off under a hair dryer in Florida/against the law to slap an old friend on the back in Georgia/against the law to Play hopscotch on a Sunday in Missouri.',
  'Barbie\'s measurements, if she were life-size, would be 39-29-33.',
  'The human heart creates enough pressure to squirt blood 30ft.',
  'One third of all cancers are sun related.',
  'THE MOST UNUSUAL CANNONBALL: On two occasions, Miss \'Rita Thunderbird\' remained inside the cannon despite a lot of gunpowder encouragement to do otherwise. She performed in a gold lamé bikini and on one of the two occasions (1977) Miss Thunderbird remained lodged in the cannon, while her bra was shot across the Thames River.',
  'It has been estimated that humans use only 10% of their brain.',
  'Valentine Tapley from Pike County, Missouri grew chin whiskers attaining a length of twelve feet six inches from 1860 until his death 1910, protesting Abraham Lincoln\'s election to the presidency.',
  'Most Egyptians died by the time they were 30 about 300 years ago,',
  'For some time Frederic Chopin, the composer and pianist, wore a beard on only one side of his face, explaining: \"It does not matter, my audience sees only my right side.\"',
  '1 in every 4 Americans has appeared someway or another on television.',
  '1 in 8 Americans has worked at a McDonalds restaurant.',
  '70% of all boats sold are used for fishing.',
  'Studies have shown that children laugh an average of 300 times/day and adults 17 times/day, making the average child more optimistic, curious, and creative than the adult.',
  'A pregnant goldfish is called a twit.',
  'The shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after 38 minutes. [link]',
  'You were born with 300 bones, but by the time you are an adult you will only have 206.',
  'If you go blind in one eye you only lose about one fifth of your vision but all your sense of depth.',
  'Women blink nearly twice as much as men.',
  'The strongest muscle (Relative to size) in the body is the tongue.',
  'A Boeing 747\'s wingspan is longer than the Wright brother\'s first flight.',
  'American Airlines saved $40,000 in 1987 by eliminating one olive from each salad served in first-class. [link]',
  'Average life span of a major league baseball: 7 pitches.',
  'A palindrome is a sentence or group of sentences that reads the same backwards as it does forward: Ex:  \'Red rum, sir, is murder.\' \'Ma is as selfless as I am.\' \'Nurse, I spy gypsies. Run.\'  \'A man, a plan, a canal - Panama.\' \'He lived as a devil, eh?\'',
  'The first CD pressed in the US was Bruce Springsteen\'s \'Born in the USA\'',
  'In 1986 Congress & President Ronald Reagan signed Public Law 99-359, which changed Daylight Saving Time from the last Sunday in April to the first Sunday in April. It was estimated to save the nation about 300,000 barrels of oil each year by adding most of the month April to D.S.T.',
  'The thumbnail grows the slowest, the middle nail the fastest, nearly 4 times faster than toenails.',
  'The Human eyes never grow, but nose and ears never stop growing.',
  'The 57 on Heinz ketchup bottles represents the number of varieties of pickles the company once had. [link]',
  'Tom Sawyer was the first novel written on a typewriter.',
  'If Texas were a country, its GNP would be the fifth largest of any country in the world.',
  'There are 1 million ants for every human in the world.',
  'Odds of being killed by lightening? 1 in 2million/killed in a car crash? 1 in 5,000/killed by falling out of bed? 1 in 2million/killed in a plane crash? 1 in 25 million.',
  'Since 1978, 37 people have died by vending machines falling on them. 13 people are killed annually. All this while trying to shake merchandise out of them. 113 people have been injured.',
  'Half the foods eaten throughout the world today were developed by farmers in the Andes Mountains (including potatoes, maize, sweet potatoes, squash, all varieties of beans, peanuts, manioc, papayas, strawberries, mulberries and many others).',
  'The \'Golden Arches\' of fast food chain McDonalds is more recognized worldwide than the religious cross of Christianity.',
  'Former basketball superstar Michael Jordan is the most recognized face in the world, more than the pope himself.',
  'The Earth experiences 50,000 Earth quakes per year and is hit by Lightning 100 times a second.',
  'Researchers at the Texas Department of Highways in Fort Worth determined the cow population of the U.S. burps some 50 million tons of valuable hydrocarbons into the atmosphere each year. The accumulated burps of ten average cows could keep a small house adequately heated and its stove operating for a year.',
  'During a severe windstorm or rainstorm the Empire State Building sways several feet to either side.',
  'In the last 3,500 years, there have been approximately 230 years of peace throughout the civilized world.',
  'The Black Death reduced the population of Europe by one third in the period from 1347 to 1351.',
  'The average person spends about two years on the phone in a lifetime.',
  'Length of beard an average man would grow if he never shaved 27.5 feet.',
  'Over 60% of all those who marry get divorced.',
  '400-quarter pounders can be made from 1 cow.',
  'A full-loaded supertanker traveling at normal speed takes at least 20 minutes to stop.',
  'Coca-Cola was originally green.',
  'Men can read smaller print than women; women can hear better.',
  'Hong Kong holds the most Rolls Royce’s per capita.',
  'Average number of days a West German goes without washing his underwear: 7',
  'WWII fighter pilots in the South Pacific armed their airplanes while stationed with .50 caliber machine gun ammo belts measuring 27 feet before being loaded into the fuselage. If the pilots fired all their ammo at a target, he went through \"the whole 9 yards\", hence the term.',
  'Average number of people airborne over the US any given hour: 61,000.',
  'Iceland consumes more Coca-Cola per capita than any other nation.',
  'In the early 1940s, the FCC assigned television\'s Channel 1 to mobile services (like two-way radios in taxis) but did not re-number the other channel assignments.',
  'The San Francisco Cable cars are the only mobile National Monuments.',
  'Firehouses have circular stairways originating from the old days when the engines were pulled by horses. The horses were stabled on the ground floor and figured out how to walk up straight staircases.',
  '111,111,111 x 111,111,111 = 12,345,678,987,654,321',
  'Statues in parks: If the horse has both front legs in the air, the person died in battle; if the horse has one front leg in the air, the person died as a result of wounds received in battle; if the horse has all four legs on the ground, the person died of natural causes.',
  'The expression \'to get fired\' comes from long ago Clans that wanted to get rid of unwanted people, so they would burn their houses instead of killing them, creating the term \'Got fired\'.',
  '\"I am.\" is the shortest complete sentence in the English language.',
  'Hershey\'s Kisses are called that because the machine that makes them looks like it\'s kissing the conveyor belt.',
  'The phrase \"rule of thumb\" is derived from an old English law, which stated that you couldn\'t beat your wife with anything wider than your thumb.',
  'The longest recorded flight of a chicken is thirteen seconds.',
  'The Eisenhower interstate system requires that one mile in every five must be straight in case of war or emergency, they could be used as airstrips.',
  'The name Jeep came from the abbreviation used in the army. G.P. for \'General Purpose\' vehicle.',
  'The Pentagon, in Arlington, Virginia, has twice as many bathrooms as is necessary, because when it was built in the 1940s, the state of Virginia still had segregation laws requiring separate toilet facilities for blacks and whites.',
  'The cruise liner, Queen Elizabeth II, moves only six inches for each gallon of diesel that it burns.',
  'If you have three quarters, four dimes, and four pennies, you have $1.19, the largest amount of money in coins without being able to make change for a dollar.',
  'In Aspen Colorado, you can have a maximum income of $104,000 and still receive government subsidized housing.',
  'Honking of car horns for a couple that just got married is an old superstition to insure great sex.',
  'Dr. Kellogg introduced Kellogg\'s Corn Flakes in hopes that it would reduce masturbation. [link]',
  'The sperm of a mouse is actually longer than the sperm of an elephant.',
  'In medieval France, unfaithful wives were made to chase a chicken through town naked.',
  'The Black Widow spider eats her mate during or after sex.',
  'Napoleon\'s penis was sold to an American Urologist for $40,000. [link]',
  'Eating the heart of a male Partridge was the cure for impotence in ancient Babylon.',
  'A bull can inseminate 300 cows from one single ejaculation.',
  'When a Hawaiian woman wears a flower over her left ear, it means that she is not available.',
  'The \"save\" icon on Microsoft Word shows a floppy disk with the shutter on backwards.',
  'The only nation whose name begins with an \"A\", but doesn\'t end in an \"A\" is Afghanistan.',
  'The following sentence: \'A rough-coated, dough-faced, thoughtful ploughman strode through the streets of Scarborough; after falling into a slough, he coughed and hiccoughed.\' Contains the nine different pronunciations of \"ough\" in the English Language.',
  'The verb \"cleave\" is the only English word with two synonyms which are antonyms of each other: adhere and separate.',
  'The only 15-letter word that can be spelled without repeating a letter is uncopyrightable. [link]',
  'The shape of plant collenchyma’s cells and the shape of the bubbles in beer foam are the same - they are orthotetrachidecahedrons.',
  'Emus and kangaroos cannot walk backwards, and are on the Australian coat of arms for that reason.',
  'Cats have over one hundred vocal sounds, while dogs only have about ten.',
  'Blueberry Jelly Bellies were created especially for Ronald Reagan. [link]',
  'PEZ candy even comes in a Coffee flavor.',
  'The first song played on Armed Forces Radio during operation Desert Shield was \"Rock the Casba\" by the Clash. [link]',
  'Non-dairy creamer is flammable. [link]',
  'The airplane Buddy Holly died in was the \"American Pie.\" (Thus the name of the Don McLean song.)',
  'Each king in a deck of playing cards represents a great king from history. Spades - King David, Clubs - Alexander the Great, Hearts - Charlemagne, and Diamonds - Julius Caesar.',
  'The value of Pi will be officially \"rounded down\" to 3.14 from 3.14159265359 on December 31, 1999.',
  'The Great Wall of China is the only man-made structure visible from space.',
  'A piece of paper can be folded no more then 9 times.',
  'The amount of computer Memory required to run WordPerfect for Win95 is 8 times the amount needed aboard the space shuttle.',
  'The average North American will eat 35,000 cookies during their life span.',
  'Between 25% and 33% of the population sneeze when exposed to light.',
  'The most common name in world is Mohammed.',
  'Mount Olympus Mons on Mars is three times the size of Mount Everest.',
  'Most toilets flush in E flat.',
  '2,000 pounds of space dust and other space debris fall on the Earth every day.',
  'Each month, there is at least one report of UFOs from each province of Canada.',
  '40,000 Americans are injured by toilets each year.',
  'You can be fined up to $1,000 for whistling on Sunday in Salt Lake City, Utah.',
  'It takes about 142.18 licks to reach the center of a Tootsie pop.',
  'The serial number of the first MAC ever produced was 2001.',
  'It is illegal to eat oranges while bathing in California.',
  'If done perfectly, a rubix cube combination can be solved in 17 turns.',
  'The average American butt is 14.9 inches long.',
  'More bullets were fired in \'Starship Troopers\' than any other movie ever made.',
  '60% of electrocutions occur while talking on the telephone during a thunderstorm.',
  'The name of the girl on the statue of liberty is Mother of Exiles. [link]',
  '3.6 cans of Spam are consumed each second.',
  'There\'s a systematic lull in conversation every 7 minutes.',
  'The buzz from an electric razor in America plays in the key of B flat; Key of G in England.',
  'There are 1,575 steps from the ground floor to the top of the Empire State building. [link]',
  'The world\'s record for keeping a Lifesaver in the mouth with the hole intact is 7 hrs 10 min.',
  'There are 293 ways to make change for a dollar.',
  'The world record for spitting a watermelon seed is 65 feet 4 inches.',
  'In the Philippine jungle, the yo-yo was first used as a weapon.',
  'Texas is also the only state that is allowed to fly its state flag at the same height as the U.S. flag.',
  'The three most recognized Western names in China are Jesus Christ, Richard Nixon, & Elvis Presley.',
  'There is a town in Newfoundland, Canada called Dildo. [link]',
  'The Boston University Bridge (on Commonwealth Avenue, Boston, Massachusetts) is the only place in the world where a boat can sail under a train driving under a car driving under an airplane.',
  'All 50 states are listed across the top of the Lincoln Memorial on the back of the $5 bill.',
  'In space, astronauts are unable to cry, because there is no gravity and the tears won\'t flow.',
  'Chewing gum while peeling onions will keep you from crying.',
  'There are more plastic flamingos in the U.S that there are real ones.',
  'The crack of a whip is actually a tiny sonic boom, since the tip breaks the sound barrier.',
  'Jupiter is bigger than all the other planets in our solar system combined.',
  'Hot water is heavier than cold.',
  'The common idea that only 10% of the brain is used it not true as it is impossible to determine the actual percentage because of the complexity of the brain.',
  'Lawn darts are illegal in Canada.',
  'There are more psychoanalysts per capita in Buenos Aires than any other place in the world.',
  'Between 2 and 3 jockeys are killed each year in horse racing.',
  '5,840 people with pillow related injuries checked into U.S. emergency rooms in 1992.',
  'The average woman consumes 6 lbs of lipstick in her lifetime.',
  'Some individuals express concern sharing their soap, rightly so, considering 75% of all people wash from top to bottom.',
  'Conception occurs most in the month of December.',
  'CBS\' \"60 Minutes\" is the only TV show without a theme song/music.',
  'Half of all Americans live within 50 miles of their birthplace.',
  '\'Obsession\' is the most popular boat name.',
  'On average, Americans\' favorite smell is banana.',
  'If one spells out numbers, they would have to count to One Thousand before coming across the letter \"A\".',
  'Honey is the only food which does not spoil.',
  '3.9% of all women do not wear underwear.',
  'This common everyday occurrence composed of 59% nitrogen, 21% hydrogen, and 9% dioxide is called a \'fart\'.',
  '\"Evaluation and Parameterization of Stability and Safety Performance Characteristics of Two and Three Wheeled Vehicular Toys for Riding.\" Title of a $230,000 research project proposed by the Department of Health, Education and Welfare, to study the various ways children fall off bicycles.',
  'Babies are born without kneecaps. They don\'t appear until the child reaches 2-6 years of age.',
  'Meteorologists claim they\'re right 85% of the time (think about that one.)',
  'In 1980, a Las Vegas hospital suspended workers for betting on when patients would die.',
  'Los Angeles\' full name \'El Pueblo de Nuestra Senora la Reina de Los Angeles de Porciuncula\' is reduced to 3.63% of its size in the abbreviation \'L.A.\'.',
  'If you went out into space, you would explode before you suffocated because there\'s no air pressure.',
  'The only real person to ever to appear on a pez dispenser was Betsy Ross.',
  'Mike Nesmith\'s (the guitarist of The Monkeys) mom invented White Out. [link]',
  'Only 6 people in the whole world have died from moshing.',
  'In a test performed by Canadian scientists, using various different styles of music, it was determined that chickens lay the most eggs when pop music was played.',
  'The storage capacity of human brain exceeds 4 Terabytes.',
  'In Vermont, the ratio of cows to people is 10:1',
  'Any free-moving liquid in outer space will form itself into a sphere, because of its surface tension.',
  'The average American looks at eight houses before buying one.',
  'Koala is Aboriginal for \"no drink\".',
  'Shakespeare spelled his OWN name several different ways.',
  'The first contraceptive was crocodile dung used by the ancient Egyptians.',
  'A signature is called a John Hancock because he signed the Declaration of Independence. Only 2 people signed the declaration of independence on July 4. The Last person signed 2 years later.',
  'Arnold Schonberg suffered from triskaidecaphobia, the fear of the number 13. He died at 13 minutes from midnight on Friday the 13th.',
  'Mozart wrote the nursery rhyme \'twinkle, twinkle, little star\' at the age of 5.',
  'Weatherman Willard Scott was the first original Ronald McDonald. [link]',
  'Virginia Woolf wrote all her books standing.',
  'Einstein couldn\'t speak fluently until after his ninth birthday. His parents thought he was mentally retarded.',
  'Al Capone\'s business card said he was a used furniture dealer.',
  'Deborah Winger did the voice of E.T.',
  'Kelsey Grammar sings and plays the piano for the theme song of Fraiser.',
  'Thomas Edison, acclaimed inventor of the light bulb, was afraid of the dark.',
  'In England, the Speaker of the House is not allowed to speak.',
  'You can sail all the way around the world at latitude 60 degrees south.',
  'The earth weighs around 6,588,000,000,000,000,000,000,000,000 tons.',
  'Peanuts are one of the ingredients of dynamite.',
  'Porcupines can float in water.',
  'The average person\'s left hand does 56% of the typing.',
  'A shark is the only fish that can blink with both eyes.',
  'The longest one-syllable word in the English language is \"screeched.\"',
  'All of the clocks in the movie \"Pulp Fiction\" are stuck on 4:20, a national pot-smokers hour.',
  '\"Dreamt\" is the only English word that ends in the letters \"mt.\"',
  'Almonds are a member of the peach family.',
  'Winston Churchill was born in a ladies\' room during a dance.',
  'Maine is the only state whose name is just one syllable.',
  'Tigers not only have striped fur, they have striped skin.',
  'In most advertisements, including newspapers, the time displayed on a watch is 10:10.',
  'On the ground, a group of geese is a gaggle, in the sky it is a skein.',
  'To Ensure Promptness, one is expected to pay beyond the value of service – hence the later abbreviation: T.I.P.',
  'The characters Bert and Ernie on Sesame Street were named after Bert the cop and Ernie the taxi driver in Frank Capra\'s \"Its A Wonderful Life.\"',
  'On an American one-dollar bill, there is an owl in the upper left-hand corner of the \"1\"encased in the \"shield\" and a spider hidden in the front upper right-hand corner.',
  'The name for Oz in the \"Wizard of Oz\" was thought up when the creator, Frank Baum, looked at his filing cabinet and saw A-N, and O-Z; hence the name \"OZ.\"',
  'The microwave was invented after a researcher walked by a radar tube and a chocolate bar melted in his pocket.',
  'Mr. Rogers is an ordained minister.',
  'John Lennon\'s first girlfriend was named Thelma Pickles.',
  'The scene where Indiana Jones shoots the swordsman in Raider’s of the Lost Ark was Harrison Ford\'s idea so that he could take a bathroom break.',
  'A crocodile cannot stick its tongue out.',
  'A snail can sleep for three years.',
  'All polar bears are left-handed.',
  'China has more English speakers than the United States.',
  'Elephants are the only animals that can\'t jump.',
  'February 1865 is the only month in recorded history not to have a full moon.',
  'If the population of China walked past you in single file, the line would never end because of the rate of reproduction.',
  'If you yelled for 8 years, 7 months and 6 days, you will have produced enough sound energy to heat one cup of coffee.',
  'In the last 4000 years, no new animals have been domesticated.',
  'Leonardo Da Vinci invented the scissors.',
  'The word \"set\" has more definitions than any other word in the English language.',
  'On average, people fear spiders more than they do death.',
  'One of the reasons marijuana is illegal today is because cotton growers in the 1930s lobbied against hemp farmers they saw it as competition.',
  'Shakespeare invented the word \'assassination\' and \'bump\'.',
  'Some lions mate over 50 times a day.',
  'Starfish haven\'t got brains.',
  'The ant always falls over on its right side when intoxicated.',
  'The name of all continents in the world end with the same letter that they start with.',
  'You can\'t kill yourself by holding your breath.',
  'The average person spends 12 weeks a year \'looking for things\'.',
  'The symbol on the \"pound\" key (#) is called an octothorpe..',
  'The dot over the letter \'i\' is called a tittle.',
  'Ingrown toenails are hereditary.',
  '\"Underground\" is the only word in the English language that begins and ends with the letters \"und\"',
  'The longest word in the English language, according to the Oxford English Dictionary, is: pneumonoultramicroscopicsilicovolcanoconiosis..',
  'The longest place-name still in use is: Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiakitnatahu, a New Zealand hill.',
  'Alfred Hitchcock didn\'t have a belly button. It was eliminated when he was sewn up after surgery.',
  'Telly Savalas and Louis Armstrong died on their birthdays.',
  'Donald Duck\'s middle name is Fauntleroy.',
  'The muzzle of a lion is like a fingerprint - no two lions have the same pattern of whiskers.',
  'Steely Dan got their name from a sexual device depicted in the book \'The Naked Lunch\'.',
  'The Ramses brand condom is named after the great pharoh Ramses II who fathered over 160 children.',
  'There is a seven letter word in the English language that contains ten words without rearranging any of its letters, \"therein\": the, there, he, in, rein, her, here, ere, therein, herein.',
  'Cranberries are sorted for ripeness by bouncing them; a fully ripened cranberry can be dribbled like a basketball.',
  'The male gypsy moth can \"smell\" the virgin female gypsy moth from 1.8 miles away.',
  'The letters KGB stand for Komitet Gosudarstvennoy Bezopasnosti.',
  'The word \"dexter\" whose meaning refers to the right hand is typed with only the left hand.',
  'To \"testify\" was based on men in the Roman court swearing to a statement made by swearing on their testicles.',
  'Facetious and abstemious contain all the vowels in the correct order, as does arsenious, meaning \"containing arsenic.\"',
  'The word \"Checkmate\" in chess comes from the Persian phrase \"Shah Mat,\" which means \"the king is dead.\"',
  'The first episode of \"Joanie Loves Chachi\" was the highest rated American program in the history of Korean television, a country where \"Chachi\" translates to \"penis\".',
  'Rubber bands last longer when refrigerated.',
  'The national anthem of Greece has 158 verses. No one in Greece has memorized all 158 verses.',
  'The giant squid has the largest eyes in the world.',
  'Giraffes have no vocal cords.',
  'The pupils of a goat\'s eyes are square.',
  'Van Gogh only sold one painting when he was alive.',
  'A standard slinky measures 87 feet when stretched out.',
  'The highest per capita Jell-O comsumption in the US is Des Moines.',
  'If a rooster can\'t fully extend its neck, it can\'t crow.',
  'There were always 56 curls in Shirley Temple\'s hair.',
  'The eyes of a donkey are positioned so that it can see all four feet at all times.',
  'Worcestershire sauce in essentially an Anchovy Ketchup.',
  'Rhode Island is the only state which the hammer throw is a legal high school sport.',
  'The average lifespan of an eyelash is five months.',
  'A spider has transparent blood.',
  'Every acre of American crops harvested contains 100 pounds of insects.',
  'Prince Charles is an avid collecter of toilet seats.',
  'The most common street name in the U.S. is Second Street.',
  'Tehran is the most expensive city on earth.',
  'The sweat drops drawn in cartoon comic strips are called pleuts.',
  'Babies are most likely to be born on Tuesdays.',
  'The HyperMart outside of Garland Texas has 58 check-outs.',
  'The Minneapolis phone book has 21 pages of Andersons.',
  'In the 1980\'s American migraines increased by 60%.',
  'Poland is the \"stolen car capital of the world\".',
  'Jefferson invented the dumbwaiter, the monetary system, and the folding attic ladder.',
  'The S in Harry S. Truman did not stand for anything.',
  'In Miconesia, coins are 12 feet across.',
  'A horse can look forward with one eye and back with the other.',
  'Shakespeare is quoted 33,150 times in the Oxford English dictionary.',
  'The word Pennsylvania is misspelled on the Liberty Bell.',
  'NBA superstar Michael Jordan was originally cut from his high school basketball team.',
  'You spend 7 years of your life in the bathroom.',
  'A family of 26 could go to the movies in Mexico city for the price of one in Tokyo.',
  '10,000 Dutch cows pass through the Amsterdam airport each year.',
  'Approximately every seven minutes of every day, someone in an aerobics class pulls their hamstring.',
  'Simplistic passwords contribute to over 80% of all computer password break-ins.',
  'The top 3 health-related searches on the Internet are (in this order): Depression, Allergies, & Cancer.',
  'Dentists have recommended that a toothbrush be kept at least 6 feet away from a toilet to avoid airborne particles resulting from the flush.',
  'Most dust particles in your house are made from dead skin.',
  'Oak trees do not produce acorns until they are fifty years of age or older.',
  'The first owner of the Marlboro company died of lung cancer.',
  'All US Presidents have worn glasses; some just didn\'t like being seen wearing them in public.',
  'Mosquito repellents don\'t repel. They hide you. The spray blocks the mosquito\'s sensors so they don\'t know you\'re there.',
  'Walt Disney was afraid of mice.',
  'The site with the highest number of women visitors between the age of 35 and 44 years old: Alka-Seltzer.com.',
  'The king of hearts is the only king without a mustache.',
  'Pearls melt in vinegar.',
  'It takes 3,000 cows to supply the NFL with enough leather for a year\'s supply of footballs.',
  'Thirty-five percent of people who use personal ads for dating are already married.',
  'The 3 most valuable brand names on earth are Marlboro, Coca-Cola, and Budweiser (in that order).',
  'Humans are the only primates that don\'t have pigment in the palms of their hands.',
  'Months that begin on a Sunday will always have a \'Friday the 13th\'.',
  'The fingerprints of koala bears are virtually indistinguishable from those of humans, so much so that they can be easily confused at a crime scene.',
  'The mask worn by Michael Myers in the original \"Halloween\" was actually a Captain Kirk mask painted white.',
  'The only two days of the year in which there are no professional sports games--MLB, NBA, NHL, or NFL--are the day before and the day after the Major League All-Star Game.',
  'Only one person in two billion will live to be 116 or older.',
  'When the French Academy was preparing its first dictionary, it defined \"crab\" as, \"A small red fish, which walks backwards.\" This definition was sent with a number of others to the naturalist Cuvier for his approval. The scientist wrote back, \"Your definition, gentlemen, would be perfect, only for three exceptions. The crab is not a fish, it is not red and it does not walk backwards.\"',
  'Dr. Jack Kevorkian first patient has Alzheimer\'s disease.',
  'Fictional/horror writer Stephen King sleeps with a nearby light on to calm his fear of the dark.',
  'It\'s possible to lead a cow upstairs but not downstairs.',
  'It was discovered on a space mission that a frog can throw up. The frog throws up its stomach first, so the stomach is dangling out of its mouth. Then the frog uses its forearms to dig out all of the stomach\'s contents and then swallows the stomach back down.',
  'The very first song played on MTV was \'Video Killed The Radio Star\' by the Buggles.',
  'William Marston engineered one of the earliest forms of the polygraph in the early 1900\'s. Later he went on to create the comic strip Wonder Woman, a story about a displaced Amazon princess who forces anyone caught in her magic lasso to tell the truth.',
  'Americans travel 1,144,721,000 miles by air every day.',
  'The the U.S. you dial \'911\'. In Stockholm, Sweden you dial 90000',
  '38% of American men say they love their cars more than women.',
  'The U.S. military operates 234 golf courses.',
  '100% of lottery winners do gain weight.',
  'Bullet proof vests, fire escapes, windshield wipers, and laser printers were all invented by women.',
  'A cat has 32 muscles in each ear.',
  'Cats urine glows under a black light.',
  'In every episode of Seinfeld there is a Superman somewhere.',
  'Lorne Greene had one of his nipples bitten off by an alligator while he was host of \"Lorne Greene\'s Wild Kingdom.\"',
  'Pamela Anderson Lee is Canada\'s Centennial Baby, being the first baby born on the centennial anniversary of Canada\'s independence.',
  'Pinocchio is Italian for \"pine head.\"',
  'When possums are playing \'possum\', they are not \"playing.\" They actually pass out from sheer terror.',
  'Who\'s that playing the piano on the \"Mad About You\" theme? Paul Reiser himself.',
  'Most lipstick contains fish scales.',
  'Donald Duck comics were banned from Finland because he doesn\'t wear pants.',
  'The placement of a donkey\'s eyes in its\' heads enables it to see all four feet at all times.',
  'The average American/Canadian will eat about 11.9 pounds of cereal per year.',
  'Over 1000 birds a year die from smashing into windows.',
  'The state of Florida is bigger than England.',
  'Dolphins sleep with one eye open.',
  'In the White House, there are 13,092 knives, forks and spoons.',
  'Recycling one glass jar saves enough energy to watch T.V for 3 hours.',
  'Owls are one of the only birds who can see the color blue.',
  'Honeybees have a type of hair on their eyes.',
  'A jellyfish is 95 percent water.',
  'In Bangladesh, kids as young as 15 can be jailed for cheating on their finals.',
  'The katydid bug hears through holes in its hind legs.',
  'Q is the only letter in the alphabet that does not appear in the name of any of the United States.',
  '166,875,000,000 pieces of mail are delivered each year in the US.',
  'Bats always turn left when exiting a cave.',
  'The praying mantis is the only insect that can turn its head.',
  'Daffy Duck\'s middle name is \"Dumas\".',
  'In Disney\'s Fantasia, the Sorcerer\'s name is \"Yensid\" (Disney backwards.)',
  'In The Empire Strikes Back there is a potato hidden in the asteroid field.',
  'Walt Disney holds the world record for the most Academy Awards won by one person, he has won twenty statuettes, and twelve other plaques and certificates.',
  'James Bond\'s car had three different license plates in Goldfinger.',
  'Canada makes up 6.67 percent of the Earth\'s land area.',
  'South Dakota is the only U.S state which shares no letters with the name of its capital.',
  'The KGB is headquartered at No. 2 Felix Dzerzhinsky Square, Moscow.',
  'The Vatican city registered 0 births in 1983.',
  'Spain leads the world in cork production.',
  'There are 1,792 steps in the Eiffel Tower.',
  'There are 269 steps to the top of the Leaning Tower of Pisa.',
  'Leonardo da Vinci could write with one hand while drawing with the other.',
  // weird shit
  'Happy birthday.',
  'I can\'t believe we\'re down by five.',
  // random shit pt2 (loads of dupes ughhh)
  'In 10 minutes, a hurricane releases more energy than all the world\'s nuclear weapons combined.',
  'On average, 100 people choke to death on ballpoint pens every year.',
  'On average people fear spiders more than they do death.',
  'Ninety percent of New York City cabbies are recently arrived immigrants.',
  'Thirty-five percent of the people who use personal ads for dating are already married.',
  'It\'s possible to lead a cow upstairs...but not downstairs.',
  'Table tennis balls have been known to travel off the paddle at speeds up to 160 km/hr.',
  'Pepsi originally contained pepsin, thus the name.',
  'In ancient Egypt, priests plucked EVERY hair from their bodies, including their eyebrows and eyelashes.',
  'TYPEWRITER is the longest word that can be made using the letters only on one row of the keyboard.',
  '\"Go.\" is the shortest complete sentence in the English language.',
  'The original story from \"Tales of 1001 Arabian Nights\" begins, \"Aladdin was a little Chinese boy.\"',
  'Honey is the only natural food that is made without destroying any kind of life. What about milk you say?',
  'No word in the English language rhymes with \"MONTH\".',
  'Michael Jordan makes more money from NIKE annually than all of the Nike factory workers in Malaysia combined.',
  'The volume of the earth\'s moon is the same as the volume of the Pacific Ocean.',
  'A cow has to eat grass to produce milk and grass is living.',
  'The cigarette lighter was invented before the match.',
  'Americans on average eat 18 acres of pizza every day.',
  'The \"pound\" key on your keyboard is called an octotroph.',
  'The \"dot\" over the letter \"i\" is called a tittle.',
  'Spiral staircases in medieval castles are running clockwise. This is because all knights used to be right-handed. When the intruding army would climb the stairs they would not be able to use their right hand which was holding the sword because of the difficulties of climbing the stairs. Left-handed knights would have had no troubles, except left-handed people could never become knights because it was assumed that they were descendants of the devil.',
  'Ham radio operators got the term \"ham\" coined from the expression \"ham fisted operators,\" a term used to describe early radio users who sent Morse code.',
  'The slogan on New Hampshire license plates is \"Live Free or Die.\" These license plates are manufactured by prisoners in the state prison in Concord.',
  'Chinese Crested dogs can get acne.',
  'Hydrogen gas is the least dense substance in the world, at 0.08988g/cc.',
  'Hydrogen solid is the most dense substance in the world, at 70.6g/cc.',
  'Each year there is one ton of cement poured for each man woman and child in the world.',
  'The house fly hums in the middle octave key of F.',
  'The only capital letter in the Roman alphabet with exactly one end point is P.',
  'The giant red star Betelgeuse has a diameter larger than that of the Earth\'s orbit around the sun.',
  'Los Angeles\'s full name is: \"El Pueblo de Nuestra Senora la Reina de losAngeles de Poriuncula\" and can be abbreviated to 3.63% of its size, \"LA.\"',
  'Only 1 in 2,000,000,000 will live to be 116 or older.',
  'Tigers have striped skin, not just striped fur.',
  'According to Einstein\'s Special Theory of Relativity, it is possible to go slower than light and faster than light, but it is impossible to go the speed of light. Also, there is a particle called tackyon, which is supposed to go faster than light. This means if you fire a tackyon beam, it travels before you fire it.',
  'When you tie a noose, the rope is wrapped twelve times around because it\'s the same length as a person’s head.',
  'Hummingbirds are the only animals that can fly backwards.',
  'A cat\'s jaw cannot move sideways.',
  'If you passed gas consistently for 6 years and 9 months, enough gas is produced to create the energy of an atomic bomb.',
  'A pig\'s orgasm lasts 30 minutes.',
  'A cockroach will live nine days without its head before it starves to death.',
  'The male praying mantis cannot copulate while its head is attached to its body. The female initiates mating by ripping the male\'s head off.',
  'The flea can jump 350 times its body length. It\'s like a human jumping the length of a football field.',
  'The catfish has over 27,000 taste buds.',
  'Butterflies taste with their feet.',
  'The strongest muscle in the body is the tongue.',
  'Elephants are the only animal that cannot jump.',
  'A cat\'s urine glows under a black light.',
  'Polar bears are left-handed.',
  'Humans and dolphins are the only species that have sex for pleasure.',
  'The shark is the only fish that can blink with both eyes.',
  'There are more chickens than people in the world.',
  'On a Canadian two dollar bill, the flag flying over the Parliament building is an American flag.',
  'All of the clocks in the movie \"Pulp Fiction\" are stuck on 4:20.',
  'No word in the English language rhymes with month, orange, silver, or purple.',
  'Los Angeles\' full name is \"El Pueblo de Nuestra Senora la Reina de los Angeles de Porciuncula\"',
  'In most advertisements, the time displayed on a watch is 10:10.',
  'The characters Bert and Ernie on Sesame Street were named after Bert the cop and Ernie the taxi driver in Frank Capra\'s \"It\'s a Wonderful Life.\"',
  'A dragonfly has a life span of 24 hours.',
  'It\'s impossible to sneeze with your eyes open.',
  'Mr. Rogers was an ordained minister.',
  'Stewardesses\" is the longest word that is typed with only the left hand.',
  'A rat can last longer without water than a camel.',
  'Your stomach has to produce a new layer of mucus every two weeks or it will digest itself.',
  'A raisin dropped in a glass of fresh champagne will bounce up and down continuously from the bottom of the glass to the top.',
  'A 2\" X 4\" is really 1-1/2\" by 3-1/2\".',
  'During the chariot scene in \"Ben Hur,\" a small red car can be seen in the distance.',
  'On average, 12 newborns will be given to the wrong parents daily.',
  'Because metal was scarce, the Oscars given out during World War II were made of wood.',
  'The number of possible ways of playing the first four moves per side in a game of chess is 318,979,564,000.',
  'There are no words in the dictionary that rhyme with orange, purple, and silver. What about \"month?\"',
  'The very first bomb dropped by the Allies on Berlin in World War II killed the only elephant in the Berlin Zoo.',
  'Bruce Lee was so fast that they actually had to slow film down while shooting so you could see his moves. That\'s the opposite of the norm.',
  'The first CD pressed in the US was Bruce Springsteen\'s \"Born in the USA.\"',
  'The original name for butterfly was flutterby.',
  'The phrase \"rule of thumb\" is derived from an old English law which stated that you couldn\'t beat your wife with anything wider than your thumb.',
  'The first product Motorola started to develop was a record player for automobiles. At that time, the most known player on the market was Victrola, so they called themselves Motorola.',
  'Roses may be red, but violets are indeed violet.',
  'By raising your legs slowly and laying on your back, you cannot sink into quicksand.',
  'Celery has negative calories. It takes more calories to eat a piece of celery than the celery has in it to begin with.',
  'Charlie Chaplin once won third prize in a Charlie Chaplin look-alike contest.',
  'An old law in Bellingham, Washington made it illegal for a woman to take more than 3 steps backwards while dancing.',
  'The glue on Israeli postage stamps is certified kosher.',
  'The Guinness Book of Records holds the record for being the book most often stolen from public libraries.',
  'Astronauts are not allowed to eat beans before they go into space because passing wind in a space suit damages them.',
  // random shit pt3
  '111,111,111 x 111,111,111 = 12,345,678,987,654,321.',
  'The phrase \"rule of thumb\" is derived from and old English law which stated that you couldn\'t beat your wife with anything wider than your thumb.',
  'The average chocolate bar has 8 insects\' legs in it.',
  'The average human eats 8 spiders in their lifetime at night.',
  'Marilyn Monroe had six toes on one foot.',
  'If you keep a Goldfish in the dark room, it will eventually turn white.',
  'The sentence \"the quick brown fox jumps over the lazy dog\" uses every letter in the alphabet.',
  'A rhinoceros horn is made of compacted hair.',
  'It is impossible to sneeze with your eyes open.',
  'All of the clocks in the movie Pulp Fiction are stuck on 4:20.',
  'No word in the English language rhymes with month, orange, silver or purple.',
  '\"Dreamt\" is the only English word that ends in the letters \"mt\".',
  'Almonds are members of the peach family.',
  'The youngest pope was 11 years old.',
  'The world\'s youngest parents were 8 and 9 and lived in China in 1910.',
  'A snail can sleep for 3 years.',
  'American Airlines saved $40,000 in 1987 by eliminating one olive from each salad served in first-class.',
  'The shortest war in history was between Zanzibar and England in 1896. Zanzibar surrendered after 38 minutes.',
  'A polar bear\'s skin is black. Its fur is not white, but actually clear.',
  'Elvis had a twin brother named Garon, who died at birth, which is why Elvis\' middle name was spelled Aron; in honor of his brother.',
  'Did you know you share your birthday with at least 9 other million people in the world?',
  'When it was built in the 1940s, the state of Virginia still had segregation laws requiring separate toilet facilities for blacks and whites.',
  'The longest word in the English language is 1909 letters long and it refers to a distinct part of DNA.',
  'Americans on the average eat 18 acres of pizza every day.',
  'You know that you are more likely to be killed by a champagne cork than by a poisonous spider.',
  'Cat\'s urine glows under a black light.',
  'Babies are born without knee caps. They don\'t appear until the child reaches 2-6 years of age.',
  'One of the reasons marijuana is illegal today is because cotton growers in the 30s lobbied against hemp farmers-they saw it as competition.',
  'Cats have over one hundred vocal sounds, dogs only have about ten.',
  'If Barbie were life-size her measurements would be 39-23-33. She would stand seven feet, two inches tall and have a neck twice the length of a normal human\'s neck.',
  'Feb 1865 is the only month in recorded history not to have a full moon.',
  'The catfish has over 27,000 taste buds, that makes the catfish rank #1 for animal having the most taste buds.',
  'The only 15 letter word that can be spelled without repeating a letter is uncopyrightable.',
  'More people are killed by donkeys annually than are killed in plane crashes.',
  'The word racecar and kayak are the same whether they are read left to right or right to left.',
  'A cockroach will live nine days without its head, before it starves to death.',
  'Butterflies taste with their feet. Elephants are the only animals that can\'t jump.',
  'Los Angeles\'s full name is \"El Pueblo de Nuestra Senora la Reina de los Angeles de Porciuncula\". And can be abbreviated to 3.63% of its size, \"L.A.\"',
  'The characters Bert and Ernie on Sesame Street were named after Bert the cop and Ernie the taxi driver in Frank Capra\'s \"Its A Wonderful Life\".',
  'The name for Oz in the \"Wizard of Oz\" was thought up when the creator, Frank Baum, looked at his filing cabinet and saw A-N and O-Z, hence \"Oz.\"',
  'The average secretary\'s left hand does 56% of the typing.',
  'On an American one-dollar bill, there is an owl in the upper left-hand corner of the \"1\" encased in the \"shield\" and a spider hidden in the front upper right-hand corner.',
  'There are only four words in the English language which end in \"- dous\": tremendous, horrendous, stupendous, and hazardous.'
];
///////
///////SMILY CODE, OBJECT SHIT
var twitch_e = [
  'http://i.imgur.com/QVo1c0T.png',
  'http://i.imgur.com/dqsKGP1.png',
  'http://i.imgur.com/TMRI0Fr.png',
  'http://i.imgur.com/h0KO0ck.png',
  'http://i.imgur.com/kXQMfGN.png',
  'http://i.imgur.com/fjAF7Gn.png',
  'http://i.imgur.com/mpiB56W.png',
  'http://i.imgur.com/l9Fc8Iz.png',
  'http://i.imgur.com/jpIcJYw.png',
  'http://i.imgur.com/sFDpEnU.png',
  'http://i.imgur.com/bigSl9z.png',
  'http://i.imgur.com/xlHLty3.png',
  'http://i.imgur.com/VHgWsRP.png',
  'http://i.imgur.com/MWNByGA.png',
  'http://i.imgur.com/hZtzWe0.png',
  'http://i.imgur.com/qct9HtP.png',
  'http://i.imgur.com/T8ClRIR.png',
  'http://i.imgur.com/K6WDnj4.png',
  'http://i.imgur.com/vt1K5Yh.png',
  'http://i.imgur.com/BZniZp1.png',
  'http://i.imgur.com/RzY2enR.png',
  'http://i.imgur.com/bigoSYK.png',
  'http://i.imgur.com/IwS3woc.png',
  'http://i.imgur.com/TZzL3wm.png',
  'http://i.imgur.com/DMcq2b1.png',
  'http://i.imgur.com/SVnhzxW.png',
  'http://i.imgur.com/TqLcXCZ.png',
  'http://i.imgur.com/FgSnuUT.png',
  'http://i.imgur.com/1Oo6VOZ.png',
  'http://i.imgur.com/SixnBY7.png',
  'http://i.imgur.com/QAohBGP.png',
  'http://i.imgur.com/hV3p3vl.png',
  'http://i.imgur.com/pd76rHs.png',
  'http://i.imgur.com/48wUf5T.png',
  'http://i.imgur.com/f5JHBlE.png',
  'http://i.imgur.com/OAJgNUc.png',
  'http://i.imgur.com/mrsxszB.png',
  'http://i.imgur.com/4jtscWh.png',
  'http://i.imgur.com/gL047DW.png',
  'http://i.imgur.com/08dRykj.png',
  'http://i.imgur.com/e24fWTM.png',
  'http://i.imgur.com/eoUXwyq.png',
  'http://i.imgur.com/XkcpCH0.png',
  'http://i.imgur.com/igqf4F7.png',
  'http://i.imgur.com/1FIWAkZ.png',
  'http://i.imgur.com/QCoGbFo.png',
  'http://i.imgur.com/Oc8V6Ol.png',
  'http://i.imgur.com/1J66LEi.png',
  'http://i.imgur.com/yLhzJqE.png',
  'http://i.imgur.com/EHL1jRs.png',
  'http://i.imgur.com/sYSV1kP.png',
  'http://i.imgur.com/bYX0oVc.png',
  'http://i.imgur.com/5CKJABf.png',
  'http://i.imgur.com/R9pZnfn.png',
  'http://i.imgur.com/4jXPQ84.png',
  'http://i.imgur.com/uxiLqoD.png',
  'http://i.imgur.com/No70nqx.png',
  'http://i.imgur.com/VjrlovL.png',
  'http://i.imgur.com/IGyy3DI.png',
  'http://i.imgur.com/YaZ09wG.png',
  'http://i.imgur.com/JS85Yx4.png',
  'http://i.imgur.com/BsI34Vl.png',
  'http://i.imgur.com/HSb7j1O.png',
  'http://i.imgur.com/a6kOlYr.png',
  'http://i.imgur.com/CVxpWeP.png',
  'http://i.imgur.com/ozclJV3.png',
  'http://i.imgur.com/9F4L3Hq.png',
  'http://i.imgur.com/KrtWidY.png',
  'http://i.imgur.com/SoXddIf.png',
  'http://i.imgur.com/wvzaBMm.png',
  'http://i.imgur.com/cHYVrXc.png',
  'http://i.imgur.com/CVY93QN.png',
  'http://i.imgur.com/tprSlMd.png',
  'http://i.imgur.com/EoBsCd0.png',
  'http://i.imgur.com/ssvFnhb.png',
  'http://i.imgur.com/q8em1zI.png',
  'http://i.imgur.com/5jqBUC3.png',
  'http://i.imgur.com/Y5sq5f7.png',
  'http://i.imgur.com/sRfLcEF.png',
  'http://i.imgur.com/ZNilBPa.png',
  'http://i.imgur.com/61U9J8M.png',
  'http://i.imgur.com/hHNN1z7.png',
  'http://i.imgur.com/udZwsqT.png',
  'http://i.imgur.com/Ttcors8.png',
  'http://i.imgur.com/a4i3a8x.png',
  'http://i.imgur.com/UzBViwj.png',
  'http://i.imgur.com/ilug4HX.png',
  'http://i.imgur.com/l2IzNnS.png',
  'http://i.imgur.com/IS9i6gN.png',
  'http://i.imgur.com/qKOMsMP.png',
  'http://i.imgur.com/HLypmWH.png',
  'http://i.imgur.com/2kepGZp.png',
  'http://i.imgur.com/Cv3pJg5.png',
  'http://i.imgur.com/qeQUCEY.png',
  'http://i.imgur.com/VjeiJw0.png',
  'http://i.imgur.com/WmGRi71.png',
  'http://i.imgur.com/fKNCx6v.png',
  'http://i.imgur.com/3NJq8SI.png',
  'http://i.imgur.com/EDkvlmy.png',
  'http://i.imgur.com/aG79Kbl.png',
  'http://i.imgur.com/fQS6MA2.png',
  'http://i.imgur.com/gpEUfeO.png',
  'http://i.imgur.com/D17A8N5.png',
  'http://i.imgur.com/pFgpcvq.png',
  'http://i.imgur.com/w7Kvigh.png',
  'http://i.imgur.com/TPEATJP.png',
  'http://i.imgur.com/55cGfYj.png',
  'http://i.imgur.com/f1Vs1MD.png',
  'http://i.imgur.com/OrcloOW.png',
  'http://i.imgur.com/CJEwq5P.png',
  'http://i.imgur.com/yAJprQl.png',
  'http://i.imgur.com/PSI8Hpk.png',
  'http://i.imgur.com/8TJVMBv.png',
  'http://i.imgur.com/4i1kWww.png',
  'http://i.imgur.com/yNwGgx8.png',
  'http://i.imgur.com/bVCadnq.png',
  'http://i.imgur.com/Ktb5Sy3.png',
  'http://i.imgur.com/CdOXPXE.png',
  'http://i.imgur.com/TEuOogc.png',
  'http://i.imgur.com/8lMyQ3w.png',
  'http://i.imgur.com/BMIWpaz.png',
  'http://i.imgur.com/eUmFzGZ.png',
  'http://i.imgur.com/5U2TtdH.png',
  'http://i.imgur.com/iCTBtVU.png',
  'http://i.imgur.com/5SLjUBa.png',
  'http://i.imgur.com/YranXB5.png',
  'http://i.imgur.com/m6XkIzG.png',
  'http://i.imgur.com/DC1owIz.png',
  'http://i.imgur.com/TyJigve.png',
  'http://i.imgur.com/IuDLIal.png',
  'http://i.imgur.com/nbpdvPB.png',
  'http://i.imgur.com/ryK3KKc.png',
  'http://i.imgur.com/pdhcwWl.png',
  'http://i.imgur.com/oXGeQ6c.png',
  'http://i.imgur.com/OwYOACK.png',
  'http://i.imgur.com/hkl1gvs.png',
  'http://i.imgur.com/wyBrrnj.png',
  'http://i.imgur.com/huBREx6.png',
  'http://i.imgur.com/EfKYnHQ.png',
  'http://i.imgur.com/ft6gZrX.png',
  'http://i.imgur.com/LOYM89Y.png',
  'http://i.imgur.com/N7yQNOh.png',
  'http://i.imgur.com/1nd7RIs.png',
  'http://i.imgur.com/JKiU6YX.png',
  'http://i.imgur.com/BnUDuc5.png',
  'http://i.imgur.com/j9LoBiz.png',
  'http://i.imgur.com/LcftbNl.png',
  'http://i.imgur.com/Hr5NeYP.png',
  'http://i.imgur.com/QkviQOG.png',
  'http://i.imgur.com/JYqahlL.png',
  'http://i.imgur.com/yC3Cpt5.png',
  'http://i.imgur.com/g7P8ZYX.png',
  'http://i.imgur.com/ZtC4AQH.png',
  'http://i.imgur.com/S1Gr4Xn.png',
  'http://i.imgur.com/hQW5929.png',
  'http://i.imgur.com/th40WaF.png',
  'http://i.imgur.com/iNCxXrt.png'
];
var twitch_c = [
  'KappaHD',
  'MiniK',
  'imGlitch',
  'copyThis',
  'pastaThat',
  '4Head',
  'ANELE',
  'ArgieB8',
  'ArsonNoSexy',
  'AsianGlow',
  'AtGL',
  'AthenaPMS',
  'AtIvy',
  'AtWW',
  'BabyRage',
  'BatChest',
  'BCWarrior',
  'BibleThump',
  'BigBrother',
  'BionicBunion',
  'BlargNaut',
  'bleedPurple',
  'BloodTrail',
  'BORT',
  'BrainSlug',
  'BrokeBack',
  'BuddhaBar',
  'CoolCat',
  'CorgiDerp',
  'CougarHunt',
  'DAESuppy',
  'DansGame',
  'DatHass',
  'DatSheffy',
  'DBstyle',
  'deExcite',
  'deIlluminati',
  'DendiFace',
  'DogFace',
  'duDudu',
  'EagleEye',
  'EleGiggle',
  'EvilFetus',
  'FailFish',
  'FPSMarksman',
  'FrankerZ',
  'FreakinStinkin',
  'FUNgineer',
  'FunRun',
  'FuzzyOtterOO',
  'GasJoker',
  'GingerPower',
  'GrammarKing',
  'HassanChop',
  'HeyGuys',
  'HotPokket',
  'HumbleLife',
  'ItsBoshyTime',
  'Jebaited',
  'JKanStyle',
  'JonCarnage',
  'KAPOW',
  'Kappa',
  'KappaPride',
  'KappaRoss',
  'Keepo',
  'KevinTurtle',
  'Kippa',
  'Kreygasm',
  'KZskull',
  'Mau5',
  'mcaT',
  'MechaSupes',
  'MrDestructoid',
  'MVGame',
  'NightBat',
  'NinjaTroll',
  'NoNoSpot',
  'NotATK',
  'NotLikeThis',
  'OMGScoots',
  'OneHand',
  'OpieOP',
  'OptimizePrime',
  'OSbeaver',
  'OSbury',
  'OSdeo',
  'OSfrog',
  'OSkomodo',
  'OSrob',
  'OSsloth',
  'panicBasket',
  'PanicVis',
  'PazPazowitz',
  'PeoplesChamp',
  'PermaSmug',
  'PeteZaroll',
  'PeteZarollTie',
  'PicoMause',
  'PipeHype',
  'PJHarley',
  'PJSalt',
  'PMSTwin',
  'PogChamp',
  'Poooound',
  'PraiseIt',
  'PRChase',
  'PunchTrees',
  'PuppeyFace',
  'RaccAttack',
  'RalpherZ',
  'RedCoat',
  'ResidentSleeper',
  'riPepperonis',
  'RitzMitz',
  'RuleFive',
  'SeemsGood',
  'ShadyLulu',
  'Shazam',
  'shazamicon',
  'ShazBotstix',
  'ShibeZ',
  'SMOrc',
  'SMSkull',
  'SoBayed',
  'SoonerLater',
  'SriHead',
  'SSSsss',
  'StoneLightning',
  'StrawBeary',
  'SuperVinlin',
  'SwiftRage',
  'tbBaconBiscuit',
  'tbChickenBiscuit',
  'tbSausageBiscuit',
  'tbSriracha',
  'TF2John',
  'TheKing',
  'TheRinger',
  'TheTarFu',
  'TheThing',
  'ThunBeast',
  'TinyFace',
  'TooSpicy',
  'TriHard',
  'TTours',
  'twitchRaid',
  'UleetBackup',
  'UncleNox',
  'UnSane',
  'Volcania',
  'WholeWheat',
  'WinWaker',
  'WTRuck',
  'WutFace',
  'YouWHY',
  'afkKappa'
];
var emoticon_1 = {
  dolan: [
    ':dolan:',
    'http://oi62.tinypic.com/2lsk7ra.jpg',
    'Dolan'
  ],
  lysf: [
    ':lysf:',
    'http://i.imgur.com/8eLDb0a.png',
    'LYSF'
  ],
  bed: [
    ':bed:',
    'http://i58.tinypic.com/14tlq4g.png',
    'Bed'
  ],
  buzz: [
    ':buzz:',
    'http://i61.tinypic.com/11hza0i.png',
    'buzz'
  ],
  waterc: [
    ':waterc:',
    'http://i61.tinypic.com/161dc7b.png',
    'waterc'
  ],
  cozy: [
    ':cozy:',
    'http://i57.tinypic.com/25tcbw9.png',
    'cozy'
  ],
  ween: [
    ':ween:',
    'http://i61.tinypic.com/24c9m2x.png',
    'ween'
  ],
  smoker: [
    ':smoker:',
    'http://i.imgur.com/oayZBiW.png',
    'smoker'
  ],
  hug: [
    ':hug:',
    'http://i.imgur.com/2rbLxWH.png',
    'hug'
  ],
  wp: [
    ':wp:',
    'http://i.imgur.com/3nGF3HF.png',
    'wp'
  ],
  hide: [
    ':hide:',
    'http://i58.tinypic.com/11gjf4p.png',
    'hide'
  ],
  kind: [
    ':kind:',
    'http://i.imgur.com/M2lLpSW.png',
    'kind'
  ],
  frog3: [
    ':frog3:',
    'http://i57.tinypic.com/r20u3l.png',
    'frog3'
  ],
  feels: [
    ':feels:',
    'http://i58.tinypic.com/a49d2h.png',
    'feels'
  ],
  fly: [
    ':fly:',
    'http://i.imgur.com/GnFj20L.png',
    'fly'
  ],
  frog4: [
    ':frog4:',
    'http://i58.tinypic.com/e6wsao.png',
    'frog4'
  ],
  wink: [
    ':wink:',
    'http://i58.tinypic.com/29qo3vc.png',
    'wink'
  ],
  dubs: [
    ':dubs:',
    'http://i62.tinypic.com/29y09br.png',
    'dubs'
  ],
  oceanb: [
    ':oceanb:',
    'http://i.imgur.com/biE5mVs.png',
    'oceanb'
  ],
  mollusk: [
    ':mollusk:',
    'http://i.imgur.com/EQ7H4r1.png',
    'mollusk'
  ],
  hah: [
    ':hah:',
    'http://i58.tinypic.com/dxd92w.png',
    'hah'
  ],
  hue: [
    ':hue:',
    'http://i57.tinypic.com/20tjpy1.png',
    'hue'
  ],
  wpony: [
    ':wpony:',
    'http://i.imgur.com/OBSRlXU.png',
    'wpony'
  ],
  bend: [
    ':bend:',
    'http://i.imgur.com/Rcf2aZn.png',
    'bend'
  ],
  yhf: [
    ':yhf:',
    'http://i60.tinypic.com/152ozl0.png',
    'yhf'
  ],
  smug: [
    ':smug:',
    'http://i61.tinypic.com/11trl93.png',
    'smug'
  ],
  am: [
    ':am:',
    'http://i.imgur.com/W6b3Ojy.png',
    'am'
  ],
  riot: [
    ':riot:',
    'http://i.imgur.com/exN4785.png',
    'riot'
  ],
  blaze: [
    ':blaze:',
    'http://i60.tinypic.com/14ul0nd.png',
    'blaze'
  ],
  afx: [
    ':afx:',
    'http://i.imgur.com/r5o9xXL.png',
    'afx'
  ],
  strokes1: [
    ':strokes1:',
    'http://i.imgur.com/IhuPM4O.png',
    'strokes1'
  ],
  wave: [
    ':wave:',
    'http://i61.tinypic.com/6rk6ds.gif',
    'wave'
  ],
  johnny: [
    ':johnny:',
    'http://i.imgur.com/vBzuuFZ.jpg',
    'johnny'
  ],
  sloth: [
    ':sloth:',
    'http://i59.tinypic.com/16idto7.gif',
    'sloth'
  ],
  autobahn: [
    ':autobahn:',
    'http://i.imgur.com/7HlKkKx.png',
    'autobahn'
  ],
  lmao: [
    ':lmao:',
    'http://i58.tinypic.com/jhec78.png',
    'lmao'
  ],
  yup: [
    ':yup:',
    'http://i61.tinypic.com/wqr6te.png',
    'yup'
  ],
  ayylmao: [
    ':ayylmao:',
    'http://i62.tinypic.com/16islyd.png',
    'ayylmao'
  ],
  sip: [
    ':sip:',
    'http://i60.tinypic.com/r22k5w.png',
    'sip'
  ],
  frog5: [
    ':frog5:',
    'http://i60.tinypic.com/dgkwef.png',
    'frog5'
  ],
  cool: [
    ':cool:',
    'http://i62.tinypic.com/22lxmw.png',
    'cool'
  ],
  whew: [
    ':whew:',
    'http://i60.tinypic.com/rsy4ck.png',
    'whew'
  ],
  err: [
    ':err:',
    'http://i58.tinypic.com/23k5hme.png',
    'err'
  ],
  sadfrog: [
    ':sadfrog:',
    'http://i59.tinypic.com/15yhwd0.png',
    'sadfrog'
  ],
  notimpr: [
    ':notimpr:',
    'http://i.imgur.com/UJ2Pcqf.png',
    'notimpr'
  ],
  murdoc: [
    ':murdoc:',
    'http://i.imgur.com/kzK8RfX.png',
    'murdoc'
  ],
  notsure: [
    ':notsure:',
    'http://i57.tinypic.com/156fhnt.png',
    'notsure'
  ],
  maddy: [
    ':maddy:',
    'http://i.imgur.com/FF8occF.png',
    'maddy'
  ],
  dead: [
    ':dead:',
    'http://i.imgur.com/9yw2sIe.png',
    'dead'
  ],
  snake: [
    ':snake:',
    'http://i59.tinypic.com/52hwf5.png',
    'snake'
  ],
  thom: [
    ':thom:',
    'http://i.imgur.com/Z5Oo4IU.png',
    'thom'
  ],
  snakepoo: [
    ':snakepoo:',
    'http://i59.tinypic.com/2462ln5.png',
    'snakepoo'
  ],
  squid: [
    ':squid:',
    'http://i.imgur.com/Xzqc4dL.png',
    'squid'
  ],
  madfrog: [
    ':madfrog:',
    'http://i60.tinypic.com/3097j1c.png',
    'madfrog'
  ],
  fatsnake: [
    ':fatsnake:',
    'http://i61.tinypic.com/i3gl03.jpg',
    'fatsnake'
  ],
  supa: [
    ':supa:',
    'http://i58.tinypic.com/2dsl0rb.gif',
    'supa'
  ],
  sadsmile: [
    ':sadsmile:',
    'http://i60.tinypic.com/90vlw1.jpg',
    'sadsmile'
  ],
  hmmfrog: [
    ':hmmfrog:',
    'http://i58.tinypic.com/351d381.png',
    'hmmfrog'
  ],
  lookingin: [
    ':lookingin:',
    'http://i60.tinypic.com/veuf4.png',
    'lookingin'
  ],
  froggy: [
    ':froggy:',
    'http://i57.tinypic.com/2ywy1ci.png',
    'froggy'
  ],
  spurdo: [
    ':spurdo:',
    'http://i62.tinypic.com/oaqf78.png',
    'spurdo'
  ],
  wat: [
    ':wat:',
    'http://i61.tinypic.com/34h7udk.png',
    'wat'
  ],
  tru: [
    ':tru:',
    'http://i61.tinypic.com/2ut6u6g.png',
    'tru'
  ],
  egg: [
    ':egg:',
    'http://i.imgur.com/Xro7lrY.png',
    'egg'
  ],
  isay: [
    ':isay:',
    'http://i57.tinypic.com/2mouzw4.gif',
    'isay'
  ],
  cute: [
    ':cute:',
    'http://i60.tinypic.com/4g3y88.png',
    'cute'
  ],
  pointy: [
    ':pointy:',
    'http://i57.tinypic.com/o547r8.gif',
    'pointy'
  ],
  beet: [
    ':beet:',
    'http://i59.tinypic.com/6fs300.png',
    'beet'
  ],
  bacon: [
    ':bacon:',
    'http://i58.tinypic.com/8xn711.png',
    'bacon'
  ],
  hangon: [
    ':hangon:',
    'http://i62.tinypic.com/2ihxrbp.png',
    'hangon'
  ],
  laul: [
    ':laul:',
    'http://i61.tinypic.com/mtt4zk.png',
    'laul'
  ],
  damon: [
    ':damon:',
    'http://i62.tinypic.com/343smxf.png',
    'damon'
  ],
  foff: [
    ':foff:',
    'http://i58.tinypic.com/25ks8c5.png',
    'foff'
  ],
  jazz: [
    ':jazz:',
    'http://i.imgur.com/YMKJdXo.png',
    'jazz'
  ],
  quebec: [
    ':quebec:',
    'http://i.imgur.com/gpxdYTQ.png',
    'quebec'
  ],
  gws: [
    ':gws:',
    'http://i.imgur.com/0D0VMkx.png',
    'gws'
  ],
  neckbeard: [
    ':neckbeard:',
    'http://i57.tinypic.com/iqamad.png',
    'neckbeard'
  ],
  troll: [
    ':troll:',
    'http://i58.tinypic.com/13zcxt1.png',
    'troll'
  ],
  bunny: [
    ':bunny:',
    'http://i58.tinypic.com/6ieiqb.png',
    'bunny'
  ],
  dew: [
    ':dew:',
    'http://i57.tinypic.com/sdn0ok.png',
    'dew'
  ],
  doritos: [
    ':doritos:',
    'http://i62.tinypic.com/1pxno3.png',
    'doritos'
  ],
  frogcry1: [
    ':frogcry1:',
    'http://i62.tinypic.com/2mniqlj.png',
    'frogcry1'
  ],
  frogcry2: [
    ':frogcry2:',
    'http://i57.tinypic.com/2585ees.png',
    'frogcry2'
  ],
  bshark: [
    ':bshark:',
    'http://i59.tinypic.com/2qu6qdu.png',
    'bshark'
  ],
  banana: [
    ':banana:',
    'http://i60.tinypic.com/25auiky.png',
    'banana'
  ],
  consider: [
    ':consider:',
    'http://i62.tinypic.com/1z20r39.png',
    'consider'
  ],
  hlaugh: [
    ':hlaugh:',
    'http://i59.tinypic.com/24vnq4y.png',
    'hlaugh'
  ],
  madman: [
    ':madman:',
    'http://i62.tinypic.com/2d1wbro.png',
    'madman'
  ],
  eating: [
    ':eating:',
    'http://i59.tinypic.com/2962fya.png',
    'eating'
  ],
  mpizza: [
    ':mpizza:',
    'http://i61.tinypic.com/w2h8p1.png',
    'mpizza'
  ],
  creepsmile: [
    ':creepsmile:',
    'http://i61.tinypic.com/a40i3b.png',
    'creepsmile'
  ],
  allyours: [
    ':allyours:',
    'http://i61.tinypic.com/2i1egzl.png',
    'allyours'
  ],
  heythere: [
    ':heythere:',
    'http://i60.tinypic.com/vxy9sh.png',
    'heythere'
  ],
  disgust: [
    ':disgust:',
    'http://i59.tinypic.com/nnjll1.png',
    'disgust'
  ],
  disgust2: [
    ':disgust2:',
    'http://i57.tinypic.com/qn92rr.png',
    'disgust 2'
  ],
  canteven: [
    ':canteven:',
    'http://i60.tinypic.com/abk7.png',
    'canteven'
  ],
  saddance: [
    ':saddance:',
    'http://i58.tinypic.com/70gzdf.png',
    'saddance'
  ],
  alienfrog: [
    ':alienfrog:',
    'http://i59.tinypic.com/2zzmcuq.png',
    'alienfrog'
  ],
  sadjello: [
    ':sadjello:',
    'http://i62.tinypic.com/2lnyel1.png',
    'sadjello'
  ],
  dogfrog: [
    ':dogfrog:',
    'http://i59.tinypic.com/19mg5y.png',
    'dogfrog'
  ],
  edd: [
    ':edd:',
    'http://i60.tinypic.com/28bf8gj.png',
    'edd'
  ],
  cfrog: [
    ':cfrog:',
    'http://i62.tinypic.com/rkq3bs.png',
    'cfrog'
  ],
  weed: [
    ':weed:',
    'http://i58.tinypic.com/2rzvse1.png',
    'weed'
  ],
  roku: [
    ':roku:',
    'http://i59.tinypic.com/9u8008.png',
    'roku'
  ],
  nokia: [
    ':nokia:',
    'http://i57.tinypic.com/33a43z8.jpg',
    'nokia'
  ],
  spidey: [
    ':spidey:',
    'http://i58.tinypic.com/2116k9s.png',
    'spidey'
  ],
  winner: [
    ':winner:',
    'http://i61.tinypic.com/2l9c8g.png',
    'winner'
  ],
  bird: [
    ':bird:',
    'http://i57.tinypic.com/e96iy8.png',
    'bird'
  ],
  bang: [
    ':bang:',
    'http://i59.tinypic.com/zlog1v.png',
    'bang'
  ],
  feelgood: [
    ':feelgood:',
    'http://i61.tinypic.com/2mx3861.png',
    'feelgood'
  ],
  annoyed: [
    ':annoyed:',
    'http://i61.tinypic.com/330crw8.png',
    'annoyed'
  ],
  vannoyed: [
    ':vannoyed:',
    'http://i57.tinypic.com/2psovb9.png',
    'vannoyed'
  ],
  fell: [
    ':fell:',
    'http://i58.tinypic.com/rvhgg6.png',
    'fell'
  ],
  usure: [
    ':usure:',
    'http://i58.tinypic.com/2z7okk5.png',
    'usure'
  ],
  pipe: [
    ':pipe:',
    'http://i57.tinypic.com/3165izb.png',
    'pipe'
  ],
  sip2: [
    ':sip2:',
    'http://i62.tinypic.com/2luqses.png',
    'sip2'
  ],
  butt: [
    ':butt:',
    'http://i62.tinypic.com/mjb9jd.png',
    'butt'
  ],
  notpleased: [
    ':notpleased:',
    'http://i61.tinypic.com/6tijao.png',
    'notpleased'
  ],
  disdain: [
    ':disdain:',
    'http://i58.tinypic.com/331oc4y.png',
    'disdain'
  ],
  bman: [
    ':bman:',
    'http://i61.tinypic.com/116m3i9.png',
    'bman'
  ],
  smugfeel: [
    ':smugfeel:',
    'http://i62.tinypic.com/157kux5.jpg',
    'smugfeel'
  ],
  head: [
    ':head:',
    'http://i59.tinypic.com/9sfekg.png',
    'head'
  ],
  fack: [
    ':fack:',
    'http://i59.tinypic.com/20u8qcz.png',
    'fack'
  ],
  cryin: [
    ':cryin:',
    'http://i58.tinypic.com/fdwn0o.png',
    'cryin'
  ],
  cwofl: [
    ':cwofl:',
    'http://i60.tinypic.com/2gwvmts.png',
    'cwofl'
  ],
  madwofl: [
    ':madwofl:',
    'http://i57.tinypic.com/insemu.png',
    'madwofl'
  ],
  guilty: [
    ':guilty:',
    'http://i58.tinypic.com/2jeogtd.png',
    'guilty'
  ],
  mellow: [
    ':mellow:',
    'http://i58.tinypic.com/2zqd92p.png',
    'mellow'
  ],
  dealw: [
    ':dealw:',
    'http://i62.tinypic.com/31314sg.png',
    'dealw'
  ],
  heman: [
    ':heman:',
    'http://i61.tinypic.com/35ivon7.png',
    'heman'
  ],
  bother: [
    ':bother:',
    'http://i58.tinypic.com/2e181ap.png',
    'bother'
  ],
  grin: [
    ':grin:',
    'http://i59.tinypic.com/14djdjl.png',
    'grin'
  ],
  muchwow: [
    ':muchwow:',
    'http://i62.tinypic.com/2rrt8p0.png',
    'muchwow'
  ],
  stepup: [
    ':stepup:',
    'http://i60.tinypic.com/x3acnn.png',
    'stepup'
  ],
  zerolol: [
    ':zerolol:',
    'http://i57.tinypic.com/2llzlnl.png',
    'zerolol'
  ],
  biggrin: [
    ':biggrin:',
    'http://i62.tinypic.com/sfgdqx.png',
    'biggrin'
  ],
  iamworry: [
    ':iamworry:',
    'http://i62.tinypic.com/r0dn4m.png',
    'iamworry'
  ],
  nope: [
    ':nope:',
    'http://i58.tinypic.com/2mg2mpk.png',
    'nope'
  ],
  krabs: [
    ':krabs:',
    'http://i61.tinypic.com/353b5ht.png',
    'krabs'
  ],
  feelsgood: [
    ':feelsgood:',
    'http://i61.tinypic.com/1z4v38p.png',
    'feelsgood'
  ],
  sanicpepe: [
    ':sanicpepe:',
    'http://i61.tinypic.com/2hdmr2f.png',
    'sanicpepe'
  ],
  normalsmug: [
    ':normalsmug:',
    'http://i58.tinypic.com/2s0k8hs.png',
    'normalsmug'
  ],
  nervous: [
    ':nervous:',
    'http://i60.tinypic.com/ae1n5y.png',
    'nervous'
  ],
  escalation: [
    ':escalation:',
    'http://i59.tinypic.com/148pzl2.png',
    'escalation'
  ],
  terror: [
    ':terror:',
    'http://i58.tinypic.com/2uqoo0k.png',
    'terror'
  ],
  rageon: [
    ':rageon:',
    'http://i57.tinypic.com/flj628.png',
    'rageon'
  ],
  noclothes: [
    ':noclothes:',
    'http://i61.tinypic.com/2hh2361.png',
    'noclothes'
  ],
  waifoos: [
    ':waifoos:',
    'http://i57.tinypic.com/2cehr0o.png',
    'waifoos'
  ],
  hypetrain: [
    ':hypetrain:',
    'http://i61.tinypic.com/3448old.png',
    'hypetrain'
  ],
  bigxd: [
    ':bigxd:',
    'http://i59.tinypic.com/154d8bd.png',
    'bigxd'
  ],
  fonz: [
    ':fonz:',
    'http://i61.tinypic.com/2mnhyld.png',
    'fonz'
  ],
  mrbean: [
    ':mrbean:',
    'http://i61.tinypic.com/1127csk.png',
    'mr bean'
  ],
  mlady: [
    ':mlady:',
    'http://i57.tinypic.com/1zf7vpv.gif',
    '\'mlady'
  ],
  lick: [
    ':lick:',
    'http://i57.tinypic.com/208w9j9.png',
    'lick'
  ],
  nogf: [
    ':nogf:',
    'http://i58.tinypic.com/1191f7o.png',
    'nogf'
  ],
  mint: [
    ':mint:',
    'http://i60.tinypic.com/2hzkc5y.png',
    'mint'
  ],
  devious: [
    ':devious:',
    'http://i61.tinypic.com/ol00h3.png',
    'devious'
  ],
  babyfrogs: [
    ':babyfrogs:',
    'http://i58.tinypic.com/5zh7o7.png',
    'baby frogs'
  ],
  rlpepe: [
    ':rlpepe:',
    'http://i61.tinypic.com/25sszo5.png',
    'rlpepe'
  ],
  besrs: [
    ':besrs:',
    'http://i60.tinypic.com/2gtruyd.png',
    'besrs'
  ],
  cri: [
    ':cri:',
    'http://i59.tinypic.com/avj1bq.png',
    'cri'
  ],
  patrick: [
    ':patrick:',
    'http://i58.tinypic.com/ricfet.png',
    'patrick'
  ],
  standbuy: [
    ':standbuy:',
    'http://i61.tinypic.com/2ijt75c.png',
    'stand buy'
  ],
  notgood: [
    ':notgood:',
    'http://i62.tinypic.com/swtet1.jpg',
    'not good'
  ],
  confident: [
    ':confident:',
    'http://i59.tinypic.com/znwqjq.jpg',
    'confident'
  ],
  cripepe: [
    ':cripepe:',
    'http://i58.tinypic.com/2ldbla0.png',
    'cri pepe'
  ],
  ebinpepe: [
    ':ebinpepe:',
    'http://i57.tinypic.com/2mrxj05.png',
    'ebin pepe'
  ],
  greedypepe: [
    ':greedypepe:',
    'http://i59.tinypic.com/k3tcth.png',
    'greedy pepe'
  ],
  disgust3: [
    ':disgust3:',
    'http://i61.tinypic.com/fa90t0.png',
    'disgust 3'
  ],
  nou: [
    ':nou:',
    'http://i60.tinypic.com/n39miv.png',
    'nou'
  ],
  inspace: [
    ':inspace:',
    'http://i59.tinypic.com/25uo7wy.png',
    'inspace'
  ],
  disgust4: [
    ':disgust4:',
    'http://i59.tinypic.com/33aayxd.png',
    'disgust 4'
  ],
  spooky: [
    ':spooky:',
    'http://i59.tinypic.com/2nali87.jpg',
    'spooky skelly'
  ],
  left: [
    ':left:',
    'http://i60.tinypic.com/fjnxig.png',
    'left beef'
  ],
  dance: [
    ':bdance:',
    'http://i57.tinypic.com/ilwzm1.jpg',
    'balloon dance'
  ],
  froghue: [
    ':fhue:',
    'http://i58.tinypic.com/16awhog.png',
    'frog hue'
  ],
  spin: [
    ':spin:',
    'http://i57.tinypic.com/73fe44.jpg',
    'spinning'
  ],
  fam: [
    ':fam:',
    'http://i62.tinypic.com/343orvo.png',
    'fam'
  ],
  brilliant: [
    ':brill:',
    'http://i59.tinypic.com/28h3dc8.png',
    'brilliant'
  ],
  sharkfrog: [
    ':sfrog:',
    'http://i60.tinypic.com/zojamb.png',
    'shark frog'
  ],
  iduck: [
    ':iduck:',
    'http://i60.tinypic.com/zstwzt.png',
    'inverted duck'
  ],
  happen: [
    ':happen:',
    'http://i59.tinypic.com/2rzyzjm.jpg',
    'happening'
  ],
  winner2: [
    ':winner2:',
    'http://i.imgur.com/cFwUmzM.gif',
    'content aware WINNER'
  ],
  jew: [
    ':jew:',
    'http://i.imgur.com/jowqkg9.gif',
    'jew'
  ],
  muricaflag: [
    ':muricaflag:',
    'http://i.imgur.com/Sy9vZNX.gif',
    'muricaflag'
  ],
  virus: [
    ':virus:',
    'http://i.imgur.com/kZYR3oJ.gif',
    'virus'
  ],
  spaghetti: [
    ':spaghetti:',
    'http://i60.tinypic.com/9vicg9.png',
    'mom\'s spaghetti'
  ],
  spaghett: [
    ':spaghett:',
    'http://i60.tinypic.com/2rptelg.png',
    'spaghett!'
  ],
  joker: [
    ':joker:',
    'http://i57.tinypic.com/25ji1ww.png',
    'joker'
  ],
  ghostpepe: [
    ':gpepe:',
    'http://i62.tinypic.com/fkqgr5.png',
    'ghost pepe'
  ],
  sexypepe: [
    ':spepe:',
    'http://i60.tinypic.com/2r5qpkz.jpg',
    'sexy pepe'
  ],
  straightd: [
    ':sdubs:',
    'http://i59.tinypic.com/6od98l.jpg',
    'straight outta doubles'
  ],
  uglypepe: [
    ':upepe:',
    'http://i61.tinypic.com/2qiv800.jpg',
    'ugly pepe'
  ],
  leetpepe: [
    ':1337pepe:',
    'http://i.imgur.com/TgrYBQP.gif',
    '1337 pepe'
  ],
  seizurepepe: [
    ':seizurepepe:',
    'http://i.imgur.com/Xu5UZpk.gif',
    'seizure pepe'
  ],
  pepeoveryou: [
    ':pepe>you:',
    'http://i.imgur.com/5fDk6Z1.gif',
    'rare pepe > you'
  ],
  pepesi: [
    ':pepesi:',
    'http://i.imgur.com/bPKbLTq.gif',
    'PEPEsi'
  ],
  pepicasso: [
    ':pepicasso:',
    'http://i.imgur.com/rFDnOk7.gif',
    'peekasso'
  ],
  pepe007: [
    ':pepe007:',
    'http://i.imgur.com/vRgJvjh.gif',
    'pepe 007'
  ],
  pepeflash: [
    ':pepeflash:',
    'http://i.imgur.com/bqGHiNG.gif',
    'pepe flash'
  ]
};
var emoticon_2 = {
  peperun: [
    ':peperun:',
    'http://i.imgur.com/3xLRJRC.gif',
    'pepe run'
  ],
  pepenaked: [
    ':pepenaked:',
    'http://i.imgur.com/O9moFkn.gif',
    'pepe naked'
  ],
  triforce: [
    ':triforce:',
    'http://i.imgur.com/fT5Ennp.gif',
    'newfags can\'t triforce'
  ],
  smokofrodo: [
    ':smokofrodo:',
    'http://i.imgur.com/PMUWXEY.png',
    'SMOKO FRODO'
  ],
  fabulous: [
    ':fab:',
    'http://orig12.deviantart.net/cca2/f/2015/254/6/3/animation_fabulous_1_by_la_stockemotes-d997eb1.gif',
    'FABULOUS'
  ],
  sasqpepe: [
    ':saspepe:',
    'http://i57.tinypic.com/qzfx2t.png',
    'SASQUANCH PEPE'
  ],
  fieripepe: [
    ':guypepe:',
    'http://i60.tinypic.com/2qv5ruu.gif',
    'GUY PEPE'
  ],
  salty: [
    ':salt:',
    'https://static-cdn.jtvnw.net/emoticons/v1/36/1.0',
    'PJSalt'
  ],
  rip: [
    ':rip:',
    'https://static-cdn.jtvnw.net/emoticons/v1/59729/1.0',
    'RIP'
  ],
  triple: [
    ':triple:',
    'https://static-cdn.jtvnw.net/emoticons/v1/11535/1.0',
    'TRIPLE KILL'
  ],
  sombrero: [
    ':sombrero:',
    'https://static-cdn.jtvnw.net/emoticons/v1/18235/1.0',
    'SOMBRERO'
  ],
  illuminati: [
    ':illuminati:',
    'https://static-cdn.jtvnw.net/emoticons/v1/25927/1.0',
    'THE JOOOOOOOOOOOOOOOOOOOOOS'
  ],
  blazeskr: [
    'blaze',
    'https://static-cdn.jtvnw.net/emoticons/v1/39567/1.0',
    'B-B-B-B-B-BAKA SENPAIIII'
  ],
  gnome: [
    ':gnome:',
    'https://static-cdn.jtvnw.net/emoticons/v1/44069/1.0',
    'alohaGnome'
  ],
  yeah: [
    ':yeah:',
    'https://static-cdn.jtvnw.net/emoticons/v1/40394/1.0',
    'alohaYeah'
  ],
  rng: [
    ':rng:',
    'https://static-cdn.jtvnw.net/emoticons/v1/39440/1.0',
    'alohaRNG'
  ],
  mvp: [
    ':mvp:',
    'https://static-cdn.jtvnw.net/emoticons/v1/53102/1.0',
    'U DA REAL MVP'
  ],
  saltyrage: [
    ':rage:',
    'https://static-cdn.jtvnw.net/emoticons/v1/18998/1.0',
    'RAGEQUIT'
  ],
  saltyfire: [
    ':fire:',
    'https://static-cdn.jtvnw.net/emoticons/v1/28748/1.0',
    'BURNED'
  ],
  saltyace: [
    ':ace:',
    'https://static-cdn.jtvnw.net/emoticons/v1/17968/1.0',
    'ace of spades'
  ],
  saltyburn: [
    ':burn:',
    'https://static-cdn.jtvnw.net/emoticons/v1/28418/1.0',
    'WOULD YOU LIKE SOME WATER TO PUT OUT THAT SICK BURN'
  ],
  ggnore: [
    ':gg:',
    'https://static-cdn.jtvnw.net/emoticons/v1/55571/1.0',
    'GGnoRE'
  ],
  kappahd: [
    ':kappahd:',
    'https://static-cdn.jtvnw.net/jtv_user_pictures/emoticon-2867-src-f02f9d40f66f0840-28x28.png',
    'KappaHD'
  ],
  hulk: [
    ':hulk:',
    'http://i.picresize.com/images/2015/09/13/cqRno.png',
    'SEXY HULK COSPLAY'
  ],
  hogan: [
    ':hogan:',
    'http://i.imgur.com/ONAoat2.png',
    'RACIST MAN FROM WWE'
  ],
  walkpepe: [
    ':walkpepe:',
    'http://i.imgur.com/KCHhUel.gif',
    'SKELETON PEPE'
  ],
  windpepe: [
    ':windpepe:',
    'http://i.imgur.com/As2JYQU.gif',
    'WIND PEPE'
  ],
  sadpepe: [
    ':sadpepe:',
    'http://i.imgur.com/Nhs5e5n.gif',
    'ARTSY PEPE'
  ],
  muricapepe: [
    ':muricapepe:',
    'http://i.imgur.com/XRxndTe.gif',
    'MURICA ARTSY PEPE'
  ],
  simpsonspepe: [
    ':simpsonspepe:',
    'http://i.imgur.com/dpBS7Yj.gif',
    'SIMPSONS PEPE'
  ],
  chatpepe: [
    ':chatpepe:',
    'http://i.imgur.com/mLyuao3.gif',
    'CHAT PEPE'
  ],
  einstein: [
    ':einstein:',
    'http://i.imgur.com/zfAPfpf.gif',
    'EINSTEIN 420'
  ],
  pepewtf: [
    ':pepewtf:',
    'http://i.imgur.com/sYuoK2u.gif',
    'WTF PEPE'
  ],
  quilt: [
    ':quilt:',
    'http://i62.tinypic.com/w0jbxk.gif',
    'KAFFE QUILTS AGAIN'
  ],
  quik: [
    ':quik:',
    'http://i61.tinypic.com/ot234o.gif',
    'QUICKSCOPE'
  ],
  conan1: [
    ':conan1:',
    'http://i.imgur.com/ak3bFC1.jpg',
    'CONAN 1'
  ],
  conan2: [
    ':conan2:',
    'http://i.imgur.com/owU25CX.png',
    'FRESH APPLE PIE'
  ],
  jimjilbong: [
    ':jimjilbong:',
    'http://i.imgur.com/eO1KFC3.jpg',
    'JIMJILBONG'
  ],
  steven: [
    ':steven:',
    'http://i.imgur.com/PBGQD5b.jpg',
    'STEFEN'
  ],
  adamchk: [
    ':adamchk:',
    'http://i.imgur.com/iz64vO9.jpg',
    'ADAM CHK EM'
  ],
  fried: [
    ':fried:',
    'http://i.imgur.com/D4k11CR.jpg',
    'FRIED'
  ],
  penn: [
    ':penn2:',
    'http://i.imgur.com/RJV20Ql.jpg',
    'PENN'
  ],
  deep: [
    ':deepaw:',
    'http://i.imgur.com/qrlZMoD.jpg',
    'DEEP AWWW'
  ],
  pepelemon: [
    ':lemonpepe:',
    'http://i.imgur.com/O6sI7fZ.gif',
    'PEPE LEMON'
  ],
  why: [
    ':why:',
    'http://i.imgur.com/USyVquO.gif',
    'WHY'
  ],
  oopepe: [
    ':oopepe:',
    'http://i.imgur.com/14NwJLV.gif',
    'O.O PEPE'
  ],
  kout: [
    ':kout:',
    'https://i.imgur.com/bEKMjLi.png',
    'KOUT'
  ],
  bear: [
    ':bearaim:',
    'http://i.imgur.com/vCmrqpM.gif',
    'BEAR-LY AIM-ING'
  ],
  cryriver: [
    ':pepetears:',
    'http://i.imgur.com/O5yu2Nq.gif',
    'PEAR RIVER OF TEARS'
  ],
  blurpepe: [
    ':blurpepe:',
    'http://i.imgur.com/GFC1b2M.gif',
    'blur pepe'
  ],
  loweffort: [
    ':lowpepe:',
    'http://i.imgur.com/99tRltW.gif',
    'LOW EFFORT PEPE'
  ],
  faceswap: [
    ':faceswap:',
    'http://i.imgur.com/qyrYGlm.gif',
    'FACE SWAP'
  ],
  sponge2: [
    ':sponge2:',
    'http://i.imgur.com/qnEwSaK.gif',
    'SPONGE TWO'
  ],
  fignewton: [
    ':fig:',
    'http://i.imgur.com/NB3xqQY.gif',
    'FIG NEWTON'
  ],
  okkid: [
    ':okkid:',
    'http://i.imgur.com/ynHTHkJ.jpg',
    'OK KID'
  ],
  frogpepe: [
    ':frogpepe:',
    'http://i.imgur.com/CbbOaBz.jpg',
    'FROG PEPE'
  ],
  neet: [
    ':neet:',
    'http://i.imgur.com/DwO2W3B.jpg',
    'NEET'
  ],
  cooldog: [
    ':cooldog:',
    'http://i.imgur.com/Vi5O6TS.jpg',
    'COOL DOG'
  ],
  eatshit2: [
    ':eatshit2',
    'http://i.imgur.com/KA33r6p.jpg',
    'EAT SHIT'
  ],
  scared3: [
    ':scared3:',
    'http://i.imgur.com/dYfejmB.jpg',
    'SCARED 3'
  ],
  godwills: [
    ':godwills:',
    'http://i.imgur.com/1UWRYTX.jpg',
    'GOD WILLS IT'
  ],
  cacti: [
    ':cacti:',
    'http://i.imgur.com/3vfSA0L.png',
    'CACTI'
  ],
  anthony: [
    ':anthony:',
    'http://i.imgur.com/UAagnBt.png',
    'HEY, ANTHONY HERE'
  ],
  reflect: [
    ':reflect:',
    'http://i.imgur.com/vPYpQN3.gif',
    'REFLECTING'
  ],
  burning: [
    ':burning:',
    'http://i.imgur.com/Mk8PkoI.png',
    'BURNING'
  ],
  kingpepe: [
    ':kingpepe:',
    'http://i.imgur.com/xBangFX.png',
    'KING PEPE'
  ],
  scottip: [
    ':scottip:',
    'http://i.imgur.com/MNIXehT.png',
    'SCOTTISH TIP'
  ],
  FBPEPE: [
    ':fbpepe:',
    'http://i.imgur.com/IFJctH7.png',
    'FACEBOOK PEPE'
  ],
  ayylmaos: [
    ':ayylmaos:',
    'http://i.imgur.com/QLr8rvH.png',
    'AYY LMAO\'S :DD:D'
  ],
  dinoman: [
    ':dinoman:',
    'http://i.imgur.com/KmoEbws.png',
    'DINO MAN'
  ],
  thinkpepe: [
    ':thinkpepe:',
    'http://i.imgur.com/huzfTk2.png',
    'THINKING PEPE'
  ],
  dontgeb: [
    ':dontgeb:',
    'http://i.imgur.com/XNxeYDS.png',
    'I DONT GEB ID :DD:D'
  ],
  fuckbirb: [
    ':fuckbirb:',
    'http://i.imgur.com/uH0D0PR.png',
    'FUCK NICE THINGS'
  ],
  osnap: [
    ':osnap:',
    'http://i.imgur.com/Zdl0xsV.png',
    'O SNAP'
  ],
  wlaugh: [
    ':wlaugh:',
    'http://i.imgur.com/inUpCaV.png',
    'WORRIED LAUGHTER'
  ],
  moonface: [
    ':moonface:',
    'http://i.imgur.com/9gJYVAk.png',
    'MOON FACE'
  ],
  delsys32: [
    ':delsys32:',
    'http://i.imgur.com/FYB9CRt.gif',
    'DELETE SYSTEM32'
  ],
  falco: [
    ':falco:',
    'http://i62.tinypic.com/357n98i.png',
    'THAT MOTHERFUCKER FROM STAR FOX'
  ],
  kirby: [
    ':kirby:',
    'http://i57.tinypic.com/1589tgh.png',
    'FAT NIGGER WHO EATS PEOPLE'
  ],
  cenastruggle: [
    ':cenastruggle:',
    'http://i.imgur.com/yi44U9z.png',
    'GO JOHN CENA CENA STRONG'
  ],
  help: [
    ':help:',
    'http://i.imgur.com/xHjch8e.png',
    'PRESS F1 FOR HELP'
  ],
  shots: [
    ':shots:',
    'https://static-cdn.jtvnw.net/emoticons/v1/26388/1.0',
    'SHOTS FIRED'
  ],
  kappa: [
    ':shots:',
    'https://static-cdn.jtvnw.net/emoticons/v1/25/1.0',
    'KAPPAKAPPAKAPPAKAPPAKAPPAKAPPAKAPPA'
  ],
  bitfucked: [
    ':bitfucked:',
    'http://i.imgur.com/IYRr8WH.png',
    'A BIT FUCKEED'
  ],
  pussy: [
    ':pussy:',
    'http://i.imgur.com/wVSWGsg.png',
    'PUSSY'
  ],
  benwhat: [
    ':bruh:',
    'http://i.imgur.com/GCkoBrX.png',
    'BRUUH'
  ],
  suprisedknight: [
    ':knight:',
    'http://i.imgur.com/vEeIx9G.png',
    'SUPRISED KNIGHT'
  ],
  damonhair: [
    ':damonhair:',
    'http://i.imgur.com/UX0lbz2.png',
    'DAMON ALBARNS FUCING HAIR'
  ],
  shitop: [
    ':shitop:',
    'http://i.imgur.com/uz9OmPe.png',
    'SHIT OPINION'
  ],
  reptilejesus: [
    ':jesusraptor:',
    'http://i.imgur.com/K8EeUDR.png',
    'JESUS RAPTOR'
  ],
  dankrandy: [
    ':dankrandy:',
    'http://i.imgur.com/LQJAvAr.png',
    'DANK RANDY'
  ],
  randy: [
    ':randy:',
    'http://i.imgur.com/RbUuQ1j.png',
    'JUST RANDY'
  ],
  beating: [
    ':beating:',
    'http://i.imgur.com/VEO5gme.png',
    'BEATING A SAMSQUANCH'
  ],
  shitfish: [
    ':shitfish:',
    'http://i.imgur.com/8SyKrip.png',
    'SHITFISH'
  ],
  foffdank: [
    ':foffdank:',
    'http://i.imgur.com/o6cLJHe.png',
    'F OFF DANK'
  ],
  bubbles: [
    ':fetish:',
    'http://i.imgur.com/5HxNIqF.png',
    'THATS MY FETISH'
  ],
  oreo: [
    ':oreo:',
    'http://i.imgur.com/so2i2ia.png',
    'OREO'
  ],
  bigsmug: [
    ':bigsmug:',
    'http://i.imgur.com/Kb5gkvr.png',
    'BIG SMUG'
  ],
  lahey: [
    ':lahey:',
    'http://i.imgur.com/n8U65ql.jpg',
    'LAHEY SHAVING'
  ],
  raccoon: [
    ':coon:',
    'http://i.imgur.com/K3uYrVs.gif',
    'RACCOON'
  ],
  bean: [
    ':bean:',
    'http://i.imgur.com/GYhmwKt.png',
    'BEAN oF COFFEE'
  ],
  coolc: [
    ':coolc:',
    'http://i.imgur.com/6FCMFQQ.png',
    'COOOOOOOOOOOL'
  ],
  apple: [
    ':gapple:',
    'http://i.imgur.com/oO5qxLT.png',
    'GREEN APPLE'
  ],
  jeffyeah: [
    ':jeffye:',
    'http://i.imgur.com/yUYFtX2.png',
    'JEFF TWEEDY YEAAAAAAH'
  ],
  dasit: [
    ':dasit:',
    'http://i.imgur.com/ETCFwTk.png',
    'DAS IT MANNE'
  ],
  ayyxd: [
    ':ayyxd:',
    'http://i.imgur.com/fpuYLL0.png',
    'AYYY XD'
  ],
  spoons: [
    ':spoons:',
    'http://i.imgur.com/ki91Eot.png',
    'SPOONS'
  ],
  trutbh: [
    ':trutbh:',
    'http://i.imgur.com/jsxEPmb.png',
    'TRUE TBH'
  ],
  benis: [
    ':benis:',
    'http://i.imgur.com/tiSmbwA.png',
    'BENIS'
  ],
  spooked: [
    ':spooked:',
    'http://i.imgur.com/gvh91nd.png',
    'SPOOKED'
  ],
  garfielf: [
    ':garfielf:',
    'http://i.imgur.com/UM1hzYI.png',
    'GARFILF'
  ],
  pennsneak: [
    ':pennsneak:',
    'https://i.imgur.com/mRR9F8X.png',
    'THE TRASH IS YOUR DESTINATION'
  ],
  aerooreo: [
    'aero',
    'https://i.imgur.com/cN9Ssfd.png',
    'THAT KIKE JEW WITH NO SENSE OF HUMOR'
  ],
  trashuniverse: [
    ':trashuniverse:',
    'https://i.imgur.com/6lORTmC.jpg',
    'NEXT STOP: THE TRASH'
  ],
  discarded: [
    ':discarded:',
    'https://i.imgur.com/SraD89p.jpg',
    'OPINION DISCARDED'
  ],
  pennsmile: [
    ':pennsmile:',
    'https://i.imgur.com/JIDvcym.jpg',
    'THE GRIN OF ATHEISM'
  ],
  trash2: [
    ':trashgo:',
    'https://i.imgur.com/EAM5KD3.jpg',
    'INTO THE TRASH YOU GO'
  ],
  trashman: [
    ':trashman:',
    'https://i.imgur.com/IcKN7qV.jpg',
    'I\'M THE TRASH MAN. I EAT GARBAGE.'
  ],
  onlytrash: [
    ':onlytrash:',
    'https://i.imgur.com/Kegmi0Q.jpg',
    'NOPE. THERE\'S ONLY TRASH HERE.'
  ],
  pennsmile2: [
    ':pennsmile2:',
    'https://i.imgur.com/QeNhcOa.jpg',
    'THE FACE OF TRASH'
  ],
  bill: [
    ':bill:',
    'https://i.imgur.com/ThR0GxE.jpg',
    'BILL NYE THE SCIENCE ASSHOLE'
  ],
  pennsmile3: [
    ':pennsmile3:',
    'https://i.imgur.com/8dfyAyM.jpg',
    'NO COMMENTS NEEDED. JUST TRASH.'
  ],
  penntrasher: [
    ':penntrasher:',
    'https://i.imgur.com/ZYq5crP.jpg',
    'TRASHER MAGAZINE'
  ],
  ltrash: [
    ':ltrash:',
    'https://i.imgur.com/xbaxCgO.jpg',
    'LITERALLY TRASHER'
  ],
  pepemeister: [
    ':pepemeister:',
    'https://i.imgur.com/n5xshzf.jpg',
    'THE PEPEMEISTER'
  ],
  vincewtf: [
    ':vincewtf:',
    'https://i.imgur.com/5vpTOMQ.gif',
    'YFW YOU FIND OUT YOUR CRUSH IS A FEMINIST'
  ],
  pennbat: [
    ':pennbat:',
    'https://i.imgur.com/Hb2qKNE.png',
    'I\'M JUST TAKING OUT THE TRASH'
  ],
  trashmaster: [
    ':trashmaster:',
    'https://i.imgur.com/iJGSa5j.png',
    'WE TAKE OUT THE TRASH IN 420 SECONDS OR YOUR MONEY BACK'
  ],
  alltrash: [
    ':alltrash:',
    'https://i.imgur.com/hED48aB.png',
    'INTO THE TRASH IT ALL GOES'
  ],
  smashtrash: [
    ':smashtrash:',
    'https://i.imgur.com/MTKvgGZ.png',
    'PENN TAKES OUT THE TRASH'
  ],
  couldtrash: [
    ':couldtrash:',
    'https://i.imgur.com/zxXAltg.jpg',
    'YOU COULD HAVE TRASHED IT'
  ],
  timetotrash: [
    ':timetotrash:',
    'https://i.imgur.com/ldAcjID.png',
    'GOOD HEAVENS JUST LOOK AT THE TIME'
  ],
  problematic: [
    ':problematic:',
    'https://i.imgur.com/AT6JIiP.jpg?1',
    'problematic'
  ],
  doolittle: [
    ':doolittle:',
    'http://i.imgur.com/AuTNA9o.png',
    'doolittle'
  ],
  suicide: [
    ':suicide:',
    'http://i.imgur.com/xMbfSsr.jpg?1',
    'suicide'
  ],
  benis2: [
    ':benis2:',
    'https://i.imgur.com/UtoJXGH.png',
    'benis'
  ],
  smoke: [
    ':smoke:',
    'http://i.imgur.com/HpcjItw.gif',
    'smoke'
  ],
  animweed: [
    ':animweed:',
    'http://i.imgur.com/OzmSTZG.gif',
    'animweed'
  ],
  feelingbad: [
    ':feelingbad:',
    'http://i.imgur.com/AUr2Ikc.jpg',
    'feeling bad'
  ],
  handpepe: [
    ':handpepe:',
    'http://i.imgur.com/tsKnHNs.png',
    'andrawn pepe'
  ],
  warning: [
    ':warning:',
    'http://i.imgur.com/0x9kI7i.png',
    'warning'
  ],
  fatty: [
    ':fatty:',
    'http://i.imgur.com/KaKdh2s.png',
    'fattbh'
  ],
  smirkcat: [
    ':smirkcat:',
    'http://i.imgur.com/2ttK2BO.png',
    'smirkcat'
  ],
  collarpull: [
    ':collarpull:',
    'http://i.imgur.com/7CZZjYQ.png',
    'pull ur collar m8'
  ],
  kappaross: [
    ':kappaross:',
    'http://i.imgur.com/1u8HBm3.png',
    'kappa ross'
  ],
  trustnoone: [
    ':trustnoone:',
    'http://i.imgur.com/pUrFCdV.png',
    'TRST NO ONE'
  ],
  spurdocry: [
    ':spurdocry:',
    'http://i.imgur.com/KVHHQRO.png',
    'LAFF SO HARD; CRI'
  ],
  george: [
    ':george:',
    'http://i.imgur.com/ZszzL91.png',
    'CONSTANTASAJSAEd'
  ],
  ohisee: [
    ':ohisee:',
    'http://i.imgur.com/omm3jAn.png',
    'o boi'
  ],
  hukhuk: [
    ':hukhuk:',
    'http://i.imgur.com/SkF8ulm.png',
    'HUKHUKHUK'
  ],
  pepecar: [
    ':pepecar:',
    'http://i.imgur.com/bQarQya.png',
    'PEEPE CAR'
  ],
  pepecarflip: [
    ':pepecarflip:',
    'http://i.imgur.com/YBpZCvj.png',
    'PEEEPE CAR FLIP'
  ],
  dankmemedrink: [
    ':dankmemedrink:',
    'http://i.imgur.com/4mLctnD.gif',
    'DANK MEME DRUNKEN TBH'
  ],
  pixelpepe: [
    ':pixelpepe:',
    'http://i.imgur.com/Z1H1QSm.gif',
    'PIXEL PEPE'
  ],
  guyfieri: [
    ':guyfieri:',
    'http://i.imgur.com/HLiW5HD.png?1',
    'HAHA HIS HAIR'
  ],
  ifarted: [
    ':ifarted:',
    'http://i.imgur.com/bNu3j6o.png',
    'I FARTED'
  ],
  ablow: [
    ':ablow:',
    'http://i.imgur.com/oe8HKq4.png',
    'GOTTA GIVE IT A BLOW'
  ],
  neatnugget: [
    ':neatnugget:',
    'http://i.imgur.com/yonyfRz.png',
    'WHAHT A NEAT NUGGET'
  ],
  bthuthu: [
    ':bthuthu:',
    'http://i.imgur.com/4GZesRe.png',
    'BUTHUTHUTHUTHU'
  ],
  cheeki: [
    ':cheeki:',
    'http://i.imgur.com/2luxDfD.png',
    'CHEEKI BREEKI'
  ],
  disgustwow: [
    ':disgustwow:',
    'http://i.imgur.com/JI4AbsR.png',
    'WHHAT THE FUCK DISGUST'
  ],
  conanuh: [
    ':conanuh:',
    'http://i.imgur.com/1TWrXNF.png',
    'CONANA UHHHHHHHHHHHHHH'
  ],
  mladypixel: [
    ':mladypixel:',
    'http://i.imgur.com/ugZVg0y.gif',
    'PIXEL ART HUE'
  ],
  bucketheadkick: [
    ':bucketkick:',
    'http://i.imgur.com/oNufCMY.gif',
    'BUCKETHEAD LETHAL BLOW'
  ],
  painedexpression: [
    ':painedexp:',
    'http://i.imgur.com/n9z2Obr.png',
    'VERY PAINED TBH FAM'
  ],
  wookie: [
    ':wookie:',
    'http://i.imgur.com/wXxjuXj.gif',
    'WOOKIE CONTENT AWARE SCALE'
  ],
  jayvee: [
    ':jv:',
    'https://i.imgur.com/Ul2RSEQ.png',
    'IS THIS HUMAN'
  ],
  jvabuse: [
    ':jvabuse:',
    'https://i.imgur.com/6o3vewr.png',
    'REPORT AN ABUSE: JV'
  ],
  maymay2008: [
    ':gman:',
    'http://i.imgur.com/cf58SzQ.jpg',
    'WHY DO I EVEN TRY'
  ],
  bu2hurt: [
    ':butthurt:',
    'http://i.imgur.com/JQdiPHOs.jpg',
    'BUTTHURT'
  ]
};
var emoticon_3 = {
  memeimgxppLwr1: [
    ':xppLwr1:',
    'http://i.imgur.com/xppLwr1.png',
    'meme imgur xppLwr1'
  ],
  memeimgQjY2Bpn: [
    ':QjY2Bpn:',
    'http://i.imgur.com/QjY2Bpn.png',
    'meme imgur QjY2Bpn'
  ],
  memeimgoPrEEfa: [
    ':oPrEEfa:',
    'http://i.imgur.com/oPrEEfa.png',
    'meme imgur oPrEEfa'
  ],
  memeimgjuRqPrv: [
    ':juRqPrv:',
    'http://i.imgur.com/juRqPrv.png',
    'meme imgur juRqPrv'
  ],
  memeimg7w6FNiX: [
    ':7w6FNiX:',
    'http://i.imgur.com/7w6FNiX.png',
    'meme imgur 7w6FNiX'
  ],
  memeimg2Susb2k: [
    ':2Susb2k:',
    'http://i.imgur.com/2Susb2k.png',
    'meme imgur 2Susb2k'
  ],
  memeimgItonPfe: [
    ':ItonPfe:',
    'http://i.imgur.com/ItonPfe.png',
    'meme imgur ItonPfe'
  ],
  memeimgGKFAB0b: [
    ':GKFAB0b:',
    'http://i.imgur.com/GKFAB0b.png',
    'meme imgur GKFAB0b'
  ],
  memeimgbITb9uo: [
    ':bITb9uo:',
    'http://i.imgur.com/bITb9uo.png',
    'meme imgur bITb9uo'
  ],
  memeimgii6pbtT: [
    ':ii6pbtT:',
    'http://i.imgur.com/ii6pbtT.png',
    'meme imgur ii6pbtT'
  ],
  memeimguDDZazd: [
    ':uDDZazd:',
    'http://i.imgur.com/uDDZazd.png',
    'meme imgur uDDZazd'
  ],
  memeimgpD6bnCB: [
    ':pD6bnCB:',
    'http://i.imgur.com/pD6bnCB.png',
    'meme imgur pD6bnCB'
  ],
  memeimgTrQBlPb: [
    ':TrQBlPb:',
    'http://i.imgur.com/TrQBlPb.png',
    'meme imgur TrQBlPb'
  ],
  memeimgWkgZHw5: [
    ':WkgZHw5:',
    'http://i.imgur.com/WkgZHw5.png',
    'meme imgur WkgZHw5'
  ],
  memeimghnhooee: [
    ':hnhooee:',
    'http://i.imgur.com/hnhooee.png',
    'meme imgur hnhooee'
  ],
  memeimg6jbD6sb: [
    ':6jbD6sb:',
    'http://i.imgur.com/6jbD6sb.png',
    'meme imgur 6jbD6sb'
  ],
  memeimgg4lozrz: [
    ':g4lozrz:',
    'http://i.imgur.com/g4lozrz.png',
    'meme imgur g4lozrz'
  ],
  memeimgiRu9fjS: [
    ':iRu9fjS:',
    'http://i.imgur.com/iRu9fjS.png',
    'meme imgur iRu9fjS'
  ],
  memeimglY64ZMZ: [
    ':lY64ZMZ:',
    'http://i.imgur.com/lY64ZMZ.png',
    'meme imgur lY64ZMZ'
  ],
  memeimgx30p68v: [
    ':x30p68v:',
    'http://i.imgur.com/x30p68v.png',
    'meme imgur x30p68v'
  ],
  memeimgl0QIlWK: [
    ':l0QIlWK:',
    'http://i.imgur.com/l0QIlWK.png',
    'meme imgur l0QIlWK'
  ],
  memeimgXn1YUJx: [
    ':Xn1YUJx:',
    'http://i.imgur.com/Xn1YUJx.png',
    'meme imgur Xn1YUJx'
  ],
  memeimgIsHR31z: [
    ':IsHR31z:',
    'http://i.imgur.com/IsHR31z.png',
    'meme imgur IsHR31z'
  ],
  memeimgegGrJ6m: [
    ':egGrJ6m:',
    'http://i.imgur.com/egGrJ6m.png',
    'meme imgur egGrJ6m'
  ],
  memeimgA0fV5kW: [
    ':A0fV5kW:',
    'http://i.imgur.com/A0fV5kW.png',
    'meme imgur A0fV5kW'
  ],
  memeimgN1DN7M4: [
    ':N1DN7M4:',
    'http://i.imgur.com/N1DN7M4.png',
    'meme imgur N1DN7M4'
  ],
  memeimgRts212F: [
    ':Rts212F:',
    'http://i.imgur.com/Rts212F.png',
    'meme imgur Rts212F'
  ],
  memeimgArdjo5y: [
    ':Ardjo5y:',
    'http://i.imgur.com/Ardjo5y.png',
    'meme imgur Ardjo5y'
  ],
  memeimgNn6sJfG: [
    ':Nn6sJfG:',
    'http://i.imgur.com/Nn6sJfG.png',
    'meme imgur Nn6sJfG'
  ],
  memeimgzuoHkyd: [
    ':zuoHkyd:',
    'http://i.imgur.com/zuoHkyd.png',
    'meme imgur zuoHkyd'
  ],
  memeimgxJ8U6mG: [
    ':xJ8U6mG:',
    'http://i.imgur.com/xJ8U6mG.png',
    'meme imgur xJ8U6mG'
  ],
  memeimgAka5lH9: [
    ':Aka5lH9:',
    'http://i.imgur.com/Aka5lH9.png',
    'meme imgur Aka5lH9'
  ],
  memeimg1vn9dzK: [
    ':1vn9dzK:',
    'http://i.imgur.com/1vn9dzK.png',
    'meme imgur 1vn9dzK'
  ],
  memeimgrkzqqV2: [
    ':rkzqqV2:',
    'http://i.imgur.com/rkzqqV2.png',
    'meme imgur rkzqqV2'
  ],
  memeimgATaphPm: [
    ':ATaphPm:',
    'http://i.imgur.com/ATaphPm.png',
    'meme imgur ATaphPm'
  ],
  memeimglPsGEfM: [
    ':lPsGEfM:',
    'http://i.imgur.com/lPsGEfM.png',
    'meme imgur lPsGEfM'
  ],
  memeimgR3Og7To: [
    ':R3Og7To:',
    'http://i.imgur.com/R3Og7To.png',
    'meme imgur R3Og7To'
  ],
  memeimgY7SgxjY: [
    ':Y7SgxjY:',
    'http://i.imgur.com/Y7SgxjY.png',
    'meme imgur Y7SgxjY'
  ],
  memeimgUwwcgFe: [
    ':UwwcgFe:',
    'http://i.imgur.com/UwwcgFe.png',
    'meme imgur UwwcgFe'
  ],
  memeimgyITYTtg: [
    ':yITYTtg:',
    'http://i.imgur.com/yITYTtg.png',
    'meme imgur yITYTtg'
  ],
  memeimg1Y2snnS: [
    ':1Y2snnS:',
    'http://i.imgur.com/1Y2snnS.png',
    'meme imgur 1Y2snnS'
  ],
  memeimgSz7Hn3R: [
    ':Sz7Hn3R:',
    'http://i.imgur.com/Sz7Hn3R.png',
    'meme imgur Sz7Hn3R'
  ],
  memeimgOOkT7ZV: [
    ':OOkT7ZV:',
    'http://i.imgur.com/OOkT7ZV.png',
    'meme imgur OOkT7ZV'
  ],
  memeimgt2saUty: [
    ':t2saUty:',
    'http://i.imgur.com/t2saUty.png',
    'meme imgur t2saUty'
  ],
  memeimgQ1g8NH5: [
    ':Q1g8NH5:',
    'http://i.imgur.com/Q1g8NH5.png',
    'meme imgur Q1g8NH5'
  ],
  memeimgSZC9l47: [
    ':SZC9l47:',
    'http://i.imgur.com/SZC9l47.png',
    'meme imgur SZC9l47'
  ],
  memeimgwt1gmL6: [
    ':wt1gmL6:',
    'http://i.imgur.com/wt1gmL6.png',
    'meme imgur wt1gmL6'
  ],
  memeimgFxzPZJY: [
    ':FxzPZJY:',
    'http://i.imgur.com/FxzPZJY.png',
    'meme imgur FxzPZJY'
  ],
  memeimgG9l1PRP: [
    ':G9l1PRP:',
    'http://i.imgur.com/G9l1PRP.png',
    'meme imgur G9l1PRP'
  ],
  memeimg2L8Rdmu: [
    ':2L8Rdmu:',
    'http://i.imgur.com/2L8Rdmu.png',
    'meme imgur 2L8Rdmu'
  ],
  memeimgrnPX2xe: [
    ':rnPX2xe:',
    'http://i.imgur.com/rnPX2xe.png',
    'meme imgur rnPX2xe'
  ],
  memeimgVBSuZld: [
    ':VBSuZld:',
    'http://i.imgur.com/VBSuZld.png',
    'meme imgur VBSuZld'
  ],
  memeimgIWxszQf: [
    ':IWxszQf:',
    'http://i.imgur.com/IWxszQf.png',
    'meme imgur IWxszQf'
  ],
  memeimgSg0Saij: [
    ':Sg0Saij:',
    'http://i.imgur.com/Sg0Saij.png',
    'meme imgur Sg0Saij'
  ],
  memeimgbrRG3YD: [
    ':brRG3YD:',
    'http://i.imgur.com/brRG3YD.png',
    'meme imgur brRG3YD'
  ],
  memeimgQunbdUi: [
    ':QunbdUi:',
    'http://i.imgur.com/QunbdUi.png',
    'meme imgur QunbdUi'
  ],
  memeimgFOKgseg: [
    ':FOKgseg:',
    'http://i.imgur.com/FOKgseg.png',
    'meme imgur FOKgseg'
  ],
  memeimgWKgtbOa: [
    ':WKgtbOa:',
    'http://i.imgur.com/WKgtbOa.png',
    'meme imgur WKgtbOa'
  ],
  memeimgSBBGizf: [
    ':SBBGizf:',
    'http://i.imgur.com/SBBGizf.png',
    'meme imgur SBBGizf'
  ],
  memeimgl0byEXM: [
    ':l0byEXM:',
    'http://i.imgur.com/l0byEXM.png',
    'meme imgur l0byEXM'
  ],
  memeimgwLHrhQv: [
    ':wLHrhQv:',
    'http://i.imgur.com/wLHrhQv.png',
    'meme imgur wLHrhQv'
  ],
  memeimgE2GX6mP: [
    ':E2GX6mP:',
    'http://i.imgur.com/E2GX6mP.png',
    'meme imgur E2GX6mP'
  ],
  memeimg3KqDIyq: [
    ':3KqDIyq:',
    'http://i.imgur.com/3KqDIyq.png',
    'meme imgur 3KqDIyq'
  ],
  memeimg11nxWUZ: [
    ':11nxWUZ:',
    'http://i.imgur.com/11nxWUZ.png',
    'meme imgur 11nxWUZ'
  ],
  memeimgZizp049: [
    ':Zizp049:',
    'http://i.imgur.com/Zizp049.png',
    'meme imgur Zizp049'
  ],
  memeimgEy24uFx: [
    ':Ey24uFx:',
    'http://i.imgur.com/Ey24uFx.png',
    'meme imgur Ey24uFx'
  ],
  memeimgBOkcCM0: [
    ':BOkcCM0:',
    'http://i.imgur.com/BOkcCM0.png',
    'meme imgur BOkcCM0'
  ],
  memeimghvB4G7F: [
    ':hvB4G7F:',
    'http://i.imgur.com/hvB4G7F.png',
    'meme imgur hvB4G7F'
  ],
  memeimgjliRy0B: [
    ':jliRy0B:',
    'http://i.imgur.com/jliRy0B.png',
    'meme imgur jliRy0B'
  ],
  memeimgl3wNVVI: [
    ':l3wNVVI:',
    'http://i.imgur.com/l3wNVVI.png',
    'meme imgur l3wNVVI'
  ],
  memeimgy7sC7r3: [
    ':y7sC7r3:',
    'http://i.imgur.com/y7sC7r3.png',
    'meme imgur y7sC7r3'
  ],
  memeimgKDhNKqP: [
    ':KDhNKqP:',
    'http://i.imgur.com/KDhNKqP.png',
    'meme imgur KDhNKqP'
  ],
  memeimg8xByCzL: [
    ':8xByCzL:',
    'http://i.imgur.com/8xByCzL.png',
    'meme imgur 8xByCzL'
  ],
  memeimgcfQazxC: [
    ':cfQazxC:',
    'http://i.imgur.com/cfQazxC.png',
    'meme imgur cfQazxC'
  ],
  memeimgJqEU7rK: [
    ':JqEU7rK:',
    'http://i.imgur.com/JqEU7rK.png',
    'meme imgur JqEU7rK'
  ],
  memeimgEXdFIdi: [
    ':EXdFIdi:',
    'http://i.imgur.com/EXdFIdi.png',
    'meme imgur EXdFIdi'
  ],
  memeimgl9tmxrL: [
    ':l9tmxrL:',
    'http://i.imgur.com/l9tmxrL.png',
    'meme imgur l9tmxrL'
  ],
  memeimgCrpPLaC: [
    ':CrpPLaC:',
    'http://i.imgur.com/CrpPLaC.png',
    'meme imgur CrpPLaC'
  ],
  memeimgI7w01ye: [
    ':I7w01ye:',
    'http://i.imgur.com/I7w01ye.png',
    'meme imgur I7w01ye'
  ],
  memeimgDFv0ubf: [
    ':DFv0ubf:',
    'http://i.imgur.com/DFv0ubf.png',
    'meme imgur DFv0ubf'
  ],
  memeimg3tgdZGM: [
    ':3tgdZGM:',
    'http://i.imgur.com/3tgdZGM.png',
    'meme imgur 3tgdZGM'
  ],
  memeimgGciqbCm: [
    ':GciqbCm:',
    'http://i.imgur.com/GciqbCm.png',
    'meme imgur GciqbCm'
  ],
  memeimguv36LpH: [
    ':uv36LpH:',
    'http://i.imgur.com/uv36LpH.png',
    'meme imgur uv36LpH'
  ],
  memeimgTSxMpZd: [
    ':TSxMpZd:',
    'http://i.imgur.com/TSxMpZd.png',
    'meme imgur TSxMpZd'
  ],
  memeimgs2C2Ws9: [
    ':s2C2Ws9:',
    'http://i.imgur.com/s2C2Ws9.png',
    'meme imgur s2C2Ws9'
  ],
  memeimgS7cup6f: [
    ':S7cup6f:',
    'http://i.imgur.com/S7cup6f.png',
    'meme imgur S7cup6f'
  ],
  memeimg3PbuCPo: [
    ':3PbuCPo:',
    'http://i.imgur.com/3PbuCPo.png',
    'meme imgur 3PbuCPo'
  ],
  memeimg3Z0wQ5A: [
    ':3Z0wQ5A:',
    'http://i.imgur.com/3Z0wQ5A.png',
    'meme imgur 3Z0wQ5A'
  ],
  memeimggywqYs7: [
    ':gywqYs7:',
    'http://i.imgur.com/gywqYs7.png',
    'meme imgur gywqYs7'
  ],
  memeimgqodcBza: [
    ':qodcBza:',
    'http://i.imgur.com/qodcBza.png',
    'meme imgur qodcBza'
  ],
  memeimgW6UbmDR: [
    ':W6UbmDR:',
    'http://i.imgur.com/W6UbmDR.png',
    'meme imgur W6UbmDR'
  ],
  memeimg0afUP1e: [
    ':0afUP1e:',
    'http://i.imgur.com/0afUP1e.png',
    'meme imgur 0afUP1e'
  ],
  memeimgjGQwD4d: [
    ':jGQwD4d:',
    'http://i.imgur.com/jGQwD4d.png',
    'meme imgur jGQwD4d'
  ],
  memeimgiy8UR5G: [
    ':iy8UR5G:',
    'http://i.imgur.com/iy8UR5G.png',
    'meme imgur iy8UR5G'
  ],
  memeimgvYdD8HM: [
    ':vYdD8HM:',
    'http://i.imgur.com/vYdD8HM.png',
    'meme imgur vYdD8HM'
  ],
  memeimgFkymxet: [
    ':Fkymxet:',
    'http://i.imgur.com/Fkymxet.png',
    'meme imgur Fkymxet'
  ],
  memeimg5nmSTPS: [
    ':5nmSTPS:',
    'http://i.imgur.com/5nmSTPS.png',
    'meme imgur 5nmSTPS'
  ],
  memeimgtr24sdA: [
    ':tr24sdA:',
    'http://i.imgur.com/tr24sdA.png',
    'meme imgur tr24sdA'
  ],
  memeimgYovZi9M: [
    ':YovZi9M:',
    'http://i.imgur.com/YovZi9M.png',
    'meme imgur YovZi9M'
  ],
  memeimg75PVeuB: [
    ':75PVeuB:',
    'http://i.imgur.com/75PVeuB.png',
    'meme imgur 75PVeuB'
  ],
  memeimg9WOKMNC: [
    ':9WOKMNC:',
    'http://i.imgur.com/9WOKMNC.png',
    'meme imgur 9WOKMNC'
  ],
  memeimgCopRowU: [
    ':CopRowU:',
    'http://i.imgur.com/CopRowU.png',
    'meme imgur CopRowU'
  ],
  memeimgVPHlPr9: [
    ':VPHlPr9:',
    'http://i.imgur.com/VPHlPr9.png',
    'meme imgur VPHlPr9'
  ],
  memeimgb2tAWnC: [
    ':b2tAWnC:',
    'http://i.imgur.com/b2tAWnC.png',
    'meme imgur b2tAWnC'
  ],
  memeimgNn5PrIE: [
    ':Nn5PrIE:',
    'http://i.imgur.com/Nn5PrIE.png',
    'meme imgur Nn5PrIE'
  ],
  memeimgbhfZhcE: [
    ':bhfZhcE:',
    'http://i.imgur.com/bhfZhcE.png',
    'meme imgur bhfZhcE'
  ],
  memeimgIYu5D2H: [
    ':IYu5D2H:',
    'http://i.imgur.com/IYu5D2H.png',
    'meme imgur IYu5D2H'
  ],
  memeimgB5kIIma: [
    ':B5kIIma:',
    'http://i.imgur.com/B5kIIma.png',
    'meme imgur B5kIIma'
  ],
  memeimgmv2Ze9J: [
    ':mv2Ze9J:',
    'http://i.imgur.com/mv2Ze9J.png',
    'meme imgur mv2Ze9J'
  ],
  memeimg6RO0ZFt: [
    ':6RO0ZFt:',
    'http://i.imgur.com/6RO0ZFt.png',
    'meme imgur 6RO0ZFt'
  ],
  memeimglAHzcPh: [
    ':lAHzcPh:',
    'http://i.imgur.com/lAHzcPh.png',
    'meme imgur lAHzcPh'
  ],
  memeimgq44on0T: [
    ':q44on0T:',
    'http://i.imgur.com/q44on0T.png',
    'meme imgur q44on0T'
  ],
  memeimgaQtov40: [
    ':aQtov40:',
    'http://i.imgur.com/aQtov40.png',
    'meme imgur aQtov40'
  ],
  memeimg8nKMfWT: [
    ':8nKMfWT:',
    'http://i.imgur.com/8nKMfWT.png',
    'meme imgur 8nKMfWT'
  ],
  memeimgGLxKPVn: [
    ':GLxKPVn:',
    'http://i.imgur.com/GLxKPVn.png',
    'meme imgur GLxKPVn'
  ],
  memeimg0rimDEX: [
    ':0rimDEX:',
    'http://i.imgur.com/0rimDEX.png',
    'meme imgur 0rimDEX'
  ],
  memeimg5Fcw6xe: [
    ':5Fcw6xe:',
    'http://i.imgur.com/5Fcw6xe.png',
    'meme imgur 5Fcw6xe'
  ],
  memeimgzLZI7KE: [
    ':zLZI7KE:',
    'http://i.imgur.com/zLZI7KE.png',
    'meme imgur zLZI7KE'
  ],
  memeimgvAUQeIt: [
    ':vAUQeIt:',
    'http://i.imgur.com/vAUQeIt.png',
    'meme imgur vAUQeIt'
  ],
  memeimgun9rY9L: [
    ':un9rY9L:',
    'http://i.imgur.com/un9rY9L.png',
    'meme imgur un9rY9L'
  ],
  memeimgsyXO9Z9: [
    ':syXO9Z9:',
    'http://i.imgur.com/syXO9Z9.png',
    'meme imgur syXO9Z9'
  ],
  memeimg2bcVj3J: [
    ':2bcVj3J:',
    'http://i.imgur.com/2bcVj3J.png',
    'meme imgur 2bcVj3J'
  ],
  memeimggKnXpeX: [
    ':gKnXpeX:',
    'http://i.imgur.com/gKnXpeX.png',
    'meme imgur gKnXpeX'
  ],
  memeimgmyyYs1e: [
    ':myyYs1e:',
    'http://i.imgur.com/myyYs1e.png',
    'meme imgur myyYs1e'
  ],
  memeimg8umBKBn: [
    ':8umBKBn:',
    'http://i.imgur.com/8umBKBn.png',
    'meme imgur 8umBKBn'
  ],
  memeimg0uLNqmp: [
    ':0uLNqmp:',
    'http://i.imgur.com/0uLNqmp.png',
    'meme imgur 0uLNqmp'
  ],
  memeimgrx7ncNt: [
    ':rx7ncNt:',
    'http://i.imgur.com/rx7ncNt.png',
    'meme imgur rx7ncNt'
  ],
  memeimgDJQlc7V: [
    ':DJQlc7V:',
    'http://i.imgur.com/DJQlc7V.png',
    'meme imgur DJQlc7V'
  ],
  memeimgbPbXGcK: [
    ':bPbXGcK:',
    'http://i.imgur.com/bPbXGcK.png',
    'meme imgur bPbXGcK'
  ],
  memeimgWqoiZru: [
    ':WqoiZru:',
    'http://i.imgur.com/WqoiZru.png',
    'meme imgur WqoiZru'
  ],
  memeimguGEbfPl: [
    ':uGEbfPl:',
    'http://i.imgur.com/uGEbfPl.png',
    'meme imgur uGEbfPl'
  ],
  memeimgjjQdPWI: [
    ':jjQdPWI:',
    'http://i.imgur.com/jjQdPWI.png',
    'meme imgur jjQdPWI'
  ],
  memeimgsUoz68B: [
    ':sUoz68B:',
    'http://i.imgur.com/sUoz68B.png',
    'meme imgur sUoz68B'
  ],
  memeimgYc3qLIz: [
    ':Yc3qLIz:',
    'http://i.imgur.com/Yc3qLIz.png',
    'meme imgur Yc3qLIz'
  ],
  memeimgu2pXXm2: [
    ':u2pXXm2:',
    'http://i.imgur.com/u2pXXm2.png',
    'meme imgur u2pXXm2'
  ],
  memeimgTNPlQkY: [
    ':TNPlQkY:',
    'http://i.imgur.com/TNPlQkY.png',
    'meme imgur TNPlQkY'
  ],
  memeimgODVOjNd: [
    ':ODVOjNd:',
    'http://i.imgur.com/ODVOjNd.png',
    'meme imgur ODVOjNd'
  ],
  memeimgCKeyNfw: [
    ':CKeyNfw:',
    'http://i.imgur.com/CKeyNfw.png',
    'meme imgur CKeyNfw'
  ],
  memeimgoPodmhx: [
    ':oPodmhx:',
    'http://i.imgur.com/oPodmhx.png',
    'meme imgur oPodmhx'
  ],
  memeimg42r8cGu: [
    ':42r8cGu:',
    'http://i.imgur.com/42r8cGu.png',
    'meme imgur 42r8cGu'
  ],
  memeimgfgV7UtW: [
    ':fgV7UtW:',
    'http://i.imgur.com/fgV7UtW.png',
    'meme imgur fgV7UtW'
  ],
  memeimgnYZNmTU: [
    ':nYZNmTU:',
    'http://i.imgur.com/nYZNmTU.png',
    'meme imgur nYZNmTU'
  ],
  memeimgTHe7PwP: [
    ':THe7PwP:',
    'http://i.imgur.com/THe7PwP.png',
    'meme imgur THe7PwP'
  ],
  memeimgdVbAnHD: [
    ':dVbAnHD:',
    'http://i.imgur.com/dVbAnHD.png',
    'meme imgur dVbAnHD'
  ],
  memeimgGD7ddfJ: [
    ':GD7ddfJ:',
    'http://i.imgur.com/GD7ddfJ.png',
    'meme imgur GD7ddfJ'
  ],
  memeimgu8kVP3V: [
    ':u8kVP3V:',
    'http://i.imgur.com/u8kVP3V.png',
    'meme imgur u8kVP3V'
  ],
  memeimg92MSzyK: [
    ':92MSzyK:',
    'http://i.imgur.com/92MSzyK.png',
    'meme imgur 92MSzyK'
  ],
  memeimgE8r3hI0: [
    ':E8r3hI0:',
    'http://i.imgur.com/E8r3hI0.png',
    'meme imgur E8r3hI0'
  ],
  memeimgabAkUGy: [
    ':abAkUGy:',
    'http://i.imgur.com/abAkUGy.png',
    'meme imgur abAkUGy'
  ],
  memeimghXhgdcj: [
    ':hXhgdcj:',
    'http://i.imgur.com/hXhgdcj.png',
    'meme imgur hXhgdcj'
  ],
  memeimgn8w8ow7: [
    ':n8w8ow7:',
    'http://i.imgur.com/n8w8ow7.png',
    'meme imgur n8w8ow7'
  ],
  memeimgKx6Zv1G: [
    ':Kx6Zv1G:',
    'http://i.imgur.com/Kx6Zv1G.png',
    'meme imgur Kx6Zv1G'
  ],
  memeimgonpH48h: [
    ':onpH48h:',
    'http://i.imgur.com/onpH48h.png',
    'meme imgur onpH48h'
  ],
  memeimgqTesWtP: [
    ':qTesWtP:',
    'http://i.imgur.com/qTesWtP.png',
    'meme imgur qTesWtP'
  ],
  memeimgD7dM2Z6: [
    ':D7dM2Z6:',
    'http://i.imgur.com/D7dM2Z6.png',
    'meme imgur D7dM2Z6'
  ],
  memeimgx4ne7Ag: [
    ':x4ne7Ag:',
    'http://i.imgur.com/x4ne7Ag.png',
    'meme imgur x4ne7Ag'
  ],
  memeimg3SPmqM8: [
    ':3SPmqM8:',
    'http://i.imgur.com/3SPmqM8.png',
    'meme imgur 3SPmqM8'
  ],
  memeimg5SfvJvW: [
    ':5SfvJvW:',
    'http://i.imgur.com/5SfvJvW.png',
    'meme imgur 5SfvJvW'
  ],
  memeimgIUgm06X: [
    ':IUgm06X:',
    'http://i.imgur.com/IUgm06X.png',
    'meme imgur IUgm06X'
  ],
  memeimg1soYosP: [
    ':1soYosP:',
    'http://i.imgur.com/1soYosP.png',
    'meme imgur 1soYosP'
  ],
  memeimgw1XDwg0: [
    ':w1XDwg0:',
    'http://i.imgur.com/w1XDwg0.png',
    'meme imgur w1XDwg0'
  ],
  memeimgXjKswRT: [
    ':XjKswRT:',
    'http://i.imgur.com/XjKswRT.png',
    'meme imgur XjKswRT'
  ],
  memeimgjEVc70l: [
    ':jEVc70l:',
    'http://i.imgur.com/jEVc70l.png',
    'meme imgur jEVc70l'
  ],
  memeimg1ZIsf0Q: [
    ':1ZIsf0Q:',
    'http://i.imgur.com/1ZIsf0Q.png',
    'meme imgur 1ZIsf0Q'
  ],
  memeimgPGF3l3w: [
    ':PGF3l3w:',
    'http://i.imgur.com/PGF3l3w.png',
    'meme imgur PGF3l3w'
  ],
  memeimgkTTV5jx: [
    ':kTTV5jx:',
    'http://i.imgur.com/kTTV5jx.png',
    'meme imgur kTTV5jx'
  ],
  memeimgdP0NrkD: [
    ':dP0NrkD:',
    'http://i.imgur.com/dP0NrkD.png',
    'meme imgur dP0NrkD'
  ],
  memeimgROJ0SCa: [
    ':ROJ0SCa:',
    'http://i.imgur.com/ROJ0SCa.png',
    'meme imgur ROJ0SCa'
  ],
  memeimg1Egm9Xj: [
    ':1Egm9Xj:',
    'http://i.imgur.com/1Egm9Xj.png',
    'meme imgur 1Egm9Xj'
  ],
  memeimga6nU1qg: [
    ':a6nU1qg:',
    'http://i.imgur.com/a6nU1qg.png',
    'meme imgur a6nU1qg'
  ],
  memeimgSsQT04Q: [
    ':SsQT04Q:',
    'http://i.imgur.com/SsQT04Q.png',
    'meme imgur SsQT04Q'
  ],
  memeimgg7lP95C: [
    ':g7lP95C:',
    'http://i.imgur.com/g7lP95C.png',
    'meme imgur g7lP95C'
  ],
  memeimgJYnm9VW: [
    ':JYnm9VW:',
    'http://i.imgur.com/JYnm9VW.png',
    'meme imgur JYnm9VW'
  ],
  memeimgWP6zUVT: [
    ':WP6zUVT:',
    'http://i.imgur.com/WP6zUVT.png',
    'meme imgur WP6zUVT'
  ],
  memeimglLqHBq7: [
    ':lLqHBq7:',
    'http://i.imgur.com/lLqHBq7.png',
    'meme imgur lLqHBq7'
  ],
  memeimgvML6uK5: [
    ':vML6uK5:',
    'http://i.imgur.com/vML6uK5.png',
    'meme imgur vML6uK5'
  ],
  memeimgw3WKzsd: [
    ':w3WKzsd:',
    'http://i.imgur.com/w3WKzsd.png',
    'meme imgur w3WKzsd'
  ],
  memeimg6lyPJXt: [
    ':6lyPJXt:',
    'http://i.imgur.com/6lyPJXt.png',
    'meme imgur 6lyPJXt'
  ],
  memeimgJ9OwGFW: [
    ':J9OwGFW:',
    'http://i.imgur.com/J9OwGFW.png',
    'meme imgur J9OwGFW'
  ],
  memeimggUO0EFw: [
    ':gUO0EFw:',
    'http://i.imgur.com/gUO0EFw.png',
    'meme imgur gUO0EFw'
  ],
  memeimglUobTLW: [
    ':lUobTLW:',
    'http://i.imgur.com/lUobTLW.png',
    'meme imgur lUobTLW'
  ],
  memeimgPR2etkb: [
    ':PR2etkb:',
    'http://i.imgur.com/PR2etkb.png',
    'meme imgur PR2etkb'
  ],
  memeimgrDjdcUQ: [
    ':rDjdcUQ:',
    'http://i.imgur.com/rDjdcUQ.png',
    'meme imgur rDjdcUQ'
  ],
  memeimgumie84p: [
    ':umie84p:',
    'http://i.imgur.com/umie84p.png',
    'meme imgur umie84p'
  ],
  memeimgN4kIXm6: [
    ':N4kIXm6:',
    'http://i.imgur.com/N4kIXm6.png',
    'meme imgur N4kIXm6'
  ],
  memeimg7OREabM: [
    ':7OREabM:',
    'http://i.imgur.com/7OREabM.png',
    'meme imgur 7OREabM'
  ],
  memeimgAMAxJyB: [
    ':AMAxJyB:',
    'http://i.imgur.com/AMAxJyB.png',
    'meme imgur AMAxJyB'
  ],
  memeimgPPnOfRX: [
    ':PPnOfRX:',
    'http://i.imgur.com/PPnOfRX.png',
    'meme imgur PPnOfRX'
  ],
  memeimgPYtY1lB: [
    ':PYtY1lB:',
    'http://i.imgur.com/PYtY1lB.png',
    'meme imgur PYtY1lB'
  ],
  memeimgDQa5Hqp: [
    ':DQa5Hqp:',
    'http://i.imgur.com/DQa5Hqp.png',
    'meme imgur DQa5Hqp'
  ],
  memeimg9p0ejrZ: [
    ':9p0ejrZ:',
    'http://i.imgur.com/9p0ejrZ.png',
    'meme imgur 9p0ejrZ'
  ],
  memeimgkhJK3GM: [
    ':khJK3GM:',
    'http://i.imgur.com/khJK3GM.png',
    'meme imgur khJK3GM'
  ],
  lool: [
    ':lool:',
    'http://i.imgur.com/uNjx0VR.png',
    'lool'
  ],
  badumtss: [
    ':badumtss:',
    'http://i.imgur.com/tzdK1B8.png',
    'ba dum tss'
  ],
  confident: [
    ':confident:',
    'http://i.imgur.com/sFpY0hd.png',
    'confident'
  ],
  genius: [
    ':genius:',
    'http://i.imgur.com/wOlp4gc.png',
    'genius'
  ],
  foreverablack: [
    ':foreverablack:',
    'http://i.imgur.com/eYozsXA.png',
    'FOREVER A NIGGER'
  ],
  ynot: [
    ':ynot:',
    'http://i.imgur.com/dfAkHaT.png',
    'ynot'
  ],
  plspls: [
    ':plspls:',
    'http://i.imgur.com/jrcH7iN.png',
    'plspls'
  ],
  megusta: [
    ':megusta:',
    'http://i.imgur.com/WBVqQah.png',
    'megusta'
  ],
  o: [
    ':o:',
    'http://i.imgur.com/rVrqYxb.png',
    'ooooooooooooooooooooooooooooooooooo'
  ],
  omgomg: [
    ':omgomg:',
    'http://i.imgur.com/UZ6oybV.png',
    'omgomg'
  ],
  memercy: [
    ':mercy:',
    'http://i.imgur.com/gg86lM7.png',
    'DOES THIS LOOK LIKE THE FACE OF MERCY'
  ],
  crymercy: [
    ':crymercy:',
    'http://i.imgur.com/oPf9qaH.png',
    'cry mercy'
  ],
  holyfuckingshit: [
    ':holyfuckingsh:',
    'http://i.imgur.com/Z4420t0.png',
    'holy fucking shit'
  ],
  revenge: [
    ':revenge:',
    'http://i.imgur.com/4SGUhMJ.png',
    'revenge'
  ],
  nowai: [
    ':nowai:',
    'http://i.imgur.com/VSD68iA.png',
    'no wai'
  ],
  disappoint: [
    ':disappoint:',
    'http://i.imgur.com/IuAhgG9.png',
    'disappoint'
  ],
  disappointok: [
    ':disappointok:',
    'http://i.imgur.com/cUyHPqs.png',
    'disappoint ok'
  ],
  actually: [
    ':actually:',
    'http://i.imgur.com/TEZaTei.png',
    'actually'
  ]
};
var emoticon_4 = {
  imgurdongY21xRGc: [
    ':dongintensifies:',
    'http://i.imgur.com/Y21xRGc.jpg',
    'dong intensifies'
  ],
  imgurdongfqgiO3C: [
    ':my3dpenis:',
    'http://i.imgur.com/fqgiO3C.jpg',
    'my 3d penis'
  ],
  imgurdongArbkDMd: [
    ':expand:',
    'http://i.imgur.com/ArbkDMd.jpg',
    'expand'
  ],
  imgurdongoeNPAcI: [
    ':expand2:',
    'http://i.imgur.com/oeNPAcI.jpg',
    'expand 2'
  ],
  imgurdongtYAbOEK: [
    ':expand3:',
    'http://i.imgur.com/tYAbOEK.jpg',
    'expand 3'
  ],
  imgurdongflLSGR0: [
    ':expand4:',
    'http://i.imgur.com/flLSGR0.jpg',
    'expand 4'
  ],
  imgurdongvuaw4uj: [
    ':donkeysdongcockreturns:',
    'http://i.imgur.com/vuaw4uj.jpg',
    'donkey\'s dong cock returns'
  ],
  imgurdongWsJjI1E: [
    ':poopscoop:',
    'http://i.imgur.com/WsJjI1E.jpg',
    'poop scoop'
  ],
  imgurdong7y1PZ44: [
    ':hugetropicalorgy:',
    'http://i.imgur.com/7y1PZ44.jpg',
    'huge tropical orgy'
  ],
  imgurdongihzpHyH: [
    ':analassault:',
    'http://i.imgur.com/ihzpHyH.jpg',
    'anal assault'
  ],
  imgurdongfjo5nmC: [
    ':kirbystripledeluxedong:',
    'http://i.imgur.com/fjo5nmC.jpg',
    'kirby\'s triple deluxe dong'
  ],
  imgurdongxIbjyrV: [
    ':erectpenis:',
    'http://i.imgur.com/xIbjyrV.jpg',
    'erect penis'
  ],
  imgurdongmRYvJI4: [
    ':analmassacre:',
    'http://i.imgur.com/mRYvJI4.jpg',
    'anal massacre'
  ],
  imgurdongLQTSFfn: [
    ':mariopoopsoutsand:',
    'http://i.imgur.com/LQTSFfn.jpg',
    'mario poops out sand'
  ],
  imgurdongme4YY9e: [
    ':rectalrampage:',
    'http://i.imgur.com/me4YY9e.jpg',
    'rectal rampage'
  ],
  imgurdong0pv0vet: [
    ':featurelength:',
    'http://i.imgur.com/0pv0vet.jpg',
    'feature length'
  ],
  imgurdongazKA6IF: [
    ':dickfreeze:',
    'http://i.imgur.com/azKA6IF.jpg',
    'dick freeze'
  ],
  imgurdongOIghJUa: [
    ':kirbydong:',
    'http://i.imgur.com/OIghJUa.jpg',
    'kirby dong'
  ],
  imgurdongiYMW6J2: [
    ':ratchetdong:',
    'http://i.imgur.com/iYMW6J2.jpg',
    'ratchet dong'
  ],
  imgurdongtHHKYVp: [
    ':ratchetdong2:',
    'http://i.imgur.com/tHHKYVp.jpg',
    'ratchet dong 2'
  ],
  //imgurdongI2dzif0: [':I2dzif0:', 'http://i.imgur.com/I2dzif0.jpg', "I2dzif0"],
  //imgurdongs1yPzBV: [':s1yPzBV:', 'http://i.imgur.com/s1yPzBV.jpg', "s1yPzBV"],
  imgurdongtTQ4gPh: [
    ':giantfurrycockblast:',
    'http://i.imgur.com/tTQ4gPh.jpg',
    'giant furry cock blast'
  ],
  imgurdongqzquWaX: [
    ':legendarynuts:',
    'http://i.imgur.com/qzquWaX.jpg',
    'legendary nuts'
  ],
  imgurdongEpFtLXq: [
    ':dongstrong:',
    'http://i.imgur.com/EpFtLXq.jpg',
    'dong strong'
  ],
  imgurdongLLG1h6k: [
    ':uwutm8:',
    'http://i.imgur.com/LLG1h6k.jpg',
    'u wut m8'
  ],
  imgurdongBbshOLd: [
    ':idiotsheroes:',
    'http://i.imgur.com/BbshOLd.jpg',
    'idiots heroes'
  ],
  imgurdonggZO4oUl: [
    ':penntrash:',
    'http://i.imgur.com/gZO4oUl.jpg',
    'penn jilette trash'
  ],
  imgurdonglRIdSx8: [
    ':fuckingcasuals:',
    'http://i.imgur.com/lRIdSx8.jpg',
    'fucking casuals'
  ],
  imgurdong0z3SmD2: [
    ':cancerdong:',
    'http://i.imgur.com/0z3SmD2.jpg',
    'cancer dong'
  ],
  imgurdongz0ii3nI: [
    ':minionsdong:',
    'http://i.imgur.com/z0ii3nI.jpg',
    'minions dong'
  ],
  //imgurdongha5rqDd: [':ha5rqDd:', 'http://i.imgur.com/ha5rqDd.jpg', "ha5rqDd"],
  //imgurdongRWom78Q: [':RWom78Q:', 'http://i.imgur.com/RWom78Q.jpg', "RWom78Q"],
  imgurdongkv965M0: [
    ':expansionpak:',
    'http://i.imgur.com/kv965M0.jpg',
    'expansion pak'
  ],
  imgurdongll5mzvy: [
    ':dongnews:',
    'http://i.imgur.com/ll5mzvy.jpg',
    'dong news'
  ],
  imgurdonggXeBqOI: [
    ':batdong:',
    'http://i.imgur.com/gXeBqOI.jpg',
    'bat dong'
  ],
  imgurdongoXxMcF0: [
    ':captainunderdong:',
    'http://i.imgur.com/oXxMcF0.jpg',
    'captain underdong'
  ],
  imgurdongPkC0sSx: [
    ':batmanrobindong:',
    'http://i.imgur.com/PkC0sSx.jpg',
    'batman robin dong'
  ],
  imgurdongd9o2Idt: [
    ':fnaf:',
    'http://i.imgur.com/d9o2Idt.jpg',
    'fnaf rape'
  ],
  imgurdong6SXNd6T: [
    ':wheresthedong:',
    'http://i.imgur.com/6SXNd6T.jpg',
    'where\'s the dong'
  ],
  imgurdongNg8P2Vv: [
    ':erection:',
    'http://i.imgur.com/Ng8P2Vv.jpg',
    'erection'
  ],
  imgurdongAScga26: [
    ':erectionrising:',
    'http://i.imgur.com/AScga26.jpg',
    'erection rising'
  ],
  imgurdongRtnXPSc: [
    ':expand5:',
    'http://i.imgur.com/RtnXPSc.jpg',
    'expand 5'
  ],
  imgurdonguFNPVMN: [
    ':expand6:',
    'http://i.imgur.com/uFNPVMN.jpg',
    'expand 6'
  ],
  //imgurdongagtHxDU: [':agtHxDU:', 'http://i.imgur.com/agtHxDU.jpg', "agtHxDU"],
  imgurdongITi1XAI: [
    ':freedankcuntclotcrunch:',
    'http://i.imgur.com/ITi1XAI.jpg',
    'free dank cunt clot crunch'
  ],
  imgurdong2aSBhVZ: [
    ':ponydong:',
    'http://i.imgur.com/2aSBhVZ.jpg',
    'pony dong'
  ],
  imgurdongak7Is71: [
    ':dongsquidward:',
    'http://i.imgur.com/ak7Is71.jpg',
    'dong squidward'
  ],
  imgurdongkXYUEc4: [
    ':suffermore:',
    'http://i.imgur.com/kXYUEc4.jpg',
    'suffer more'
  ],
  imgurdongE1HYLvI: [
    ':packingabigschlong:',
    'http://i.imgur.com/E1HYLvI.jpg',
    'packing a big schlong'
  ],
  cenasnap: [
    ':cenasnap:',
    'http://i.imgur.com/3OgWxPJ.gif',
    'OH SNAP CENA'
  ],
  cenaconfused: [
    ':cenaconfused:',
    'http://i.imgur.com/sxlGqjI.gif',
    'CONFUSED CENA'
  ],
  cenalaugh: [
    ':cenalaugh:',
    'http://i.imgur.com/uiW8eOZ.gif',
    'CENA WHEN HE IS TOLD ABOUT DEAD KIDS'
  ],
  cenashrink: [
    ':cenashrink:',
    'http://i.imgur.com/B1zcAL4.gif',
    'SHRINKING CENA'
  ],
  cenacantwrestle: [
    ':cenacantwrestle:',
    'http://i.imgur.com/lxRchNh.gif',
    'CENA CAN\'T WRESTLE'
  ],
  cenaconfused2: [
    ':cenaconfused2:',
    'http://i.imgur.com/cj4Ri1g.gif',
    'CONFUSED CENA 2'
  ],
  cenaepilepsy: [
    ':cenaepilepsy:',
    'http://i.imgur.com/UVQDNnV.gif',
    'EPILEPSY CENA'
  ],
  dongcena: [
    ':dongcena:',
    'http://i.imgur.com/tQgelof.gif',
    'IT\'S DONG CENA'
  ]
};
///////
///////SPECIAL TEXT THAT NEEDS TO BE FORMATTED
var maymay = {
  sombre: [
    'sombre',
    '[font=monospace][size=14][b][color=red]S[/color] [color=orange]O[/color] [color=yellow]M[/color] [color=blue]B[/color] [color=indigo]R[/color] [color=violet]E[/color][/b][/size][/font]'
  ],
  doors: [
    'the doors',
    '[i]the doors[/i]'
  ],
  hawk: [
    'cantstopthehawk',
    '[size=15] [i] [b] [blur] [color=#fbca33] C A N T S T O P T H E H A W K [/size] [/color] [/i] [/b] [/blur]'
  ],
  donger: [
    'donger',
    '[size=29][b][font=impact]DONGER[/font][/b][/size]'
  ],
  esca: [
    'that escalated',
    '[size=20][font=impact]THAT ESCALATED[/font][/size]'
  ],
  fast: [
    'gottagofast',
    '[color=green][font=comic sans ms][size=18][i]Gotta Go Fast !!![/i][/size][/font][/color]'
  ],
  minty: [
    'minty',
    '[img]http://i60.tinypic.com/2hzkc5y.png[/img][blur][b][color=#98FF98] MINTY[/color][/b][/blur]'
  ],
  lenny: [
    ':lenny:',
    '( ͡° ͜ʖ ͡°)'
  ], // cancer during browser edit
  // (firefox)
  dongers: [
    ':raise:',
    'ヽ༼ຈل͜ຈ༽ﾉ raise your dongers ヽ༼ຈل͜ຈ༽ﾉ'
  ], // cancer
  hamster: [
    ':hamster:',
    '(•ω•)'
  ],
  greeneggs: [
    ':geggs:',
    '[b][color=green]GREEN EGGS[/color][/b] [size=10][i]And[/i][/size] [size=16][b][i][color=black][u]THOUGHTS OF SUICIDE[/u][/color][/i][/b][/size] [size=14]( ͡° ʖ̯ ͡°)[/size]'
  ], // cancer
  rekt: [
    ':rekt:',
    '[size=19][font=impact][blur][b][color=red]☐ Not REKT ☑ REKT ☑ REKTangle ☑ SHREKT ☑ REKT-it Ralph ☑ Total REKTall ☑ The Lord of the REKT ☑ The Usual SusREKTs ☑ North by NorthREKT ☑ REKT to the Future ☑ Once Upon a Time in the REKT ☑ The Good, the Bad, and the REKT ☑ LawREKT of Arabia ☑ Tyrannosaurus REKT ☑ eREKTile dysfunction [/color][/b][/blur][/font][/size]'
  ],
  danked: [
    ':danked:',
    '[color=red][b](USER WAS BANNED FOR THIS DANK)[/b][/color]'
  ],
  blazed420: [
    '420 blaze it',
    '[b][font=Comic Sans MS][color=#FF0000]4[/color][color=#FD2A00]2[/color][color=#FC5500]0[/color] [color=#F9AA00]B[/color][color=#F8D400]L[/color][color=#F6FF00]A[/color][color=#CDFF00]Z[/color][color=#A4FF00]E[/color] [color=#52FF00]I[/color][color=#29FF00]T[/color][/font][/b]'
  ],
  checkem: [
    ':checkem:',
    '[size=15][font=impact]C[/font][/size][size=20][font=impact]H[/font][/size][size=15][font=impact]E[/font][/size][size=20][font=impact]C[/font][/size][size=15][font=impact]K[/font][/size][size=20][font=impact] [/font][/size][size=15][font=impact]E[/font][/size][size=20][font=impact]M[/font][/size]'
  ],
  ohshit: [
    ':ohshi:',
    '[b][font=Comic Sans MS][color=#665203]O[/color][color=#6B5304]O[/color][color=#715405]O[/color][color=#765506]O[/color][color=#7C5708]H[/color] [color=#87590B]S[/color][color=#765109]H[/color][color=#664808]I[/color][color=#563F06]I[/color][color=#463605]I[/color][color=#362D03]T[/color][/font][/b]'
  ],
  ieatass: [
    ':ieat:',
    '[i]ケツを食ベる[/i]'
  ],
  olaf: [
    ':olaf:',
    '[b][font=Courier New][size=16][color=#3BED44]h[/color][color=#1137CE]e[/color][color=#6D2645]l[/color][color=#4B20D2]o[/color] [color=#BEF7E8]m[/color][color=#66D74E]y[/color] [color=#950C47]n[/color][color=#9F65A4]a[/color][color=#196650]m[/color][color=#88DA22]e[/color] [color=#BD7B33]i[/color][color=#ED8A9F]s[/color] [color=#4BD338]o[/color][color=#6B6743]l[/color][color=#47D647]a[/color][color=#5D1908]f[/color][/size][/font][/b]'
  ],
  yes: [
    ':yes:',
    '[size=6]yes,[/size] yes YES [size=26]YES[/size]'
  ],
  hitler: [
    ':hitler:',
    '[IMG]http://i.imgur.com/jowqkg9.gif[/IMG] [size=26][b]ADOLF NITLER CONFIRMED FOR JEW[/b][/size] [IMG]http://i.imgur.com/jowqkg9.gif[/IMG]'
  ],
  anonymoose: [
    ':anonymoose:',
    '[b][font=Comic Sans MS][color=#3BED44]A[/color][color=#1137CE]N[/color][color=#6D2645]O[/color][color=#4B20D2]N[/color][color=#C9EE35]Y[/color][color=#BEF7E8]M[/color][color=#66D74E]O[/color][color=#702B82]O[/color][color=#950C47]S[/color][color=#9F65A4]E[/color] [color=#88DA22]W[/color][color=#332E39]E[/color] [color=#ED8A9F]O[/color][color=#86306E]N[/color][color=#4BD338]L[/color][color=#6B6743]Y[/color] [color=#5D1908]S[/color][color=#3764FE]W[/color][color=#19A9D8]A[/color][color=#346143]L[/color][color=#E3A6B6]L[/color][color=#5447A3]O[/color][color=#21032A]W[/color] [color=#6183A4]N[/color][color=#0E4A2B]E[/color][color=#06790B]V[/color][color=#19B543]E[/color][color=#08930B]R[/color] [color=#B5AE1A]S[/color][color=#406842]P[/color][color=#C3F745]I[/color][color=#DC2D64]T[/color][/font][/b]'
  ],
  ripped: [
    ':rip:',
    '[b][font=Impact][size=20][color=#3BED44]r[/color][color=#1137CE]i[/color][color=#6D2645]p[/color] [color=#C9EE35]i[/color][color=#BEF7E8]n[/color] [color=#702B82]p[/color][color=#950C47]i[/color][color=#9F65A4]e[/color][color=#196650]c[/color][color=#88DA22]e[/color][color=#332E39]s[/color][/size][/font][/b]'
  ],
  toa: [
    'toa',
    '[img]http://i61.tinypic.com/cmjk6.png[/img]'
  ],
  murica: [
    'murica',
    '[b][font=Comic Sans MS][color=#FF0000]M[/color][color=#FF5555]U[/color][color=#FFAAAA]R[/color][color=#FFFFFF]I[/color][color=#AAAAFF]C[/color][color=#5555FF]A[/color][/font][/b]'
  ],
  lenny2: [
    ':lenny2:',
    '( ͡ຈ╭͜ʖ╮͡ຈ )'
  ], // cancer during browser edit
  // (firefox)
  lenny3: [
    ':lenny3:',
    '( ͡ಠ ʖ̯ ͡ಠ)'
  ], // cancer during browser edit
  // (firefox)
  lenny4: [
    ':lenny4:',
    '( ͡~ ͜ʖ ͡~)'
  ], // cancer during browser edit
  // (firefox)
  lenny5: [
    ':lenny5:',
    '( ͡~ ͜ʖ ͡°)'
  ], // cancer during browser edit
  // (firefox)
  lenny6: [
    ':lenny6:',
    '( ͠° ͟ʖ ͡°)'
  ], // cancer during browser edit
  // (firefox)
  lenny7: [
    ':lenny7:',
    '( ͡ʘ╭͜ʖ╮͡ʘ)'
  ], // cancer during browser edit
  // (firefox)
  lenny8: [
    ':lenny8:',
    '( ͝סּ ͜ʖ͡סּ)'
  ], // cancer during browser edit
  // (firefox)
  lenny9: [
    ':lenny9:',
    '( ͡ᵔ ͜ʖ ͡ᵔ )'
  ], // cancer during browser edit
  // (firefox)
  lenny10: [
    ':lenny10:',
    '( ͡^ ͜ʖ ͡^ )'
  ], // cancer during browser edit
  // (firefox)
  lenny11: [
    ':lenny11:',
    '[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]'
  ], // cancer during
  // browser edit
  // (firefox)
  lenny12: [
    ':lenny12:',
    '( ͡ຈ ͜ʖ ͡ຈ)'
  ], // cancer during browser edit
  // (firefox)
  lenny13: [
    ':lenny13:',
    '( ͡° ʖ̯ ͡°)'
  ], // cancer during browser edit
  // (firefox)
  lenny14: [
    ':lenny14:',
    '( ͡ ͜ʖ ͡ )'
  ], // cancer during browser edit
  // (firefox)
  lenny15: [
    ':lenny15:',
    '(☞ ͡° ͜ʖ ͡°)☞'
  ], // cancer during browser edit
  // (firefox)
  lenny16: [
    ':lenny16:',
    'ᕕ( ͡° ͜ʖ ͡° )ᕗ'
  ], // cancer during browser
  // edit (firefox)
  lenny17: [
    ':lenny17:',
    '( ͡°╭͜ʖ╮͡° )'
  ], // cancer during browser edit
  // (firefox)
  lenny18: [
    ':lenny18:',
    '( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ( ͡° ͜ʖ ͡°) ͜ʖ ͡°)ʖ ͡°)ʖ ͡°)'
  ], // cancer
  // during
  // browser
  // edit
  // (firefox)
  lenny19: [
    ':lenny19:',
    '(つ ͡° ͜ʖ ͡°)つ'
  ], // cancer during browser edit
  // (firefox)
  lenny20: [
    ':lenny20:',
    '( ͡⚆ ͜ʖ ͡⚆)'
  ], // cancer during browser edit
  // (firefox)
  lenny21: [
    ':lenny21:',
    '¯_( ͠° ͟ʖ °͠ )_/¯'
  ], // cancer during browser
  // edit (firefox)
  lenny22: [
    ':lenny22:',
    '(▀ ͜ʖ ͡°)'
  ], // cancer during browser edit
  // (firefox)
  raise2: [
    ':raise2:',
    'ヽ༼ຈل͜ຈ༽ﾉ гคเรє ๏г ๔เє ヽ༼ຈل͜ຈ༽ﾉ'
  ], // cancer during
  // browser edit
  // (firefox)
  nyan: [
    ':nyan:',
    '~=[,,_,,]:3'
  ],
  woop: [
    ':woop:',
    '[ \\[size=10]\\[/size][size=9]\\[/size][size=8]\\[/size][size=7]\\[/size][size=6]\\[/size][size=7]\\[/size][size=8]\\[/size][size=9]\\[/size][size=10]\\[/size]\\ ]'
  ], // dupe
  // the
  // backslashes
  seed: [
    ':seed:',
    '[color=red][b]EVEN NOW... THE EVIL SEED OF WHAT YOU\'VE DONE GERMINATES WITHIN YOU[/b][/color]'
  ],
  sniper: [
    ':sniper:',
    '▄︻̷̿┻̿═━一'
  ],
  notgivinashit: [
    ':notgivinash:',
    '¯_(ツ)_/¯'
  ],
  ameno: [
    ':ameno:',
    '༼ つ ◕_◕ ༽つ'
  ],
  brickwall: [
    ':brickwall:',
    '┬┴┬┴┤(･_├┬┴┬┴'
  ],
  mac10: [
    ':mac10:',
    '⌐╦╦═─'
  ],
  faceroll: [
    ':faceroll:',
    '(._.) ( l: ) ( .-. ) ( :l ) (._.)'
  ],
  tablefix: [
    ':tablefix:',
    '┬──┬ ノ( ゜-゜ノ)'
  ],
  wellmemed: [
    ':memed',
    '[IMG]http://i58.tinypic.com/2s8o4g8.png[/IMG]'
  ],
  gottago: [
    ':gofast:',
    '[scroll][font=Comic Sans MS][size=26][blur][color=green][i]GOTTA GO FAST[/i][/color][/blur][/size][/font][list][*][/list][img]http://i61.tinypic.com/2hdmr2f.png[/img][img]http://i61.tinypic.com/2hdmr2f.png[/img][img]http://i61.tinypic.com/2hdmr2f.png[/img][/scroll]'
  ],
  destroy: [
    ':destroy:',
    '[size=26]DESTROY[/size][size=23]DESTROY[/size][size=20]DESTROY[/size][size=17]DESTROY[/size][size=14]DESTROY[/size][size=11]DESTROY[/size][size=9]DESTROY[/size][size=6]DESTROY[/size][size=3]DESTROY[/size]'
  ],
  logout: [
    ':logout:',
    '[url=https://i.imgur.com/7XClKSN.png?1]http://superlogout.com/[/url]'
  ],
  abuse: [
    ':abuse:',
    '[img]http://i.imgur.com/cAxpwdm.gif[/img]'
  ],
  square: [
    'Square',
    '□'
  ],
  mindlessretard: [
      ':mindlessretard:',
      'ຈل͜ຈ ɪ ᴄᴛʀʟ ᴠ ᴛʜɪɴɢs ɪɴᴛᴏ ᴄʜᴀᴛ ʙᴇᴄᴀᴜsᴇ ɪ ᴀᴍ ᴀ ᴍɪɴᴅʟᴇss ʀᴇᴛᴀʀᴅ ຈل͜ຈ'
    ]
    /*,
        tbh: [
          'tbh',
          'tbh (to be honest)'
        ],
        smh: [
          'smh',
          'smh (shaking my head)'
        ],
        fam: [
          'fam',
          'fam (family)'
        ],
        bro: [
          'bro',
          'bro (brother)'
        ]*/
};
///////
var endings = [
  ' and cant no hood fuck with death rizzow[dot]',
  ' and my money on my mind[dot]',
  ' and yo momma[dot]',
  ' aww nah[dot]',
  ' bitch ass nigga[dot]',
  ' but real niggaz don\'t give a fuck[dot]',
  ' cuz I put gangsta rap on tha map[dot]',
  ' cuz Im tha Double O G[dot]',
  ' cuz I\'m fresh out the pen[dot]',
  ' cuz its a doggy dog world[dot]',
  ' cuz its a G thang[dot]',
  ' cuz its a pimp thang[dot]',
  ' cuz this is how we do it[dot]',
  ' dogg[dot]',
  ' doggystyle[dot]',
  ' droppin hits[dot]',
  ' fo all my homies in the pen[dot]',
  ' fo gettin yo pimp on[dot]',
  ' fo my bling bling[dot]',
  ' fo\' real[dot]',
  ' fo\' sheezy[dot]',
  ' fo\' sho\'[dot]',
  ' fo yo bitch ass[dot]',
  ' from tha streets of tha L-B-C[dot]',
  ' gangsta style[dot]',
  ' hittin that booty[dot]',
  ' in all flavas[dot]',
  ' if you gots a paper stack[dot]',
  ' in tha dogg pound[dot]',
  ' in tha hood[dot]',
  ' in tha mutha fuckin club[dot]',
  ' keep\'n it real yo[dot]',
  ' like a motha fucka[dot]',
  ' like a tru playa\'[dot]',
  ' like old skool shit[dot]',
  ' like this and like that and like this and uh[dot]',
  ' mah nizzle[dot]',
  ' n shit[dot]',
  ' n we out!',
  ' now motherfuckers lemme here ya say hoe[dot]',
  ' now pass the glock[dot]',
  ' paper\'d up[dot]',
  ' puttin tha smack down[dot]',
  ' ridin\' in mah double R[dot]',
  ' sho nuff[dot]',
  ' so bow down to the bow wow!',
  ' so i can get mah pimp on[dot]',
  ' so jus\' chill[dot]',
  ' so show some love, niggaz!',
  ' so sit back relax new jacks get smacked[dot]',
  ' so you betta run and grab yo glock[dot]',
  ' spittin\' that real shit[dot]',
  ' straight from long beach nigga[dot]',
  ' ta help you tap dat ass[dot]',
  ' to increase tha peace[dot]',
  ' thats off tha hook yo[dot]',
  ' upside yo head[dot]',
  ' where the sun be shinin and I be rhymin\'[dot]',
  ' wit da big Bo$$$ Dogg[dot]',
  ' with my forty-fo\' mag[dot]',
  ' with my hoes on my side, and my strap on my back',
  ' with the gangsta shit that keeps ya hangin[dot]',
  ' with the S-N-double-O-P[dot]',
  ' ya dig?',
  ' ya feelin\' me?',
  ' yaba daba dizzle[dot]',
  ' yeah yeah baby[dot]',
  ', betta check yo self[dot]',
  ', chill yo[dot]',
  ', know what im sayin?',
  ', niggaz, better recognize[dot]',
  ', ya feel me?',
  '[dot] Aint no killin\' everybodys chillin\'[dot]',
  '[dot] Aint no L-I-M-I-to-tha-T[dot]',
  '[dot] Aint no stoppin\' this shit nigga[dot]',
  '[dot] Anotha dogg house production[dot]',
  '[dot] Boo-Yaa!',
  '[dot] Boom bam as I step in the jam, God damn[dot]',
  '[dot] Bounce wit me[dot]',
  '[dot] Bow wow wow yippee yo yipee yay[dot]',
  '[dot] Chill as I take you on a trip[dot]',
  '[dot] Death row 187 4 life[dot]',
  '[dot] Dogg House Records in the motha fuckin house[dot]',
  '[dot] Drop it like its hot[dot]',
  '[dot] Fo\'-fo\' desert eagle to your motherfuckin\' dome[dot]',
  '[dot] Freak y\'all, into the beat y\'all[dot]',
  '[dot] Holla!',
  '[dot] Hollaz to the East Side[dot]',
  '[dot] I started yo shit and i\'ll end yo\' shit[dot]',
  '[dot] I thought i told ya, nigga I\'m a soldier[dot]',
  '[dot] Ill slap tha taste out yo mouf[dot]',
  '[dot] Im a bad boy wit a lotta hos[dot]',
  '[dot] Im crazy, you can\'t phase me[dot]',
  '[dot] I\'m a mutha fuckin 2-time felon[dot]',
  '[dot] It dont stop till the wheels fall off[dot]',
  '[dot] Its just anotha homocide[dot]',
  '[dot] It\'s your homie snoop dogg from the dpg[dot]',
  '[dot] Keep the party crackin while I\'m steady rappin[dot]',
  '[dot] Keep\'n it gangsta dogg[dot]',
  '[dot] Listen to how a motherfucker flow shit[dot]',
  '[dot] Nigga get shut up or get wet up[dot]',
  '[dot] One, two three and to tha four[dot]',
  '[dot] Put ya mutha fuckin choppers up if ya feel this[dot]',
  '[dot] Real niggas recognize the realness[dot]',
  '[dot] Relax, cus I\'m bout to take my respect[dot]',
  '[dot] Slap your mutha fuckin self[dot]',
  '[dot] Snoop dogg is in this bitch[dot]',
  '[dot] Snoop heffner mixed with a little bit of doggy flint[dot]',
  '[dot] Subscribe nigga, get yo issue[dot]',
  '[dot] They call me tha black folks president[dot]',
  '[dot] Throw yo guns in the motherfuckin air[dot]',
  '[dot] Tru niggaz do niggaz[dot]',
  '[dot] Wussup to all my niggaz in the house[dot]',
  '[dot] Ya fuck with us, we gots to fuck you up[dot]',
  '[dot] Yippie yo, you can\'t see my flow[dot]',
  '[dot] You gotta check dis shit out yo[dot]',
  '[dot] You\'se a flea and I\'m the big dogg[dot]',
  ' because doggs make tha world a better place!',
  ' let me holla at u[dot]',
  ' #YaDigg !',
  '[dot] Living young n wild n free !',
  '[dot] Put your feet up n take a breath !',
  '[dot] Smells like tha good shit[dot]',
  '[dot] Snoop du jour !',
  '[dot] wat it do ??'
];
var replacements = {
  '\\babout\\b': '\'bout',
  '\\bam\\b': 'be',
  '\\band\\b': 'n',
  '\\bare\\b': 'is',
  '\\bawesome\\b': 'off tha hook',
  '\\bbecause\\b': 'coz',
  '\\bbeing\\b': 'bein',
  '\\bboy\\b': 'boi',
  '\\bcar\\b': 'ride',
  '\\bcars\\b': 'ridez',
  '\\bchurch\\b': 'chuch',
  '\\bcities\\b': 'hoodz',
  '\\bcomrades\\b': 'posse',
  '\\bcute\\b': 'skanky',
  '\\bdog\\b': 'dogg',
  '\\bdriving\\b': 'rollin\'',
  '\\eed\\b': 'ee\'',
  '\\bfor\\b': 'fo`',
  '\\bfriend\\b': 'nigga',
  '\\bfriends\\b': 'niggaz',
  '\\ged\\b': 'ge\'',
  '\\bget\\b': 'git',
  '\\bgot\\b': 'gots',
  '\\bgreat\\b': 'bootylicious',
  '\\bgun\\b': 'gat',
  '\\bguns\\b': 'gats',
  '\\bguy\\b': 'homey',
  '\\bhappy\\b': 'stoked',
  '\\head': 'heezee',
  '\\bhouse\\b': 'hizouse',
  '\\ied\\b': 'y',
  '\\bin\\b': '\'n',
  '\\binformation\\b': '411',
  '\\bis\\b': 'be',
  '\\bkilled\\b': 'iced',
  '\\bkilling\\b': 'cappin\'',
  '\\blil\\b': 'shawty',
  '\\blil\'\\b': 'shawty',
  '\\blittle\\b': 'shawty',
  '\\bmad\\b': 'buggin\'',
  '\\bman\\b': 'dawg',
  '\\bmy\\b': 'mah',
  '\\bnice\\b': 'funky ass',
  '\\bnothing\\b': 'nuttin',
  '\\ool\\b': 'oo\'',
  '\\bpeculiar\\b': 'perculiar',
  '\\bpeople\\b': 'thugz',
  '\\bplayers\\b': 'playas',
  '\\bplease\\b': 'pleaze',
  '\\bpolice\\b': 'po-po',
  '\\bsays\\b': 'sez',
  'se\\b': 'ze',
  'sed\\b': 'zed',
  'ses\\b': 'zes',
  '\\bsomething\\b': 'sum-m sum-m',
  '\\bsuper\\b': 'snoopa',
  '\\btake\\b': 'takes',
  '\\btalk\\b': 'rap',
  '\\btelevision': 'televizzle',
  '\\bthe\\b': 'tha',
  '\\btheir\\b': 'they',
  '\\bthis\\b': 'dis',
  '\\bto\\b': 'ta',
  '\\btown\\b': 'ghetto',
  '\\btv\\b': 't-vizzle',
  '\\bTV\\b': 'T-Vizzle',
  '\\bwith': 'wit',
  '\\bwomen\\b': 'bitchez',
  '\\byour\\b': 'yo\'',
  '\\byourself\\b': 'yoself',
  '\\byou\'re\\b': 'yoe',
  '\\byou\'ve\\b': 'you',
  '\\zed\\b': 'ze\'',
  '\\\'s\\b': '',
  '\\ers\\b': 'a',
  '\\er\\b': 'a',
  '\\ings\\b': '\'n',
  '\\ing\\b': '\'n',
  '\\bdo you\\b': 'd-ya',
  '\\bor anything\\b': 'or nothin\' trippin\'',
  '\\bwith a\\b': 'witta',
  '\\byou all\\b': 'y-aw',
  '\\byou\'re all\\b': 'y-aw',
  'friend': 'feminist',
  'geometry dash': 'john cena',
  'car': 'cat',
  'guy': 'lad',
  'girl': 'lady',
  'yanis': 'dickbutt',
  'kaff': 'mouth farts',
  'sex': 'shemale porn addiction',
  'fnaf': 'i\'m a faggot mods please ban me',
  'shockey': 'shockey\'s big black cock',
  'matr0xx': 'NANANANANANANANA PROXYMAN',
  'witness': 'these dudes i know',
  'shiz': 'shizzle',
  ' www\\.': ' here\'s a nice porn site www.',
  //"\\. ": "izzle. ",
  'phone': 'pokedex',
  'mortal kombat': 'moral kombat',
  'nfm': 'super columbine massacre rpg',
  'dong': 'dong cena',
  'study': 'tumblr post',
  'security': 'suicide',
  'donald trump': 'obama',
  'jv': 'my dick',
  'aim': 'gizoogle',
  'rafa': 'olaf',
  'raga': 'rafa',
  'big jilm': 'big brazilian cock',
  'dark meat': 'the jews',
  'shit': 'shizznit',
  'meme': 'weed',
  'doge': 'drugs',
  'cake': 'cocaine',
  'cloud': 'butt',
  'fuck': 'fuck a doodle doo',
  'dick': 'good man',
  '11': 'the holocaust',
  'adolf hitler': 'osama bin laden',
  'meeting': 'school shooting',
  'raped': 'visited 4chan',
  'rape': '4chan visit',
  'raping': 'wanking to ponies',
  'mlp': 'cum in my butt',
  'america': 'brazil',
  'ireland': 'africa',
  'britain': 'sorry, i\'m afraid john cena is not a planet',
  'stage maker': 'men\'s rights activist',
  'nigger': 'kike',
  'venomalix': 'niger',
  'sano': 'insano',
  'mcroger': 'dildo',
  'prayers': 'highlander',
  'avalanche': 'avalanche of dicks',
  'sinfulbliss': 'pissing fetish',
  'sin': 'pissing fetish',
  'dad': 'darth vader',
  'mom': 'rammstein',
  'isis': 'allahu akbar',
  'backflipbadger': 'big boobed',
  'reddit': 'porn site',
  'legnak': 'drunk fat trucker',
  'rad1': 'dick.rad',
  'black dragon': 'guy that pretends to be a book writer',
  'wb ': 'i wanna fuck ',
  'brown': 'ugly',
  'black': 'zebra',
  ' joined the chat on ': 'DISREGARD THAT I SUCK COCKS',
  ' has been kicked by ': 'DISREGARD THAT I SUCK COCKS',
  'whore': 'little girl that i rape every night',
  'is home': 'is locked up in my basement',
  '\'s home': '\'s locked up in my basement',
  'idiot': 'nun',
  'faggot': 'crackhead',
  'lmao': 'lemons',
  'ayy': 'yo wtf bbq',
  'ban': 'blan',
  'up in this': 'right up in ye\'',
  'don\'t know': 'are guilty and everyone knows it',
  'doesn\'t know': 'is guilty and everyone knows it',
  'spoiler': 'crankshaft',
  'chat mod': 'ip\'s sex slave',
  'motherfucker': 'foot fetishist',
  'aureus': 'aureus fucking aisling',
  'spam': ':DD:D::DD:D:D:D:DDDDD',
  'fire': 'burn',
  'trying': 'failing',
  'fuel': 'gimme fuel, gimme fire, gimme that which i desire',
  'they': 'those faggots',
  'swearify': 'virus',
  'rip': 'dick ripped',
  'minecraft': 'gay fag',
  'he ': 'this asshole ',
  'him ': 'this asshole ',
  'girlfriend': 'tumblr user',
  'username': 'schlong\'s size',
  'fucking': 'foot fucking',
  'awake': 'drunk',
  'games': 'violence',
  'going to': 'going to kill and',
  'pls': 'pls fuck me, also',
  'chatbox': 'porn home',
  'autist': 'fat autist slob',
  'best': 'worst',
  'my crush': 'jack thompson',
  'head shot': 'dick punch',
  'headshot': 'dick punch',
  'ham': 'hemp',
  'meat': 'vegan food',
  'failing': 'sucking dick',
  'New York': 'West Ham',
  'subscribe': 'eat shit',
  'read the bible': 'molest little boys',
  'tragedy': 'doom map',
  'kids': 'dead bodies',
  'hiding': 'burying the bodies',
  'god': 'lie *tips fedora*',
  'gone': 'dead',
  'a party': '9/11',
  'party': '9/11',
  'wwe': 'rape case',
  'hulk hogan': '[REDACTED]',
  'chris benoit': '[REDACTED]',
  'horrible': 'fucking amazing',
  'nuts': 'balls deep insane',
  'nut': 'nut cracker',
  'mario': 'cannibal',
  'sarcasm': 'cannibal corpse',
  'beck': 'anal cunt',
  'ween': 'afroman',
  'wee': 'willy',
  'omar waly': 'omartian willy',
  'kinetico': 'cinema',
  'animal': 'pikachu',
  'agility': 'kill bill',
  'agil': 'kill bill',
  'youtube': 'you lube',
  'lol': 'gazorpazorp',
  'number': 'numberwang',
  'vizual': 'we got a visual on the suspect',
  'viz': 'we got a visual on the suspect',
  'pie': 'pi',
  'damn': 'darn',
  //'wee': 'willy',
  'ing ': 'in\' ',
  'er ': 'a\' ',
  'ers ': 'as\' ',
  'yes': 'ya yes yis',
  'your': 'yur',
  'main': 'mayy',
  'etc': 'ayyytc',
  'russia': 'glory to arstotzka',
  'http': 'here\'s a nice porn site http',
  'habbo': 'online dating sim',
  'roblox': 'cockblox',
  'java': 'ass',
  'ear rape': 'good music',
  'doxx': 'tumblr fetish',
  'var': 'yarr',
  'the ': 'ye ol\' ',
  //'idiot': 'doofus',
  'offended': 'raped',
  'transexual': 'transformer',
  'pissed': 'filled with cum',
  'video game': 'crack cocaine',
  'eat': 'shit',
  'bad': '[url=https://www.youtube.com/watch?v=S7FsAgPuVwU]greasy[/url]',
  'pornstar': 'my parents',
  'chemical': 'cummical',
  '10 graves': '10 tits',
  'ten graves': 'ten tits',
  '10th': 'ten tits',
  '99': '95 + 4 pennies, add that shit up',
  'war': 'wat',
  'what': 'what fuuck',
  'football': 'rugby',
  'still': 'still dre',
  '2': 'ms-dos',
  '6': 'half',
  '13': 'baker\'s dozen',
  'tornado shark': 'stiff gaucho',
  'lead': 'karsh',
  'my country': 'kazakhstan',
  'banned': '[size=29]B&[/size]',
  'food': 'juicy steak',
  'died': 'deidhs',
  //'lol': 'not funny at all',
  'bye': 'help i\'m trapped in a universe factory',
  'kappa': 'makenzy',
  'art': 'fart',
  'sneak': 'rape',
  '7': '666',
  'double': 'dubs',
  'triple': 'trips',
  'told': 'milfd'
};
///////EXTRA FILTERING CODE
var spec_code = [
  '/exit',
  '/away',
  '/abs',
  '[code]',
  ':'
];
var swear_code = [
  '[b][/b]',
  '.'
];
var link_code = [
  'http://',
  'www.',
  'https://'
];
///////
///////COLOR CODE FOR 4CHAN GREENTEXT
var color_code = [
  '[color=#789922]',
  '[/color]',
  '[b][color=#AA0000]',
  '[/color][/b]'
];
///////
///////FORTICONS
var img_tag = [
  '[img]',
  '[/img]'
];
var post_img_tag = [
  '<img title=\'posted by swearify\' src=\'',
  '\'</img>'
]; //we'll use the html img tag here so I can set a title
///////
///////CSS STYLE STRINGS
var cssChkbox = 'font-size: 9px;color: #DFDFDF;margin-right: 5px;margin-top: 5px;';
var cssButton = 'font-size: 9px;color: #000;padding-right: 2px;margin-left: 3px;';
var cssMsg = 'font-size:10px;color:white; margin-right:8px; margin-left:5px;';
var cssLine = 'color:black;';
var cssChat = 'overflow-x: hidden; left:141px;'; // / white-space: nowrap;
///////
///////CODE FOR EXTRA SMILIE INJECT
var smilie_header_html =
  /////////////// window 1 - Swearify 1
  /////////////// window 2 - Swearify 2
  /////////////// window 3 - Twitch Emoticons
  /////////////// window 4 - Swearify Rage Faces
  /////////////// window 5 - Swearify Dongs
  '<option value=\'\'>View more Emoticons</option><option value=\'0\'>Smilies 1</option><option value=\'1\'>Swearify 1</option><option value=\'2\'>Swearify 2</option><option value=\'5\'>Twitch Emotes</option><option value=\'3\'>Swearify Rage Faces</option><option value=\'4\'>Swearify Dongs</option>';
var td_base =
  '<td><a href=\'javascript:insert_chatboxsmilie(_smilie)\'><img title=\'_title\' src=\'_link\' alt=\'_title\' border=\'0\'></a></td>';
var td_array = '<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>';
var quote = '"';
if (document.getElementsByName('categ').length == 1) document.getElementsByName('categ')[0].innerHTML =
  smilie_header_html; // /
// add
// the
// Swearify
// selection
///////VAR FOR FIXING THE POST PAGE
var post_button_num = 0;
///////
///////CHARCOUNT MERGE
var cssLabel = 'color: grey;font-size: 12px;';
var loc = '';
var refined_loc = '';
var cssTd = '';
///////
///
//UTILS
///
//SWEAR
///
//EMOTICON
///
//MAYMAY
///
//GREENTEXT
///
//REDTEXT
///
//LEET
///
//RAINBOW
///
//RANDOM
///
//GRADIENT
///
//JS
///
//JAVA
///
//VBS
///
//CSS
///////UTILS
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toGMTString();
  } else expires = '';
  document.cookie = name + '=' + value + expires + '; path=/';
}

function getCookie(c_name) {
  var name = c_name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return '';
}

function values(o) {
  return Object.keys(o).map(function(k) {
    return o[k];
  });
}
// ////////http://stackoverflow.com/questions/7306669/how-to-get-all-properties-values-of-a-javascript-object-without-knowing-the-key

String.prototype.regexIndexOf = function(regex, startpos) {
  var indexOf = this.substring(startpos || 0).search(regex);
  return indexOf >= 0 ? indexOf + (startpos || 0) : indexOf;
};
String.prototype.regexLastIndexOf = function(regex, startpos) {
  regex = regex.global ? regex : new RegExp(regex.source, 'g' + (regex.ignoreCase ? 'i' : '') + (regex.multiLine ? 'm' : ''));
  if (typeof startpos == 'undefined')
    startpos = this.length;
  else if (startpos < 0)
    startpos = 0;
  var stringToWorkWith = this.substring(0, startpos + 1);
  var lastIndexOf = -1;
  var nextStop = 0;
  while ((result = regex.exec(stringToWorkWith)) !== null) {
    lastIndexOf = result.index;
    regex.lastIndex = ++nextStop;
  }
  return lastIndexOf;
};
/////////////////////
/////////////////////MANAGES THE CUSTOM SMILIE SYSTEM

function emoticon_() {
  var i;
  var old_msg;
  var index_num;
  var new_msg;
  for (i = 0; i < Object.keys(emoticon_1).length; i++) {
    old_msg = document.getElementById('message').value;
    index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_1)[i][0], 'gi'));
    if (index_num >= 0) {
      new_msg = old_msg.replace(new RegExp(values(emoticon_1)[i][0], 'gi'), img_tag[0] + values(emoticon_1)[i][1] +
        img_tag[1]);
      document.getElementById('message').value = new_msg;
    }
  }
  for (i = 0; i < Object.keys(emoticon_2).length; i++) {
    old_msg = document.getElementById('message').value;
    index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_2)[i][0], 'gi'));
    if (index_num >= 0) {
      new_msg = old_msg.replace(new RegExp(values(emoticon_2)[i][0], 'gi'), img_tag[0] + values(emoticon_2)[i][1] +
        img_tag[1]);
      document.getElementById('message').value = new_msg;
    }
  }
  for (i = 0; i < Object.keys(emoticon_3).length; i++) {
    old_msg = document.getElementById('message').value;
    index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_3)[i][0], 'gi'));
    if (index_num >= 0) {
      new_msg = old_msg.replace(new RegExp(values(emoticon_3)[i][0], 'gi'), img_tag[0] + values(emoticon_3)[i][1] +
        img_tag[1]);
      document.getElementById('message').value = new_msg;
    }
  }
  for (i = 0; i < Object.keys(emoticon_4).length; i++) {
    old_msg = document.getElementById('message').value;
    index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_4)[i][0], 'gi'));
    if (index_num >= 0) {
      new_msg = old_msg.replace(new RegExp(values(emoticon_4)[i][0], 'gi'), img_tag[0] + values(emoticon_4)[i][1] +
        img_tag[1]);
      document.getElementById('message').value = new_msg;
    }
  }
  for (i = 0; i < twitch_e.length; i++) {
    old_msg = document.getElementById('message').value;
    index_num = old_msg.regexIndexOf(new RegExp('\\b' + twitch_c[i] + '\\b', 'g'));
    if (index_num >= 0) {
      new_msg = old_msg.replace(new RegExp('\\b' + twitch_c[i] + '\\b', 'g'), img_tag[0] + twitch_e[i] +
        img_tag[1]);
      document.getElementById('message').value = new_msg;
    }
  }
}

function emoticon_post() {
  var i;
  var old_msg;
  var index_num;
  var new_msg;
  for (i = 0; i < Object.keys(emoticon_1).length; i++) {
    old_msg = '';
    if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[
      0].value;
    else old_msg = document.getElementsByTagName('textarea')[1].value;
    index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_1)[i][0], 'gi'));
    if (index_num >= 0) {
      new_msg = old_msg.replace(new RegExp(values(emoticon_1)[i][0], 'gi'), post_img_tag[0] + values(emoticon_1)[i][1] +
        post_img_tag[1]);
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        new_msg;
      else document.getElementsByTagName('textarea')[1].value = new_msg;
    }
  }
  for (i = 0; i < Object.keys(emoticon_2).length; i++) {
    old_msg = '';
    if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[
      0].value;
    else old_msg = document.getElementsByTagName('textarea')[1].value;
    index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_2)[i][0], 'gi'));
    if (index_num >= 0) {
      new_msg = old_msg.replace(new RegExp(values(emoticon_2)[i][0], 'gi'), post_img_tag[0] + values(emoticon_2)[i][1] +
        post_img_tag[1]);
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        new_msg;
      else document.getElementsByTagName('textarea')[1].value = new_msg;
    }
  }
  for (i = 0; i < Object.keys(emoticon_3).length; i++) {
    old_msg = '';
    if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[
      0].value;
    else old_msg = document.getElementsByTagName('textarea')[1].value;
    index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_3)[i][0], 'gi'));
    if (index_num >= 0) {
      new_msg = old_msg.replace(new RegExp(values(emoticon_3)[i][0], 'gi'), post_img_tag[0] + values(emoticon_3)[i][1] +
        post_img_tag[1]);
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        new_msg;
      else document.getElementsByTagName('textarea')[1].value = new_msg;
    }
  }
  for (i = 0; i < Object.keys(emoticon_4).length; i++) {
    old_msg = '';
    if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[
      0].value;
    else old_msg = document.getElementsByTagName('textarea')[1].value;
    index_num = old_msg.regexIndexOf(new RegExp(values(emoticon_4)[i][0], 'gi'));
    if (index_num >= 0) {
      new_msg = old_msg.replace(new RegExp(values(emoticon_4)[i][0], 'gi'), post_img_tag[0] + values(emoticon_4)[i][1] +
        post_img_tag[1]);
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        new_msg;
      else document.getElementsByTagName('textarea')[1].value = new_msg;
    }
  }
  for (i = 0; i < twitch_e.length; i++) {
    old_msg = '';
    if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[
      0].value;
    else old_msg = document.getElementsByTagName('textarea')[1].value;
    index_num = old_msg.regexIndexOf(new RegExp('\\b' + twitch_c[i] + '\\b', 'g'));
    if (index_num >= 0) {
      new_msg = old_msg.replace(new RegExp('\\b' + twitch_c[i] + '\\b', 'g'), post_img_tag[0] + twitch_e[i] +
        post_img_tag[1]);
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        new_msg;
      else document.getElementsByTagName('textarea')[1].value = new_msg;
    }
  }
}
/////////////////////
/////////////////////MANAGES THE MAY MAY SYSTEM

function maymay_() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = document.getElementById('message').value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay)[i][0], 'gi'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay)[i][0], 'gi'), values(maymay)[i][1]);
      document.getElementById('message').value = new_msg;
    }
  }
}

function maymay_post() {
  for (var i = 0; i < Object.keys(maymay).length; i++) {
    var old_msg = '';
    if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[
      0].value;
    else old_msg = document.getElementsByTagName('textarea')[1].value;
    var index_num = old_msg.regexIndexOf(new RegExp(values(maymay)[i][0], 'gi'));
    if (index_num >= 0) {
      var new_msg = old_msg.replace(new RegExp(values(maymay)[i][0], 'gi'), values(maymay)[i][1]);
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        new_msg;
      else document.getElementsByTagName('textarea')[1].value = new_msg;
    }
  }
}
/////////////////////
///////////////////// MANAGES THE EMULATION OF GREENTEXT

function greentext_() {
  var old_msg = document.getElementById('message').value;
  var index_num = old_msg.indexOf('>');
  var index_num2 = old_msg.indexOf('/greentext');
  if (index_num === 0 || index_num2 === 0) {
    var new_msg = color_code[0] + old_msg + color_code[1];
    document.getElementById('message').value = new_msg;
  }
}

function greentext_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = msg_ray[i].indexOf('>');
    if (index_num === 0) {
      msg_ray[i] = color_code[0] + msg_ray[i] + color_code[1];
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}
/////////////////////
///////////////////// MANAGES THE EMULATION OF REDTEXT

function redtext_() {
  var old_msg = document.getElementById('message').value;
  var index_num = old_msg.indexOf('<');
  if (old_msg.length >= 1)
    if (index_num === old_msg.length - 1) {
      var new_msg = color_code[2] + old_msg + color_code[3];
      document.getElementById('message').value = new_msg;
    }
}

function redtext_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = msg_ray[i].indexOf('<');
    if (msg_ray[i].length >= 1)
      if (index_num === old_msg.length - 1) {
        msg_ray[i] = color_code[2] + msg_ray[i] + color_code[3];
        if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
          msg_ray.join('<br />');
        else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
      }
  }
}
/////////////////////
/////////////////////LEET TEXT

function leet_() {
  var old_msg = document.getElementById('message').value;
  var new_msg = old_msg.replace(/\/leet /i, '');
  new_msg = new_msg.replace(/a/gi, '4');
  new_msg = new_msg.replace(/b/gi, '|3');
  new_msg = new_msg.replace(/c/gi, '(');
  new_msg = new_msg.replace(/d/gi, '|)');
  new_msg = new_msg.replace(/e/gi, '3');
  new_msg = new_msg.replace(/f/gi, '|=');
  new_msg = new_msg.replace(/g/gi, '9');
  new_msg = new_msg.replace(/h/gi, '|-|');
  new_msg = new_msg.replace(/i/gi, '1');
  new_msg = new_msg.replace(/j/gi, '_|');
  new_msg = new_msg.replace(/k/gi, '|<');
  new_msg = new_msg.replace(/l/gi, '1');
  new_msg = new_msg.replace(/m/gi, '|\\/|'); // escaped
  new_msg = new_msg.replace(/n/gi, '|\\|'); // escaped
  new_msg = new_msg.replace(/o/gi, '0');
  new_msg = new_msg.replace(/p/gi, '|>');
  new_msg = new_msg.replace(/q/gi, '().');
  new_msg = new_msg.replace(/r/gi, '|2');
  new_msg = new_msg.replace(/s/gi, '5');
  new_msg = new_msg.replace(/t/gi, '7');
  new_msg = new_msg.replace(/u/gi, '|_|');
  new_msg = new_msg.replace(/v/gi, '\\/'); // escaped
  new_msg = new_msg.replace(/w/gi, '\\/\\/'); // escaped
  new_msg = new_msg.replace(/x/gi, '><');
  new_msg = new_msg.replace(/y/gi, '`/');
  new_msg = new_msg.replace(/z/gi, '2');
  document.getElementById('message').value = new_msg;
}

function inject_leet() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table')[1].getElementsByTagName('tr')[0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'leet_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td')[0].innerHTML =
    '<input name="leet" id="format-leet" class="format-message" type="checkbox"><label id="click_area_leet" title="Leet" style="cursor:pointer;"><img src="http://i.imgur.com/a6bziMI.png"></label>';
  var what = document.getElementById('click_area_leet');
  var whot = document.getElementById('format-leet');
  if (getCookie('CB_leet') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function() {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_leet', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_leet', '0', 1);
    }
  });
}

function leet_post() {
  var old_msg = ''; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/leet /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/leet /i, '');
      new_msg = new_msg.replace(/a/gi, '4');
      new_msg = new_msg.replace(/b/gi, '|3');
      new_msg = new_msg.replace(/c/gi, '(');
      new_msg = new_msg.replace(/d/gi, '|)');
      new_msg = new_msg.replace(/e/gi, '3');
      new_msg = new_msg.replace(/f/gi, '|=');
      new_msg = new_msg.replace(/g/gi, '9');
      new_msg = new_msg.replace(/h/gi, '|-|');
      new_msg = new_msg.replace(/i/gi, '1');
      new_msg = new_msg.replace(/j/gi, '_|');
      new_msg = new_msg.replace(/k/gi, '|<');
      new_msg = new_msg.replace(/l/gi, '1');
      new_msg = new_msg.replace(/m/gi, '|\\/|'); // escaped
      new_msg = new_msg.replace(/n/gi, '|\\|'); // escaped
      new_msg = new_msg.replace(/o/gi, '0');
      new_msg = new_msg.replace(/p/gi, '|>');
      new_msg = new_msg.replace(/q/gi, '().');
      new_msg = new_msg.replace(/r/gi, '|2');
      new_msg = new_msg.replace(/s/gi, '5');
      new_msg = new_msg.replace(/t/gi, '7');
      new_msg = new_msg.replace(/u/gi, '|_|');
      new_msg = new_msg.replace(/v/gi, '\\/'); // escaped
      new_msg = new_msg.replace(/w/gi, '\\/\\/'); // escaped
      new_msg = new_msg.replace(/x/gi, '><');
      new_msg = new_msg.replace(/y/gi, '`/');
      new_msg = new_msg.replace(/z/gi, '2');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////BALLOON TEXT

function balloon_() {
  var old_msg = document.getElementById('message').value;
  var new_msg = old_msg.replace(/\/balloon /i, '');
  new_msg = new_msg.replace(/a/gi, 'ⓐ');
  new_msg = new_msg.replace(/b/gi, 'ⓑ');
  new_msg = new_msg.replace(/c/gi, 'ⓒ');
  new_msg = new_msg.replace(/d/gi, 'ⓓ');
  new_msg = new_msg.replace(/e/gi, 'ⓔ');
  new_msg = new_msg.replace(/f/gi, 'ⓕ');
  new_msg = new_msg.replace(/g/gi, 'ⓖ');
  new_msg = new_msg.replace(/h/gi, 'ⓗ');
  new_msg = new_msg.replace(/i/gi, 'ⓘ');
  new_msg = new_msg.replace(/j/gi, 'ⓙ');
  new_msg = new_msg.replace(/k/gi, 'ⓚ');
  new_msg = new_msg.replace(/l/gi, 'ⓛ');
  new_msg = new_msg.replace(/m/gi, 'ⓜ');
  new_msg = new_msg.replace(/n/gi, 'ⓝ');
  new_msg = new_msg.replace(/o/gi, 'ⓞ');
  new_msg = new_msg.replace(/p/gi, 'ⓟ');
  new_msg = new_msg.replace(/q/gi, 'ⓠ');
  new_msg = new_msg.replace(/r/gi, 'ⓡ');
  new_msg = new_msg.replace(/s/gi, 'ⓢ');
  new_msg = new_msg.replace(/t/gi, 'ⓣ');
  new_msg = new_msg.replace(/u/gi, 'ⓤ');
  new_msg = new_msg.replace(/v/gi, 'ⓥ');
  new_msg = new_msg.replace(/w/gi, 'ⓦ');
  new_msg = new_msg.replace(/x/gi, 'ⓧ');
  new_msg = new_msg.replace(/y/gi, 'ⓨ');
  new_msg = new_msg.replace(/z/gi, 'ⓩ');
  new_msg = new_msg.replace(/1/gi, '⓵');
  new_msg = new_msg.replace(/2/gi, '⓶');
  new_msg = new_msg.replace(/3/gi, '⓷');
  new_msg = new_msg.replace(/4/gi, '⓸');
  new_msg = new_msg.replace(/5/gi, '⓹');
  new_msg = new_msg.replace(/6/gi, '⓺');
  new_msg = new_msg.replace(/7/gi, '⓻');
  new_msg = new_msg.replace(/8/gi, '⓼');
  new_msg = new_msg.replace(/9/gi, '⓽');
  new_msg = new_msg.replace(/0/gi, '⓪');
  document.getElementById('message').value = new_msg;
}

function inject_balloon() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table')[1].getElementsByTagName('tr')[0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'balloon_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td')[0].innerHTML =
    '<input name="balloon" id="format-balloon" class="format-message" type="checkbox"><label id="click_area_balloon" title="Balloon" style="cursor:pointer;"><img src="http://i.imgur.com/B15ir56.png"></label>';
  var what = document.getElementById('click_area_balloon');
  var whot = document.getElementById('format-balloon');
  if (getCookie('CB_balloon') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function() {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_balloon', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_balloon', '0', 1);
    }
  });
}

function balloon_post() {
  var old_msg = ''; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/balloon /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/balloon /i, '');
      new_msg = new_msg.replace(/a/gi, 'ⓐ');
      new_msg = new_msg.replace(/b/gi, 'ⓑ');
      new_msg = new_msg.replace(/c/gi, 'ⓒ');
      new_msg = new_msg.replace(/d/gi, 'ⓓ');
      new_msg = new_msg.replace(/e/gi, 'ⓔ');
      new_msg = new_msg.replace(/f/gi, 'ⓕ');
      new_msg = new_msg.replace(/g/gi, 'ⓖ');
      new_msg = new_msg.replace(/h/gi, 'ⓗ');
      new_msg = new_msg.replace(/i/gi, 'ⓘ');
      new_msg = new_msg.replace(/j/gi, 'ⓙ');
      new_msg = new_msg.replace(/k/gi, 'ⓚ');
      new_msg = new_msg.replace(/l/gi, 'ⓛ');
      new_msg = new_msg.replace(/m/gi, 'ⓜ');
      new_msg = new_msg.replace(/n/gi, 'ⓝ');
      new_msg = new_msg.replace(/o/gi, 'ⓞ');
      new_msg = new_msg.replace(/p/gi, 'ⓟ');
      new_msg = new_msg.replace(/q/gi, 'ⓠ');
      new_msg = new_msg.replace(/r/gi, 'ⓡ');
      new_msg = new_msg.replace(/s/gi, 'ⓢ');
      new_msg = new_msg.replace(/t/gi, 'ⓣ');
      new_msg = new_msg.replace(/u/gi, 'ⓤ');
      new_msg = new_msg.replace(/v/gi, 'ⓥ');
      new_msg = new_msg.replace(/w/gi, 'ⓦ');
      new_msg = new_msg.replace(/x/gi, 'ⓧ');
      new_msg = new_msg.replace(/y/gi, 'ⓨ');
      new_msg = new_msg.replace(/z/gi, 'ⓩ');
      new_msg = new_msg.replace(/1/gi, '⓵');
      new_msg = new_msg.replace(/2/gi, '⓶');
      new_msg = new_msg.replace(/3/gi, '⓷');
      new_msg = new_msg.replace(/4/gi, '⓸');
      new_msg = new_msg.replace(/5/gi, '⓹');
      new_msg = new_msg.replace(/6/gi, '⓺');
      new_msg = new_msg.replace(/7/gi, '⓻');
      new_msg = new_msg.replace(/8/gi, '⓼');
      new_msg = new_msg.replace(/9/gi, '⓽');
      new_msg = new_msg.replace(/0/gi, '⓪');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////BRAILLE TEXT

function braille_() {
  var old_msg = document.getElementById('message').value;
  var new_msg = old_msg.replace(/\/braille /i, '');
  new_msg = new_msg.replace(/a/gi, '⠁');
  new_msg = new_msg.replace(/b/gi, '⠃');
  new_msg = new_msg.replace(/c/gi, '⠉');
  new_msg = new_msg.replace(/d/gi, '⠙');
  new_msg = new_msg.replace(/e/gi, '⠑');
  new_msg = new_msg.replace(/f/gi, '⠋');
  new_msg = new_msg.replace(/g/gi, '⠛');
  new_msg = new_msg.replace(/h/gi, '⠓');
  new_msg = new_msg.replace(/i/gi, '⠊');
  new_msg = new_msg.replace(/j/gi, '⠚');
  new_msg = new_msg.replace(/k/gi, '⠅');
  new_msg = new_msg.replace(/l/gi, '⠇');
  new_msg = new_msg.replace(/m/gi, '⠍');
  new_msg = new_msg.replace(/n/gi, '⠝');
  new_msg = new_msg.replace(/o/gi, '⠕');
  new_msg = new_msg.replace(/p/gi, '⠏');
  new_msg = new_msg.replace(/q/gi, '⠟');
  new_msg = new_msg.replace(/r/gi, '⠗');
  new_msg = new_msg.replace(/s/gi, '⠎');
  new_msg = new_msg.replace(/t/gi, '⠞');
  new_msg = new_msg.replace(/u/gi, '⠥');
  new_msg = new_msg.replace(/v/gi, '⠧');
  new_msg = new_msg.replace(/w/gi, '⠺');
  new_msg = new_msg.replace(/x/gi, '⠭');
  new_msg = new_msg.replace(/y/gi, '⠽');
  new_msg = new_msg.replace(/z/gi, '⠵');
  new_msg = new_msg.replace(/1/gi, '⠼⠁');
  new_msg = new_msg.replace(/2/gi, '⠼⠃');
  new_msg = new_msg.replace(/3/gi, '⠼⠉');
  new_msg = new_msg.replace(/4/gi, '⠼⠙');
  new_msg = new_msg.replace(/5/gi, '⠼⠑');
  new_msg = new_msg.replace(/6/gi, '⠼⠋');
  new_msg = new_msg.replace(/7/gi, '⠼⠛');
  new_msg = new_msg.replace(/8/gi, '⠼⠓');
  new_msg = new_msg.replace(/9/gi, '⠼⠊');
  new_msg = new_msg.replace(/0/gi, '⠼⠚');
  document.getElementById('message').value = new_msg;
}

function inject_braille() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table')[1].getElementsByTagName('tr')[0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'braille_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td')[0].innerHTML =
    '<input name="braille" id="format-braille" class="format-message" type="checkbox"><label id="click_area_braille" title="Braille" style="cursor:pointer;">⠃</label>';
  var what = document.getElementById('click_area_braille');
  var whot = document.getElementById('format-braille');
  if (getCookie('CB_braille') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function() {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_braille', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_braille', '0', 1);
    }
  });
}

function braille_post() {
  var old_msg = ''; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/braille /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/braille /i, '');
      new_msg = new_msg.replace(/a/gi, '⠁');
      new_msg = new_msg.replace(/b/gi, '⠃');
      new_msg = new_msg.replace(/c/gi, '⠉');
      new_msg = new_msg.replace(/d/gi, '⠙');
      new_msg = new_msg.replace(/e/gi, '⠑');
      new_msg = new_msg.replace(/f/gi, '⠋');
      new_msg = new_msg.replace(/g/gi, '⠛');
      new_msg = new_msg.replace(/h/gi, '⠓');
      new_msg = new_msg.replace(/i/gi, '⠊');
      new_msg = new_msg.replace(/j/gi, '⠚');
      new_msg = new_msg.replace(/k/gi, '⠅');
      new_msg = new_msg.replace(/l/gi, '⠇');
      new_msg = new_msg.replace(/m/gi, '⠍');
      new_msg = new_msg.replace(/n/gi, '⠝');
      new_msg = new_msg.replace(/o/gi, '⠕');
      new_msg = new_msg.replace(/p/gi, '⠏');
      new_msg = new_msg.replace(/q/gi, '⠟');
      new_msg = new_msg.replace(/r/gi, '⠗');
      new_msg = new_msg.replace(/s/gi, '⠎');
      new_msg = new_msg.replace(/t/gi, '⠞');
      new_msg = new_msg.replace(/u/gi, '⠥');
      new_msg = new_msg.replace(/v/gi, '⠧');
      new_msg = new_msg.replace(/w/gi, '⠺');
      new_msg = new_msg.replace(/x/gi, '⠭');
      new_msg = new_msg.replace(/y/gi, '⠽');
      new_msg = new_msg.replace(/z/gi, '⠵');
      new_msg = new_msg.replace(/1/gi, '⠼⠁');
      new_msg = new_msg.replace(/2/gi, '⠼⠃');
      new_msg = new_msg.replace(/3/gi, '⠼⠉');
      new_msg = new_msg.replace(/4/gi, '⠼⠙');
      new_msg = new_msg.replace(/5/gi, '⠼⠑');
      new_msg = new_msg.replace(/6/gi, '⠼⠋');
      new_msg = new_msg.replace(/7/gi, '⠼⠛');
      new_msg = new_msg.replace(/8/gi, '⠼⠓');
      new_msg = new_msg.replace(/9/gi, '⠼⠊');
      new_msg = new_msg.replace(/0/gi, '⠼⠚');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////GREEKIFIED TEXT

function greek_() {
  var old_msg = document.getElementById('message').value;
  var new_msg = old_msg.replace(/\/greek /i, '');
  new_msg = new_msg.replace(/a/gi, 'α');
  new_msg = new_msg.replace(/b/gi, 'β');
  new_msg = new_msg.replace(/c/gi, 'ς');
  new_msg = new_msg.replace(/d/gi, 'δ');
  new_msg = new_msg.replace(/e/gi, 'ε');
  new_msg = new_msg.replace(/f/gi, 'ƒ');
  new_msg = new_msg.replace(/g/gi, 'g');
  new_msg = new_msg.replace(/h/gi, 'н');
  new_msg = new_msg.replace(/i/gi, 'ι');
  new_msg = new_msg.replace(/j/gi, 'j');
  new_msg = new_msg.replace(/k/gi, 'κ');
  new_msg = new_msg.replace(/l/gi, 'ℓ');
  new_msg = new_msg.replace(/m/gi, 'м');
  new_msg = new_msg.replace(/n/gi, 'η');
  new_msg = new_msg.replace(/o/gi, 'ο');
  new_msg = new_msg.replace(/p/gi, 'ρ');
  new_msg = new_msg.replace(/q/gi, 'φ');
  new_msg = new_msg.replace(/r/gi, 'я');
  new_msg = new_msg.replace(/s/gi, 's');
  new_msg = new_msg.replace(/t/gi, 'τ');
  new_msg = new_msg.replace(/u/gi, 'μ');
  new_msg = new_msg.replace(/v/gi, 'v');
  new_msg = new_msg.replace(/w/gi, 'ω');
  new_msg = new_msg.replace(/x/gi, 'χ');
  new_msg = new_msg.replace(/y/gi, 'λ');
  new_msg = new_msg.replace(/z/gi, 'ζ');
  document.getElementById('message').value = new_msg;
}

function inject_greek() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table')[1].getElementsByTagName('tr')[0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'greek_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td')[0].innerHTML =
    '<input name="greek" id="format-greek" class="format-message" type="checkbox"><label id="click_area_greek" title="Greek" style="cursor:pointer;"><img src="http://i.imgur.com/OUGQ1ik.png"></label>';
  var what = document.getElementById('click_area_greek');
  var whot = document.getElementById('format-greek');
  if (getCookie('CB_greek') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function() {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_greek', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_greek', '0', 1);
    }
  });
}

function greek_post() {
  var old_msg = ''; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/greek /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/greek /i, '');
      new_msg = new_msg.replace(/a/gi, 'α');
      new_msg = new_msg.replace(/b/gi, 'β');
      new_msg = new_msg.replace(/c/gi, 'ς');
      new_msg = new_msg.replace(/d/gi, 'δ');
      new_msg = new_msg.replace(/e/gi, 'ε');
      new_msg = new_msg.replace(/f/gi, 'ƒ');
      new_msg = new_msg.replace(/g/gi, 'g');
      new_msg = new_msg.replace(/h/gi, 'н');
      new_msg = new_msg.replace(/i/gi, 'ι');
      new_msg = new_msg.replace(/j/gi, 'j');
      new_msg = new_msg.replace(/k/gi, 'κ');
      new_msg = new_msg.replace(/l/gi, 'ℓ');
      new_msg = new_msg.replace(/m/gi, 'м');
      new_msg = new_msg.replace(/n/gi, 'η');
      new_msg = new_msg.replace(/o/gi, 'ο');
      new_msg = new_msg.replace(/p/gi, 'ρ');
      new_msg = new_msg.replace(/q/gi, 'φ');
      new_msg = new_msg.replace(/r/gi, 'я');
      new_msg = new_msg.replace(/s/gi, 's');
      new_msg = new_msg.replace(/t/gi, 'τ');
      new_msg = new_msg.replace(/u/gi, 'μ');
      new_msg = new_msg.replace(/v/gi, 'v');
      new_msg = new_msg.replace(/w/gi, 'ω');
      new_msg = new_msg.replace(/x/gi, 'χ');
      new_msg = new_msg.replace(/y/gi, 'λ');
      new_msg = new_msg.replace(/z/gi, 'ζ');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}

/////////////////////
/////////////////////SMALL CAPS TEXT

function smallcaps_() {
  var old_msg = document.getElementById('message').value;
  var new_msg = old_msg.replace(/\/smc /i, ''); //this is not necessary but the fucks i could give do not exist
  new_msg = new_msg.replace(/a/gi, 'ᴀ');
  new_msg = new_msg.replace(/b/gi, 'ʙ');
  new_msg = new_msg.replace(/c/gi, 'ᴄ');
  new_msg = new_msg.replace(/d/gi, 'ᴅ');
  new_msg = new_msg.replace(/e/gi, 'ᴇ');
  new_msg = new_msg.replace(/f/gi, 'ғ');
  new_msg = new_msg.replace(/g/gi, 'ɢ');
  new_msg = new_msg.replace(/h/gi, 'ʜ');
  new_msg = new_msg.replace(/i/gi, 'ɪ');
  new_msg = new_msg.replace(/j/gi, 'ᴊ');
  new_msg = new_msg.replace(/k/gi, 'ᴋ');
  new_msg = new_msg.replace(/l/gi, 'ʟ');
  new_msg = new_msg.replace(/m/gi, 'ᴍ');
  new_msg = new_msg.replace(/n/gi, 'ɴ');
  new_msg = new_msg.replace(/o/gi, 'ᴏ');
  new_msg = new_msg.replace(/p/gi, 'ᴘ');
  new_msg = new_msg.replace(/q/gi, 'ǫ');
  new_msg = new_msg.replace(/r/gi, 'ʀ');
  new_msg = new_msg.replace(/s/gi, 's');
  new_msg = new_msg.replace(/t/gi, 'ᴛ');
  new_msg = new_msg.replace(/u/gi, 'ᴜ');
  new_msg = new_msg.replace(/v/gi, 'ᴠ');
  new_msg = new_msg.replace(/w/gi, 'ᴡ');
  new_msg = new_msg.replace(/x/gi, 'x');
  new_msg = new_msg.replace(/y/gi, 'ʏ');
  new_msg = new_msg.replace(/z/gi, 'ᴢ');
  document.getElementById('message').value = new_msg;
}

function inject_smallcaps() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table')[1].getElementsByTagName('tr')[0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'smallcaps_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td')[0].innerHTML =
    '<input name="smallcaps" id="format-smallcaps" class="format-message" type="checkbox"><label id="click_area_smallcaps" title="Small Caps" style="cursor:pointer;"><img src="https://i.imgur.com/gmvDgDv.jpg"></label>';
  var what = document.getElementById('click_area_smallcaps');
  var whot = document.getElementById('format-smallcaps');
  if (getCookie('CB_smallcaps') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function() {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_smallcaps', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_smallcaps', '0', 1);
    }
  });
}

function smallcaps_post() {
  var old_msg = ''; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/smc /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/smc /i, '');
      new_msg = new_msg.replace(/a/gi, 'ᴀ');
      new_msg = new_msg.replace(/b/gi, 'ʙ');
      new_msg = new_msg.replace(/c/gi, 'ᴄ');
      new_msg = new_msg.replace(/d/gi, 'ᴅ');
      new_msg = new_msg.replace(/e/gi, 'ᴇ');
      new_msg = new_msg.replace(/f/gi, 'ғ');
      new_msg = new_msg.replace(/g/gi, 'ɢ');
      new_msg = new_msg.replace(/h/gi, 'ʜ');
      new_msg = new_msg.replace(/i/gi, 'ɪ');
      new_msg = new_msg.replace(/j/gi, 'ᴊ');
      new_msg = new_msg.replace(/k/gi, 'ᴋ');
      new_msg = new_msg.replace(/l/gi, 'ʟ');
      new_msg = new_msg.replace(/m/gi, 'ᴍ');
      new_msg = new_msg.replace(/n/gi, 'ɴ');
      new_msg = new_msg.replace(/o/gi, 'ᴏ');
      new_msg = new_msg.replace(/p/gi, 'ᴘ');
      new_msg = new_msg.replace(/q/gi, 'ǫ');
      new_msg = new_msg.replace(/r/gi, 'ʀ');
      new_msg = new_msg.replace(/s/gi, 's');
      new_msg = new_msg.replace(/t/gi, 'ᴛ');
      new_msg = new_msg.replace(/u/gi, 'ᴜ');
      new_msg = new_msg.replace(/v/gi, 'ᴠ');
      new_msg = new_msg.replace(/w/gi, 'ᴡ');
      new_msg = new_msg.replace(/x/gi, 'x');
      new_msg = new_msg.replace(/y/gi, 'ʏ');
      new_msg = new_msg.replace(/z/gi, 'ᴢ');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
/////////////////////MORSE CODE

function morse_() {
  var new_msg = document.getElementById('message').value;
  new_msg = new_msg.replace(/a/gi, '.-//');
  new_msg = new_msg.replace(/b/gi, '-...//');
  new_msg = new_msg.replace(/c/gi, '-[b][/b].[b][/b]-.//');
  new_msg = new_msg.replace(/d/gi, '-..//');
  new_msg = new_msg.replace(/e/gi, './/');
  new_msg = new_msg.replace(/f/gi, '..-.//');
  new_msg = new_msg.replace(/g/gi, '--.//');
  new_msg = new_msg.replace(/h/gi, '....//');
  new_msg = new_msg.replace(/i/gi, '..//');
  new_msg = new_msg.replace(/j/gi, '.---//');
  new_msg = new_msg.replace(/k/gi, '-[b][/b].[b][/b]-//');
  new_msg = new_msg.replace(/l/gi, '.-..//');
  new_msg = new_msg.replace(/m/gi, '--//');
  new_msg = new_msg.replace(/n/gi, '-.//');
  new_msg = new_msg.replace(/o/gi, '---//');
  new_msg = new_msg.replace(/p/gi, '.--.//');
  new_msg = new_msg.replace(/q/gi, '--[b][/b].[b][/b]-//');
  new_msg = new_msg.replace(/r/gi, '.-.//');
  new_msg = new_msg.replace(/s/gi, '...//');
  new_msg = new_msg.replace(/t/gi, '-//');
  new_msg = new_msg.replace(/u/gi, '..-//');
  new_msg = new_msg.replace(/v/gi, '...-//');
  new_msg = new_msg.replace(/w/gi, '.--//');
  new_msg = new_msg.replace(/x/gi, '-..-//');
  new_msg = new_msg.replace(/y/gi, '-[b][/b].[b][/b]--//');
  new_msg = new_msg.replace(/z/gi, '--..////');
  document.getElementById('message').value = new_msg;
}

function inject_morse() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table')[1].getElementsByTagName('tr')[0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'morse_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td')[0].innerHTML =
    '<input name="morse" id="format-morse" class="format-message" type="checkbox"><label id="click_area_morse" title="Morse" style="cursor:pointer;"><img src="http://i.imgur.com/8rbDggv.png"></label>';
  var what = document.getElementById('click_area_morse');
  var whot = document.getElementById('format-morse');
  if (getCookie('CB_morse') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function() {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_morse', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_morse', '0', 1);
    }
  });
}

function morse_post() {
  var old_msg = ''; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/mc /i);
    if (index_num === 0) {
      var new_msg = msg_ray[i].replace(/\/mc /i, '');
      new_msg = new_msg.replace(/a/gi, '.-//');
      new_msg = new_msg.replace(/b/gi, '-...//');
      new_msg = new_msg.replace(/c/gi, '-[b][/b].[b][/b]-.//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/d/gi, '-..//');
      new_msg = new_msg.replace(/e/gi, './/');
      new_msg = new_msg.replace(/f/gi, '..-.//');
      new_msg = new_msg.replace(/g/gi, '--.//');
      new_msg = new_msg.replace(/h/gi, '....//');
      new_msg = new_msg.replace(/i/gi, '..//');
      new_msg = new_msg.replace(/j/gi, '.---//');
      new_msg = new_msg.replace(/k/gi, '-[b][/b].[b][/b]-//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/l/gi, '.-..//');
      new_msg = new_msg.replace(/m/gi, '--//');
      new_msg = new_msg.replace(/n/gi, '-.//');
      new_msg = new_msg.replace(/o/gi, '---//');
      new_msg = new_msg.replace(/p/gi, '.--.//');
      new_msg = new_msg.replace(/q/gi, '--[b][/b].[b][/b]-//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/r/gi, '.-.//');
      new_msg = new_msg.replace(/s/gi, '...//');
      new_msg = new_msg.replace(/t/gi, '-//');
      new_msg = new_msg.replace(/u/gi, '..-//');
      new_msg = new_msg.replace(/v/gi, '...-//');
      new_msg = new_msg.replace(/w/gi, '.--//');
      new_msg = new_msg.replace(/x/gi, '-..-//');
      new_msg = new_msg.replace(/y/gi, '-[b][/b].[b][/b]--//'); // pretty
      // much
      // 'escaping'
      // for
      // AIM
      new_msg = new_msg.replace(/z/gi, '--..////');
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}
//////////////////////
////////////////////// SEKRIT CHAT M0D3

Math.irandom = function(min, max) {
  "use strict";
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function sekrit_() {
  var old_msg = document.getElementById('message').value;
  var index_num = old_msg.regexIndexOf(/\/s /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/s /i, '');
    try {
      for (i = 0; i < new_msg.match(/\./gi).length; i++)
        if (Math.random() > 0.9)
          new_msg = new_msg.replace(/\./, endings[Math.irandom(0, endings.length)]); // here we use a temp . to prevent mass dupes
      new_msg = new_msg.replace(/\[dot\]/gi, '.'); // and here we fix the .
    } catch (e) { /* there are no dots in our message */ }
    for (i = 0; i < Object.keys(replacements).length; i++) new_msg = new_msg.replace(new RegExp(Object.keys(replacements)[i], 'gi'), values(replacements)[i]);
    document.getElementById('message').value = new_msg;
  }
}

function sekrit_post() {
  var old_msg = ''; // this may not be necessary i'm not 100% sure
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/s /i);
    if (index_num === 0) {
      var new_msg = old_msg.replace(/\/s /i, '');
      try {
        for (i = 0; i < new_msg.match(/\./gi).length; i++)
          if (Math.random() > 0.9)
            new_msg = new_msg.replace(/\./, endings[Math.irandom(0, endings.length)]); // here we use a temp . to prevent mass dupes
        new_msg = new_msg.replace(/\[dot\]/gi, '.'); // and here we fix the .
      } catch (e) { /* there are no dots in our message */ }
      for (i = 0; i < Object.keys(replacements).length; i++) new_msg = new_msg.replace(new RegExp(Object.keys(replacements)[i], 'gi'), values(replacements)[i]);
      msg_ray[i] = new_msg;
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}

/////////////////////
///////////////////// FACT SPHERE IS A GOOD FRIEND
function fact_sphere_() {
  var old_msg = document.getElementById('message').value;
  var index_num = old_msg.regexIndexOf(new RegExp("/fact", 'gi'));
  if (index_num >= 0) {
    var new_msg = '';
    var num_to_use = Math.irandom(0, facts.length);
    if (index_num > 0) {
      var factoid = facts[num_to_use].charAt(0).toLowerCase() + facts[num_to_use].slice(1);
      new_msg = old_msg.replace(new RegExp("/fact", 'gi'), factoid);
    } else {
      new_msg = old_msg.replace(new RegExp("/fact", 'gi'), facts[num_to_use]);
    }
    document.getElementById('message').value = new_msg;
  }
}

///////////////////// MANAGES THE RAINBOW TEXT SYSTEM

function rainbow_() {
  var old_msg = document.getElementById('message').value;
  new_msg = rainbowText(old_msg);
  document.getElementById('message').value = new_msg;
}

function inject_rainbow() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table')[1].getElementsByTagName('tr')[0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'rainbow_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td')[0].innerHTML =
    '<input name="rainbow" id="format-rainbow" class="format-message" type="checkbox"><label id="click_area_rainbow" title="Rainbow" style="cursor:pointer;"><img src="http://i.imgur.com/F69UQGS.png"></label>';
  var what = document.getElementById('click_area_rainbow');
  var whot = document.getElementById('format-rainbow');
  if (getCookie('CB_rainbow') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function() {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_rainbow', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_rainbow', '0', 1);
    }
  });
}

function rainbow_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/rb /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/rb /i, '');
      msg_ray[i] = rainbowText(msg_ray[i]);
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}
/////////////////////
/////////////////////RANDOM CHARACTER COLOR

function random_() {
  var old_msg = document.getElementById('message').value;
  new_msg = randomText(old_msg);
  document.getElementById('message').value = new_msg;
}

function inject_random() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table')[1].getElementsByTagName('tr')[0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'random_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td')[0].innerHTML =
    '<input name="random" id="format-random" class="format-message" type="checkbox"><label id="click_area_random" title="Random" style="cursor:pointer;"><img src="http://i.imgur.com/jHMOnyI.png"></label>';
  var what = document.getElementById('click_area_random');
  var whot = document.getElementById('format-random');
  if (getCookie('CB_random') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function() {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_random', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_random', '0', 1);
    }
  });
}

function random_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/rn /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/rn /i, '');
      msg_ray[i] = randomText(msg_ray[i]);
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}
/////////////////////
////////////////////GRADIENT MSG COLOR

function gradient_() {
  var old_msg = document.getElementById('message').value;
  var new_msg = gradientText(old_msg);
  document.getElementById('message').value = new_msg;
}

function inject_gradient() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table')[1].getElementsByTagName('tr')[0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('id', 'gradient_button');
  the_body.setAttribute('class', 'fontbutton');
  where.insertBefore(the_body, chil_where[0]);
  where.getElementsByTagName('td')[0].innerHTML =
    '<input name="gradient" id="format-gradient" class="format-message" type="checkbox"><label id="click_area_gradient" title="Gradient" style="cursor:pointer;"><img src="http://i.imgur.com/EyxCc20.png"></label>';
  var what = document.getElementById('click_area_gradient');
  var whot = document.getElementById('format-gradient');
  if (getCookie('CB_gradient') === '1') whot.checked = true;
  else whot.checked = false;
  var clicked_css =
    'background: #CCC none repeat scroll 0% 0%;box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15) inset, 0px 1px 2px rgba(0, 0, 0, 0.05);';
  var not_clicked_css = '';
  what.addEventListener('click', function() {
    if (!whot.checked) {
      whot.checked = true;
      whot.style.cssText = clicked_css;
      setCookie('CB_gradient', '1', 1);
    } else {
      whot.checked = false;
      whot.style.cssText = not_clicked_css;
      setCookie('CB_gradient', '0', 1);
    }
  });
}

function gradient_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/gd /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/gd /i, '');
      msg_ray[i] = gradientText(msg_ray[i]);
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
////////////////////JAVASCRIPT SYNTAX

function js_() {
  var old_msg = document.getElementById('message').value;
  var index_num = old_msg.regexIndexOf(/\/js /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/js /i, '');
    new_msg = jsText(new_msg);
    document.getElementById('message').value = new_msg;
  }
}

function js_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/js /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/js /i, '');
      msg_ray[i] = jsText(msg_ray[i]);
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
////////////////////JAVA SYNTAX

function java_() {
  var old_msg = document.getElementById('message').value;
  var index_num = old_msg.regexIndexOf(/\/java /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/java /i, '');
    new_msg = javaText(new_msg);
    document.getElementById('message').value = new_msg;
  }
}

function java_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/java /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/java /i, '');
      msg_ray[i] = javaText(msg_ray[i]);
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
////////////////////VBSCRIPT SYNTAX

function vbs_() {
  var old_msg = document.getElementById('message').value;
  var index_num = old_msg.regexIndexOf(/\/vbs /i);
  if (index_num === 0) {
    var new_msg = old_msg.replace(/\/vbs /i, '');
    new_msg = vbsText(new_msg);
    document.getElementById('message').value = new_msg;
  }
}

function vbs_post() {
  var old_msg = '';
  if (document.getElementsByTagName('textarea')[1] === undefined) old_msg = document.getElementsByTagName('textarea')[0].value;
  else old_msg = document.getElementsByTagName('textarea')[1].value;
  var msg_ray = old_msg.split('\n');
  for (var i = 0; i < msg_ray.length; i++) {
    var index_num = old_msg.regexIndexOf(/\/vbs /i);
    if (index_num === 0) {
      msg_ray[i] = msg_ray[i].replace(/\/vbs /i, '');
      msg_ray[i] = vbsText(msg_ray[i]);
      if (document.getElementsByTagName('textarea')[1] === undefined) document.getElementsByTagName('textarea')[0].value =
        msg_ray.join('<br />');
      else document.getElementsByTagName('textarea')[1].value = msg_ray.join('<br />');
    }
  }
}
////////////////////
/////////////////////MANAGES THE EDITING OF CSS

var num_buttons = 9; ///
function edit_css() {
  document.getElementById('chatbox_messenger_form').getElementsByTagName('label')[4 + num_buttons].style.cssText = cssMsg;
  // / CSS for label that says "Message:" .. +1 for every new button
  document.getElementById('chatbox_messenger_form').getElementsByTagName('label')[4 + num_buttons].innerHTML = 'MESSAGE:';
  // / Edits innerHTML so theres no space between Message and the colon .. +1
  // for every new button
  document.getElementById('submit_button').style.cssText = cssButton;
  document.getElementById('submit_button').value = 'SEND';
  // / CSS for Send button
  document.getElementById('chatbox_members').style.cssText = cssLine;
  // / CSS for the line along the members and chatbox
  document.getElementById('chatbox').style.cssText = cssChat;
  // / CSS to eliminate chat glitching and shift over the chat messages a bit
  document.getElementById('chatbox_messenger_form').getElementsByTagName('td')[9 + num_buttons].innerHTML = '';
  document.getElementById('chatbox_messenger_form').getElementsByTagName('td')[9 + num_buttons].style.width = '0px';
  // / CSS for removing a spacer; removing node diddnt work well so im just
  // making it nonvisible. +1 for every new button
  document.getElementsByClassName('cattitle')[0].style.paddingLeft = '4px';
  // // Move over the title "Chatbox" a bit
}
/////////////////////
/////////////////////INJECTS THE FUCKING SMILIES INTO WINDOW

function the_base(smilie_code, smilie_url, smilie_text) {
  var change_this = td_base;
  change_this = change_this.replace(new RegExp('_smilie', 'gi'), smilie_code);
  change_this = change_this.replace(new RegExp('_title', 'gi'), smilie_text + '&#13;' + smilie_code.substr(1, smilie_code.length - 2)); // //could be smilie_text
  change_this = change_this.replace(new RegExp('_link', 'gi'), smilie_url);
  return change_this;
}

function preloader(image_url) {
  temp_image = new Image();
  temp_image.src = image_url;
}

function inject_smilie(i) {
  var get_place = document.getElementsByTagName('table')[2];
  if (get_place.innerHTML === '') {
    var the_body = document.createElement('tbody');
    get_place.appendChild(the_body);
    get_place.getElementsByTagName('tbody')[0].innerHTML = td_array;
    var counter = 0;
    var coconut = 0;
    var x;
    var the_tr;
    if (i == 1) {
      for (x = 0; x < Object.keys(emoticon_1).length; x++) {
        // console.log(counter + " " + coconut + " " + x);
        if (counter == 8) {
          counter = 0;
          coconut++;
          the_tr = document.createElement('tr');
          get_place.getElementsByTagName('tbody')[0].appendChild(the_tr);
          get_place.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[coconut].innerHTML = td_array;
        }
        preloader(values(emoticon_1)[x][1]);
        get_place.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[coconut].getElementsByTagName('td')[counter].innerHTML = the_base(quote + values(emoticon_1)[x][0] + quote, values(emoticon_1)[x][1], values(emoticon_1)[x][2]);
        counter++;
      }
    } else if (i == 2) {
      for (x = 0; x < Object.keys(emoticon_2).length; x++) {
        // console.log(counter + " " + coconut + " " + x);
        if (counter == 8) {
          counter = 0;
          coconut++;
          the_tr = document.createElement('tr');
          get_place.getElementsByTagName('tbody')[0].appendChild(the_tr);
          get_place.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[coconut].innerHTML = td_array;
        }
        preloader(values(emoticon_2)[x][1]);
        get_place.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[coconut].getElementsByTagName('td')[counter].innerHTML = the_base(quote + values(emoticon_2)[x][0] + quote, values(emoticon_2)[x][1], values(emoticon_2)[x][2]);
        counter++;
      }
    } else if (i == 3) {
      for (x = 0; x < Object.keys(emoticon_3).length; x++) {
        // console.log(counter + " " + coconut + " " + x);
        if (counter == 8) {
          counter = 0;
          coconut++;
          the_tr = document.createElement('tr');
          get_place.getElementsByTagName('tbody')[0].appendChild(the_tr);
          get_place.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[coconut].innerHTML = td_array;
        }
        preloader(values(emoticon_3)[x][1]);
        get_place.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[coconut].getElementsByTagName('td')[counter].innerHTML = the_base(quote + values(emoticon_3)[x][0] + quote, values(emoticon_3)[x][1], values(emoticon_3)[x][2]);
        counter++;
      }
    } else if (i == 4) {
      for (x = 0; x < Object.keys(emoticon_4).length; x++) {
        // console.log(counter + " " + coconut + " " + x);
        if (counter == 8) {
          counter = 0;
          coconut++;
          the_tr = document.createElement('tr');
          get_place.getElementsByTagName('tbody')[0].appendChild(the_tr);
          get_place.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[coconut].innerHTML = td_array;
        }
        preloader(values(emoticon_4)[x][1]);
        get_place.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[coconut].getElementsByTagName('td')[counter].innerHTML = the_base(quote + values(emoticon_4)[x][0] + quote, values(emoticon_4)[x][1], values(emoticon_4)[x][2]);
        counter++;
      }
    } else if (i == 5) {
      for (x = 0; x < twitch_e.length; x++) {
        // console.log(counter + " " + coconut + " " + x);
        if (counter == 8) {
          counter = 0;
          coconut++;
          the_tr = document.createElement('tr');
          get_place.getElementsByTagName('tbody')[0].appendChild(the_tr);
          get_place.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[coconut].innerHTML = td_array;
        }
        preloader(twitch_e[x]);
        get_place.getElementsByTagName('tbody')[0].getElementsByTagName('tr')[coconut].getElementsByTagName('td')[counter].innerHTML = the_base(quote + twitch_c[x] + quote, twitch_e[x], '');
        counter++;
      }
    }
  }
}

function inject_spacer() {
  var where = document.getElementById('chatbox_messenger_form').getElementsByTagName('table')[1].getElementsByTagName('tr')[0];
  var chil_where = where.children;
  var the_body = document.createElement('td');
  the_body.setAttribute('width', '6');
  where.insertBefore(the_body, chil_where[0]);
}

function inject_css_url(url) {
  var head;
  head = document.getElementsByTagName('head')[0];
  if (!head) {
    return;
  }
  var gstyle = document.createElement('link');
  gstyle.rel = 'stylesheet';
  gstyle.type = 'text/css';
  gstyle.href = url;
  head.appendChild(gstyle);
}
/////////////////////
/////////////////////FIX POST PAGE CSS

function post_page_editor() {
  var clear = '';
  var hide = 'display:none;';
  if (getCookie('post_condition') == '1') {
    post_button_num = 1;
    document.getElementById('text_edit').style.cssText = hide;
    document.getElementById('html_edit').style.cssText = clear;
  } else {
    post_button_num = 0;
    document.getElementById('text_edit').style.cssText = clear;
    document.getElementById('html_edit').style.cssText = hide;
  }
  document.getElementById('text_editor_cmd_switchmode').addEventListener('click', function() {
    // console.log("it changed" + post_button_num);
    if (post_button_num === 0) {
      setCookie('post_condition', '1', 1);
      post_button_num = 1;
      document.getElementById('text_edit').style.cssText = hide;
      document.getElementById('html_edit').style.cssText = clear;
    } else if (post_button_num == 1) {
      setCookie('post_condition', '0', 1);
      post_button_num = 0;
      document.getElementById('text_edit').style.cssText = clear;
      document.getElementById('html_edit').style.cssText = hide;
    }
  });
}
/////////////////////
/////////////////////RUNS SCRIPT

function debugg() {
  var smilie_count_1 = Object.keys(emoticon_1).length;
  var smilie_count_2 = Object.keys(emoticon_2).length;
  var smilie_count_3 = Object.keys(emoticon_3).length;
  var smilie_count_4 = Object.keys(emoticon_4).length;
  var smilie_count_5 = Object.keys(twitch_e).length;
  var total_smilies = smilie_count_1 + smilie_count_2 + smilie_count_3 + smilie_count_4 + smilie_count_5;
  var meme_count = Object.keys(maymay).length;

  if (smilie_count_1 > 200) {
    console.log('warning, exceeded smilie count by ' + (smilie_count_1 - 200) + ' in window 1');
  }
  if (smilie_count_2 > 200) {
    console.log('warning, exceeded smilie count by ' + (smilie_count_2 - 200) + ' in window 2');
  }
  if (smilie_count_3 > 200) {
    console.log('warning, exceeded smilie count by ' + (smilie_count_3 - 200) + ' in window 3');
  }
  if (smilie_count_4 > 200) {
    console.log('warning, exceeded smilie count by ' + (smilie_count_4 - 200) + ' in window 4');
  }
  if (smilie_count_5 > 200) {
    console.log('warning, exceeded smilie count by ' + (smilie_count_5 - 200) + ' in window 5');
  }
  console.log('window 1 | ' + smilie_count_1 + '\n' + 'window 2 | ' + smilie_count_2 + '\n' + 'window 3 | ' + smilie_count_3 + '\n' + 'window 4 | ' + smilie_count_4 + '\n' + 'window 5 | ' + smilie_count_5 + '\n' + 'smilie total ' + total_smilies + '\n' + "meme total " + meme_count);
  /////////////// window 1 - Swearify 1
  /////////////// window 2 - Swearify 2
  /////////////// window 3 - Twitch Emoticons
  /////////////// window 4 - Swearify Rage Faces
  /////////////// window 5 - Swearify Dongs
}

window.addEventListener('load', function() { /* shit goes down in here */
  if (is.ie() || is.safari() || is.opera()) alert('This browser is unsupported by Swearify.');
  else {
    if (window.location.href === 'http://aimgames.forummotion.com/post?categ=1&mode=smilies') inject_smilie(1);
    if (window.location.href === 'http://aimgames.forummotion.com/post?categ=2&mode=smilies') inject_smilie(2);
    if (window.location.href === 'http://aimgames.forummotion.com/post?categ=3&mode=smilies') inject_smilie(3);
    if (window.location.href === 'http://aimgames.forummotion.com/post?categ=4&mode=smilies') inject_smilie(4);
    if (window.location.href === 'http://aimgames.forummotion.com/post?categ=5&mode=smilies') inject_smilie(5);
    if (window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum?page=front&' || window.location.href === 'http://aimgames.forummotion.com/chatbox/index.forum' || window.location.href ===
      'http://aimgames.forummotion.com/chatbox/index.forum?archives=1' || window.location.href ===
      'http://aimgames.forummotion.com/chatbox/index.forum?archives' || window.location.href ===
      'http://aimgames.forummotion.com/chatbox') {
      inject_spacer();
      //////
      inject_gradient();
      inject_rainbow();
      inject_random();
      inject_greek();
      inject_smallcaps();
      inject_braille();
      inject_balloon();
      inject_leet();
      inject_morse();
      /////
      inject_css_url('https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/78-ltr.css');
      inject_css_url('https://rawgit.com/HulaSamsquanch/aimgames/master/swearify/index.css');
      edit_css();
      document.getElementById('submit_button').addEventListener('click', function() {
        run_();
      }, false);
      /*$(document).on('keydown', function(e) {
        if (e.which === 13 || e.which === 45) run_();
      });*/
    } else {
      if (window.location.href === 'http://aimgames.forummotion.com/post') post_page_editor();
      if (typeof document.getElementsByTagName('textarea')[1] === 'undefined') { // //PREVIEWs
        // PAGE
        loc = document.getElementById('parent_editor_simple').getElementsByClassName('row2')[0];
        refined_loc = document.getElementById('parent_editor_simple').getElementsByClassName('row2')[0];
      } else {
        loc = document.getElementById('quick_reply').getElementsByClassName('row2')[1];
        cssTd = 'padding-top:5px;';
        var new_td = document.createElement('td');
        loc.appendChild(new_td).style.cssText = cssTd;
        refined_loc = document.getElementById('quick_reply').getElementsByClassName('row2')[1].getElementsByTagName('td')[0];
      }
      var element = document.createElement('label');
      refined_loc.appendChild(element).style.cssText = cssLabel;
      setInterval(function() {
        var area = document.getElementsByTagName('textarea')[0]; // //this
        // is
        // preview
        // window
        // shit
        if (typeof document.getElementsByTagName('textarea')[1] === 'object') area.value = document.getElementsByTagName('textarea')[1].value;
        if (typeof area !== 'undefined') Countable.once(area, function(counter) {
          if (loc.getElementsByTagName('label')[0].innerHTML != values(counter)[4] + ' characters') loc.getElementsByTagName('label')[0].innerHTML = values(counter)[4] + ' characters';
          if (values(counter)[4] > 63500) element.style.cssText += 'color:red;';
          else if (values(counter)[4] < 63500) element.style.cssText = cssLabel;
        });
      }, 3000);
      // ////////
      $(document).on('keydown', function(e) {
        if (e.which === 13) run_post();
      });
    }
  }
  //debugg(); // get info and shit
}, false);

function run_() {
  sekrit_();
  fact_sphere_();
  if (getCookie('CB_rainbow') !== '1' && getCookie('CB_random') !== '1' && getCookie('CB_gradient') !== '1' && getCookie('CB_greek') !== '1' && getCookie('CB_braille') !== '1') {
    emoticon_();
    maymay_();
  }
  greentext_();
  redtext_();
  if (getCookie('CB_rainbow') === '1') rainbow_();
  if (getCookie('CB_random') === '1') random_();
  if (getCookie('CB_gradient') === '1') gradient_();
  if (getCookie('CB_greek') === '1') greek_();
  if (getCookie('CB_braille') === '1') braille_();
  if (getCookie('CB_balloon') === '1') balloon_();
  if (getCookie('CB_leet') === '1') leet_();
  if (getCookie('CB_morse') === '1') morse_();
  if (getCookie('CB_smallcaps') === '1') smallcaps_();
  js_();
  vbs_();
  java_();
}

function run_post() {
  smallcaps_post();
  sekrit_post();
  morse_post();
  greek_post();
  balloon_post();
  braille_post();
  leet_post();
  emoticon_post();
  maymay_post();
  greentext_post();
  redtext_post();
  rainbow_post();
  random_post();
  gradient_post();
  js_post();
  vbs_post();
  java_post();
}
/////////////////////
