// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  day: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let lang = req.query.lang?.toString() || "en";

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
    dayNames[lang as keyof typeof dayNames][dayNum] || dayNames["en"][dayNum];
  /* ------------- WHY TYPESCRIPT WHY??? */

  res.status(200).json({ day: dayName });
}
