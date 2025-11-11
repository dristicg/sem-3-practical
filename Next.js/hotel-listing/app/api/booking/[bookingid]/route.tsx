import { NextResponse } from "next/server";

// Reuse same in-memory bookings array (simulate DB)
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

// 🟢 GET /api/booking/[bookingid] → Fetch single booking
export async function GET(
  request: Request,
  { params }: { params: { bookingid: string } }
) {
  const booking = bookings.find((b) => b.id.toString() === params.bookingid);
  if (!booking) {
    return NextResponse.json(
      { success: false, message: "Booking not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data: booking });
}

// 🔴 DELETE /api/booking/[bookingid] → Delete booking
export async function DELETE(
  request: Request,
  { params }: { params: { bookingid: string } }
) {
  const index = bookings.findIndex((b) => b.id.toString() === params.bookingid);

  if (index === -1) {
    return NextResponse.json(
      { success: false, message: "Booking not found" },
      { status: 404 }
    );
  }

  const deleted = bookings.splice(index, 1);

  return NextResponse.json({
    success: true,
    message: "Booking deleted successfully",
    deleted: deleted[0],
  });
}
