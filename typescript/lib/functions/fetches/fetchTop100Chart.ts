import cheerio from "cheerio";
import got from "got";
import { BASE_URI } from "../../../configuration/config.js";
import getArtistName from "../helpers/getArtistName.js";
import getTrackImage from "../helpers/getTrackImage.js";
import getTrackName from "../helpers/getTrackName.js";
import { ChartInterface } from "../../typings/index.js";
import getChartWeeks from "../helpers/chartWeeks.js";

export default async function fetchTop100Chart() {
  const uriToFetch: string = `${BASE_URI}/charts/hot-100/`;
  const rawBody = await got(uriToFetch);
  const body = rawBody.body;
  const $ = cheerio.load(body);
  const chartArray: ChartInterface[] = [];

  await $("#main-wrapper")
    .find("main")
    .find(".pmc-paywall")
    .find(".chart-results-list")
    .find(".o-chart-results-list-row-container")
    .map(async (index, element) => {
      const $_ = $(element);
      const artist = (await getArtistName($_)) as string;
      const image = getTrackImage($_) as string;
      const name = getTrackName($_) as string;
      const weekOnChart = (await getChartWeeks($_)) as string;
      chartArray.push({
        artist,
        image,
        name,
        weeksOnChart: weekOnChart,
      });
    });
  return chartArray;
}
