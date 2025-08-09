# Quick Setup Guide

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   cd nextjs-app
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Gmail credentials:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=noreply@frostflow.ca
   EMAIL_TO=info@frostflow.ca
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Visit http://localhost:3000

## 📧 Gmail Setup for Contact Forms

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password:**
   - Google Account → Security → 2-Step Verification → App passwords
   - Select "Mail" and generate password
3. **Use the 16-character password** in your .env.local file

## ✅ What's Working

- ✅ Responsive design
- ✅ Navigation with active states
- ✅ Contact forms with validation
- ✅ Email sending functionality
- ✅ SEO optimization
- ✅ TypeScript support
- ✅ Professional styling

## 🔧 Next Steps

To complete the website, you can:
1. Create the remaining pages (Services, Portfolio, About)
2. Add your actual business content
3. Configure production email service
4. Deploy to Vercel/Netlify

The contact forms are fully functional and ready to receive customer inquiries!