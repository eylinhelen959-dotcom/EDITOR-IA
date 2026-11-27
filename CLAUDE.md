# EDITOR IA — instrucciones para Claude

Repositorio para editar los vídeos del usuario. Responde siempre en español.

## Carpetas
- `BRUTOS/` material original (no modificar nunca los originales).
- `REFERENCIAS/` ejemplos de estilo, logos, música, etc.
- `EXPORTADOS/` vídeos finales.
- `TEMPORALES/` trabajo intermedio. **Vaciarla al terminar cada trabajo** (dejar solo `.gitkeep`). Está en .gitignore.
- `remotion/` proyecto Remotion (React). `remotion/public/` para los medios que use.
- `.claude/skills/` guías oficiales de HyperFrames y Remotion: léelas antes de usar cada herramienta.

## Herramientas (versiones fijadas)
- **ffmpeg/ffprobe** del sistema: cortes, unión, recorte, audio, subtítulos quemados (`subtitles=` con libass).
- **HyperFrames** 0.9.49 (`npx hyperframes ...` desde la raíz del repo): composiciones HTML+GSAP → MP4,
  `transcribe` (whisper.cpp, usar `-m small -l es` o mayor), `tts` (Kokoro, voces `ef_dora`, `em_alex` en español),
  `beats`, `remove-background`, `check`, `render`.
- **Remotion** 4.0.543 (`cd remotion && npx remotion render src/index.ts <Id> <salida.mp4>`).
  Licencia: gratis para particulares y empresas de hasta 3 personas.

## Variables obligatorias en este entorno
```bash
export HYPERFRAMES_NO_TELEMETRY=1 DO_NOT_TRACK=1 NODE_USE_ENV_PROXY=1 NODE_NO_WARNINGS=1
```
`NODE_USE_ENV_PROXY=1` hace que Node use el proxy de red (sin ella fallan las descargas de modelos).

## Entorno en la nube
Entorno `editor-ia`: permite huggingface.co (+ CDNs) y remotion.media. Los vídeos grandes no deben subirse a git
(GitHub rechaza archivos > 100 MB); pregunta al usuario antes de añadir medios pesados.
