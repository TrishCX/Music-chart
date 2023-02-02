import cheerio from "cheerio";
import puppeteer from "puppeteer";
import { ArtistInterface as MusicInterface } from "../../typings/index.js";
import { Country } from "../../typings/index.js";

/**
 * @since Thursday, 2 February 2023
 * @requires Puppeteer
 * @async
 */
export default async function specificCountryChartTop200Music(
  country: Country
) {
  const arrayOfSongs: MusicInterface[] = [];
  const uriToFetch: string = `https://www.shazam.com/charts/top-200/${country}`;
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36"
  );
  await page.goto(uriToFetch, { waitUntil: "networkidle0" });
  const content = await page.content();
  await browser.close();
  const $ = cheerio.load(content as string);
  const data = $(".root")
    .find(".grid-full-bleed")
    .find("main")
    .find(".chart-content")
    .find(".tracks-container")
    .find(".charttracks")
    .find("ul")
    .find("li")
    .map(async (index, element) => {
      const $$ = $(element);
      const image = $$.find("article").find("span.image").attr("data-shz-img");
      const name = $$.find("article")
        .find(".details")
        .find(".titleArtistContainer")
        .find(".title")
        .text()
        .trim();

      const artist = $$.find("article")
        .find(".details")
        .find(".titleArtistContainer")
        .find(".artist")
        .text()
        .trim();

      arrayOfSongs.push({
        name,
        artist,
        image,
      });
    });

  const cleanArray = arrayOfSongs.filter((v, i) => {
    return v.name !== "" && v.artist !== "";
  });
  return cleanArray;
}
