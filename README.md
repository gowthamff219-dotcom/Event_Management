# Aura - Premium Event Management

A modern, cinematic, full-stack website built for a premium event management company. 

## Features

- **Cinematic Experience**: Full-screen looping YouTube background hero section with elegant scroll indicators.
- **Premium Design System**: Sophisticated color palette (Matte Black, Charcoal, Champagne Gold) with high-end typography (Playfair Display & Inter).
- **Responsive Animations**: Subtle, luxurious scroll reveals, hover effects, and page transitions using Framer Motion.
- **Functional Booking System**: Complete front-end contact form connected to a local SQLite database via Prisma ORM.
- **Protected Admin Dashboard**: Secure dashboard to view, manage, and track client inquiries.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React & React Icons
- **Database**: SQLite
- **ORM**: Prisma

## Getting Started

First, install the dependencies:

```bash
npm install
```

Next, generate the Prisma client and push the schema to the database:

```bash
npx prisma db push
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the public website.

## Admin Dashboard

To access the admin dashboard:
1. Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)
2. Log in using the password: `admin123`

## Structure

- `src/app/page.tsx` - The cinematic home page.
- `src/app/api/*` - Backend API routes for authentication and inquiries.
- `src/components/*` - Reusable UI components (Navbar, Footer, Hero).
- `prisma/schema.prisma` - Database schema definition.

## License

MIT
