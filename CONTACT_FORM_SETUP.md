# Contact Form Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Click "Sign Up" (Free - 100 emails/day, 3,000/month)
3. Verify your email address

### Step 2: Get API Key

1. After login, go to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Name it: `Portfolio Contact Form`
4. Copy the API key (starts with `re_...`)

### Step 3: Add API Key to .env.local

```bash
# Open .env.local and replace:
RESEND_API_KEY=your_resend_api_key_here

# With your actual key:
RESEND_API_KEY=re_abc123xyz...
```

### Step 4: Restart Dev Server

```bash
# Stop current server (Ctrl + C)
npm run dev
```

### Step 5: Test Contact Form

1. Open http://localhost:3000
2. Scroll to Contact section
3. Fill form and submit
4. **Check your email:** `tiodwisatrio27@gmail.com`
5. **⚠️ If not in inbox, check SPAM folder**

### Step 6: Mark as Not Spam (Important!)

**Gmail:**

1. Open email from spam folder
2. Click "Not spam" button at top
3. Future emails will go to inbox

**Why emails go to spam:**

- Using shared domain `onboarding@resend.dev`
- Gmail doesn't recognize sender yet

**Solution (Optional - For Production):**
Verify your own domain (see "Verify Domain" section below)

---

## ✅ What's Included

- ✅ Beautiful responsive form
- ✅ Real-time validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Professional HTML email template
- ✅ Reply-to auto-set to sender's email
- ✅ WhatsApp link in email (if phone provided)

---

## 📧 Email Features

**Email includes:**

- Name
- Email (clickable mailto link)
- Phone/WhatsApp (clickable WhatsApp link)
- Service interested
- Message

**Template:** Beautiful HTML with gradient header and styled fields

---

## 🔧 Customization

### Change Email Recipient

Edit `app/api/contact/route.ts`:

```typescript
to: ["youremail@example.com"], // Change this
```

### Change Email Sender Name

Edit `app/api/contact/route.ts`:

```typescript
from: "Your Name <onboarding@resend.dev>", // Change this
```

### Add More Form Fields

1. Add field in `components/ContactForm.tsx`
2. Add to formData state
3. Add to email template in `app/api/contact/route.ts`

---

## 🚨 Troubleshooting

### Email goes to SPAM (Common!)

**Quick Fix:**

1. Open email from spam folder
2. Click "Not spam" / "Report not spam"
3. Future emails will go to inbox

**Why?**

- Using shared domain `onboarding@resend.dev`
- Email providers don't recognize sender

**Permanent Solution - Verify Your Domain:**

1. **Buy domain** (if not yet): Niagahoster, Cloudflare, Namecheap (~Rp50k/year)
2. **Go to Resend Dashboard** → [Domains](https://resend.com/domains)
3. **Add Domain:** Click "Add Domain" → Enter `yourdomain.com`
4. **Add DNS Records:** Resend will show 3 records to add:
   - SPF (TXT record)
   - DKIM (TXT record)
   - DMARC (TXT record)
5. **Add to your DNS provider** (Cloudflare/Niagahoster/etc)
6. **Verify** in Resend dashboard (might take 5-30 minutes)
7. **Update code** - change from:
   ```typescript
   from: "Portfolio Contact <onboarding@resend.dev>";
   ```
   To:
   ```typescript
   from: "Portfolio Contact <contact@yourdomain.com>";
   ```

**Result:** ✅ Emails will land in inbox, not spam!

---

### "Failed to send email"

- Check API key is correct in `.env.local`
- Restart dev server after adding key
- Check Resend dashboard for errors

### Email not received

1. **Check spam folder first!** (90% kasus ada di sini)
2. Mark as "Not spam" for future emails
3. Verify email address is correct in API route
4. Check Resend logs in [dashboard](https://resend.com/emails) for delivery status

### Form not submitting

- Open browser console (F12) for errors
- Check if API route is accessible at `/api/contact`

---

## 🎯 Production Deployment

### For Vercel:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add: `RESEND_API_KEY` = `your_key_here`
3. Redeploy

### For Netlify:

1. Go to Site Settings → Environment → Edit Variables
2. Add: `RESEND_API_KEY` = `your_key_here`
3. Redeploy

---

## 💡 Pro Tips

1. **Verify Domain (Optional):** Add your domain in Resend to send from `contact@yourdomain.com` instead of `onboarding@resend.dev`
2. **Auto-reply:** Add auto-reply email in API route
3. **Save to Database:** Add Prisma/MongoDB to save submissions
4. **Spam Protection:** Add reCAPTCHA or Turnstile
5. **Email Notifications:** Get Telegram/Slack notification on new submission

---

## 📊 Resend Free Tier Limits

- ✅ 100 emails per day
- ✅ 3,000 emails per month
- ✅ Unlimited API requests
- ✅ Email analytics

**For higher volume:** Upgrade to paid plan ($20/month for 50k emails)

---

## ❓ Need Help?

Contact me at tiodwisatrio27@gmail.com or WA 088-8972-061745
