import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    console.log("[BarakoBrews Contact Message Received]:", data);

    if (webhookUrl) {
      try {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sheetName: "Contact Messages",
            ...data,
          }),
        });

        const result = await response.json();
        return NextResponse.json({ success: true, googleSheet: result });
      } catch (err) {
        console.error("Google Sheet webhook error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Contact message received successfully",
    });
  } catch (error) {
    console.error("Error processing contact API:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit message" },
      { status: 500 }
    );
  }
}
