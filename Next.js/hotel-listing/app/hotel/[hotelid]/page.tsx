import { notFound } from "next/navigation";

const hotels = [
  { id: 1, name: "Ocean View Resort", location: "Goa", price: "₹4500/night", description: "Beautiful beachfront resort with ocean-facing rooms." },
  { id: 2, name: "Mountain Bliss Retreat", location: "Manali", price: "₹3200/night", description: "Enjoy mountain views and cozy fireplaces in every suite." },
  { id: 3, name: "City Comfort Inn", location: "Mumbai", price: "₹2800/night", description: "Modern amenities in the heart of Mumbai city." },
];

export default function HotelDetailsPage({ params }: { params: { hotelid: string } }) {
  const hotel = hotels.find((h) => h.id.toString() === params.hotelid);
  if (!hotel) return notFound();

  return (
    <main style={{ padding: "40px" }}>
      <h2>{hotel.name}</h2>
      <p>📍 {hotel.location}</p>
      <p>💰 {hotel.price}</p>
      <p>📝 {hotel.description}</p>
      <a href="/hotel" style={{ color: "#0070f3", textDecoration: "underline" }}>
        ← Back to Hotels
      </a>
    </main>
  );
}
