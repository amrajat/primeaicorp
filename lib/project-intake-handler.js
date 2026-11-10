function formDataToObject(formData) {
  const output = {};
  for (const [key, value] of formData.entries()) {
    const text = typeof value === "string" ? value : value.name ?? "";
    if (key === "form-name") continue;
    const existing = output[key];
    if (existing === undefined) {
      output[key] = text;
    } else if (Array.isArray(existing)) {
      existing.push(text);
    } else {
      output[key] = [existing, text];
    }
  }
  return output;
}

function formatEmailBody(data) {
  return Object.entries(data)
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
    .join("\n");
}

/**
 * @param {FormData} formData
 * @param {{ RESEND_API_KEY?: string, FORM_NOTIFY_EMAIL?: string, RESEND_FROM?: string }} env
 */
export async function handleProjectIntake(formData, env = {}) {
  try {
    const payload = formDataToObject(formData);

    const notifyEmail = env.FORM_NOTIFY_EMAIL ?? "ai@primeaicorp.com";
    const resendKey = env.RESEND_API_KEY;
    const from =
      env.RESEND_FROM ?? "Prime AI Company <onboarding@resend.dev>";

    if (resendKey) {
      const company =
        typeof payload.company === "string" ? payload.company : "New submission";
      const replyTo =
        typeof payload.email === "string" ? payload.email : undefined;

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [notifyEmail],
          subject: `Project intake: ${company}`,
          text: formatEmailBody(payload),
          ...(replyTo ? { reply_to: replyTo } : {}),
        }),
      });

      if (!emailRes.ok) {
        console.error("Resend API error:", await emailRes.text());
        return new Response(
          JSON.stringify({ ok: false, error: "email_delivery_failed" }),
          { status: 502, headers: { "Content-Type": "application/json" } },
        );
      }
    } else {
      console.log(
        "project-intake (no RESEND_API_KEY):",
        JSON.stringify(payload),
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("project-intake error:", err);
    return new Response(JSON.stringify({ ok: false, error: "invalid_form" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
