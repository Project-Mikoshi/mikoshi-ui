import UCLEI from "static/UCLEI.png"
import SHOPPIES from "static/Shoppies.png"
import QUICKIN from "static/QuickIn.png"
import { ProjectCardData } from "types/project"

export const projects: Record<string, ProjectCardData> = {
  QuickIn : {
    title: "QuickIn",
    description: "A simple check-in app that simplfies the gathering of contact tracing information.",
    subtitles: "React, Node.js",
    imageUrl: QUICKIN
  },
  UCLEI : {
    title: "UCLEI",
    description: "A stock trading simulation website that provides a safe, easy-to-use sandbox environment for users to experience how stock market trading works.",
    subtitles: "React, Node.js",
    imageUrl: UCLEI
  },
  Shoppies : {
    title: "The Shoppies",
    description: "A web app that provides help to search movies via OMDB database and add to personal nomination list which can be export as a JSON file.",
    subtitles: "React",
    imageUrl: SHOPPIES
  }
}