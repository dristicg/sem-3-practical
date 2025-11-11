import { NextResponse } from "next/server";

// Temporary in-memory bookings data
let bookings: {
  id: number;
  name: string;
  hotel: string;
  nights: number;
  totalPrice: number;
}[] = [
  { id: 1, name: "Riya Sharma", hotel: "Ocean View Resort", nights: 2, totalPrice: 9000 },
  { id: 2, name: "Aarav Mehta", hotel: "Mountain Bliss Retreat", nights: 3, totalPrice: 9600 },
];

// 🟢 GET /api/booking → Fetch all bookings
export async function GET() {
  return NextResponse.json({
    success: true,
    data: bookings,
  });
}

// 🟡 POST /api/booking → Create a new booking
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, hotel, nights, totalPrice } = body;

    if (!name || !hotel || !nights || !totalPrice) {
      return NextResponse.json(
        { success: false, message: "All booking fields are required." },
        { status: 400 }
      );
    }

    const newBooking = {
      id: Date.now(),
      name,
      hotel,
      nights,
      totalPrice,
    };

    bookings.push(newBooking);

    return NextResponse.json({
      success: true,
      message: "Booking created successfully",
      data: newBooking,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error creating booking" },
      { status: 500 }
    );
  }
}
