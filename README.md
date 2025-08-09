# FrostFlow - Next.js Website

Professional HVAC services website built with Next.js, featuring functional contact forms and modern design.

## Features

- 🚀 **Next.js 14** with App Router
- 📱 **Responsive Design** - Mobile-first approach
- 📧 **Functional Contact Forms** - Both quick and detailed forms
- ✅ **Form Validation** - Client and server-side validation with Zod
- 📨 **Email Integration** - Nodemailer for sending emails
- 🎨 **Modern UI** - Professional design with CSS Grid and Flexbox
- ⚡ **Performance Optimized** - Fast loading and SEO friendly
- 🔒 **TypeScript** - Type-safe development

## Pages

- **Home** (`/`) - Hero section, services overview, testimonials
- **Services** (`/services`) - Detailed service descriptions and pricing
- **Portfolio** (`/portfolio`) - Project showcases and customer reviews
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact forms and business information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Email service account (Gmail recommended for development)

### Installation

1. **Clone and navigate to the project:**
   ```bash
   cd nextjs-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your email configuration:
   ```env
   # For Gmail (recommended for development)
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_FROM=noreply@frostflow.ca
   EMAIL_TO=info@frostflow.ca
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Email Setup

### Gmail Configuration (Recommended for Development)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password:**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Use in environment variables:**
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```

### Other SMTP Services

For production, you can use services like:
- **SendGrid**
- **Mailgun** 
- **Amazon SES**
- **Your hosting provider's SMTP**

Update the transporter configuration in `app/lib/email.ts`.

## Contact Forms

### Quick Contact Form
- **Location:** Homepage and Contact page
- **API Endpoint:** `/api/contact/quick`
- **Fields:** Name, Phone, Email, Urgency
- **Purpose:** Quick inquiries and emergency requests

### Detailed Contact Form
- **Location:** Contact page
- **API Endpoint:** `/api/contact/detailed`
- **Fields:** Full contact info, property details, services needed, preferences
- **Purpose:** Comprehensive quote requests

## Form Validation

Both forms use **Zod** for validation:
- **Client-side:** Real-time validation with React Hook Form
- **Server-side:** API route validation before processing
- **Error Handling:** User-friendly error messages

## Project Structure

```
nextjs-app/
├── app/
│   ├── api/contact/          # API routes for forms
│   ├── components/           # Reusable components
│   ├── lib/                  # Utilities and helpers
│   ├── styles/               # CSS files
│   ├── types/                # TypeScript type definitions
│   ├── contact/              # Contact page
│   ├── services/             # Services page (to be created)
│   ├── portfolio/            # Portfolio page (to be created)
│   ├── about/                # About page (to be created)
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── public/                   # Static assets
├── .env.example              # Environment variables template
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify:** Configure build command and environment variables
- **Railway:** Add environment variables and deploy
- **DigitalOcean App Platform:** Configure via app spec

### Environment Variables for Production
Make sure to set these in your deployment platform:
```env
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=contact@yourdomain.com
NEXTAUTH_SECRET=your-production-secret
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Customization

### Branding
- Update company name in `app/layout.tsx`
- Modify colors in CSS variables in `app/globals.css`
- Replace contact information throughout components

### Email Templates
- Customize email templates in `app/lib/email.ts`
- Add your company branding and styling
- Modify email subjects and content

### Services & Content
- Update service descriptions in page components
- Add your actual portfolio projects
- Modify testimonials and reviews
- Update team information in About page

## Support

For issues or questions:
- Check the console for error messages
- Verify environment variables are set correctly
- Ensure email service is configured properly
- Test contact forms in development mode

## License

This project is created for FrostFlow HVAC. Modify and use according to your needs.