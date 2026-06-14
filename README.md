DocAppoint: Doctor Appointment Manager
DocAppoint is a modern, responsive web application built with Next.js that streamlines the process of finding and booking appointments with vetted medical professionals. It features a secure authentication system, intuitive dashboard management, and a seamless user experience for patients.

Live Site URL: https://your-live-site-url.vercel.app

🌟 Key Features
Seamless Booking System: Easily browse medical specialists, view availability, and schedule appointments with a few clicks.

Secure Authentication: Powered by Better Auth (JWT/Session), ensuring user data privacy and seamless protected routing.

Personalized Dashboard: Manage your appointments (update/delete) and personal profile from a dedicated user area.

Dynamic Search & Filtering: Quickly find doctors by name or specialty using optimized client-side search.

Responsive & Accessible UI: Built with a modern design system ensuring a consistent experience across mobile, tablet, and desktop devices.

🚀 Quick Start
Follow these steps to set up the project locally.

1. Prerequisites
Ensure you have Node.js (v18+) and npm/yarn/pnpm installed.

2. Installation
Clone the repository and install the dependencies:

Bash
git clone https://github.com/yourusername/docappoint-client.git
cd docappoint-client
npm install
3. Environment Variables
Create a .env file in the root directory and configure the following:

Code snippet
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
NEXT_PUBLIC_AUTH_SECRET=your_secret_key
# Add other required API/Auth keys here
4. Running the Project
Start the development server:

Bash
npm run dev
Open http://localhost:3000 in your browser.

🛠 Tech Stack
Frontend: Next.js (App Router), Tailwind CSS, Framer Motion

Components: HeroUI (NextUI)

State Management: TanStack Query (React Query)

Authentication: Better Auth (JWT)

Icons: React Icons

Deployment: Vercel

📂 Project Structure
Plaintext
├── src/
│   ├── app/           # Next.js App Router (Pages & Layouts)
│   ├── components/    # Reusable UI components (Navbar, Footer, Cards)
│   ├── hooks/         # Custom hooks for auth & API interaction
│   ├── lib/           # Utility functions and config
│   └── styles/        # Global CSS and Tailwind directives
├── public/            # Static assets
└── package.json
📝 Contributing
Contributions are welcome! Please follow these steps for larger changes:

Fork the repository.

Create your feature branch (git checkout -b feature/amazing-feature).

Commit your changes (ensure meaningful commit messages).

Push to the branch.

Open a Pull Request.