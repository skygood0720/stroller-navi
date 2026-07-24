import { Metadata } from "next";
import MilestoneClient from "./MilestoneClient";

export const metadata: Metadata = {
  title: "成長記録 | 赤ちゃんのマイルストーン記録 | ベビーカーナビ",
  description: "赤ちゃんのハイハイ・寝返り・初めての一歩などマイルストーンを日付・写真・メモと一緒に記録。タイムラインで振り返れる成長アルバム。",
};

export default function MilestonePage() {
  return <MilestoneClient />;
}
