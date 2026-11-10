/**
 * POST /api/project-intake
 *
 * Cloudflare Pages Function — not a dashboard "Forms" product.
 * @see https://developers.cloudflare.com/pages/tutorials/forms/
 */

import { handleProjectIntake } from "../lib/project-intake-handler.js";

export async function onRequestPost(context) {
  const input = await context.request.formData();
  return handleProjectIntake(input, context.env ?? {});
}

export function onRequestGet() {
  return new Response("Method Not Allowed", { status: 405 });
}
