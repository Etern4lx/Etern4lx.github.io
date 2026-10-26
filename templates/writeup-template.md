---
title: "Plataforma: Nombre de la Máquina o Vulnerabilidad"
description: "Breve resumen en 2 líneas de los vectores clave (ej. SSRF, inyección SQL y escalada de privilegios con sudoers)."
publishDate: 2026-10-24
platform: "HackTheBox" # Opciones: HackTheBox | TryHackMe | VulnHub | Active Directory | CVE / Research | CTF
difficulty: "Medium"    # Opciones: Info | Easy | Medium | Hard | Insane
os: "Linux"             # Opciones: Linux | Windows | Android | Multi-OS
tags: ["SSRF", "Sudoers", "Web"]
targetIp: "10.10.11.XXX"
featured: false         # Cambiar a true si quieres que aparezca en la portada
---

# Titular del Writeup

> [!NOTE]
> **Resumen Ejecutivo:**
> - **Acceso Inicial**: Breve explicación.
> - **Escalada de Privilegios**: Breve explicación.

---

## 1. Fase de Reconocimiento (Nmap)

```bash
nmap -p- --open -sS --min-rate 5000 -Pn 10.10.11.XXX
```

---

## 2. Enumeración Web / Servicios

Notas y capturas aquí...

---

## 3. Explotación & Shell

```python
# Script de explotación
import requests
```

---

## 4. Escalada de Privilegios

```bash
sudo -l
```
