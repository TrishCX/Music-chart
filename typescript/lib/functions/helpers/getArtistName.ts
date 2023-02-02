import { Cheerio, Element } from "cheerio";

export default async function getArtistName($: Cheerio<Element>) {
  return $.find("li.lrv-u-width-100p")
    .find("li.o-chart-results-list__item")
    .find("span.c-label")
    .html()
    ?.trim();
}
