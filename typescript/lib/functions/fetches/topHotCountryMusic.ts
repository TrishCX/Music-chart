// Modules
import got from "got";
import cheerio from "cheerio";
import { BASE_URI } from "../../../configuration/config.js";
import { ArtistInterface as CountryInterface } from "../../typings/index.js";
import getArtistName from "../helpers/getArtistName.js";
export default async function topCurrentAlbums() {
  const uriToFetch: string = `${BASE_URI}/charts/country-songs/`;
  const rawBody = await got(uriToFetch);
  const body = rawBody.body as string;
  const $ = cheerio.load(body);
  const topCountryChart: CountryInterface[] = [];

  $("#main-wrapper")
    .find("main")
    .find("#post-1479861")
    .find(".pmc-paywall")
    .find(".chart-results")
    .find(".chart-results-list")
    .find(".o-chart-results-list-row-container")
    .map(async (index, element) => {
      const $$ = $(element);
      const name = $$.find("ul")
        .find("li.lrv-u-width-100p")
        .find("ul.lrv-a-unstyle-list")
        .find("li.o-chart-results-list__item")
        .find("h3#title-of-a-story")
        .text()
        ?.trim();

      const weeksOnChart = $$.find("ul")
        .find("li.lrv-u-width-100p")
        .find("ul")
        .find("li")
        .last()
        .text()
        .trim();

      const image = $$.find("ul")
        .find(".o-chart-results-list__item")
        .find(".c-lazy-image")
        .find("img")
        .attr("data-lazy-src");
      const artistName = await getArtistName($$);
      topCountryChart.push({
        name,
        weekOnChart: weeksOnChart,
        image,
        artist: artistName,
      });
    });
  return topCountryChart;
}
