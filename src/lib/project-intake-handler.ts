function formDataToObject(formData: FormData) {
  const output: Record<string, string | string[]> = {};
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

function formatEmailBody(data: Record<string, string | string[]>) {
  return Object.entries(data)
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
    .join("\n");
}

export type ProjectIntakeEnv = {
  RESEND_API_KEY?: string;
  FORM_NOTIFY_EMAIL?: string;
  RESEND_FROM?: string;
};

export async function handleProjectIntake(
  formData: FormData,
  env: ProjectIntakeEnv = {},
) {
  try {
    const payload = formDataToObject(formData);

    const notifyEmail = env.FORM_NOTIFY_EMAIL ?? "ai@primeaicorp.com";
    const resendKey = env.RESEND_API_KEY?.trim();
    const from = env.RESEND_FROM ?? "Prime AI Company <onboarding@resend.dev>";

    if (!resendKey) {
      console.error("project-intake: RESEND_API_KEY is not set on the Worker");
      return new Response(
        JSON.stringify({ ok: false, error: "email_not_configured" }),
        {
          status: 503,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

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

    const resendBody = await emailRes.text();

    if (!emailRes.ok) {
      console.error("Resend API error:", resendBody);
      return new Response(
        JSON.stringify({ ok: false, error: "email_delivery_failed" }),
        { status: 502, headers: { "Content-Type": "application/json" } },
      );
    }

    console.log("project-intake: Resend accepted submission", resendBody);

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
