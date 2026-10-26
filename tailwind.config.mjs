/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#0a0714',         // Fondo ultradark violeta
          card: '#130d24',       // Superficie de tarjetas
          elevated: '#1a1133',   // Superficie elevada / hover
          border: '#2e1c59',     // Bordes sutiles
          borderHover: '#7c3aed',// Bordes al hacer hover
          purple: {
            DEFAULT: '#a855f7',  // Morado ciberpunk
            soft: '#c084fc',     // Morado suave
            light: '#d8b4fe',    // Lavanda brillante
            dim: '#581c87',      // Morado oscuro de fondo
          },
          cyan: '#38bdf8',       // Acento cian sutil
          pink: '#f43f5e',       // Acento fucsia / alerta
          emerald: '#10b981',    // Éxito / pwned / cert obtenida
          amber: '#f59e0b',      // En curso / advertencia
          text: {
            primary: '#f3e8ff',  // Texto blanco con matiz lavanda
            muted: '#9ca3af',    // Texto secundario gris/morado
            glow: '#e9d5ff',
          }
        }
      },
      boxShadow: {
        'cyber-sm': '0 0 15px -3px rgba(168, 85, 247, 0.25)',
        'cyber-md': '0 0 25px -2px rgba(168, 85, 247, 0.35)',
        'cyber-lg': '0 0 40px 0px rgba(168, 85, 247, 0.45)',
        'cyber-glow': '0 0 20px rgba(192, 132, 252, 0.4), inset 0 0 15px rgba(168, 85, 247, 0.2)',
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-grid': "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.08) 1px, transparent 1px)",
        'gradient-radial-purple': 'radial-gradient(circle at top center, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
