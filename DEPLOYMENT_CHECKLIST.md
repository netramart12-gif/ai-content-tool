# Viral Content Studio — Deployment Checklist ✅

## Pre-Deployment

- [ ] Get Anthropic API key from https://console.anthropic.com
- [ ] Create GitHub account if you don't have one
- [ ] Create Netlify account at https://netlify.com

## Local Setup

- [ ] Clone or download project files
- [ ] Run `npm install` (optional for frontend-only, required for local functions testing)
- [ ] Test locally with `netlify dev` (or simple http-server)

## Push to GitHub

- [ ] Create new GitHub repository
- [ ] Run:
  ```bash
  git init
  git add .
  git commit -m "Initial commit: Viral Content Studio"
  git remote add origin https://github.com/YOUR_USERNAME/viral-content-studio.git
  git branch -M main
  git push -u origin main
  ```

## Deploy to Netlify

- [ ] Login to https://app.netlify.com
- [ ] Click "New site from Git"
- [ ] Select your GitHub repository
- [ ] Verify build settings (should be pre-filled):
  - Build command: `echo 'No build step needed - static site with serverless functions'`
  - Publish directory: `.`
  - Functions directory: `netlify/functions`
- [ ] Click "Deploy site"
- [ ] Wait for deployment to complete (green checkmark)

## Configure Environment Variables

- [ ] In Netlify dashboard, go to Site settings
- [ ] Navigate to: Build & deploy → Environment
- [ ] Click "Edit variables"
- [ ] Add new variable:
  - Key: `ANTHROPIC_API_KEY`
  - Value: [Your Anthropic API key]
- [ ] Save changes
- [ ] **Trigger redeploy**: Go back to Deployments, click "Trigger deploy"

## Test Live Site

- [ ] Open your Netlify URL (https://[site-name].netlify.app)
- [ ] Select a trending topic
- [ ] Choose a content format (Reel Script recommended)
- [ ] Select platforms
- [ ] Click "Generate Full Content Pack"
- [ ] Verify output sections load correctly:
  - [ ] Image Prompt
  - [ ] Video Prompt
  - [ ] Hook
  - [ ] Caption
  - [ ] Description
  - [ ] Hashtags
- [ ] Test copy buttons (individual + Copy All)
- [ ] Test error handling (if API fails)

## Post-Deployment

- [ ] Custom domain setup (optional): In Site settings → Domain
- [ ] Enable SSL/TLS (auto-enabled on Netlify)
- [ ] Monitor function logs: Site settings → Functions → Log stream
- [ ] Set up analytics (optional): Site settings → Analytics
- [ ] Add custom error page (optional): Create _redirects file or use Netlify UI

## Optimization (Optional)

- [ ] Enable asset optimization in Netlify settings
- [ ] Add caching headers in netlify.toml
- [ ] Connect to Sentry for error tracking
- [ ] Set up GitHub Actions for CI/CD

## Troubleshooting Checklist

If something goes wrong:

- [ ] Check Netlify function logs: Site settings → Functions → Log stream
- [ ] Verify API key is set: Site settings → Environment
- [ ] Check browser console: F12 → Console tab
- [ ] Check network requests: F12 → Network tab → Look for "generate" request
- [ ] Verify endpoint: Should call `/.netlify/functions/generate`
- [ ] Check Anthropic API status: https://status.anthropic.com
- [ ] Verify Anthropic API key is valid and has quota

## When Everything Works ✨

- [ ] Share your deployed URL!
- [ ] Generate content and enjoy
- [ ] Customize as needed
- [ ] Add your own topics and features

---

**Questions?** Check README.md for detailed documentation.

