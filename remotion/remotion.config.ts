import { Config } from "@remotion/cli/config";
import fs from "node:fs";
import path from "node:path";

// Usa el navegador headless ya instalado en el entorno si existe;
// si no, Remotion descarga el suyo (remotion.media está permitido).
const findShell = (): string | null => {
  if (process.env.REMOTION_BROWSER) return process.env.REMOTION_BROWSER;
  const base = "/opt/pw-browsers";
  if (!fs.existsSync(base)) return null;
  for (const d of fs.readdirSync(base).filter((n) => n.startsWith("chromium_headless_shell-")).sort().reverse()) {
    const p = path.join(base, d, "chrome-headless-shell-linux64", "chrome-headless-shell");
    if (fs.existsSync(p)) return p;
  }
  return null;
};
const shell = findShell();
if (shell) Config.setBrowserExecutable(shell);
Config.setVideoImageFormat("jpeg");
