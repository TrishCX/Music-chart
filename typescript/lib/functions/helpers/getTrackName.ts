import { Cheerio, Element } from "cheerio";

export default function getTrackName($: Cheerio<Element>) {
  return $.find("li.lrv-u-width-100p")
    .find("li.o-chart-results-list__item")
    .find("h3#title-of-a-story")
    .html()
    ?.trim();
}
