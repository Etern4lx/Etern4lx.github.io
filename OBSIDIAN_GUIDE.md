# 💎 Guía de Integración con Obsidian: De tus Apuntes a la Web en 1 Push

Esta guía te explica cómo sincronizar tus writeups redactados en Obsidian para que aparezcan automáticamente en tu portfolio de GitHub Pages sin tener que tocar código HTML ni la estructura de Astro.

---

## 🧭 Las 2 Formas de Usar Obsidian con tu Portfolio

### Opción A: Abrir la carpeta `writeups/` directamente como Bóveda (La más sencilla)

1. Abre **Obsidian**.
2. En la pantalla inicial o en el selector de bóvedas (icono de caja de caudales abajo a la izquierda), haz clic en **"Abrir carpeta como bóveda"** (*Open folder as vault*).
3. Selecciona la carpeta:
   `tu-repositorio/src/content/writeups/`
4. ¡Listo! Cualquier nota que crees dentro de Obsidian se guardará directamente como archivo `.md` en la carpeta correcta.

---

### Opción B: Automatizar commits con el plugin "Obsidian Git" (Recomendado 100%)

Con este método ni siquiera necesitas abrir la terminal para hacer `git commit` ni `git push`. Se hace con un atajo desde dentro de Obsidian.

#### Paso 1: Instalar el plugin
1. En Obsidian, ve a **Ajustes** (⚙️) > **Community plugins** (*Plugins de la comunidad*).
2. Desactiva el modo restringido (*Restricted mode: OFF*).
3. Haz clic en **Browse** (*Explorar*) y busca: **Obsidian Git** (creado por Vinzent).
4. Haz clic en **Install** y luego en **Enable**.

#### Paso 2: Configuración del plugin
En las opciones de **Obsidian Git**:
- **Vault backup interval**: Puedes poner `0` (manual) o por ejemplo `10` minutos si quieres que haga push automático cada 10 minutos.
- **Auto pull interval**: Si editas desde varios ordenadores.

#### Paso 3: Publicar un writeup
Cuando termines de redactar tu máquina en Obsidian:
1. Pulsa <kbd>Ctrl</kbd> + <kbd>P</kbd> (o <kbd>Cmd</kbd> + <kbd>P</kbd> en Mac).
2. Escribe: `Git: Create backup` o `Git: Push`.
3. ¡Fin! GitHub Actions detecta el nuevo archivo Markdown, compila el blog y lo publica en vivo en menos de 60 segundos.

---

## 📝 Formato del Encabezado (Frontmatter) en tus notas

Para que tu writeup muestre la dificultad, los tags y la plataforma, solo debes iniciar tu nota en Obsidian con este bloque al principio:

```markdown
---
title: "HackTheBox: NombreMaquina"
description: "Breve resumen de cómo comprometiste la máquina."
publishDate: 2026-10-24
platform: "HackTheBox" # HackTheBox | TryHackMe | VulnHub | Active Directory | CVE / Research | CTF
difficulty: "Medium"    # Info | Easy | Medium | Hard | Insane
os: "Linux"             # Linux | Windows | Android | Multi-OS
tags: ["SQLi", "Sudoers", "Web"]
targetIp: "10.10.11.200"
featured: true          # true si quieres que salga en la portada principal
---
```

A partir de ahí, escribe en Obsidian normalmente usando:
- Títulos (`#`, `##`, `###`)
- Bloques de código con el lenguaje especificado (` ```bash `, ` ```python `, ` ```powershell `)
- Callouts de Obsidian (`> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`, `> [!IMPORTANT]`)
- Tablas y listas.

Todo se renderizará automáticamente con la estética Cyberpunk Morada Suave.
