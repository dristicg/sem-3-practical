export const metadata = {
  title: "Hotel Booking | Next.js Demo",
  description: "Browse and view hotel details easily with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", margin: "0", padding: "20px" }}>
        <header style={{ marginBottom: "20px", borderBottom: "1px solid #ddd" }}>
          <h1>🏨 Hotel Booking App</h1>
          <p>Find your perfect stay</p>
        </header>
        {children}
      </body>
    </html>
  );
}
