import Link from "next/link";

const hotels = [
  { id: 1, name: "Ocean View Resort", location: "Goa", price: "₹4500/night" },
  { id: 2, name: "Mountain Bliss Retreat", location: "Manali", price: "₹3200/night" },
  { id: 3, name: "City Comfort Inn", location: "Mumbai", price: "₹2800/night" },
];

export default function HotelListPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h2>🏨 Available Hotels</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {hotels.map((hotel) => (
          <li
            key={hotel.id}
            style={{
              marginBottom: "20px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <h3>{hotel.name}</h3>
            <p>📍 {hotel.location}</p>
            <p>💰 {hotel.price}</p>
            <Link
              href={`/hotel/${hotel.id}`}
              style={{
                color: "#0070f3",
                textDecoration: "underline",
                fontWeight: "500",
              }}
            >
              View Details →
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: "20px",
          color: "#0070f3",
          textDecoration: "underline",
        }}
      >
        ← Back to Home
      </Link>
    </main>
  );
}
