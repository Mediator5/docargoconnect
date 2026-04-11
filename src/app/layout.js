import './globals.css';

export const metadata = {
  title: 'D&O Cargo Connect | Freight Forwarding & Global Logistics',
  description: 'Personalized freight forwarding for small-to-medium businesses. Air, ocean & road freight — customs clearance, warehousing, door-to-door delivery. Houston, TX.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=Barlow+Condensed:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
