# Viral Content Studio — Netlify Deployment Guide

A production-ready AI-powered viral content generator with Netlify serverless backend, built with React-less vanilla JavaScript and Anthropic Claude API.

## 🚀 Features

✅ **Full UI/UX** — Same beautiful design, zero compromises
✅ **Serverless Backend** — Anthropic API calls via Netlify Functions
✅ **Secure API Keys** — Never exposed in frontend
✅ **6-Section Output** — Image Prompt, Video Prompt, Hook, Caption, Description, Hashtags
✅ **Topic Selection** — 12 pre-built trending topics + custom input
✅ **Format Support** — Reel Script, Carousel, Screenshot, LinkedIn, YouTube Thumbnail, Image Prompt
✅ **Platform Multi-Select** — Facebook, Instagram, YouTube, TikTok, LinkedIn, Twitter/X, Pinterest, Threads
✅ **Hook Styles** — 8 different viral hooks (Latest Update, Hidden Feature, Mistake Alert, etc.)
✅ **Copy Functions** — Individual section copy + Copy All
✅ **Error Handling** — Graceful fallbacks for API failures

## 📁 Project Structure

```
viral-content-studio/
├── index.html                    # Frontend (unchanged, calls /.netlify/functions/generate)
├── netlify.toml                  # Netlify configuration
├── package.json                  # Dependencies
├── netlify/
│   └── functions/
│       └── generate.js           # Serverless function (Anthropic API calls here)
└── README.md                     # This file
```

## 🔧 Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3 (no frameworks)
- **Backend**: Node.js 18 + Netlify Functions
- **API**: Anthropic Claude API (claude-sonnet-4-20250514)
- **Hosting**: Netlify
- **Environment**: process.env.ANTHROPIC_API_KEY

## 📋 Prerequisites

1. **Anthropic API Key** — Get from https://console.anthropic.com
2. **GitHub Account** — For Netlify integration
3. **Netlify Account** — Free tier at https://netlify.com
4. **Git** — For version control

## 🚀 Deployment Steps (Easy)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Viral Content Studio for Netlify"

# Add remote (replace USERNAME/REPO)
git remote add origin https://github.com/USERNAME/viral-content-studio.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to https://app.netlify.com/signup
2. Sign up with GitHub
3. Click **"New site from Git"**
4. Select your **viral-content-studio** repository
5. **Build settings** (auto-fill, but verify):
   - Build command: `echo 'No build step needed - static site with serverless functions'`
   - Publish directory: `.` (current directory)
   - Functions directory: `netlify/functions`
6. Click **"Deploy"**

### Step 3: Add Environment Variable

1. In Netlify dashboard, go to your site
2. Click **"Site settings"** → **"Build & deploy"** → **"Environment"**
3. Click **"Edit variables"**
4. Add new variable:
   - Key: `ANTHROPIC_API_KEY`
   - Value: Your Anthropic API key from https://console.anthropic.com
5. Click **"Save"**
6. Trigger a **redeploy**: Click **"Deploy"** button or push new commit to GitHub

### Step 4: Test Your Live Site

Your site is now live at `https://[your-site-name].netlify.app`

1. Open it in browser
2. Select a topic
3. Choose format & platforms
4. Adjust settings
5. Click **"Generate Full Content Pack"**
6. Wait for response (should work!)

## 🔐 Security Notes

- ✅ API key is **ONLY** in Netlify environment variables
- ✅ Frontend never sees the key
- ✅ All API calls go through your backend (/.netlify/functions/generate)
- ✅ CORS properly handled
- ✅ No hardcoded secrets in code

## 🛠️ Local Development

### Setup

```bash
# Install dependencies
npm install

# Install Netlify CLI globally (optional but recommended)
npm install -g netlify-cli
```

### Run Locally

```bash
# Option 1: Using Netlify CLI (includes serverless functions)
netlify dev

# Option 2: Using simple HTTP server (frontend only, no backend functions)
npx http-server
```

When using `netlify dev`, your site runs at `http://localhost:8888` with functions at `http://localhost:8888/.netlify/functions/generate`.

### Local Environment Variables

Create a `.env` file for local testing:

```
ANTHROPIC_API_KEY=your_api_key_here
```

⚠️ **Never commit .env file to GitHub!** (Add to .gitignore)

## 📝 File Descriptions

### index.html
- Frontend UI (same design as original)
- JavaScript for topic/format/platform selection
- Calls `/.netlify/functions/generate` instead of direct Anthropic API
- All UI logic remains unchanged

### netlify/functions/generate.js
- Node.js serverless function
- Handles all Anthropic API calls
- Validates input from frontend
- Returns generated content as JSON
- Proper error handling & CORS headers

### netlify.toml
- Netlify build & deployment configuration
- Specifies functions directory
- Sets up redirects (SPA-like routing)
- Security headers

### package.json
- Project metadata
- Dependencies (node_modules not needed for deployment)
- Scripts for local development

## 🐛 Troubleshooting

### "API key is missing" error
- Check Netlify dashboard: Site settings → Environment variables
- Confirm `ANTHROPIC_API_KEY` is set
- Redeploy after adding variable

### "500 Internal Server Error"
- Check Netlify function logs: Site settings → Functions
- Click **"Log stream"** to see errors
- Verify prompt is being sent correctly
- Check Anthropic API quota

### "Content not generating" / Generating... forever
- Check network tab in browser DevTools (F12)
- Verify API request goes to `/.netlify/functions/generate`
- Check function timeout (Netlify serverless functions have 26s limit for free tier)
- Review Netlify function logs

### CORS errors
- Netlify Functions handle CORS automatically
- If issues persist, check `netlify/functions/generate.js` headers

## 🚀 Optimization Tips

1. **Caching** — Add to netlify.toml:
```toml
[[headers]]
for = "/index.html"
[headers.values]
  Cache-Control = "max-age=0, no-cache, no-store, must-revalidate"
```

2. **Rate Limiting** — Add to serverless function (optional):
```javascript
const rateLimit = new Map();
const clientIP = event.headers['client-ip'];
if (rateLimit.get(clientIP) > 10) return 429; // Too Many Requests
```

3. **Monitoring** — Connect Netlify to Sentry/LogRocket for error tracking

## 📚 Helpful Links

- **Anthropic API Docs**: https://docs.anthropic.com
- **Netlify Functions**: https://docs.netlify.com/functions/overview/
- **Netlify CLI**: https://docs.netlify.com/cli/get-started/
- **Claude Models**: https://docs.anthropic.com/en/docs/about-claude/models/latest

## 🎯 Next Steps

1. **Customize** — Edit topic list, colors, labels in index.html
2. **Branding** — Change header, tagline, logo
3. **Analytics** — Add Google Analytics or Netlify Analytics
4. **Custom Domain** — Connect your own domain in Netlify settings
5. **Auto-Deployment** — Every GitHub push auto-deploys

## 📞 Support

- **Anthropic Issues**: Check console logs + https://support.anthropic.com
- **Netlify Issues**: https://support.netlify.com or community forums
- **Function Debugging**: Use `netlify dev` locally + browser DevTools

## 📄 License

MIT License — Free to use and modify

---

**Ready to deploy?** Push to GitHub and follow the steps above! 🚀

