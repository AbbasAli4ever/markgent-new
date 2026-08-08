import "server-only";

export type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:10px 0;border-bottom:1px solid #e7e0d0;color:#5d6b66;font-size:13px;width:150px;vertical-align:top;">${label}</td>
    <td style="padding:10px 0;border-bottom:1px solid #e7e0d0;color:#062d2a;font-size:15px;">${escapeHtml(value) || "—"}</td>
  </tr>`;

/** Plain-text fallback for clients that don't render HTML. */
export function buildContactText(data: ContactSubmission) {
  return [
    "New inquiry from themarkgentllc.com",
    "",
    `Name:    ${data.name}`,
    `Email:   ${data.email}`,
    `Company: ${data.company || "Not provided"}`,
    `Phone:   ${data.phone || "Not provided"}`,
    `Service: ${data.service || "Not sure yet"}`,
    "",
    "Project details:",
    data.message,
  ].join("\n");
}

export function buildContactHtml(data: ContactSubmission) {
  return `<!doctype html>
<html>
  <body style="margin:0;padding:24px;background:#f7f2e7;font-family:ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#fffdf8;border:1px solid #e7e0d0;border-radius:16px;overflow:hidden;">
      <tr>
        <td style="background:#062d2a;padding:24px 28px;">
          <div style="color:#8fd8c4;font-size:11px;letter-spacing:.16em;text-transform:uppercase;">New inquiry</div>
          <div style="color:#fffdf8;font-size:21px;font-weight:700;margin-top:6px;">The Markgent LLC</div>
        </td>
      </tr>
      <tr>
        <td style="padding:26px 28px;">
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
            ${row("Name", data.name)}
            ${row("Email", data.email)}
            ${row("Company", data.company || "Not provided")}
            ${row("Phone", data.phone || "Not provided")}
            ${row("Service", data.service || "Not sure yet")}
          </table>
          <div style="margin-top:22px;color:#5d6b66;font-size:13px;">Project details</div>
          <div style="margin-top:8px;padding:16px;background:#f7f2e7;border-radius:12px;color:#062d2a;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
          <div style="margin-top:22px;font-size:13px;color:#5d6b66;">
            Reply directly to this email to reach ${escapeHtml(data.name)}.
          </div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
