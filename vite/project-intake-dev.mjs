import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { handleProjectIntake } from "../lib/project-intake-handler.js";

function loadDevVars(root) {
  const path = resolve(root, ".dev.vars");
  /** @type {Record<string, string>} */
  const env = {};
  try {
    const text = readFileSync(path, "utf8");
    for (const line of text.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let value = trimmed.slice(eq + 1).trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      env[key] = value;
    }
  } catch {
    // no .dev.vars — handler logs-only path
  }
  return env;
}

/** Astro dev: same POST /api/project-intake as Cloudflare Pages Functions */
export function projectIntakeDevPlugin() {
  const root = process.cwd();
  let env = loadDevVars(root);

  return {
    name: "project-intake-dev",
    configureServer(server) {
      server.watcher.on("change", (file) => {
        if (file.endsWith(".dev.vars")) env = loadDevVars(root);
      });

      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url !== "/api/project-intake") {
          next();
          return;
        }

        if (req.method === "GET") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.end("Method Not Allowed");
          return;
        }

        if (req.method !== "POST") {
          next();
          return;
        }

        const chunks = [];
        req.on("data", (c) => chunks.push(c));
        req.on("end", async () => {
          try {
            const raw = Buffer.concat(chunks).toString();
            const params = new URLSearchParams(raw);
            const formData = new FormData();
            for (const [k, v] of params.entries()) {
              formData.append(k, v);
            }
            const response = await handleProjectIntake(formData, env);
            res.statusCode = response.status;
            response.headers.forEach((value, key) => {
              res.setHeader(key, value);
            });
            res.end(await response.text());
          } catch (err) {
            console.error("project-intake dev middleware:", err);
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: false, error: "server_error" }));
          }
        });
      });
    },
  };
}
