import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { analyzeLogText } from "./server/analyzeLog";
import { createContactMessage, listContactMessages, deleteContactMessage } from "./server/contactStore";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Health Check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", role: "Log-Tracker & Sentinel Server" });
  });

  // API Route: Gemini AI Log Investigator
  app.post("/api/gemini/analyze-log", async (req, res) => {
    try {
      const { logText } = req.body;
      if (!logText || typeof logText !== "string" || !logText.trim()) {
        return res.status(400).json({ error: "분석할 로그 텍스트를 입력해 주세요." });
      }

      const result = await analyzeLogText(logText);
      return res.json(result);
    } catch (err: any) {
      console.error("Log analysis error:", err);
      res.status(500).json({ error: "로그 분석 중 오류가 발생했습니다." });
    }
  });

  // API Route: Contact Form Handler (Actual Implementation)
  app.post("/api/contact", async (req, res) => {
    const { name, email, company, message, type } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "필수 항목(성함, 회신 이메일, 작성 내용)을 모두 작성해 주세요." });
    }

    const newMessage = await createContactMessage({ name, email, company, message, type });

    return res.json({
      success: true,
      id: newMessage.id,
      timestamp: newMessage.createdAt,
      mailSentStatus: newMessage.mailSentStatus,
      message: "메시지가 성공적으로 수신되어 백엔드 서버 메시지함에 저장되었습니다."
    });
  });

  // API Route: Get Saved Messages List
  app.get("/api/contact/messages", (req, res) => {
    const messages = listContactMessages();
    return res.json({
      total: messages.length,
      messages
    });
  });

  // API Route: Delete a Saved Message
  app.delete("/api/contact/messages/:id", (req, res) => {
    const { id } = req.params;
    if (deleteContactMessage(id)) {
      return res.json({ success: true, message: "메시지가 삭제되었습니다." });
    }
    return res.status(404).json({ error: "메시지를 찾을 수 없습니다." });
  });


  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
