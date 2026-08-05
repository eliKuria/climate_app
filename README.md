🌤️ SkyE Climate App

(A sleek, modern weather dashboard built for performance and aesthetics)

Overview

SkyE Climate App is a highly responsive, design-centric weather visualization platform. It delivers real-time weather conditions, comprehensive 5-day forecasts, and dynamic temperature trends in a clean, distraction-free interface. Engineered with a strictly typed architecture and optimized data-fetching strategies, SkyE ensures lightning-fast updates, smart caching, and a seamless user experience.

Key Features

🌍 Real-Time Climate Data: Instant access to current conditions including temperature, humidity, wind speed, pressure, and sunrise/sunset times.

📈 Interactive Visualizations: Fluid, responsive charts mapping out daily temperature trends for easy visual consumption.

🔍 Smart City Search: A streamlined, command-palette style search interface to quickly locate global cities.

⭐ Favorites Management: Save and quickly access weather data for your most visited locations.

⚡ Optimized Performance: Intelligent API request caching and state management to reduce network calls and ensure a snappy interface.

🛠️ Tech Stack

This project leverages modern web technologies to deliver a robust and scalable application:

Language: TypeScript (End-to-end type safety)

Framework/Build Tool: React with Vite

Data Fetching & Caching: TanStack Query (React Query)

Styling: Tailwind CSS

UI Components: shadcn/ui (Accessible, customizable components)

Charts & Visualizations: Recharts

Weather Data: OpenWeather API

Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

Prerequisites

Node.js (v18 or higher recommended)

npm or yarn or pnpm

An OpenWeather API Key (Get one free here)

Installation

Clone the repository:

git clone https://github.com/elikuria/climate_app.git
cd climate_app



Install dependencies:

npm install
# or yarn install
# or pnpm install



Set up Environment Variables:

Create a .env file in the root directory.

Add your OpenWeather API key:

VITE_OPENWEATHER_API_KEY=your_api_key_here



Run the development server:

npm run dev



Open http://localhost:5173 (or the port provided in your terminal) to view it in the browser.

Deployment

To build the app for production:

npm run build



This will generate a dist folder containing the optimized production files, which can be deployed to platforms like Netlify, Vercel, or GitHub Pages.

Note: Remember to add your VITE_OPENWEATHER_API_KEY to the Environment Variables settings in your chosen hosting provider.


Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
