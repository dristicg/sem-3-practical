import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🏨 Welcome to Hotel Booking App</h1>
      <p>Find your perfect stay anywhere in India.</p>

      {/* Button to go to /hotel */}
      <Link
        href="/hotel"
        style={{
          display: "inline-block",
          marginTop: "20px",
          backgroundColor: "#0070f3",
          color: "white",
          padding: "12px 24px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        View Hotels →
      </Link>
    </main>
  );
}
