import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import {
  handleProjectIntake,
  type ProjectIntakeEnv,
} from "../../lib/project-intake-handler";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  return handleProjectIntake(formData, env as ProjectIntakeEnv);
};

export const GET: APIRoute = () =>
  new Response("Method Not Allowed", { status: 405 });
