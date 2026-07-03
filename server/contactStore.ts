export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  type: string;
  createdAt: string;
  mailSentStatus?: string;
}

// NOTE: in-memory only — resets whenever the serverless function cold-starts,
// so this is a demo inbox, not durable storage.
const contactMessagesStore: ContactMessage[] = [];

export async function createContactMessage(input: {
  name: string;
  email: string;
  company?: string;
  message: string;
  type?: string;
}): Promise<ContactMessage> {
  const newMessage: ContactMessage = {
    id: `MSG-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    name: String(input.name).trim(),
    email: String(input.email).trim(),
    company: input.company ? String(input.company).trim() : "",
    message: String(input.message).trim(),
    type: input.type || "recruitment",
    createdAt: new Date().toISOString(),
    mailSentStatus: "Saved to Server Inbox"
  };

  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const nodemailer = await import("nodemailer");
      const cleanPass = process.env.SMTP_PASS.replace(/\s+/g, "");
      const port = Number(process.env.SMTP_PORT) || 587;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port,
        secure: port === 465,
        auth: {
          user: process.env.SMTP_USER.trim(),
          pass: cleanPass,
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      const targetEmail = process.env.TARGET_EMAIL || "hlkm1667haha@gmail.com";

      await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.SMTP_USER.trim()}>`,
        to: targetEmail,
        replyTo: newMessage.email,
        subject: `[포트폴리오 문의] ${newMessage.name}님의 메시지 (${newMessage.type})`,
        text: `[홍민하 개발자 포트폴리오 사이트 수신 메시지]\n\n성함: ${newMessage.name}\n이메일: ${newMessage.email}\n소속/회사: ${newMessage.company || "미입력"}\n문의 유형: ${newMessage.type}\n\n[내용]\n${newMessage.message}\n\n일시: ${newMessage.createdAt}\n메시지 ID: ${newMessage.id}`
      });

      if (newMessage.email && newMessage.email !== targetEmail) {
        try {
          await transporter.sendMail({
            from: `"홍민하 (Developer)" <${process.env.SMTP_USER.trim()}>`,
            to: newMessage.email,
            subject: `[접수 완료] 안녕하세요 ${newMessage.name}님, 문의가 정상적으로 접수되었습니다.`,
            text: `안녕하세요, ${newMessage.name}님!\n\n홍민하 개발자 포트폴리오 사이트를 통해 남겨주신 문의가 성공적으로 접수되었습니다.\n보내주신 내용을 확인 후 빠른 시일 내에 답장드리겠습니다.\n\n[접수된 문의 내용]\n- 문의 유형: ${newMessage.type}\n- 성함: ${newMessage.name}\n- 회사/소속: ${newMessage.company || "미입력"}\n- 문의 내용:\n${newMessage.message}\n\n감사합니다.\n홍민하 드림`
          });
          console.log(`📧 [Auto-Reply Sent] Confirmation email sent to sender: ${newMessage.email}`);
        } catch (autoReplyErr) {
          console.warn("⚠️ [Auto-Reply Warning] Could not send receipt to visitor:", autoReplyErr);
        }
      }

      newMessage.mailSentStatus = `Sent to ${targetEmail} & ${newMessage.email} via SMTP`;
      console.log(`📧 [SMTP Mail Dispatched] Successfully sent email to ${targetEmail} and confirmation to ${newMessage.email}`);
    } catch (mailErr: any) {
      console.error("⚠️ [SMTP Error] Failed to send email:", mailErr?.message || mailErr);
      newMessage.mailSentStatus = `SMTP Error: ${mailErr?.message || "Send failed"}`;
    }
  } else {
    console.log("ℹ️ [SMTP Warning] SMTP_USER or SMTP_PASS not defined in process.env");
    newMessage.mailSentStatus = "SMTP Config Missing";
  }

  if (process.env.NOTIFICATION_WEBHOOK_URL) {
    try {
      await fetch(process.env.NOTIFICATION_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `📬 **[포트폴리오 새 메시지 도착]**\n- **성함**: ${newMessage.name}\n- **이메일**: ${newMessage.email}\n- **회사/소속**: ${newMessage.company || "미입력"}\n- **유형**: ${newMessage.type}\n- **내용**: ${newMessage.message}`
        })
      });
      console.log("🔔 [Webhook Dispatched] Notification sent to Webhook URL");
    } catch (webhookErr) {
      console.error("⚠️ [Webhook Error] Failed to trigger notification webhook:", webhookErr);
    }
  }

  contactMessagesStore.push(newMessage);
  console.log("📬 [Contact Server] New message received & stored:", newMessage);
  return newMessage;
}

export function listContactMessages(): ContactMessage[] {
  return [...contactMessagesStore].reverse();
}

export function deleteContactMessage(id: string): boolean {
  const index = contactMessagesStore.findIndex(m => m.id === id);
  if (index === -1) return false;
  contactMessagesStore.splice(index, 1);
  return true;
}
