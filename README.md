# Subscription Pricing Page

A beautiful, responsive pricing page built with Next.js 14, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Responsive design that works on all devices
- Three pricing tiers with highlighted "most popular" option
- Clean, modern UI with Tailwind CSS
- TypeScript for type safety
- Component-based architecture
- Semantic HTML5 markup

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

## Project Structure

```
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts       # Health check endpoint
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── PricingCard.tsx        # Pricing card component
│   └── ui/
│       └── CheckIcon.tsx      # Check icon component
├── lib/
│   └── data.ts                # Pricing plans data
├── public/                    # Static assets
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── README.md                  # Project documentation
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## Customization

You can easily customize the pricing plans by editing the `pricingPlans` array in `lib/data.ts`. The component will automatically update to reflect your changes.

To modify the styling, update the Tailwind CSS classes in the components or adjust the theme in `tailwind.config.ts`.