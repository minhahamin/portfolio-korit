import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createContactMessage, listContactMessages, deleteContactMessage } from "../server/contactStore.js";

// Handles POST /api/contact (create), and — via vercel.json rewrites —
// GET /api/contact/messages (?action=messages) and DELETE /api/contact/messages/:id (?id=...)
// so all three share the same in-memory contact store within one serverless function.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { action, id } = req.query;

  if (req.method === "DELETE" && typeof id === "string") {
    if (deleteContactMessage(id)) {
      return res.json({ success: true, message: "메시지가 삭제되었습니다." });
    }
    return res.status(404).json({ error: "메시지를 찾을 수 없습니다." });
  }

  if (req.method === "GET" && action === "messages") {
    const messages = listContactMessages();
    return res.json({ total: messages.length, messages });
  }

  if (req.method === "POST") {
    const { name, email, company, message, type } = req.body ?? {};
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
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
