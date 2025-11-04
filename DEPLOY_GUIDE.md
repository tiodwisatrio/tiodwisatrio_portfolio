# 🚀 Deploy to Vercel Guide

## Pre-Deployment Checklist

### ✅ SEO Setup (Completed)

- [x] Sitemap.xml (auto-generated at /sitemap.xml)
- [x] Robots.txt (auto-generated at /robots.txt)
- [x] Manifest.json for PWA
- [x] Structured Data (JSON-LD) for Google Rich Results
- [x] Open Graph meta tags for social sharing
- [x] Twitter Card meta tags
- [x] Comprehensive metadata in layout.tsx
- [x] Vercel.json for custom headers and caching

### 📝 Before Deploy - Update These:

1. **Replace placeholder social links in `app/layout.tsx`:**

   - Update LinkedIn URL
   - Update Twitter handle
   - Add GitHub URL
   - Add other social profiles

2. **Create OG Image (1200x630px):**

   - Create `/public/og-image.png`
   - Tools: Canva, Figma, or https://og-playground.vercel.app/
   - Should include: Your name, title, branding

3. **Update Contact Info:**
   - Check email in structured data
   - Add phone number if needed (optional)

## 🌐 Deploy to Vercel

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Add SEO optimization and deploy setup"
git push origin main
```

### Step 2: Import Project to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository: `tiodwisatrio/tiodwisatrio_portfolio`
3. Configure project:

   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** .next

4. **Environment Variables:** (if any)

   ```
   NEXT_PUBLIC_SENTRY_ENABLED=false (or true if you use Sentry)
   ```

5. Click **Deploy**

### Step 3: Add Custom Domain (tiodwisatrio.com)

1. **In Vercel Dashboard:**

   - Go to your project
   - Settings → Domains
   - Add domain: `tiodwisatrio.com`

2. **In Your Domain Registrar (Namecheap, GoDaddy, etc):**

   **Option A - Use Vercel Nameservers (Recommended):**

   ```
   Nameserver 1: ns1.vercel-dns.com
   Nameserver 2: ns2.vercel-dns.com
   ```

   **Option B - Use DNS Records:**

   Add these DNS records:

   ```
   Type    Name    Value                      TTL
   A       @       76.76.21.21               3600
   CNAME   www     cname.vercel-dns.com      3600
   ```

3. **Wait for DNS propagation** (5 minutes - 48 hours, usually ~1 hour)

4. **Vercel will automatically:**
   - Generate SSL certificate (HTTPS)
   - Configure www redirect
   - Enable HTTP/2 and Brotli compression

### Step 4: Verify Deployment

1. Check your site: https://tiodwisatrio.com
2. Test these URLs:
   - https://tiodwisatrio.com/sitemap.xml
   - https://tiodwisatrio.com/robots.txt
   - https://tiodwisatrio.com/manifest.webmanifest

## 🔍 Post-Deployment SEO Setup

### 1. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `tiodwisatrio.com`
3. Verify ownership using **HTML tag method:**
   - Copy verification meta tag
   - Add to `app/layout.tsx` metadata.verification.google
4. Submit sitemap: `https://tiodwisatrio.com/sitemap.xml`

### 2. Google Analytics (Optional)

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID (G-XXXXXXXXXX)
3. Add to Next.js:

Create `app/_analytics.tsx`:

```typescript
import Script from "next/script";

export default function Analytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  );
}
```

### 3. Bing Webmaster Tools (Optional)

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add your site
3. Submit sitemap

### 4. Schema Markup Testing

Test structured data:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org/)

### 5. Performance Monitoring

1. **Vercel Analytics** (Built-in):

   - Enable in project settings
   - Track Core Web Vitals

2. **PageSpeed Insights:**
   - Test: https://pagespeed.web.dev/
   - URL: https://tiodwisatrio.com

## 📊 Expected SEO Results

After deployment and indexing (1-2 weeks):

✅ **Sitemap:** Auto-generated and submitted to Google
✅ **Indexing:** All pages crawlable and indexable
✅ **Rich Results:** Person schema for Google Knowledge Graph
✅ **Social Sharing:** Beautiful preview cards on Twitter/LinkedIn
✅ **Performance:** 89+ Lighthouse score
✅ **Security:** HTTPS, security headers enabled
✅ **Mobile:** Fully responsive and mobile-friendly

## 🎯 Keywords You're Targeting

Based on metadata:

- "Tio Dwi Satrio"
- "Full Stack Developer Indonesia"
- "Next.js Developer"
- "Web Developer Yogyakarta"
- "React TypeScript Developer"
- "UI/UX Designer Indonesia"
- "Laravel Developer"
- "Freelance Web Developer"

## 📈 SEO Monitoring

Track these metrics monthly:

1. Google Search Console:

   - Impressions
   - Clicks
   - Average position
   - Click-through rate (CTR)

2. Page Performance:

   - Core Web Vitals (LCP, FID, CLS)
   - Lighthouse scores
   - Load time

3. Backlinks:
   - Quality backlinks from dev communities
   - Social media mentions
   - Portfolio showcases

## 🚨 Common Issues & Solutions

### Issue: Domain not connecting

**Solution:** Wait 24 hours for DNS propagation. Check with: https://dnschecker.org/

### Issue: SSL certificate pending

**Solution:** Wait 5-10 minutes. Vercel auto-generates. Ensure DNS is correct.

### Issue: Sitemap not found

**Solution:** Check `/sitemap.xml` route. Rebuild and redeploy if needed.

### Issue: Google not indexing

**Solution:**

1. Submit sitemap in Search Console
2. Request indexing for main pages
3. Wait 1-2 weeks for first crawl

## 🎉 Success Indicators

You'll know SEO is working when:

1. ✅ Site appears in Google search: `site:tiodwisatrio.com`
2. ✅ Name shows in search: "Tio Dwi Satrio"
3. ✅ Rich snippet with profile image appears
4. ✅ Social shares show correct preview image
5. ✅ Google Search Console shows impressions

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js SEO: https://nextjs.org/learn/seo/introduction-to-seo
- Schema.org: https://schema.org/Person

**Good luck with your deployment! 🚀**
