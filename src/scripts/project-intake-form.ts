const OTHER = "Other";

function wireOtherSelect(selectId: string, wrapId: string, inputId: string) {
  const select = document.getElementById(selectId) as HTMLSelectElement | null;
  const wrap = document.getElementById(wrapId);
  const input = document.getElementById(inputId) as HTMLInputElement | null;
  if (!select || !wrap || !input) return;

  const sync = () => {
    const on = select.value === OTHER;
    wrap.classList.toggle("hidden", !on);
    wrap.toggleAttribute("hidden", !on);
    input.required = on;
    input.disabled = !on;
    if (!on) input.value = "";
  };

  select.addEventListener("change", sync);
  sync();
}

function formBodyToUrlEncoded(form: HTMLFormElement) {
  const params = new URLSearchParams();
  for (const [key, value] of new FormData(form).entries()) {
    if (value instanceof File) continue;
    params.append(key, String(value));
  }
  return params;
}

export function initProjectIntakeForm() {
  const root = document.getElementById("project-intake-root");
  const form = document.getElementById("project-intake-form") as HTMLFormElement | null;
  const statusRoot = document.getElementById("intake-form-status");
  if (!root || !form || !statusRoot) return;

  const loadingEl = statusRoot.querySelector<HTMLElement>('[data-intake-state="loading"]');
  const successEl = statusRoot.querySelector<HTMLElement>('[data-intake-state="success"]');
  const errorEl = statusRoot.querySelector<HTMLElement>('[data-intake-state="error"]');
  const formBody = document.getElementById("intake-form-body");

  const pairs: [string, string, string][] = [
    ["project_type", "project_type_other_wrap", "project_type_other"],
    ["use_case", "use_case_other_wrap", "use_case_other"],
    ["dataset", "dataset_other_wrap", "dataset_other"],
    ["timeline", "timeline_other_wrap", "timeline_other"],
    ["deployment", "deployment_other_wrap", "deployment_other"],
    ["budget", "budget_other_wrap", "budget_other"],
  ];
  pairs.forEach(([s, w, i]) => wireOtherSelect(s, w, i));

  const setStatus = (state: "idle" | "loading" | "success" | "error") => {
    const busy = state === "loading";
    statusRoot.classList.toggle("hidden", state === "idle");
    statusRoot.toggleAttribute("hidden", state === "idle");
    statusRoot.setAttribute("aria-hidden", state === "idle" ? "true" : "false");
    root.classList.toggle("is-submitting", busy);
    root.classList.toggle("is-complete", state === "success" || state === "error");
    formBody?.classList.toggle("invisible", busy);
    formBody?.setAttribute("aria-hidden", busy ? "true" : "false");

    loadingEl?.toggleAttribute("hidden", state !== "loading");
    successEl?.toggleAttribute("hidden", state !== "success");
    errorEl?.toggleAttribute("hidden", state !== "error");

    if (state === "success" && formBody) {
      formBody.classList.add("hidden");
      formBody.setAttribute("hidden", "");
    }
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const submitBtn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    setStatus("loading");
    submitBtn?.setAttribute("disabled", "true");

    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBodyToUrlEncoded(form).toString(),
      });

      const body = (await res.json().catch(() => null)) as
        | { ok?: boolean }
        | null;
      if (!res.ok || body?.ok === false) throw new Error(`HTTP ${res.status}`);

      setStatus("success");
      form.reset();
      pairs.forEach(([s]) => {
        const select = document.getElementById(s) as HTMLSelectElement | null;
        select?.dispatchEvent(new Event("change"));
      });
      const url = new URL(window.location.href);
      url.searchParams.set("submitted", "true");
      window.history.replaceState({}, "", url);
    } catch {
      setStatus("error");
      submitBtn?.removeAttribute("disabled");
    }
  });

  const retryBtn = statusRoot.querySelector<HTMLButtonElement>("[data-intake-retry]");
  retryBtn?.addEventListener("click", () => {
    setStatus("idle");
    root.classList.remove("is-complete", "is-submitting");
    formBody?.classList.remove("hidden", "invisible");
    formBody?.removeAttribute("hidden");
    formBody?.setAttribute("aria-hidden", "false");
    form.querySelector<HTMLButtonElement>('button[type="submit"]')?.removeAttribute("disabled");
  });
}
