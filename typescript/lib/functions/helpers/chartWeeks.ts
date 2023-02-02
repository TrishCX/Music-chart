import { Cheerio, Element } from "cheerio";

export default async function getChartWeeks($: Cheerio<Element>) {
  return $.find("ul")
    .find("li.lrv-u-width-100p")
    .find("ul")
    .find("li")
    .last()
    .text()
    .trim();
}
