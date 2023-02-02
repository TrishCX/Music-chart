import { Cheerio, Element } from "cheerio";

export default function getTrackImage($: Cheerio<Element>) {
  return $.find("ul")
    .find(".c-lazy-image")
    .find("div")
    .find("img")
    .attr("data-lazy-src");
}
