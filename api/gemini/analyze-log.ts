import type { VercelRequest, VercelResponse } from "@vercel/node";
import { analyzeLogText } from "../../server/analyzeLog";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { logText } = req.body ?? {};
    if (!logText || typeof logText !== "string" || !logText.trim()) {
      return res.status(400).json({ error: "분석할 로그 텍스트를 입력해 주세요." });
    }

    const result = await analyzeLogText(logText);
    return res.json(result);
  } catch (err: any) {
    console.error("Log analysis error:", err);
    return res.status(500).json({ error: "로그 분석 중 오류가 발생했습니다." });
  }
}
