# Joe Kaltho: engineer and founder

Two sides, one site.

- **Engineer** (`#/engineer`): the KaltrixOS case study, what I fixed in my own product, services, contact form, printable CV (`#/cv`).
- **Founder** (`#/founder`): $1B in three years. Live day counter, a 1,096-square grid (one square per day), an honest scoreboard, the three-product roadmap and the run so far.

## Edit the content

Everything is in `src/data.ts`. The founder clock is in `src/lib/goal.ts` (`START` and `END`).

Update `scoreboard` in `src/data.ts` whenever the numbers change, and bump `asOf`.

## Run it (PowerShell)

```powershell
npm install
npm run dev
```

## Contact form

Copy `.env.example` to `.env` and set `VITE_CONTACT_EMAIL`. If Supabase is configured the form saves `{ name, email, message }` to `VITE_SUPABASE_CONTACT_TABLE`. If not, it opens the visitor's mail app.

## Deploy

Vercel, framework preset Vite. Add the same env vars there.
