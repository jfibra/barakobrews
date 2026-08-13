import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    console.log("[BarakoBrews Direct Booking Received]:", data);

    if (webhookUrl) {
      try {
        const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sheetName: "Bookings",
            timestamp,
            ...data,
          }),
          redirect: "follow",
        });

        const textResult = await response.text();
        let jsonResult;
        try {
          jsonResult = JSON.parse(textResult);
        } catch {
          jsonResult = { text: textResult };
        }
        return NextResponse.json({ success: true, googleSheet: jsonResult });
      } catch (err) {
        console.error("Google Sheet webhook error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Booking request received successfully",
    });
  } catch (error) {
    console.error("Error processing booking API:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit booking" },
      { status: 500 }
    );
  }
}
