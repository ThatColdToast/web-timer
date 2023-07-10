// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  day: Date;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let lang = req.query.lang?.toString() || "en";
  let day = parseInt(req.query.day?.toString() || "0");

  const dayNum = new Date(Date.now()).getDay();

  const dayNames = {
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    jp: [
      "にちようび",
      "げつようび",
      "かようび",
      "すいようび",
      "もくようび",
      "きんようび",
      "どようび",
    ],
  };

  const dayName: string =
    dayNames[lang as keyof typeof dayNames][day] || dayNames["en"][day];
  /* ------------- WHY TYPESCRIPT WHY??? */

  res.status(200).json({ day: new Date(Date.now()) });
}
