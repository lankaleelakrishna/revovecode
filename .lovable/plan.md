

# Reove Technologies LLC – IT Support Website

## Overview
A professional multi-page website for Reove Technologies LLC, inspired by the layout and structure of geek-way.com/it-helpdesk, but branded with Reove's identity and populated with content from your PDFs. Includes a contact form, live chat widget, and support ticket system powered by Supabase.

---

## Pages & Structure

### 1. Home Page (Landing)
- **Hero Section**: "Your Digital Ally" tagline with a bold CTA ("Get Help Now" / phone number), background gradient matching Reove's dark blue/orange PDF branding
- **Services Overview**: Icon cards for the 4 core services — Printer Support, Wi-Fi Support, Computer Support, Email Support — each linking to its detail page
- **Company Stats**: Years of experience, satisfied customers (100,000+), team size
- **About Section**: Company overview text from the pitch deck
- **Why Choose Us**: Key differentiators (10+ years experience, 24/7 support, certified experts, global coverage)
- **Testimonials Carousel**: Placeholder customer reviews (you can update later)
- **FAQ Accordion**: Common questions about services
- **Newsletter / CTA Section**: Email signup or "Get Help" call-to-action

### 2. Printer Support Page
- Hero banner for Printer Support Services
- Problem/Solution cards for each issue from your PDF:
  - Ink Cartridges Empty/Low
  - Slow Wi-Fi Printing
  - Misaligned Text
  - Streaky/Ugly Prints
  - Paper Jams
  - Printer Offline
  - Loaded Queue
  - Virtual Printer Issues

### 3. Wi-Fi Support Page
- Hero banner for Wi-Fi Support Services
- Problem/Solution cards:
  - Slow Wi-Fi Speed
  - Intermittent Connection Drops
  - Weak Signal / Dead Spots
  - Network Not Showing Up
  - Incorrect Password
  - Security Concerns / Unauthorized Access
  - Router Overheating
  - Incompatible Router Settings

### 4. Computer Support Page
- Hero banner for Computer Support Services
- Problem/Solution cards:
  - Slow Performance
  - Software Crashes
  - Virus & Malware
  - Internet Connectivity
  - Hardware Failures
  - Blue Screen of Death (BSOD)
  - Data Loss / Corruption
  - Overheating

### 5. Email Support Page
- Hero banner for Email Support Services
- Overview of email support outsourcing services
- Email security section (91% of cyberattacks start with email)
- Support process flow: Receive → Analyze → Resolve → Escalate → Follow-up
- Supported email providers (AOL, Gmail, Yahoo, Outlook, Cox.net)

### 6. Contact Us Page
- Contact form (name, email, phone, service type, message)
- Company contact info and working hours
- Map or location placeholder

---

## Full Support System (requires Supabase)
- **Contact Form**: Submissions stored in a Supabase database table
- **Support Tickets**: Users can submit and track support requests
- **Live Chat Widget**: A floating chat bubble on all pages for quick inquiries
- **Admin View**: Simple dashboard to view/manage submitted tickets

---

## Design & Branding
- **Color scheme**: Dark navy/blue primary with orange/amber accents (matching Reove PDF branding)
- **Typography**: Clean, modern sans-serif fonts
- **Layout**: Professional, polished look with smooth scroll animations
- **Responsive**: Fully mobile-friendly design
- **Sticky Header**: Logo + navigation with phone number CTA
- **Footer**: Company info, quick links, social media placeholders

---

## Implementation Phases
1. **Phase 1**: Home page + navigation + footer + branding/theme setup
2. **Phase 2**: All 4 service detail pages with content from PDFs
3. **Phase 3**: Contact page with form + Supabase backend for storing submissions
4. **Phase 4**: Support ticket system + live chat widget + admin dashboard

