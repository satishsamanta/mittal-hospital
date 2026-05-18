# Deployment Guide — Mittal Hospital Website

This site is a Vite + React SPA. Deploy it for free in under 3 minutes on Vercel, Netlify or Cloudflare Pages.

> The site uses **React Router** for client-side navigation, so the host must rewrite every URL to `index.html`. Both `vercel.json` and `netlify.toml` in this repo do this automatically.

---

## Option 1 — Vercel (recommended, easiest)

1. **Sign up** at <https://vercel.com/signup> using **Continue with GitHub**.
2. After login, click **Add New… → Project**.
3. **Import** the `satishsamanta/mittal-hospital` repo.
4. On the configure page set:
   - **Root Directory:** click *Edit* → select `mittal-react`
   - **Framework Preset:** Vite *(auto-detected)*
   - **Build Command:** `npm run build` *(auto)*
   - **Output Directory:** `dist` *(auto)*
5. Click **Deploy**. ~60 seconds.
6. You will get a live URL like `https://mittal-hospital.vercel.app`.
7. Every future `git push` to `main` auto-deploys.

---

## Option 2 — Netlify

1. Sign up at <https://app.netlify.com/signup> using GitHub.
2. **Add new site → Import an existing project → GitHub**.
3. Pick the `satishsamanta/mittal-hospital` repo.
4. Build settings:
   - **Base directory:** `mittal-react`
   - **Build command:** `npm run build`
   - **Publish directory:** `mittal-react/dist`
5. Click **Deploy site**.
6. You get a URL like `https://mittal-hospital.netlify.app`.

---

## Option 3 — Cloudflare Pages

1. Sign in at <https://dash.cloudflare.com/>.
2. **Workers & Pages → Create application → Pages → Connect to Git**.
3. Pick `satishsamanta/mittal-hospital`.
4. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory (advanced):** `mittal-react`
5. **Save and Deploy**.

---

## Add the live URL to your GitHub repo

After deployment:

1. Open <https://github.com/satishsamanta/mittal-hospital>.
2. On the right side, next to **About**, click the small ⚙️ (settings gear).
3. In **Website** field, paste your deployed URL (e.g. `https://mittal-hospital.vercel.app`).
4. Also add a **Description** like “Modern glassmorphic React rebuild of Mittal Hospital website”.
5. Add **Topics** (tags): `react`, `vite`, `tailwindcss`, `framer-motion`, `hospital-website`, `nabh`.
6. **Save changes**.

Now your repo home shows a clickable globe icon → live site.

---

## Future: connect your own domain

On Vercel / Netlify / Cloudflare Pages:

1. Buy a domain (e.g. from Namecheap or GoDaddy).
2. In the dashboard → **Domains → Add domain** → enter your domain.
3. Add the DNS records they show (one CNAME or A record) on your domain registrar.
4. Wait 5–10 minutes for DNS to propagate, HTTPS auto-provisioned.

Total cost: only the domain (~₹600/year). Hosting itself is free.
