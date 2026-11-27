# Conacul Brumărel — site demonstrativ

Site demo realizat de **Manotek** pentru un restaurant cu cazare **fictiv** din Tecuci. Numele, adresa, telefonul, meniul, prețurile, camerele și nota Google sunt exemple, marcate pe site cu „[exemplu]”.

Live: https://manolacheioan.github.io/conacul-brumarel-demo/

- **Tot conținutul**: `content/site.ts` (meniu, camere, evenimente, program, contact). Pozele stock: `content/images.ts`.
- **Poze proprii**: în `public/poze/` + numele fișierului în `imagini` din `content/site.ts`.
- **Formulare**: Formspree prin `formspreeEndpoint`; gol = cererea pleacă pe WhatsApp.
- **Poze**: ilustrative, de pe Unsplash (vezi `CREDITS.md`).

```bash
npm install
npm run dev
npm run build   # export static în out/
```

Stack: Next.js (App Router, export static), TypeScript, Tailwind CSS, lucide-react. Publicat pe GitHub Pages prin GitHub Actions.
