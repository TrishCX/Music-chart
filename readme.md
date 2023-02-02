# Music Chart

> Simple way to fetch the top trending songs, artist, albums, show trending song for a specific country.
>
> [![music-chart](https://nodei.co/npm/music-chart.png?downloads=true&downloadRank=true)](http://npmjs.org/package/music-chart)

[![Version](https://img.shields.io/npm/v/@myno_21/time.svg)](https://www.npmjs.com/package/music-chart)
[![Downloads](https://img.shields.io/npm/dt/@myno_21/time.svg)](https://www.npmjs.com/package/music-chart)

[![GitHub Actions](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MYN0/-Myno-time)

## 🎈 Important

- The package unfortunately doesn't support the common js, you need to use the type module.

## Features 📣

- Get the current top trending global songs from all over the world.
- Get the current top global trending albums.
- Get the specific trending song of a particular country.
- Get the current global trending artist.
- Get the top hot country music.

# ❔Installation

```
$ npm install music-chart
```

## Simple TypeScript Example

![ts](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)

```ts
import { Country, getSpecificCountryTop200MusicChart } from "music-chart";

// Anonymous arrow function.
(async () => {
  const res = await getResponse("united-states");
  console.log(res);

  // Output
  //     [
  //   {
  //     name: 'Best Part (feat. Daniel Caesar)',
  //     artist: 'H.E.R.',
  //     image: undefined
  //   },
  //   {
  //     name: "Creepin'",
  //     artist: 'Metro Boomin, The Weeknd & 21 Savage',
  //     image: undefined
  //   },
  //   {
  //     name: 'Watch This! (Uzi Pluggnb)',
  //     artist: 'lil ja$',
  //     image: undefined
  //   },
  //   {
  //     name: 'POPSTAR (feat. Drake)',
  //     artist: 'DJ Khaled',
  //     image: undefined
  //   },
  //   { name: 'Flowers', artist: 'Miley Cyrus', image: undefined },
  //   { name: 'Players', artist: 'Coi Leray', image: undefined },
  //   { name: 'Kill Bill', artist: 'SZA', image: undefined },
  //   { name: 'Calm Down', artist: 'Rema', image: undefined },
  //   { name: 'Escapism.', artist: 'RAYE & 070 Shake', image: undefined },
  //   {
  //     name: 'Ni**as in Paris',
  //     artist: 'JAY-Z & Kanye West',
  //     image: undefined
  //   },
  //   {
  //     name: "I'm Good (Blue)",
  //     artist: 'David Guetta & Bebe Rexha',
  //     image: undefined
  //   },
  //   {
  //     name: 'Bebe Dame',
  //     artist: 'Fuerza Regida & Grupo Frontera',
  //     image: undefined
  //   },
  //   { name: 'No Ordinary', artist: 'Labrinth', image: undefined },
  //   {
  //     name: 'Under The Influence',
  //     artist: 'Chris Brown',
  //     image: undefined
  //   },
  //   { name: 'Just Wanna Rock', artist: 'Lil Uzi Vert', image: undefined },
  //   {
  //     name: 'Never Let Me Down Again',
  //     artist: 'Depeche Mode',
  //     image: undefined
  //   },
  //   {
  //     name: 'Unholy',
  //     artist: 'Sam Smith & Kim Petras',
  //     image: undefined
  //   },
  //   { name: 'Golden Hour', artist: 'JVKE', image: undefined },
  //   { name: 'Bloody Mary', artist: 'Lady Gaga', image: undefined },
  //   {
  //     name: 'Long Long Time',
  //     artist: 'Linda Ronstadt',
  //     image: undefined
  //   },
  //   { name: 'Die For You', artist: 'The Weeknd', image: undefined },
  //   { name: 'Love Again', artist: 'The Kid LAROI', image: undefined },
  //   { name: 'Rich Flex', artist: 'Drake & 21 Savage', image: undefined },
  //   {
  //     name: 'Until I Found You',
  //     artist: 'Stephen Sanchez',
  //     image: undefined
  //   },
  //   {
  //     name: 'On The Nature Of Daylight (Orchestral Version)',
  //     artist: 'Max Richter Orchestra & Lorenz Dangel',
  //     image: undefined
  //   },
  //   {
  //     name: 'Stay High (Childish Gambino Version)',
  //     artist: 'Brittany Howard & Childish Gambino',
  //     image: undefined
  //   },
  //   {
  //     name: 'Superhero (Heroes & Villains)',
  //     artist: 'Metro Boomin, Future & Chris Brown',
  //     image: undefined
  //   },
  //   {
  //     name: 'Do It Again (feat. 2Rare)',
  //     artist: 'NLE Choppa',
  //     image: undefined
  //   },
  //   { name: 'September', artist: 'Sparky Deathcap', image: undefined },
  //   { name: 'Sure Thing', artist: 'Miguel', image: undefined },
  //   { name: "It's a Wrap", artist: 'Mariah Carey', image: undefined },
  //   {
  //     name: 'Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By)',
  //     artist: 'Rihanna',
  //     image: undefined
  //   },
  //   {
  //     name: 'Until I Found You (Em Beihold Version)',
  //     artist: 'Stephen Sanchez & Em Beihold',
  //     image: undefined
  //   },
  //   { name: 'Anti-Hero', artist: 'Taylor Swift', image: undefined },
  //   {
  //     name: 'MAGIC',
  //     artist: 'Vince Staples & Mustard',
  //     image: undefined
  //   },
  //   {
  //     name: 'Shakira: Bzrp Music Sessions, Vol. 53',
  //     artist: 'Bizarrap & Shakira',
  //     image: undefined
  //   },
  //   { name: 'CUFF IT', artist: 'Beyoncé', image: undefined },
  //   {
  //     name: 'Que Vuelvas',
  //     artist: 'Carin Leon & Grupo Frontera',
  //     image: undefined
  //   },
  //   { name: 'Free Mind', artist: 'Tems', image: undefined },
  //   { name: 'Where Did the Day Go', artist: 'Wet', image: undefined },
  //   { name: 'Tonight', artist: 'Ready for the World', image: undefined },
  //   {
  //     name: "Don't Play With It (feat. Billy B)",
  //     artist: 'Lola Brooke',
  //     image: undefined
  //   },
  //   { name: 'Nobody Gets Me', artist: 'SZA', image: undefined },
  //   { name: 'ICU', artist: 'Coco Jones', image: undefined },
  //   { name: 'Bad Habit', artist: 'Steve Lacy', image: undefined },
  //   {
  //     name: 'The Kind of Love We Make',
  //     artist: 'Luke Combs',
  //     image: undefined
  //   },
  //   {
  //     name: 'Rock and a Hard Place',
  //     artist: 'Bailey Zimmerman',
  //     image: undefined
  //   },
  //   { name: 'Forget Me', artist: 'Lewis Capaldi', image: undefined },
  //   {
  //     name: 'Thank God',
  //     artist: 'Kane Brown & Katelyn Brown',
  //     image: undefined
  //   },
  //   {
  //     name: 'Tomorrow 2',
  //     artist: 'GloRilla & Cardi B',
  //     image: undefined
  //   },
  //   {
  //     name: 'Lizzo',
  //     artist: 'Moone Walker',
  //     image: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/2a/9d/84/2a9d8426-165d-5983-8c3f-db84cfa4a9e1/196922163456_Cover.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Thought You Should Know',
  //     artist: 'Morgan Wallen',
  //     image: 'https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/86/cc/00/86cc001c-2efc-9ebb-8290-17f4f3ba3e4a/23UMGIM08087.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'People',
  //     artist: 'Libianca',
  //     image: 'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/c6/8c/ca/c68ccacb-cdd5-b765-53e1-eeca394770ac/196589735607.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Made You Look',
  //     artist: 'Meghan Trainor',
  //     image: 'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/e2/b6/c9/e2b6c962-e585-85c5-841b-64c01aa35834/196589214188.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Perc & Sex',
  //     artist: 'YN Jay',
  //     image: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a4/82/60/a48260da-0d84-fad2-f844-fc6f1e0eecbb/artwork.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Back End',
  //     artist: 'Finesse2Tymes',
  //     image: 'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/ae/06/7a/ae067afa-0725-78e5-c61c-993fcb98cc68/075679712264.jpg/375x375bb.jpg'
  //   },
  //   { name: 'Shirt', artist: 'SZA', image: undefined },
  //   {
  //     name: 'Trauma Baby',
  //     artist: 'Malcolm Mays',
  //     image: 'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/c0/83/21/c08321fd-f9be-319f-2536-ef0ea20ce8b7/193436289351_RedFlagsALBUMCOVERVERjpg.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'wait in the truck',
  //     artist: 'HARDY & Lainey Wilson',
  //     image: 'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/07/28/4a/07284a89-21e9-a9e0-3261-da7d6d589bde/193436304931_hardytmatcfinal.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Here With Me',
  //     artist: 'd4vd',
  //     image: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/90/ad/38/90ad385f-2dba-8046-99d0-3ee71df77297/22UM1IM07351.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Classic (feat. Swizz Beatz)',
  //     artist: 'Meek Mill',
  //     image: 'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/14/55/97/145597b7-a250-9d99-65ee-d8bfadcdfb72/075679923554.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Rise Up',
  //     artist: 'Andra Day',
  //     image: 'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/7e/7b/4a/7e7b4a67-1ff7-efc4-10cf-2286cd30786e/dj.jnvitiaq.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Hey, Mickey!',
  //     artist: 'Baby Tate',
  //     image: 'https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/61/a4/9d/61a49d0e-76a6-ff26-34d3-e5dd1d5c18c0/27704.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Her Way',
  //     artist: 'PARTYNEXTDOOR',
  //     image: 'https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/8b/ac/b2/8bacb2b9-0ff0-ac65-bbe2-58baef5abfcb/27496.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: '2 Million Up',
  //     artist: 'Peezy',
  //     image: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/95/b0/a8/95b0a8d8-9253-3f18-0c97-4ad0d087ad51/194690916342_cover.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Fin de Semana',
  //     artist: 'Óscar Maydon & Junior H',
  //     image: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/9c/dd/76/9cdd767d-ac87-9203-ce4a-2aa0ff813c54/1963621125370_cover.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Chitty Bang',
  //     artist: 'Leikeli47',
  //     image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8d/75/98/8d7598bb-e93e-78e8-e706-335248f49ea9/886448315346.jpg/375x375bb.jpg'
  //   },
  //   { name: 'Snooze', artist: 'SZA', image: undefined },
  //   {
  //     name: 'Unstoppable',
  //     artist: 'Sia',
  //     image: 'https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/bc/13/27/bc13275c-8b26-802d-771b-d15ae00fb530/mzm.hvpwjsvi.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'As It Was',
  //     artist: 'Harry Styles',
  //     image: 'https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/2a/19/fb/2a19fb85-2f70-9e44-f2a9-82abe679b88e/886449990061.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Moon River',
  //     artist: 'Frank Ocean',
  //     image: 'https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/42/62/50/426250f9-7e39-f907-687c-442caa436636/dj.nhptxziz.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'STAY',
  //     artist: 'The Kid LAROI & Justin Bieber',
  //     image: 'https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/a8/3a/22/a83a22f7-af18-7ef6-a7de-74816c532a44/886449475421.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Heart Like A Truck',
  //     artist: 'Lainey Wilson',
  //     image: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/2c/d4/d1/2cd4d14d-d89c-d7d5-8ae7-bbca55e23c4f/4050538875423.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Lavender Haze',
  //     artist: 'Taylor Swift',
  //     image: 'https://is3-ssl.mzstatic.com/image/thumb/Music122/v4/8b/59/4b/8b594b75-5a1a-9a39-e003-b227d09d5b37/22UM1IM07364.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'SNAP',
  //     artist: 'Rosa Linn',
  //     image: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/e6/f7/26/e6f726ab-1827-dec4-1613-394b537db8e4/196589496959.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'I Like You (A Happier Song) [feat. Doja Cat]',
  //     artist: 'Post Malone',
  //     image: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/0d/e8/8b/0de88b7c-bed9-be30-24e2-82d796e7bcf3/22UMGIM49145.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: "I Ain't Worried",
  //     artist: 'OneRepublic',
  //     image: 'https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/e6/14/14/e6141444-6597-4c3a-7ad1-86304528acf4/22UMGIM45569.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'AMG',
  //     artist: 'Natanael Cano, Peso Pluma & Gabito Ballesteros',
  //     image: 'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/dc/d4/29/dcd429fb-ef2c-1064-b7cd-a3115b74cdaa/5054197465277.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Something in the Orange',
  //     artist: 'Zach Bryan',
  //     image: 'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/d6/cd/d8/d6cdd86f-db67-ffc8-cd5e-26c4559686c3/054391903860.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Eres Ese Algo',
  //     artist: 'La Maquinaria Norteña',
  //     image: 'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/db/32/71/db32713a-f1a7-fd8e-7bfc-3125d38996ac/22UMGIM59843.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Hood Took Me Under',
  //     artist: "Compton's Most Wanted",
  //     image: 'https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/2e/1d/86/2e1d8687-9fc4-6d22-5541-1ffcf6467d35/mzi.hltiefyg.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'I miss you, I’m sorry',
  //     artist: 'Gracie Abrams',
  //     image: 'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/a2/54/c0/a254c01f-4e3c-0612-9e33-5d63d0128d70/20UMGIM54731.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'What My World Spins Around',
  //     artist: 'Jordan Davis',
  //     image: 'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/6e/fa/99/6efa990d-ef2e-10cd-a88d-5646450ce99d/22UM1IM40058.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'White Room',
  //     artist: 'Cream',
  //     image: 'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/c3/3d/f7/c33df7d6-72be-fefe-d517-907633e2aa59/00602537803163.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'ALIVE',
  //     artist: 'Hanni El Khatib',
  //     image: 'https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/db/7f/8a/db7f8a80-7bea-38a3-31aa-4a3f8aeac33d/810874023766.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Shabooya (feat. Slimeroni & Aleza)',
  //     artist: 'Hitkidd, Gloss Up & K Carbon',
  //     image: 'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/36/0b/6c/360b6cce-d2b7-7213-5cd2-a13aeb79fdcc/22BMR0003551.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'LOVE YOU BETTER',
  //     artist: 'Future',
  //     image: 'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/65/f2/06/65f2067b-a8ea-239c-c219-8e0f0282dcea/196589073693.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Give It to Me (feat. Justin Timberlake & Nelly Furtado)',
  //     artist: 'Timbaland',
  //     image: 'https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/30/26/71/302671c8-548f-29f1-84aa-ddb3c94292d7/07UMGIM03315.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Sex, Drugs, Etc.',
  //     artist: 'Beach Weather',
  //     image: 'https://is5-ssl.mzstatic.com/image/thumb/Music113/v4/89/02/cd/8902cdf1-c79d-26be-9f6b-5520e78fd0d0/196589599209.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'You Didn’t',
  //     artist: 'Brett Young',
  //     image: 'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/79/1b/b2/791bb2ea-71b6-ef3e-1120-b8d523e845bd/22BMR0003334.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Money',
  //     artist: 'The Drums',
  //     image: 'https://is4-ssl.mzstatic.com/image/thumb/Music125/v4/c3/06/d0/c306d060-8f16-f74d-7772-02079fd1280b/21UMGIM82481.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Thousand Miles',
  //     artist: 'The Kid LAROI',
  //     image: 'https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/af/db/d4/afdbd415-8604-b42d-43ce-118e6d161875/196589080950.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Last Last',
  //     artist: 'Burna Boy',
  //     image: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/34/42/db/3442dbd6-644f-a111-8344-0151ffb93313/075679745156.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Quickie',
  //     artist: 'Moneybagg Yo',
  //     image: 'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/84/16/84/841684f3-e515-63f2-c19b-a8e1bd8f2d38/22UM1IM38634.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Two Tens (feat. Anderson .Paak)',
  //     artist: 'Cordae',
  //     image: 'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/a8/95/65/a8956586-9230-c0ba-85a3-a96cbfc63d92/075679705518.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'La Bachata',
  //     artist: 'Manuel Turizo',
  //     image: 'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/21/ed/e6/21ede6c2-fa81-81f5-3227-2e7cc6a40130/741754078043.png/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Tití Me Preguntó',
  //     artist: 'Bad Bunny',
  //     image: 'https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/3e/04/eb/3e04ebf6-370f-f59d-ec84-2c2643db92f1/196626945068.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'On Wat U On',
  //     artist: 'Moneybagg Yo & GloRilla',
  //     image: 'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/cd/c3/36/cdc33645-7704-e67d-e907-ce8aaf436a7e/23UMGIM00380.rgb.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'Sunshine',
  //     artist: 'Tyga, Jhené Aiko & Pop Smoke',
  //     image: 'https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/2d/5b/90/2d5b908c-c0c1-8dc3-a9af-cc2f74d8dce0/194690904622_cover.jpg/375x375bb.jpg'
  //   },
  //   {
  //     name: 'The Color Violet',
  //     artist: 'Tory Lanez',
  //     image: 'https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/16/c8/eb/16c8eb6d-fe23-fa03-5e43-9827972763d3/cover.jpg/375x375bb.jpg'
  //   },
  //   ... 100 more items
  // ]
})();

async function getResponse(country: Country) {
  const response = await getSpecificCountryTop200MusicChart(country);
  return response;
}
```
